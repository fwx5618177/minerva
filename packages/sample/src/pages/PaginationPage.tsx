import React from "react";
import { useTranslation } from "react-i18next";
import { IoListOutline } from "react-icons/io5";
import CodeBlock from "@layout/CodeBlock";
import PaginationSection from "@components/PaginationSection";
import styles from "@styles/pages/button.module.scss";

const PaginationPage: React.FC = () => {
  const { t } = useTranslation();

  const installCode = `import { Pagination } from '@minerva/lib-core';`;

  const basicUsageCode = `import { Pagination } from '@minerva/lib-core';

function App() {
  return (
    <Pagination
      current={1}
      total={100}
      pageSize={10}
      onChange={(page) => console.log(page)}
    />
  );
}`;

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.titleWrapper}>
          <IoListOutline className={styles.icon} />
          <div>
            <h1>{t("components.pagination.title")}</h1>
            <p>{t("components.pagination.description")}</p>
          </div>
        </div>
      </header>

      <section className={styles.section}>
        <h2>{t("components.pagination.installation")}</h2>
        <p>{t("components.pagination.installation_description")}</p>
        <div className={styles.codeWrapper}>
          <CodeBlock
            code={installCode}
            language="typescript"
            showLineNumbers={false}
          />
        </div>
      </section>

      <section className={styles.section}>
        <h2>{t("components.pagination.basic_usage")}</h2>
        <p>{t("components.pagination.basic_usage_description")}</p>
        <div className={styles.codeWrapper}>
          <CodeBlock
            code={basicUsageCode}
            language="typescript"
            showLineNumbers={false}
          />
        </div>
      </section>

      <section className={styles.section}>
        <h2>{t("components.pagination.properties.title")}</h2>
        <div className={styles.properties}>
          <div className={styles.property}>
            <h3>
              current
              <span className={styles.badge}>required</span>
            </h3>
            <code className={styles.type}>number</code>
            <p>{t("components.pagination.properties.current")}</p>
          </div>

          <div className={styles.property}>
            <h3>
              total
              <span className={styles.badge}>required</span>
            </h3>
            <code className={styles.type}>number</code>
            <p>{t("components.pagination.properties.total")}</p>
          </div>

          <div className={styles.property}>
            <h3>
              pageSize
              <span className={styles.badge}>required</span>
            </h3>
            <code className={styles.type}>number</code>
            <p>{t("components.pagination.properties.pageSize")}</p>
          </div>

          <div className={styles.property}>
            <h3>onChange</h3>
            <code className={styles.type}>
              {"(page: number, pageSize: number) => void"}
            </code>
            <p>{t("components.pagination.properties.onChange")}</p>
          </div>

          <div className={styles.property}>
            <h3>disabled</h3>
            <code className={styles.type}>boolean</code>
            <p>{t("components.pagination.properties.disabled")}</p>
          </div>

          <div className={styles.property}>
            <h3>showQuickJumper</h3>
            <code className={styles.type}>boolean</code>
            <p>{t("components.pagination.properties.showQuickJumper")}</p>
          </div>

          <div className={styles.property}>
            <h3>showSizeChanger</h3>
            <code className={styles.type}>boolean</code>
            <p>{t("components.pagination.properties.showSizeChanger")}</p>
          </div>

          <div className={styles.property}>
            <h3>pageSizeOptions</h3>
            <code className={styles.type}>number[]</code>
            <p>{t("components.pagination.properties.pageSizeOptions")}</p>
          </div>

          <div className={styles.property}>
            <h3>itemRender</h3>
            <code className={styles.type}>
              {
                "(page: number, type: 'page' | 'prev' | 'next' | 'jump-prev' | 'jump-next', element: ReactNode) => ReactNode"
              }
            </code>
            <p>{t("components.pagination.properties.itemRender")}</p>
          </div>

          <div className={styles.property}>
            <h3>showTotal</h3>
            <code className={styles.type}>boolean</code>
            <p>{t("components.pagination.properties.showTotal")}</p>
          </div>

          <div className={styles.property}>
            <h3>totalRender</h3>
            <code className={styles.type}>
              {"(total: number, range: [number, number]) => ReactNode"}
            </code>
            <p>{t("components.pagination.properties.totalRender")}</p>
          </div>

          <div className={styles.property}>
            <h3>size</h3>
            <code className={styles.type}>
              &quot;small&quot; | &quot;medium&quot; | &quot;large&quot;
            </code>
            <p>{t("components.pagination.properties.size")}</p>
          </div>

          <div className={styles.property}>
            <h3>shape</h3>
            <code className={styles.type}>
              &quot;square&quot; | &quot;rounded&quot; | &quot;circle&quot;
            </code>
            <p>{t("components.pagination.properties.shape")}</p>
          </div>

          <div className={styles.property}>
            <h3>variant</h3>
            <code className={styles.type}>
              &quot;filled&quot; | &quot;outlined&quot; | &quot;text&quot;
            </code>
            <p>{t("components.pagination.properties.variant")}</p>
          </div>

          <div className={styles.property}>
            <h3>simple</h3>
            <code className={styles.type}>boolean</code>
            <p>{t("components.pagination.properties.simple")}</p>
          </div>

          <div className={styles.property}>
            <h3>responsive</h3>
            <code className={styles.type}>boolean</code>
            <p>{t("components.pagination.properties.responsive")}</p>
          </div>

          <div className={styles.property}>
            <h3>icons</h3>
            <code className={styles.type}>
              {
                "{ prev?: ReactNode; next?: ReactNode; jumpPrev?: ReactNode; jumpNext?: ReactNode }"
              }
            </code>
            <p>{t("components.pagination.properties.icons")}</p>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2>{t("components.pagination.examples.title")}</h2>
        <PaginationSection />
      </section>
    </div>
  );
};

export default PaginationPage;
