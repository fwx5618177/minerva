import React from "react";
import { useTranslation } from "react-i18next";
import { IoAppsOutline } from "react-icons/io5";
import CodeBlock from "@layout/CodeBlock";
import ChipSection from "@components/ChipSection";
import styles from "@styles/pages/components.module.scss";

const ChipPage: React.FC = () => {
  const { t } = useTranslation();

  const installCode = `import { Chip } from '@minerva/lib-core';`;

  const basicUsageCode = `import { Chip } from '@minerva/lib-core';

function App() {
  return (
    <Chip
      label="React"
      onDelete={() => console.log('Chip deleted')}
    />
  );
}`;

  return (
    <div className={styles.componentPage}>
      <header className={styles.header}>
        <div className={styles.titleWrapper}>
          <IoAppsOutline className={styles.icon} />
          <div>
            <h1>{t("components.chip.title")}</h1>
            <p>{t("components.chip.description")}</p>
          </div>
        </div>
      </header>

      <section className={styles.section}>
        <h2>{t("components.chip.installation")}</h2>
        <div className={styles.codeWrapper}>
          <CodeBlock code={installCode} language="typescript" />
        </div>
      </section>

      <section className={styles.section}>
        <h2>{t("components.chip.basic_usage")}</h2>
        <div className={styles.codeWrapper}>
          <CodeBlock code={basicUsageCode} language="typescript" />
        </div>
      </section>

      <section className={styles.section}>
        <h2>{t("components.chip.examples")}</h2>
        <div className={styles.examples}>
          <ChipSection />
        </div>
      </section>
    </div>
  );
};

export default ChipPage;
