import React from "react";
import { useTranslation } from "react-i18next";
import { IoCardOutline } from "react-icons/io5";
import CodeBlock from "@layout/CodeBlock";
import CardSection from "@components/CardSection";
import styles from "@styles/pages/components.module.scss";

const CardPage: React.FC = () => {
  const { t } = useTranslation();

  const installCode = `import { Card } from '@minerva/lib-core';`;

  const basicUsageCode = `import { Card } from '@minerva/lib-core';

function App() {
  return (
    <Card>
      <Card.Header>
        <h3>Card Title</h3>
      </Card.Header>
      <Card.Body>
        <p>Card content goes here.</p>
      </Card.Body>
      <Card.Footer>
        <button>Action</button>
      </Card.Footer>
    </Card>
  );
}`;

  return (
    <div className={styles.componentPage}>
      <header className={styles.header}>
        <div className={styles.titleWrapper}>
          <IoCardOutline className={styles.icon} />
          <div>
            <h1>{t("components.card.title")}</h1>
            <p>{t("components.card.description")}</p>
          </div>
        </div>
      </header>

      <section className={styles.section}>
        <h2>{t("components.card.installation")}</h2>
        <div className={styles.codeWrapper}>
          <CodeBlock code={installCode} language="typescript" />
        </div>
      </section>

      <section className={styles.section}>
        <h2>{t("components.card.basic_usage")}</h2>
        <div className={styles.codeWrapper}>
          <CodeBlock code={basicUsageCode} language="typescript" />
        </div>
      </section>

      <section className={styles.section}>
        <h2>{t("components.card.examples")}</h2>
        <div className={styles.examples}>
          <CardSection />
        </div>
      </section>
    </div>
  );
};

export default CardPage;
