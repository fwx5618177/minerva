import React, { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import type { MessageProps } from "./types";
import styles from "./message.module.scss";

const Message: React.FC<MessageProps> = ({
  id,
  type = "info",
  content,
  duration = 3000,
  showClose = false,
  icon,
  className = "",
  style,
  onClose,
  showProgress = true,
  pauseOnHover = true,
  placement = "topRight",
  onClick,
  description,
  closeAriaLabel = "Close",
}) => {
  const [progress, setProgress] = useState(100);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (duration > 0) {
      const startTime = Date.now();
      const timer = setInterval(() => {
        if (!isPaused) {
          const elapsed = Date.now() - startTime;
          const remaining = Math.max(0, 100 - (elapsed / duration) * 100);
          setProgress(remaining);

          if (remaining === 0) {
            clearInterval(timer);
            onClose?.(id);
          }
        }
      }, 10);

      return () => clearInterval(timer);
    }
  }, [duration, isPaused, id, onClose]);

  const handleClose = () => {
    onClose?.(id);
  };

  return (
    <div
      className={`${styles.message} ${styles[type]} ${className}`}
      style={{
        ...style,
        position: "fixed",
        ...getPositionStyle(placement),
      }}
      onClick={onClick}
      onMouseEnter={() => pauseOnHover && setIsPaused(true)}
      onMouseLeave={() => pauseOnHover && setIsPaused(false)}
      role="alert"
    >
      <div className={styles.content}>
        {icon && <span className={styles.icon}>{icon}</span>}
        <span>{content}</span>
      </div>
      {showClose && (
        <button
          className={styles.closeButton}
          onClick={handleClose}
          aria-label={closeAriaLabel}
        >
          <IoClose />
        </button>
      )}
      {showProgress && duration > 0 && (
        <div
          className={`${styles.progressBar} ${isPaused ? styles.paused : ""}`}
          style={{ width: `${progress}%` }}
        />
      )}
    </div>
  );
};

const getPositionStyle = (placement: MessageProps["placement"]) => {
  switch (placement) {
    case "top":
      return { top: "20px", left: "50%", transform: "translateX(-50%)" };
    case "topLeft":
      return { top: "20px", left: "20px" };
    case "topRight":
      return { top: "20px", right: "20px" };
    case "bottom":
      return { bottom: "20px", left: "50%", transform: "translateX(-50%)" };
    case "bottomLeft":
      return { bottom: "20px", left: "20px" };
    case "bottomRight":
      return { bottom: "20px", right: "20px" };
    default:
      return { top: "20px", right: "20px" };
  }
};

export default Message;
