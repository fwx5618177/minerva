import React from "react";
import styles from "./button.module.scss";
import { ButtonProps } from "./types";

/**
 * @param onClick - Function to be called when the button is clicked
 * @param children - The content of the button
 * @param className - Additional classes to be added to the button
 * @param variant - The style of the button (primary, warning, error, retry, back)
 * @param size - The size of the button (small, medium, large, xlarge)
 * @param ariaLabel - The aria-label attribute for the button, used for accessibility
 * @param disabled - Whether the button is disabled
 * @param borderRadius - The border radius of the button (none, small, medium, large, circle, square)
 * @returns A button component
 */
const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  className = "",
  variant = "primary",
  size = "medium",
  ariaLabel,
  disabled = false,
  borderRadius = "medium", // 默认值为 medium
}) => {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (!disabled && onClick) {
      onClick(event);
    }
  };

  return (
    <button
      className={`${styles.customButton} ${styles[variant]} ${styles[size]} ${styles[`borderRadius${borderRadius.charAt(0).toUpperCase() + borderRadius.slice(1)}`]} ${className}`}
      onClick={handleClick}
      aria-label={ariaLabel}
      role="button"
      tabIndex={0}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
