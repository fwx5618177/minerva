import type { TooltipProps } from "@components/Tooltip";

type TooltipVariant = Pick<
  TooltipProps,
  "content" | "variant" | "shape" | "arrow"
>;

export interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Icon element to be displayed */
  icon: React.ReactNode;
  /** Button variant style */
  variant?: "primary" | "secondary" | "success" | "warning" | "error" | "info";
  /** Button size */
  size?: "small" | "medium" | "large";
  /** Button shape */
  shape?: "circle" | "square";
  /** Whether the button is disabled */
  disabled?: boolean;
  /** Whether the button is in loading state */
  loading?: boolean;
  /** Whether the button is in active state */
  active?: boolean;
  /** Additional CSS class names */
  className?: string;
  /** Custom icon color */
  color?: string;
  /** Custom active state color */
  activeColor?: string;
  /** Custom background color */
  bgColor?: string;
  /** Custom hover state background color */
  hoverColor?: string;
  /** Custom fill color */
  fillColor?: string;
  /** Tooltip configuration */
  tooltip?: TooltipVariant;
  /** Whether to show tooltip */
  showTooltip?: boolean;
  /** Accessibility label for the button */
  ariaLabel?: string;
}
