import React, { forwardRef } from "react";
import { FaTimes } from "react-icons/fa";
import { ProgressIndicator } from "../ProgressIndicator";
import styles from "./chip.module.scss";
import type { ChipProps } from "./types";

/**
 * Chip component
 * @param label - The content of the chip
 * @param variant - The variant of the chip (filled, outlined, soft)
 * @param color - The color of the chip
 * @param size - The size of the chip
 * @param icon - Icon element to display at the start
 * @param avatar - Avatar element to display at the start
 * @param onDelete - Callback fired when the delete icon is clicked
 * @param onClick - Callback fired when the chip is clicked
 * @param disabled - If true, the chip will be disabled
 * @param className - Additional class name
 * @param deleteIcon - Custom delete icon
 * @param clickable - If true, the chip will be clickable
 * @param loading - If true, shows loading state
 * @param selected - If true, shows selected state
 */
const Chip = forwardRef<HTMLDivElement, ChipProps>(
  (
    {
      label,
      variant = "filled",
      color = "default",
      size = "medium",
      icon,
      avatar,
      onDelete,
      onClick,
      disabled = false,
      className = "",
      deleteIcon,
      clickable = false,
      loading = false,
      selected = false,
    },
    ref,
  ) => {
    const handleDelete = (e: React.MouseEvent) => {
      e.stopPropagation();
      onDelete?.(e);
    };

    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
      if (!disabled && clickable) {
        onClick?.(e);
      }
    };

    return (
      <div
        ref={ref}
        className={`
          ${styles.chip}
          ${styles[variant]}
          ${styles[color]}
          ${styles[size]}
          ${disabled ? styles.disabled : ""}
          ${clickable ? styles.clickable : ""}
          ${selected ? styles.selected : ""}
          ${loading ? styles.loading : ""}
          ${className}
        `}
        onClick={handleClick}
        role={clickable ? "button" : undefined}
        tabIndex={clickable && !disabled ? 0 : undefined}
      >
        {loading ? (
          <div className={styles.loadingWrapper}>
            <ProgressIndicator width="auto" type="spinner" size="small" />
            <span>{label}</span>
          </div>
        ) : (
          <>
            {icon && <span className={styles.icon}>{icon}</span>}
            {avatar && <span className={styles.avatar}>{avatar}</span>}
            <span className={styles.label}>{label}</span>
          </>
        )}
        {onDelete && !disabled && !loading && (
          <span className={styles.deleteIcon} onClick={handleDelete}>
            {deleteIcon || <FaTimes size={16} />}
          </span>
        )}
      </div>
    );
  },
);

Chip.displayName = "Chip";

export default React.memo(Chip);
