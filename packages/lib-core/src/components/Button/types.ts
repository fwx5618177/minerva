export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
  className?: string;
  variant?:
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "error"
    | "retry"
    | "back";
  size?: "small" | "medium" | "large" | "xlarge";
  ariaLabel?: string;
  disabled?: boolean;
  loading?: boolean;
  active?: boolean;
  shape?: "square" | "rounded" | "circle";
  borderRadius?:
    | "none"
    | "small"
    | "medium"
    | "large"
    | "circle"
    | "square"
    | number;
}
