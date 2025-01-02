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
  onDelete?: () => void;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  deleteIcon?: React.ReactNode;
  clickable?: boolean;
  loading?: boolean;
  selected?: boolean;
}
