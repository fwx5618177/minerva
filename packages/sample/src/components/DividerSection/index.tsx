import React from "react";
import { Divider } from "@minerva/lib-core";
import styles from "./section.module.scss";

const DividerSection: React.FC = () => {
  return (
    <div className={styles.section}>
      <h3>Basic Dividers</h3>
      <div className={styles.group}>
        <Divider />
        <Divider variant="dashed" />
        <Divider variant="dotted" />
      </div>

      <h3>Colored Dividers</h3>
      <div className={styles.group}>
        <Divider color="#1976d2" />
        <Divider color="#4caf50" />
        <Divider color="#f44336" />
      </div>

      <h3>Vertical Dividers</h3>
      <div className={styles.group}>
        <div className={styles.verticalContainer}>
          <span>Text</span>
          <Divider orientation="vertical" />
          <span>Text</span>
          <Divider orientation="vertical" variant="dashed" />
          <span>Text</span>
          <Divider orientation="vertical" variant="dotted" />
          <span>Text</span>
        </div>
      </div>

      <h3>Dividers with Text</h3>
      <div className={styles.group}>
        <Divider>Center Text</Divider>
        <Divider textAlign="left">Left Text</Divider>
        <Divider textAlign="right">Right Text</Divider>
      </div>

      <h3>Custom Styling</h3>
      <div className={styles.group}>
        <Divider thickness={2} color="#1976d2" />
        <Divider thickness={3} variant="dashed" color="#4caf50" />
        <Divider thickness={4} variant="dotted" color="#f44336" />
      </div>

      <h3>With Elevation</h3>
      <div className={styles.group}>
        <Divider elevation />
        <Divider elevation variant="dashed" />
        <Divider elevation>With Text</Divider>
      </div>

      <h3>Custom Length and Spacing</h3>
      <div className={styles.group}>
        <Divider length="50%" />
        <Divider length={200} spacing={32} />
        <div className={styles.verticalContainer} style={{ height: 100 }}>
          <Divider orientation="vertical" length="80%" />
          <Divider orientation="vertical" length={60} spacing={24} />
        </div>
      </div>
    </div>
  );
};

export default DividerSection;
