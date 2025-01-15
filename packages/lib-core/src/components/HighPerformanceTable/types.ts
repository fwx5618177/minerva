/**
 * 表格单元格值的类型定义
 * 支持多种数据类型，每种类型都有明确的标记
 */
export interface TableCellValue {
  /** 文本类型的值 */
  text: string;
  /** 数字类型的值 */
  number: number;
  /** 布尔类型的值 */
  boolean: boolean;
  /** 日期类型的值 */
  date: Date;
  /** null 值 */
  null: null;
  /** undefined 值 */
  undefined: undefined;
}

/** 表格单元格可能的值类型 */
export type TableDataValue = TableCellValue[keyof TableCellValue];

/**
 * 表格行数据接口
 * 使用字符串索引签名，允许动态的列名
 * 值类型必须是 TableDataValue
 */
export interface TableRow {
  [key: string]: TableDataValue;
}

/**
 * 表格列配置接口
 */
export interface TableColumn {
  /** 列的唯一标识 */
  key: string;
  /** 列标题 */
  title: string;
  /** 列宽度，默认为 100 */
  width?: number;
  /** 是否可排序 */
  sortable?: boolean;
  /** 是否可筛选 */
  filterable?: boolean;
  /** 固定列位置 */
  fixed?: "left" | "right";
  /**
   * 自定义渲染函数
   * @param value - 单元格的值
   * @param record - 行数据
   * @param index - 行索引
   */
  render?: (
    value: TableDataValue,
    record: TableRow,
    index: number,
  ) => React.ReactNode;
}

/**
 * 表格组件属性接口
 */
export interface TableProps {
  /** 表格数据源 */
  data: TableRow[];
  /** 表格列配置 */
  columns: TableColumn[];
  /** 行高，默认为 40 */
  rowHeight?: number;
  /** 表头高度，默认为 50 */
  headerHeight?: number;
  /** 表格宽度，支持数字或百分比 */
  width?: number | string;
  /** 表格高度，支持数字或百分比 */
  height?: number;
  /**
   * 排序回调函数
   * @param key - 排序的列键
   * @param order - 排序方向
   */
  onSort?: (key: string, order: "asc" | "desc" | null) => void;
  /**
   * 筛选回调函数
   * @param key - 筛选的列键
   * @param value - 筛选值
   */
  onFilter?: (key: string, value: TableDataValue) => void;
  /**
   * 滚动回调函数
   * @param scrollTop - 垂直滚动位置
   * @param scrollLeft - 水平滚动位置
   */
  onScroll?: (scrollTop: number, scrollLeft: number) => void;
  /** 表格样式配置 */
  style?: TableStyle;
}

/**
 * 表格状态接口
 */
export interface TableState {
  /** 当前排序的列键 */
  sortKey?: string;
  /** 排序方向 */
  sortOrder?: "asc" | "desc" | null;
  /** 列筛选状态 */
  filters: Record<string, TableDataValue>;
  /** 当前鼠标悬停的行索引 */
  hoveredRow?: number | null;
}

/**
 * WebGL 程序扩展接口
 * 包含着色器程序和相关属性
 */
export interface WebGLProgramExt extends WebGLProgram {
  /** WebGL 程序实例 */
  program: WebGLProgram;
  /** 着色器属性位置记录 */
  attributes: Record<string, number>;
  /** 着色器统一变量位置记录 */
  uniforms: Record<string, WebGLUniformLocation>;
}

/**
 * 表格样式配置接口
 */
export interface TableStyle {
  /** 表格背景色 */
  backgroundColor: string;
  /** 表头文字颜色 */
  headerTextColor: string;
  /** 表头背景色 */
  headerBackgroundColor?: string;
  /** 边框颜色 */
  borderColor?: string;
  /** 文字颜色 */
  textColor?: string;
  /** 字体大小 */
  fontSize?: number;
  /** 鼠标悬停背景色 */
  hoverBackgroundColor?: string;
  /** 斑马纹背景色 */
  stripedBackgroundColor?: string;
}

/**
 * 表格绘制选项接口
 */
export interface DrawTableOptions {
  /** Canvas 元素 */
  canvas: HTMLCanvasElement;
  /** WebGL 上下文 */
  gl: WebGLRenderingContext;
  /** 要绘制的数据 */
  data: TableRow[];
  /** 列配置 */
  columns: TableColumn[];
  /** 行高 */
  rowHeight: number;
  /** 表头高度 */
  headerHeight: number;
  /** 排序状态 */
  sortState: TableState;
  /** 筛选状态 */
  filterState: Record<string, TableDataValue>;
  /** 起始行索引 */
  startIndex: number;
  /** 当前鼠标悬停的行索引 */
  hoveredRow?: number | null;
  /** 表格样式配置 */
  style?: TableStyle;
}
