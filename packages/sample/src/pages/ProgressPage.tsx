import React from "react";
import { useTranslation } from "react-i18next";
import { IoSpeedometerOutline } from "react-icons/io5";
import CodeBlock from "@layout/CodeBlock";
import ProgressSection from "@components/ProgressIndicatorSection";
import styles from "@styles/pages/components.module.scss";

const ProgressPage: React.FC = () => {
  const { t } = useTranslation();

  const installCode = `import { Progress } from '@minerva/lib-core';`;

  const basicUsageCode = `import { Progress } from '@minerva/lib-core';

function App() {
  return (
    <Progress
      value={75}
      max={100}
      variant="primary"
    />
  );
}`;

  return (
    <div className={styles.componentPage}>
      <header className={styles.header}>
        <div className={styles.titleWrapper}>
          <IoSpeedometerOutline className={styles.icon} />
          <div>
            <h1>{t("components.progress.title")}</h1>
            <p>{t("components.progress.description")}</p>
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
          <ProgressSection />
        </div>
      </section>
    </div>
  );
};

export default ProgressPage;
