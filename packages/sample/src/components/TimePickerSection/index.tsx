import React, { useState } from "react";
import { TimePicker, TimeValue } from "@minerva/lib-core";
import styles from "./index.module.scss";
import { Button } from "@minerva/lib-core";

const TimePickerSection: React.FC = () => {
  return (
    <div className={styles.section}>
      <h3>Basic Usage</h3>
      <div className={styles.group}>
        <TimePicker />
        <TimePicker format="12" />
        <TimePicker showSeconds />
      </div>

      <h3>Variants</h3>
      <div className={styles.group}>
        <TimePicker variant="outlined" />
        <TimePicker variant="filled" />
        <TimePicker variant="standard" />
      </div>

      <h3>Sizes</h3>
      <div className={styles.group}>
        <TimePicker size="small" />
        <TimePicker size="medium" />
        <TimePicker size="large" />
      </div>

      <h3>States</h3>
      <div className={styles.group}>
        <TimePicker disabled />
        <TimePicker readOnly />
        <TimePicker error errorText="Invalid time" />
      </div>

      <h3>Custom Format</h3>
      <div className={styles.group}>
        <TimePicker
          formatTime={(value) =>
            `${value.hours}h ${value.minutes}m ${value.seconds}s`
          }
        />
      </div>

      <h3>Validation</h3>
      <div className={styles.group}>
        <TimePicker
          minTime={{ hours: 9, minutes: 0 }}
          maxTime={{ hours: 17, minutes: 30 }}
        />
        <TimePicker
          onValidate={(value) => value.hours >= 9 && value.hours <= 17}
        />
      </div>

      <h3>Custom Rendering</h3>
      <div className={styles.group}>
        <TimePicker
          renderInput={({ value, onClick }) => (
            <Button onClick={onClick}>
              {value ? formatTime(value) : "Pick Time"}
            </Button>
          )}
        />
      </div>
    </div>
  );
};

export default TimePickerSection;
