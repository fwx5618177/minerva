import React from "react";
import { RouteObject } from "react-router-dom";
import {
  IoHomeOutline,
  IoRocketOutline,
  IoBookOutline,
  IoColorPaletteOutline,
  IoTextOutline,
  IoRadioButtonOnOutline,
  IoToggleOutline,
  IoPersonCircleOutline,
  IoShieldOutline,
  IoCardOutline,
  IoAppsOutline,
  IoRemoveOutline,
  IoAlertCircleOutline,
  IoChatboxOutline,
  IoTimeOutline,
  IoShapesOutline,
  IoMenuOutline,
  IoCheckboxOutline,
  IoSearchOutline,
  IoEllipseOutline,
  IoListOutline,
  IoInfiniteOutline,
  IoInformationCircleOutline,
  IoArrowUpOutline,
  IoGitNetworkOutline,
  IoBookmarkOutline,
} from "react-icons/io5";

// Getting Started Pages
import OverviewPage from "@pages/getting-started/OverviewPage";
import InstallationPage from "@pages/getting-started/InstallationPage";
import IntroductionPage from "@pages/getting-started/IntroductionPage";
import ThemingPage from "@pages/getting-started/ThemingPage";

// Component Pages
import ButtonPage from "@pages/ButtonPage";
import TextFieldPage from "@pages/TextFieldPage";
import RadioPage from "@pages/RadioPage";
import SwitchPage from "@pages/SwitchPage";
import AvatarPage from "@pages/AvatarPage";
import BadgePage from "@pages/BadgePage";
import CardPage from "@pages/CardPage";
import ChipPage from "@pages/ChipPage";
import DividerPage from "@pages/DividerPage";
import AlertPage from "@pages/AlertPage";
import MessagePage from "@pages/MessagePage";
import ProgressPage from "@pages/ProgressPage";
import SkeletonPage from "@pages/SkeletonPage";
import DropdownPage from "@pages/DropdownPage";
import CheckboxPage from "@/pages/CheckboxPage";
import IconButtonPage from "@pages/IconButtonPage";
import TooltipPage from "@pages/TooltipPage";
import PopperPage from "@pages/PopperPage";
import SearchButtonPage from "@pages/SearchButtonPage";
import StatusIndicatorPage from "@pages/StatusIndicatorPage";
import TimerPickerPage from "@pages/TimePickerPage";
import VirtualListPage from "@pages/VirtualListPage";
import AutoCompletePage from "@pages/AutoCompletePage";
import EmptyPage from "@pages/EmptyPage";
import CascaderPage from "@pages/CascaderPage";
import SpacePage from "@pages/SpacePage";
import TagPage from "@pages/TagPage";

export const routes: RouteObject[] = [
  // Getting Started Routes
  {
    path: "overview",
    element: <OverviewPage />,
  },
  {
    path: "installation",
    element: <InstallationPage />,
  },
  {
    path: "introduction",
    element: <IntroductionPage />,
  },
  {
    path: "theming",
    element: <ThemingPage />,
  },

  // Component Routes
  {
    path: "button",
    element: <ButtonPage />,
  },
  {
    path: "textfield",
    element: <TextFieldPage />,
  },
  {
    path: "checkbox",
    element: <CheckboxPage />,
  },
  {
    path: "radio",
    element: <RadioPage />,
  },
  {
    path: "switch",
    element: <SwitchPage />,
  },
  {
    path: "avatar",
    element: <AvatarPage />,
  },
  {
    path: "badge",
    element: <BadgePage />,
  },
  {
    path: "card",
    element: <CardPage />,
  },
  {
    path: "chip",
    element: <ChipPage />,
  },
  {
    path: "divider",
    element: <DividerPage />,
  },
  {
    path: "alert",
    element: <AlertPage />,
  },
  {
    path: "message",
    element: <MessagePage />,
  },
  {
    path: "progress",
    element: <ProgressPage />,
  },
  {
    path: "skeleton",
    element: <SkeletonPage />,
  },
  {
    path: "dropdown",
    element: <DropdownPage />,
  },
  {
    path: "icon-button",
    element: <IconButtonPage />,
  },
  {
    path: "tooltip",
    element: <TooltipPage />,
  },
  {
    path: "popper",
    element: <PopperPage />,
  },
  {
    path: "search-button",
    element: <SearchButtonPage />,
  },
  {
    path: "status-indicator",
    element: <StatusIndicatorPage />,
  },
  {
    path: "time-picker",
    element: <TimerPickerPage />,
  },
  {
    path: "virtual-list",
    element: <VirtualListPage />,
  },
  {
    path: "auto-complete",
    element: <AutoCompletePage />,
  },
  {
    path: "empty",
    element: <EmptyPage />,
  },
  {
    path: "cascader",
    element: <CascaderPage />,
  },
  {
    path: "space",
    element: <SpacePage />,
  },
  {
    path: "tag",
    element: <TagPage />,
  },
];

