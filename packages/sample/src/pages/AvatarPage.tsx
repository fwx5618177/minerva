import React from "react";
import { useTranslation } from "react-i18next";
import { IoPersonCircleOutline } from "react-icons/io5";
import CodeBlock from "@layout/CodeBlock";
import AvatarSection from "@components/Avatar";
import styles from "@styles/pages/components.module.scss";

const AvatarPage: React.FC = () => {
  const { t } = useTranslation();

  const installCode = `import { Avatar } from '@minerva/lib-core';`;

  const basicUsageCode = `import { Avatar } from '@minerva/lib-core';

function App() {
  return (
    <Avatar
      src="https://example.com/avatar.jpg"
      alt="User avatar"
      size="md"
    />
  );
}`;

  return (
    <div className={styles.componentPage}>
      <header className={styles.header}>
        <div className={styles.titleWrapper}>
          <IoPersonCircleOutline className={styles.icon} />
          <div>
            <h1>{t("components.avatar.title")}</h1>
            <p>{t("components.avatar.description")}</p>
          </div>
        </div>
      </header>

      <section className={styles.section}>
        <h2>{t("components.avatar.installation")}</h2>
        <div className={styles.codeWrapper}>
          <CodeBlock code={installCode} language="typescript" />
        </div>
      </section>

      <section className={styles.section}>
        <h2>{t("components.avatar.basic_usage")}</h2>
        <div className={styles.codeWrapper}>
          <CodeBlock code={basicUsageCode} language="typescript" />
        </div>
      </section>

      <section className={styles.section}>
        <h2>{t("components.avatar.examples")}</h2>
        <div className={styles.examples}>
          <AvatarSection />
        </div>
      </section>
    </div>
  );
};

export default AvatarPage;
