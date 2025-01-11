import React from "react";
import { useTranslation } from "react-i18next";
import CodeBlock from "@layout/CodeBlock";
import { IoCheckboxOutline } from "react-icons/io5";
import CheckboxSection from "@components/CheckboxSection";
import styles from "@styles/pages/components.module.scss";

const CheckboxPage: React.FC = () => {
  const { t } = useTranslation();

  const installCode = `import { Checkbox } from '@minerva/lib-core';`;

  const basicUsageCode = `import { Checkbox } from '@minerva/lib-core';

function App() {
  return (
    <Checkbox>
      Accept terms and conditions
    </Checkbox>
  );
}`;

  return (
    <div className={styles.componentPage}>
      <header className={styles.header}>
        <div className={styles.titleWrapper}>
          <IoCheckboxOutline className={styles.icon} />
          <div>
            <h1>{t("components.checkbox.title")}</h1>
            <p>{t("components.checkbox.description")}</p>
          </div>
        </div>
      </header>

      <section className={styles.section}>
        <h2>{t("components.checkbox.installation")}</h2>
        <div className={styles.codeWrapper}>
          <CodeBlock code={installCode} />
        </div>
      </section>

      <section className={styles.section}>
        <h2>{t("components.checkbox.basic_usage")}</h2>
        <div className={styles.codeWrapper}>
          <CodeBlock code={basicUsageCode} />
        </div>
      </section>

      <section className={styles.section}>
        <h2>{t("components.checkbox.examples")}</h2>
        <div className={styles.examples}>
          <CheckboxSection />
        </div>
      </section>
    </div>
  );
};

export default CheckboxPage;
