import React from "react";
import { useTranslation } from "react-i18next";
import { IoCaretDownOutline } from "react-icons/io5";
import CodeBlock from "@layout/CodeBlock";
import DropdownSection from "@components/DropdownSection";
import styles from "@styles/pages/components.module.scss";

const DropdownPage: React.FC = () => {
  const { t } = useTranslation();

  const installCode = `import { Dropdown } from '@minerva/lib-core';`;

  const basicUsageCode = `import { Dropdown } from '@minerva/lib-core';

function App() {
  return (
    <Dropdown>
      <Dropdown.Trigger>
        <button>Open Menu</button>
      </Dropdown.Trigger>
      <Dropdown.Menu>
        <Dropdown.Item>Profile</Dropdown.Item>
        <Dropdown.Item>Settings</Dropdown.Item>
        <Dropdown.Item>Logout</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}`;

  return (
    <div className={styles.componentPage}>
      <header className={styles.header}>
        <div className={styles.titleWrapper}>
          <IoCaretDownOutline className={styles.icon} />
          <div>
            <h1>{t("components.dropdown.title")}</h1>
            <p>{t("components.dropdown.description")}</p>
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
          <DropdownSection />
        </div>
      </section>
    </div>
  );
};

export default DropdownPage;
