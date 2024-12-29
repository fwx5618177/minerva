import React from "react";
import type { BadgeProps } from "./types";
import styles from "./badge.module.scss";

/**
 * Badge component
 * @param children - The content of the badge
 * @param variant - The style of the badge (primary, secondary, success, danger, warning, info, light, dark)
 * @param size - The size of the badge (small, medium, large)
 * @param className - Additional classes to be added to the badge
 * @param ariaLabel - The aria-label attribute for the badge, used for accessibility
 * @param bgColor - Custom background color for the badge
 * @param textColor - Custom text color for the badge
 * @param icon - The icon to be displayed (can be a TSX SVG component, image URL, or other ReactNode)
 * @returns A badge component
 */
export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "primary",
  size = "medium",
  className = "",
  ariaLabel,
  bgColor,
  textColor,
  icon,
}) => {
  return (
    <span
      className={`${styles.badge} ${styles[variant]} ${styles[size]} ${className}`}
      aria-label={ariaLabel}
      role="status"
      tabIndex={0}
      style={{
        backgroundColor: bgColor,
        color: textColor,
      }}
    >
      {icon && <span className={styles.icon}>{icon}</span>}
      {children}
    </span>
  );
};

export default React.memo(Badge);
