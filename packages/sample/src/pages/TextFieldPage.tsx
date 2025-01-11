import React from "react";
import { useTranslation } from "react-i18next";
import { IoTextOutline } from "react-icons/io5";
import CodeBlock from "@layout/CodeBlock";
import TextFieldSection from "@components/TextFieldSection";
import styles from "@styles/pages/components.module.scss";

const TextFieldPage: React.FC = () => {
  const { t } = useTranslation();

  const installCode = `import { TextField } from '@minerva/lib-core';`;

  const basicUsageCode = `import { TextField } from '@minerva/lib-core';

function App() {
  return (
    <TextField
      label="Username"
      placeholder="Enter your username"
    />
  );
}`;

  return (
    <div className={styles.componentPage}>
      <header className={styles.header}>
        <div className={styles.titleWrapper}>
          <IoTextOutline className={styles.icon} />
          <div>
            <h1>{t("components.textfield.title")}</h1>
            <p>{t("components.textfield.description")}</p>
          </div>
        </div>
      </header>

      <section className={styles.section}>
        <h2>{t("components.textfield.installation")}</h2>
        <div className={styles.codeWrapper}>
          <CodeBlock code={installCode} language="typescript" />
        </div>
      </section>

      <section className={styles.section}>
        <h2>{t("components.textfield.basic_usage")}</h2>
        <div className={styles.codeWrapper}>
          <CodeBlock code={basicUsageCode} language="typescript" />
        </div>
      </section>

      <section className={styles.section}>
        <h2>{t("components.textfield.examples")}</h2>
        <div className={styles.examples}>
          <TextFieldSection />
        </div>
      </section>
    </div>
  );
};

export default TextFieldPage;
