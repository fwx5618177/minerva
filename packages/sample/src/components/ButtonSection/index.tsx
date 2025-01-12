import React from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@minerva/lib-core";
import CodeBlock from "@layout/CodeBlock";
import styles from "./index.module.scss";

const ButtonSection: React.FC = () => {
  const { t } = useTranslation();

  const basicUsageCode = `
import { Button } from '@minerva/lib-core';

function App() {
  return (
    <Button variant="primary">
      Click me
    </Button>
  );
}`;

  const variantsCode = `
// 不同的按钮变体
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="success">Success</Button>
<Button variant="warning">Warning</Button>
<Button variant="error">Error</Button>
<Button variant="retry">Retry</Button>
<Button variant="back">Back</Button>`;

  const sizesCode = `
// 不同的按钮尺寸
<Button size="small">Small</Button>
<Button size="medium">Medium</Button>
<Button size="large">Large</Button>
<Button size="xlarge">XLarge</Button>`;

  const shapesCode = `
// 不同的按钮形状
<Button shape="square">Square</Button>
<Button shape="rounded">Rounded</Button>
<Button shape="circle">Circle</Button>`;

  const borderRadiusCode = `
// 自定义按钮圆角
<Button borderRadius="none">No Radius</Button>
<Button borderRadius="small">Small Radius</Button>
<Button borderRadius="medium">Medium Radius</Button>
<Button borderRadius="large">Large Radius</Button>
<Button borderRadius="circle">Circle Radius</Button>
<Button borderRadius={8}>Custom Radius (8px)</Button>`;

  const statesCode = `
// 按钮的不同状态
<Button loading>Loading</Button>
<Button disabled>Disabled</Button>
<Button active>Active</Button>`;

  return (
    <div className={styles.examples}>
      <div className={styles.example}>
        <h3>{t("components.button.examples.basic.title")}</h3>
        <p className={styles.description}>
          {t("components.button.examples.basic.description")}
        </p>
        <div className={styles.demo}>
          <Button variant="primary">Click me</Button>
        </div>
        <div className={styles.codeWrapper}>
          <CodeBlock code={basicUsageCode} language="tsx" />
        </div>
      </div>

      <div className={styles.example}>
        <h3>{t("components.button.examples.variants.title")}</h3>
        <p className={styles.description}>
          {t("components.button.examples.variants.description")}
        </p>
        <div className={styles.demo}>
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="success">Success</Button>
          <Button variant="warning">Warning</Button>
          <Button variant="error">Error</Button>
          <Button variant="retry">Retry</Button>
          <Button variant="back">Back</Button>
        </div>
        <div className={styles.codeWrapper}>
          <CodeBlock code={variantsCode} language="tsx" />
        </div>
      </div>

      <div className={styles.example}>
        <h3>{t("components.button.examples.sizes.title")}</h3>
        <p className={styles.description}>
          {t("components.button.examples.sizes.description")}
        </p>
        <div className={styles.demo}>
          <Button size="small">Small</Button>
          <Button size="medium">Medium</Button>
          <Button size="large">Large</Button>
          <Button size="xlarge">XLarge</Button>
        </div>
        <div className={styles.codeWrapper}>
          <CodeBlock code={sizesCode} language="tsx" />
        </div>
      </div>

      <div className={styles.example}>
        <h3>{t("components.button.examples.shapes.title")}</h3>
        <p className={styles.description}>
          {t("components.button.examples.shapes.description")}
        </p>
        <div className={styles.demo}>
          <Button shape="square">Square</Button>
          <Button shape="rounded">Rounded</Button>
          <Button shape="circle">Circle</Button>
        </div>
        <div className={styles.codeWrapper}>
          <CodeBlock code={shapesCode} language="tsx" />
        </div>
      </div>

      <div className={styles.example}>
        <h3>{t("components.button.examples.borderRadius.title")}</h3>
        <p className={styles.description}>
          {t("components.button.examples.borderRadius.description")}
        </p>
        <div className={styles.demo}>
          <Button borderRadius="none">No Radius</Button>
          <Button borderRadius="small">Small Radius</Button>
          <Button borderRadius="medium">Medium Radius</Button>
          <Button borderRadius="large">Large Radius</Button>
          <Button borderRadius="circle">Circle Radius</Button>
          <Button borderRadius={8}>Custom Radius</Button>
        </div>
        <div className={styles.codeWrapper}>
          <CodeBlock code={borderRadiusCode} language="tsx" />
        </div>
      </div>

      <div className={styles.example}>
        <h3>{t("components.button.examples.states.title")}</h3>
        <p className={styles.description}>
          {t("components.button.examples.states.description")}
        </p>
        <div className={styles.demo}>
          <Button loading>Loading</Button>
          <Button disabled>Disabled</Button>
          <Button active>Active</Button>
        </div>
        <div className={styles.codeWrapper}>
          <CodeBlock code={statesCode} language="tsx" />
        </div>
      </div>
    </div>
  );
};

export default ButtonSection;
