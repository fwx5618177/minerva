import React from "react";
import { StatusIndicator } from "@minerva/lib-core";
import styles from "./index.module.scss";

const StatusIndicatorSection: React.FC = () => {
  return (
    <div className={styles.section}>
      <h3>Status Types</h3>
      <div className={styles.group}>
        <StatusIndicator type="online" showLabel />
        <StatusIndicator type="offline" showLabel />
        <StatusIndicator type="away" showLabel />
        <StatusIndicator type="busy" showLabel />
      </div>

      <h3>Status Sizes</h3>
      <div className={styles.group}>
        <StatusIndicator type="online" size="small" />
        <StatusIndicator type="online" size="medium" />
        <StatusIndicator type="online" size="large" />
      </div>

      <h3>Status Shapes</h3>
      <div className={styles.group}>
        <StatusIndicator type="online" showLabel />
        <StatusIndicator type="offline" showLabel />
        <StatusIndicator type="away" showLabel />
        <StatusIndicator type="busy" showLabel />
        <StatusIndicator status="success" shape="circle" />
        <StatusIndicator status="success" shape="square" />
        <StatusIndicator status="success" shape="rounded" />
      </div>

      <h3>Custom Colors</h3>
      <div className={styles.group}>
        <StatusIndicator type="custom" color="#9c27b0" />
        <StatusIndicator type="custom" color="#ff9800" />
        <StatusIndicator type="custom" color="#2196f3" />
      </div>

      <h3>Disabled Status</h3>
      <div className={styles.group}>
        <StatusIndicator type="online" animated />
        <StatusIndicator type="offline" animated />
        <StatusIndicator type="away" animated />
        <StatusIndicator type="busy" animated />
      </div>

      <h3>Status Button</h3>
      <div className={styles.group}>
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
        <StatusIndicator type="online" disabled />
        <StatusIndicator status="success" disabled />
        <StatusIndicator type="custom" color="#9c27b0" disabled />
      </div>
    </div>
  );
};

export default StatusIndicatorSection;
