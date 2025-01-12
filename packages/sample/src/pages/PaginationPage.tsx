import React from "react";
import { useTranslation } from "react-i18next";
import { IoListOutline } from "react-icons/io5";
import PaginationSection from "@components/PaginationSection";
import styles from "../styles/pages/pagination.module.scss";

const PaginationPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <div className={styles.titleWrapper}>
          <IoListOutline className={styles.icon} />
          <div>
            <h1>{t("components.pagination.title")}</h1>
            <p>{t("components.pagination.description")}</p>
          </div>
        </div>
      </div>
      <PaginationSection />
    </div>
  );
};

export default PaginationPage;
