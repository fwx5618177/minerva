import React from "react";
import { useTranslation } from "react-i18next";
import TimePickerSection from "@components/TimePickerSection";
import PageHeader from "@components/PageHeader";

const TimePickerPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div>
      <PageHeader
        title={t("components.timePicker.title")}
        description={t("components.timePicker.description")}
      />
      <TimePickerSection />
    </div>
  );
};

export default TimePickerPage;
