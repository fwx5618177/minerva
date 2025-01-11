import React from "react";
import { useTranslation } from "react-i18next";
import IconButtonSection from "@components/IconButtonSection";
import PageHeader from "@components/PageHeader";

const IconButtonPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div>
      <PageHeader
        title={t("components.iconButton.title")}
        description={t("components.iconButton.description")}
      />
      <IconButtonSection />
    </div>
  );
};

export default IconButtonPage;
