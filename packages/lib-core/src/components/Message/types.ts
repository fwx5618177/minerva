import { CSSProperties, ReactNode } from "react";
import { createRoot } from "react-dom/client";

export type MessageType = "success" | "error" | "info" | "warning" | "loading";
export type MessagePlacement =
  | "top"
  | "bottom"
  | "topLeft"
  | "topRight"
  | "bottomLeft"
  | "bottomRight";

export interface MessageInstance {
  id: string;
  props: MessageProps;
  root: ReturnType<typeof createRoot>;
}

export interface MessageProps {
  /** 消息唯一标识 */
  id: string;
  /** 消息类型 */
  type?: MessageType;
  /** 消息内容 */
  content: ReactNode;
  /** 自动关闭的延时，单位毫秒。设为 0 时不自动关闭 */
  duration?: number;
  /** 是否显示关闭按钮 */
  showClose?: boolean;
  /** 自定义图标 */
  icon?: ReactNode;
  /** 自定义类名 */
  className?: string;
  /** 自定义样式 */
  style?: CSSProperties;
  /** 关闭时的回调函数 */
  onClose?: (id: string) => void;
  /** 是否显示进度条 */
  showProgress?: boolean;
  /** 鼠标悬停时是否暂停自动关闭和进度条 */
  pauseOnHover?: boolean;
  /** 消息出现的位置 */
  placement?: MessagePlacement;
  /** 点击消息时的回调 */
  onClick?: (e: React.MouseEvent) => void;
  /** 消息的描述信息，用于无障碍 */
  description?: string;
  /** 自定义关闭按钮的文本，用于无障碍 */
  closeAriaLabel?: string;
  /** 更新消息时的回调 */
  onUpdate?: (id: string, props: MessageProps) => void;
  /** 消息的最大宽度 */
  maxWidth?: number | string;
  /** 消息的层级 */
  zIndex?: number;
}

export interface MessageContainerProps {
  placement?: MessagePlacement;
  maxCount?: number;
  duration?: number;
  getContainer?: () => HTMLElement;
  prefixCls?: string;
  className?: string;
  style?: CSSProperties;
}
export type MessageContainerType = React.FC<Record<string, never>> & {
  success: (content: React.ReactNode | MessageProps) => string;
  error: (content: React.ReactNode | MessageProps) => string;
  info: (content: React.ReactNode | MessageProps) => string;
  warning: (content: React.ReactNode | MessageProps) => string;
  loading: (content: React.ReactNode | MessageProps) => string;
  update: (id: string, props: Partial<MessageProps>) => void;
  destroy: () => void;
};