// 扁平化路由配置
export const flattenedRoutes = routes.map((route) => ({
  path: route.path,
  element: route.element,
}));

export const menuConfig = {
  gettingStarted: [
    {
      path: "/overview",
      icon: <IoHomeOutline />,
      translationKey: "components.overview.title",
    },
    {
      path: "/installation",
      icon: <IoRocketOutline />,
      translationKey: "components.installation.title",
    },
    {
      path: "/introduction",
      icon: <IoBookOutline />,
      translationKey: "components.introduction.title",
    },
    {
      path: "/theming",
      icon: <IoColorPaletteOutline />,
      translationKey: "components.theming.title",
    },
  ],
  inputs: [
    {
      path: "/button",
      icon: <IoRocketOutline />,
      translationKey: "components.button.title",
    },
    {
      path: "/textfield",
      icon: <IoTextOutline />,
      translationKey: "components.textfield.title",
    },
    {
      path: "/checkbox",
      icon: <IoCheckboxOutline />,
      translationKey: "components.checkbox.title",
    },
    {
      path: "/radio",
      icon: <IoRadioButtonOnOutline />,
      translationKey: "components.radio.title",
    },
    {
      path: "/switch",
      icon: <IoToggleOutline />,
      translationKey: "components.switch.title",
    },
    {
      path: "/icon-button",
      icon: <IoRocketOutline />,
      translationKey: "components.iconButton.title",
    },
    {
      path: "/search-button",
      icon: <IoSearchOutline />,
      translationKey: "components.searchButton.title",
    },
  ],
  dataDisplay: [
    {
      path: "/avatar",
      icon: <IoPersonCircleOutline />,
      translationKey: "components.avatar.title",
    },
    {
      path: "/badge",
      icon: <IoShieldOutline />,
      translationKey: "components.badge.title",
    },
    {
      path: "/card",
      icon: <IoCardOutline />,
      translationKey: "components.card.title",
    },
    {
      path: "/chip",
      icon: <IoAppsOutline />,
      translationKey: "components.chip.title",
    },
    {
      path: "/divider",
      icon: <IoRemoveOutline />,
      translationKey: "components.divider.title",
    },
    {
      path: "/status-indicator",
      icon: <IoEllipseOutline />,
      translationKey: "components.statusIndicator.title",
    },
    {
      path: "/virtual-list",
      icon: <IoListOutline />,
      translationKey: "components.virtualList.title",
    },
    {
      path: "/empty",
      icon: <IoInfiniteOutline />,
      translationKey: "components.empty.title",
    },
    {
      path: "/space",
      icon: <IoAppsOutline />,
      translationKey: "components.space.title",
    },
    {
      path: "/tag",
      icon: <IoBookmarkOutline />,
      translationKey: "components.tag.title",
    },
  ],
  feedback: [
    {
      path: "/alert",
      icon: <IoAlertCircleOutline />,
      translationKey: "components.alert.title",
    },
    {
      path: "/message",
      icon: <IoChatboxOutline />,
      translationKey: "components.message.title",
    },
    {
      path: "/progress",
      icon: <IoTimeOutline />,
      translationKey: "components.progress.title",
    },
    {
      path: "/skeleton",
      icon: <IoShapesOutline />,
      translationKey: "components.skeleton.title",
    },
    {
      path: "/tooltip",
      icon: <IoInformationCircleOutline />,
      translationKey: "components.tooltip.title",
    },
    {
      path: "/popper",
      icon: <IoArrowUpOutline />,
      translationKey: "components.popper.title",
    },
  ],
  navigation: [
    {
      path: "/dropdown",
      icon: <IoMenuOutline />,
      translationKey: "components.dropdown.title",
    },
    {
      path: "/cascader",
      icon: <IoGitNetworkOutline />,
      translationKey: "components.cascader.title",
    },
    {
      path: "/auto-complete",
      icon: <IoSearchOutline />,
      translationKey: "components.autoComplete.title",
    },
  ],
};
