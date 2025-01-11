import React from "react";
import { useTranslation } from "react-i18next";
import { IoRadioButtonOnOutline } from "react-icons/io5";
import CodeBlock from "@layout/CodeBlock";
import RadioSection from "@components/RadioSection";
import styles from "@styles/pages/components.module.scss";

const RadioPage: React.FC = () => {
  const { t } = useTranslation();

  const installCode = `import { Radio, RadioGroup } from '@minerva/lib-core';`;

  const basicUsageCode = `import { Radio, RadioGroup } from '@minerva/lib-core';

function App() {
  return (
    <RadioGroup name="options">
      <Radio value="option1">Option 1</Radio>
      <Radio value="option2">Option 2</Radio>
      <Radio value="option3">Option 3</Radio>
    </RadioGroup>
  );
}`;

  return (
    <div className={styles.componentPage}>
      <header className={styles.header}>
        <div className={styles.titleWrapper}>
          <IoRadioButtonOnOutline className={styles.icon} />
          <div>
            <h1>{t("components.radio.title")}</h1>
            <p>{t("components.radio.description")}</p>
          </div>
        </div>
      </header>

      <section className={styles.section}>
        <h2>{t("components.radio.installation")}</h2>
        <div className={styles.codeWrapper}>
          <CodeBlock code={installCode} language="typescript" />
        </div>
      </section>

      <section className={styles.section}>
        <h2>{t("components.radio.basic_usage")}</h2>
        <div className={styles.codeWrapper}>
          <CodeBlock code={basicUsageCode} language="typescript" />
        </div>
      </section>

      <section className={styles.section}>
        <h2>{t("components.radio.examples")}</h2>
        <div className={styles.examples}>
          <RadioSection />
        </div>
      </section>
    </div>
  );
};

export default RadioPage;
