import React from "react";
import styles from "./index.module.scss";

interface PageHeaderProps {
  title: string;
  description: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, description }) => {
  return (
    <div className={styles.header}>
      <div className={styles.titleWrapper}>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default PageHeader;
