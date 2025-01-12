import React from "react";
import { useTranslation } from "react-i18next";
import { IoRocketOutline } from "react-icons/io5";
import CodeBlock from "@layout/CodeBlock";
import ButtonSection from "@components/ButtonSection";
import styles from "@styles/pages/button.module.scss";

const ButtonPage: React.FC = () => {
  const { t } = useTranslation();

  const installCode = `import { Button } from '@minerva/lib-core';`;

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
              variant
              <span className={styles.badge}>required</span>
            </h3>
            <code className={styles.type}>
              &quot;primary&quot; | &quot;secondary&quot; | &quot;success&quot;
              | &quot;warning&quot; | &quot;error&quot; | &quot;retry&quot; |
              &quot;back&quot;
            </code>
            <p>{t("components.button.properties.variant.description")}</p>
          </div>

          <div className={styles.property}>
            <h3>size</h3>
            <code className={styles.type}>
              &quot;small&quot; | &quot;medium&quot; | &quot;large&quot; |
              &quot;xlarge&quot;
            </code>
            <p>{t("components.button.properties.size.description")}</p>
          </div>

          <div className={styles.property}>
            <h3>shape</h3>
            <code className={styles.type}>
              &quot;square&quot; | &quot;rounded&quot; | &quot;circle&quot;
            </code>
            <p>{t("components.button.properties.shape.description")}</p>
          </div>

          <div className={styles.property}>
            <h3>borderRadius</h3>
            <code className={styles.type}>
              &quot;none&quot; | &quot;small&quot; | &quot;medium&quot; |
              &quot;large&quot; | &quot;circle&quot; | &quot;square&quot; |
              number
            </code>
            <p>{t("components.button.properties.borderRadius.description")}</p>
          </div>

          <div className={styles.property}>
            <h3>disabled</h3>
            <code className={styles.type}>boolean</code>
            <p>{t("components.button.properties.disabled.description")}</p>
          </div>

          <div className={styles.property}>
            <h3>loading</h3>
            <code className={styles.type}>boolean</code>
            <p>{t("components.button.properties.loading.description")}</p>
          </div>

          <div className={styles.property}>
            <h3>active</h3>
            <code className={styles.type}>boolean</code>
            <p>{t("components.button.properties.active.description")}</p>
          </div>

          <div className={styles.property}>
            <h3>onClick</h3>
            <code className={styles.type}>
              {"(event: React.MouseEvent<HTMLButtonElement>) => void"}
            </code>
            <p>{t("components.button.properties.onClick.description")}</p>
          </div>

          <div className={styles.property}>
            <h3>children</h3>
            <code className={styles.type}>React.ReactNode</code>
            <p>{t("components.button.properties.children.description")}</p>
          </div>

          <div className={styles.property}>
            <h3>className</h3>
            <code className={styles.type}>string</code>
            <p>{t("components.button.properties.className.description")}</p>
          </div>

          <div className={styles.property}>
            <h3>ariaLabel</h3>
            <code className={styles.type}>string</code>
            <p>{t("components.button.properties.ariaLabel.description")}</p>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2>{t("components.button.examples.title")}</h2>
        <ButtonSection />
      </section>
    </div>
  );
};

export default ButtonPage;
