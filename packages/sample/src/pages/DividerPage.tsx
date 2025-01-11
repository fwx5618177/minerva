import React from "react";
import { useTranslation } from "react-i18next";
import { IoRemoveOutline } from "react-icons/io5";
import CodeBlock from "@layout/CodeBlock";
import DividerSection from "@components/DividerSection";
import styles from "@styles/pages/components.module.scss";

const DividerPage: React.FC = () => {
  const { t } = useTranslation();

  const installCode = `import { Divider } from '@minerva/lib-core';`;

  const basicUsageCode = `import { Divider } from '@minerva/lib-core';

function App() {
  return (
    <div>
      <p>Content above</p>
      <Divider />
      <p>Content below</p>
    </div>
  );
}`;

  return (
    <div className={styles.componentPage}>
      <header className={styles.header}>
        <div className={styles.titleWrapper}>
          <IoRemoveOutline className={styles.icon} />
          <div>
            <h1>{t("components.divider.title")}</h1>
            <p>{t("components.divider.description")}</p>
          </div>
        </div>
      </header>

      <section className={styles.section}>
        <h2>{t("components.divider.installation")}</h2>
        <div className={styles.codeWrapper}>
          <CodeBlock code={installCode} language="typescript" />
        </div>
      </section>

      <section className={styles.section}>
        <h2>{t("components.divider.basic_usage")}</h2>
        <div className={styles.codeWrapper}>
          <CodeBlock code={basicUsageCode} language="typescript" />
        </div>
      </section>

      <section className={styles.section}>
        <h2>{t("components.divider.examples")}</h2>
        <div className={styles.examples}>
          <DividerSection />
        </div>
      </section>
    </div>
  );
};

export default DividerPage;
