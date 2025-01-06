import React, { useState } from "react";
import { Skeleton, Button } from "@minerva/lib-core";
import styles from "./section.module.scss";

const SkeletonSection: React.FC = () => {
  const [loading, setLoading] = useState(true);

  const toggleLoading = () => {
    setLoading(!loading);
  };

  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <h2>Skeleton 骨架屏</h2>
        <p>在需要等待加载内容的位置提供一个占位图形组合。</p>
      </div>

      <div className={styles.demoBlock}>
        <h3>基础用法</h3>
        <p className={styles.description}>最简单的占位效果。</p>
        <div className={styles.group}>
          <div className={styles.basicDemo}>
            <Skeleton />
            <Skeleton width="75%" />
            <Skeleton width="50%" />
          </div>
        </div>
      </div>

      <div className={styles.demoBlock}>
        <h3>复杂文本</h3>
        <p className={styles.description}>带标题和段落的文本组合。</p>
        <div className={styles.group}>
          <div className={styles.textDemo}>
            <Skeleton title paragraph loading={loading}>
              <div>
                <h4>这是一段标题文本</h4>
                <p>这是一段很长的描述文本，用来测试骨架屏的显示效果。</p>
                <p>这是第二段描述文本，可以包含更多的内容。</p>
              </div>
            </Skeleton>
          </div>
        </div>
      </div>

      <div className={styles.demoBlock}>
        <h3>不同变体</h3>
        <p className={styles.description}>展示不同类型的骨架屏。</p>
        <div className={styles.group}>
          <div className={styles.variantsDemo}>
            <div className={styles.variantItem}>
              <h4>Text 文本</h4>
              <Skeleton variant="text" width={200} />
            </div>
            <div className={styles.variantItem}>
              <h4>Button 按钮</h4>
              <Skeleton variant="button" width={120} />
            </div>
            <div className={styles.variantItem}>
              <h4>Circular 圆形</h4>
              <Skeleton variant="circular" width={60} height={60} />
            </div>
            <div className={styles.variantItem}>
              <h4>Image 图片</h4>
              <Skeleton variant="image" width={200} height={150} />
            </div>
            <div className={styles.variantItem}>
              <h4>Rectangular 矩形</h4>
              <Skeleton variant="rectangular" width={200} height={100} />
            </div>
            <div className={styles.variantItem}>
              <h4>Rounded 圆角</h4>
              <Skeleton variant="rounded" width={200} height={100} />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.demoBlock}>
        <h3>动画效果</h3>
        <p className={styles.description}>不同的动画效果展示。</p>
        <div className={styles.group}>
          <div className={styles.animationsDemo}>
            <div className={styles.animationItem}>
              <h4>Pulse 脉冲</h4>
              <Skeleton animation="pulse" title paragraph />
            </div>
            <div className={styles.animationItem}>
              <h4>Wave 波浪</h4>
              <Skeleton animation="wave" title paragraph />
            </div>
            <div className={styles.animationItem}>
              <h4>No Animation 无动画</h4>
              <Skeleton animation="false" title paragraph />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.demoBlock}>
        <h3>媒体组件</h3>
        <p className={styles.description}>常见的媒体组件骨架屏。</p>
        <div className={styles.group}>
          <div className={styles.mediaDemo}>
            <div className={styles.mediaCard}>
              <Skeleton variant="image" height={200} />
              <div className={styles.mediaContent}>
                <Skeleton variant="text" width="80%" />
                <Skeleton variant="text" width="60%" />
              </div>
            </div>
            <div className={styles.mediaCard}>
              <Skeleton variant="rectangular" height={200} />
              <div className={styles.mediaContent}>
                <Skeleton variant="text" width="70%" />
                <Skeleton variant="text" width="50%" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.demoBlock}>
        <h3>列表加载</h3>
        <p className={styles.description}>在列表中使用骨架屏。</p>
        <div className={styles.group}>
          <div className={styles.listDemo}>
            {Array(3)
              .fill(null)
              .map((_, index) => (
                <div key={index} className={styles.listItem}>
                  <Skeleton
                    avatar
                    avatarSize={48}
                    title
                    paragraph
                    active
                    loading={loading}
                  >
                    <div className={styles.listContent}>
                      <img src="https://via.placeholder.com/48" alt="avatar" />
                      <div>
                        <h4>列表项标题</h4>
                        <p>这是一段很长的描述文本，用来测试列表项的显示效果</p>
                      </div>
                    </div>
                  </Skeleton>
                </div>
              ))}
          </div>
          <div className={styles.buttonWrapper}>
            <Button onClick={toggleLoading}>
              {loading ? "显示内容" : "显示骨架屏"}
            </Button>
          </div>
        </div>
      </div>

      <div className={styles.demoBlock}>
        <h3>自定义样式</h3>
        <p className={styles.description}>使用自定义样式的骨架屏。</p>
        <div className={styles.group}>
          <div className={styles.customStylesDemo}>
            <div className={styles.customItem}>
              <Skeleton
                variant="circular"
                width={100}
                height={100}
                style={{ backgroundColor: "#e3f2fd" }}
              />
            </div>
            <div className={styles.customItem}>
              <Skeleton
                variant="rectangular"
                width={200}
                height={100}
                style={{
                  backgroundColor: "#bbdefb",
                  borderRadius: "16px",
                }}
              />
            </div>
            <div className={styles.customItem}>
              <div className={styles.gradientSkeleton}>
                <Skeleton
                  variant="text"
                  width={240}
                  style={{
                    background:
                      "linear-gradient(90deg, #f3e5f5 0%, #e1bee7 50%, #f3e5f5 100%)",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonSection;
