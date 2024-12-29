export interface StatusIndicatorProps {
  className?: string;
  ariaLabel?: string;
  disabled?: boolean;
  status?: "success" | "error" | "warning" | "info";
  shape?: "circle" | "square" | "rounded";
}
