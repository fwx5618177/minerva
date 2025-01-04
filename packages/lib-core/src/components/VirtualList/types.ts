export interface VirtualListItem {
  id: string | number;
  metadata?: Record<string, string | number | boolean>;
}

/**
 * VirtualList 组件属性
 */
export interface VirtualListProps {
  /** 列表项数据 */
  items: VirtualListItem[];
  /** 列表项高度(px)，不传则自动计算 */
  itemHeight?: number;
  /** 列表项内边距(px) */
  itemPadding?: number;
  /** 可视区域外预加载的项目数 */
  overscan?: number;
  /** 最大高度(px) */
  maxHeight: number;
  /** 渲染列表项的函数 */
  renderItem: (item: VirtualListItem, index: number) => React.ReactNode;
  /** 自定义类名 */
  className?: string;
  /** 自定义样式 */
  style?: React.CSSProperties;
  /** 加载更多的回调函数 */
  onLoadMore?: () => Promise<void>;
  /** 触发加载更多的阈值(px) */
  loadMoreThreshold?: number;
  /** 是否启用高性能模式,使用 requestAnimationFrame 和 requestIdleCallback 优化渲染 */
  highPerformance?: boolean;
  /** 是否显示加载中状态 */
  loading?: boolean;
}

export interface VirtualItem {
  index: number;
  start: number;
  height: number;
  measureRef?: (el: HTMLElement | null) => void;
}
