import React, { useState } from "react";
import { TimePicker } from "@minerva/lib-core";
import styles from "./index.module.scss";

const TimePickerSection: React.FC = () => {
  const [time, setTime] = useState<Date>();

  return (
    <div className={styles.section}>
      <h3>Basic TimePicker</h3>
      <div className={styles.group}>
        <TimePicker value={time} onChange={setTime} placeholder="Select time" />
      </div>

      <h3>Time Format</h3>
      <div className={styles.group}>
        <TimePicker format="HH:mm:ss" placeholder="24-hour format" />
        <TimePicker
          format="hh:mm:ss a"
          use12Hours
          placeholder="12-hour format"
        />
        <TimePicker
          format="HH:mm"
          showSecond={false}
          placeholder="Without seconds"
        />
      </div>

      <h3>Size Variants</h3>
      <div className={styles.group}>
        <TimePicker size="small" placeholder="Small" />
        <TimePicker size="medium" placeholder="Medium" />
        <TimePicker size="large" placeholder="Large" />
      </div>

      <h3>States</h3>
      <div className={styles.group}>
        <TimePicker disabled placeholder="Disabled" />
        <TimePicker
          minTime={new Date(2024, 0, 1, 9, 0, 0)}
          maxTime={new Date(2024, 0, 1, 18, 0, 0)}
          placeholder="9:00 - 18:00"
        />
      </div>

      <h3>Step Options</h3>
      <div className={styles.group}>
        <TimePicker hourStep={2} minuteStep={15} secondStep={15} />
      </div>
    </div>
  );
};

export default TimePickerSection;
