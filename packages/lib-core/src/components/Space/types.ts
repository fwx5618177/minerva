export type SpaceSize = "small" | "medium" | "large";
export type SpaceAlign = "start" | "end" | "center" | "baseline" | "stretch";
export type SpaceDirection = "horizontal" | "vertical";
export type SpaceJustify =
  | "start"
  | "end"
  | "center"
  | "space-around"
  | "space-between"
  | "space-evenly";

export interface SpaceProps {
  /** 对齐方式 */
  align?: SpaceAlign;
  /** 主轴对齐方式 */
  justify?: SpaceJustify;
  /** 间距方向 */
  direction?: SpaceDirection;
  /** 间距大小 */
  size?: SpaceSize | number;
  /** 是否自动换行 */
  wrap?: boolean;
  /** 分隔符 */
  split?: React.ReactNode;
  /** 是否是紧凑模式 */
  compact?: boolean;
  /** 是否占满父元素宽度 */
  block?: boolean;
  /** 自定义类名 */
  className?: string;
  /** 自定义样式 */
  style?: React.CSSProperties;
  /** 子元素 */
  children?: React.ReactNode;
}
