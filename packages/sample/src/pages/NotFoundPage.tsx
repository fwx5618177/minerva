import React from "react";
import { Link } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import styles from "@styles/pages/error.module.scss";

const NotFoundPage: React.FC = () => {
  return (
    <div className={styles.errorPage}>
      <div className={styles.content}>
        <h1>404</h1>
        <p>Oops! The page you're looking for doesn't exist.</p>
        <Link to="/" className={styles.homeLink}>
          <IoHomeOutline className={styles.icon} />
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
