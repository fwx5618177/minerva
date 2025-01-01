import React, { useState, useCallback, useMemo } from "react";
import {
  FaHeart,
  FaStar,
  FaBookmark,
  FaThumbsUp,
  FaUserPlus,
  FaShare,
  FaBell,
  FaThumbtack,
  FaArchive,
  FaLock,
  FaDownload,
  FaEye,
  FaClock,
  FaThumbsDown,
  FaFlag,
  FaTimes as FaClose,
} from "react-icons/fa";
import { InteractiveIconProps } from "./interactive-types";
import { interactiveIconsMap } from "./interactive-config";
import IconButton from "./IconButton";

const iconMap = {
  favorite: FaHeart,
  star: FaStar,
  bookmark: FaBookmark,
  like: FaThumbsUp,
  follow: FaUserPlus,
  share: FaShare,
  notification: FaBell,
  pin: FaThumbtack,
  archive: FaArchive,
  lock: FaLock,
  download: FaDownload,
  visibility: FaEye,
  clock: FaClock,
  rate: FaStar,
  thumbDown: FaThumbsDown,
  flag: FaFlag,
  close: FaClose,
};

const InteractiveIconButton: React.FC<InteractiveIconProps> = ({
  type,
  onChange,
  initialState = false,
  className,
  size = "medium",
  shape = "circle",
  disabled = false,
}) => {
  const [isActive, setIsActive] = useState(initialState);
  const config = interactiveIconsMap[type];
  const Icon = iconMap[type];

  const handleClick = useCallback(() => {
    setIsActive((prevState) => {
      const newState = !prevState;
      onChange?.(newState);
      return newState;
    });
  }, [onChange]);

  const buttonProps = useMemo(
    () => ({
      color: isActive ? config.activeColor : config.inactiveColor,
      activeColor: config.activeColor,
      bgColor: isActive ? config.activeBgColor : config.inactiveBgColor,
      hoverColor: isActive
        ? config.activeHoverColor
        : config.inactiveHoverColor,
      fillColor: isActive ? config.activeFillColor : config.inactiveFillColor,
      tooltip: {
        content: isActive ? config.activeTooltip : config.inactiveTooltip,
      },
    }),
    [isActive, config],
  );

  return (
    <IconButton
      icon={<Icon />}
      active={isActive}
      onClick={handleClick}
      showTooltip
      className={className}
      size={size}
      shape={shape}
      disabled={disabled}
      {...buttonProps}
    />
  );
};

export default React.memo(InteractiveIconButton);
