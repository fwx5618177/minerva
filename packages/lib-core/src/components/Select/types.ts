export interface SelectOption {
  label: string;
  value: string | number;
  disabled?: boolean;
  icon?: React.ReactNode;
  [key: string]: any;
}

export interface SelectProps {
  options: SelectOption[];
  value?: string | number;
  defaultValue?: string | number;
  onChange?: (value: string | number) => void;
  onSelect?: (option: SelectOption) => void;
  placeholder?: string;
  loading?: boolean;
  error?: boolean;
  helperText?: string;
  disabled?: boolean;
  multiple?: boolean;
  searchable?: boolean;
  clearable?: boolean;
  maxHeight?: number;
  virtualScroll?: boolean;
  className?: string;
  renderOption?: (option: SelectOption) => React.ReactNode;
  filterOption?: (inputValue: string, option: SelectOption) => boolean;
}
