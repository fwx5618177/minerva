import React from "react";
import { useTranslation } from "react-i18next";
import { IoShieldOutline } from "react-icons/io5";
import CodeBlock from "@layout/CodeBlock";
import BadgeSection from "@components/BadgeSection";
import styles from "@styles/pages/components.module.scss";

const BadgePage: React.FC = () => {
  const { t } = useTranslation();

  const installCode = `import { Badge } from '@minerva/lib-core';`;

  const basicUsageCode = `import { Badge } from '@minerva/lib-core';

function App() {
  return (
    <Badge variant="primary">
      New
    </Badge>
  );
}`;

  return (
    <div className={styles.componentPage}>
      <header className={styles.header}>
        <div className={styles.titleWrapper}>
          <IoShieldOutline className={styles.icon} />
          <div>
            <h1>{t("components.badge.title")}</h1>
            <p>{t("components.badge.description")}</p>
          </div>
        </div>
      </header>

      <section className={styles.section}>
        <h2>{t("components.badge.installation")}</h2>
        <div className={styles.codeWrapper}>
          <CodeBlock code={installCode} language="typescript" />
        </div>
      </section>

      <section className={styles.section}>
        <h2>{t("components.badge.basic_usage")}</h2>
        <div className={styles.codeWrapper}>
          <CodeBlock code={basicUsageCode} language="typescript" />
        </div>
      </section>

      <section className={styles.section}>
        <h2>{t("components.badge.examples")}</h2>
        <div className={styles.examples}>
          <BadgeSection />
        </div>
      </section>
    </div>
  );
};

export default BadgePage;
