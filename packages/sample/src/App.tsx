import React from "react";

import Layout from "./pages/Layout";
import Sidebar from "@components/Sidebar/Sidebar";
import Main from "@components/Main/Main";
import Header from "@components/Header/Header";

import styles from "@styles/app.module.scss";
import { useTranslation } from "react-i18next";
import {
  Button,
  SearchButton,
  StatusIndicator,
  Badge,
} from "@minerva/lib-core";
import AvatarSection from "@components/Avatar";
import CardSection from "@components/CardSection";
import TextFieldSection from "@components/TextFieldSection";
import DropdownSection from "@components/DropdownSection";
import ProgressIndicatorSection from "@components/ProgressIndicatorSection";
import CheckboxSection from "@components/CheckboxSection";
import IconButtonSection from "@components/IconButtonSection";
import TooltipSection from "@components/TooltipSection";

const App: React.FC = () => {
  const { t } = useTranslation();

  const handleSearchClick = () => {
    console.log("Search button clicked");
  };

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
          <div className={styles.componentsGrid}>
            <div className={styles.componentCard}>
              <h3>Button</h3>
              <p>
                A customizable button component with various styles and sizes.
              </p>
              <div className={styles.buttonExamples}>
                <h3>small</h3>
                <div className={styles.buttonGroup}>
                  <Button size="small">Button</Button>
                  <Button size="small" variant="error">
                    Button
                  </Button>
                  <Button size="small" variant="warning">
                    Button
                  </Button>
                  <Button size="small" variant="retry">
                    Button
                  </Button>

                  <Button size="small" variant="back">
                    Button
                  </Button>
                  <Button size="small" disabled>
                    Button
                  </Button>
                </div>

                <h3>medium</h3>
                <div className={styles.buttonGroup}>
                  <Button size="medium">Button</Button>
                  <Button size="medium" variant="error">
                    Button
                  </Button>
                  <Button size="medium" variant="warning">
                    Button
                  </Button>
                  <Button size="medium" variant="retry">
                    Button
                  </Button>
                  <Button size="medium" variant="back">
                    Button
                  </Button>
                  <Button size="medium" disabled>
                    Button
                  </Button>
                </div>

                <h3>large</h3>
                <div className={styles.buttonGroup}>
                  <Button size="large">Button</Button>
                  <Button size="large" variant="error">
                    Button
                  </Button>
                  <Button size="large" variant="warning">
                    Button
                  </Button>
                  <Button size="large" variant="retry">
                    Button
                  </Button>
                  <Button size="large" variant="back">
                    Button
                  </Button>
                  <Button size="large" disabled>
                    Button
                  </Button>
                </div>

                <h3>xlarge</h3>
                <div className={styles.buttonGroup}>
                  <Button size="xlarge">Button</Button>
                  <Button size="xlarge" variant="error">
                    Button
                  </Button>
                  <Button size="xlarge" variant="warning">
                    Button
                  </Button>
                  <Button size="xlarge" variant="retry">
                    Button
                  </Button>
                  <Button size="xlarge" variant="back">
                    Button
                  </Button>
                  <Button size="xlarge" disabled>
                    Button
                  </Button>
                </div>

                <h3>Border Radius</h3>
                <div className={styles.buttonGroup}>
                  <Button borderRadius="none">Button</Button>
                  <Button borderRadius="small">Button</Button>
                  <Button borderRadius="medium">Button</Button>
                  <Button borderRadius="large">Button</Button>
                  <Button borderRadius="circle">Button</Button>
                  <Button borderRadius="square">Button</Button>
                </div>
              </div>

              <h3>SearchButton</h3>
              <p>
                A button component with a search icon, used for search
                functionality.
              </p>
              <div className={styles.buttonExamples}>
                <h3>Search Text</h3>
                <div className={styles.buttonGroup}>
                  <SearchButton onClick={handleSearchClick}>
                    Search
                  </SearchButton>
                  <SearchButton onClick={handleSearchClick} variant="error">
                    Search
                  </SearchButton>
                  <SearchButton onClick={handleSearchClick} variant="warning">
                    Search
                  </SearchButton>
                  <SearchButton onClick={handleSearchClick} variant="success">
                    Search
                  </SearchButton>
                  <SearchButton onClick={handleSearchClick} variant="info">
                    Search
                  </SearchButton>
                  <SearchButton onClick={handleSearchClick} shape="square">
                    Search
                  </SearchButton>
                  <SearchButton onClick={handleSearchClick} shape="rounded">
                    Search
                  </SearchButton>
                  <SearchButton onClick={handleSearchClick} animation="expand">
                    Search
                  </SearchButton>
                  <SearchButton onClick={handleSearchClick} animation="shrink">
                    Search
                  </SearchButton>
                  <SearchButton onClick={handleSearchClick} disabled>
                    Search
                  </SearchButton>
                </div>
                <h3>Search Text Size</h3>
                <div className={styles.buttonGroup}>
                  <SearchButton onClick={handleSearchClick} size="small">
                    Search
                  </SearchButton>
                  <SearchButton onClick={handleSearchClick} size="medium">
                    Search
                  </SearchButton>
                  <SearchButton onClick={handleSearchClick} size="large">
                    Search
                  </SearchButton>
                  <SearchButton onClick={handleSearchClick} size="xlarge">
                    Search
                  </SearchButton>
                  <SearchButton onClick={handleSearchClick}>
                    Search
                  </SearchButton>
                </div>
                <h3>Search Text Color</h3>
                <div className={styles.buttonGroup}>
                  <SearchButton onClick={handleSearchClick} color="#fff">
                    Text
                  </SearchButton>
                  <SearchButton onClick={handleSearchClick} color="#000">
                    Test case
                  </SearchButton>
                </div>
                <h3>Search variant</h3>
                <div className={styles.buttonGroup}>
                  <SearchButton onClick={handleSearchClick} />
                  <SearchButton onClick={handleSearchClick} variant="error" />
                  <SearchButton onClick={handleSearchClick} variant="warning" />
                  <SearchButton onClick={handleSearchClick} variant="success" />
                  <SearchButton onClick={handleSearchClick} variant="info" />
                  <SearchButton
                    onClick={handleSearchClick}
                    disabled
                    iconColor="#fff"
                  />
                </div>
                <h3>Search Shape</h3>
                <div className={styles.buttonGroup}>
                  <SearchButton onClick={handleSearchClick} shape="square" />
                  <SearchButton onClick={handleSearchClick} shape="rounded" />
                  <SearchButton onClick={handleSearchClick} shape="circle" />
                </div>
                <h3>Search Animation</h3>
                <div className={styles.buttonGroup}>
                  <SearchButton onClick={handleSearchClick} />
                  <SearchButton onClick={handleSearchClick} animation="none" />
                  <SearchButton
                    onClick={handleSearchClick}
                    animation="expand"
                  />
                  <SearchButton
                    onClick={handleSearchClick}
                    animation="shrink"
                  />
                  <SearchButton onClick={handleSearchClick} animation="shake" />
                </div>
                <h3>Search Size</h3>
                <div className={styles.buttonGroup}>
                  <SearchButton onClick={handleSearchClick} size="small" />
                  <SearchButton onClick={handleSearchClick} size="medium" />
                  <SearchButton onClick={handleSearchClick} size="large" />
                  <SearchButton onClick={handleSearchClick} size="xlarge" />
                  <SearchButton onClick={handleSearchClick} />
                </div>
                <h3>Search Icon Color</h3>
                <div className={styles.buttonGroup}>
                  <SearchButton
                    onClick={handleSearchClick}
                    iconColor="#000000"
                  />
                  <SearchButton
                    onClick={handleSearchClick}
                    iconColor="#ff0000"
                  />
                  <SearchButton
                    onClick={handleSearchClick}
                    iconColor="#00ff00"
                  />
                  <SearchButton
                    onClick={handleSearchClick}
                    iconColor="#0000ff"
                  />
                </div>
                <h3>Search Background Color</h3>
                <div className={styles.buttonGroup}>
                  <SearchButton onClick={handleSearchClick} bgColor="#000000" />
                  <SearchButton onClick={handleSearchClick} bgColor="#ff0000" />
                  <SearchButton onClick={handleSearchClick} bgColor="#00ff00" />
                  <SearchButton onClick={handleSearchClick} bgColor="#0000ff" />
                </div>
                <h3>Search Loading</h3>
                <div className={styles.buttonGroup}>
                  <SearchButton onClick={handleSearchClick} loading />
                  <SearchButton
                    onClick={handleSearchClick}
                    loading
                    variant="error"
                  />
                  <SearchButton
                    onClick={handleSearchClick}
                    loading
                    variant="warning"
                  />
                  <SearchButton
                    onClick={handleSearchClick}
                    loading
                    variant="success"
                  />
                  <SearchButton
                    onClick={handleSearchClick}
                    loading
                    variant="info"
                  />
                  <SearchButton
                    onClick={handleSearchClick}
                    loading
                    disabled
                    iconColor="#000"
                  />

                  <SearchButton onClick={handleSearchClick} />
                  <SearchButton onClick={handleSearchClick} variant="error" />
                  <SearchButton onClick={handleSearchClick} variant="warning" />
                  <SearchButton onClick={handleSearchClick} variant="success" />
                </div>
              </div>

              <div className={styles.buttonExamples}>
                <h3>Status Button</h3>
                <div className={styles.buttonGroup}>
                  <StatusIndicator status="success" />
                  <StatusIndicator status="error" />
                  <StatusIndicator status="warning" />
                  <StatusIndicator status="info" />

                  <StatusIndicator status="success" shape="square" />
                  <StatusIndicator status="error" shape="square" />
                  <StatusIndicator status="warning" shape="square" />
                  <StatusIndicator status="info" shape="square" />
                  <StatusIndicator status="success" shape="rounded" />
                  <StatusIndicator status="error" shape="rounded" />
                  <StatusIndicator status="warning" shape="rounded" />
                  <StatusIndicator status="info" shape="rounded" />
                </div>
              </div>
            </div>

            <DropdownSection />
            <div className={styles.buttonExamples}>
              <h3>Badge</h3>
              <div className={styles.buttonGroup}>
                <Badge>Badge</Badge>
                <Badge variant="primary">Badge</Badge>
                <Badge variant="secondary">Badge</Badge>
                <Badge variant="success">Badge</Badge>
                <Badge variant="danger">Badge</Badge>
                <Badge variant="warning">Badge</Badge>
                <Badge variant="info">Badge</Badge>
                <Badge variant="light">Badge</Badge>
                <Badge variant="dark">Badge</Badge>
              </div>
              <div className={styles.buttonGroup}>
                <Badge size="small">Badge</Badge>
                <Badge size="medium">Badge</Badge>
                <Badge size="large">Badge</Badge>
              </div>
              <div className={styles.buttonGroup}>
                <Badge bgColor="#ff0000" textColor="#ffffff">
                  Badge
                </Badge>
                <Badge bgColor="#00ff00" textColor="#ffffff">
                  Badge
                </Badge>
                <Badge bgColor="#0000ff" textColor="#ffffff">
                  Badge
                </Badge>
                <Badge bgColor="#ffff00" textColor="#000000">
                  Badge
                </Badge>
                <Badge bgColor="#ff00ff" textColor="#ffffff">
                  Badge
                </Badge>
                <Badge bgColor="#00ffff" textColor="#000000">
                  Badge
                </Badge>
              </div>
            </div>

            <div className={styles.buttonExamples}>
              <h3>Status Badge</h3>
              <div className={styles.buttonGroup}>
                <Badge variant="success">Active</Badge>
                <Badge variant="danger">Error</Badge>
                <Badge variant="warning">Warning</Badge>
                <Badge variant="info">Info</Badge>
              </div>
            </div>

            <CardSection />
            <AvatarSection />

            <TextFieldSection />

            <ProgressIndicatorSection />

            <CheckboxSection />

            <IconButtonSection />

            <TooltipSection />
          </div>
        </section>
      </Main>
    </Layout>
  );
};

export default App;
