import React, { useState, useEffect } from "react";
import { IoChevronForward } from "react-icons/io5";
import type { CascaderPanelProps, CascaderOption } from "./types";
import styles from "./cascader.module.scss";

const CascaderPanel: React.FC<CascaderPanelProps> = ({
  options = [],
  activePath = [],
  expandTrigger = "click",
  maxLevel = 6,
  onLevelSelect,
  optionRender,
  optionStyle,
}) => {
  const [activeColumns, setActiveColumns] = useState<CascaderOption[][]>(() => {
    const columns: CascaderOption[][] = [options];

    for (let i = 0; i < activePath.length && i < maxLevel - 1; i++) {
      const activeOption = activePath[i];
      const currentColumn = columns[i];

      const matchedOption = currentColumn.find(
        (opt) => opt.value === activeOption.value,
      );

      if (matchedOption?.children?.length) {
        columns.push(matchedOption.children);
      }
    }

    return columns;
  });

  useEffect(() => {
    const columns: CascaderOption[][] = [options];

    for (let i = 0; i < activePath.length && i < maxLevel - 1; i++) {
      const activeOption = activePath[i];
      const currentColumn = columns[i];

      const matchedOption = currentColumn.find(
        (opt) => opt.value === activeOption.value,
      );

      if (matchedOption?.children?.length) {
        columns.push(matchedOption.children);
      }
    }

    setActiveColumns(columns);
  }, [activePath, options, maxLevel]);

  const [hoverOption, setHoverOption] = useState<{
    option: CascaderOption;
    level: number;
  } | null>(null);

  const handleOptionClick = (option: CascaderOption, level: number) => {
    if (option.disabled) return;
    onLevelSelect?.(option, level);

    if (option.children?.length && level < maxLevel - 1) {
      setActiveColumns((prev) => {
        const newColumns = [...prev.slice(0, level + 1)];
        newColumns.push(option.children!);
        return newColumns;
      });
    }
  };

  const handleOptionHover = (option: CascaderOption, level: number) => {
    if (option.disabled) return;
    setHoverOption({ option, level });

    if (
      expandTrigger === "hover" &&
      option.children?.length &&
      level < maxLevel - 1
    ) {
      const newColumns = [
        ...activeColumns.slice(0, level + 1),
        option.children,
      ];
      setActiveColumns(newColumns);
    }
  };

  return (
    <div className={styles.panel}>
      {activeColumns.map((columnOptions, level) => (
        <ul key={level} className={styles.column}>
          {columnOptions.map((option) => {
            const isActive = activePath[level]?.value === option.value;
            const isHovered =
              hoverOption?.option.value === option.value &&
              hoverOption.level === level;
            const hasChildren = option.children && option.children.length > 0;

            return (
              <li
                key={option.value}
                className={`
                  ${styles.option}
                  ${isActive ? styles.active : ""}
                  ${isHovered ? styles.hover : ""}
                  ${option.disabled ? styles.disabled : ""}
                  ${option.loading ? styles.loading : ""}
                `}
                style={optionStyle}
                onClick={() => handleOptionClick(option, level)}
                onMouseEnter={() => handleOptionHover(option, level)}
                onMouseLeave={() => setHoverOption(null)}
              >
                {optionRender ? (
                  optionRender(option, level)
                ) : (
                  <>
                    <span className={styles.label}>{option.label}</span>
                    {hasChildren && level < maxLevel - 1 && (
                      <IoChevronForward className={styles.expandIcon} />
                    )}
                    {option.loading && (
                      <span className={styles.loading}>...</span>
                    )}
                  </>
                )}
              </li>
            );
          })}
        </ul>
      ))}
    </div>
  );
};

export default CascaderPanel;
