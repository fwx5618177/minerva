import React, { useState, useCallback, useRef, useMemo } from "react";
import { IoClose, IoAdd } from "react-icons/io5";
import { TextField } from "../TextField";
import { Popper } from "../Popper";
import type {
  AutoCompleteProps,
  AutoCompleteOption,
  AutoCompleteInputProps,
} from "./types";
import styles from "./autoComplete.module.scss";
import { VirtualList } from "../VirtualList";
import { ProgressIndicator } from "../ProgressIndicator";
import { Empty } from "../Empty";

// 将 useDebounce 合并到组件文件中
function useDebounce<T extends string>(
  fn: (value: T) => void,
  delay: number,
): (value: T) => void {
  const timeoutRef = useRef<NodeJS.Timeout>();

  return useCallback(
    (value: T) => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        fn(value);
      }, delay);
    },
    [fn, delay],
  );
}

/**
 * AutoComplete 组件
 * @param options - 选项列表
 * @param value - 受控值
 * @param defaultValue - 默认值
 * @param onChange - 值变化时的回调
 * @param onSelect - 选择选项时的回调
 * @param filterOption - 自定义筛选逻辑
 * @param onSearch - 搜索回调
 * @param debounceTime - 防抖时间
 * @param groupBy - 选项分组函数
 * @param multiple - 是否多选模式
 * @param maxTagCount - 多选模式下最多显示的标签数
 * @param renderTags - 自定义渲染标签
 * @param renderOption - 自定义渲染选项
 * @param renderEmpty - 自定义渲染空状态
 * @param renderLoading - 自定义渲染加载状态
 */
