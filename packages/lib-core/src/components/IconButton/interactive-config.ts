import { InteractiveIconState } from "./interactive-types";

export const interactiveIconsMap: Record<string, InteractiveIconState> = {
  favorite: {
    isActive: false,
    activeColor: "#e91e63",
    inactiveColor: "#666666",
    activeBgColor: "#fce4ec",
    inactiveBgColor: "transparent",
    activeHoverColor: "#fce4ec",
    inactiveHoverColor: "rgba(233, 30, 99, 0.12)",
    activeFillColor: "#e91e63",
    inactiveFillColor: "transparent",
    activeTooltip: "Remove from favorites",
    inactiveTooltip: "Add to favorites",
  },
  bookmark: {
    isActive: false,
    activeColor: "#ffc107",
    inactiveColor: "#666666",
    activeBgColor: "#fff8e1",
    inactiveBgColor: "transparent",
    activeHoverColor: "#fff8e1",
    inactiveHoverColor: "rgba(255, 193, 7, 0.12)",
    activeFillColor: "#ffc107",
    inactiveFillColor: "transparent",
    activeTooltip: "Remove bookmark",
    inactiveTooltip: "Add bookmark",
  },
  star: {
    isActive: false,
    activeColor: "#ff9800",
    inactiveColor: "#666666",
    activeBgColor: "#fff3e0",
    inactiveBgColor: "transparent",
    activeHoverColor: "#fff3e0",
    inactiveHoverColor: "rgba(255, 152, 0, 0.12)",
    activeFillColor: "#ff9800",
    inactiveFillColor: "transparent",
    activeTooltip: "Remove star",
    inactiveTooltip: "Add star",
  },
  like: {
    isActive: false,
    activeColor: "#e91e63",
    inactiveColor: "#666666",
    activeBgColor: "#fce4ec",
    inactiveBgColor: "transparent",
    activeHoverColor: "#fce4ec",
    inactiveHoverColor: "rgba(233, 30, 99, 0.12)",
    activeFillColor: "#e91e63",
    inactiveFillColor: "transparent",
    activeTooltip: "Unlike",
    inactiveTooltip: "Like",
  },
  follow: {
    isActive: false,
    activeColor: "#2196f3",
    inactiveColor: "#666666",
    activeBgColor: "#e3f2fd",
    inactiveBgColor: "transparent",
    activeHoverColor: "#e3f2fd",
    inactiveHoverColor: "rgba(33, 150, 243, 0.12)",
    activeFillColor: "#2196f3",
    inactiveFillColor: "transparent",
    activeTooltip: "Unfollow",
    inactiveTooltip: "Follow",
  },
  share: {
    isActive: false,
    activeColor: "#4caf50",
    inactiveColor: "#666666",
    activeBgColor: "#e8f5e9",
    inactiveBgColor: "transparent",
    activeHoverColor: "#e8f5e9",
    inactiveHoverColor: "rgba(76, 175, 80, 0.12)",
    activeFillColor: "#4caf50",
    inactiveFillColor: "transparent",
    activeTooltip: "Shared",
    inactiveTooltip: "Share",
  },
  notification: {
    isActive: false,
    activeColor: "#9c27b0",
    inactiveColor: "#666666",
    activeBgColor: "#f3e5f5",
    inactiveBgColor: "transparent",
    activeHoverColor: "#f3e5f5",
    inactiveHoverColor: "rgba(156, 39, 176, 0.12)",
    activeFillColor: "#9c27b0",
    inactiveFillColor: "transparent",
    activeTooltip: "Notifications on",
    inactiveTooltip: "Turn on notifications",
  },
  pin: {
    isActive: false,
    activeColor: "#f44336",
    inactiveColor: "#666666",
    activeBgColor: "#ffebee",
    inactiveBgColor: "transparent",
    activeHoverColor: "#ffebee",
    inactiveHoverColor: "rgba(244, 67, 54, 0.12)",
    activeFillColor: "#f44336",
    inactiveFillColor: "transparent",
    activeTooltip: "Unpin",
    inactiveTooltip: "Pin",
  },
  archive: {
    isActive: false,
    activeColor: "#795548",
    inactiveColor: "#666666",
    activeBgColor: "#efebe9",
    inactiveBgColor: "transparent",
    activeHoverColor: "#efebe9",
    inactiveHoverColor: "rgba(121, 85, 72, 0.12)",
    activeFillColor: "#795548",
    inactiveFillColor: "transparent",
    activeTooltip: "Unarchive",
    inactiveTooltip: "Archive",
  },
  lock: {
    isActive: false,
    activeColor: "#607d8b",
    inactiveColor: "#666666",
    activeBgColor: "#eceff1",
    inactiveBgColor: "transparent",
    activeHoverColor: "#eceff1",
    inactiveHoverColor: "rgba(96, 125, 139, 0.12)",
    activeFillColor: "#607d8b",
    inactiveFillColor: "transparent",
    activeTooltip: "Unlock",
    inactiveTooltip: "Lock",
  },
  download: {
    isActive: false,
    activeColor: "#009688",
    inactiveColor: "#666666",
    activeBgColor: "#e0f2f1",
    inactiveBgColor: "transparent",
    activeHoverColor: "#e0f2f1",
    inactiveHoverColor: "rgba(0, 150, 136, 0.12)",
    activeFillColor: "#009688",
    inactiveFillColor: "transparent",
    activeTooltip: "Downloaded",
    inactiveTooltip: "Download",
  },
  visibility: {
    isActive: false,
    activeColor: "#3f51b5",
    inactiveColor: "#666666",
    activeBgColor: "#e8eaf6",
    inactiveBgColor: "transparent",
    activeHoverColor: "#e8eaf6",
    inactiveHoverColor: "rgba(63, 81, 181, 0.12)",
    activeFillColor: "#3f51b5",
    inactiveFillColor: "transparent",
    activeTooltip: "Hide",
    inactiveTooltip: "Show",
  },
  clock: {
    isActive: false,
    activeColor: "#673ab7",
    inactiveColor: "#666666",
    activeBgColor: "#ede7f6",
    inactiveBgColor: "transparent",
    activeHoverColor: "#ede7f6",
    inactiveHoverColor: "rgba(103, 58, 183, 0.12)",
    activeFillColor: "#673ab7",
    inactiveFillColor: "transparent",
    activeTooltip: "Remove from history",
    inactiveTooltip: "Add to history",
  },
  rate: {
    isActive: false,
    activeColor: "#ffd700",
    inactiveColor: "#666666",
    activeBgColor: "#fff8e1",
    inactiveBgColor: "transparent",
    activeHoverColor: "#fff8e1",
    inactiveHoverColor: "rgba(255, 215, 0, 0.12)",
    activeFillColor: "#ffd700",
    inactiveFillColor: "transparent",
    activeTooltip: "Rated",
    inactiveTooltip: "Rate",
  },
  thumbDown: {
    isActive: false,
    activeColor: "#f44336",
    inactiveColor: "#666666",
    activeBgColor: "#ffebee",
    inactiveBgColor: "transparent",
    activeHoverColor: "#ffebee",
    inactiveHoverColor: "rgba(244, 67, 54, 0.12)",
    activeFillColor: "#f44336",
    inactiveFillColor: "transparent",
    activeTooltip: "Remove dislike",
    inactiveTooltip: "Dislike",
  },
  flag: {
    isActive: false,
    activeColor: "#ff5722",
    inactiveColor: "#666666",
    activeBgColor: "#fbe9e7",
    inactiveBgColor: "transparent",
    activeHoverColor: "#fbe9e7",
    inactiveHoverColor: "rgba(255, 87, 34, 0.12)",
    activeFillColor: "#ff5722",
    inactiveFillColor: "transparent",
    activeTooltip: "Remove flag",
    inactiveTooltip: "Flag",
  },
  close: {
    isActive: false,
    activeColor: "#757575",
    inactiveColor: "#666666",
    activeBgColor: "#eeeeee",
    inactiveBgColor: "transparent",
    activeHoverColor: "#eeeeee",
    inactiveHoverColor: "rgba(117, 117, 117, 0.12)",
    activeFillColor: "#757575",
    inactiveFillColor: "transparent",
    activeTooltip: "Closed",
    inactiveTooltip: "Close",
  },
};