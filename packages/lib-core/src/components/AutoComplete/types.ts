import type { TextFieldProps } from "../TextField/types";
import type { PopperProps } from "../Popper/types";

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
  /** 分组标识 */
  group?: string;
  /** 是否高亮显示 */
  highlight?: boolean;
  /** 选项图标 */
  icon?: React.ReactNode;
  /** 选项描述 */
  description?: string;
}

/**
 * AutoComplete 组件属性接口
 */
export interface AutoCompleteProps extends TextFieldProps {
  /** 选项列表 */
  options: AutoCompleteOption[];
  /** 当前值(受控) */
  value?: string;
  /** 默认值(非受控) */
  defaultValue?: string;
  /** 值变化时的回调 */
  onChange?: (value: string) => void;
  /** 选择选项时的回调 */
  onSelect?: (option: AutoCompleteOption) => void;
  /** 自定义筛选逻辑 */
  filterOption?: (inputValue: string, option: AutoCompleteOption) => boolean;
  /** 搜索回调 */
  onSearch?: (value: string) => void;
  /** 防抖延迟时间(ms) */
  debounceTime?: number;
  /** 选项分组函数 */
  groupBy?: (option: AutoCompleteOption) => string;
  /** 多选模式下最多显示的标签数 */
  maxTagCount?: number;
  /** 标签文本最大长度 */
  maxTagTextLength?: number;
  /** 无数据时的提示内容 */
  notFoundContent?: React.ReactNode;
  /** Popper 组件的属性 */
  popperProps?: Partial<PopperProps>;
  /** 下拉框显示状态变化的回调 */
  onDropdownVisibleChange?: (visible: boolean) => void;
  /** 自定义渲染选项 */
  renderOption?: (option: AutoCompleteOption) => React.ReactNode;
  /** 自定义渲染输入框 */
  renderInput?: (props: AutoCompleteInputProps) => React.ReactNode;
  /** 自定义渲染空状态 */
  renderEmpty?: () => React.ReactNode;
  /** 自定义渲染加载状态 */
  renderLoading?: () => React.ReactNode;
  /** 是否多选模式 */
  multiple?: boolean;
  /** 自定义渲染标签 */
  renderTags?: (
    tags: AutoCompleteOption[],
    onClose: (tag: AutoCompleteOption) => void,
  ) => React.ReactNode;
  /** 加载更多数据的回调函数 */
  onLoadMore?: () => Promise<void>;
  /** 是否显示加载状态 */
  loading?: boolean;
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
