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
 * Popper type options - simplified to most common use cases
 */
export type PopperType =
  | "default" // 默认弹出层
  | "menu" // 菜单类型
  | "select" // 选择器类型
  | "tooltip"; // 提示类型

/**
 * Popper size options
 */
export type PopperSize = "small" | "medium" | "large";

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

  /** Whether the popper is visible */
  visible: boolean;

  /** Children content */
  children: React.ReactNode;

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

  /** Custom popper styles */
  popperStyle?: PopperCustomStyle;

  /** Size variant */
  size?: "small" | "medium" | "large";

  /** Whether to allow text wrapping */
  multiline?: boolean;

  /** Trigger mode */
  trigger?: PopperTrigger;

  /** Callback when visibility changes */
  onVisibleChange?: (visible: boolean) => void;
  /** 是否允许内容滚动 */
  scrollable?: boolean;

  /** 最大高度 */
  maxHeight?: number | string;
}

export interface PopperCustomStyle {
  /** Background color */
  backgroundColor?: string;
  /** Text color */
  color?: string;
  /** Width */
  width?: number | string;
  /** Height */
  height?: number | string;
  /** Max width */
  maxWidth?: number | string;
  /** Max height */
  maxHeight?: number | string;
  /** Min width */
  minWidth?: number | string;
  /** Min height */
  minHeight?: number | string;
  /** Padding */
  padding?: number | string;
}

export type PopperTrigger =
  | "hover"
  | "click"
  | "contextMenu"
  | "focus"
  | "manual";
