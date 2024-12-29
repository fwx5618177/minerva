export interface TextFieldProps {
  name: string; // Name is required
  label: string; // Label is required
  value: string; // Value is required
  onChange: (value: string) => void; // onChange is required
  placeholder?: string;
  error?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  borderColor?: string;
  hideBorder?: boolean;
  minimal?: boolean;
  borderRadius?: string;
  type?: string;
  showCharCount?: boolean;
  clearable?: boolean;
  fullWidth?: boolean;
  width?: string;
  disabled?: boolean;
  ariaLabel?: string;
}
