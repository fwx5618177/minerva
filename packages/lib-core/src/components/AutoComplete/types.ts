import type { EmptyProps } from "../Empty";
import type { TextFieldProps } from "../TextField";

/**
 * AutoComplete 选项接口
 */
export interface AutoCompleteOption {
  /** 选项显示的文本(必选) */
  label: string;
  /** 选项的值(必选) */
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
  /** 自定义筛选逻辑 */
  filterOption?: (inputValue: string, option: AutoCompleteOption) => boolean;
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
