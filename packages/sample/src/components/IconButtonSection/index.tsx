import React, { useState, useCallback } from "react";
import { IconButton, InteractiveIconButton } from "@minerva/lib-core";
import {
  FaHeart,
  FaStar,
  FaShare,
  FaBell,
  FaEdit,
  FaTrash,
  FaCog,
  FaSearch,
  FaPlus,
  FaCheck,
  FaTimes,
  FaEllipsisV,
  FaDownload,
} from "react-icons/fa";
import styles from "./index.module.scss";

const IconButtonSection: React.FC = () => {
  const [isActive, setIsActive] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleActiveToggle = useCallback(() => {
    setIsActive((prev) => !prev);
  }, []);

  const handleLoadingToggle = useCallback(() => {
    setIsLoading((prev) => !prev);
  }, []);

  const handleFavoriteChange = useCallback((active: boolean) => {
    console.log("Favorite state:", active);
  }, []);

  const handleBookmarkChange = useCallback((active: boolean) => {
    console.log("Bookmark state:", active);
  }, []);

  const handleStarChange = useCallback((active: boolean) => {
    console.log("Star state:", active);
  }, []);

  const handleLikeChange = useCallback((active: boolean) => {
    console.log("Like state:", active);
  }, []);

  const handleFollowChange = useCallback((active: boolean) => {
    console.log("Follow state:", active);
  }, []);

  const handleShareChange = useCallback((active: boolean) => {
    console.log("Share state:", active);
  }, []);

  const handleNotificationChange = useCallback((active: boolean) => {
    console.log("Notification state:", active);
  }, []);

  const handlePinChange = useCallback((active: boolean) => {
    console.log("Pin state:", active);
  }, []);

  const handleArchiveChange = useCallback((active: boolean) => {
    console.log("Archive state:", active);
  }, []);

  const handleLockChange = useCallback((active: boolean) => {
    console.log("Lock state:", active);
  }, []);

  const handleDownloadChange = useCallback((active: boolean) => {
    console.log("Download state:", active);
  }, []);

  const handleVisibilityChange = useCallback((active: boolean) => {
    console.log("Visibility state:", active);
  }, []);

  const handleClockChange = useCallback((active: boolean) => {
    console.log("Clock state:", active);
  }, []);

  const handleRateChange = useCallback((active: boolean) => {
    console.log("Rate state:", active);
  }, []);

  const handleThumbDownChange = useCallback((active: boolean) => {
    console.log("Thumb down state:", active);
  }, []);

  const handleFlagChange = useCallback((active: boolean) => {
    console.log("Flag state:", active);
  }, []);

  return (
    <div className={styles.section}>
      <h3>Variants</h3>
      <div className={styles.group}>
        <IconButton
          icon={<FaHeart />}
          variant="primary"
          showTooltip
          tooltip={{
            content: "Dark variant",
            variant: "dark",
          }}
        />
        <IconButton
          icon={<FaStar />}
          variant="secondary"
          showTooltip
          tooltip={{
            content: "Info variant",
            variant: "info",
          }}
        />
        <IconButton
          icon={<FaCheck />}
          variant="success"
          showTooltip
          tooltip={{
            content: "Success variant",
            variant: "success",
          }}
        />
        <IconButton
          icon={<FaBell />}
          variant="warning"
          showTooltip
          tooltip={{
            content: "Warning variant",
            variant: "warning",
          }}
        />
        <IconButton
          icon={<FaTimes />}
          variant="error"
          showTooltip
          tooltip={{
            content: "Error variant",
            variant: "error",
          }}
        />
      </div>

      <h3>Sizes</h3>
      <div className={styles.group}>
        <IconButton
          icon={<FaCog />}
          size="small"
          showTooltip
          tooltip={{
            content: "Small size (36px)",
            arrow: true,
          }}
        />
        <IconButton
          icon={<FaCog />}
          size="medium"
          showTooltip
          tooltip={{
            content: "Medium size (44px)",
            arrow: true,
          }}
        />
        <IconButton
          icon={<FaCog />}
          size="large"
          showTooltip
          tooltip={{
            content: "Large size (52px)",
            arrow: true,
          }}
        />
      </div>

      <h3>Shapes</h3>
      <div className={styles.group}>
        <IconButton
          icon={<FaShare />}
          shape="circle"
          showTooltip
          tooltip={{
            content: "Circle shape",
            shape: "rounded",
          }}
        />
        <IconButton
          icon={<FaShare />}
          shape="square"
          showTooltip
          tooltip={{
            content: "Square shape",
            shape: "square",
          }}
        />
      </div>

      <h3>States</h3>
      <div className={styles.group}>
        <IconButton
          icon={<FaEdit />}
          active={isActive}
          onClick={handleActiveToggle}
          showTooltip
          tooltip={{
            content: isActive ? "Active state" : "Click to activate",
          }}
        />
        <IconButton
          icon={<FaEdit />}
          disabled
          showTooltip
          tooltip={{
            content: "Disabled state",
          }}
        />
        <IconButton
          icon={<FaEdit />}
          loading={isLoading}
          onClick={handleLoadingToggle}
          showTooltip
          tooltip={{
            content: isLoading ? "Loading..." : "Click to load",
          }}
        />
      </div>

      <h3>Custom Colors</h3>
      <div className={styles.group}>
        <IconButton
          icon={<FaHeart />}
          color="#e91e63"
          activeColor="#c2185b"
          bgColor="#fce4ec"
          hoverColor="#f8bbd0"
          fillColor="#e91e63"
          showTooltip
          tooltip={{
            content: "Custom colors",
          }}
        />
      </div>

      <h3>Accessibility</h3>
      <div className={styles.group}>
        <IconButton
          icon={<FaSearch />}
          ariaLabel="Search button"
          tabIndex={0}
          showTooltip
          tooltip={{
            content: "With aria-label and tabIndex",
          }}
        />
        <IconButton
          icon={<FaDownload />}
          ariaLabel="Download file"
          tabIndex={1}
          showTooltip
          tooltip={{
            content: "Press Enter to download",
          }}
        />
      </div>

      <h3>Common Use Cases</h3>
      <div className={styles.group}>
        <IconButton
          icon={<FaPlus />}
          variant="primary"
          showTooltip
          tooltip={{
            content: "Add new item",
            arrow: true,
            shape: "thought",
          }}
        />
        <IconButton
          icon={<FaTrash />}
          variant="error"
          showTooltip
          tooltip={{
            content: "Delete item",
            arrow: true,
            shape: "thought",
          }}
        />
        <IconButton
          icon={<FaEllipsisV />}
          showTooltip
          tooltip={{
            content: "More actions",
            arrow: true,
            shape: "thought",
          }}
        />
      </div>

      <h3>Interactive Icons</h3>
      <div className={styles.group}>
        <InteractiveIconButton
          type="favorite"
          onChange={handleFavoriteChange}
        />
        <InteractiveIconButton
          type="bookmark"
          onChange={handleBookmarkChange}
        />
        <InteractiveIconButton type="star" onChange={handleStarChange} />
        <InteractiveIconButton type="like" onChange={handleLikeChange} />
        <InteractiveIconButton type="follow" onChange={handleFollowChange} />
        <InteractiveIconButton type="share" onChange={handleShareChange} />
        <InteractiveIconButton
          type="notification"
          onChange={handleNotificationChange}
        />
        <InteractiveIconButton type="pin" onChange={handlePinChange} />
        <InteractiveIconButton type="archive" onChange={handleArchiveChange} />
        <InteractiveIconButton type="lock" onChange={handleLockChange} />
        <InteractiveIconButton
          type="download"
          onChange={handleDownloadChange}
        />
        <InteractiveIconButton
          type="visibility"
          onChange={handleVisibilityChange}
        />
        <InteractiveIconButton type="clock" onChange={handleClockChange} />
        <InteractiveIconButton type="close" onChange={handleClockChange} />
        <InteractiveIconButton type="rate" onChange={handleRateChange} />
        <InteractiveIconButton
          type="thumbDown"
          onChange={handleThumbDownChange}
        />
        <InteractiveIconButton type="flag" onChange={handleFlagChange} />
      </div>

      <h3>Fill Color Variations</h3>
      <div className={styles.group}>
        <IconButton
          icon={<FaHeart />}
          variant="primary"
          fillColor="#1976d2"
          showTooltip
          tooltip={{
            content: "Primary fill",
          }}
        />
        <IconButton
          icon={<FaHeart />}
          variant="success"
          fillColor="#4caf50"
          showTooltip
          tooltip={{
            content: "Success fill",
          }}
        />
        <IconButton
          icon={<FaHeart />}
          variant="error"
          fillColor="#d32f2f"
          showTooltip
          tooltip={{
            content: "Error fill",
          }}
        />
        <IconButton
          icon={<FaHeart />}
          variant="warning"
          fillColor="#ff9800"
          showTooltip
          tooltip={{
            content: "Warning fill",
          }}
        />
      </div>

      <h3>Custom Active States</h3>
      <div className={styles.group}>
        <IconButton
          icon={<FaHeart />}
          color="#e91e63"
          activeColor="#c2185b"
          bgColor="#fce4ec"
          hoverColor="#f8bbd0"
          fillColor="#e91e63"
          active
          showTooltip
          tooltip={{
            content: "Custom active state",
          }}
        />
        <IconButton
          icon={<FaHeart />}
          color="#2196f3"
          activeColor="#1565c0"
          bgColor="#e3f2fd"
          hoverColor="#bbdefb"
          fillColor="#2196f3"
          active
          showTooltip
          tooltip={{
            content: "Custom active state",
          }}
        />
        <IconButton
          icon={<FaHeart />}
          color="#4caf50"
          activeColor="#2e7d32"
          bgColor="#e8f5e9"
          hoverColor="#c8e6c9"
          fillColor="#4caf50"
          active
          showTooltip
          tooltip={{
            content: "Custom active state",
          }}
        />
      </div>
    </div>
  );
};

export default IconButtonSection;
