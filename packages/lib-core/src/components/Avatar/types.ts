export interface AvatarProps {
  src?: string;
  name?: string;
  shape?: "circle" | "square" | "rounded";
  size?: "small" | "medium" | "large";
  className?: string;
  stacked?: boolean;
}

export interface AvatarGroupProps {
  count?: number;
  className?: string;
  children?: React.ReactNode;
}
