import React from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import styles from "@styles/layout/sidebar.module.scss";
import { menuConfig } from "@router/routes";
import { IoLayersOutline } from "react-icons/io5";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const { t } = useTranslation();

  const renderNavSection = (
    section: keyof typeof menuConfig,
    titleKey: string,
  ) => (
    <div className={styles.section}>
      <div className={styles.title}>{t(titleKey)}</div>
      <div className={styles.list}>
        {menuConfig[section].map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `${styles.item} ${isActive ? styles.active : ""}`
            }
            onClick={onClose}
          >
            <span className={styles.itemIcon}>{item.icon}</span>
            <span className={styles.text}>{t(item.translationKey)}</span>
          </NavLink>
        ))}
      </div>
    </div>
  );

  return (
    <aside className={`${styles.sidebar} ${isOpen ? styles.open : ""}`}>
      <div className={styles.header}>
        <div className={styles.logo}>
          <IoLayersOutline className={styles.icon} />
          <span>Minerva UI</span>
        </div>
      </div>

      <nav className={styles.nav}>
        {renderNavSection("gettingStarted", "components.menu.getting_started")}
        {renderNavSection("inputs", "components.menu.inputs")}
        {renderNavSection("dataDisplay", "components.menu.data_display")}
        {renderNavSection("feedback", "components.menu.feedback")}
        {renderNavSection("navigation", "components.menu.navigation")}
        {renderNavSection("special", "components.menu.special")}
        {renderNavSection("webComponents", "components.menu.web_components")}
      </nav>
    </aside>
  );
};

export default Sidebar;
