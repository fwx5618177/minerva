import React, { useState } from "react";
import { TextField } from "@minerva/lib-core";
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";
import styles from "./index.module.scss";

const TextFieldSection: React.FC = () => {
  const [basicInput, setBasicInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [minimalInput, setMinimalInput] = useState("");
  const [errorInput, setErrorInput] = useState("");
  const [noBorderInput, setNoBorderInput] = useState("");
  const [clearableInput, setClearableInput] = useState("");
  const [fullWidthInput, setFullWidthInput] = useState("");
  const [customWidthInput, setCustomWidthInput] = useState("");
  const [disabledInput, setDisabledInput] = useState("");
  const [error, setError] = useState("");

  const handleBasicInputChange = (value: string) => {
    setBasicInput(value);
    if (value.length < 3) {
      setError("Input must be at least 3 characters long.");
    } else {
      setError("");
    }
  };

  return (
    <div className={styles.section}>
      <h3>TextField Examples</h3>
      <div className={styles.group}>
        <div>
          <h4>Basic TextField with Icon</h4>
          <TextField
            name="username"
            label="Username"
            placeholder="Enter your username"
            value={basicInput}
            onChange={handleBasicInputChange}
            error={error}
            icon={<FaUser />}
            iconPosition="left"
            borderRadius="0.5rem"
            showCharCount
          />
          <p>展示带有左侧图标的基本 TextField</p>
        </div>
        <div>
          <h4>Label TextField</h4>
          <TextField
            name="email"
            label="Email"
            value={emailInput}
            onChange={setEmailInput}
            icon={<FaEnvelope />}
          />
          <TextField
            name="email2"
            label="Email"
            value={emailInput}
            onChange={setEmailInput}
          />
        </div>
        <div>
          <h4>Password TextField with Icon</h4>
          <TextField
            name="password"
            label="Password"
            placeholder="Enter your password"
            value={passwordInput}
            onChange={setPasswordInput}
            borderColor="#ff9800"
            borderRadius="0.5rem"
            type="password"
          />
          <p>展示带有右侧图标的密码输入框</p>

          <TextField
            name="textPassword"
            label="Text Password"
            placeholder="Enter your password"
            value={passwordInput}
            onChange={setPasswordInput}
            icon={<FaLock />}
            iconPosition="right"
            borderColor="#ff9800"
            borderRadius="0.5rem"
          />
          <p>展示带有右侧图标的密码输入框</p>
        </div>
        <div>
          <h4>Minimal TextField</h4>
          <TextField
            name="minimal"
            label="Minimal TextField"
            value={minimalInput}
            onChange={setMinimalInput}
            minimal
          />
          <p>展示最小版本的 TextField</p>
        </div>
        <div>
          <h4>Error Example</h4>
          <TextField
            name="errorExample"
            label="Error Example"
            placeholder="Enter text"
            value={errorInput}
            onChange={setErrorInput}
            error={error}
            borderRadius="0.5rem"
          />
          <p>展示带有错误消息的 TextField</p>
        </div>
        <div>
          <h4>No Border TextField</h4>
          <TextField
            name="noBorder"
            label="No Border"
            placeholder="No border"
            value={noBorderInput}
            onChange={setNoBorderInput}
            hideBorder
            borderRadius="0.5rem"
          />
          <p>展示无边框的 TextField</p>
        </div>
        <div>
          <h4>Clearable TextField</h4>
          <TextField
            name="clearable"
            label="Email"
            value={clearableInput}
            onChange={setClearableInput}
            icon={<FaEnvelope />}
            iconPosition="left"
            borderRadius="0.5rem"
            clearable
          />
          <p>展示带有清除功能的 TextField</p>
        </div>
        <div>
          <h4>Full Width TextField</h4>
          <TextField
            name="fullWidth"
            label="Full Width"
            placeholder="Enter text"
            value={fullWidthInput}
            onChange={setFullWidthInput}
            borderRadius="0.5rem"
            fullWidth
          />
          <p>展示全宽度的 TextField</p>
        </div>
        <div>
          <h4>Custom Width TextField</h4>
          <TextField
            name="customWidth"
            label="Custom Width"
            value={customWidthInput}
            onChange={setCustomWidthInput}
            borderRadius="0.5rem"
            width="300px"
          />
          <p>展示自定义宽度的 TextField</p>
        </div>
        <div>
          <h4>Disabled TextField</h4>
          <TextField
            name="disabled"
            label="Disabled"
            placeholder="Disabled input"
            value={disabledInput}
            onChange={setDisabledInput}
            borderRadius="0.5rem"
            disabled
          />
          <p>展示禁用状态的 TextField</p>
        </div>
        <div>
          <h4>TextField with and without Icon</h4>
          <TextField
            name="withIcon"
            label="With Icon"
            placeholder="With Icon"
            value={basicInput}
            onChange={handleBasicInputChange}
            icon={<FaUser />}
            iconPosition="left"
            borderRadius="0.5rem"
          />
          <TextField
            name="withoutIcon"
            label="Without Icon"
            placeholder="Without Icon"
            value={basicInput}
            onChange={handleBasicInputChange}
            borderRadius="0.5rem"
          />
          <p>展示带有和不带图标的 TextField</p>
        </div>
        <div>
          <h4>TextField with and without Error</h4>
          <TextField
            name="withError"
            label="With Error"
            placeholder="With Error"
            value={basicInput}
            onChange={handleBasicInputChange}
            error={error}
            borderRadius="0.5rem"
          />
          <TextField
            name="withoutError"
            label="Without Error"
            placeholder="Without Error"
            value={basicInput}
            onChange={handleBasicInputChange}
            borderRadius="0.5rem"
          />
          <p>展示带有和不带错误消息的 TextField</p>
        </div>
        <div>
          <h4>TextField with and without Clearable</h4>
          <TextField
            name="clearableField"
            label="Clearable"
            placeholder="Clearable"
            value={clearableInput}
            onChange={setClearableInput}
            clearable
            borderRadius="0.5rem"
          />
          <TextField
            name="notClearable"
            label="Not Clearable"
            placeholder="Not Clearable"
            value={clearableInput}
            onChange={setClearableInput}
            borderRadius="0.5rem"
          />
          <p>展示带有和不带清除功能的 TextField</p>
        </div>
        <div>
          <h4>TextField with and without ShowCharCount</h4>
          <TextField
            name="showCharCount"
            label="Show Char Count"
            placeholder="Show Char Count"
            value={basicInput}
            onChange={handleBasicInputChange}
            showCharCount
            borderRadius="0.5rem"
          />
          <TextField
            name="noCharCount"
            label="No Char Count"
            placeholder="No Char Count"
            value={basicInput}
            onChange={handleBasicInputChange}
            borderRadius="0.5rem"
          />
          <p>展示带有和不带字符计数的 TextField</p>
        </div>
        <div>
          <h4>TextField with Different Sizes</h4>
          <TextField
            name="smallSize"
            label="Small Size"
            value={basicInput}
            onChange={handleBasicInputChange}
            size="small"
            borderRadius="0.5rem"
          />
          <TextField
            name="mediumSize"
            label="Medium Size"
            value={basicInput}
            onChange={handleBasicInputChange}
            size="medium"
            borderRadius="0.5rem"
          />
          <TextField
            name="largeSize"
            label="Large Size"
            value={basicInput}
            onChange={handleBasicInputChange}
            size="large"
            borderRadius="0.5rem"
          />
          <p>展示不同尺寸的 TextField</p>
        </div>
        <div>
          <h4>TextField with Suffix</h4>
          <TextField
            name="withSuffix1"
            label="With Unit"
            value={basicInput}
            onChange={handleBasicInputChange}
            suffix={<span>kg</span>}
            borderRadius="0.5rem"
          />
          <TextField
            name="withSuffix2"
            label="With Icon Suffix"
            value={basicInput}
            onChange={handleBasicInputChange}
            suffix={<FaUser />}
            borderRadius="0.5rem"
          />
          <TextField
            name="withSuffix3"
            label="With Text Suffix"
            value={emailInput}
            onChange={setEmailInput}
            suffix="@gmail.com"
            borderRadius="0.5rem"
          />
          <p>展示带有不同后缀的 TextField</p>
        </div>
        <div>
          <h4>TextField with ReadOnly</h4>
          <TextField
            name="readOnly1"
            label="Basic ReadOnly"
            value="This is read-only text"
            onChange={() => {}}
            readOnly
            borderRadius="0.5rem"
          />
          <TextField
            name="readOnly2"
            label="ReadOnly with Icon"
            value="Read-only with icon"
            onChange={() => {}}
            readOnly
            icon={<FaLock />}
            borderRadius="0.5rem"
          />
          <TextField
            name="readOnly3"
            label="ReadOnly with Suffix"
            value="100"
            onChange={() => {}}
            readOnly
            suffix="USD"
            borderRadius="0.5rem"
          />
          <p>展示只读状态的 TextField</p>
        </div>
        <div>
          <h4>Combined Features</h4>
          <TextField
            name="combined1"
            label="All Features"
            value={basicInput}
            onChange={handleBasicInputChange}
            icon={<FaUser />}
            suffix={<span>@company.com</span>}
            size="small"
            clearable
            showCharCount
            borderRadius="0.5rem"
          />
          <TextField
            name="combined2"
            label="ReadOnly Large"
            value="Read-only large text"
            onChange={() => {}}
            readOnly
            size="large"
            suffix={<FaLock />}
            borderRadius="0.5rem"
          />
          <p>展示组合使用多个特性的 TextField</p>
        </div>
      </div>
    </div>
  );
};

export default TextFieldSection;
