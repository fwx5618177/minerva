import type { EmptyProps } from "../Empty";
import type { TextFieldProps } from "../TextField";
import type { PopperProps } from "../Popper";

/**
 * AutoComplete 选项接口
 */
export interface AutoCompleteOption {
  /** 选项显示的文本 */
  label: string;
  /** 选项的值 */
  value: string | number;
  /** 是否禁用 */
  disabled?: boolean;
  /** 是否高亮显示 */
  highlight?: boolean;
  /** 选项图标 */
  icon?: React.ReactNode;
  /** 选项描述 */
  description?: string;
  /** 分组标识 */
  group?: string;
  /** 自定义样式 */
  style?: React.CSSProperties;
}

/**
 * AutoComplete 组件属性接口
 */
export interface AutoCompleteProps {
  /** 名称, 必选 */
  name: string;
  /** 标签, 必选 */
  label: string;
  /** 模式 */
  mode?: "basic" | "custom";
  /** 当前值 */
  value?: string;
  /** 值变化时的回调 */
  onChange?: (value: string) => void;
  /** 选项列表(必选) */
  options: AutoCompleteOption[];
  /** 默认值 */
  defaultValue?: string;
  /** 选择选项时的回调 */
  onSelect?: (option: AutoCompleteOption) => void;
  /** 选项分组函数 */
  groupBy?: (option: AutoCompleteOption) => string;
  /** 是否多选模式 */
  multiple?: boolean;
  /** 多选模式下最多显示的标签数 */
  maxTagCount?: number;
  /** 自定义渲染选项 */
  renderOption?: (option: AutoCompleteOption) => React.ReactNode;
  /** 自定义渲染空状态 */
  renderEmpty?: () => React.ReactNode;
  /** 是否显示加载状态 */
  loading?: boolean;
  /** 输入框属性 */
  textFieldProps?: Omit<
    TextFieldProps,
    "value" | "onChange" | "name" | "label"
  >;
  /** 空状态属性 */
  emptyProps?: Omit<EmptyProps, "children">;
  /** 下拉框属性 */
  popperProps?: Omit<PopperProps, "anchorEl" | "visible" | "children">;
  /** 下拉框位置 */
  placement?: "top" | "bottom" | "left" | "right";
  /** 下拉框偏移量 */
  offset?: PopperProps["offset"];
  /** 下拉框背景色 */
  dropdownBgColor?: string;
  /** 选项高亮背景色 */
  highlightBgColor?: string;
  /** 选项hover背景色 */
  hoverBgColor?: string;
  /** 是否显示动画 */
  animation?: boolean;
  /** 自定义过滤逻辑 */
  filterOption?: (inputValue: string, option: AutoCompleteOption) => boolean;
  /** 自定义排序逻辑 */
  sortOption?: (a: AutoCompleteOption, b: AutoCompleteOption) => number;
  /** 选项点击事件 */
  onOptionClick?: (option: AutoCompleteOption) => void;
  /** 下拉框显示/隐藏事件 */
  onDropdownVisibleChange?: (visible: boolean) => void;
}

/**
 * AutoComplete 输入框属性接口
 */
export interface AutoCompleteInputProps extends TextFieldProps {
  ref?: React.Ref<HTMLInputElement>;
  value: string;
  onKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  onFocus: React.FocusEventHandler<HTMLInputElement>;
  onBlur: React.FocusEventHandler<HTMLInputElement>;
}
