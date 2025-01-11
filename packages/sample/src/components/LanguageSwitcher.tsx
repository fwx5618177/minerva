import React from "react";
import { useTranslation } from "react-i18next";
import { IoLanguageOutline } from "react-icons/io5";
import styles from "@styles/components/language-switcher.module.scss";

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const languages = [
    { code: "en", name: "English" },
    { code: "zh", name: "中文" },
    { code: "ja", name: "日本語" },
    { code: "fr", name: "Français" },
  ];

  const handleLanguageChange = (languageCode: string) => {
    i18n.changeLanguage(languageCode);
  };

  return (
    <div className={styles.languageSwitcher}>
      <IoLanguageOutline className={styles.icon} />
      <select
        value={i18n.language}
        onChange={(e) => handleLanguageChange(e.target.value)}
        className={styles.select}
      >
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSwitcher;
