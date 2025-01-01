export interface BadgeProps {
  children?: React.ReactNode;
  className?: string;
  variant?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "error"
    | "info"
    | "light"
    | "dark";
  size?: "small" | "medium" | "large";
  content?: string | number;
  position?: "top-right" | "top-left" | "bottom-right" | "bottom-left";
  dot?: boolean;
  bgColor?: string;
  textColor?: string;
  borderRadius?: string;
  borderWidth?: string;
  borderColor?: string;
  ariaLabel?: string;
  icon?: React.ReactNode;
}
