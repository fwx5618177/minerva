import React from "react";
import { useTranslation } from "react-i18next";
import { IoCodeSlashOutline } from "react-icons/io5";
import WebComponentsSection from "@/components/WebComponentButtonSection";
import styles from "@styles/pages/button.module.scss";

const WebComponentButtonPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.titleWrapper}>
          <IoCodeSlashOutline className={styles.icon} />
          <div>
            <h1>{t("components.webComponents.title")}</h1>
            <p>{t("components.webComponents.description")}</p>
          </div>
        </div>
      </header>

      <section className={styles.section}>
        <h2>{t("components.webComponents.examples.title")}</h2>
        <WebComponentsSection />
      </section>
    </div>
  );
};

export default WebComponentButtonPage;
