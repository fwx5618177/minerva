export interface StatusIndicatorProps {
  className?: string;
  ariaLabel?: string;
  disabled?: boolean;
  status?: "success" | "error" | "warning" | "info";
  shape?: "circle" | "square" | "rounded";
  type?: "online" | "offline" | "away" | "busy" | "custom";
  showLabel?: boolean;
  size?: "small" | "medium" | "large";
  color?: string;
}
