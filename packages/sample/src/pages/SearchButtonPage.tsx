import React from "react";
import { useTranslation } from "react-i18next";
import SearchButtonSection from "@components/SearchButtonSection";
import PageHeader from "@components/PageHeader";

const SearchButtonPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div>
      <PageHeader
        title={t("components.searchButton.title")}
        description={t("components.searchButton.description")}
      />
      <SearchButtonSection />
    </div>
  );
};

export default SearchButtonPage;
