import React, { useState, useCallback } from "react";
import { Button } from "../Button";
import { TimePickerPanelProps, TimeValue } from "./types";
import styles from "./timePickerPanel.module.scss";

const range = (start: number, end: number) =>
  Array.from({ length: end - start + 1 }, (_, i) => start + i);

export const TimePickerPanel: React.FC<TimePickerPanelProps> = ({
  value,
  format,
  showSeconds,
  minTime,
  maxTime,
  onChange,
}) => {
  const [activeSection, setActiveSection] = useState<
    "hours" | "minutes" | "seconds" | "meridiem"
  >("hours");

  const hours = format === "12" ? range(1, 12) : range(0, 23);
  const minutes = range(0, 59);
  const seconds = range(0, 59);
  const meridiems = ["AM", "PM"];

  const isTimeDisabled = useCallback(
    (newValue: TimeValue) => {
      if (!minTime && !maxTime) return false;

      const getValue = (time: TimeValue) => {
        let hours = time.hours;
        if (format === "12" && time.meridiem === "PM") {
          hours = hours === 12 ? 12 : hours + 12;
        } else if (format === "12" && time.meridiem === "AM") {
          hours = hours === 12 ? 0 : hours;
        }
        return hours * 3600 + time.minutes * 60 + (time.seconds || 0);
      };

      const currentValue = getValue(newValue);
      if (minTime && getValue(minTime) > currentValue) return true;
      if (maxTime && getValue(maxTime) < currentValue) return true;
      return false;
    },
    [format, minTime, maxTime],
  );

  const handleValueChange = useCallback(
    (section: keyof TimeValue, newValue: number | string) => {
      const newTimeValue: TimeValue = {
        ...(value || { hours: 0, minutes: 0, seconds: 0 }),
        [section]: newValue,
      };

      if (!isTimeDisabled(newTimeValue)) {
        onChange(newTimeValue);
      }
    },
    [value, onChange, isTimeDisabled],
  );

  return (
    <div className={styles.panel}>
      <div className={styles.sections}>
        <div
          className={`${styles.section} ${
            activeSection === "hours" ? styles.active : ""
          }`}
          onClick={() => setActiveSection("hours")}
        >
          <div className={styles.numbers}>
            {hours.map((hour) => (
              <Button
                key={hour}
                onClick={() => handleValueChange("hours", hour)}
                className={`${styles.number} ${
                  value?.hours === hour ? styles.selected : ""
                }`}
                variant={value?.hours === hour ? "primary" : "default"}
                size="small"
              >
                {hour.toString().padStart(2, "0")}
              </Button>
            ))}
          </div>
        </div>

        <div
          className={`${styles.section} ${
            activeSection === "minutes" ? styles.active : ""
          }`}
          onClick={() => setActiveSection("minutes")}
        >
          <div className={styles.numbers}>
            {minutes.map((minute) => (
              <Button
                key={minute}
                onClick={() => handleValueChange("minutes", minute)}
                className={`${styles.number} ${
                  value?.minutes === minute ? styles.selected : ""
                }`}
                variant={value?.minutes === minute ? "primary" : "default"}
                size="small"
              >
                {minute.toString().padStart(2, "0")}
              </Button>
            ))}
          </div>
        </div>

        {showSeconds && (
          <div
            className={`${styles.section} ${
              activeSection === "seconds" ? styles.active : ""
            }`}
            onClick={() => setActiveSection("seconds")}
          >
            <div className={styles.numbers}>
              {seconds.map((second) => (
                <Button
                  key={second}
                  onClick={() => handleValueChange("seconds", second)}
                  className={`${styles.number} ${
                    value?.seconds === second ? styles.selected : ""
                  }`}
                  variant={value?.seconds === second ? "primary" : "default"}
                  size="small"
                >
                  {second.toString().padStart(2, "0")}
                </Button>
              ))}
            </div>
          </div>
        )}

        {format === "12" && (
          <div
            className={`${styles.section} ${
              activeSection === "meridiem" ? styles.active : ""
            }`}
            onClick={() => setActiveSection("meridiem")}
          >
            <div className={styles.meridiems}>
              {meridiems.map((meridiem) => (
                <Button
                  key={meridiem}
                  onClick={() => handleValueChange("meridiem", meridiem)}
                  className={`${styles.meridiem} ${
                    value?.meridiem === meridiem ? styles.selected : ""
                  }`}
                  variant={value?.meridiem === meridiem ? "primary" : "default"}
                  size="small"
                >
                  {meridiem}
                </Button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
