export interface TextFieldProps {
  name: string; // Name is required
  label: string; // Label is required
  value?: string;
  placeholder?: string;
  helperText?: string;
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
  /** Whether the input is read-only */
  readOnly?: boolean;
  /** Size variant */
  size?: "small" | "medium" | "large";
  /** Suffix content */
  suffix?: React.ReactNode;
  /** Callback fired when the input value changes */
  onChange?: (value: string) => void;
  /** Callback fired when the input loses focus */
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  /** Callback fired when the input gains focus */
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  /** Callback fired when the input key down */
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}
