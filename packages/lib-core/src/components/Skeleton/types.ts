export type SkeletonVariant =
  | "text"
  | "circular"
  | "rectangular"
  | "rounded"
  | "button"
  | "image"
  | "card";

export type SkeletonAnimation = "pulse" | "wave" | "false";

export interface SkeletonProps {
  /** 骨架屏变体类型 */
  variant?: SkeletonVariant;
  /** 动画效果 */
  animation?: SkeletonAnimation;
  /** 宽度 */
  width?: number | string;
  /** 高度 */
  height?: number | string;
  /** 自定义类名 */
  className?: string;
  /** 是否显示子元素 */
  children?: React.ReactNode;
  /** 是否加载完成 */
  loading?: boolean;
  /** 圆角大小 */
  borderRadius?: number | string;
  /** 自定义样式 */
  style?: React.CSSProperties;
  /** 行数 */
  lines?: number;
  /** 是否显示头像 */
  avatar?: boolean;
  /** 头像大小 */
  avatarSize?: number | string;
  /** 头像形状 */
  avatarShape?: "circle" | "square";
  /** 是否激活交互态 */
  active?: boolean;
  /** 是否显示段落 */
  paragraph?: boolean;
  /** 是否显示标题 */
  title?: boolean;
}
