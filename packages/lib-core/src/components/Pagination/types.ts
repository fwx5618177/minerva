import { ReactNode, CSSProperties } from "react";

/**
 * 分页组件的类型定义
 * @typedef {Object} PaginationProps
 */
export interface PaginationProps {
  /**
   * 当前页码
   * @default 1
   * @type {number}
   * @example
   * ```jsx
   * <Pagination current={1} />
   * ```
   */
  current?: number;

  /**
   * 数据总数
   * @default 0
   * @type {number}
   * @example
   * ```jsx
   * <Pagination total={100} />
   * ```
   */
  total?: number;

  /**
   * 每页条数
   * @default 10
   * @type {number}
   * @example
   * ```jsx
   * <Pagination pageSize={20} />
   * ```
   */
  pageSize?: number;

  /**
   * 页码改变的回调函数
   * @param {number} page - 新的页码
   * @param {number} pageSize - 每页条数
   * @returns {void}
   * @example
   * ```jsx
   * <Pagination onChange={(page, pageSize) => console.log(page, pageSize)} />
   * ```
   */
  onChange?: (page: number, pageSize: number) => void;

  /**
   * 是否禁用分页
   * @default false
   * @type {boolean}
   * @example
   * ```jsx
   * <Pagination disabled />
   * ```
   */
  disabled?: boolean;

  /**
   * 是否显示快速跳转输入框
   * @default false
   * @type {boolean}
   * @example
   * ```jsx
   * <Pagination showQuickJumper />
   * ```
   */
  showQuickJumper?: boolean;

  /**
   * 是否显示页码选择器
   * @default false
   * @type {boolean}
   * @example
   * ```jsx
   * <Pagination showSizeChanger />
   * ```
   */
  showSizeChanger?: boolean;

  /**
   * 页码选择器的选项列表
   * @default [10, 20, 50, 100]
   * @type {number[]}
   * @example
   * ```jsx
   * <Pagination pageSizeOptions={[10, 20, 30, 40]} />
   * ```
   */
  pageSizeOptions?: number[];

  /**
   * 自定义页码的渲染函数
   * @param {number} page - 页码
   * @param {string} type - 类型，可能的值: 'page' | 'prev' | 'next' | 'jump-prev' | 'jump-next'
   * @returns {ReactNode}
   * @example
   * ```jsx
   * <Pagination itemRender={(page, type) => type === 'prev' ? '←' : type === 'next' ? '→' : page} />
   * ```
   */
  itemRender?: (
    page: number,
    type: "page" | "prev" | "next" | "jump-prev" | "jump-next",
  ) => ReactNode;

  /**
   * 自定义类名
   * @type {string}
   */
  className?: string;

  /**
   * 自定义样式
   * @type {CSSProperties}
   */
  style?: CSSProperties;

  /**
   * 是否显示总数
   * @default false
   * @type {boolean}
   * @example
   * ```jsx
   * <Pagination showTotal />
   * ```
   */
  showTotal?: boolean;

  /**
   * 自定义总数的渲染函数
   * @param {number} total - 总数
   * @param {[number, number]} range - 当前页的数据范围 [起始序号, 结束序号]
   * @returns {ReactNode}
   * @example
   * ```jsx
   * <Pagination totalRender={(total, range) => `${range[0]}-${range[1]} of ${total} items`} />
   * ```
   */
  totalRender?: (total: number, range: [number, number]) => ReactNode;

  /**
   * 分页组件的尺寸
   * @default "medium"
   * @type {"small" | "medium" | "large"}
   * @example
   * ```jsx
   * <Pagination size="small" />
   * ```
   */
  size?: "small" | "medium" | "large";

  /**
   * 分页按钮的形状
   * @default "rounded"
   * @type {"circle" | "rounded" | "square"}
   * @example
   * ```jsx
   * <Pagination shape="circle" />
   * ```
   */
  shape?: "circle" | "rounded" | "square";

  /**
   * 分页按钮的样式变体
   * @default "filled"
   * @type {"filled" | "outlined" | "text"}
   * @example
   * ```jsx
   * <Pagination variant="outlined" />
   * ```
   */
  variant?: "filled" | "outlined" | "text";

  /**
   * 是否使用简洁模式
   * @default false
   * @type {boolean}
   * @example
   * ```jsx
   * <Pagination simple />
   * ```
   */
  simple?: boolean;

  /**
   * 是否启用响应式布局
   * @default false
   * @type {boolean}
   * @example
   * ```jsx
   * <Pagination responsive />
   * ```
   */
  responsive?: boolean;

  /**
   * 自定义图标配置
   * @type {Object}
   * @property {ReactNode} prev - 上一页图标
   * @property {ReactNode} next - 下一页图标
   * @property {ReactNode} jumpPrev - 向前跳转图标
   * @property {ReactNode} jumpNext - 向后跳转图标
   * @example
   * ```jsx
   * <Pagination icons={{ prev: <LeftIcon />, next: <RightIcon /> }} />
   * ```
   */
  icons?: {
    prev?: ReactNode;
    next?: ReactNode;
    jumpPrev?: ReactNode;
    jumpNext?: ReactNode;
  };
}
