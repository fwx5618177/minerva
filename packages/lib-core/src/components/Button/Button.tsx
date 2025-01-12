import React, { forwardRef } from "react";
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
 * @param loading - Whether the button is loading
 * @param active - Whether the button is active
 * @param shape - The shape of the button (square, rounded, circle)
 * @param borderRadius - The border radius of the button (none, small, medium, large, circle, square)
 * @param ref - Ref forwarded to the button element
 */
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      onClick,
      children,
      className = "",
      variant = "primary",
      size = "medium",
      ariaLabel,
      disabled = false,
      loading = false,
      active = false,
      shape,
      borderRadius = "medium",
      style,
      // 解构其他 HTML button 元素支持的属性
      ...restProps
    },
    ref,
  ) => {
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      if (!disabled && onClick) {
        onClick(event);
      }
    };

    const getBorderRadiusClass = () => {
      if (typeof borderRadius === "number") {
        return "";
      }
      return styles[
        `borderRadius${borderRadius.charAt(0).toUpperCase() + borderRadius.slice(1)}`
      ];
    };

    const getCustomStyle = () => {
      const baseStyle =
        typeof borderRadius === "number"
          ? { borderRadius: `${borderRadius}px` }
          : {};

      // 合并自定义样式
      return {
        ...baseStyle,
        ...style,
      };
    };

    return (
      <button
        ref={ref}
        className={`
          ${styles.customButton} 
          ${styles[variant]} 
          ${styles[size]} 
          ${getBorderRadiusClass()} 
          ${shape ? styles[shape] : ""} 
          ${active ? styles.active : ""} 
          ${loading ? styles.loading : ""} 
          ${className}
        `}
        onClick={handleClick}
        aria-label={ariaLabel}
        role="button"
        tabIndex={0}
        disabled={disabled || loading}
        style={getCustomStyle()}
        {...restProps}
      >
        {loading ? (
          <span className={styles.loadingWrapper}>
            <span className={styles.loadingSpinner} />
            {children}
          </span>
        ) : (
          children
        )}
      </button>
    );
  },
);

Button.displayName = "Button";

export default Button;
