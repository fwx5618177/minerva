import { ReactNode } from "react";

export type TimeFormat = "12" | "24";
export type TimePickerSize = "small" | "medium" | "large";
export type TimePickerVariant = "outlined" | "filled" | "standard";

export interface TimeValue {
  hours: number;
  minutes: number;
  seconds?: number;
  meridiem?: "AM" | "PM";
}

export interface TimePickerRenderProps {
  value: TimeValue | null;
  onChange: (value: TimeValue) => void;
}

export interface TimePickerProps {
  /** 当前值 */
  value?: TimeValue | null;
  /** 默认值 */
  defaultValue?: TimeValue;
  /** 时间格式 12/24小时制 */
  format?: TimeFormat;
  /** 是否显示秒选择 */
  showSeconds?: boolean;
  /** 最小可选时间 */
  minTime?: TimeValue;
  /** 最大可选时间 */
  maxTime?: TimeValue;
  /** 禁用状态 */
  disabled?: boolean;
  /** 只读状态 */
  readOnly?: boolean;
  /** 错误状态 */
  error?: boolean;
  /** 错误提示文本 */
  errorText?: string;
  /** 占位符 */
  placeholder?: string;
  /** 组件尺寸 */
  size?: TimePickerSize;
  /** 变体样式 */
  variant?: TimePickerVariant;
  /** 是否可清除 */
  clearable?: boolean;
  /** 自定义时间格式化函数 */
  formatTime?: (value: TimeValue) => string;
  /** 自定义图标 */
  icon?: ReactNode;
  /** 自定义清除图标 */
  clearIcon?: ReactNode;
  /** 自定义弹出层类名 */
  popperClassName?: string;
  /** 自定义输入框类名 */
  inputClassName?: string;
  /** 值变化回调 */
  onChange?: (value: TimeValue | null) => void;
  /** 打开弹出层回调 */
  onOpen?: () => void;
  /** 关闭弹出层回调 */
  onClose?: () => void;
  /** 值校验回调 */
  onValidate?: (value: TimeValue) => boolean;
  /** 自定义渲染输入框 */
  renderInput?: (props: TimePickerRenderProps) => ReactNode;
  /** 自定义渲染弹出内容 */
  renderPopper?: (props: TimePickerRenderProps) => ReactNode;
}

export interface TimePickerPanelProps {
  value: TimeValue | null;
  format: TimeFormat;
  showSeconds: boolean;
  minTime?: TimeValue;
  maxTime?: TimeValue;
  onChange: (value: TimeValue) => void;
}
