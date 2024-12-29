import React from "react";
import { FaCheck, FaTimes, FaExclamation, FaInfo } from "react-icons/fa";
import styles from "./statusIndicator.module.scss";
import { StatusIndicatorProps } from "./types";

/**
 * StatusIndicator component
 * @param className - Additional classes to be added to the indicator
 * @param ariaLabel - The aria-label attribute for the indicator, used for accessibility
 * @param disabled - Whether the indicator is disabled
 * @param status - The status of the indicator (success, error, warning, info)
 * @param shape - The shape of the indicator (circle, square, rounded)
 * @returns A status indicator component
 */
const StatusIndicator: React.FC<StatusIndicatorProps> = ({
  className = "",
  ariaLabel,
  disabled = false,
  status = "success",
  shape = "circle",
}) => {
  const iconMap = {
    success: <FaCheck className={styles.icon} />,
    error: <FaTimes className={styles.icon} />,
    warning: <FaExclamation className={styles.icon} />,
    info: <FaInfo className={styles.icon} />,
  };

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!disabled) {
      const target = event.currentTarget;
      target.classList.add(styles.clicked);
      setTimeout(() => {
        target.classList.remove(styles.clicked);
      }, 1000);
    }
  };

  return (
    <div
      className={`${styles.statusIndicator} ${styles[status]} ${styles[shape]} ${className}`}
      aria-label={ariaLabel}
      role="status"
      tabIndex={0}
      aria-disabled={disabled}
      onClick={handleClick}
    >
      {iconMap[status]}
      <div className={styles.stars}></div>
    </div>
  );
};

export default React.memo(StatusIndicator);
