import React, { useState } from "react";
import { Radio, RadioGroup } from "@minerva/lib-core";
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

      <h3>Radio Types</h3>
      <div className={styles.group}>
        <RadioGroup direction="horizontal">
          <Radio label="Default" type="default" defaultChecked />
          <Radio label="Primary" type="primary" defaultChecked />
          <Radio label="Success" type="success" defaultChecked />
          <Radio label="Warning" type="warning" defaultChecked />
          <Radio label="Error" type="error" defaultChecked />
        </RadioGroup>
      </div>

      <h3>Radio Sizes</h3>
      <div className={styles.group}>
        <RadioGroup direction="horizontal">
          <Radio label="Small Size" size="small" defaultChecked />
          <Radio label="Medium Size" size="medium" defaultChecked />
          <Radio label="Large Size" size="large" defaultChecked />
        </RadioGroup>
      </div>

      <h3>Error States</h3>
      <div className={styles.group}>
        <RadioGroup
          value={errorValue}
          onChange={(val: string | number) => setErrorValue(val.toString())}
          error
          required
          helperText="Please select an option"
        >
          <Radio
            label="Option 1"
            value="1"
            errorMessage="This field is required"
          />
          <Radio
            label="Option 2"
            value="2"
            errorMessage="This field is required"
          />
        </RadioGroup>
      </div>

      <h3>Custom Styles</h3>
      <div className={styles.group}>
        <Radio label="Custom Color" color="#9c27b0" defaultChecked />
        <Radio
          label="Custom Background"
          bgColor="#f3e5f5"
          color="#f3e5f5"
          defaultChecked
        />
      </div>

      <h3>Radio Group Direction</h3>
      <div className={styles.group}>
        <RadioGroup
          value={value}
          onChange={(val: string | number) => setValue(val.toString())}
          direction="horizontal"
        >
          <Radio label="Horizontal 1" value="1" />
          <Radio label="Horizontal 2" value="2" />
          <Radio label="Horizontal 3" value="3" />
        </RadioGroup>

        <RadioGroup direction="vertical">
          <Radio label="Vertical 1" value="1" />
          <Radio label="Vertical 2" value="2" />
          <Radio label="Vertical 3" value="3" />
        </RadioGroup>
      </div>
    </div>
  );
};

export default RadioSection;
