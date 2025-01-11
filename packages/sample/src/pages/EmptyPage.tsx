import React from "react";
import { useTranslation } from "react-i18next";
import EmptySection from "@components/EmptySection";
import PageHeader from "@components/PageHeader";

const EmptyPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div>
      <PageHeader
        title={t("components.empty.title")}
        description={t("components.empty.description")}
      />
      <EmptySection />
    </div>
  );
};

export default EmptyPage;
