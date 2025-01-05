import React, { useState } from "react";
import { AutoComplete, Button } from "@minerva/lib-core";
import styles from "./section.module.scss";
import { IoLogoJavascript } from "react-icons/io5";

const AutoCompleteSection: React.FC = () => {
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);

  const programmingLanguages = [
    {
      label: "JavaScript",
      value: "js",
      icon: <IoLogoJavascript />,
      description: "Popular programming language",
      group: "Frontend",
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
      description: "General-purpose programming language",
      group: "Backend",
    },
    // ... more options
  ];

  const handleSearch = (value: string) => {
    setLoading(true);
    // 模拟异步搜索
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  return (
    <div className={styles.section}>
      <h3>Basic AutoComplete</h3>
      <div className={styles.group}>
        <div style={{ width: 300 }}>
          <AutoComplete
            options={programmingLanguages}
            placeholder="Type to search..."
            value={value}
            onChange={setValue}
          />
        </div>
      </div>

      <h3>Grouped Options</h3>
      <div className={styles.group}>
        <div style={{ width: 300 }}>
          <AutoComplete
            options={programmingLanguages}
            placeholder="Search grouped options..."
            groupBy={(option) => option.group || "Other"}
          />
        </div>
      </div>

      <h3>Multiple Selection</h3>
      <div className={styles.group}>
        <div style={{ width: 300 }}>
          <AutoComplete
            options={programmingLanguages}
            placeholder="Select multiple..."
            multiple
            maxTagCount={2}
          />
        </div>
      </div>

      <h3>Loading State</h3>
      <div className={styles.group}>
        <div style={{ width: 300 }}>
          <AutoComplete
            options={programmingLanguages}
            placeholder="Type to search..."
            loading={loading}
            onChange={handleSearch}
          />
        </div>
      </div>
    </div>
  );
};

export default AutoCompleteSection;
