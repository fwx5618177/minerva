import React from "react";
import { useTranslation } from "react-i18next";
import TagSection from "@components/TagSection";
import PageHeader from "@components/PageHeader";

const TagPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div>
      <PageHeader
        title={t("components.tag.title")}
        description={t("components.tag.description")}
      />
      <TagSection />
    </div>
  );
};

export default TagPage;
