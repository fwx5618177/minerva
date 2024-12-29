import React from "react";

import { Avatar, AvatarGroup } from "@minerva/lib-core";
import styles from "./index.module.scss";

const AvatarSection = () => {
  return (
    <div className={styles.section}>
      <h3>Avatar Size</h3>
      <div className={styles.group}>
        <Avatar name="Alice" shape="circle" size="small" />
        <Avatar name="Bob" shape="circle" size="medium" />
        <Avatar name="Charlie" shape="circle" size="large" />

        <Avatar name="Bob" shape="square" size="small" />
        <Avatar name="Bob" shape="square" size="medium" />
        <Avatar name="Charlie" shape="square" size="large" />
        <Avatar name="Charlie" shape="rounded" size="small" />
        <Avatar name="Charlie" shape="rounded" size="medium" />
        <Avatar name="Charlie" shape="rounded" size="large" />
      </div>
      <h3>Avatar Group</h3>
      <div className={styles.group}>
        <AvatarGroup count={3}>
          <Avatar name="Alice" />
          <Avatar name="Bob" />
          <Avatar name="Charlie" />
        </AvatarGroup>
      </div>
      <h3>Avatar Stacked</h3>
      <div className={styles.group}>
        <AvatarGroup count={3}>
          <Avatar name="Alice" />
          <Avatar name="Bob" stacked />
          <Avatar name="Charlie" stacked />
        </AvatarGroup>
      </div>
      <h3>Avatar with Image</h3>
      <div className={styles.group}>
        <Avatar
          src="https://randomuser.me/api/portraits/men/1.jpg"
          name="John"
          size="large"
        />
        <Avatar name="Jane Doe" />
        <Avatar
          name="Jane Doe"
          src="https://randomuser.me/api/portraits/women/1.jpg"
          stacked
        />
        <Avatar
          name="John Doe"
          src="https://randomuser.me/api/portraits/men/2.jpg"
        />
      </div>
    </div>
  );
};

export default AvatarSection;
