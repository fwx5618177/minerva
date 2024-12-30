import React, { useState, useRef } from "react";
import { Checkbox, Button } from "@minerva/lib-core";
import { FaCheck, FaStar, FaHeart, FaExclamationCircle } from "react-icons/fa";
import styles from "./index.module.scss";

const CheckboxSection: React.FC = () => {
  const [checked, setChecked] = useState(false);
  const [indeterminate, setIndeterminate] = useState(true);
  const checkboxRef = useRef<HTMLInputElement>(null);
  const [isError, setIsError] = useState<boolean>(true);

  const handleError = () => {
    if (checkboxRef.current) {
      console.log("checkbox:", checkboxRef.current);
      checkboxRef.current.focus();
      checkboxRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
      setIsError((state) => !state);
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

      <h3>Custom Colors</h3>
      <div className={styles.group}>
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

      <h3>Custom Icons</h3>
      <div className={styles.group}>
        <Checkbox
          label="Check Icon"
          defaultChecked
          icon={<FaCheck />}
          boxColor="#4caf50"
        />
        <Checkbox
          label="Star Icon"
          defaultChecked
          icon={<FaStar />}
          boxColor="#ff9800"
        />
        <Checkbox
          label="Heart Icon"
          defaultChecked
          icon={<FaHeart />}
          boxColor="#f44336"
        />
      </div>

      <h3>Label Placement</h3>
      <div className={styles.group}>
        <Checkbox label="Label Start" labelPlacement="start" defaultChecked />
        <Checkbox label="Label End" labelPlacement="end" defaultChecked />
        <Checkbox label="Label Top" labelPlacement="top" defaultChecked />
        <Checkbox label="Label Bottom" labelPlacement="bottom" defaultChecked />
      </div>

      <h3>States and Validation</h3>
      <div className={styles.group}>
        <Checkbox
          label="Controlled Checkbox"
          checked={checked}
          onChange={(checked: boolean) => setChecked(checked)}
        />
        <Checkbox
          label="Required Checkbox"
          required
          helperText="This field is required"
        />
        <Checkbox
          label="Error State"
          error
          helperText="Please accept the terms and conditions"
        />
        <Checkbox
          label="Custom Error Icon"
          error
          errorIcon={<FaExclamationCircle />}
          helperText="Something went wrong"
        />
      </div>

      <h3>Complex Examples</h3>
      <div className={styles.group}>
        <Checkbox
          label="Premium Selection"
          icon={<FaStar />}
          boxColor="#ffd700"
          boxBorderColor="#daa520"
          checkmarkColor="#fff"
          labelPlacement="start"
          helperText="Unlock premium features"
        />
        <Checkbox
          label="Terms and Conditions"
          shape="rounded"
          size="large"
          required
          error
          helperText="You must accept the terms to continue"
          boxColor="#2196f3"
        />
      </div>

      <h3>Error Animation</h3>
      <div className={styles.group}>
        <Checkbox
          ref={checkboxRef}
          label="Animated Error"
          error={isError}
          helperText="This field has an error"
          boxColor="#d32f2f"
        />
        <Button onClick={handleError}>Trigger Error Animation</Button>
      </div>
    </div>
  );
};

export default CheckboxSection;
