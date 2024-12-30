export interface CheckboxProps {
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  indeterminate?: boolean;
  name?: string;
  onChange?: (
    checked: boolean,
    event: React.ChangeEvent<HTMLInputElement>,
  ) => void;
  shape?: "square" | "circle" | "rounded";
  size?: "small" | "medium" | "large";
  label?: string;
  className?: string;
  checkmarkColor?: string;
  boxColor?: string;
  boxBorderColor?: string;
  icon?: React.ReactNode;
  required?: boolean;
  error?: boolean;
  errorIcon?: React.ReactNode;
  helperText?: string;
  labelPlacement?: "start" | "end" | "top" | "bottom";
  ref?: React.Ref<HTMLInputElement>;
}
