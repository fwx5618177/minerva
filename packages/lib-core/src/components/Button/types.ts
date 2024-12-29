export interface ButtonProps {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "warning" | "error" | "retry" | "back";
  size?: "small" | "medium" | "large" | "xlarge";
  ariaLabel?: string;
  disabled?: boolean;
  borderRadius?: "none" | "small" | "medium" | "large" | "circle" | "square";
}
