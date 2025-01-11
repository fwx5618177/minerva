import React, { useCallback, useRef } from "react";
import { Button } from "@minerva/lib-core";
import styles from "./index.module.scss";
import { useTranslation } from "react-i18next";
import CodeBlock from "../../layout/CodeBlock";

const ButtonSection: React.FC = () => {
  const { t } = useTranslation();
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleRefClick = useCallback(() => {
    if (buttonRef.current) {
      buttonRef.current.style.transform = "scale(1.1)";
      setTimeout(() => {
        if (buttonRef.current) {
          buttonRef.current.style.transform = "scale(1)";
        }
      }, 200);
    }
  }, []);

  return (
    <div className={styles.section}>
      <h3>{t("button.title")}</h3>
      <p>{t("button.description")}</p>

      <h3>{t("button.examples.variants.title")}</h3>
      <p>{t("button.examples.variants.description")}</p>
      <div className={`${styles.group} ${styles["inline-group"]}`}>
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="success">Success</Button>
        <Button variant="warning">Warning</Button>
        <Button variant="error">Error</Button>
      </div>
      <CodeBlock
        code={`<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="success">Success</Button>
<Button variant="warning">Warning</Button>
<Button variant="error">Error</Button>`}
        language="jsx"
      />

      <h3>{t("button.sizes")}</h3>
      <p>{t("button.examples.sizes.description")}</p>
      <div className={`${styles.group} ${styles["inline-group"]}`}>
        <Button size="small">Small</Button>
        <Button size="medium">Medium</Button>
        <Button size="large">Large</Button>
      </div>
      <CodeBlock
        code={`<Button size="small">Small</Button>
<Button size="medium">Medium</Button>
<Button size="large">Large</Button>`}
        language="jsx"
      />

      <h3>{t("button.states")}</h3>
      <p>按钮可以有多种状态，包括禁用、加载中和激活状态。</p>
      <div className={`${styles.group} ${styles["inline-group"]}`}>
        <Button disabled>Disabled</Button>
        <Button loading>Loading</Button>
        <Button active>Active</Button>
      </div>
      <CodeBlock
        code={`<Button disabled>Disabled</Button>
<Button loading>Loading</Button>
<Button active>Active</Button>`}
        language="jsx"
      />

      <h3>{t("button.shapes")}</h3>
      <p>按钮支持多种形状，可以根据需要选择合适的形状。</p>
      <div className={`${styles.group} ${styles["inline-group"]}`}>
        <Button shape="square">Square</Button>
        <Button shape="rounded">Rounded</Button>
        <Button shape="circle">Circle</Button>
      </div>
      <CodeBlock
        code={`<Button shape="square">Square</Button>
<Button shape="rounded">Rounded</Button>
<Button shape="circle">Circle</Button>`}
        language="jsx"
      />

      <h3>{t("button.customStyles")}</h3>
      <p>按钮支持自定义样式，包括颜色、边框等属性。</p>
      <div className={styles.group}>
        <Button
          color="var(--primary-gradient-start)"
          style={
            {
              color: "#ffffff",
              "--hover-bg-color": "var(--primary-gradient-end)",
            } as React.CSSProperties
          }
        >
          Custom Colors
        </Button>
        <Button
          style={{
            borderRadius: "20px",
            borderColor: "var(--primary-color)",
            borderWidth: "2px",
          }}
        >
          Custom Border
        </Button>
      </div>
      <CodeBlock
        code={`<Button
  color="var(--primary-gradient-start)"
  style={{
    color: "#ffffff",
    "--hover-bg-color": "var(--primary-gradient-end)"
  }}
>
  Custom Colors
</Button>
<Button
  style={{
    borderRadius: "20px",
    borderColor: "var(--primary-color)",
    borderWidth: "2px"
  }}
>
  Custom Border
</Button>`}
        language="jsx"
      />

      <h3>Button with Animation</h3>
      <p>按钮可以添加动画效果，提升交互体验。</p>
      <div className={styles.group}>
        <Button ref={buttonRef} onClick={handleRefClick}>
          Click for Scale Effect
        </Button>
      </div>
      <CodeBlock
        code={`const buttonRef = useRef<HTMLButtonElement>(null);

const handleRefClick = useCallback(() => {
  if (buttonRef.current) {
    buttonRef.current.style.transform = "scale(1.1)";
    setTimeout(() => {
      if (buttonRef.current) {
        buttonRef.current.style.transform = "scale(1)";
      }
    }, 200);
  }
}, []);

<Button ref={buttonRef} onClick={handleRefClick}>
  Click for Scale Effect
</Button>`}
        language="jsx"
      />
    </div>
  );
};

export default ButtonSection;
