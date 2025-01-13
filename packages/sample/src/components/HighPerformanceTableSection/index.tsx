import React, { useState, useCallback } from "react";
import { HighPerformanceTable, TableDataValue } from "@minerva/lib-core";
import { generateMockData } from "./mockData";
import styles from "./styles.module.scss";
import CodeBlock from "@layout/CodeBlock";

const basicUsageCode = `
import { HighPerformanceTable } from '@minerva/lib-core';

const columns = [
  {
    key: 'id',
    title: 'ID',
    width: 80,
    sortable: true,
  },
  // ... more columns
];

const MyComponent = () => {
  const [data] = useState(() => generateMockData(100000));

  return (
    <HighPerformanceTable
      data={data}
      columns={columns}
      width="100%"
      height={400}
      onSort={(key, order) => console.log('Sort:', key, order)}
      onFilter={(key, value) => console.log('Filter:', key, value)}
      onScroll={(top, left) => console.log('Scroll:', top, left)}
    />
  );
};
          `;

/**
 * 生成不同数量级的数据
 */
const DATA_SCALES = [
  { label: "1万条数据", value: 10000 },
  { label: "10万条数据", value: 100000 },
  { label: "100万条数据", value: 1000000 },
];

const COLUMNS = [
  {
    key: "id",
    title: "ID",
    width: 80,
    sortable: true,
  },
  {
    key: "name",
    title: "名称",
    width: 120,
    sortable: true,
    filterable: true,
  },
  {
    key: "age",
    title: "年龄",
    width: 80,
    sortable: true,
  },
  {
    key: "address",
    title: "地址",
    width: 250,
    filterable: true,
  },
  {
    key: "email",
    title: "邮箱",
    width: 200,
    filterable: true,
  },
];

export const HighPerformanceTableSection: React.FC = () => {
  const [dataScale, setDataScale] = useState(DATA_SCALES[0].value);
  const [data] = useState(() => generateMockData(dataScale));
  const [sortInfo, setSortInfo] = useState<{
    key: string;
    order: "asc" | "desc" | null;
  }>({ key: "", order: null });
  const [filterInfo, setFilterInfo] = useState<Record<string, TableDataValue>>(
    {},
  );

  const handleSort = useCallback(
    (key: string, order: "asc" | "desc" | null) => {
      setSortInfo({ key, order });
      console.log("Sort:", key, order);
    },
    [],
  );

  const handleFilter = useCallback((key: string, value: TableDataValue) => {
    setFilterInfo((prev) => ({ ...prev, [key]: value }));
    console.log("Filter:", key, value);
  }, []);

  const handleScroll = useCallback((scrollTop: number, scrollLeft: number) => {
    console.log("Scroll:", scrollTop, scrollLeft);
  }, []);

  return (
    <div className={styles.section}>
      <h2>高性能表格组件</h2>
      <p className={styles.description}>
        基于 Canvas + WebGL 实现的高性能表格组件，支持百万级数据渲染。
        主要特性：
      </p>
      <ul className={styles.features}>
        <li>使用 Canvas 渲染，减少 DOM 节点数量</li>
        <li>利用 WebGL 进行并行渲染，提升性能</li>
        <li>实现虚拟滚动，只渲染可视区域数据</li>
        <li>支持排序、筛选等常用功能</li>
        <li>支持自定义单元格渲染</li>
      </ul>

      <div className={styles.demo}>
        <h3>基础示例</h3>
        <div className={styles.controls}>
          <div className={styles.scaleSelector}>
            <span>数据规模：</span>
            {DATA_SCALES.map((scale) => (
              <button
                key={scale.value}
                className={dataScale === scale.value ? styles.active : ""}
                onClick={() => setDataScale(scale.value)}
              >
                {scale.label}
              </button>
            ))}
          </div>
          <div className={styles.info}>
            {sortInfo.key && (
              <div>
                当前排序：{sortInfo.key} ({sortInfo.order})
              </div>
            )}
            {Object.keys(filterInfo).length > 0 && (
              <div>
                当前筛选：
                {Object.entries(filterInfo).map(([key, value]) => (
                  <span key={key}>
                    {key}: {String(value)}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className={styles.tableWrapper}>
          <HighPerformanceTable
            data={data}
            columns={COLUMNS}
            width="100%"
            height={400}
            onSort={handleSort}
            onFilter={handleFilter}
            onScroll={handleScroll}
            style={{
              backgroundColor: "#000",
              headerBackgroundColor: "#f7f7f7",
              borderColor: "#e8e8e8",
              textColor: "#262626",
              fontSize: 14,
              hoverBackgroundColor: "#f5f5f5",
              stripedBackgroundColor: "#fafafa",
            }}
          />
        </div>
      </div>

      <div className={styles.demo}>
        <h3>性能对比</h3>
        <div className={styles.comparison}>
          <div className={styles.performanceCard}>
            <h4>传统 DOM 表格</h4>
            <ul>
              <li>10万条数据渲染时间：约 2000ms</li>
              <li>内存占用：约 500MB</li>
              <li>DOM 节点数：&gt; 100万</li>
              <li>滚动性能：较差</li>
            </ul>
          </div>
          <div className={styles.performanceCard}>
            <h4>Canvas 表格</h4>
            <ul>
              <li>10万条数据渲染时间：约 100ms</li>
              <li>内存占用：约 50MB</li>
              <li>DOM 节点数：&lt; 10</li>
              <li>滚动性能：流畅</li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.codeExample}>
        <h3>使用示例</h3>
        <CodeBlock code={basicUsageCode} />
      </div>
    </div>
  );
};
