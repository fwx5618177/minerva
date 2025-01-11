import React from "react";
import { useTranslation } from "react-i18next";
import { IoShapesOutline } from "react-icons/io5";
import CodeBlock from "@layout/CodeBlock";
import SkeletonSection from "@components/SkeletonSection";
import styles from "@styles/pages/components.module.scss";

const SkeletonPage: React.FC = () => {
  const { t } = useTranslation();

  const installCode = `import { Skeleton } from '@minerva/lib-core';`;

  const basicUsageCode = `import { Skeleton } from '@minerva/lib-core';

function App() {
  return (
    <Skeleton
      variant="text"
      width={200}
      height={20}
      animation="wave"
    />
  );
}`;

  return (
    <div className={styles.componentPage}>
      <header className={styles.header}>
        <div className={styles.titleWrapper}>
          <IoShapesOutline className={styles.icon} />
          <div>
            <h1>{t("components.skeleton.title")}</h1>
            <p>{t("components.skeleton.description")}</p>
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
          <SkeletonSection />
        </div>
      </section>
    </div>
  );
};

export default SkeletonPage;
