import { ReactNode } from "react";

export type TooltipPlacement =
  | "top"
  | "top-start"
  | "top-end"
  | "bottom"
  | "bottom-start"
  | "bottom-end"
  | "left"
  | "left-start"
  | "left-end"
  | "right"
  | "right-start"
  | "right-end";

export type TooltipShape = "default" | "rounded" | "thought" | "square";

export type TooltipVariant =
  | "light"
  | "dark"
  | "info"
  | "success"
  | "warning"
  | "error";

export type TooltipAnimation =
  | "fade"
  | "scale"
  | "shift-away"
  | "shift-toward"
  | "perspective";

export interface TooltipProps {
  /** Content to be displayed inside the tooltip */
  content: ReactNode;

  /** The element that triggers the tooltip */
  children: ReactNode;

  /** Whether the tooltip is shown */
  open?: boolean;

  /** Controlled show state */
  defaultOpen?: boolean;

  /** Placement of the tooltip relative to its target */
  placement?: TooltipPlacement;

  /** Visual style variant */
  variant?: TooltipVariant;

  /** Shape of the tooltip */
  shape?: TooltipShape;

  /** Animation style */
  animation?: TooltipAnimation;

  /** Delay before showing tooltip (ms) */
  enterDelay?: number;

  /** Delay before hiding tooltip (ms) */
  leaveDelay?: number;

  /** Offset from the target element */
  offset?: [number, number];

  /** Whether tooltip follows cursor movement */
  followCursor?: boolean;

  /** Custom background color */
  bgColor?: string;

  /** Custom text color */
  textColor?: string;

  /** Custom z-index */
  zIndex?: number;

  /** Whether to show arrow */
  arrow?: boolean;

  /** Whether tooltip is disabled */
  disabled?: boolean;

  /** Custom class name */
  className?: string;

  /** Callback when tooltip shows */
  onOpen?: () => void;

  /** Callback when tooltip hides */
  onClose?: () => void;

  /** ARIA label for the tooltip */
  ariaLabel?: string;
}

export interface TooltipRef {
  open: () => void;
  close: () => void;
  toggle: () => void;
}
