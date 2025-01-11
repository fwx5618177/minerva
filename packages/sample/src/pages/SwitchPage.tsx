import React from "react";
import { useTranslation } from "react-i18next";
import { IoToggleOutline } from "react-icons/io5";
import CodeBlock from "@layout/CodeBlock";
import SwitchSection from "@components/SwitchSection";
import styles from "@styles/pages/components.module.scss";

const SwitchPage: React.FC = () => {
  const { t } = useTranslation();

  const installCode = `import { Switch } from '@minerva/lib-core';`;

  const basicUsageCode = `import { Switch } from '@minerva/lib-core';

function App() {
  return (
    <Switch
      label="Enable notifications"
      defaultChecked
    />
  );
}`;

  return (
    <div className={styles.componentPage}>
      <header className={styles.header}>
        <div className={styles.titleWrapper}>
          <IoToggleOutline className={styles.icon} />
          <div>
            <h1>{t("components.switch.title")}</h1>
            <p>{t("components.switch.description")}</p>
          </div>
        </div>
      </header>

      <section className={styles.section}>
        <h2>{t("components.switch.installation")}</h2>
        <div className={styles.codeWrapper}>
          <CodeBlock code={installCode} language="typescript" />
        </div>
      </section>

      <section className={styles.section}>
        <h2>{t("components.switch.basic_usage")}</h2>
        <div className={styles.codeWrapper}>
          <CodeBlock code={basicUsageCode} language="typescript" />
        </div>
      </section>

      <section className={styles.section}>
        <h2>{t("components.switch.examples")}</h2>
        <div className={styles.examples}>
          <SwitchSection />
        </div>
      </section>
    </div>
  );
};

export default SwitchPage;
