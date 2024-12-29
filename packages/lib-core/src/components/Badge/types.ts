export interface BadgeProps {
  children: React.ReactNode;
  variant?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark";
  size?: "small" | "medium" | "large";
  className?: string;
  ariaLabel?: string;
  bgColor?: string;
  textColor?: string;
  icon?: React.ReactNode;
}
