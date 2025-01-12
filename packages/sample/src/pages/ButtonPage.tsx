import React from "react";
import { useTranslation } from "react-i18next";
import { IoRocketOutline } from "react-icons/io5";
import { Button } from "@minerva/lib-core";
import CodeBlock from "@layout/CodeBlock";
import styles from "@styles/pages/button.module.scss";

const ButtonPage: React.FC = () => {
  const { t } = useTranslation();

  const installCode = `import { Button } from '@minerva/lib-core';`;

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
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="success">Success</Button>
<Button variant="warning">Warning</Button>`;

  const sizesCode = `
<Button size="small">Small</Button>
<Button size="medium">Medium</Button>
<Button size="large">Large</Button>`;

  const statesCode = `
<Button loading>Loading</Button>
<Button disabled>Disabled</Button>`;

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.titleWrapper}>
          <IoRocketOutline className={styles.icon} />
          <div>
            <h1>{t("components.button.title")}</h1>
            <p>{t("components.button.description")}</p>
          </div>
        </div>
      </header>

      <section className={styles.section}>
        <h2>{t("components.button.installation")}</h2>
        <p>{t("components.button.installation_description")}</p>
        <div className={styles.codeWrapper}>
          <CodeBlock
            code={installCode}
            language="typescript"
            showLineNumbers={false}
          />
        </div>
      </section>

      <section className={styles.section}>
        <h2>{t("components.button.properties.title")}</h2>
        <div className={styles.properties}>
          <div className={styles.property}>
            <h3>
              {t("components.button.properties.variant.name")}
              <span className={styles.badge}>required</span>
            </h3>
            <code className={styles.type}>
              {t("components.button.properties.variant.type")}
            </code>
            <p>{t("components.button.properties.variant.description")}</p>
          </div>
          <div className={styles.property}>
            <h3>{t("components.button.properties.size.name")}</h3>
            <code className={styles.type}>
              {t("components.button.properties.size.type")}
            </code>
            <p>{t("components.button.properties.size.description")}</p>
          </div>
          <div className={styles.property}>
            <h3>{t("components.button.properties.disabled.name")}</h3>
            <code className={styles.type}>
              {t("components.button.properties.disabled.type")}
            </code>
            <p>{t("components.button.properties.disabled.description")}</p>
          </div>
          <div className={styles.property}>
            <h3>{t("components.button.properties.loading.name")}</h3>
            <code className={styles.type}>
              {t("components.button.properties.loading.type")}
            </code>
            <p>{t("components.button.properties.loading.description")}</p>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2>{t("components.button.examples.title")}</h2>
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
            </div>
            <div className={styles.codeWrapper}>
              <CodeBlock code={sizesCode} language="tsx" />
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
            </div>
            <div className={styles.codeWrapper}>
              <CodeBlock code={statesCode} language="tsx" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ButtonPage;
