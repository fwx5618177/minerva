/**
 * Popper placement options
 */
export type PopperPlacement =
  | "top"
  | "topStart"
  | "topEnd"
  | "bottom"
  | "bottomStart"
  | "bottomEnd"
  | "left"
  | "leftStart"
  | "leftEnd"
  | "right"
  | "rightStart"
  | "rightEnd";

/**
 * Popper variant options
 */
export type PopperVariant =
  | "default"
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "error";

/**
 * Popper type options
 */
export type PopperType =
  | "popover"
  | "menu"
  | "dropdown"
  | "select"
  | "autocomplete"
  | "datepicker"
  | "colorpicker"
  | "cascader";

/**
 * Position offset configuration
 */
export interface PopperOffset {
  x: number;
  y: number;
}

/**
 * Animation configuration
 */
export interface PopperAnimation {
  /** Duration in milliseconds */
  duration: number;
  /** Timing function */
  easing: string;
}

/**
 * Popper component props
 */
export interface PopperProps {
  /** Element to anchor the popper to */
  anchorEl: HTMLElement | null;

  /** Whether the popper is open */
  open: boolean;

  /** Plain text or JSX for popper content */
  content?: React.ReactNode;

  /** Children (can be extra JSX content) */
  children?: React.ReactNode;

  /** Placement relative to anchor */
  placement?: PopperPlacement;

  /** Visual variant */
  variant?: PopperVariant;

  /** Functional type */
  type?: PopperType;

  /** Position offset */
  offset?: PopperOffset;

  /** Animation settings */
  animation?: PopperAnimation;

  /** Show arrow indicator */
  arrow?: boolean;

  /** Z-index level */
  zIndex?: number;

  /** Click outside handler */
  onClickAway?: () => void;

  /** Custom class name */
  className?: string;

  /** Custom styles */
  style?: React.CSSProperties;

  /** Focus management */
  tabIndex?: number;

  /** Accessibility label */
  ariaLabel?: string;
}
