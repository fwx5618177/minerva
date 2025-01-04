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
}
