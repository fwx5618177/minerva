export interface SwitchProps {
  /** 开关是否选中 */
  checked?: boolean;
  /** 默认是否选中 */
  defaultChecked?: boolean;
  /** 是否禁用 */
  disabled?: boolean;
  /** 开关大小 */
  size?: "small" | "medium" | "large";
  /** 开关颜色 */
  color?: "primary" | "secondary" | "success" | "warning" | "error" | string;
  /** 开关形状 */
  shape?: "round" | "square";
  /** 开关标签 */
  label?: React.ReactNode;
  /** 标签位置 */
  labelPlacement?: "start" | "end" | "top" | "bottom";
  /** 是否加载中 */
  loading?: boolean;
  /** 是否显示涟漪效果 */
  ripple?: boolean;
  /** 自定义样式 */
  className?: string;
  /** 自定义样式 */
  labelStyle?: React.CSSProperties;
  /** 自定义轨道样式 */
  trackStyle?: React.CSSProperties;
  /** 自定义滑块样式 */
  thumbStyle?: React.CSSProperties;
  /** 值改变时的回调函数 */
  onChange?: (
    checked: boolean,
    event: React.ChangeEvent<HTMLInputElement>,
  ) => void;
  /** 聚焦时的回调函数 */
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  /** 失焦时的回调函数 */
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  /** 自定义图标 */
  icon?: React.ReactNode;
  /** 图标位置 */
  iconPlacement?: "start" | "end";
}
