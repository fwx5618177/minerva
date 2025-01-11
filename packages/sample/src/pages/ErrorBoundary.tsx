import React from "react";
import { useRouteError, Link } from "react-router-dom";
import { IoHomeOutline, IoRefreshOutline } from "react-icons/io5";
import styles from "@styles/pages/error.module.scss";

const ErrorBoundary: React.FC = () => {
  const error = useRouteError() as Error;

  return (
    <div className={styles.errorPage}>
      <div className={styles.content}>
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p className={styles.errorMessage}>{error.message}</p>
        <div className={styles.actions}>
          <Link to="/" className={styles.homeLink}>
            <IoHomeOutline className={styles.icon} />
            Back to Home
          </Link>
          <button
            onClick={() => window.location.reload()}
            className={styles.refreshButton}
          >
            <IoRefreshOutline className={styles.icon} />
            Refresh Page
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorBoundary;
