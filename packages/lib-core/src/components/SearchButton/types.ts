export interface SearchButtonProps {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  ariaLabel?: string;
  disabled?: boolean;
  shape?: "circle" | "square" | "rounded";
  variant?: "primary" | "warning" | "error" | "success" | "info";
  animation?: "none" | "expand" | "shrink" | "shake";
  size?: "small" | "medium" | "large" | "xlarge";
  color?: string; // 添加 color 属性
  iconColor?: string;
  bgColor?: string;
  loading?: boolean; // 添加 loading 属性
  children?: React.ReactNode;
}
