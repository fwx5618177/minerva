export interface TimePickerProps {
  value?: Date;
  defaultValue?: Date;
  onChange?: (date: Date) => void;
  format?: string; // 'HH:mm:ss' | 'hh:mm:ss a' | 'HH:mm' | 'hh:mm a'
  use12Hours?: boolean;
  placeholder?: string;
  disabled?: boolean;
  clearable?: boolean;
  size?: "small" | "medium" | "large";
  className?: string;
  minTime?: Date;
  maxTime?: Date;
  showSecond?: boolean;
  hourStep?: number;
  minuteStep?: number;
  secondStep?: number;
}

export interface TimeUnit {
  value: number;
  disabled: boolean;
  label: string;
}

export interface TimePickerPanelProps extends TimePickerProps {
  onTimeChange: (
    type: "hour" | "minute" | "second" | "ampm",
    value: number,
  ) => void;
  visible: boolean;
}
