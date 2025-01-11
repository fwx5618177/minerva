import React from "react";
import { useTranslation } from "react-i18next";
import { IoDownloadOutline } from "react-icons/io5";
import CodeBlock from "@layout/CodeBlock";
import styles from "@styles/pages/getting-started.module.scss";

const InstallationPage: React.FC = () => {
  const { t } = useTranslation();

  const npmInstall = `npm install @minerva/lib-core`;
  const yarnInstall = `yarn add @minerva/lib-core`;
  const pnpmInstall = `pnpm add @minerva/lib-core`;

  const setupCode = `import { MinervaProvider } from '@minerva/lib-core';

function App() {
  return (
    <MinervaProvider>
      {/* Your app code */}
    </MinervaProvider>
  );
}`;

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.titleWrapper}>
          <IoDownloadOutline className={styles.icon} />
          <div>
            <h1>{t("components.installation.title")}</h1>
            <p>{t("components.installation.description")}</p>
          </div>
        </div>
      </header>

      <section className={styles.section}>
        <h2>{t("components.installation.package.title")}</h2>
        <p>{t("components.installation.package.description")}</p>

        <h3>npm</h3>
        <div className={styles.codeWrapper}>
          <CodeBlock
            code={npmInstall}
            language="bash"
            showLineNumbers={false}
          />
        </div>

        <h3>yarn</h3>
        <div className={styles.codeWrapper}>
          <CodeBlock
            code={yarnInstall}
            language="bash"
            showLineNumbers={false}
          />
        </div>

        <h3>pnpm</h3>
        <div className={styles.codeWrapper}>
          <CodeBlock
            code={pnpmInstall}
            language="bash"
            showLineNumbers={false}
          />
        </div>
      </section>

      <section className={styles.section}>
        <h2>{t("components.installation.setup.title")}</h2>
        <p>{t("components.installation.setup.description")}</p>
        <div className={styles.codeWrapper}>
          <CodeBlock code={setupCode} language="tsx" showLineNumbers={false} />
        </div>
      </section>

      <section className={styles.section}>
        <h2>{t("components.installation.next.title")}</h2>
        <p>{t("components.installation.next.description")}</p>
        <ul className={styles.nextSteps}>
          <li>
            <a href="/introduction">
              {t("components.installation.next.introduction")}
            </a>
          </li>
          <li>
            <a href="/theming">{t("components.installation.next.theming")}</a>
          </li>
          <li>
            <a href="/button">{t("components.installation.next.components")}</a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default InstallationPage;
