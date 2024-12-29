import React from "react";
import { ProgressIndicator } from "@minerva/lib-core";
import { FaCheck } from "react-icons/fa";
import styles from "./index.module.scss";

const ProgressIndicatorSection: React.FC = () => {
  return (
    <div className={styles.progressIndicatorExamples}>
      <h3>Spinner Progress Indicator</h3>
      <ProgressIndicator type="spinner" size="medium" ariaLabel="Loading" />

      <h3>Bar Progress Indicator</h3>
      <ProgressIndicator type="bar" size="large" ariaLabel="Loading" />

      <h3>Wave Progress Indicator</h3>
      <ProgressIndicator type="wave" size="small" ariaLabel="Loading" />

      <h3>Circle Progress Indicator</h3>
      <ProgressIndicator type="circle" size="medium" ariaLabel="Loading" />

      <h3>Dotted Bar Progress Indicator</h3>
      <ProgressIndicator type="dottedBar" size="large" ariaLabel="Loading" />

      <h3>Progress Indicator with Icon</h3>
      <ProgressIndicator
        type="spinner"
        size="medium"
        icon={<FaCheck />}
        ariaLabel="Loading"
      />

      <h3>Full Width Bar Progress Indicator</h3>
      <ProgressIndicator type="bar" size="large" ariaLabel="Loading" full />

      <h3>Custom Width Bar Progress Indicator</h3>
      <ProgressIndicator
        type="bar"
        size="large"
        ariaLabel="Loading"
        width="300px"
      />
    </div>
  );
};

export default ProgressIndicatorSection;
