export interface RadioProps {
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  name?: string;
  value?: string | number;
  onChange?: (
    checked: boolean,
    event: React.ChangeEvent<HTMLInputElement>,
  ) => void;
  size?: "small" | "medium" | "large";
  type?: "default" | "primary" | "success" | "warning" | "error";
  shape?: "circle" | "square" | "rounded";
  label?: string;
  className?: string;
  color?: string;
  bgColor?: string;
  required?: boolean;
  error?: boolean;
  errorIcon?: React.ReactNode;
  errorMessage?: string;
  helperText?: string;
  labelPlacement?: "start" | "end" | "top" | "bottom";
  ref?: React.Ref<HTMLInputElement>;
}

export interface RadioGroupProps {
  value?: string | number;
  defaultValue?: string | number;
  name?: string;
  onChange?: (
    value: string | number,
    event: React.ChangeEvent<HTMLInputElement>,
  ) => void;
  disabled?: boolean;
  children?: React.ReactNode;
  className?: string;
  direction?: "horizontal" | "vertical";
  size?: "small" | "medium" | "large";
  error?: boolean;
  helperText?: string;
  required?: boolean;
  color?: string;
}
