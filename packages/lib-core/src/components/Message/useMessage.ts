import { useCallback } from "react";
import { message } from "./MessageContainer";
import type { MessageProps, MessageType } from "./types";

interface MessagePromiseResult {
  then: (callback: () => void | Promise<void>) => MessagePromiseResult;
  catch: (callback: () => void) => MessagePromiseResult;
  messageId: string;
}

export const useMessage = () => {
  const showMessage = useCallback(
    (type: MessageType, props: MessageProps | string): MessagePromiseResult => {
      const config: MessageProps =
        typeof props === "string"
          ? { content: props, id: Date.now().toString() }
          : props;
      const messageId = message[type](config);
      const duration = config.duration ?? 3000;

      const createPromiseChain = (): MessagePromiseResult => {
        let currentPromise = Promise.resolve();
        return {
          then: (callback: () => void | Promise<void>) => {
            if (duration > 0) {
              currentPromise = currentPromise.then(
                () =>
                  new Promise((resolve) =>
                    setTimeout(() => {
                      Promise.resolve(callback()).then(resolve);
                    }, duration),
                  ),
              );
            }
            return createPromiseChain();
          },
          catch: (callback: () => void) => {
            currentPromise = currentPromise.catch(callback);
            return createPromiseChain();
          },
          messageId,
        };
      };

      return createPromiseChain();
    },
    [],
  );

  return {
    info: (props: MessageProps | string) => showMessage("info", props),
    success: (props: MessageProps | string) => showMessage("success", props),
    warning: (props: MessageProps | string) => showMessage("warning", props),
    error: (props: MessageProps | string) => showMessage("error", props),
    loading: (props: MessageProps | string) => showMessage("loading", props),
    destroy: message.destroy,
    update: message.update,
  };
};
