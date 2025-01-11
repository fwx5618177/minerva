import React from "react";
import { useTranslation } from "react-i18next";
import VirtualListSection from "@components/VirtualListSection";
import PageHeader from "@components/PageHeader";

const VirtualListPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div>
      <PageHeader
        title={t("components.virtualList.title")}
        description={t("components.virtualList.description")}
      />
      <VirtualListSection />
    </div>
  );
};

export default VirtualListPage;
