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
 * @param error - The error message to be displayed
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
 * @returns A text field component
 */
const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  (
    {
      label,
      placeholder,
      value,
      onChange,
      error,
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
    },
    ref,
  ) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [isFocused, setIsFocused] = useState(false);
    const [isFilled, setIsFilled] = useState(!!value);
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [shake, setShake] = useState(false);

    useEffect(() => {
      setIsFilled(!!value);
    }, [value]);

    const handleFocus = useCallback(() => {
      setIsFocused(true);
    }, []);

    const handleBlur = useCallback(() => {
      setIsFocused(false);
    }, []);

    const handleChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e.target.value);
      },
      [onChange],
    );

    const handleClear = useCallback(() => {
      onChange && onChange("");
    }, [onChange]);

    const handleTogglePasswordVisibility = useCallback(() => {
      setIsPasswordVisible(!isPasswordVisible);
    }, [isPasswordVisible]);

    useEffect(() => {
      if (error) {
        setShake(true);
        setTimeout(() => setShake(false), 500);
        inputRef.current?.focus();
      }
    }, [error]);

    const textFieldClasses = `${styles.textField} ${
      isFocused ? styles.focused : ""
    } ${isFilled ? styles.filled : ""} ${minimal ? styles.minimal : ""} ${
      error ? styles.error : ""
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
              value={value}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
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
            {clearable && value && !readOnly && !disabled && !suffix && (
              <span className={styles.clearIcon} onClick={handleClear}>
                <FaTimesCircle />
              </span>
            )}
            {suffix && <span className={styles.suffix}>{suffix}</span>}
            {error && (
              <span className={styles.errorIcon}>
                <FaExclamationTriangle />
              </span>
            )}
          </div>
          {showCharCount && (
            <div className={styles.charCount}>{value?.length}</div>
          )}
        </div>
        {error && (
          <div className={styles.errorMessage}>
            <FaExclamationTriangle className={styles.errorIcon} />
            {error}
          </div>
        )}
      </div>
    );
  },
);

TextField.displayName = "TextField";

export default React.memo(TextField);
