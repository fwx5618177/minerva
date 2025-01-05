import React, { useState } from "react";
import { AutoComplete, type AutoCompleteOption } from "@minerva/lib-core";
import { IoLogoJavascript, IoLogoPython, IoLogoNodejs } from "react-icons/io5";
import styles from "./section.module.scss";

const AutoCompleteSection: React.FC = () => {
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectedMultipleOptions, setSelectedMultipleOptions] = useState<
    AutoCompleteOption[]
  >([]);

  const programmingLanguages: AutoCompleteOption[] = [
    {
      label: "JavaScript",
      value: "js",
      icon: <IoLogoJavascript />,
      description: "Popular programming language",
      group: "Frontend",
      highlight: true,
    },
    {
      label: "TypeScript",
      value: "ts",
      icon: <IoLogoJavascript />,
      description: "Typed superset of JavaScript",
      group: "Frontend",
    },
    {
      label: "Python",
      value: "py",
      icon: <IoLogoPython />,
      description: "General-purpose programming language",
      group: "Backend",
    },
    {
      label: "Node.js",
      value: "node",
      icon: <IoLogoNodejs />,
      description: "JavaScript runtime",
      group: "Backend",
      disabled: true,
      style: { color: "#43853d" },
    },
  ];

  return (
    <div className={styles.section}>
      {/* 基础模式 */}
      <h3>Basic Mode</h3>
      <p className={styles.description}>
        基础模式下的自动完成组件。当前选择: {value || "未选择"}
      </p>
      <div className={styles.group}>
        <div style={{ width: 300 }}>
          <AutoComplete
            name="basic"
            label="Programming Language"
            mode="basic"
            value={value}
            onChange={setValue}
            options={programmingLanguages}
            textFieldProps={{
              placeholder: "Type to search...",
              helperText: "Basic mode with default rendering",
              size: "medium",
              clearable: true,
            }}
          />
        </div>
      </div>

      {/* 自定义模式 */}
      <h3>Custom Mode</h3>
      <p className={styles.description}>
        自定义模式允许完全控制选项的渲染方式。
      </p>
      <div className={styles.group}>
        <div style={{ width: 300 }}>
          <AutoComplete
            name="custom"
            label="Custom Rendering"
            mode="custom"
            options={programmingLanguages}
            textFieldProps={{
              placeholder: "Custom mode...",
              helperText: "Custom rendering with icons",
              size: "medium",
            }}
            renderOption={(option) => (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "8px",
                  ...option.style,
                }}
              >
                {option.icon}
                <div>
                  <div style={{ fontWeight: 500 }}>{option.label}</div>
                  <small style={{ color: "#666" }}>{option.description}</small>
                </div>
              </div>
            )}
          />
        </div>
      </div>

      {/* 多选标签模式 */}
      <h3>Multiple Selection</h3>
      <p className={styles.description}>
        多选模式下的标签展示。已选择: {selectedMultipleOptions.length}
      </p>
      <div className={styles.group}>
        <div style={{ width: 300 }}>
          <AutoComplete
            name="multiple"
            label="Multiple Selection"
            options={programmingLanguages}
            multiple
            maxTagCount={2}
            value={selectedMultipleOptions.map((opt) => opt.label).join(", ")}
            textFieldProps={{
              placeholder: "Select multiple...",
              helperText: "Select multiple options",
              size: "medium",
            }}
            onSelect={(option) => {
              setSelectedMultipleOptions((prev) => {
                const exists = prev.some((item) => item.value === option.value);
                return exists
                  ? prev.filter((item) => item.value !== option.value)
                  : [...prev, option];
              });
            }}
          />
        </div>
      </div>

      {/* 空状态和加载状态 */}
      <h3>Empty and Loading States</h3>
      <p className={styles.description}>展示空状态和加载状态。</p>
      <div className={styles.group}>
        <div style={{ width: 300 }}>
          <AutoComplete
            name="empty-loading"
            label="States Demo"
            options={[]}
            loading={loading}
            emptyProps={{
              description: "No results found",
              icon: <IoLogoJavascript />,
              style: { padding: "20px" },
            }}
            textFieldProps={{
              placeholder: "Type to search...",
              helperText: loading ? "Loading..." : "Try searching",
              disabled: loading,
            }}
            popperProps={{
              width: 400,
              height: 400,
            }}
            onChange={() => {
              setLoading(true);
              setTimeout(() => setLoading(false), 1000);
            }}
          />
        </div>
      </div>

      {/* Popper 配置 */}
      <h3>Popper Configuration</h3>
      <p className={styles.description}>自定义下拉框的位置和样式。</p>
      <div className={styles.group}>
        <div style={{ width: 300 }}>
          <AutoComplete
            name="popper"
            label="Popper Settings"
            options={programmingLanguages}
            placement="bottom"
            offset={{ x: 0, y: 8 }}
            dropdownBgColor="#f8f9fa"
            highlightBgColor="#e9ecef"
            hoverBgColor="#dee2e6"
            animation={true}
            textFieldProps={{
              placeholder: "With popper config...",
              size: "medium",
            }}
          />
        </div>
      </div>

      {/* 事件处理 */}
      <h3>Event Handling</h3>
      <p className={styles.description}>
        展示值变化和选择事件的处理。当前值: {value}
      </p>
      <div className={styles.group}>
        <div style={{ width: 300 }}>
          <AutoComplete
            name="events"
            label="Event Handlers"
            options={programmingLanguages}
            value={value}
            onChange={(newValue) => {
              setValue(newValue);
              console.log("Value changed:", newValue);
            }}
            onSelect={(option) => {
              setValue(option.label);
              console.log("Selected:", option);
            }}
            onOptionClick={(option) => console.log("Clicked:", option)}
            onDropdownVisibleChange={(visible) =>
              console.log("Dropdown:", visible)
            }
            textFieldProps={{
              placeholder: "Interact to see events...",
              helperText: "Watch console for events",
              size: "medium",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default AutoCompleteSection;
