import React, { useState, useRef, useCallback, useEffect } from "react";
import { TextField } from "../TextField";
import { Popper } from "../Popper";
import { IoClose } from "react-icons/io5";
import { IoChevronDown } from "react-icons/io5";
import CascaderPanel from "./CascaderPanel";
import type { CascaderProps, CascaderOption } from "./types";
import styles from "./cascader.module.scss";

const Cascader: React.FC<CascaderProps> = ({
  label,
  name,
  options = [],
  value,
  defaultValue,
  onChange,
  displayRender,
  disabled = false,
  placeholder = "Please select",
  allowClear = true,
  expandTrigger = "click",
  className,
  showSearch = false,
  filter,
  loadData,
  dropdownClassName,
  optionRender,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState<(string | number)[]>(
    value || defaultValue || [],
  );
  const [selectedOptions, setSelectedOptions] = useState<CascaderOption[]>([]);
  const anchorRef = useRef<HTMLDivElement>(null);
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState<CascaderOption[]>([]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        anchorRef.current &&
        !anchorRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
        setSearchValue("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = useCallback(
    (newValue: (string | number)[], options: CascaderOption[]) => {
      setSelectedValue(newValue);
      setSelectedOptions(options);
      setSearchValue("");
      setSearchResults([]);
      onChange?.(newValue, options);
      setIsOpen(false);
    },
    [onChange],
  );

  const handleClear = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      setSelectedValue([]);
      setSelectedOptions([]);
      onChange?.([], []);
    },
    [onChange],
  );

  const handleSearch = useCallback(
    (value: string) => {
      setSearchValue(value);
      if (!value) {
        setSearchResults([]);
        return;
      }

      const flattenOptions = (
        opts: CascaderOption[],
        path: CascaderOption[] = [],
      ): (CascaderOption & { path: CascaderOption[] })[] => {
        return opts.reduce(
          (acc, opt) => {
            const currentPath = [...path, opt];
            const currentOpt = { ...opt, path: currentPath };

            if (!opt.disabled) {
              acc.push(currentOpt);
              if (opt.children) {
                acc.push(...flattenOptions(opt.children, currentPath));
              }
            }

            return acc;
          },
          [] as (CascaderOption & { path: CascaderOption[] })[],
        );
      };

      const allOptions = flattenOptions(options);
      const filtered = allOptions.filter((option) => {
        if (filter) {
          return filter(value, option.path);
        }
        return option.path.some((o) =>
          o.label?.toString().toLowerCase().includes(value.toLowerCase()),
        );
      });

      setSearchResults(filtered);
    },
    [options, filter],
  );

  const renderDisplayValue = () => {
    if (searchValue && showSearch) {
      return searchValue;
    }
    if (displayRender) {
      const customLabel = displayRender(
        selectedOptions.map((o) => String(o.label)),
        selectedOptions,
      );
      return typeof customLabel === "string" ? customLabel : "";
    }
    return selectedOptions.map((o) => String(o.label)).join(" / ") || "";
  };

  return (
    <div className={`${styles.cascader} ${className || ""}`} ref={anchorRef}>
      <div
        className={`${styles.selector} ${disabled ? styles.disabled : ""} ${
          isOpen ? styles.focused : ""
        }`}
        onClick={() => !disabled && setIsOpen(!isOpen)}
      >
        <TextField
          label={label}
          name={name}
          value={renderDisplayValue()}
          readOnly={!showSearch}
          disabled={disabled}
          placeholder={placeholder}
          className={styles.input}
          onChange={(value) => showSearch && handleSearch(value)}
          onFocus={() => !disabled && setIsOpen(true)}
        />
        {allowClear && selectedValue.length > 0 && !disabled && (
          <span
            className={styles.clearIcon}
            onClick={(e) => {
              e.stopPropagation();
              handleClear(e);
              setSearchValue("");
              setSearchResults([]);
            }}
          >
            <IoClose className={styles.icon} />
          </span>
        )}
        <span className={`${styles.arrow} ${isOpen ? styles.open : ""}`}>
          <IoChevronDown className={styles.icon} />
        </span>
      </div>

      <Popper
        visible={isOpen}
        anchorEl={anchorRef.current}
        className={`${styles.dropdown} ${dropdownClassName || ""}`}
        placement="bottomStart"
      >
        {searchValue && showSearch ? (
          <div className={styles.searchResults}>
            {searchResults.length > 0 ? (
              searchResults.map((option) => (
                <div
                  key={`${option.value}-${option.path.length}`}
                  className={styles.searchOption}
                  onClick={() => {
                    const values = option.path.map((o) => o.value);
                    handleSelect(values, option.path);
                  }}
                >
                  {option.path.map((o) => o.label).join(" / ")}
                </div>
              ))
            ) : (
              <div className={styles.empty}>No results found</div>
            )}
          </div>
        ) : (
          <CascaderPanel
            label={label}
            name={name}
            options={options}
            activePath={selectedOptions}
            expandTrigger={expandTrigger}
            onLevelSelect={(option, level) => {
              const newPath = selectedOptions.slice(0, level).concat(option);
              if (!option.children || option.isLeaf) {
                handleSelect(
                  newPath.map((o) => o.value),
                  newPath,
                );
              }
              if (loadData && !option.children && !option.isLeaf) {
                loadData(newPath);
              }
            }}
            optionRender={optionRender}
          />
        )}
      </Popper>
    </div>
  );
};

export default Cascader;
