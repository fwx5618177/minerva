import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { IoLanguageOutline, IoChevronDownOutline } from "react-icons/io5";
import styles from "./language-switcher.module.scss";

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "zh", name: "中文", flag: "🇨🇳" },
    { code: "ja", name: "日本語", flag: "🇯🇵" },
    { code: "fr", name: "Français", flag: "🇫🇷" },
  ];

  const currentLanguage = languages.find((lang) => lang.code === i18n.language);

  const handleLanguageChange = (languageCode: string) => {
    i18n.changeLanguage(languageCode);
    setIsOpen(false);
  };

  return (
    <div className={styles.languageSwitcher}>
      <button
        className={styles.trigger}
        onClick={() => setIsOpen(!isOpen)}
        type="button"
      >
        <IoLanguageOutline className={styles.icon} />
        <span className={styles.currentLanguage}>
          {currentLanguage?.flag} {currentLanguage?.name}
        </span>
        <IoChevronDownOutline
          className={`${styles.arrow} ${isOpen ? styles.open : ""}`}
        />
      </button>
      {isOpen && (
        <div className={styles.dropdown}>
          {languages.map((lang) => (
            <button
              key={lang.code}
              className={`${styles.option} ${
                lang.code === i18n.language ? styles.active : ""
              }`}
              onClick={() => handleLanguageChange(lang.code)}
              type="button"
            >
              <span className={styles.flag}>{lang.flag}</span>
              <span className={styles.name}>{lang.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
