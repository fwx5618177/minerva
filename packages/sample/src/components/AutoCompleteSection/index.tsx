import React, { useState } from "react";
import { AutoComplete, Button } from "@minerva/lib-core";
import styles from "./section.module.scss";

const options = [
  { label: "JavaScript", value: "js" },
  { label: "TypeScript", value: "ts" },
  { label: "Python", value: "py" },
  { label: "Java", value: "java" },
  { label: "C++", value: "cpp" },
  { label: "Ruby", value: "rb" },
  { label: "Go", value: "go" },
  { label: "Rust", value: "rs" },
];

const AutoCompleteSection: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [largeOptions, setLargeOptions] = useState(() =>
    Array.from({ length: 10000 }, (_, i) => ({
      label: `Option ${i}`,
      value: `value-${i}`,
      description: `Description for option ${i}`,
    })),
  );

  const handleSearch = async (value: string) => {
    setLoading(true);
    // 模拟异步搜索
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setLoading(false);
  };

  return (
    <div className={styles.section}>
      <h3>Basic AutoComplete</h3>
      <p className={styles.description}>基础的自动完成功能</p>
      <div className={styles.group}>
        <div style={{ width: 300 }}>
          <AutoComplete options={options} placeholder="Type to search..." />
        </div>
      </div>

      <h3>Custom Filter</h3>
      <p className={styles.description}>自定义过滤逻辑</p>
      <div className={styles.group}>
        <div style={{ width: 300 }}>
          <AutoComplete
            options={options}
            placeholder="Custom filter..."
            filterOption={(
              inputValue: string,
              option: { label: string; value: string },
            ) =>
              option.label.toLowerCase().indexOf(inputValue.toLowerCase()) !==
                -1 ||
              option.value.toLowerCase().indexOf(inputValue.toLowerCase()) !==
                -1
            }
          />
        </div>
      </div>

      <h3>Async Search</h3>
      <p className={styles.description}>异步搜索功能</p>
      <div className={styles.group}>
        <div style={{ width: 300 }}>
          <AutoComplete
            options={options}
            placeholder="Search..."
            onSearch={handleSearch}
            loading={loading}
            debounceTime={500}
          />
        </div>
      </div>

      <h3>Group Options</h3>
      <p className={styles.description}>分组展示选项</p>
      <div className={styles.group}>
        <div style={{ width: 300 }}>
          <AutoComplete
            options={[
              { label: "JavaScript", value: "js", group: "Frontend" },
              { label: "TypeScript", value: "ts", group: "Frontend" },
              { label: "React", value: "react", group: "Frontend" },
              { label: "Python", value: "py", group: "Backend" },
              { label: "Java", value: "java", group: "Backend" },
              { label: "Go", value: "go", group: "Backend" },
            ]}
            placeholder="Grouped options..."
            groupBy={(option) => option.group}
          />
        </div>
      </div>

      <h3>Custom Render</h3>
      <p className={styles.description}>自定义渲染选项和空状态</p>
      <div className={styles.group}>
        <div style={{ width: 300 }}>
          <AutoComplete
            options={options}
            placeholder="Custom render..."
            renderOption={(option) => (
              <div style={{ padding: "8px" }}>
                <div style={{ fontWeight: "bold" }}>{option.label}</div>
                <div style={{ fontSize: "0.875rem", color: "#666" }}>
                  Value: {option.value}
                </div>
              </div>
            )}
            renderEmpty={() => (
              <div
                style={{
                  padding: "16px",
                  textAlign: "center",
                  color: "#666",
                }}
              >
                No matching options
              </div>
            )}
          />
        </div>
      </div>

      <h3>Large Dataset Performance</h3>
      <p className={styles.description}>
        处理大规模数据集的性能表现 (10,000+ 选项)
      </p>
      <div className={styles.group}>
        <div style={{ width: 300 }}>
          <AutoComplete
            options={largeOptions}
            placeholder="Type to search in 10,000+ options..."
            filterOption={(inputValue, option) =>
              option.label.toLowerCase().includes(inputValue.toLowerCase())
            }
            renderOption={(option) => (
              <div style={{ padding: "8px" }}>
                <div>{option.label}</div>
                <div style={{ fontSize: "0.75rem", color: "#666" }}>
                  {option.description}
                </div>
              </div>
            )}
          />
        </div>
        <Button
          onClick={() =>
            setLargeOptions((prev) => [
              ...prev,
              ...Array.from({ length: 10000 }, (_, i) => ({
                label: `New Option ${prev.length + i}`,
                value: `new-value-${prev.length + i}`,
                description: `New description ${prev.length + i}`,
              })),
            ])
          }
        >
          加载更多选项 (+10,000)
        </Button>
      </div>
    </div>
  );
};

export default AutoCompleteSection;
