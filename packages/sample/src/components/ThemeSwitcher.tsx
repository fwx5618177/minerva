import React, { useEffect, useState } from "react";
import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";
import styles from "@styles/components/theme-switcher.module.scss";

const ThemeSwitcher: React.FC = () => {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    // Set initial theme based on time
    const hour = new Date().getHours();
    const initialTheme = hour >= 18 || hour < 6 ? "dark" : "light";
    setTheme(initialTheme);
    document.documentElement.setAttribute("data-theme", initialTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <button className={styles.themeSwitcher} onClick={toggleTheme}>
      {theme === "light" ? (
        <IoMoonOutline className={styles.icon} />
      ) : (
        <IoSunnyOutline className={styles.icon} />
      )}
    </button>
  );
};

export default ThemeSwitcher;
