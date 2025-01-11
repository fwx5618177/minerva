import React from "react";
import { useTranslation } from "react-i18next";
import TooltipSection from "@components/TooltipSection";
import PageHeader from "@components/PageHeader";

const TooltipPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div>
      <PageHeader
        title={t("components.tooltip.title")}
        description={t("components.tooltip.description")}
      />
      <TooltipSection />
    </div>
  );
};

export default TooltipPage;
