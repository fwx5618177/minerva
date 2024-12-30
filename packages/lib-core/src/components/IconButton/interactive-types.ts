export interface InteractiveIconState {
  isActive: boolean;
  activeColor: string;
  inactiveColor: string;
  activeBgColor: string;
  inactiveBgColor: string;
  activeHoverColor: string;
  inactiveHoverColor: string;
  activeFillColor: string;
  inactiveFillColor: string;
  activeTooltip: string;
  inactiveTooltip: string;
}

export interface InteractiveIconProps {
  type: InteractiveIconType;
  onChange?: (isActive: boolean) => void;
  initialState?: boolean;
  className?: string;
  size?: "small" | "medium" | "large";
  shape?: "circle" | "square";
  disabled?: boolean;
}

export type InteractiveIconType =
  | "favorite"
  | "bookmark"
  | "star"
  | "like"
  | "follow";
