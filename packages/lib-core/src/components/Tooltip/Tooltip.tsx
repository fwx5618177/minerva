import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
  useEffect,
  useCallback,
} from "react";
import { createPortal } from "react-dom";
import { TooltipProps, TooltipRef, TooltipPlacement } from "./types";
import styles from "./tooltip.module.scss";

const placementMap: Record<
  TooltipPlacement,
  (
    triggerRect: DOMRect,
    tooltipRect: DOMRect,
    offset: [number, number],
  ) => { top: number; left: number }
> = {
  top: (triggerRect, tooltipRect, offset) => ({
    top: triggerRect.top - tooltipRect.height - offset[1],
    left: triggerRect.left + (triggerRect.width - tooltipRect.width) / 2,
  }),
  "top-start": (triggerRect, tooltipRect, offset) => ({
    top: triggerRect.top - tooltipRect.height - offset[1],
    left: triggerRect.left,
  }),
  "top-end": (triggerRect, tooltipRect, offset) => ({
    top: triggerRect.top - tooltipRect.height - offset[1],
    left: triggerRect.right - tooltipRect.width,
  }),
  bottom: (triggerRect, tooltipRect, offset) => ({
    top: triggerRect.bottom + offset[1],
    left: triggerRect.left + (triggerRect.width - tooltipRect.width) / 2,
  }),
  "bottom-start": (triggerRect, tooltipRect, offset) => ({
    top: triggerRect.bottom + offset[1],
    left: triggerRect.left,
  }),
  "bottom-end": (triggerRect, tooltipRect, offset) => ({
    top: triggerRect.bottom + offset[1],
    left: triggerRect.right - tooltipRect.width,
  }),
  left: (triggerRect, tooltipRect, offset) => ({
    top: triggerRect.top + (triggerRect.height - tooltipRect.height) / 2,
    left: triggerRect.left - tooltipRect.width - offset[0],
  }),
  "left-start": (triggerRect, tooltipRect, offset) => ({
    top: triggerRect.top,
    left: triggerRect.left - tooltipRect.width - offset[0],
  }),
  "left-end": (triggerRect, tooltipRect, offset) => ({
    top: triggerRect.bottom - tooltipRect.height,
    left: triggerRect.left - tooltipRect.width - offset[0],
  }),
  right: (triggerRect, tooltipRect, offset) => ({
    top: triggerRect.top + (triggerRect.height - tooltipRect.height) / 2,
    left: triggerRect.right + offset[0],
  }),
  "right-start": (triggerRect, tooltipRect, offset) => ({
    top: triggerRect.top,
    left: triggerRect.right + offset[0],
  }),
  "right-end": (triggerRect, tooltipRect, offset) => ({
    top: triggerRect.bottom - tooltipRect.height,
    left: triggerRect.right + offset[0],
  }),
};

const Tooltip = forwardRef<TooltipRef, TooltipProps>(
  (
    {
      content,
      children,
      open: controlledOpen,
      defaultOpen = false,
      placement = "top",
      variant = "dark",
      shape = "default",
      animation = "fade",
      enterDelay = 200,
      leaveDelay = 0,
      offset = [0, 8],
      disabled = false,
      followCursor = false,
      className = "",
      zIndex = 1500,
      bgColor,
      textColor,
      arrow = false,
      onOpen,
      onClose,
    },
    ref,
  ) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);
    const [position, setPosition] = useState({ top: 0, left: 0 });
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    const triggerRef = useRef<HTMLDivElement>(null);
    const tooltipRef = useRef<HTMLDivElement>(null);
    const enterTimeoutRef = useRef<NodeJS.Timeout>();
    const leaveTimeoutRef = useRef<NodeJS.Timeout>();

    const open = controlledOpen ?? isOpen;

    useImperativeHandle(ref, () => ({
      open: () => setIsOpen(true),
      close: () => setIsOpen(false),
      toggle: () => setIsOpen((prev) => !prev),
    }));

    const updatePosition = useCallback(() => {
      if (!triggerRef.current || !tooltipRef.current) return;

      const triggerRect = triggerRef.current.getBoundingClientRect();
      const tooltipRect = tooltipRef.current.getBoundingClientRect();

      const getPosition = placementMap[placement];
      const newPosition = getPosition(triggerRect, tooltipRect, offset);

      if (followCursor) {
        newPosition.top = cursorPosition.y - tooltipRect.height - offset[1];
        newPosition.left = cursorPosition.x - tooltipRect.width / 2;
      }

      setPosition(newPosition);
    }, [placement, offset, followCursor, cursorPosition]);

    useEffect(() => {
      if (open) {
        updatePosition();
        window.addEventListener("scroll", updatePosition);
        window.addEventListener("resize", updatePosition);
      }

      return () => {
        window.removeEventListener("scroll", updatePosition);
        window.removeEventListener("resize", updatePosition);
      };
    }, [open, updatePosition]);

    const handleMouseEnter = () => {
      if (disabled) return;
      clearTimeout(leaveTimeoutRef.current);
      enterTimeoutRef.current = setTimeout(() => {
        setIsOpen(true);
        onOpen?.();
      }, enterDelay);
    };

    const handleMouseLeave = () => {
      if (disabled) return;
      clearTimeout(enterTimeoutRef.current);
      leaveTimeoutRef.current = setTimeout(() => {
        setIsOpen(false);
        onClose?.();
      }, leaveDelay);
    };

    const handleMouseMove = useCallback(
      (e: MouseEvent) => {
        if (followCursor) {
          setCursorPosition({ x: e.clientX, y: e.clientY });
          updatePosition();
        }
      },
      [followCursor, updatePosition],
    );

    useEffect(() => {
      if (followCursor) {
        document.addEventListener("mousemove", handleMouseMove);
        return () => document.removeEventListener("mousemove", handleMouseMove);
      }
    }, [followCursor, handleMouseMove]);

    return (
      <>
        <div
          ref={triggerRef}
          className={`${styles.tooltipTrigger} ${className}`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {children}
        </div>
        {open &&
          createPortal(
            <div
              ref={tooltipRef}
              className={`
                ${styles.tooltip}
                ${styles[variant]}
                ${styles[shape]}
                ${styles[`placement-${placement}`]}
                ${styles[`animation-${animation}`]}
                ${followCursor ? styles.followCursor : ""}
                ${open ? styles.show : ""}
                ${arrow ? styles.arrow : ""}
              `}
              style={
                {
                  ...(bgColor?.includes("gradient")
                    ? { background: bgColor }
                    : { backgroundColor: bgColor }),
                  color: textColor,
                  zIndex,
                  transform: `translate3d(${position.left}px, ${position.top}px, 0)`,
                } as React.CSSProperties
              }
            >
              {content}
              {arrow && (
                <div
                  className={styles.tooltipArrow}
                  style={{
                    ...(bgColor?.includes("gradient")
                      ? { background: bgColor }
                      : { backgroundColor: bgColor }),
                  }}
                />
              )}
            </div>,
            document.body,
          )}
      </>
    );
  },
);

Tooltip.displayName = "Tooltip";

export default Tooltip;
