import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Pagination } from "@minerva/lib-core";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import CodeBlock from "@layout/CodeBlock";
import styles from "./index.module.scss";

const PaginationSection: React.FC = () => {
  const { t } = useTranslation();
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const handlePageChange = (page: number, size: number) => {
    setCurrentPage(page);
    setPageSize(size);
    console.log(`Page: ${page}, PageSize: ${size}`);
  };

  return (
    <div className={styles.examples}>
      <div className={styles.example}>
        <h3>{t("components.pagination.examples.introduction.title")}</h3>
        <p className={styles.description}>
          {t("components.pagination.examples.introduction.description")}
        </p>
        <div className={styles.tips}>
          <h4>{t("components.pagination.when_to_use.title")}</h4>
          <ul>
            {(
              t("components.pagination.when_to_use.items", {
                returnObjects: true,
              }) as string[]
            )?.map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className={styles.example}>
        <h3>{t("components.pagination.examples.basic.title")}</h3>
        <p className={styles.description}>
          {t("components.pagination.examples.basic.description")}
        </p>
        <div className={styles.demo}>
          <Pagination
            total={50}
            current={currentPage}
            onChange={handlePageChange}
          />
        </div>
        <div className={styles.codeWrapper}>
          <CodeBlock
            code={`<Pagination 
  total={50}
  current={currentPage}
  onChange={handlePageChange}
/>`}
          />
        </div>
      </div>

      <div className={styles.example}>
        <h3>{t("components.pagination.examples.sizes.title")}</h3>
        <p className={styles.description}>
          {t("components.pagination.examples.sizes.description")}
        </p>
        <div className={styles.demo}>
          <Pagination
            total={50}
            size="small"
            current={currentPage}
            onChange={handlePageChange}
          />
          <Pagination
            total={50}
            current={currentPage}
            onChange={handlePageChange}
          />
          <Pagination
            total={50}
            size="large"
            current={currentPage}
            onChange={handlePageChange}
          />
        </div>
        <div className={styles.codeWrapper}>
          <CodeBlock
            code={`<Pagination total={50} size="small" current={currentPage} onChange={handlePageChange} />
<Pagination total={50} current={currentPage} onChange={handlePageChange} />
<Pagination total={50} size="large" current={currentPage} onChange={handlePageChange} />`}
          />
        </div>
      </div>

      <div className={styles.example}>
        <h3>{t("components.pagination.examples.shapes.title")}</h3>
        <p className={styles.description}>
          {t("components.pagination.examples.shapes.description")}
        </p>
        <div className={styles.demo}>
          <Pagination
            total={50}
            shape="square"
            current={currentPage}
            onChange={handlePageChange}
          />
          <Pagination
            total={50}
            shape="rounded"
            current={currentPage}
            onChange={handlePageChange}
          />
          <Pagination
            total={50}
            shape="circle"
            current={currentPage}
            onChange={handlePageChange}
          />
        </div>
        <div className={styles.codeWrapper}>
          <CodeBlock
            code={`<Pagination total={50} shape="square" current={currentPage} onChange={handlePageChange} />
<Pagination total={50} shape="rounded" current={currentPage} onChange={handlePageChange} />
<Pagination total={50} shape="circle" current={currentPage} onChange={handlePageChange} />`}
          />
        </div>
      </div>

      <div className={styles.example}>
        <h3>{t("components.pagination.examples.variants.title")}</h3>
        <p className={styles.description}>
          {t("components.pagination.examples.variants.description")}
        </p>
        <div className={styles.demo}>
          <Pagination
            total={50}
            variant="filled"
            current={currentPage}
            onChange={handlePageChange}
          />
          <Pagination
            total={50}
            variant="outlined"
            current={currentPage}
            onChange={handlePageChange}
          />
          <Pagination
            total={50}
            variant="text"
            current={currentPage}
            onChange={handlePageChange}
          />
        </div>
        <div className={styles.codeWrapper}>
          <CodeBlock
            code={`<Pagination total={50} variant="filled" current={currentPage} onChange={handlePageChange} />
<Pagination total={50} variant="outlined" current={currentPage} onChange={handlePageChange} />
<Pagination total={50} variant="text" current={currentPage} onChange={handlePageChange} />`}
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
            current={currentPage}
            pageSize={pageSize}
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
  current={currentPage}
  pageSize={pageSize}
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
        <h3>{t("components.pagination.examples.large.title")}</h3>
        <p className={styles.description}>
          {t("components.pagination.examples.large.description")}
        </p>
        <div className={styles.demo}>
          <Pagination
            total={1000}
            current={currentPage}
            pageSize={pageSize}
            showQuickJumper
            showSizeChanger
            showTotal
            onChange={handlePageChange}
          />
        </div>
        <div className={styles.codeWrapper}>
          <CodeBlock
            code={`<Pagination
  total={1000}
  current={currentPage}
  pageSize={pageSize}
  showQuickJumper
  showSizeChanger
  showTotal
  onChange={handlePageChange}
/>`}
          />
        </div>
      </div>

      <div className={styles.example}>
        <h3>{t("components.pagination.examples.custom.title")}</h3>
        <p className={styles.description}>
          {t("components.pagination.examples.custom.description")}
        </p>
        <div className={styles.demo}>
          <Pagination
            total={100}
            current={currentPage}
            onChange={handlePageChange}
            icons={{
              prev: <IoChevronBack />,
              next: <IoChevronForward />,
            }}
            itemRender={(page, type) => {
              if (type === "page") return `Page ${page}`;
              return null;
            }}
          />
        </div>
        <div className={styles.codeWrapper}>
          <CodeBlock
            code={`<Pagination
  total={100}
  current={currentPage}
  onChange={handlePageChange}
  icons={{
    prev: <IoChevronBack />,
    next: <IoChevronForward />,
  }}
  itemRender={(page, type) => {
    if (type === "page") return \`Page \${page}\`;
    return null;
  }}
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
          <Pagination
            total={50}
            simple
            current={currentPage}
            onChange={handlePageChange}
          />
        </div>
        <div className={styles.codeWrapper}>
          <CodeBlock
            code={`<Pagination total={50} simple current={currentPage} onChange={handlePageChange} />`}
          />
        </div>
      </div>

      <div className={styles.example}>
        <h3>{t("components.pagination.examples.disabled.title")}</h3>
        <p className={styles.description}>
          {t("components.pagination.examples.disabled.description")}
        </p>
        <div className={styles.demo}>
          <Pagination
            total={50}
            disabled
            current={currentPage}
            onChange={handlePageChange}
          />
        </div>
        <div className={styles.codeWrapper}>
          <CodeBlock
            code={`<Pagination total={50} disabled current={currentPage} onChange={handlePageChange} />`}
          />
        </div>
      </div>

      <div className={styles.example}>
        <h3>{t("components.pagination.examples.responsive.title")}</h3>
        <p className={styles.description}>
          {t("components.pagination.examples.responsive.description")}
        </p>
        <div className={styles.demo}>
          <Pagination
            total={50}
            responsive
            current={currentPage}
            onChange={handlePageChange}
          />
        </div>
        <div className={styles.codeWrapper}>
          <CodeBlock
            code={`<Pagination total={50} responsive current={currentPage} onChange={handlePageChange} />`}
          />
        </div>
      </div>

      <div className={styles.example}>
        <h3>API</h3>
        <div className={styles.apiTable}>
          <table>
            <thead>
              <tr>
                <th>{t("components.common.api.property")}</th>
                <th>{t("components.common.api.description")}</th>
                <th>{t("components.common.api.type")}</th>
                <th>{t("components.common.api.default")}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>current</td>
                <td>{t("components.pagination.properties.current")}</td>
                <td>&quot;number&quot;</td>
                <td>1</td>
              </tr>
              <tr>
                <td>total</td>
                <td>{t("components.pagination.properties.total")}</td>
                <td>&quot;number&quot;</td>
                <td>0</td>
              </tr>
              <tr>
                <td>pageSize</td>
                <td>{t("components.pagination.properties.pageSize")}</td>
                <td>&quot;number&quot;</td>
                <td>10</td>
              </tr>
              <tr>
                <td>onChange</td>
                <td>{t("components.pagination.properties.onChange")}</td>
                <td>&quot;(page: number, pageSize: number) =&gt; void&quot;</td>
                <td>-</td>
              </tr>
              <tr>
                <td>disabled</td>
                <td>{t("components.pagination.properties.disabled")}</td>
                <td>&quot;boolean&quot;</td>
                <td>false</td>
              </tr>
              <tr>
                <td>showQuickJumper</td>
                <td>{t("components.pagination.properties.showQuickJumper")}</td>
                <td>&quot;boolean&quot;</td>
                <td>false</td>
              </tr>
              <tr>
                <td>showSizeChanger</td>
                <td>{t("components.pagination.properties.showSizeChanger")}</td>
                <td>&quot;boolean&quot;</td>
                <td>false</td>
              </tr>
              <tr>
                <td>pageSizeOptions</td>
                <td>{t("components.pagination.properties.pageSizeOptions")}</td>
                <td>&quot;number[]&quot;</td>
                <td>[10, 20, 50, 100]</td>
              </tr>
              <tr>
                <td>itemRender</td>
                <td>{t("components.pagination.properties.itemRender")}</td>
                <td>
                  &quot;(page: number, type: PaginationType) =&gt;
                  ReactNode&quot;
                </td>
                <td>-</td>
              </tr>
              <tr>
                <td>showTotal</td>
                <td>{t("components.pagination.properties.showTotal")}</td>
                <td>&quot;boolean&quot;</td>
                <td>false</td>
              </tr>
              <tr>
                <td>totalRender</td>
                <td>{t("components.pagination.properties.totalRender")}</td>
                <td>
                  &quot;(total: number, range: [number, number]) =&gt;
                  ReactNode&quot;
                </td>
                <td>-</td>
              </tr>
              <tr>
                <td>size</td>
                <td>{t("components.pagination.properties.size")}</td>
                <td>
                  &quot;small&quot; | &quot;medium&quot; | &quot;large&quot;
                </td>
                <td>&quot;medium&quot;</td>
              </tr>
              <tr>
                <td>shape</td>
                <td>{t("components.pagination.properties.shape")}</td>
                <td>
                  &quot;circle&quot; | &quot;rounded&quot; | &quot;square&quot;
                </td>
                <td>&quot;rounded&quot;</td>
              </tr>
              <tr>
                <td>variant</td>
                <td>{t("components.pagination.properties.variant")}</td>
                <td>
                  &quot;filled&quot; | &quot;outlined&quot; | &quot;text&quot;
                </td>
                <td>&quot;filled&quot;</td>
              </tr>
              <tr>
                <td>simple</td>
                <td>{t("components.pagination.properties.simple")}</td>
                <td>&quot;boolean&quot;</td>
                <td>false</td>
              </tr>
              <tr>
                <td>responsive</td>
                <td>{t("components.pagination.properties.responsive")}</td>
                <td>&quot;boolean&quot;</td>
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
