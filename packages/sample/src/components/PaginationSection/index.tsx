import React from "react";
import { useTranslation } from "react-i18next";
import { Pagination } from "@minerva/lib-core";
import CodeBlock from "@layout/CodeBlock";
import styles from "./index.module.scss";

const PaginationSection: React.FC = () => {
  const { t } = useTranslation();

  const handlePageChange = (page: number, pageSize: number) => {
    console.log(`Page: ${page}, PageSize: ${pageSize}`);
  };

  return (
    <div className={styles.examples}>
      <div className={styles.example}>
        <h3>{t("components.pagination.examples.basic.title")}</h3>
        <p className={styles.description}>
          {t("components.pagination.examples.basic.description")}
        </p>
        <div className={styles.demo}>
          <Pagination total={50} onChange={handlePageChange} />
        </div>
        <div className={styles.codeWrapper}>
          <CodeBlock
            code={`<Pagination total={50} onChange={handlePageChange} />`}
          />
        </div>
      </div>

      <div className={styles.example}>
        <h3>{t("components.pagination.examples.sizes.title")}</h3>
        <p className={styles.description}>
          {t("components.pagination.examples.sizes.description")}
        </p>
        <div className={styles.demo}>
          <Pagination total={50} size="small" onChange={handlePageChange} />
          <Pagination total={50} onChange={handlePageChange} />
          <Pagination total={50} size="large" onChange={handlePageChange} />
        </div>
        <div className={styles.codeWrapper}>
          <CodeBlock
            code={`<Pagination total={50} size="small" onChange={handlePageChange} />
<Pagination total={50} onChange={handlePageChange} />
<Pagination total={50} size="large" onChange={handlePageChange} />`}
          />
        </div>
      </div>

      <div className={styles.example}>
        <h3>{t("components.pagination.examples.shapes.title")}</h3>
        <p className={styles.description}>
          {t("components.pagination.examples.shapes.description")}
        </p>
        <div className={styles.demo}>
          <Pagination total={50} shape="square" onChange={handlePageChange} />
          <Pagination total={50} shape="rounded" onChange={handlePageChange} />
          <Pagination total={50} shape="circle" onChange={handlePageChange} />
        </div>
        <div className={styles.codeWrapper}>
          <CodeBlock
            code={`<Pagination total={50} shape="square" onChange={handlePageChange} />
<Pagination total={50} shape="rounded" onChange={handlePageChange} />
<Pagination total={50} shape="circle" onChange={handlePageChange} />`}
          />
        </div>
      </div>

      <div className={styles.example}>
        <h3>{t("components.pagination.examples.variants.title")}</h3>
        <p className={styles.description}>
          {t("components.pagination.examples.variants.description")}
        </p>
        <div className={styles.demo}>
          <Pagination total={50} variant="filled" onChange={handlePageChange} />
          <Pagination
            total={50}
            variant="outlined"
            onChange={handlePageChange}
          />
          <Pagination total={50} variant="text" onChange={handlePageChange} />
        </div>
        <div className={styles.codeWrapper}>
          <CodeBlock
            code={`<Pagination total={50} variant="filled" onChange={handlePageChange} />
<Pagination total={50} variant="outlined" onChange={handlePageChange} />
<Pagination total={50} variant="text" onChange={handlePageChange} />`}
          />
        </div>
      </div>

      <div className={styles.example}>
        <h3>{t("components.pagination.examples.more.title")}</h3>
        <p className={styles.description}>
          {t("components.pagination.examples.more.description")}
        </p>
        <div className={styles.demo}>
          <Pagination
            total={500}
            showQuickJumper
            showSizeChanger
            showTotal
            onChange={handlePageChange}
            totalRender={(total: number, range: [number, number]) =>
              `${range[0]}-${range[1]} of ${total} items`
            }
          />
        </div>
        <div className={styles.codeWrapper}>
          <CodeBlock
            code={`<Pagination
  total={500}
  showQuickJumper
  showSizeChanger
  showTotal
  onChange={handlePageChange}
  totalRender={(total, range) => \`\${range[0]}-\${range[1]} of \${total} items\`}
/>`}
          />
        </div>
      </div>

      <div className={styles.example}>
        <h3>{t("components.pagination.examples.simple.title")}</h3>
        <p className={styles.description}>
          {t("components.pagination.examples.simple.description")}
        </p>
        <div className={styles.demo}>
          <Pagination total={50} simple onChange={handlePageChange} />
        </div>
        <div className={styles.codeWrapper}>
          <CodeBlock
            code={`<Pagination total={50} simple onChange={handlePageChange} />`}
          />
        </div>
      </div>

      <div className={styles.example}>
        <h3>{t("components.pagination.examples.disabled.title")}</h3>
        <p className={styles.description}>
          {t("components.pagination.examples.disabled.description")}
        </p>
        <div className={styles.demo}>
          <Pagination total={50} disabled onChange={handlePageChange} />
        </div>
        <div className={styles.codeWrapper}>
          <CodeBlock
            code={`<Pagination total={50} disabled onChange={handlePageChange} />`}
          />
        </div>
      </div>

      <div className={styles.example}>
        <h3>{t("components.pagination.examples.responsive.title")}</h3>
        <p className={styles.description}>
          {t("components.pagination.examples.responsive.description")}
        </p>
        <div className={styles.demo}>
          <Pagination total={50} responsive onChange={handlePageChange} />
        </div>
        <div className={styles.codeWrapper}>
          <CodeBlock
            code={`<Pagination total={50} responsive onChange={handlePageChange} />`}
          />
        </div>
      </div>

      <div className={styles.example}>
        <h3>API</h3>
        <div className={styles.apiTable}>
          <table>
            <thead>
              <tr>
                <th>Property</th>
                <th>Description</th>
                <th>Type</th>
                <th>Default</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>current</td>
                <td>{t("components.pagination.properties.current")}</td>
                <td>number</td>
                <td>1</td>
              </tr>
              <tr>
                <td>total</td>
                <td>{t("components.pagination.properties.total")}</td>
                <td>number</td>
                <td>0</td>
              </tr>
              <tr>
                <td>pageSize</td>
                <td>{t("components.pagination.properties.pageSize")}</td>
                <td>number</td>
                <td>10</td>
              </tr>
              <tr>
                <td>onChange</td>
                <td>{t("components.pagination.properties.onChange")}</td>
                <td>"(page: number, pageSize: number) =&gt; void"</td>
                <td>-</td>
              </tr>
              <tr>
                <td>disabled</td>
                <td>{t("components.pagination.properties.disabled")}</td>
                <td>boolean</td>
                <td>false</td>
              </tr>
              <tr>
                <td>showQuickJumper</td>
                <td>{t("components.pagination.properties.showQuickJumper")}</td>
                <td>boolean</td>
                <td>false</td>
              </tr>
              <tr>
                <td>showSizeChanger</td>
                <td>{t("components.pagination.properties.showSizeChanger")}</td>
                <td>boolean</td>
                <td>false</td>
              </tr>
              <tr>
                <td>pageSizeOptions</td>
                <td>{t("components.pagination.properties.pageSizeOptions")}</td>
                <td>number[]</td>
                <td>[10, 20, 50, 100]</td>
              </tr>
              <tr>
                <td>itemRender</td>
                <td>{t("components.pagination.properties.itemRender")}</td>
                <td>"(page: number, type: PaginationType) =&gt; ReactNode"</td>
                <td>-</td>
              </tr>
              <tr>
                <td>showTotal</td>
                <td>{t("components.pagination.properties.showTotal")}</td>
                <td>boolean</td>
                <td>false</td>
              </tr>
              <tr>
                <td>totalRender</td>
                <td>{t("components.pagination.properties.totalRender")}</td>
                <td>
                  "(total: number, range: [number, number]) =&gt; ReactNode"
                </td>
                <td>-</td>
              </tr>
              <tr>
                <td>size</td>
                <td>{t("components.pagination.properties.size")}</td>
                <td>"small" | "medium" | "large"</td>
                <td>"medium"</td>
              </tr>
              <tr>
                <td>shape</td>
                <td>{t("components.pagination.properties.shape")}</td>
                <td>"circle" | "rounded" | "square"</td>
                <td>"rounded"</td>
              </tr>
              <tr>
                <td>variant</td>
                <td>{t("components.pagination.properties.variant")}</td>
                <td>"filled" | "outlined" | "text"</td>
                <td>"filled"</td>
              </tr>
              <tr>
                <td>simple</td>
                <td>{t("components.pagination.properties.simple")}</td>
                <td>boolean</td>
                <td>false</td>
              </tr>
              <tr>
                <td>responsive</td>
                <td>{t("components.pagination.properties.responsive")}</td>
                <td>boolean</td>
                <td>false</td>
              </tr>
              <tr>
                <td>icons</td>
                <td>{t("components.pagination.properties.icons")}</td>
                <td>
                  {
                    "{ prev?: ReactNode; next?: ReactNode; jumpPrev?: ReactNode; jumpNext?: ReactNode }"
                  }
                </td>
                <td>-</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PaginationSection;
