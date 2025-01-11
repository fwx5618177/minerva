import React from "react";
import { useTranslation } from "react-i18next";
import { IoLayersOutline } from "react-icons/io5";
import CodeBlock from "@layout/CodeBlock";
import styles from "@styles/pages/getting-started.module.scss";

const ThemingPage: React.FC = () => {
  const { t } = useTranslation();

  const themeCode = `import { MinervaProvider } from '@minerva/lib-core';

const theme = {
  colors: {
    primary: '#4f46e5',
    secondary: '#0ea5e9',
    success: '#10b981',
    warning: '#f59e0b',
    error: '#ef4444',
    background: '#ffffff',
    text: '#1e293b',
  },
  fonts: {
    body: 'Inter, system-ui, sans-serif',
    heading: 'Inter, system-ui, sans-serif',
    monospace: 'Fira Code, monospace',
  },
  fontSizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
  },
  space: {
    1: '0.25rem',
    2: '0.5rem',
    3: '0.75rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
  },
  radii: {
    sm: '0.25rem',
    md: '0.375rem',
    lg: '0.5rem',
    full: '9999px',
  },
};

function App() {
  return (
    <MinervaProvider theme={theme}>
      {/* Your app code */}
    </MinervaProvider>
  );
}`;

  const customComponentCode = `import { Button } from '@minerva/lib-core';

const theme = {
  components: {
    Button: {
      baseStyle: {
        fontWeight: 'medium',
        borderRadius: 'lg',
      },
      variants: {
        custom: {
          bg: 'purple.500',
          color: 'white',
          _hover: {
            bg: 'purple.600',
          },
        },
      },
    },
  },
};

function App() {
  return (
    <MinervaProvider theme={theme}>
      <Button variant="custom">Custom Button</Button>
    </MinervaProvider>
  );
}`;

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.titleWrapper}>
          <IoLayersOutline className={styles.icon} />
          <div>
            <h1>{t("components.theming.title")}</h1>
            <p>{t("components.theming.description")}</p>
          </div>
        </div>
      </header>

      <section className={styles.section}>
        <h2>{t("components.theming.overview.title")}</h2>
        <p>{t("components.theming.overview.description")}</p>
        <div className={styles.codeWrapper}>
          <CodeBlock code={themeCode} language="tsx" showLineNumbers={false} />
        </div>
      </section>

      <section className={styles.section}>
        <h2>{t("components.theming.customization.title")}</h2>
        <p>{t("components.theming.customization.description")}</p>
        <div className={styles.codeWrapper}>
          <CodeBlock
            code={customComponentCode}
            language="tsx"
            showLineNumbers={false}
          />
        </div>
      </section>

      <section className={styles.section}>
        <h2>{t("components.theming.tokens.title")}</h2>
        <p>{t("components.theming.tokens.description")}</p>
        <div className={styles.tokens}>
          <div className={styles.tokenGroup}>
            <h3>{t("components.theming.tokens.colors.title")}</h3>
            <ul>
              <li>primary</li>
              <li>secondary</li>
              <li>success</li>
              <li>warning</li>
              <li>error</li>
            </ul>
          </div>
          <div className={styles.tokenGroup}>
            <h3>{t("components.theming.tokens.typography.title")}</h3>
            <ul>
              <li>fonts</li>
              <li>fontSizes</li>
              <li>fontWeights</li>
              <li>lineHeights</li>
            </ul>
          </div>
          <div className={styles.tokenGroup}>
            <h3>{t("components.theming.tokens.spacing.title")}</h3>
            <ul>
              <li>space</li>
              <li>sizes</li>
              <li>radii</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ThemingPage;
