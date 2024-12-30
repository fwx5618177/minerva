import React, { useState, useEffect } from "react";
import {
  FaHeart,
  FaStar,
  FaBookmark,
  FaThumbsUp,
  FaUserPlus,
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

  useEffect(() => {
    setIsActive(initialState);
  }, [initialState]);

  const handleClick = () => {
    const newState = !isActive;
    setIsActive(newState);
    onChange?.(newState);
  };

  return (
    <IconButton
      icon={<Icon />}
      active={isActive}
      onClick={handleClick}
      color={isActive ? config.activeColor : config.inactiveColor}
      activeColor={config.activeColor}
      bgColor={isActive ? config.activeBgColor : config.inactiveBgColor}
      hoverColor={
        isActive ? config.activeHoverColor : config.inactiveHoverColor
      }
      fillColor={isActive ? config.activeFillColor : config.inactiveFillColor}
      showTooltip
      tooltip={{
        content: isActive ? config.activeTooltip : config.inactiveTooltip,
      }}
      className={className}
      size={size}
      shape={shape}
      disabled={disabled}
    />
  );
};

export default InteractiveIconButton;
