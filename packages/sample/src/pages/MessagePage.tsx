import React from "react";
import { useTranslation } from "react-i18next";
import { IoChatboxOutline } from "react-icons/io5";
import CodeBlock from "@layout/CodeBlock";
import MessageSection from "@components/MessageSection";
import styles from "@styles/pages/components.module.scss";

const MessagePage: React.FC = () => {
  const { t } = useTranslation();

  const installCode = `import { Message } from '@minerva/lib-core';`;

  const basicUsageCode = `import { Message } from '@minerva/lib-core';

function App() {
  return (
    <Message
      variant="success"
      content="Operation completed successfully!"
      duration={3000}
    />
  );
}`;

  return (
    <div className={styles.componentPage}>
      <header className={styles.header}>
        <div className={styles.titleWrapper}>
          <IoChatboxOutline className={styles.icon} />
          <div>
            <h1>{t("components.message.title")}</h1>
            <p>{t("components.message.description")}</p>
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
          <MessageSection />
        </div>
      </section>
    </div>
  );
};

export default MessagePage;
