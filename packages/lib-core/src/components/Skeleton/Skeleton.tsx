import React from "react";
import classNames from "classnames";
import type { SkeletonProps } from "./types";
import styles from "./skeleton.module.scss";

/**
 * @name Skeleton 骨架屏
 * @description 在需要等待加载内容的位置提供一个占位图形组合
 * @param SkeletonVariant variant - 组件类型 可选值：text、avatar、card、button、image、rectangular、rounded
 * @param SkeletonAnimation animation - 动画类型 可选值：pulse、wave、false
 * @param number | string width - 宽度
 * @param number | string height - 高度
 * @param string className - 自定义类名
 * @param React.ReactNode children - 子元素
 * @param boolean loading - 是否加载中
 * @param number | string borderRadius - 圆角大小
 * @param React.CSSProperties style - 自定义样式
 * @param number lines - 行数
 * @param boolean avatar - 是否显示头像
 * @param number | string avatarSize - 头像大小
 * @param string avatarShape - 头像形状 可选值：circle、square
 * @param boolean active - 是否激活交互态
 * @param boolean paragraph - 是否显示段落
 * @param boolean title - 是否显示标题
 */
const Skeleton: React.FC<SkeletonProps> = ({
  variant = "text",
  animation = "pulse",
  width,
  height,
  className,
  children,
  loading = true,
  borderRadius,
  style,
  lines = 1,
  avatar = false,
  avatarSize = 40,
  avatarShape = "circle",
  active = false,
  paragraph = false,
  title = false,
}) => {
  if (!loading) {
    return <>{children}</>;
  }

  const renderLines = () => {
    if (paragraph || title) return null;

    return Array(lines)
      .fill(null)
      .map((_, index) => (
        <div
          key={index}
          className={classNames(
            styles.skeleton,
            styles[variant],
            styles[`animation-${animation}`],
          )}
          style={{
            width: typeof width === "number" ? `${width}px` : width,
            height: typeof height === "number" ? `${height}px` : height,
            borderRadius,
            ...style,
          }}
        />
      ));
  };

  const renderAvatar = () => {
    if (!avatar) return null;

    return (
      <div
        className={classNames(
          styles.skeleton,
          styles.avatar,
          styles[`animation-${animation}`],
          styles[`avatar-${avatarShape}`],
        )}
        style={{
          width:
            typeof avatarSize === "number" ? `${avatarSize}px` : avatarSize,
          height:
            typeof avatarSize === "number" ? `${avatarSize}px` : avatarSize,
        }}
      />
    );
  };

  const renderParagraph = () => {
    if (!paragraph) return null;

    const paragraphLines = [
      { width: "100%", height: "16px" },
      { width: "100%", height: "16px" },
      { width: "92%", height: "16px" },
      { width: "60%", height: "16px" },
    ];

    return (
      <div className={styles.paragraph}>
        {paragraphLines.map((line, index) => (
          <div
            key={`p-${index}`}
            className={classNames(
              styles.skeleton,
              styles[`animation-${animation}`],
            )}
            style={{
              width: line.width,
              height: line.height,
            }}
          />
        ))}
      </div>
    );
  };

  const renderTitle = () => {
    if (!title) return null;

    return (
      <div
        className={classNames(
          styles.skeleton,
          styles.title,
          styles[`animation-${animation}`],
        )}
      />
    );
  };

  const renderContent = () => {
    if (variant === "card") {
      return (
        <div className={classNames(styles.card, { [styles.active]: active })}>
          {renderAvatar()}
          <div className={styles.cardContent}>
            {renderTitle()}
            {renderParagraph()}
          </div>
        </div>
      );
    }

    return (
      <>
        {renderAvatar()}
        <div className={styles.content}>
          {renderTitle()}
          {renderLines()}
          {renderParagraph()}
        </div>
      </>
    );
  };

  return (
    <div
      className={classNames(
        styles.skeletonRoot,
        {
          [styles.withAvatar]: avatar,
        },
        className,
      )}
    >
      {renderContent()}
    </div>
  );
};

export default Skeleton;