const AutoComplete: React.FC<AutoCompleteProps> = ({
  options = [],
  value,
  defaultValue,
  onChange,
  onSelect,
  filterOption,
  onSearch,
  debounceTime = 300,
  groupBy,
  popperProps,
  onDropdownVisibleChange,
  renderOption,
  renderInput,
  renderEmpty,
  renderLoading,
  multiple = false,
  maxTagCount,
  renderTags,
  onFocus,
  onBlur,
  onKeyDown,
  loading,
  onLoadMore,
  ...textFieldProps
}) => {
  // State
  const [open, setOpen] = useState(false);
  const [innerValue, setInnerValue] = useState(defaultValue || "");
  const [selectedTags, setSelectedTags] = useState<AutoCompleteOption[]>([]);
  const [focusedIndex, setFocusedIndex] = useState(-1);

  // Refs
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Debounced search
  const debouncedSearch = useDebounce((searchValue: string) => {
    onSearch?.(searchValue);
  }, debounceTime);

  // Filter options
  const filteredOptions = useMemo(() => {
    const searchValue = value !== undefined ? value : innerValue;
    return options.filter((option) =>
      filterOption
        ? filterOption(searchValue, option)
        : option.label.toLowerCase().includes(searchValue.toLowerCase()),
    );
  }, [options, value, innerValue, filterOption]);

  // Group options
  const groupedOptions = useMemo(() => {
    if (!groupBy) return { ungrouped: filteredOptions };

    return filteredOptions.reduce(
      (groups, option) => {
        const group = groupBy(option);
        return {
          ...groups,
          [group]: [...(groups[group] || []), option],
        };
      },
      {} as Record<string, AutoCompleteOption[]>,
    );
  }, [filteredOptions, groupBy]);

  // Handlers
  const handleInputChange = useCallback(
    (newValue: string) => {
      setInnerValue(newValue);
      onChange?.(newValue);

      if (onSearch) {
        debouncedSearch(newValue);
      }

      if (!open) {
        setOpen(true);
        onDropdownVisibleChange?.(true);
      }
    },
    [onChange, onSearch, debouncedSearch, open, onDropdownVisibleChange],
  );

  const handleOptionSelect = useCallback(
    (option: AutoCompleteOption) => {
      if (option.disabled) return;

      if (multiple) {
        const newTags = selectedTags.some((tag) => tag.value === option.value)
          ? selectedTags.filter((tag) => tag.value !== option.value)
          : [...selectedTags, option];
        setSelectedTags(newTags);
        setInnerValue("");
        onChange?.("");
      } else {
        setInnerValue(option.label);
        onChange?.(option.label);
        setOpen(false);
        onDropdownVisibleChange?.(false);
      }
      onSelect?.(option);
    },
    [multiple, selectedTags, onChange, onSelect, onDropdownVisibleChange],
  );

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      onKeyDown?.(event);

      switch (event.key) {
        case "ArrowDown":
          event.preventDefault();
          setFocusedIndex((prev) =>
            prev < filteredOptions.length - 1 ? prev + 1 : prev,
          );
          break;
        case "ArrowUp":
          event.preventDefault();
          setFocusedIndex((prev) => (prev > 0 ? prev - 1 : prev));
          break;
        case "Enter":
          if (focusedIndex >= 0 && focusedIndex < filteredOptions.length) {
            handleOptionSelect(filteredOptions[focusedIndex]);
          }
          break;
        case "Escape":
          setOpen(false);
          onDropdownVisibleChange?.(false);
          break;
      }
    },
    [
      filteredOptions,
      focusedIndex,
      handleOptionSelect,
      onKeyDown,
      onDropdownVisibleChange,
    ],
  );

  const handleBlur = useCallback(
    (event: React.FocusEvent<HTMLInputElement>) => {
      setTimeout(() => {
        if (!containerRef.current?.contains(document.activeElement)) {
          setOpen(false);
          onDropdownVisibleChange?.(false);
          onBlur?.(event);
        }
      }, 200);
    },
    [onBlur, onDropdownVisibleChange],
  );

  // 渲染选项
  const renderOptionItem = useCallback(
    (option: AutoCompleteOption, index: number) => {
      if (renderOption) {
        return renderOption(option);
      }

      const optionClasses = `${styles.optionItem} ${
        option.disabled ? styles.disabled : ""
      } ${focusedIndex === index ? styles.focused : ""}`;

      return (
        <div
          key={option.value}
          className={optionClasses}
          onClick={() => handleOptionSelect(option)}
        >
          <div className={styles.optionContent}>
            {option.icon && (
              <span className={styles.optionIcon}>{option.icon}</span>
            )}
            <span className={styles.optionLabel}>{option.label}</span>
            {option.description && (
              <span className={styles.optionDescription}>
                {option.description}
              </span>
            )}
          </div>
        </div>
      );
    },
    [renderOption, focusedIndex, handleOptionSelect],
  );

  // 渲染分组选项
  const renderGroupedOptions = useCallback(() => {
    if (!groupBy) {
      return filteredOptions.map((option, index) =>
        renderOptionItem(option, index),
      );
    }

    return Object.entries(groupedOptions).map(([group, items]) => (
      <div key={group} className={styles.optionGroup}>
        {group !== "ungrouped" && (
          <div className={styles.groupLabel}>{group}</div>
        )}
        {items.map((option, index) => renderOptionItem(option, index))}
      </div>
    ));
  }, [groupBy, filteredOptions, groupedOptions, renderOptionItem]);

  // 实现 handleTagClose
  const handleTagClose = useCallback(
    (tag: AutoCompleteOption) => {
      const newTags = selectedTags.filter((t) => t.value !== tag.value);
      setSelectedTags(newTags);
      // 触发 onChange，将剩余标签的值以逗号分隔传递
      onChange?.(newTags.map((t) => t.label).join(", "));
    },
    [selectedTags, onChange],
  );

  // 渲染标签列表
  const renderTagList = useCallback(() => {
    if (!multiple || selectedTags.length === 0) return null;

    const tags = maxTagCount
      ? selectedTags.slice(0, maxTagCount)
      : selectedTags;

    if (renderTags) {
      return renderTags(tags, handleTagClose);
    }

    return (
      <div className={styles.tags}>
        {tags.map((tag) => (
          <span key={tag.value} className={styles.tag}>
            {tag.label}
            <button
              type="button"
              onClick={() => handleTagClose(tag)}
              className={styles.tagClose}
            >
              <IoClose />
            </button>
          </span>
        ))}
        {maxTagCount && selectedTags.length > maxTagCount && (
          <span className={styles.more}>
            <IoAdd />
            {selectedTags.length - maxTagCount}
          </span>
        )}
      </div>
    );
  }, [multiple, selectedTags, maxTagCount, renderTags, handleTagClose]);

  // 渲染下拉内容
  const renderDropdownContent = useMemo(() => {
    if (loading) {
      return (
        renderLoading?.() || (
          <div className={styles.loading}>
            <ProgressIndicator size="small" type="wave" />
          </div>
        )
      );
    }

    if (filteredOptions.length === 0) {
      return renderEmpty?.() || <Empty description="No options" />;
    }

    // 根据是否有分组来决定渲染方式
    if (groupBy) {
      return <div className={styles.optionList}>{renderGroupedOptions()}</div>;
    }

    return (
      <VirtualList
        items={filteredOptions}
        itemHeight={36}
        maxHeight={300}
        overscan={5}
        renderItem={(option, index) => renderOptionItem(option, index)}
        onLoadMore={onLoadMore}
        loadMoreThreshold={100}
      />
    );
  }, [
    loading,
    filteredOptions,
    renderLoading,
    renderEmpty,
    groupBy,
    renderGroupedOptions,
    renderOptionItem,
    onLoadMore,
  ]);

  // 使用 AutoCompleteInputProps
  const inputProps: AutoCompleteInputProps = {
    ref: inputRef,
    value: value !== undefined ? value : innerValue,
    onChange: (value: string) => handleInputChange(value),
    onFocus: (e) => {
      setOpen(true);
      onDropdownVisibleChange?.(true);
      onFocus?.(e);
    },
    onBlur: handleBlur,
    onKeyDown: handleKeyDown,
    ...textFieldProps,
  };

  return (
    <div ref={containerRef} className={styles.autoComplete}>
      {renderTagList()}
      {renderInput ? renderInput(inputProps) : <TextField {...inputProps} />}
      <Popper
        anchorEl={inputRef.current}
        visible={open}
        placement="bottom"
        offset={{ x: 0, y: 4 }}
        arrow={false}
        type="select"
        scrollable={true}
        maxHeight={300}
        onClickAway={() => {
          setOpen(false);
          onDropdownVisibleChange?.(false);
        }}
        {...popperProps}
        style={{
          width: inputRef.current?.offsetWidth,
          padding: 0,
          ...popperProps?.style,
        }}
      >
        <div className={styles.dropdown}>{renderDropdownContent}</div>
      </Popper>
    </div>
  );
};

export default React.memo(AutoComplete);
