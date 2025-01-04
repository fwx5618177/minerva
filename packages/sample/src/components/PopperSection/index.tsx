import React, { useState, useRef } from "react";
import {
  Popper,
  PopperPlacement,
  PopperVariant,
  PopperType,
  PopperSize,
  Button,
} from "@minerva/lib-core";
import styles from "./index.module.scss";

const PopperSection: React.FC = () => {
  const [activePopper, setActivePopper] = useState<string | null>(null);
  const buttonRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({});

  const handlePopperToggle = (id: string) => {
    setActivePopper((prev) => (prev === id ? null : id));
  };

  // 位置选项
  const placements: PopperPlacement[] = [
    "top",
    "topStart",
    "topEnd",
    "bottom",
    "bottomStart",
    "bottomEnd",
    "left",
    "leftStart",
    "leftEnd",
    "right",
    "rightStart",
    "rightEnd",
  ];

  // 样式变体
  const variants: PopperVariant[] = [
    "default", // 默认样式
    "primary", // 主要样式
    "secondary", // 次要样式
    "success", // 成功样式
    "warning", // 警告样式
    "error", // 错误样式
  ];

  // 类型选项
  const types: PopperType[] = [
    "default", // 默认弹出层
    "menu", // 菜单类型
    "select", // 选择器类型
    "tooltip", // 提示类型
  ];

  // 尺寸选项
  const sizes: PopperSize[] = [
    "small", // 小尺寸
    "medium", // 中等尺寸
    "large", // 大尺寸
  ];

  // 自定义样式展示组
  const customStyles = [
    {
      id: "width-height",
      title: "自定义尺寸",
      style: {
        width: 300,
        height: 300,
        padding: "16px",
      },
    },
    {
      id: "max-size",
      title: "max-size 设置尺寸",
      style: {
        width: 300,
        maxHeight: 400,
        overflow: "auto",
      },
    },
    {
      id: "min-size",
      title: "最小尺寸",
      style: {
        minWidth: 150,
        minHeight: 80,
      },
    },
  ];

  // 箭头样式展示组
  const arrowStyles = [
    {
      id: "default-arrow",
      title: "默认箭头",
      props: { arrow: true },
    },
    {
      id: "colored-arrow",
      title: "彩色箭头",
      props: {
        arrow: true,
        popperStyle: {
          backgroundColor: "#1890ff",
          color: "#fff",
        },
      },
    },
  ];

  // 动画配置展示组
  const animations = [
    {
      id: "quick-fade",
      title: "快速淡入",
      animation: { duration: 100, easing: "ease-out" },
    },
    {
      id: "slow-bounce",
      title: "缓慢弹出",
      animation: {
        duration: 800,
        easing: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
      },
    },
  ];

  // 位置偏移展示组
  const offsets = [
    {
      id: "offset-up",
      title: "向上偏移",
      offset: { x: 0, y: -20 },
    },
    {
      id: "offset-right",
      title: "向右偏移",
      offset: { x: 20, y: 0 },
    },
  ];

  // 尺寸展示的测试文本
  const longText =
    "这是一段很长的文本内容，用来测试不同尺寸下的文本展示效果。当文本内容超出容器宽度时，可以选择单行滚动或者多行折行显示。";

  return (
    <div className={styles.section}>
      {/* 基础用法 */}
      <h3>基础用法</h3>
      <div className={styles.group}>
        <div className={styles.demoContainer}>
          <Button
            ref={(el: HTMLButtonElement | null) =>
              (buttonRefs.current["basic"] = el)
            }
            onClick={() => handlePopperToggle("basic")}
          >
            基础 Popper
          </Button>
          <Popper
            visible={activePopper === "basic"}
            anchorEl={buttonRefs.current["basic"]}
            onClickAway={() => setActivePopper(null)}
          >
            <div className={styles.popperContent}>
              这是一个基础的 Popper 示例
            </div>
          </Popper>
        </div>
      </div>

      {/* 位置展示 */}
      <h3>位置展示</h3>
      <div className={styles.placementGrid}>
        {placements.map((placement) => (
          <div key={placement} className={styles.demoContainer}>
            <Button
              ref={(el: HTMLButtonElement | null) =>
                (buttonRefs.current[`placement-${placement}`] = el)
              }
              onClick={() => handlePopperToggle(`placement-${placement}`)}
            >
              {placement}
            </Button>
            <Popper
              visible={activePopper === `placement-${placement}`}
              anchorEl={buttonRefs.current[`placement-${placement}`]}
              placement={placement}
              arrow
              onClickAway={() => setActivePopper(null)}
            >
              <div className={styles.popperContent}>{placement} 位置</div>
            </Popper>
          </div>
        ))}
      </div>

      {/* 类型展示 */}
      <h3>类型展示</h3>
      <div className={styles.group}>
        {types.map((type) => (
          <div key={type} className={styles.demoContainer}>
            <Button
              ref={(el: HTMLButtonElement | null) =>
                (buttonRefs.current[`type-${type}`] = el)
              }
              onClick={() => handlePopperToggle(`type-${type}`)}
            >
              {type} 类型
            </Button>
            <Popper
              visible={activePopper === `type-${type}`}
              anchorEl={buttonRefs.current[`type-${type}`]}
              type={type}
              arrow
              onClickAway={() => setActivePopper(null)}
            >
              {type === "menu" && (
                <div className={styles.menuItems}>
                  <div className={styles.menuItem}>菜单项 1</div>
                  <div className={styles.menuItem}>菜单项 2</div>
                  <div className={styles.menuItem}>菜单项 3</div>
                </div>
              )}
              {type === "select" && (
                <div className={styles.selectItems}>
                  <div className={styles.selectItem}>选项 1</div>
                  <div className={styles.selectItem}>选项 2</div>
                  <div className={styles.selectItem}>选项 3</div>
                </div>
              )}
              {type === "tooltip" && <div>这是一个提示信息</div>}
              {type === "default" && <div>默认内容</div>}
            </Popper>
          </div>
        ))}
      </div>

      {/* 尺寸展示 */}
      <h3>尺寸展示</h3>
      <h4>单行模式（横向滚动）</h4>
      <div className={styles.group}>
        {sizes.map((size) => (
          <div key={`single-${size}`} className={styles.demoContainer}>
            <Button
              ref={(el: HTMLButtonElement | null) =>
                (buttonRefs.current[`size-single-${size}`] = el)
              }
              onClick={() => handlePopperToggle(`size-single-${size}`)}
            >
              {size} 尺寸（单行）
            </Button>
            <Popper
              visible={activePopper === `size-single-${size}`}
              anchorEl={buttonRefs.current[`size-single-${size}`]}
              size={size}
              arrow
              multiline={false}
              onClickAway={() => setActivePopper(null)}
            >
              <div className={styles.popperContent}>{longText}</div>
            </Popper>
          </div>
        ))}
      </div>

      <h4>多行模式（自动折行）</h4>
      <div className={styles.group}>
        {sizes.map((size) => (
          <div key={`multi-${size}`} className={styles.demoContainer}>
            <Button
              ref={(el: HTMLButtonElement | null) =>
                (buttonRefs.current[`size-multi-${size}`] = el)
              }
              onClick={() => handlePopperToggle(`size-multi-${size}`)}
            >
              {size} 尺寸（多行）
            </Button>
            <Popper
              visible={activePopper === `size-multi-${size}`}
              anchorEl={buttonRefs.current[`size-multi-${size}`]}
              size={size}
              arrow
              multiline
              onClickAway={() => setActivePopper(null)}
            >
              <div className={styles.popperContent}>{longText.repeat(20)}</div>
            </Popper>
          </div>
        ))}
      </div>

      {/* 样式变体 */}
      <h3>样式变体</h3>
      <div className={styles.group}>
        {variants.map((variant) => (
          <div key={variant} className={styles.demoContainer}>
            <Button
              ref={(el: HTMLButtonElement | null) =>
                (buttonRefs.current[`variant-${variant}`] = el)
              }
              onClick={() => handlePopperToggle(`variant-${variant}`)}
              variant={variant}
            >
              {variant} 样式
            </Button>
            <Popper
              visible={activePopper === `variant-${variant}`}
              anchorEl={buttonRefs.current[`variant-${variant}`]}
              variant={variant}
              arrow
              onClickAway={() => setActivePopper(null)}
            >
              <div className={styles.popperContent}>
                {variant} 样式的 Popper
              </div>
            </Popper>
          </div>
        ))}
      </div>

      {/* 动画效果 */}
      <h3>动画效果</h3>
      <div className={styles.group}>
        <div className={styles.demoContainer}>
          <Button
            ref={(el: HTMLButtonElement | null) =>
              (buttonRefs.current["animation-fast"] = el)
            }
            onClick={() => handlePopperToggle("animation-fast")}
          >
            快速动画
          </Button>
          <Popper
            visible={activePopper === "animation-fast"}
            anchorEl={buttonRefs.current["animation-fast"]}
            animation={{ duration: 5000, easing: "ease-out" }}
            arrow
            onClickAway={() => setActivePopper(null)}
          >
            <div>快速动画效果</div>
          </Popper>
        </div>

        <div className={styles.demoContainer}>
          <Button
            ref={(el: HTMLButtonElement | null) =>
              (buttonRefs.current["animation-slow"] = el)
            }
            onClick={() => handlePopperToggle("animation-slow")}
          >
            慢速动画
          </Button>
          <Popper
            visible={activePopper === "animation-slow"}
            anchorEl={buttonRefs.current["animation-slow"]}
            animation={{ duration: 5000, easing: "ease-in-out" }}
            arrow
            onClickAway={() => setActivePopper(null)}
          >
            <div>慢速动画效果</div>
          </Popper>
        </div>
      </div>

      {/* 边界情况 */}
      <h3>边界情况</h3>
      <div className={styles.edgeCases}>
        {/* 溢出容器 */}
        <h4>溢出容器</h4>
        <div className={styles.overflowContainer}>
          <div className={styles.demoContainer}>
            <Button
              ref={(el: HTMLButtonElement | null) =>
                (buttonRefs.current["overflow"] = el)
              }
              onClick={() => handlePopperToggle("overflow")}
            >
              溢出测试
            </Button>
            <Popper
              visible={activePopper === "overflow"}
              anchorEl={buttonRefs.current["overflow"]}
              arrow
              onClickAway={() => setActivePopper(null)}
            >
              <div>测试溢出行为</div>
            </Popper>
          </div>
        </div>

        {/* 滚动容器 */}
        <h4>滚动容器</h4>
        <div className={styles.scrollContainer}>
          <div className={styles.scrollContent}>
            <div className={styles.demoContainer}>
              <Button
                ref={(el: HTMLButtonElement | null) =>
                  (buttonRefs.current["scroll"] = el)
                }
                onClick={() => handlePopperToggle("scroll")}
              >
                滚动测试
              </Button>
              <Popper
                visible={activePopper === "scroll"}
                anchorEl={buttonRefs.current["scroll"]}
                arrow
                onClickAway={() => setActivePopper(null)}
              >
                <div>测试滚动行为</div>
              </Popper>
            </div>
          </div>
        </div>

        {/* 嵌套 Popper */}
        <h4>嵌套 Popper</h4>
        <div className={styles.demoContainer}>
          <Button
            ref={(el: HTMLButtonElement | null) =>
              (buttonRefs.current["nested-1"] = el)
            }
            onClick={() => handlePopperToggle("nested-1")}
          >
            嵌套 Popper
          </Button>
          <Popper
            visible={activePopper === "nested-1"}
            anchorEl={buttonRefs.current["nested-1"]}
            arrow
            onClickAway={() => setActivePopper(null)}
          >
            <div style={{ padding: "8px" }}>
              <div>这是第一层 Popper</div>
              <Button
                ref={(el: HTMLButtonElement | null) =>
                  (buttonRefs.current["nested-2"] = el)
                }
                onClick={() => handlePopperToggle("nested-2")}
                style={{ marginTop: 8 }}
              >
                打开嵌套层
              </Button>
              <Popper
                visible={activePopper === "nested-2"}
                anchorEl={buttonRefs.current["nested-2"]}
                arrow
                onClickAway={() => setActivePopper(null)}
              >
                <div>嵌套的 Popper 内容</div>
              </Popper>
            </div>
          </Popper>
        </div>
      </div>

      {/* 自定义样式 */}
      <h3>自定义样式</h3>
      <div className={styles.group}>
        {customStyles.map(({ id, title, style }) => (
          <div key={id} className={styles.demoContainer}>
            <Button
              ref={(el: HTMLButtonElement | null) =>
                (buttonRefs.current[id] = el)
              }
              onClick={() => handlePopperToggle(id)}
            >
              {title}
            </Button>
            <Popper
              visible={activePopper === id}
              anchorEl={buttonRefs.current[id]}
              popperStyle={style}
              onClickAway={() => setActivePopper(null)}
            >
              <div>
                <h4>{title}</h4>
                <p>自定义样式示例内容</p>
                {style.overflow === "auto" && (
                  <div>
                    {Array(10)
                      .fill(null)
                      .map((_, i) => (
                        <p key={i}>滚动内容 {i + 1}</p>
                      ))}
                  </div>
                )}
              </div>
            </Popper>
          </div>
        ))}
      </div>

      {/* 箭头样式展示 */}
      <h3>箭头样式</h3>
      <div className={styles.group}>
        {arrowStyles.map(({ id, title, props }) => (
          <div key={id} className={styles.demoContainer}>
            <Button
              ref={(el: HTMLButtonElement | null) =>
                (buttonRefs.current[id] = el)
              }
              onClick={() => handlePopperToggle(id)}
            >
              {title}
            </Button>
            <Popper
              visible={activePopper === id}
              anchorEl={buttonRefs.current[id]}
              {...props}
              onClickAway={() => setActivePopper(null)}
            >
              <div>{title}</div>
            </Popper>
          </div>
        ))}
      </div>

      {/* 动画效果展示 */}
      <h3>动画效果</h3>
      <div className={styles.group}>
        {animations.map(({ id, title, animation }) => (
          <div key={id} className={styles.demoContainer}>
            <Button
              ref={(el: HTMLButtonElement | null) =>
                (buttonRefs.current[id] = el)
              }
              onClick={() => handlePopperToggle(id)}
            >
              {title}
            </Button>
            <Popper
              visible={activePopper === id}
              anchorEl={buttonRefs.current[id]}
              animation={animation}
              arrow
              onClickAway={() => setActivePopper(null)}
            >
              <div>{title}</div>
            </Popper>
          </div>
        ))}
      </div>

      {/* 位置偏移展示 */}
      <h3>位置偏移</h3>
      <div className={styles.group}>
        {offsets.map(({ id, title, offset }) => (
          <div key={id} className={styles.demoContainer}>
            <Button
              ref={(el: HTMLButtonElement | null) =>
                (buttonRefs.current[id] = el)
              }
              onClick={() => handlePopperToggle(id)}
            >
              {title}
            </Button>
            <Popper
              visible={activePopper === id}
              anchorEl={buttonRefs.current[id]}
              offset={offset}
              arrow
              onClickAway={() => setActivePopper(null)}
            >
              <div>{title}</div>
            </Popper>
          </div>
        ))}
      </div>

      {/* 开关动画展示 */}
      <h3>开关动画</h3>
      <div className={styles.group}>
        <div className={styles.demoContainer}>
          <Button
            ref={(el: HTMLButtonElement | null) =>
              (buttonRefs.current["toggle"] = el)
            }
            onClick={() => handlePopperToggle("toggle")}
          >
            切换显示
          </Button>
          <Popper
            visible={activePopper === "toggle"}
            anchorEl={buttonRefs.current["toggle"]}
            arrow
            animation={{ duration: 300, easing: "ease-in-out" }}
            onClickAway={() => setActivePopper(null)}
          >
            <div>点击按钮或外部区域关闭</div>
          </Popper>
        </div>
      </div>
    </div>
  );
};

export default PopperSection;
