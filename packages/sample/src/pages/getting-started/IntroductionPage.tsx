import React from "react";
import { useTranslation } from "react-i18next";
import { IoInformationCircleOutline } from "react-icons/io5";
import CodeBlock from "@layout/CodeBlock";
import styles from "@styles/pages/getting-started.module.scss";

const IntroductionPage: React.FC = () => {
  const { t } = useTranslation();

  const basicUsageCode = `import { Button } from '@minerva/lib-core';

function App() {
  return (
    <div>
      <Button variant="primary">Primary Button</Button>
      <Button variant="secondary">Secondary Button</Button>
      <Button variant="outline">Outline Button</Button>
    </div>
  );
}`;

  const themeUsageCode = `import { MinervaProvider, Button } from '@minerva/lib-core';

function App() {
  return (
    <MinervaProvider theme={{
      colors: {
        primary: '#4f46e5',
        secondary: '#0ea5e9',
      }
    }}>
      <Button variant="primary">Themed Button</Button>
    </MinervaProvider>
  );
}`;

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.titleWrapper}>
          <IoInformationCircleOutline className={styles.icon} />
          <div>
            <h1>{t("components.introduction.title")}</h1>
            <p>{t("components.introduction.description")}</p>
          </div>
        </div>
      </header>

      <section className={styles.section}>
        <h2>{t("components.introduction.what.title")}</h2>
        <p>{t("components.introduction.what.description")}</p>
        <ul className={styles.features}>
          <li>
            <h3>
              {t("components.introduction.what.features.components.title")}
            </h3>
            <p>
              {t(
                "components.introduction.what.features.components.description",
              )}
            </p>
          </li>
          <li>
            <h3>
              {t("components.introduction.what.features.customization.title")}
            </h3>
            <p>
              {t(
                "components.introduction.what.features.customization.description",
              )}
            </p>
          </li>
          <li>
            <h3>
              {t("components.introduction.what.features.typescript.title")}
            </h3>
            <p>
              {t(
                "components.introduction.what.features.typescript.description",
              )}
            </p>
          </li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>{t("components.introduction.usage.title")}</h2>
        <p>{t("components.introduction.usage.description")}</p>
        <div className={styles.codeWrapper}>
          <CodeBlock
            code={basicUsageCode}
            language="tsx"
            showLineNumbers={false}
          />
        </div>
      </section>

      <section className={styles.section}>
        <h2>{t("components.introduction.theming.title")}</h2>
        <p>{t("components.introduction.theming.description")}</p>
        <div className={styles.codeWrapper}>
          <CodeBlock
            code={themeUsageCode}
            language="tsx"
            showLineNumbers={false}
          />
        </div>
      </section>

      <section className={styles.section}>
        <h2>{t("components.introduction.next.title")}</h2>
        <p>{t("components.introduction.next.description")}</p>
        <ul className={styles.nextSteps}>
          <li>
            <a href="/installation">
              {t("components.introduction.next.installation")}
            </a>
          </li>
          <li>
            <a href="/theming">{t("components.introduction.next.theming")}</a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default IntroductionPage;
