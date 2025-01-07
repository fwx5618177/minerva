export type DividerVariant = "solid" | "dashed" | "dotted";
export type DividerOrientation = "horizontal" | "vertical";
export type DividerTextAlign = "left" | "center" | "right";

export interface DividerProps {
  /** 分割线的样式变体 */
  variant?: DividerVariant;
  /** 分割线方向 */
  orientation?: DividerOrientation;
  /** 分割线颜色 */
  color?: string;
  /** 分割线粗细 */
  thickness?: number;
  /** 分割线长度(垂直时为高度) */
  length?: number | string;
  /** 分割线两端间距 */
  spacing?: number;
  /** 是否带文字 */
  children?: React.ReactNode;
  /** 文字对齐方式 */
  textAlign?: DividerTextAlign;
  /** 是否带投影 */
  elevation?: boolean;
  /** 自定义类名 */
  className?: string;
  /** 自定义样式 */
  style?: React.CSSProperties;
}
