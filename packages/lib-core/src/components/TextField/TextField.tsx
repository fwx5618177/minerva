import React, {
  useState,
  useEffect,
  useCallback,
  useRef,
  forwardRef,
} from "react";
import {
  FaExclamationTriangle,
  FaTimesCircle,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";
import styles from "./textField.module.scss";
import { TextFieldProps } from "./types";

/**
 * TextField component
 * @param label - The label of the text field
 * @param placeholder - The placeholder text of the text field
 * @param value - The value of the text field
 * @param onChange - Function to be called when the text field value changes
 * @param helperText - The error message to be displayed
 * @param icon - The icon to be displayed in the text field
 * @param iconPosition - The position of the icon (left, right)
 * @param borderColor - The border color of the text field
 * @param hideBorder - Whether to hide the border of the text field
 * @param minimal - Whether to use the minimal version of the text field
 * @param borderRadius - The border radius of the text field
 * @param name - The name attribute of the input (required)
 * @param type - The type attribute of the input
 * @param showCharCount - Whether to show the character count
 * @param clearable - Whether to show the clear icon
 * @param fullWidth - Whether the text field should take the full width of its container
 * @param width - The width of the text field (e.g., "200px", "50%")
 * @param disabled - Whether the text field is disabled
 * @param ariaLabel - The aria-label attribute for accessibility
 * @param readOnly - Whether the text field is read-only
 * @param size - The size of the text field
 * @param suffix - The suffix to be displayed
 * @param onBlur - Callback fired when the input loses focus
 * @param onFocus - Callback fired when the input gains focus
 * @returns A text field component
 */
const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  (
    {
      label,
      placeholder,
      value,
      onChange,
      helperText,
      icon,
      iconPosition = "left",
      borderColor,
      hideBorder = false,
      minimal = false,
      borderRadius = "0.25rem",
      name,
      type = "text",
      showCharCount = false,
      clearable = false,
      fullWidth = false,
      width = "300px",
      disabled = false,
      ariaLabel,
      readOnly = false,
      size = "medium",
      suffix,
      onBlur,
      onFocus,
      onKeyDown,
    },
    ref,
  ) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [isFocused, setIsFocused] = useState(false);
    const [isFilled, setIsFilled] = useState(!!value);
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [shake, setShake] = useState(false);
    const [internalValue, setInternalValue] = useState(value || "");

    useEffect(() => {
      if (value !== undefined) {
        setInternalValue(value);
      }
    }, [value]);

    useEffect(() => {
      setIsFilled(!!(value || internalValue));
    }, [value, internalValue]);

    const handleKeyDown = useCallback(
      (e: React.KeyboardEvent<HTMLInputElement>) => {
        onKeyDown?.(e);
      },
      [onKeyDown],
    );

    const handleFocus = useCallback(
      (e: React.FocusEvent<HTMLInputElement>) => {
        setIsFocused(true);
        onFocus?.(e);
      },
      [onFocus],
    );

    const handleBlur = useCallback(
      (e: React.FocusEvent<HTMLInputElement>) => {
        setIsFocused(false);
        onBlur?.(e);
      },
      [onBlur],
    );

    const handleChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        if (!onChange) {
          setInternalValue(newValue);
        } else {
          onChange(newValue);
        }
      },
      [onChange],
    );

    const handleClear = useCallback(() => {
      if (onChange) {
        onChange("");
      } else {
        setInternalValue("");
      }
    }, [onChange]);

    const handleTogglePasswordVisibility = useCallback(() => {
      setIsPasswordVisible(!isPasswordVisible);
    }, [isPasswordVisible]);

    useEffect(() => {
      if (helperText) {
        setShake(true);
        setTimeout(() => setShake(false), 500);
        inputRef.current?.focus();
      }
    }, [helperText]);

    const textFieldClasses = `${styles.textField} ${
      isFocused ? styles.focused : ""
    } ${isFilled ? styles.filled : ""} ${minimal ? styles.minimal : ""} ${
      helperText ? styles.error : ""
    } ${hideBorder ? styles.containerHideBorder : ""} ${
      shake ? styles.shake : ""
    } ${disabled ? styles.disabled : ""} ${readOnly ? styles.readonly : ""} ${
      styles[size]
    }`;
    const inputClasses = `${styles.input} ${hideBorder ? styles.hideBorder : ""}`;
    const labelClasses = `${styles.label} ${isFocused || isFilled ? styles.shrink : ""}`;
    const containerClass = `${styles.container} ${hideBorder ? styles.containerHideBorder : ""}`;
    const containerStyles = {
      width: fullWidth ? "100%" : width,
      borderRadius: borderRadius,
      borderColor: borderColor,
    };

    return (
      <div className={containerClass} style={containerStyles}>
        <div className={textFieldClasses} style={{ borderColor, borderRadius }}>
          {label && !placeholder && !readOnly && (
            <label
              className={labelClasses}
              onClick={() => inputRef?.current?.focus()}
              style={{
                left: icon && iconPosition === "left" ? "2.5rem" : "0.75rem",
              }}
            >
              {label}
            </label>
          )}
          <div className={styles.inputWrapper} style={{ borderRadius }}>
            {icon && iconPosition === "left" && (
              <span className={styles.iconLeft}>{icon}</span>
            )}
            <input
              ref={ref || inputRef}
              id={name}
              type={
                type === "password" && !isPasswordVisible ? "password" : "text"
              }
              name={name}
              className={inputClasses}
              placeholder={isFocused || isFilled ? "" : placeholder}
              value={value !== undefined ? value : internalValue}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              onKeyDown={handleKeyDown}
              tabIndex={0}
              disabled={disabled}
              readOnly={readOnly}
              aria-label={ariaLabel}
              style={{
                paddingLeft: icon && iconPosition === "left" ? "2rem" : "",
                paddingRight:
                  (icon && iconPosition === "right" ? "2rem" : "") +
                  (!suffix && clearable ? "2rem" : ""),
              }}
            />
            {icon && iconPosition === "right" && (
              <>
                {type !== "password" ? (
                  <span className={styles.iconRight}>{icon}</span>
                ) : (
                  <span
                    className={`${styles.iconRight} ${styles.togglePasswordIcon}`}
                    onClick={handleTogglePasswordVisibility}
                  >
                    {isPasswordVisible ? <FaEyeSlash /> : <FaEye />}
                  </span>
                )}
              </>
            )}
            {clearable &&
              (value || internalValue) &&
              !readOnly &&
              !disabled &&
              !suffix && (
                <span className={styles.clearIcon} onClick={handleClear}>
                  <FaTimesCircle />
                </span>
              )}
            {suffix && <span className={styles.suffix}>{suffix}</span>}
            {helperText && (
              <span className={styles.errorIcon}>
                <FaExclamationTriangle />
              </span>
            )}
          </div>
          {showCharCount && (
            <div className={styles.charCount}>
              {(value !== undefined ? value : internalValue)?.length}
            </div>
          )}
        </div>
        {helperText && (
          <div className={styles.errorMessage}>
            <FaExclamationTriangle className={styles.errorIcon} />
            {helperText}
          </div>
        )}
      </div>
    );
  },
);

TextField.displayName = "TextField";

export default React.memo(TextField);
