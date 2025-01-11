import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { IoMenuOutline } from "react-icons/io5";
import Sidebar from "./Sidebar";
import LanguageSwitcher from "@components/LanguageSwitcher";
import ThemeSwitcher from "@components/ThemeSwitcher";
import styles from "@styles/layout/layout.module.scss";

const Layout: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className={styles.layout}>
      <button
        className={styles.menuButton}
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle menu"
      >
        <IoMenuOutline />
      </button>
      <Sidebar
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
      <main className={styles.main}>
        <div className={styles.header}>
          <div className={styles.headerControls}>
            <ThemeSwitcher />
            <LanguageSwitcher />
          </div>
        </div>
        <div className={styles.content}>
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Layout;
