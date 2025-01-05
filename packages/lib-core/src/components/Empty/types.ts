export interface EmptyProps {
  /** 自定义图标 */
  icon?: React.ReactNode;
  /** 描述文字 */
  description?: React.ReactNode;
  /** 自定义类名 */
  className?: string;
  /** 自定义样式 */
  style?: React.CSSProperties;
  /** 底部内容 */
  children?: React.ReactNode;
  /**
   * 是否用 svg 图标
   * @default false
   */
  useSvg?: boolean;

  /**
   * 宽度
   */
  width?: string;
  /**
   * 高度
   */
  height?: string;
  /**
   * 背景颜色
   */
  backgroundColor?: string;
  /**
   * 是否显示阴影
   */
  showShadow?: boolean;
  /**
   * 字体颜色
   */
  color?: string;
}
