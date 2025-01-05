import React, { useState } from "react";
import { Cascader } from "@minerva/lib-core";
import type { CascaderOption } from "@minerva/lib-core";
import styles from "./section.module.scss";

const CascaderSection: React.FC = () => {
  // 示例数据
  const options: CascaderOption[] = [
    {
      value: "zhejiang",
      label: "浙江",
      children: [
        {
          value: "hangzhou",
          label: "杭州",
          children: [
            {
              value: "xihu",
              label: "西湖",
            },
          ],
        },
      ],
    },
    {
      value: "jiangsu",
      label: "江苏",
      children: [
        {
          value: "nanjing",
          label: "南京",
          children: [
            {
              value: "zhonghuamen",
              label: "中华门",
            },
          ],
        },
      ],
    },
  ];

  // 添加更多层级的示例数据
  const deepOptions: CascaderOption[] = [
    {
      value: "level1",
      label: "Level 1",
      children: [
        {
          value: "level2",
          label: "Level 2",
          children: [
            {
              value: "level3",
              label: "Level 3",
              children: [
                {
                  value: "level4",
                  label: "Level 4",
                  children: [
                    {
                      value: "level5",
                      label: "Level 5",
                      children: [
                        {
                          value: "level6",
                          label: "Level 6",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ];

  const [selectedValue, setSelectedValue] = useState<(string | number)[]>([]);

  return (
    <div className={styles.section}>
      <h3>Basic Usage</h3>
      <p className={styles.description}>基础级联选择器，支持多级选择</p>
      <div className={styles.group}>
        <div style={{ width: "100%", maxWidth: 320 }}>
          <Cascader
            label="Basic"
            name="basic"
            options={options}
            placeholder="请选择"
          />
        </div>
      </div>

      <h3>Different Sizes</h3>
      <p className={styles.description}>不同尺寸的级联选择器</p>
      <div className={styles.group}>
        <div style={{ width: 200 }}>
          <Cascader
            label="Small"
            name="small"
            options={options}
            placeholder="Small size"
          />
        </div>
        <div style={{ width: 280 }}>
          <Cascader
            label="Medium"
            name="medium"
            options={options}
            placeholder="Medium size"
          />
        </div>
        <div style={{ width: 360 }}>
          <Cascader
            label="Large"
            name="large"
            options={options}
            placeholder="Large size"
          />
        </div>
      </div>

      <h3>Default Value</h3>
      <p className={styles.description}>设置默认值的级联选择器</p>
      <div className={styles.group}>
        <Cascader
          label="Default Value"
          name="defaultValue"
          options={options}
          defaultValue={["zhejiang", "hangzhou", "xihu"]}
        />
      </div>

      <h3>Controlled Mode</h3>
      <p className={styles.description}>受控模式的级联选择器</p>
      <div className={styles.group}>
        <Cascader
          label="Controlled"
          name="controlled"
          options={options}
          value={selectedValue}
          onChange={(value) => setSelectedValue(value)}
        />
      </div>

      <h3>Custom Display</h3>
      <p className={styles.description}>自定义显示格式</p>
      <div className={styles.group}>
        <Cascader
          label="Custom Display"
          name="customDisplay"
          options={options}
          displayRender={(labels) => labels.join(" > ")}
        />
      </div>

      <h3>Disabled State</h3>
      <p className={styles.description}>禁用状态的级联选择器</p>
      <div className={styles.group}>
        <Cascader
          label="Disabled"
          name="disabled"
          options={options}
          disabled
          defaultValue={["zhejiang", "hangzhou"]}
        />
      </div>

      <h3>Search Mode</h3>
      <p className={styles.description}>可搜索的级联选择器</p>
      <div className={styles.group}>
        <Cascader
          label="Searchable"
          name="searchable"
          options={options}
          width={280}
          showSearch
          filter={(inputValue, path) =>
            path.some((option) =>
              option.label
                .toString()
                .toLowerCase()
                .includes(inputValue.toLowerCase()),
            )
          }
        />
      </div>

      <h3>Dynamic Loading</h3>
      <p className={styles.description}>动态加载数据的级联选择器</p>
      <div className={styles.group}>
        <Cascader
          label="Dynamic Loading"
          name="dynamicLoading"
          options={[
            {
              value: "parent",
              label: "Parent Node",
              isLeaf: false,
            },
          ]}
          loadData={(selectedOptions) => {
            const targetOption = selectedOptions[selectedOptions.length - 1];
            targetOption.loading = true;

            // 模拟异步加载
            setTimeout(() => {
              targetOption.loading = false;
              targetOption.children = [
                {
                  label: `${targetOption.label} Child`,
                  value: `${targetOption.value}-child`,
                },
              ];
            }, 1000);
          }}
        />
      </div>

      <h3>Custom Option Render</h3>
      <p className={styles.description}>自定义选项渲染</p>
      <div className={styles.group}>
        <Cascader
          label="Custom Render"
          name="customRender"
          options={options}
          optionRender={(option, level) => (
            <div style={{ padding: "4px 8px" }}>
              <span>{option.label}</span>
              {level < 2 && <span style={{ float: "right" }}>→</span>}
            </div>
          )}
        />
      </div>

      <h3>Deep Nesting</h3>
      <p className={styles.description}>支持最多6层级联</p>
      <div className={styles.group}>
        <Cascader
          label="Deep Nesting"
          name="deepNesting"
          options={deepOptions}
          width={280}
        />
      </div>

      <h3>Custom Styles</h3>
      <p className={styles.description}>自定义样式的级联选择器</p>
      <div className={styles.group}>
        <Cascader
          label="Custom Style"
          name="customStyle"
          options={options}
          width={280}
          dropdownStyle={{
            background: "#f6f7f9",
            borderRadius: "8px",
          }}
          optionStyle={{
            borderRadius: "4px",
            margin: "2px 4px",
          }}
          style={
            {
              "--cascader-option-hover-bg": "#e6f4ff",
              "--cascader-option-active-bg": "#1890ff",
              "--cascader-option-active-color": "#ffffff",
            } as React.CSSProperties
          }
        />
      </div>

      <h3>Max Level Control</h3>
      <p className={styles.description}>控制最大层级数</p>
      <div className={styles.group}>
        <Cascader
          label="Max Level 3"
          name="maxLevel"
          options={deepOptions}
          maxLevel={3}
          width={280}
        />
      </div>
    </div>
  );
};

export default CascaderSection;
