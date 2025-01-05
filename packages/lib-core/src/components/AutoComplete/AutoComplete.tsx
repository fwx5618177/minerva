import React, { useState, useRef, useMemo } from "react";
import { IoClose } from "react-icons/io5";
import { TextField } from "../TextField";
import { Popper } from "../Popper";
import { ProgressIndicator } from "../ProgressIndicator";
import { Empty } from "../Empty";
import type { AutoCompleteProps, AutoCompleteOption } from "./types";
import styles from "./autoComplete.module.scss";

const AutoComplete: React.FC<AutoCompleteProps> = ({
  name,
  label,
  mode = "basic",
  value,
  onChange,
  options = [],
  defaultValue = "",
  onSelect,
  filterOption,
  groupBy,
  multiple = false,
  maxTagCount,
  renderOption,
  renderEmpty,
  loading = false,
  textFieldProps,
  emptyProps,
}) => {
  const [visible, setVisible] = useState<boolean>(false);
  const [innerValue, setInnerValue] = useState(defaultValue);
  const [selectedTags, setSelectedTags] = useState<AutoCompleteOption[]>([]);
  const [focusedIndex, setFocusedIndex] = useState(-1);

  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Filter options
  const filteredOptions = useMemo(() => {
    const searchValue = value !== undefined ? value : innerValue;
    return options.filter((option) =>
      filterOption
        ? filterOption(searchValue, option)
        : option.label.toLowerCase().includes(searchValue.toLowerCase()),
    );
  }, [options, value, innerValue, filterOption]);

  // Basic mode render
  const renderBasicOption = (option: AutoCompleteOption) => (
    <div className={styles.basicOption}>
      {option.icon && <span className={styles.icon}>{option.icon}</span>}
      <div className={styles.content}>
        <div className={styles.label}>{option.label}</div>
        {option.description && (
          <div className={styles.description}>{option.description}</div>
        )}
      </div>
    </div>
  );

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    switch (event.key) {
      case "ArrowDown":
        event.preventDefault();
        setFocusedIndex((prev) =>
          prev < filteredOptions.length - 1 ? prev + 1 : 0,
        );
        break;
      case "ArrowUp":
        event.preventDefault();
        setFocusedIndex((prev) =>
          prev > 0 ? prev - 1 : filteredOptions.length - 1,
        );
        break;
      case "Enter":
        if (focusedIndex >= 0) {
          handleOptionSelect(filteredOptions[focusedIndex]);
        }
        break;
      case "Escape":
        setVisible(false);
        break;
    }
  };

  const handleInputChange = (value: string) => {
    setInnerValue(value);
    onChange?.(value);
    if (!open) setVisible(true);
  };

  const handleOptionSelect = (option: AutoCompleteOption) => {
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
      setVisible(false);
    }
    onSelect?.(option);
  };

  const renderTags = () => {
    if (!multiple || selectedTags.length === 0) return null;

    const displayTags =
      maxTagCount && selectedTags.length > maxTagCount
        ? selectedTags.slice(0, maxTagCount)
        : selectedTags;

    return (
      <div className={styles.tags}>
        {displayTags.map((tag) => (
          <span key={tag.value} className={styles.tag}>
            {tag.label}
            <button
              type="button"
              className={styles.tagClose}
              onClick={(e) => {
                e.stopPropagation();
                handleOptionSelect(tag);
              }}
            >
              <IoClose />
            </button>
          </span>
        ))}
        {maxTagCount && selectedTags.length > maxTagCount && (
          <span className={styles.more}>
            +{selectedTags.length - maxTagCount}
          </span>
        )}
      </div>
    );
  };

  return (
    <div ref={containerRef} className={styles.autoComplete}>
      {renderTags()}
      <TextField
        {...textFieldProps}
        label={label}
        name={name}
        ref={inputRef}
        value={value !== undefined ? value : innerValue}
        onChange={handleInputChange}
        onFocus={() => setVisible(true)}
        onBlur={() => setTimeout(() => setVisible(false), 200)}
        onKeyDown={handleKeyDown}
      />

      {visible && (
        <Popper anchorEl={containerRef.current} visible={visible}>
          <div className={styles.dropdown}>
            {loading ? (
              <div className={styles.loading}>
                <ProgressIndicator />
              </div>
            ) : filteredOptions.length > 0 ? (
              <div className={styles.optionList}>
                {groupBy
                  ? Object.entries(
                      filteredOptions.reduce(
                        (groups, option) => {
                          const group = groupBy(option);
                          if (!groups[group]) groups[group] = [];
                          groups[group].push(option);
                          return groups;
                        },
                        {} as Record<string, AutoCompleteOption[]>,
                      ),
                    ).map(([group, groupOptions]) => (
                      <div key={group} className={styles.optionGroup}>
                        <div className={styles.groupLabel}>{group}</div>
                        {groupOptions.map((option) => (
                          <div
                            key={option.value}
                            className={`${styles.optionItem} ${
                              option.disabled ? styles.disabled : ""
                            } ${option.highlight ? styles.highlight : ""}`}
                            onClick={() => handleOptionSelect(option)}
                          >
                            {mode === "basic"
                              ? renderBasicOption(option)
                              : renderOption
                                ? renderOption(option)
                                : renderBasicOption(option)}
                          </div>
                        ))}
                      </div>
                    ))
                  : filteredOptions.map((option) => (
                      <div
                        key={option.value}
                        className={`${styles.optionItem} ${
                          option.disabled ? styles.disabled : ""
                        } ${option.highlight ? styles.highlight : ""}`}
                        onClick={() => handleOptionSelect(option)}
                      >
                        {mode === "basic"
                          ? renderBasicOption(option)
                          : renderOption
                            ? renderOption(option)
                            : renderBasicOption(option)}
                      </div>
                    ))}
              </div>
            ) : (
              <div className={styles.empty}>
                {renderEmpty?.() || <Empty {...emptyProps} />}
              </div>
            )}
          </div>
        </Popper>
      )}
    </div>
  );
};

export default AutoComplete;
