import React from "react";
import { useTranslation } from "react-i18next";
import CodeBlock from "@layout/CodeBlock";
import styles from "./section.module.scss";

const WebComponentButtonSection: React.FC = () => {
  const { t } = useTranslation();

  const basicUsageCode = `
<minerva-button variant="primary">
  Click me
</minerva-button>
  `;

  const variantsCode = `
<minerva-button variant="primary">Primary</minerva-button>
<minerva-button variant="secondary">Secondary</minerva-button>
<minerva-button variant="success">Success</minerva-button>
<minerva-button variant="warning">Warning</minerva-button>
<minerva-button variant="error">Error</minerva-button>
<minerva-button variant="info">Info</minerva-button>
<minerva-button variant="ghost">Ghost</minerva-button>
  `;

  const sizesCode = `
<minerva-button size="tiny">Tiny</minerva-button>
<minerva-button size="small">Small</minerva-button>
<minerva-button size="medium">Medium</minerva-button>
<minerva-button size="large">Large</minerva-button>
  `;

  const shapesCode = `
<minerva-button shape="square">Square</minerva-button>
<minerva-button shape="rounded">Rounded</minerva-button>
<minerva-button shape="circle">Circle</minerva-button>
<minerva-button shape="pill">Pill</minerva-button>
  `;

  const statesCode = `
<minerva-button loading>Loading</minerva-button>
<minerva-button disabled>Disabled</minerva-button>
<minerva-button active>Active</minerva-button>
  `;

  const customStylesCode = `
<minerva-button
  style="
    --primary-color: #ff0066;
    --primary-hover: #cc0052;
  "
>
  Custom Color
</minerva-button>
  `;

  return (
    <div className={styles.section}>
      <h2>{t("components.webComponentButton.title")}</h2>
      <p className={styles.description}>
        {t("components.webComponentButton.description")}
      </p>

      <div className={styles.example}>
        <h3>{t("components.webComponentButton.examples.basic.title")}</h3>
        <p className={styles.description}>
          {t("components.webComponentButton.examples.basic.description")}
        </p>
        <div className={styles.demo}>
          <minerva-button variant="primary">Click me</minerva-button>
        </div>
        <div className={styles.codeWrapper}>
          <CodeBlock code={basicUsageCode} language="html" />
        </div>
      </div>

      <div className={styles.example}>
        <h3>{t("components.webComponentButton.examples.variants.title")}</h3>
        <p className={styles.description}>
          {t("components.webComponentButton.examples.variants.description")}
        </p>
        <div className={styles.demo}>
          <minerva-button variant="primary">Primary</minerva-button>
          <minerva-button variant="secondary">Secondary</minerva-button>
          <minerva-button variant="success">Success</minerva-button>
          <minerva-button variant="warning">Warning</minerva-button>
          <minerva-button variant="error">Error</minerva-button>
        </div>
        <div className={styles.codeWrapper}>
          <CodeBlock code={variantsCode} language="html" />
        </div>
      </div>

      <div className={styles.example}>
        <h3>{t("components.webComponentButton.examples.sizes.title")}</h3>
        <p className={styles.description}>
          {t("components.webComponentButton.examples.sizes.description")}
        </p>
        <div className={styles.demo}>
          <minerva-button size="small">Small</minerva-button>
          <minerva-button size="medium">Medium</minerva-button>
          <minerva-button size="large">Large</minerva-button>
        </div>
        <div className={styles.codeWrapper}>
          <CodeBlock code={sizesCode} language="html" />
        </div>
      </div>

      <div className={styles.example}>
        <h3>{t("components.webComponentButton.examples.shapes.title")}</h3>
        <p className={styles.description}>
          {t("components.webComponentButton.examples.shapes.description")}
        </p>
        <div className={styles.demo}>
          <minerva-button shape="square">Square</minerva-button>
          <minerva-button shape="rounded">Rounded</minerva-button>
          <minerva-button shape="circle">Circle</minerva-button>
        </div>
        <div className={styles.codeWrapper}>
          <CodeBlock code={shapesCode} language="html" />
        </div>
      </div>

      <div className={styles.example}>
        <h3>{t("components.webComponentButton.examples.states.title")}</h3>
        <p className={styles.description}>
          {t("components.webComponentButton.examples.states.description")}
        </p>
        <div className={styles.demo}>
          <minerva-button loading>Loading</minerva-button>
          <minerva-button disabled>Disabled</minerva-button>
          <minerva-button active>Active</minerva-button>
        </div>
        <div className={styles.codeWrapper}>
          <CodeBlock code={statesCode} language="html" />
        </div>
      </div>

      <div className={styles.example}>
        <h3>
          {t("components.webComponentButton.examples.customStyles.title")}
        </h3>
        <p className={styles.description}>
          {t("components.webComponentButton.examples.customStyles.description")}
        </p>
        <div className={styles.demo}>
          <minerva-button
            style={
              {
                "--primary-color": "#ff0066",
                "--primary-hover": "#cc0052",
              } as React.CSSProperties
            }
          >
            Custom Color
          </minerva-button>
        </div>
        <div className={styles.codeWrapper}>
          <CodeBlock code={customStylesCode} language="html" />
        </div>
      </div>
    </div>
  );
};

export default WebComponentButtonSection;
