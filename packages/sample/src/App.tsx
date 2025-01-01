import React, { useRef, useCallback } from "react";

import Layout from "./pages/Layout";
import Sidebar from "@components/Sidebar/Sidebar";
import Main from "@components/Main/Main";
import Header from "@components/Header/Header";

import styles from "@styles/app.module.scss";
import { useTranslation } from "react-i18next";
import { SearchButton, StatusIndicator, Badge } from "@minerva/lib-core";
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
        </section>
      </Main>
    </Layout>
  );
};

export default App;
