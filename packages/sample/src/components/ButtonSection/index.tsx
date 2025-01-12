import React from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@minerva/lib-core";
import { IoSearch, IoHeart, IoAdd, IoTrash, IoSave } from "react-icons/io5";
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
// Different button variants for different purposes
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="success">Success</Button>
<Button variant="warning">Warning</Button>
<Button variant="error">Error</Button>
<Button variant="retry">Retry</Button>
<Button variant="back">Back</Button>`;

  const sizesCode = `
// Different button sizes
<Button size="small">Small</Button>
<Button size="medium">Medium</Button>
<Button size="large">Large</Button>
<Button size="xlarge">XLarge</Button>`;

  const shapesCode = `
// Different button shapes
<Button shape="square">Square</Button>
<Button shape="rounded">Rounded</Button>
<Button shape="circle">Circle</Button>`;

  const borderRadiusCode = `
// Custom button border radius
<Button borderRadius="none">No Radius</Button>
<Button borderRadius="small">Small Radius</Button>
<Button borderRadius="medium">Medium Radius</Button>
<Button borderRadius="large">Large Radius</Button>
<Button borderRadius="circle">Circle Radius</Button>
<Button borderRadius={8}>Custom Radius (8px)</Button>`;

  const statesCode = `
// Different button states
<Button loading>Loading</Button>
<Button disabled>Disabled</Button>
<Button active>Active</Button>`;

  const withIconsCode = `
// Buttons with icons
import { IoSearch, IoHeart, IoAdd, IoTrash, IoSave } from "react-icons/io5";

<Button variant="primary">
  <IoSearch /> Search
</Button>
<Button variant="secondary">
  <IoHeart /> Like
</Button>
<Button variant="success">
  <IoAdd /> Add
</Button>
<Button variant="error">
  <IoTrash /> Delete
</Button>
<Button variant="primary">
  <IoSave /> Save
</Button>`;

  const blockButtonCode = `
// Full width button
<Button style={{ width: "100%" }}>Block Button</Button>`;

  const customStylesCode = `
// Buttons with custom styles
<Button
  style={{
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    color: "white",
    padding: "0 30px",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  }}
>
  Gradient
</Button>

<Button
  style={{
    border: "2px dashed #1890ff",
    color: "#1890ff",
    background: "transparent",
  }}
>
  Dashed
</Button>

<Button
  style={{
    background: "#13c2c2",
    color: "white",
    borderRadius: "24px",
  }}
>
  Custom
</Button>`;

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

      <div className={styles.example}>
        <h3>{t("components.button.examples.withIcons.title")}</h3>
        <p className={styles.description}>
          {t("components.button.examples.withIcons.description")}
        </p>
        <div className={styles.demo}>
          <Button variant="primary">
            <IoSearch /> Search
          </Button>
          <Button variant="secondary">
            <IoHeart /> Like
          </Button>
          <Button variant="success">
            <IoAdd /> Add
          </Button>
          <Button variant="error">
            <IoTrash /> Delete
          </Button>
          <Button variant="primary">
            <IoSave /> Save
          </Button>
        </div>
        <div className={styles.codeWrapper}>
          <CodeBlock code={withIconsCode} language="tsx" />
        </div>
      </div>

      <div className={styles.example}>
        <h3>{t("components.button.examples.block.title")}</h3>
        <p className={styles.description}>
          {t("components.button.examples.block.description")}
        </p>
        <div className={styles.demo}>
          <Button style={{ width: "100%" }}>Block Button</Button>
        </div>
        <div className={styles.codeWrapper}>
          <CodeBlock code={blockButtonCode} language="tsx" />
        </div>
      </div>

      <div className={styles.example}>
        <h3>{t("components.button.examples.customStyles.title")}</h3>
        <p className={styles.description}>
          {t("components.button.examples.customStyles.description")}
        </p>
        <div className={styles.demo}>
          <Button
            style={{
              background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
              color: "white",
              padding: "0 30px",
              boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
            }}
          >
            Gradient
          </Button>
          <Button
            style={{
              border: "2px dashed #1890ff",
              color: "#1890ff",
              background: "transparent",
            }}
          >
            Dashed
          </Button>
          <Button
            style={{
              background: "#13c2c2",
              color: "white",
              borderRadius: "24px",
            }}
          >
            Custom
          </Button>
        </div>
        <div className={styles.codeWrapper}>
          <CodeBlock code={customStylesCode} language="tsx" />
        </div>
      </div>
    </div>
  );
};

export default ButtonSection;
