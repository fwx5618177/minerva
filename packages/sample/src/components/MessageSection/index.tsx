import React from "react";
import { message, useMessage, Button, Space } from "@minerva/lib-core";
import {
  IoInformationCircle,
  IoCheckmarkCircle,
  IoWarning,
  IoClose,
  IoSync,
  IoArrowUp,
  IoArrowDown,
  IoArrowForward,
  IoGift,
  IoColorPalette,
  IoImages,
  IoSparkles,
  IoThumbsUp,
  IoHeart,
  IoRocket,
  IoStar,
  IoMail,
} from "react-icons/io5";
import styles from "./section.module.scss";

const MessageSection: React.FC = () => {
  const messageHook = useMessage();

  // 基础消息示例
  const showBasicMessage = () => {
    message.info({
      content: "This is a basic message",
      icon: <IoInformationCircle />,
    });
  };

  // 单独的消息类型示例
  const showSuccessMessage = () => {
    message.success({
      content: "Operation completed successfully",
      icon: <IoCheckmarkCircle />,
      showClose: true,
    });
  };

  const showErrorMessage = () => {
    message.error({
      content: "An error occurred",
      icon: <IoClose />,
      duration: 4000,
    });
  };

  const showWarningMessage = () => {
    message.warning({
      content: "Warning: Please check your input",
      icon: <IoWarning />,
      showClose: true,
    });
  };

  const showLoadingMessage = () => {
    message.loading({
      content: "Processing your request...",
      duration: 2000,
    });
  };

  // 位置示例 - 分开展示
  const showTopMessage = () => {
    message.info({
      content: "Message at top",
      placement: "top",
      icon: <IoArrowUp />,
    });
  };

  const showTopLeftMessage = () => {
    message.info({
      content: "Message at top-left",
      placement: "topLeft",
      icon: <IoArrowUp />,
    });
  };

  const showTopRightMessage = () => {
    message.info({
      content: "Message at top-right",
      placement: "topRight",
      icon: <IoArrowUp />,
    });
  };

  const showBottomMessage = () => {
    message.info({
      content: "Message at bottom",
      placement: "bottom",
      icon: <IoArrowDown />,
    });
  };

  const showBottomLeftMessage = () => {
    message.info({
      content: "Message at bottom-left",
      placement: "bottomLeft",
      icon: <IoArrowDown />,
    });
  };

  const showBottomRightMessage = () => {
    message.info({
      content: "Message at bottom-right",
      placement: "bottomRight",
      icon: <IoArrowDown />,
    });
  };

  // Hook 使用示例
  const showHookMessage = () => {
    messageHook.info({
      content: "Message from useMessage hook",
      icon: <IoInformationCircle />,
      showClose: true,
    });
  };

  // Hook 链式调用示例
  const showHookChain = () => {
    messageHook
      .loading({
        content: "Processing...",
        duration: 1500,
      })
      .then(() => {
        return messageHook.success({
          content: "Operation completed!",
          icon: <IoCheckmarkCircle />,
          duration: 2000,
        });
      });
  };

  // 更新消息示例
  const showUpdatingMessage = () => {
    const key = messageHook.info({
      content: "Initial message...",
      duration: 0,
      icon: <IoSync />,
    });

    setTimeout(() => {
      messageHook.update(key, {
        content: "Updated message content!",
        type: "success",
        icon: <IoCheckmarkCircle />,
        duration: 2000,
      });
    }, 1500);
  };

  // 添加新的示例
  const showCustomDurationMessage = () => {
    message.info({
      content: "This message will stay for 10 seconds",
      duration: 10000,
      showClose: true,
    });
  };

  const showCustomIconMessage = () => {
    message.success({
      content: "Custom icon message",
      icon: <IoGift className={styles.customIcon} />,
    });
  };

  const showNoIconMessage = () => {
    message.info({
      content: "Message without icon",
      icon: null,
    });
  };

  const showMultipleMessages = () => {
    ["info", "success", "warning", "error"].forEach((type, index) => {
      setTimeout(() => {
        message[type as MessageType]({
          content: `This is message ${index + 1}`,
          duration: 3000,
        });
      }, index * 300);
    });
  };

  const showComplexContentMessage = () => {
    message.info({
      content: (
        <div className={styles.complexContent}>
          <h4>Complex Message Title</h4>
          <p>This is a message with complex content.</p>
          <Button size="small" type="primary">
            Take Action
          </Button>
        </div>
      ),
      duration: 0,
      showClose: true,
    });
  };

  const showProgressMessage = () => {
    let progress = 0;
    const key = message.loading({
      content: `Processing: ${progress}%`,
      duration: 0,
    });

    const interval = setInterval(() => {
      progress += 10;
      if (progress <= 100) {
        message.update(key, {
          content: `Processing: ${progress}%`,
          type: progress === 100 ? "success" : "loading",
          duration: progress === 100 ? 1000 : 0,
        });
      } else {
        clearInterval(interval);
      }
    }, 1000);
  };

  const showInteractiveMessage = () => {
    const key = message.info({
      content: (
        <div className={styles.interactive}>
          <p>Do you want to proceed?</p>
          <Space>
            <Button
              size="small"
              type="primary"
              onClick={() => {
                message.success({
                  content: "Action confirmed!",
                  duration: 2000,
                });
                message.destroy(key);
              }}
            >
              Yes
            </Button>
            <Button size="small" onClick={() => message.destroy(key)}>
              No
            </Button>
          </Space>
        </div>
      ),
      duration: 0,
    });
  };

  const showSequentialMessages = () => {
    messageHook
      .loading({ content: "Step 1: Initializing...", duration: 1500 })
      .then(() =>
        messageHook.loading({
          content: "Step 2: Processing...",
          duration: 1500,
        }),
      )
      .then(() =>
        messageHook.loading({
          content: "Step 3: Finalizing...",
          duration: 1500,
        }),
      )
      .then(() => messageHook.success({ content: "All steps completed!" }));
  };

  // 自定义样式消息
  const showCustomStyleMessage = () => {
    message.info({
      content: "Custom styled message",
      className: styles.customStyledMessage,
      style: {
        background: "linear-gradient(45deg, #ff6b6b, #ff8e8e)",
        color: "#fff",
        border: "none",
      },
      icon: <IoColorPalette />,
    });
  };

  // 带图片的消息
  const showImageMessage = () => {
    message.info({
      content: (
        <div className={styles.imageMessage}>
          <img
            src="https://place-hold.it/40x40"
            alt="Preview"
            className={styles.messageImage}
          />
          <span>Image uploaded successfully!</span>
        </div>
      ),
      icon: <IoImages />,
    });
  };

  // 动画效果消息
  const showAnimatedMessage = () => {
    message.success({
      content: "Animated message",
      className: styles.animatedMessage,
      icon: <IoSparkles className={styles.sparkleIcon} />,
    });
  };

  // 带徽章的消息
  const showBadgeMessage = () => {
    message.info({
      content: (
        <div className={styles.badgeMessage}>
          <span className={styles.badge}>New</span>
          <span>Feature released!</span>
        </div>
      ),
      icon: <IoRocket />,
    });
  };

  // 带进度条的复杂消息
  const showComplexProgressMessage = () => {
    let progress = 0;
    const key = message.info({
      content: (
        <div className={styles.complexProgress}>
          <div className={styles.progressHeader}>
            <span>Uploading files...</span>
            <span>{progress}%</span>
          </div>
          <div className={styles.progressBar}>
            <div
              className={styles.progressFill}
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className={styles.fileInfo}>document.pdf (2.5MB)</div>
        </div>
      ),
      duration: 0,
    });

    const interval = setInterval(() => {
      progress += 20;
      if (progress <= 100) {
        message.update(key, {
          content: (
            <div className={styles.complexProgress}>
              <div className={styles.progressHeader}>
                <span>
                  {progress === 100 ? "Upload complete!" : "Uploading files..."}
                </span>
                <span>{progress}%</span>
              </div>
              <div className={styles.progressBar}>
                <div
                  className={styles.progressFill}
                  style={{ width: `${progress}%` }}
                />
              </div>
              <div className={styles.fileInfo}>document.pdf (2.5MB)</div>
            </div>
          ),
          type: progress === 100 ? "success" : "info",
          duration: progress === 100 ? 2000 : 0,
        });
      } else {
        clearInterval(interval);
      }
    }, 1000);
  };

  // 带评分的消息
  const showRatingMessage = () => {
    message.success({
      content: (
        <div className={styles.ratingMessage}>
          <span>Rate your experience</span>
          <div className={styles.stars}>
            {[1, 2, 3, 4, 5].map((star) => (
              <IoStar
                key={star}
                className={styles.star}
                onClick={() => {
                  message.success({
                    content: `Thank you for rating ${star} stars!`,
                    icon: <IoThumbsUp />,
                  });
                }}
              />
            ))}
          </div>
        </div>
      ),
      duration: 0,
      showClose: true,
    });
  };

  // 带动画图标的消息
  const showAnimatedIconMessage = () => {
    message.success({
      content: "Awesome job!",
      icon: <IoHeart className={styles.pulsingIcon} />,
      className: styles.iconAnimatedMessage,
    });
  };

  // 添加新的示例
  const showColorfulMessage = () => {
    message.info({
      content: "Colorful message with gradient",
      className: styles.gradientMessage,
      style: {
        background: "linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)",
        border: "none",
        color: "#1a365d",
      },
      icon: <IoColorPalette />,
    });
  };

  const showNotificationStyleMessage = () => {
    message.info({
      content: (
        <div className={styles.notificationStyle}>
          <h4>New Message</h4>
          <p>John Doe sent you a message</p>
          <div className={styles.time}>Just now</div>
        </div>
      ),
      icon: <IoMail className={styles.mailIcon} />,
      duration: 0,
      showClose: true,
    });
  };

  const showCountdownMessage = () => {
    let countdown = 5;
    const key = message.info({
      content: (
        <div className={styles.countdown}>
          <span>This message will close in {countdown}s</span>
          <div className={styles.countdownRing}>
            <svg viewBox="0 0 36 36">
              <path
                d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeDasharray={`${countdown * 20}, 100`}
              />
            </svg>
          </div>
        </div>
      ),
      duration: 0,
    });

    const timer = setInterval(() => {
      countdown--;
      if (countdown >= 0) {
        message.update(key, {
          content: (
            <div className={styles.countdown}>
              <span>This message will close in {countdown}s</span>
              <div className={styles.countdownRing}>
                <svg viewBox="0 0 36 36">
                  <path
                    d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeDasharray={`${countdown * 20}, 100`}
                  />
                </svg>
              </div>
            </div>
          ),
        });
      } else {
        clearInterval(timer);
        message.destroy(key);
      }
    }, 1000);
  };

  const showChainedLoadingMessage = () => {
    let progress = 0;
    const steps = [
      { text: "Connecting to server...", duration: 1500 },
      { text: "Fetching data...", duration: 2000 },
      { text: "Processing response...", duration: 1500 },
      { text: "Finalizing...", duration: 1000 },
    ];

    const showNextStep = (index = 0) => {
      if (index >= steps.length) {
        message.success({
          content: "Operation completed successfully!",
          duration: 2000,
        });
        return;
      }

      const step = steps[index];
      const key = message.loading({
        content: (
          <div className={styles.loadingStep}>
            <div className={styles.stepInfo}>
              <span>{step.text}</span>
              <span className={styles.stepProgress}>
                {Math.round(((index + 1) / steps.length) * 100)}%
              </span>
            </div>
            <div className={styles.stepProgressBar}>
              <div
                className={styles.stepProgressFill}
                style={{ width: `${((index + 1) / steps.length) * 100}%` }}
              />
            </div>
          </div>
        ),
        duration: step.duration,
      });

      setTimeout(() => {
        message.destroy(key);
        showNextStep(index + 1);
      }, step.duration);
    };

    showNextStep();
  };

  return (
    <div className={styles.section}>
      <h2>Message Component</h2>

      <div className={styles.demo}>
        <h3>Message Types</h3>
        <p>Different types of messages for various scenarios</p>
        <Space wrap>
          <Button onClick={showBasicMessage}>Basic Info</Button>
          <Button onClick={showSuccessMessage} type="primary">
            Success
          </Button>
          <Button onClick={showErrorMessage} danger>
            Error
          </Button>
          <Button onClick={showWarningMessage}>Warning</Button>
          <Button onClick={showLoadingMessage}>Loading</Button>
        </Space>
      </div>

      <div className={styles.demo}>
        <h3>Message Positions</h3>
        <p>Control where messages appear on the screen</p>
        <div className={styles.positionGrid}>
          <Space direction="vertical">
            <h4>Top Positions</h4>
            <Space>
              <Button onClick={showTopLeftMessage}>Top Left</Button>
              <Button onClick={showTopMessage}>Top Center</Button>
              <Button onClick={showTopRightMessage}>Top Right</Button>
            </Space>
          </Space>
          <Space direction="vertical">
            <h4>Bottom Positions</h4>
            <Space>
              <Button onClick={showBottomLeftMessage}>Bottom Left</Button>
              <Button onClick={showBottomMessage}>Bottom Center</Button>
              <Button onClick={showBottomRightMessage}>Bottom Right</Button>
            </Space>
          </Space>
        </div>
      </div>

      <div className={styles.demo}>
        <h3>Hook Usage</h3>
        <p>Advanced usage with useMessage hook</p>
        <Space>
          <Button onClick={showHookMessage}>
            <IoInformationCircle className={styles.buttonIcon} />
            Basic Hook
          </Button>
          <Button onClick={showHookChain}>
            <IoArrowForward className={styles.buttonIcon} />
            Chain Calls
          </Button>
          <Button onClick={showUpdatingMessage}>
            <IoSync className={styles.buttonIcon} />
            Update Message
          </Button>
        </Space>
      </div>

      <div className={styles.demo}>
        <h3>Advanced Features</h3>
        <p>Explore more complex message scenarios</p>
        <Space wrap>
          <Button onClick={showCustomDurationMessage}>Custom Duration</Button>
          <Button onClick={showCustomIconMessage}>Custom Icon</Button>
          <Button onClick={showNoIconMessage}>No Icon</Button>
          <Button onClick={showMultipleMessages}>Multiple Messages</Button>
        </Space>
      </div>

      <div className={styles.demo}>
        <h3>Interactive Messages</h3>
        <p>Messages with rich content and interactions</p>
        <Space wrap>
          <Button onClick={showComplexContentMessage}>Complex Content</Button>
          <Button onClick={showProgressMessage}>Progress Indicator</Button>
          <Button onClick={showInteractiveMessage}>Interactive Message</Button>
          <Button onClick={showSequentialMessages}>Sequential Messages</Button>
        </Space>
      </div>

      <div className={styles.demo}>
        <h3>Styled Messages</h3>
        <p>Messages with custom styles and animations</p>
        <Space wrap>
          <Button onClick={showCustomStyleMessage}>Custom Style</Button>
          <Button onClick={showImageMessage}>With Image</Button>
          <Button onClick={showAnimatedMessage}>Animated</Button>
          <Button onClick={showBadgeMessage}>With Badge</Button>
          <Button onClick={showAnimatedIconMessage}>Animated Icon</Button>
        </Space>
      </div>

      <div className={styles.demo}>
        <h3>Complex Messages</h3>
        <p>Messages with rich content and interactions</p>
        <Space wrap>
          <Button onClick={showComplexProgressMessage}>File Upload</Button>
          <Button onClick={showRatingMessage}>Rating Message</Button>
        </Space>
      </div>

      <div className={styles.demo}>
        <h3>Enhanced Messages</h3>
        <p>Advanced message variations with special effects</p>
        <Space wrap>
          <Button onClick={showColorfulMessage}>Gradient Style</Button>
          <Button onClick={showNotificationStyleMessage}>
            Notification Style
          </Button>
          <Button onClick={showCountdownMessage}>Countdown</Button>
          <Button onClick={showChainedLoadingMessage}>Chained Loading</Button>
        </Space>
      </div>
    </div>
  );
};

export default MessageSection;
