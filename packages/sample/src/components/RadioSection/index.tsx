import React, { useState } from "react";
import { Radio, RadioGroup } from "@minerva/lib-core";
import { FaExclamationCircle } from "react-icons/fa";
import styles from "./index.module.scss";

const RadioSection: React.FC = () => {
  const [value, setValue] = useState("1");
  const [errorValue, setErrorValue] = useState("");

  return (
    <div className={styles.section}>
      <h3>Basic Radio</h3>
      <div className={styles.group}>
        <Radio label="Default Radio" value="default" />
        <Radio label="Checked Radio" defaultChecked value="checked" />
        <Radio label="Disabled Radio" disabled value="disabled" />
        <Radio
          label="Disabled Checked"
          disabled
          defaultChecked
          value="disabled-checked"
        />
      </div>

      <h3>Radio Types & Colors</h3>
      <div className={styles.group}>
        <RadioGroup direction="horizontal">
          <Radio label="Default" type="default" defaultChecked />
          <Radio
            label="Primary"
            type="primary"
            defaultChecked
            color="#1976d2"
          />
          <Radio
            label="Success"
            type="success"
            defaultChecked
            color="#2e7d32"
          />
          <Radio
            label="Warning"
            type="warning"
            defaultChecked
            color="#ed6c02"
          />
          <Radio label="Error" type="error" defaultChecked color="#d32f2f" />
        </RadioGroup>
      </div>

      <h3>Radio Shapes</h3>
      <div className={styles.group}>
        <RadioGroup direction="horizontal">
          <Radio label="Circle" shape="circle" defaultChecked />
          <Radio label="Square" shape="square" defaultChecked />
          <Radio label="Rounded" shape="rounded" defaultChecked />
        </RadioGroup>
      </div>

      <h3>Sizes with Label Placement</h3>
      <div className={styles.group}>
        <div style={{ display: "flex", gap: "24px" }}>
          <RadioGroup direction="vertical">
            <Radio label="Small Start" size="small" labelPlacement="start" />
            <Radio label="Small End" size="small" labelPlacement="end" />
            <Radio label="Small Top" size="small" labelPlacement="top" />
            <Radio label="Small Bottom" size="small" labelPlacement="bottom" />
          </RadioGroup>
          <RadioGroup direction="vertical">
            <Radio label="Medium Start" labelPlacement="start" />
            <Radio label="Medium End" labelPlacement="end" />
            <Radio label="Medium Top" labelPlacement="top" />
            <Radio label="Medium Bottom" labelPlacement="bottom" />
          </RadioGroup>
          <RadioGroup direction="vertical">
            <Radio label="Large Start" size="large" labelPlacement="start" />
            <Radio label="Large End" size="large" labelPlacement="end" />
            <Radio label="Large Top" size="large" labelPlacement="top" />
            <Radio label="Large Bottom" size="large" labelPlacement="bottom" />
          </RadioGroup>
        </div>
      </div>

      <h3>Custom Styles & States</h3>
      <div className={styles.group}>
        <Radio
          label="Custom Background & Color"
          bgColor="#f3e5f5"
          color="#9c27b0"
          defaultChecked
        />
        <Radio
          label="With Helper Text"
          helperText="This is a helper text"
          color="#1976d2"
        />
        <Radio
          label="With Error State"
          error
          errorMessage="This field has an error"
          errorIcon={<FaExclamationCircle />}
        />
        <Radio
          label="Required Field"
          required
          helperText="This field is required"
        />
      </div>

      <h3>Interactive Radio Groups</h3>
      <div className={styles.group}>
        <RadioGroup
          value={value}
          onChange={(val) => setValue(val.toString())}
          direction="horizontal"
          name="interactive-group"
        >
          <Radio label="Option 1" value="1" />
          <Radio label="Option 2" value="2" />
          <Radio label="Option 3" value="3" />
          <Radio label="Disabled" value="4" disabled />
        </RadioGroup>

        <RadioGroup
          value={errorValue}
          onChange={(val) => setErrorValue(val.toString())}
          error
          required
          helperText="Please select an option"
          name="error-group"
        >
          <Radio
            label="Error Option 1"
            value="error1"
            errorMessage="Selection required"
          />
          <Radio
            label="Error Option 2"
            value="error2"
            errorMessage="Selection required"
          />
        </RadioGroup>
      </div>

      <h3>Advanced Styling</h3>
      <div className={styles.group}>
        <RadioGroup direction="horizontal">
          <Radio
            label="Gradient Background"
            bgColor="linear-gradient(45deg, #2196f3, #21cbf3)"
            color="#fff"
          />
          <Radio
            label="Custom Border"
            style={{
              borderRadius: "8px",
              padding: "8px 16px",
              backgroundColor: "#f5f5f5",
            }}
          />
          <Radio
            label="With Badge"
            helperText={<span style={{ color: "#2196f3" }}>New Feature!</span>}
          />
        </RadioGroup>
      </div>
    </div>
  );
};

export default RadioSection;
