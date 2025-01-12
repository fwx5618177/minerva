import React from "react";
import { useTranslation } from "react-i18next";
import { IoSearch, IoTrash, IoSave } from "react-icons/io5";
import CodeBlock from "@layout/CodeBlock";
import styles from "@components/ButtonSection/index.module.scss";

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

  const customStyleCode = `
<minerva-button
  style="
    --primary-color: #ff0066;
    --primary-hover: #cc0052;
  "
  variant="primary"
>
  Custom Color
</minerva-button>
  `;

  const iconButtonsCode = `
<minerva-button variant="primary">
  <i class="icon-search"></i>
  Search
</minerva-button>
<minerva-button variant="success">
  <i class="icon-save"></i>
  Save
</minerva-button>
<minerva-button variant="error">
  <i class="icon-trash"></i>
  Delete
</minerva-button>
  `;

  const blockButtonsCode = `
<minerva-button block variant="primary">Block Button</minerva-button>
<minerva-button block variant="secondary">Block Button</minerva-button>
  `;

  const groupButtonsCode = `
<div class="button-group">
  <minerva-button variant="primary">Left</minerva-button>
  <minerva-button variant="primary">Middle</minerva-button>
  <minerva-button variant="primary">Right</minerva-button>
</div>
  `;

  const borderRadiusCode = `
<minerva-button borderRadius="none">None</minerva-button>
<minerva-button borderRadius="small">Small</minerva-button>
<minerva-button borderRadius="medium">Medium</minerva-button>
<minerva-button borderRadius="large">Large</minerva-button>
<minerva-button borderRadius="circle">Circle</minerva-button>
  `;

  const rippleEffectCode = `
<minerva-button ripple variant="primary">
  Click for ripple effect
</minerva-button>
  `;

  return (
    <div className={styles.examples}>
      <div className={styles.example}>
        <h3>{t("components.webComponentButton.examples.basic.title")}</h3>
        <p>{t("components.webComponentButton.examples.basic.description")}</p>
        <div className={styles.demo}>
          <minerva-button variant="primary">Click me</minerva-button>
        </div>
        <CodeBlock code={basicUsageCode} language="html" />
      </div>

      <div className={styles.example}>
        <h3>{t("components.webComponentButton.examples.variants.title")}</h3>
        <p>
          {t("components.webComponentButton.examples.variants.description")}
        </p>
        <div className={styles.demo}>
          <minerva-button variant="primary">Primary</minerva-button>
          <minerva-button variant="secondary">Secondary</minerva-button>
          <minerva-button variant="success">Success</minerva-button>
          <minerva-button variant="warning">Warning</minerva-button>
          <minerva-button variant="error">Error</minerva-button>
          <minerva-button variant="retry">Retry</minerva-button>
          <minerva-button variant="back">Back</minerva-button>
        </div>
        <CodeBlock code={variantsCode} language="html" />
      </div>

      <div className={styles.example}>
        <h3>{t("components.webComponentButton.examples.sizes.title")}</h3>
        <p>{t("components.webComponentButton.examples.sizes.description")}</p>
        <div className={styles.demo}>
          <minerva-button size="small">Small</minerva-button>
          <minerva-button size="medium">Medium</minerva-button>
          <minerva-button size="large">Large</minerva-button>
        </div>
        <CodeBlock code={sizesCode} language="html" />
      </div>

      <div className={styles.example}>
        <h3>{t("components.webComponentButton.examples.shapes.title")}</h3>
        <p>{t("components.webComponentButton.examples.shapes.description")}</p>
        <div className={styles.demo}>
          <minerva-button shape="square">Square</minerva-button>
          <minerva-button shape="rounded">Rounded</minerva-button>
          <minerva-button shape="circle">Circle</minerva-button>
        </div>
        <CodeBlock code={shapesCode} language="html" />
      </div>

      <div className={styles.example}>
        <h3>{t("components.webComponentButton.examples.states.title")}</h3>
        <p>{t("components.webComponentButton.examples.states.description")}</p>
        <div className={styles.demo}>
          <minerva-button loading>Loading</minerva-button>
          <minerva-button disabled>Disabled</minerva-button>
        </div>
        <CodeBlock code={statesCode} language="html" />
      </div>

      <div className={styles.example}>
        <h3>{t("components.webComponentButton.examples.iconButtons.title")}</h3>
        <p>
          {t("components.webComponentButton.examples.iconButtons.description")}
        </p>
        <div className={styles.demo}>
          <minerva-button variant="primary">
            <IoSearch className={styles.icon} />
            Search
          </minerva-button>
          <minerva-button variant="success">
            <IoSave className={styles.icon} />
            Save
          </minerva-button>
          <minerva-button variant="error">
            <IoTrash className={styles.icon} />
            Delete
          </minerva-button>
        </div>
        <CodeBlock code={iconButtonsCode} language="html" />
      </div>

      <div className={styles.example}>
        <h3>
          {t("components.webComponentButton.examples.blockButtons.title")}
        </h3>
        <p>
          {t("components.webComponentButton.examples.blockButtons.description")}
        </p>
        <div className={styles.demo}>
          <minerva-button variant="primary">Block Button</minerva-button>
          <minerva-button variant="secondary">Block Button</minerva-button>
        </div>
        <CodeBlock code={blockButtonsCode} language="html" />
      </div>

      <div className={styles.example}>
        <h3>
          {t("components.webComponentButton.examples.buttonGroups.title")}
        </h3>
        <p>
          {t("components.webComponentButton.examples.buttonGroups.description")}
        </p>
        <div className={`${styles.demo} ${styles.buttonGroup}`}>
          <minerva-button variant="primary">Left</minerva-button>
          <minerva-button variant="primary">Middle</minerva-button>
          <minerva-button variant="primary">Right</minerva-button>
        </div>
        <CodeBlock code={groupButtonsCode} language="html" />
      </div>

      <div className={styles.example}>
        <h3>{t("components.common.examples.borderRadius.title")}</h3>
        <p>{t("components.common.examples.borderRadius.description")}</p>
        <div className={styles.demo}>
          <minerva-button size="small">Small</minerva-button>
          <minerva-button size="medium">Medium</minerva-button>
          <minerva-button size="large">Large</minerva-button>
        </div>
        <CodeBlock code={borderRadiusCode} language="html" />
      </div>

      <div className={styles.example}>
        <h3>{t("components.common.examples.rippleEffect.title")}</h3>
        <p>{t("components.common.examples.rippleEffect.description")}</p>
        <div className={styles.demo}>
          <minerva-button variant="primary">
            Click for ripple effect
          </minerva-button>
        </div>
        <CodeBlock code={rippleEffectCode} language="html" />
      </div>

      <div className={styles.example}>
        <h3>
          {t("components.webComponentButton.examples.customStyles.title")}
        </h3>
        <p>
          {t("components.webComponentButton.examples.customStyles.description")}
        </p>
        <div className={styles.demo}>
          <minerva-button
            variant="primary"
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
        <CodeBlock code={customStyleCode} language="html" />
      </div>
    </div>
  );
};

export default WebComponentButtonSection;
