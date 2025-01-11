import React from "react";
import { useTranslation } from "react-i18next";
import StatusIndicatorSection from "@components/StatusIndicatorSection";
import PageHeader from "@components/PageHeader";

const StatusIndicatorPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div>
      <PageHeader
        title={t("components.statusIndicator.title")}
        description={t("components.statusIndicator.description")}
      />
      <StatusIndicatorSection />
    </div>
  );
};

export default StatusIndicatorPage;
