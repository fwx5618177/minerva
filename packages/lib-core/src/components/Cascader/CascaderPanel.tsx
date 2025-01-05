import React, { useState, useEffect } from "react";
import type { CascaderPanelProps, CascaderOption } from "./types";
import styles from "./cascader.module.scss";

const CascaderPanel: React.FC<CascaderPanelProps> = ({
  options = [],
  activePath = [],
  expandTrigger = "click",
  onLevelSelect,
  optionRender,
}) => {
  const [activeOptions, setActiveOptions] = useState<CascaderOption[][]>([
    options,
  ]);
  const [hoverPath, setHoverPath] = useState<CascaderOption[]>([]);

  useEffect(() => {
    const newActiveOptions = [options];
    activePath.forEach((option) => {
      if (option.children) {
        newActiveOptions.push(option.children);
      }
    });
    setActiveOptions(newActiveOptions);
  }, [options, activePath]);

  const handleOptionClick = (option: CascaderOption, level: number) => {
    onLevelSelect?.(option, level);
    if (option.children) {
      const newActiveOptions = activeOptions.slice(0, level + 1);
      newActiveOptions.push(option.children);
      setActiveOptions(newActiveOptions);
    }
  };

  const handleOptionHover = (option: CascaderOption, level: number) => {
    if (expandTrigger === "hover" && option.children) {
      const newHoverPath = hoverPath.slice(0, level).concat(option);
      setHoverPath(newHoverPath);
      const newActiveOptions = activeOptions.slice(0, level + 1);
      newActiveOptions.push(option.children);
      setActiveOptions(newActiveOptions);
    }
  };

  return (
    <div className={styles.panel}>
      {activeOptions.map((levelOptions, level) => (
        <ul key={level} className={styles.column}>
          {levelOptions.map((option) => {
            const isActive =
              activePath[level]?.value === option.value ||
              hoverPath[level]?.value === option.value;

            return (
              <li
                key={option.value}
                className={`
                  ${styles.option}
                  ${isActive ? styles.active : ""}
                  ${option.disabled ? styles.disabled : ""}
                  ${option.loading ? styles.loading : ""}
                `}
                onClick={() =>
                  !option.disabled && handleOptionClick(option, level)
                }
                onMouseEnter={() =>
                  !option.disabled && handleOptionHover(option, level)
                }
              >
                {optionRender ? (
                  optionRender(option, level)
                ) : (
                  <>
                    <span className={styles.label}>{option.label}</span>
                    {(option.children ||
                      (!option.isLeaf && !option.loading)) && (
                      <span className={styles.expandIcon}>▸</span>
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
