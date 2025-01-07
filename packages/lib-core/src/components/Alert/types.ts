export type AlertVariant = "info" | "success" | "warning" | "error";
export type AlertSize = "small" | "medium" | "large";
export type AlertType = "default" | "outlined" | "filled";

export interface AlertProps {
  /** Alert的标题 */
  title?: React.ReactNode;
  /** Alert的内容 */
  children?: React.ReactNode;
  /** Alert的类型 */
  variant?: AlertVariant;
  /** Alert的尺寸 */
  size?: AlertSize;
  /** Alert的样式类型 */
  type?: AlertType;
  /** 是否显示图标 */
  showIcon?: boolean;
  /** 自定义图标 */
  icon?: React.ReactNode;
  /** 是否可关闭 */
  closable?: boolean;
  /** 自定义关闭图标 */
  closeIcon?: React.ReactNode;
  /** 关闭时的回调 */
  onClose?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  /** 是否显示动画效果 */
  animation?: boolean;
  /** 自定义动画名称 */
  animationName?: "slideIn" | "fadeIn" | "bounce" | "zoom";
  /** 自定义样式类名 */
  className?: string;
  /** 自定义样式 */
  style?: React.CSSProperties;
  /** 操作区域 */
  action?: React.ReactNode;
  /** 是否显示边框 */
  outlined?: boolean;
  /** 是否填充背景色 */
  filled?: boolean;
  /** Banner模式(适合页面顶部通知) */
  banner?: boolean;
  /** 是否显示阴影 */
  elevation?: boolean;
  /** 是否圆角 */
  rounded?: boolean;
  /** 自定义圆角大小 */
  borderRadius?: number | string;
  /** 是否可以展开收起 */
  collapsible?: boolean;
  /** 默认是否展开 */
  defaultExpanded?: boolean;
  /** 展开收起的回调 */
  onExpand?: (expanded: boolean) => void;
}
