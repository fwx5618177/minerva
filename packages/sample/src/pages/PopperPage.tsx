import React from "react";
import { useTranslation } from "react-i18next";
import PopperSection from "@components/PopperSection";
import PageHeader from "@components/PageHeader";

const PopperPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div>
      <PageHeader
        title={t("components.popper.title")}
        description={t("components.popper.description")}
      />
      <PopperSection />
    </div>
  );
};

export default PopperPage;
