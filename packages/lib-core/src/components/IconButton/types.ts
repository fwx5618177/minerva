export interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ReactNode;
  variant?: "primary" | "secondary" | "success" | "warning" | "error" | "info";
  size?: "small" | "medium" | "large";
  shape?: "circle" | "square" | "rounded";
  disabled?: boolean;
  loading?: boolean;
  className?: string;
  color?: string;
  bgColor?: string;
  hoverColor?: string;
  activeColor?: string;
  fillColor?: string;
  showTooltip?: boolean;
  tooltipProps?: Partial<TooltipProps>;
  ripple?: boolean;
  ariaLabel?: string;
}
