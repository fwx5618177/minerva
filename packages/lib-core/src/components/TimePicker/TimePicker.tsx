import React, { useState, useCallback, useRef, useEffect } from "react";
import { FaClock, FaTimes } from "react-icons/fa";
import { TimePickerProps, TimeValue } from "./types";
import { TimePickerPanel } from "./TimePickerPanel";
import { TextField } from "../TextField";
import { Popper } from "../Popper";
import { IconButton } from "../IconButton";
import styles from "./timePicker.module.scss";

const defaultFormatTime = (value: TimeValue): string => {
  const { hours, minutes, seconds, meridiem } = value;
  const paddedHours = hours.toString().padStart(2, "0");
  const paddedMinutes = minutes.toString().padStart(2, "0");
  const paddedSeconds = seconds?.toString().padStart(2, "0");

  return `${paddedHours}:${paddedMinutes}${seconds ? `:${paddedSeconds}` : ""}${
    meridiem ? ` ${meridiem}` : ""
  }`;
};

export const TimePicker: React.FC<TimePickerProps> = ({
  value,
  defaultValue,
  format = "24",
  showSeconds = false,
  minTime,
  maxTime,
  disabled = false,
  readOnly = false,
  error = false,
  errorText,
  placeholder = "Select time",
  size = "medium",
  variant = "outlined",
  clearable = true,
  formatTime = defaultFormatTime,
  icon = <FaClock />,
  clearIcon = <FaTimes />,
  popperClassName,
  inputClassName,
  onChange,
  onOpen,
  onClose,
  onValidate,
  renderInput,
  renderPopper,
  rippleEffect = true,
  elevation = "medium",
  animation = "fade",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [localValue, setLocalValue] = useState<TimeValue | null>(
    value ?? defaultValue ?? null,
  );
  const anchorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (value !== undefined) {
      setLocalValue(value);
    }
  }, [value]);

  const handleOpen = useCallback(() => {
    if (!disabled && !readOnly) {
      setIsOpen(true);
      onOpen?.();
    }
  }, [disabled, readOnly, onOpen]);

  const handleClose = useCallback(() => {
    setIsOpen(false);
    onClose?.();
  }, [onClose]);

  const handleChange = useCallback(
    (newValue: TimeValue | null) => {
      if (onValidate && newValue && !onValidate(newValue)) {
        return;
      }

      setLocalValue(newValue);
      onChange?.(newValue);
      handleClose();
    },
    [onChange, onValidate, handleClose],
  );

  const handleClear = useCallback(
    (event: React.MouseEvent) => {
      event.stopPropagation();
      handleChange(null);
    },
    [handleChange],
  );

  const renderDefaultInput = () => (
    <div
      ref={anchorRef}
      className={`${styles.timePickerInput} ${rippleEffect ? styles.ripple : ""} ${styles[`elevation-${elevation}`]} ${inputClassName || ""}`}
      onClick={handleOpen}
    >
      <TextField
        value={localValue ? formatTime(localValue) : ""}
        placeholder={placeholder}
        disabled={disabled}
        readOnly
        error={error}
        helperText={errorText}
        size={size}
        variant={variant}
        startAdornment={
          icon && (
            <span className={styles.timePickerIcon}>
              {React.cloneElement(icon as React.ReactElement, {
                className: styles.icon,
              })}
            </span>
          )
        }
        endAdornment={
          clearable &&
          localValue &&
          !disabled &&
          !readOnly && (
            <IconButton
              icon={clearIcon}
              size="small"
              onClick={handleClear}
              className={styles.clearButton}
            />
          )
        }
        className={`${styles.input} ${styles[`animation-${animation}`]}`}
      />
    </div>
  );

  const renderDefaultPopper = () => (
    <div className={`${styles.timePickerPopper} ${popperClassName || ""}`}>
      <TimePickerPanel
        value={localValue}
        format={format}
        showSeconds={showSeconds}
        minTime={minTime}
        maxTime={maxTime}
        onChange={handleChange}
      />
    </div>
  );

  return (
    <>
      {renderInput
        ? renderInput({ value: localValue, onClick: handleOpen })
        : renderDefaultInput()}
      <Popper
        open={isOpen}
        anchorEl={anchorRef.current}
        onClose={handleClose}
        placement="bottom-start"
        className={styles.popper}
      >
        {renderPopper
          ? renderPopper({ value: localValue, onChange: handleChange })
          : renderDefaultPopper()}
      </Popper>
    </>
  );
};

export default React.memo(TimePicker);
