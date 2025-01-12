export interface ButtonProps {
  variant?:
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "error"
    | "info"
    | "ghost";
  size?: "tiny" | "small" | "medium" | "large";
  shape?: "square" | "rounded" | "circle" | "pill";
  loading?: boolean;
  active?: boolean;
  disabled?: boolean;
  block?: boolean;
  elevation?: boolean;
  animation?: boolean;
  icon?: string;
  iconPosition?: "left" | "right";
  ripple?: boolean;
  outlined?: boolean;
  gradient?: boolean;
  transparent?: boolean;
  borderless?: boolean;
  compact?: boolean;
  uppercase?: boolean;
  lowercase?: boolean;
  capitalize?: boolean;
}
