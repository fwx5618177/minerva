import React from "react";
import { useTranslation } from "react-i18next";
import SpaceSection from "@components/SpaceSection";
import PageHeader from "@components/PageHeader";

const SpacePage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div>
      <PageHeader
        title={t("components.space.title")}
        description={t("components.space.description")}
      />
      <SpaceSection />
    </div>
  );
};

export default SpacePage;
