import React from "react";

import Layout from "./pages/Layout";
import Sidebar from "@components/Sidebar/Sidebar";
import Main from "@components/Main/Main";
import Header from "@components/Header/Header";

import styles from "@styles/app.module.scss";
import { useTranslation } from "react-i18next";
import AvatarSection from "@components/Avatar";
import CardSection from "@components/CardSection";
import TextFieldSection from "@components/TextFieldSection";
import DropdownSection from "@components/DropdownSection";
import ProgressIndicatorSection from "@components/ProgressIndicatorSection";
import CheckboxSection from "@components/CheckboxSection";
import IconButtonSection from "@components/IconButtonSection";
import TooltipSection from "@components/TooltipSection";
import PopperSection from "@components/PopperSection";
import ButtonSection from "@components/ButtonSection";
import SearchButtonSection from "@components/SearchButtonSection";
import StatusIndicatorSection from "@components/StatusIndicatorSection";
import BadgeSection from "@components/BadgeSection";
import TimePickerSection from "@components/TimePickerSection";
import ChipSection from "@components/ChipSection";
import RadioSection from "@components/RadioSection";
import VirtualListSection from "@components/VirtualListSection";
import AutoCompleteSection from "@components/AutoCompleteSection";
import EmptySection from "@components/EmptySection";
import CascaderSection from "@components/CascaderSection";
import SkeletonSection from "@components/SkeletonSection";
import AlertSection from "@components/AlertSection";

const App: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Layout theme="light">
      <Sidebar />
      <Main>
        <Header />
        <section className={styles.section}>
          <h2>{t("lib.about")}</h2>
          <p>{t("lib.about.description")}</p>
        </section>
        <section className={styles.section}>
          <h2>{t("lib.installation")}</h2>
          <p>{t("lib.installation.description")}</p>
          <div className={styles.codeBlock}>
            <pre>
              <code>npm install @acme/components</code>
            </pre>
          </div>
        </section>
        <section className={styles.section}>
          <h2>Components</h2>
          <p>
            Acme Components provides a wide range of beautifully designed
            components to help you build your web applications. Here are some of
            the available components:
          </p>

          <ButtonSection />
          <SearchButtonSection />
          <StatusIndicatorSection />
          <BadgeSection />
          <DropdownSection />
          <CardSection />
          <AvatarSection />

          <TextFieldSection />

          <ProgressIndicatorSection />

          <CheckboxSection />

          <IconButtonSection />

          <TooltipSection />

          <PopperSection />

          <ChipSection />
          <RadioSection />
          <VirtualListSection />
          <EmptySection />

          <SkeletonSection />

          <AlertSection />

          {/* <CascaderSection /> */}

          {/* <AutoCompleteSection /> */}

          {/* <TimePickerSection /> */}
        </section>
      </Main>
    </Layout>
  );
};

export default App;
