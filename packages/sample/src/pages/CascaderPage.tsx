import React from "react";
import { useTranslation } from "react-i18next";
import CascaderSection from "@components/CascaderSection";
import PageHeader from "@components/PageHeader";

const CascaderPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div>
      <PageHeader
        title={t("components.cascader.title")}
        description={t("components.cascader.description")}
      />
      <CascaderSection />
    </div>
  );
};

export default CascaderPage;
