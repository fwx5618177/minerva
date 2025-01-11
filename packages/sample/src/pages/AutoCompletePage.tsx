import React from "react";
import { useTranslation } from "react-i18next";
import AutoCompleteSection from "@components/AutoCompleteSection";
import PageHeader from "@components/PageHeader";

const AutoCompletePage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div>
      <PageHeader
        title={t("components.autoComplete.title")}
        description={t("components.autoComplete.description")}
      />
      <AutoCompleteSection />
    </div>
  );
};

export default AutoCompletePage;
