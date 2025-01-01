import React, {
  useEffect,
  useRef,
  useState,
  useCallback,
  useMemo,
} from "react";
import { createPortal } from "react-dom";
import type { PopperProps, PopperPlacement, PopperType } from "./types";
import styles from "./popper.module.scss";

/**
 * Position calculation map for different placements
 */
const POSITION_MAP: Record<
  PopperPlacement,
  (
    anchorRect: DOMRect,
    popperRect: DOMRect,
    offset: { x: number; y: number },
  ) => { top: number; left: number }
> = {
  top: (anchor, popper, offset) => ({
    top: anchor.top - popper.height - offset.y - 8,
    left: anchor.left + (anchor.width - popper.width) / 2,
  }),
  topStart: (anchor, popper, offset) => ({
    top: anchor.top - popper.height - offset.y,
    left: anchor.left,
  }),
  topEnd: (anchor, popper, offset) => ({
    top: anchor.top - popper.height - offset.y,
    left: anchor.right - popper.width,
  }),
  bottom: (anchor, popper, offset) => ({
    top: anchor.bottom + offset.y + 8,
    left: anchor.left + (anchor.width - popper.width) / 2,
  }),
  bottomStart: (anchor, popper, offset) => ({
    top: anchor.bottom + offset.y,
    left: anchor.left,
  }),
  bottomEnd: (anchor, popper, offset) => ({
    top: anchor.bottom + offset.y,
    left: anchor.right - popper.width,
  }),
  left: (anchor, popper, offset) => ({
    top: anchor.top + (anchor.height - popper.height) / 2,
    left: anchor.left - popper.width - offset.x - 8,
  }),
  leftStart: (anchor, popper, offset) => ({
    top: anchor.top,
    left: anchor.left - popper.width - offset.x,
  }),
  leftEnd: (anchor, popper, offset) => ({
    top: anchor.bottom - popper.height,
    left: anchor.left - popper.width - offset.x,
  }),
  right: (anchor, popper, offset) => ({
    top: anchor.top + (anchor.height - popper.height) / 2,
    left: anchor.right + offset.x + 8,
  }),
  rightStart: (anchor, popper, offset) => ({
    top: anchor.top,
    left: anchor.right + offset.x,
  }),
  rightEnd: (anchor, popper, offset) => ({
    top: anchor.bottom - popper.height,
    left: anchor.right + offset.x,
  }),
};

/**
 * Arrow component for the Popper
 */
const PopperArrow = ({
  placement,
  style,
}: {
  placement: PopperPlacement;
  style?: React.CSSProperties;
}) => (
  <div className={styles.popperArrow} data-placement={placement}>
    <div className={styles.popperArrowInner} style={style} />
  </div>
);

/**
 * Popper Component
 * @param anchorEl - Element to anchor the popper to
 * @param visible - Whether the popper is visible
 * @param children - Additional React children (combined with content)
 * @param placement - Placement relative to anchor
 * @param variant - Visual variant
 * @param type - Functional type
 * @param size - Size variant
 * @param offset - Position offset
 * @param animation - Animation settings
 * @param arrow - Show arrow indicator
 * @param zIndex - Z-index level
 * @param onClickAway - Click outside handler
 * @param className - Custom class name
 * @param style - Custom styles
 * @param popperStyle - Custom popper styles
 * @param tabIndex - Focus management
 * @param ariaLabel - Accessibility label
 * @param multiline - Whether to allow text wrapping
 * @param trigger - Trigger mode
 * @param onVisibleChange - Callback when visibility changes
 */
