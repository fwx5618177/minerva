import React, { useState } from "react";
import { Space, Button, Card } from "@minerva/lib-core";
import styles from "./section.module.scss";

const SpaceSection: React.FC = () => {
  const [direction, setDirection] = useState<"horizontal" | "vertical">(
    "horizontal",
  );
  const [size, setSize] = useState<"small" | "medium" | "large">("medium");
  const [wrap, setWrap] = useState(true);

  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <h2>Space 间距</h2>
        <p>设置组件之间的间距</p>
      </div>

      <h3>基础用法</h3>
      <p className={styles.description}>最基础的用法，通过 size 设置间距大小</p>
      <div className={styles.group}>
        <Space size="small">
          <Button>按钮 1</Button>
          <Button>按钮 2</Button>
          <Button>按钮 3</Button>
        </Space>
      </div>

      <h3>垂直间距</h3>
      <p className={styles.description}>可以设置垂直方向的间距</p>
      <div className={styles.group}>
        <Space direction="vertical" size="large">
          <Button>按钮 1</Button>
          <Button>按钮 2</Button>
          <Button>按钮 3</Button>
        </Space>
      </div>

      <h3>间距大小</h3>
      <p className={styles.description}>内置三种间距尺寸</p>
      <div className={styles.group}>
        <Space direction="vertical" size="large" block>
          <Space size="small">
            <Button>Small</Button>
            <Button>间距</Button>
            <Button>示例</Button>
          </Space>
          <Space size="medium">
            <Button>Medium</Button>
            <Button>间距</Button>
            <Button>示例</Button>
          </Space>
          <Space size="large">
            <Button>Large</Button>
            <Button>间距</Button>
            <Button>示例</Button>
          </Space>
        </Space>
      </div>

      <h3>自动换行</h3>
      <p className={styles.description}>当空间不足时自动换行</p>
      <div className={styles.group}>
        <Space wrap>
          {Array.from({ length: 10 }, (_, i) => (
            <Button key={i}>按钮 {i + 1}</Button>
          ))}
        </Space>
      </div>

      <h3>对齐方式</h3>
      <p className={styles.description}>设置对齐方式</p>
      <div className={styles.group}>
        <Space direction="vertical" size="large" block>
          <Space justify="start" block>
            <Button>左对齐</Button>
            <Button>示例</Button>
          </Space>
          <Space justify="center" block>
            <Button>居中对齐</Button>
            <Button>示例</Button>
          </Space>
          <Space justify="end" block>
            <Button>右对齐</Button>
            <Button>示例</Button>
          </Space>
          <Space justify="space-between" block>
            <Button>两端对齐</Button>
            <Button>示例</Button>
          </Space>
          <Space justify="space-around" block>
            <Button>环绕对齐</Button>
            <Button>示例</Button>
          </Space>
        </Space>
      </div>

      <h3>卡片间距</h3>
      <p className={styles.description}>在卡片组件中使用间距</p>
      <div className={styles.group}>
        <Space direction="vertical" size="large">
          <Space size="large">
            <Card>Card 1</Card>
            <Card>Card 2</Card>
            <Card>Card 3</Card>
          </Space>
        </Space>
      </div>

      <h3>动态配置</h3>
      <p className={styles.description}>动态控制 Space 的属性</p>
      <div className={styles.group}>
        <Space direction="vertical" size="large">
          <Space>
            <Button
              onClick={() =>
                setDirection((v) =>
                  v === "horizontal" ? "vertical" : "horizontal",
                )
              }
            >
              切换方向
            </Button>
            <Button
              onClick={() =>
                setSize((v) => {
                  if (v === "small") return "medium";
                  if (v === "medium") return "large";
                  return "small";
                })
              }
            >
              切换大小
            </Button>
            <Button onClick={() => setWrap((v) => !v)}>切换换行</Button>
          </Space>

          <Space direction={direction} size={size} wrap={wrap}>
            <Button>按钮 1</Button>
            <Button>按钮 2</Button>
            <Button>按钮 3</Button>
          </Space>
        </Space>
      </div>
    </div>
  );
};

export default SpaceSection;
