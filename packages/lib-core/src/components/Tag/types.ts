export type TagVariant =
  | "default"
  | "primary"
  | "success"
  | "warning"
  | "error"
  | "info";
export type TagSize = "small" | "medium" | "large";
export type TagShape = "square" | "rounded" | "circle";

export interface TagProps {
  /** Tag的文本内容 */
  children?: React.ReactNode;
  /** Tag的变体样式 */
  variant?: TagVariant;
  /** Tag的尺寸 */
  size?: TagSize;
  /** Tag的形状 */
  shape?: TagShape;
  /** 是否可关闭 */
  closable?: boolean;
  /** 关闭按钮的回调 */
  onClose?: (e: React.MouseEvent<HTMLElement>) => void;
  /** 是否可点击 */
  clickable?: boolean;
  /** 点击事件回调 */
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  /** 自定义图标 */
  icon?: React.ReactNode;
  /** 是否显示边框 */
  bordered?: boolean;
  /** 是否显示阴影 */
  elevation?: boolean;
  /** 自定义背景色 */
  bgColor?: string;
  /** 自定义文字颜色 */
  textColor?: string;
  /** 自定义边框颜色 */
  borderColor?: string;
  /** 自定义类名 */
  className?: string;
  /** 自定义样式 */
  style?: React.CSSProperties;
  /** 是否禁用 */
  disabled?: boolean;
  /** 自定义关闭图标 */
  closeIcon?: React.ReactNode;
  /** 是否显示波纹效果 */
  ripple?: boolean;
}
