import React from "react";
import { useTranslation } from "react-i18next";
import { IoHomeOutline } from "react-icons/io5";
import CodeBlock from "@layout/CodeBlock";
import styles from "@styles/pages/getting-started.module.scss";

const OverviewPage: React.FC = () => {
  const { t } = useTranslation();

  const installCode = `npm install @minerva/lib-core`;

  const usageCode = `import { Button } from '@minerva/lib-core';

function App() {
  return (
    <Button variant="primary">
      Hello Minerva
    </Button>
  );
}`;

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.titleWrapper}>
          <IoHomeOutline className={styles.icon} />
          <div>
            <h1>{t("components.overview.title")}</h1>
            <p>{t("components.overview.description")}</p>
          </div>
        </div>
      </header>

      <section className={styles.section}>
        <h2>{t("components.overview.features.title")}</h2>
        <ul className={styles.features}>
          <li>
            <h3>🎨 {t("components.overview.features.modern.title")}</h3>
            <p>{t("components.overview.features.modern.description")}</p>
          </li>
          <li>
            <h3>🚀 {t("components.overview.features.performance.title")}</h3>
            <p>{t("components.overview.features.performance.description")}</p>
          </li>
          <li>
            <h3>🌙 {t("components.overview.features.theme.title")}</h3>
            <p>{t("components.overview.features.theme.description")}</p>
          </li>
          <li>
            <h3>📱 {t("components.overview.features.responsive.title")}</h3>
            <p>{t("components.overview.features.responsive.description")}</p>
          </li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>{t("components.overview.quickstart.title")}</h2>
        <div className={styles.codeWrapper}>
          <CodeBlock
            code={installCode}
            language="bash"
            showLineNumbers={false}
          />
        </div>
        <p className={styles.description}>
          {t("components.overview.quickstart.description")}
        </p>
        <div className={styles.codeWrapper}>
          <CodeBlock code={usageCode} language="tsx" />
        </div>
      </section>

      <section className={styles.section}>
        <h2>{t("components.overview.support.title")}</h2>
        <p>{t("components.overview.support.description")}</p>
        <ul className={styles.browsers}>
          <li>Chrome</li>
          <li>Firefox</li>
          <li>Safari</li>
          <li>Edge</li>
        </ul>
      </section>
    </div>
  );
};

export default OverviewPage;
