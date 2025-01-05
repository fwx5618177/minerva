import { ReactNode } from "react";

export interface CascaderOption {
  value: string | number;
  label: string | number;
  children?: CascaderOption[];
  disabled?: boolean;
  isLeaf?: boolean;
  loading?: boolean;
  path: CascaderOption[];
}

export interface CascaderProps {
  /** 标签 */
  label: string;
  /** 名称 */
  name: string;
  /** 可选项数据源 */
  options: CascaderOption[];
  /** 当前选中的值 */
  value?: (string | number)[];
  /** 默认选中的值 */
  defaultValue?: (string | number)[];
  /** 选择后的回调 */
  onChange?: (
    value: (string | number)[],
    selectedOptions: CascaderOption[],
  ) => void;
  /** 自定义渲染节点内容 */
  displayRender?: (
    labels: string[],
    selectedOptions: CascaderOption[],
  ) => string;
  /** 是否禁用 */
  disabled?: boolean;
  /** 输入框占位文本 */
  placeholder?: string;
  /** 是否支持清除 */
  allowClear?: boolean;
  /** 次级菜单的展开方式 */
  expandTrigger?: "click" | "hover";
  /** 自定义类名 */
  className?: string;
  /** 是否支持搜索 */
  showSearch?: boolean;
  /** 自定义搜索逻辑 */
  filter?: (inputValue: string, path: CascaderOption[]) => boolean;
  /** 动态加载数据 */
  loadData?: (selectedOptions: CascaderOption[]) => void;
  /** 自定义下拉框样式 */
  dropdownClassName?: string;
  /** 自定义选项渲染 */
  optionRender?: (option: CascaderOption, level: number) => ReactNode;
  /** 组件宽度 */
  width?: number | string;
  /** 最大层级 */
  maxLevel?: number;
  /** 下拉框样式 */
  dropdownStyle?: React.CSSProperties;
  /** 选项样式 */
  optionStyle?: React.CSSProperties;
}

export interface CascaderPanelProps
  extends Omit<CascaderProps, "value" | "defaultValue"> {
  /** 当前选中的路径 */
  activePath?: CascaderOption[];
  /** 面板展开的层级 */
  activeLevel?: number;
  /** 选择某一级时的回调 */
  onLevelSelect?: (option: CascaderOption, level: number) => void;
  maxLevel?: number;
  optionStyle?: React.CSSProperties;
}
