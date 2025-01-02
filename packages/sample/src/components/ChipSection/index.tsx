import React, { useState } from "react";
import { Chip, Avatar } from "@minerva/lib-core";
import { FaUser, FaStar, FaHeart, FaTimes } from "react-icons/fa";
import styles from "./index.module.scss";

const ChipSection: React.FC = () => {
  const [chips, setChips] = useState(["Chip 1", "Chip 2", "Chip 3"]);

  const handleDelete = (chipToDelete: string) => {
    setChips((chips) => chips.filter((chip) => chip !== chipToDelete));
  };

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    console.log("Chip clicked", e);
  };

  return (
    <div className={styles.section}>
      <h3>Chip Variants</h3>
      <div className={styles.group}>
        <Chip
          label="Clickable Chip"
          variant="filled"
          clickable
          onClick={handleClick}
        />
        <Chip label="Loading Chip" variant="filled" loading />
        <Chip label="Filled Chip" variant="filled" />
        <Chip label="Outlined Chip" variant="outlined" />
        <Chip label="Soft Chip" variant="soft" />
      </div>

      <h3>Chip Colors</h3>
      <div className={styles.group}>
        <Chip label="Default" />
        <Chip label="Primary" color="primary" />
        <Chip label="Secondary" color="secondary" />
        <Chip label="Success" color="success" />
        <Chip label="Error" color="error" />
        <Chip label="Warning" color="warning" />
        <Chip label="Info" color="info" />
      </div>

      <h3>Chip Sizes</h3>
      <div className={styles.group}>
        <Chip label="Small" size="small" />
        <Chip label="Medium" size="medium" />
        <Chip label="Large" size="large" />
      </div>

      <h3>Chips with Icons</h3>
      <div className={styles.group}>
        <Chip label="User" icon={<FaUser />} />
        <Chip label="Favorite" icon={<FaHeart />} color="error" />
        <Chip label="Star" icon={<FaStar />} color="warning" />
      </div>

      <h3>Chips with Avatar</h3>
      <div className={styles.group}>
        <Chip
          label="John Doe"
          avatar={<Avatar src="https://i.pravatar.cc/300?img=1" size="small" />}
        />
        <Chip
          label="Jane Smith"
          avatar={<Avatar src="https://i.pravatar.cc/300?img=2" size="small" />}
          color="primary"
        />
      </div>

      <h3>Deletable Chips</h3>
      <div className={styles.group}>
        {chips.map((chip) => (
          <Chip
            key={chip}
            label={chip}
            onDelete={() => handleDelete(chip)}
            color="primary"
          />
        ))}
      </div>

      <h3>Clickable Chips</h3>
      <div className={styles.group}>
        <Chip
          label="Clickable"
          clickable
          onClick={() => console.log("Clicked!")}
        />
        <Chip
          label="Clickable Primary"
          clickable
          color="primary"
          onClick={() => console.log("Clicked!")}
        />
      </div>

      <h3>Disabled Chips</h3>
      <div className={styles.group}>
        <Chip label="Disabled" disabled />
        <Chip label="Disabled Primary" color="primary" disabled />
        <Chip
          label="Disabled with Delete"
          onDelete={() => {}}
          color="error"
          disabled
        />
      </div>

      <h3>Loading Chips</h3>
      <div className={styles.group}>
        <Chip label="Loading" loading />
        <Chip label="Loading Primary" color="primary" loading />
      </div>

      <h3>Selected Chips</h3>
      <div className={styles.group}>
        <Chip label="Selected" selected />
        <Chip label="Selected Primary" color="primary" selected />
      </div>

      <h3>Custom Delete Icon</h3>
      <div className={styles.group}>
        <Chip
          label="Custom Delete"
          onDelete={() => {}}
          deleteIcon={<FaTimes color="red" />}
        />
      </div>
    </div>
  );
};

export default ChipSection;
