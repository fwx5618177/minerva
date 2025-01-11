import React from "react";
import { useTranslation } from "react-i18next";
import { IoAlertCircleOutline } from "react-icons/io5";
import CodeBlock from "@layout/CodeBlock";
import AlertSection from "@components/AlertSection";
import styles from "@styles/pages/components.module.scss";

const AlertPage: React.FC = () => {
  const { t } = useTranslation();

  const installCode = `import { Alert } from '@minerva/lib-core';`;

  const basicUsageCode = `import { Alert } from '@minerva/lib-core';

function App() {
  return (
    <Alert
      variant="info"
      title="Information"
      description="This is an informational alert."
    />
  );
}`;

  return (
    <div className={styles.componentPage}>
      <header className={styles.header}>
        <div className={styles.titleWrapper}>
          <IoAlertCircleOutline className={styles.icon} />
          <div>
            <h1>{t("components.alert.title")}</h1>
            <p>{t("components.alert.description")}</p>
          </div>
        </div>
      </header>

      <section className={styles.section}>
        <h2>Installation</h2>
        <div className={styles.codeWrapper}>
          <CodeBlock code={installCode} language="typescript" />
        </div>
      </section>

      <section className={styles.section}>
        <h2>Basic Usage</h2>
        <div className={styles.codeWrapper}>
          <CodeBlock code={basicUsageCode} language="typescript" />
        </div>
      </section>

      <section className={styles.section}>
        <h2>Examples</h2>
        <div className={styles.examples}>
          <AlertSection />
        </div>
      </section>
    </div>
  );
};

export default AlertPage;
