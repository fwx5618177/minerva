import React from "react";
import { createRoot } from "react-dom/client";
import type {
  MessageProps,
  MessageType,
  MessagePlacement,
  MessageInstance,
} from "./types";
import Message from "./Message";
import styles from "./message.module.scss";

// 为每个位置维护独立的消息队列
const messageQueues: Record<MessagePlacement, MessageInstance[]> = {
  top: [],
  topLeft: [],
  topRight: [],
  bottom: [],
  bottomLeft: [],
  bottomRight: [],
};

let messageKey = 0;

// 获取或创建位置容器
const getPlacementContainer = (placement: MessagePlacement) => {
  const containerId = `message-container-${placement}`;
  let container = document.getElementById(containerId);

  if (!container) {
    container = document.createElement("div");
    container.id = containerId;
    container.className = `${styles.messageContainer} ${styles[placement]}`;

    // 预设容器位置，避免二次移动
    if (placement.includes("top")) {
      container.style.top = "20px";
    } else {
      container.style.bottom = "20px";
    }

    if (placement.includes("Left")) {
      container.style.left = "24px";
    } else if (placement.includes("Right")) {
      container.style.right = "24px";
    } else {
      container.style.left = "50%";
      container.style.transform = "translateX(-50%)";
      // 固定宽度以避免抖动
      container.style.width = "384px";
    }

    document.body.appendChild(container);
  }

  return container;
};

const removeMessage = (id: string, placement: MessagePlacement) => {
  const queue = messageQueues[placement];
  const index = queue.findIndex((instance) => instance.id === id);

  if (index > -1) {
    const instance = queue[index];
    instance.root.unmount();
    queue.splice(index, 1);

    // 如果队列为空，移除容器
    if (queue.length === 0) {
      const container = document.getElementById(
        `message-container-${placement}`,
      );
      if (container) {
        document.body.removeChild(container);
      }
    }
  }
};

const addMessage = (props: MessageProps) => {
  const id = props.id || `message-${messageKey++}`;
  const placement = props.placement || "topRight";
  const container = getPlacementContainer(placement);

  // 创建消息元素
  const messageElement = document.createElement("div");
  messageElement.className = styles.messageWrapper;
  container.appendChild(messageElement);

  const root = createRoot(messageElement);

  const messageProps = {
    ...props,
    id,
    placement,
    duration: props.duration ?? 3000,
    onClose: (msgId: string) => {
      props.onClose?.(msgId);
      removeMessage(msgId, placement);
    },
  };

  // 添加到对应位置的队列
  messageQueues[placement].push({ id, props: messageProps, root });

  // 渲染消息
  root.render(<Message {...messageProps} />);

  return id;
};

const createMessageMethod =
  (type: MessageType) => (content: React.ReactNode | MessageProps) => {
    const props =
      typeof content === "object" && !React.isValidElement(content)
        ? { ...content, type }
        : { content, type };
    return addMessage(props as MessageProps);
  };

export const message = {
  success: createMessageMethod("success"),
  error: createMessageMethod("error"),
  info: createMessageMethod("info"),
  warning: createMessageMethod("warning"),
  loading: createMessageMethod("loading"),
  destroy: (id?: string) => {
    if (id) {
      // 在所有位置查找并移除指定消息
      Object.entries(messageQueues).forEach(([placement, queue]) => {
        const instance = queue.find((msg) => msg.id === id);
        if (instance) {
          removeMessage(id, placement as MessagePlacement);
        }
      });
    } else {
      // 移除所有消息
      Object.entries(messageQueues).forEach(([placement, queue]) => {
        queue.forEach((instance) => {
          instance.root.unmount();
        });
        const container = document.getElementById(
          `message-container-${placement}`,
        );
        if (container) {
          document.body.removeChild(container);
        }
      });
      Object.keys(messageQueues).forEach((placement) => {
        messageQueues[placement as MessagePlacement] = [];
      });
    }
  },
  update: (id: string, props: Partial<MessageProps>) => {
    // 在所有位置查找并更新指定消息
    Object.entries(messageQueues).forEach(([placement, queue]) => {
      const instance = queue.find((msg) => msg.id === id);
      if (instance) {
        const updatedProps = {
          ...instance.props,
          ...props,
          onClose: (msgId: string) => {
            props.onClose?.(msgId);
            removeMessage(msgId, placement as MessagePlacement);
          },
        };
        instance.props = updatedProps;
        instance.root.render(<Message {...updatedProps} />);
      }
    });
  },
};

export default message;
