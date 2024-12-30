import React, { useState, useRef } from "react";
import { Checkbox, Button } from "@minerva/lib-core";
import {
  FaCheck,
  FaStar,
  FaHeart,
  FaExclamationCircle,
  FaInfoCircle,
  FaCheckCircle,
  FaTimesCircle,
  FaBell,
  FaBookmark,
} from "react-icons/fa";
import styles from "./index.module.scss";

const CheckboxSection: React.FC = () => {
  const [checked, setChecked] = useState(false);
  const [indeterminate, setIndeterminate] = useState(true);
  const checkboxRef = useRef<HTMLInputElement>(null);
  const [isError, setIsError] = useState<boolean>(false);

  const handleError = () => {
    if (checkboxRef.current) {
      checkboxRef.current.focus();
      checkboxRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
      setIsError(true);
      // 重置错误状态，以便可以重复触发动画
      setTimeout(() => setIsError(false), 1000);
    }
  };

  return (
    <div className={styles.section}>
      <h3>Basic Checkboxes</h3>
      <div className={styles.group}>
        <Checkbox label="Default Checkbox" />
        <Checkbox label="Checked Checkbox" defaultChecked />
        <Checkbox label="Disabled Checkbox" disabled />
        <Checkbox label="Disabled Checked" disabled defaultChecked />
        <Checkbox
          label="Indeterminate"
          checked={indeterminate}
          onChange={() => setIndeterminate(!indeterminate)}
          indeterminate
        />
      </div>

      <h3>Checkbox Shapes</h3>
      <div className={styles.group}>
        <Checkbox label="Square Checkbox" shape="square" defaultChecked />
        <Checkbox label="Rounded Checkbox" shape="rounded" defaultChecked />
        <Checkbox label="Circle Checkbox" shape="circle" defaultChecked />
      </div>

      <h3>Checkbox Sizes</h3>
      <div className={styles.group}>
        <Checkbox label="Small Checkbox" size="small" defaultChecked />
        <Checkbox label="Medium Checkbox" size="medium" defaultChecked />
        <Checkbox label="Large Checkbox" size="large" defaultChecked />
      </div>

      <h3>Custom Icons</h3>
      <div className={styles.group}>
        <Checkbox
          label="Check Icon"
          defaultChecked
          icon={<FaCheck size={12} />}
          boxColor="#4caf50"
          checkmarkColor="#fff"
        />
        <Checkbox
          label="Star Icon"
          defaultChecked
          icon={<FaStar size={12} />}
          boxColor="#ff9800"
          checkmarkColor="#fff"
        />
        <Checkbox
          label="Heart Icon"
          defaultChecked
          icon={<FaHeart size={12} />}
          boxColor="#f44336"
          checkmarkColor="#fff"
        />
        <Checkbox
          label="Bell Icon"
          defaultChecked
          icon={<FaBell size={12} />}
          boxColor="#9c27b0"
          checkmarkColor="#fff"
        />
        <Checkbox
          label="Bookmark Icon"
          defaultChecked
          icon={<FaBookmark size={12} />}
          boxColor="#2196f3"
          checkmarkColor="#fff"
        />
      </div>

      <h3>Custom Colors & Styles</h3>
      <div className={styles.group}>
        <Checkbox
          label="Purple Theme"
          defaultChecked
          boxColor="#9c27b0"
          checkmarkColor="#ffffff"
          shape="rounded"
        />
        <Checkbox
          label="Gradient Theme"
          defaultChecked
          boxColor="linear-gradient(45deg, #2196f3, #00bcd4)"
          checkmarkColor="#fff"
          shape="circle"
        />
        <Checkbox
          label="Custom Border"
          defaultChecked
          boxColor="#e91e63"
          boxBorderColor="#c2185b"
          checkmarkColor="#fff"
        />
        <Checkbox
          label="Gold Theme"
          defaultChecked
          boxColor="#ffd700"
          boxBorderColor="#daa520"
          checkmarkColor="#000"
          icon={<FaStar size={12} />}
        />

        <Checkbox
          label="Custom Checkmark Color"
          defaultChecked
          checkmarkColor="#ffffff"
          boxColor="#9c27b0"
        />
        <Checkbox
          label="Custom Box Color"
          defaultChecked
          boxColor="#e91e63"
          boxBorderColor="#c2185b"
        />
        <Checkbox
          label="Gradient Background"
          defaultChecked
          boxColor="linear-gradient(45deg, #2196f3, #00bcd4)"
          checkmarkColor="#fff"
        />
      </div>

      <h3>Error States & Validation</h3>
      <div className={styles.group}>
        <Checkbox
          label="Basic Error"
          error
          helperText="This field is required"
        />
        <Checkbox
          label="Custom Error Icon"
          error
          errorIcon={<FaTimesCircle />}
          helperText="Please accept the terms"
        />
        <Checkbox
          label="Info Error Style"
          error
          errorIcon={<FaInfoCircle color="#1976d2" />}
          helperText="Additional information needed"
          boxColor="#1976d2"
        />
        <Checkbox
          label="Warning Style"
          error
          errorIcon={<FaExclamationCircle color="#ff9800" />}
          helperText="Please review your selection"
          boxColor="#ff9800"
        />
      </div>

      <h3>Label Placements</h3>
      <div className={styles.group}>
        <Checkbox
          label="Top Label"
          labelPlacement="top"
          defaultChecked
          icon={<FaCheckCircle />}
          boxColor="#4caf50"
        />
        <Checkbox
          label="Bottom Label"
          labelPlacement="bottom"
          defaultChecked
          icon={<FaCheckCircle />}
          boxColor="#2196f3"
        />
        <Checkbox
          label="Start Label"
          labelPlacement="start"
          defaultChecked
          icon={<FaCheckCircle />}
          boxColor="#9c27b0"
        />
        <Checkbox
          label="End Label"
          labelPlacement="end"
          defaultChecked
          icon={<FaCheckCircle />}
          boxColor="#ff9800"
        />
      </div>

      <h3>Interactive Examples</h3>
      <div className={styles.group}>
        <Checkbox
          label="Controlled Checkbox"
          checked={checked}
          onChange={(checked) => setChecked(checked)}
          boxColor="#2196f3"
          icon={<FaCheck size={12} />}
        />
        <Checkbox
          ref={checkboxRef}
          label="Animated Error State"
          error={isError}
          helperText="Click the button to trigger error animation"
          boxColor="#d32f2f"
          errorIcon={<FaExclamationCircle />}
        />
        <Button onClick={handleError}>Trigger Error Animation</Button>
      </div>
    </div>
  );
};

export default CheckboxSection;
