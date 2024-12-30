import React, { useState } from "react";
import { IconButton } from "@minerva/lib-core";
import {
  FaHeart,
  FaStar,
  FaShare,
  FaBookmark,
  FaBell,
  FaEdit,
  FaTrash,
  FaCog,
  FaSearch,
  FaPlus,
  FaMinus,
  FaCheck,
  FaTimes,
  FaEllipsisV,
  FaDownload,
  FaInfo,
} from "react-icons/fa";
import styles from "./index.module.scss";

const IconButtonSection: React.FC = () => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div className={styles.section}>
      <h3>Basic Icon Buttons</h3>
      <div className={styles.group}>
        <IconButton icon={<FaHeart />} tooltip="Like" />
        <IconButton icon={<FaStar />} tooltip="Star" />
        <IconButton icon={<FaShare />} tooltip="Share" />
        <IconButton icon={<FaBookmark />} tooltip="Bookmark" />
      </div>

      <h3>Variants</h3>
      <div className={styles.group}>
        <IconButton icon={<FaHeart />} variant="primary" tooltip="Primary" />
        <IconButton icon={<FaStar />} variant="secondary" tooltip="Secondary" />
        <IconButton icon={<FaCheck />} variant="success" tooltip="Success" />
        <IconButton icon={<FaBell />} variant="warning" tooltip="Warning" />
        <IconButton icon={<FaTimes />} variant="error" tooltip="Error" />
        <IconButton icon={<FaInfo />} variant="info" tooltip="Info" />
      </div>

      <h3>Sizes</h3>
      <div className={styles.group}>
        <IconButton icon={<FaHeart />} size="small" tooltip="Small" />
        <IconButton icon={<FaHeart />} size="medium" tooltip="Medium" />
        <IconButton icon={<FaHeart />} size="large" tooltip="Large" />
      </div>

      <h3>Shapes</h3>
      <div className={styles.group}>
        <IconButton icon={<FaCog />} shape="circle" tooltip="Circle" />
        <IconButton icon={<FaCog />} shape="square" tooltip="Square" />
        <IconButton icon={<FaCog />} shape="rounded" tooltip="Rounded" />
      </div>

      <h3>States</h3>
      <div className={styles.group}>
        <IconButton icon={<FaEdit />} tooltip="Normal" />
        <IconButton icon={<FaEdit />} disabled tooltip="Disabled" />
        <IconButton icon={<FaEdit />} loading tooltip="Loading" />
      </div>

      <h3>Custom Colors</h3>
      <div className={styles.group}>
        <IconButton
          icon={<FaHeart />}
          color="#e91e63"
          bgColor="#fce4ec"
          hoverColor="#f8bbd0"
          tooltip="Custom Pink"
        />
        <IconButton
          icon={<FaStar />}
          color="#ffd700"
          bgColor="#fff9c4"
          hoverColor="#fff59d"
          tooltip="Custom Gold"
        />
        <IconButton
          icon={<FaBookmark />}
          color="#4caf50"
          bgColor="#e8f5e9"
          hoverColor="#c8e6c9"
          tooltip="Custom Green"
        />
      </div>

      <h3>Tooltip Placements</h3>
      <div className={styles.group}>
        <IconButton icon={<FaInfo />} tooltip="Top" tooltipPlacement="top" />
        <IconButton
          icon={<FaInfo />}
          tooltip="Bottom"
          tooltipPlacement="bottom"
        />
        <IconButton icon={<FaInfo />} tooltip="Left" tooltipPlacement="left" />
        <IconButton
          icon={<FaInfo />}
          tooltip="Right"
          tooltipPlacement="right"
        />
      </div>

      <h3>Common Use Cases</h3>
      <div className={styles.group}>
        <IconButton icon={<FaSearch />} tooltip="Search" />
        <IconButton icon={<FaPlus />} tooltip="Add" />
        <IconButton icon={<FaMinus />} tooltip="Remove" />
        <IconButton icon={<FaEdit />} tooltip="Edit" />
        <IconButton icon={<FaTrash />} tooltip="Delete" />
        <IconButton icon={<FaEllipsisV />} tooltip="More" />
        <IconButton icon={<FaDownload />} tooltip="Download" />
      </div>

      <h3>With Ripple Effect</h3>
      <div className={styles.group}>
        <IconButton icon={<FaHeart />} ripple tooltip="With Ripple" />
        <IconButton
          icon={<FaHeart />}
          ripple={false}
          tooltip="Without Ripple"
        />
      </div>

      <h3>Interactive States</h3>
      <div className={styles.group}>
        <IconButton
          icon={<FaHeart />}
          color={isLiked ? "#ff4081" : undefined}
          fillColor={isLiked ? "#ff4081" : undefined}
          onClick={() => setIsLiked(!isLiked)}
          showTooltip
          tooltipProps={{
            content: isLiked ? "Unlike" : "Like",
            shape: "cloud",
          }}
        />

        <IconButton
          icon={<FaStar />}
          color={isFavorite ? "#ffd700" : undefined}
          fillColor={isFavorite ? "#ffd700" : undefined}
          onClick={() => setIsFavorite(!isFavorite)}
          showTooltip
          tooltipProps={{
            content: isFavorite ? "Unfavorite" : "Favorite",
            shape: "thought",
          }}
        />
      </div>

      <h3>Tooltip Shapes</h3>
      <div className={styles.group}>
        <IconButton
          icon={<FaInfo />}
          showTooltip
          tooltipProps={{
            content: "Cloud shape tooltip",
            shape: "cloud",
          }}
        />
        <IconButton
          icon={<FaInfo />}
          showTooltip
          tooltipProps={{
            content: "Thought shape tooltip",
            shape: "thought",
          }}
        />
      </div>
    </div>
  );
};

export default IconButtonSection;