const Popper = ({
  anchorEl,
  visible,
  children,
  placement = "bottom",
  variant = "default",
  type = "default",
  size = "medium",
  offset = { x: 0, y: 8 },
  animation = { duration: 200, easing: "ease" },
  arrow = false,
  zIndex = 1000,
  onClickAway,
  className = "",
  style,
  popperStyle = {},
  tabIndex = 0,
  ariaLabel,
  multiline = true,
  trigger = "click",
  onVisibleChange,
}: PopperProps) => {
  const popperRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const getPosition = useMemo(() => POSITION_MAP[placement], [placement]);

  // Handle outside click
  useEffect(() => {
    if (!visible || !onClickAway) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        popperRef.current &&
        !popperRef.current.contains(event.target as Node) &&
        anchorEl &&
        !anchorEl.contains(event.target as Node)
      ) {
        onClickAway();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [visible, anchorEl, onClickAway]);

  // Update position with RAF for better performance
  const updatePosition = useCallback(() => {
    if (!anchorEl || !popperRef.current) return;

    requestAnimationFrame(() => {
      const anchorRect = anchorEl.getBoundingClientRect();
      const popperElement = popperRef.current;
      if (!popperElement) return; // Ensure popperElement is not null

      const popperRect = popperElement.getBoundingClientRect();
      const { top: calcTop, left: calcLeft } = getPosition(
        anchorRect,
        popperRect,
        offset,
      );

      // Viewport boundaries
      const viewportWidth = document.documentElement.clientWidth;
      const viewportHeight = document.documentElement.clientHeight;

      let finalLeft = calcLeft;
      let finalTop = calcTop;

      // Boundary checks
      if (finalLeft + popperRect.width > viewportWidth) {
        finalLeft = viewportWidth - popperRect.width;
      }
      if (finalLeft < 0) finalLeft = 0;
      if (finalTop < 0) finalTop = 0;
      if (finalTop + popperRect.height > viewportHeight) {
        finalTop = viewportHeight - popperRect.height;
      }

      setPosition({
        top: finalTop + window.scrollY,
        left: finalLeft + window.scrollX,
      });
    });
  }, [anchorEl, getPosition, offset]);

  // Update position when necessary
  useEffect(() => {
    if (!visible || !anchorEl) return;

    updatePosition();

    // Only listen to scroll events on the document
    const handleScroll = () => {
      if (document.contains(anchorEl)) {
        updatePosition();
      }
    };

    // Minimal event listeners
    window.addEventListener("resize", updatePosition);
    window.addEventListener("scroll", handleScroll, true);

    return () => {
      window.removeEventListener("resize", updatePosition);
      window.removeEventListener("scroll", handleScroll, true);
    };
  }, [visible, anchorEl, updatePosition]);

  // Map of type-specific class names
  const TYPE_CLASS_MAP: Record<PopperType, string> = {
    default: styles.defaultItem,
    menu: styles.menuItem,
    select: styles.selectItem,
    tooltip: styles.tooltipItem,
  };

  // Process children based on type using map
  const processedChildren = useMemo(() => {
    if (!children) return null;

    const typeClass = TYPE_CLASS_MAP[type];
    if (!typeClass) return children;

    return React.Children.map(children, (child) =>
      React.isValidElement(child)
        ? React.cloneElement(child, {
            className: `${typeClass} ${React.isValidElement(child) && child.props.className ? child.props.className : ""}`,
          } as React.HTMLAttributes<HTMLElement>)
        : child,
    );
  }, [children, type]);

  // Combine custom styles with default styles
  const combinedStyles = useMemo(
    () => ({
      ...style,
      position: "absolute" as const,
      top: position.top,
      left: position.left,
      zIndex,
      backgroundColor: popperStyle.backgroundColor,
      color: popperStyle.color,
      width: popperStyle.width,
      height: popperStyle.height,
      maxWidth: popperStyle.maxWidth,
      maxHeight: popperStyle.maxHeight,
      minWidth: popperStyle.minWidth,
      minHeight: popperStyle.minHeight,
      padding: popperStyle.padding,
      transition: `
      opacity ${animation.duration}ms ${animation.easing},
      visibility ${animation.duration}ms ${animation.easing},
      transform ${animation.duration}ms ${animation.easing}
    `,
    }),
    [style, position, zIndex, popperStyle, animation],
  );

  // Arrow styles
  const arrowStyle = useMemo(
    () => ({
      backgroundColor: popperStyle.backgroundColor,
      borderColor: popperStyle.backgroundColor,
    }),
    [popperStyle.backgroundColor],
  );

  useEffect(() => {
    if (!anchorEl) return;

    const handleTrigger = () => {
      if (trigger === "manual") return;
      onVisibleChange?.(!visible);
    };

    const handleMouseEnter = () => {
      if (trigger === "hover") {
        onVisibleChange?.(true);
      }
    };

    const handleMouseLeave = () => {
      if (trigger === "hover") {
        onVisibleChange?.(false);
      }
    };

    const handleFocus = () => {
      if (trigger === "focus") {
        onVisibleChange?.(true);
      }
    };

    const handleBlur = () => {
      if (trigger === "focus") {
        onVisibleChange?.(false);
      }
    };

    const handleContextMenu = (e: MouseEvent) => {
      if (trigger === "contextMenu") {
        e.preventDefault();
        onVisibleChange?.(true);
      }
    };

    if (trigger === "click") {
      anchorEl.addEventListener("click", handleTrigger);
    } else if (trigger === "hover") {
      anchorEl.addEventListener("mouseenter", handleMouseEnter);
      anchorEl.addEventListener("mouseleave", handleMouseLeave);
    } else if (trigger === "focus") {
      anchorEl.addEventListener("focus", handleFocus);
      anchorEl.addEventListener("blur", handleBlur);
    } else if (trigger === "contextMenu") {
      anchorEl.addEventListener("contextmenu", handleContextMenu);
    }

    return () => {
      anchorEl.removeEventListener("click", handleTrigger);
      anchorEl.removeEventListener("mouseenter", handleMouseEnter);
      anchorEl.removeEventListener("mouseleave", handleMouseLeave);
      anchorEl.removeEventListener("focus", handleFocus);
      anchorEl.removeEventListener("blur", handleBlur);
      anchorEl.removeEventListener("contextmenu", handleContextMenu);
    };
  }, [anchorEl, trigger, visible, onVisibleChange]);

  if (!visible) return null;

  return createPortal(
    <div
      ref={popperRef}
      className={`
        ${styles.popper}
        ${styles[variant]}
        ${styles[type]}
        ${styles[size]}
        ${multiline ? styles.multiline : styles.singleline}
        ${visible ? styles.visible : ""}
        ${className}
      `}
      style={combinedStyles}
      role={type === "menu" ? "menu" : "dialog"}
      tabIndex={tabIndex}
      aria-hidden={!visible}
      aria-label={ariaLabel}
    >
      {processedChildren}
      {arrow && <PopperArrow placement={placement} style={arrowStyle} />}
    </div>,
    document.body,
  );
};

export default React.memo(Popper);
