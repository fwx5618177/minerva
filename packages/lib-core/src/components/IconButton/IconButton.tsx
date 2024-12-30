import React, { forwardRef } from "react";
import { IconButtonProps } from "./types";
import styles from "./iconButton.module.scss";
import { Tooltip } from "../Tooltip";

/**
 * IconButton component
 * @param icon - The icon to be displayed (React component, typically from react-icons)
 * @param variant - The style variant of the button
 * @param size - The size of the button
 * @param shape - The shape of the button
 * @param disabled - Whether the button is disabled
 * @param loading - Whether to show loading state
 * @param className - Additional CSS classes
 * @param color - Custom icon color
 * @param bgColor - Custom background color
 * @param hoverColor - Custom hover color
 * @param tooltip - Tooltip text
 * @param tooltipPlacement - Tooltip placement
 * @param ariaLabel - Accessibility label
 * @param onClick - Click handler
 */
const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      icon,
      variant = "default",
      size = "medium",
      disabled = false,
      showTooltip = true,
      tooltip,
      tooltipProps,
      className = "",
      onClick,
      ...props
    },
    ref,
  ) => {
    const button = (
      <button
        ref={ref}
        className={`
          ${styles.iconButton}
          ${styles[`iconButton--${variant}`]}
          ${styles[`iconButton--${size}`]}
          ${disabled ? styles.disabled : ""}
          ${className}
        `}
        disabled={disabled}
        onClick={onClick}
        {...props}
      >
        {icon}
      </button>
    );

    if (showTooltip && tooltip) {
      return (
        <Tooltip content={tooltip} {...tooltipProps}>
          {button}
        </Tooltip>
      );
    }

    return button;
  },
);

IconButton.displayName = "IconButton";

export default IconButton;
