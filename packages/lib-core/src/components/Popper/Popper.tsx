import React, {
  useEffect,
  useRef,
  useState,
  useCallback,
  useMemo,
} from "react";
import { createPortal } from "react-dom";
import type { PopperProps, PopperPlacement } from "./types";
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
    top: anchor.top - popper.height - offset.y,
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
    top: anchor.bottom + offset.y,
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
    left: anchor.left - popper.width - offset.x,
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
    left: anchor.right + offset.x,
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
const PopperArrow = ({ placement }: { placement: PopperPlacement }) => (
  <div className={styles.popperArrow} data-placement={placement}>
    <div className={styles.popperArrowInner} />
  </div>
);

/**
 * Popper Component
 * @param anchorEl - Element to anchor the popper to
 * @param open - Whether the popper is open
 * @param content - Content to be displayed (plain or JSX)
 * @param children - Additional React children (combined with content)
 * @param placement - Placement relative to anchor
 * @param variant - Visual variant
 * @param type - Functional type
 * @param offset - Position offset
 * @param animation - Animation settings
 * @param arrow - Show arrow indicator
 * @param zIndex - Z-index level
 * @param onClickAway - Click outside handler
 * @param className - Custom class name
 * @param style - Custom styles
 * @param tabIndex - Focus management
 * @param ariaLabel - Accessibility label
 */
const Popper = ({
  anchorEl,
  open,
  content,
  children,
  placement = "bottom",
  variant = "default",
  type = "popover",
  offset = { x: 0, y: 8 },
  animation = { duration: 200, easing: "ease" },
  arrow = false,
  zIndex = 1000,
  onClickAway,
  className = "",
  style,
  tabIndex = 0,
  ariaLabel,
}: PopperProps) => {
  const popperRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const getPosition = useMemo(() => POSITION_MAP[placement], [placement]);

  // Handle outside click
  useEffect(() => {
    if (!open || !onClickAway) return;

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
  }, [open, anchorEl, onClickAway]);

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
    if (!open || !anchorEl) return;

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
  }, [open, anchorEl, updatePosition]);

  // Combine content
  const contentNode = useMemo(() => {
    if (!content && !children) return null;
    return (
      <>
        {typeof content === "string" ? <div>{content}</div> : content}
        {children}
      </>
    );
  }, [content, children]);

  if (!open) return null;

  return createPortal(
    <div
      ref={popperRef}
      className={`
        ${styles.popper}
        ${styles[variant]}
        ${styles[type]}
        ${open ? styles.open : ""}
        ${className}
      `}
      style={{
        ...style,
        position: "absolute",
        top: position.top,
        left: position.left,
        zIndex,
        transitionDuration: `${animation.duration}ms`,
        transitionTimingFunction: animation.easing,
      }}
      role="dialog"
      tabIndex={tabIndex}
      aria-hidden={!open}
      aria-label={ariaLabel}
    >
      {contentNode}
      {arrow && <PopperArrow placement={placement} />}
    </div>,
    document.body,
  );
};

export default React.memo(Popper);
