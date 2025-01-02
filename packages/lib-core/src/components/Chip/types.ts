export interface ChipProps {
  label: string;
  variant?: "filled" | "outlined" | "soft";
  color?:
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "warning"
    | "info";
  size?: "small" | "medium" | "large";
  icon?: React.ReactNode;
  avatar?: React.ReactNode;
  onDelete?: (e: React.MouseEvent<HTMLDivElement>) => void;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
  disabled?: boolean;
  className?: string;
  deleteIcon?: React.ReactNode;
  clickable?: boolean;
  loading?: boolean;
  selected?: boolean;
}
