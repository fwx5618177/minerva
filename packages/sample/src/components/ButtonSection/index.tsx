import React, { useCallback, useRef } from "react";
import { Button } from "@minerva/lib-core";
import styles from "./index.module.scss";

const ButtonSection: React.FC = () => {
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
      <h3>Button</h3>
      <p>A customizable button component with various styles and sizes.</p>
      <h3>Button Variants</h3>
      <div className={styles.group}>
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="success">Success</Button>
        <Button variant="warning">Warning</Button>
        <Button variant="error">Error</Button>
      </div>

      <h3>Button Sizes</h3>
      <div className={styles.group}>
        <Button size="small">Small</Button>
        <Button size="medium">Medium</Button>
        <Button size="large">Large</Button>
      </div>

      <h3>Button States</h3>
      <div className={styles.group}>
        <Button disabled>Disabled</Button>
        <Button loading>Loading</Button>
        <Button active>Active</Button>
      </div>

      <h3>Button Shapes</h3>
      <div className={styles.group}>
        <Button shape="square">Square</Button>
        <Button shape="rounded">Rounded</Button>
        <Button shape="circle">Circle</Button>
      </div>

      <h3>Custom Styles</h3>
      <div className={styles.group}>
        <Button bgColor="#6200ee" textColor="#ffffff" hoverBgColor="#3700b3">
          Custom Colors
        </Button>
        <Button borderRadius="20px" borderColor="#2196f3" borderWidth="2px">
          Custom Border
        </Button>
      </div>

      <h3>Button with Ref</h3>
      <div className={styles.group}>
        <Button ref={buttonRef} onClick={handleRefClick}>
          Click for Scale Effect
        </Button>
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
      <div className={styles.group}>
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
      <div className={styles.group}>
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
      <div className={styles.group}>
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
      <div className={styles.group}>
        <Button borderRadius="none">Button</Button>
        <Button borderRadius="small">Button</Button>
        <Button borderRadius="medium">Button</Button>
        <Button borderRadius="large">Button</Button>
        <Button borderRadius="circle">Button</Button>
        <Button borderRadius="square">Button</Button>
      </div>

      <div className={styles.group}>
        <Button variant="secondary">Secondary</Button>
        <Button variant="success">Success</Button>
        <Button loading>Loading Button</Button>
        <Button active>Active Button</Button>
        <Button shape="rounded">Rounded</Button>
        <Button borderRadius={12}>Custom Radius</Button>
      </div>
    </div>
  );
};

export default ButtonSection;
