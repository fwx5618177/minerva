export interface ProgressIndicatorProps {
  type?: "spinner" | "bar" | "wave" | "circle" | "dottedBar";
  size?: "small" | "medium" | "large";
  icon?: React.ReactNode;
  ariaLabel?: string;
  className?: string;
  width?: string;
  full?: boolean;
}
