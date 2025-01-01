import React from "react";
import { Badge } from "@minerva/lib-core";
import { FaBell, FaEnvelope, FaUser } from "react-icons/fa";
import styles from "./index.module.scss";

const BadgeSection: React.FC = () => {
  return (
    <div className={styles.section}>
      <h3>Badge Variants</h3>
      <div className={styles.group}>
        <Badge content="5" variant="primary">
          <FaBell size={24} />
        </Badge>
        <Badge content="New" variant="secondary">
          <FaEnvelope size={24} />
        </Badge>
        <Badge content="99+" variant="success">
          <FaUser size={24} />
        </Badge>
        <Badge content="!" variant="warning">
          <FaBell size={24} />
        </Badge>
        <Badge content="Error" variant="error">
          <FaBell size={24} />
        </Badge>
      </div>

      <h3>Badge Positions</h3>
      <div className={styles.group}>
        <Badge content="1" position="top-right">
          <FaBell size={24} />
        </Badge>
        <Badge content="2" position="top-left">
          <FaBell size={24} />
        </Badge>
        <Badge content="3" position="bottom-right">
          <FaBell size={24} />
        </Badge>
        <Badge content="4" position="bottom-left">
          <FaBell size={24} />
        </Badge>
      </div>

      <h3>Badge Sizes</h3>
      <div className={styles.group}>
        <Badge content="S" size="small">
          <FaBell size={24} />
        </Badge>
        <Badge content="M" size="medium">
          <FaBell size={24} />
        </Badge>
        <Badge content="L" size="large">
          <FaBell size={24} />
        </Badge>
      </div>

      <h3>Custom Styles</h3>
      <div className={styles.group}>
        <Badge
          content="1"
          bgColor="#6200ee"
          textColor="#ffffff"
          borderRadius="12px"
        >
          <FaBell size={24} />
        </Badge>

        <Badge
          content="2"
          bgColor="#ff9800"
          textColor="#ffffff"
          borderWidth="2px"
          borderColor="#f57c00"
        >
          <FaBell size={24} />
        </Badge>
      </div>

      <h3>Dot Badges</h3>
      <div className={styles.group}>
        <Badge dot variant="primary">
          <FaBell size={24} />
        </Badge>
        <Badge dot variant="success">
          <FaBell size={24} />
        </Badge>
        <Badge dot variant="warning">
          <FaBell size={24} />
        </Badge>
        <Badge dot variant="error">
          <FaBell size={24} />
        </Badge>
      </div>

      <h3>Badge</h3>
      <div className={styles.group}>
        <Badge>Badge</Badge>
        <Badge variant="primary">
          <div>1231</div>
        </Badge>
        <Badge variant="secondary">q2</Badge>
        <Badge variant="success">Badge</Badge>
        <Badge variant="danger">Badge</Badge>
        <Badge variant="warning">Badge</Badge>
        <Badge variant="info">Badge</Badge>
        <Badge variant="light">Badge</Badge>
        <Badge variant="dark">Badge</Badge>
      </div>
      <div className={styles.group}>
        <Badge size="small">Badge</Badge>
        <Badge size="medium">Badge</Badge>
        <Badge size="large">Badge</Badge>
      </div>

      <h3>Status Badge</h3>
      <div className={styles.buttonGroup}>
        <Badge variant="success">Active</Badge>
        <Badge variant="danger">Error</Badge>
        <Badge variant="warning">Warning</Badge>
        <Badge variant="info">Info</Badge>
      </div>

      <h3>Custom Color</h3>
      <div className={styles.group}>
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
  );
};

export default BadgeSection;
