import React, { useRef, useState } from "react";
import { Tooltip, TooltipRef, Button } from "@minerva/lib-core";
import styles from "./index.module.scss";

const TooltipSection: React.FC = () => {
  const tooltipRef = useRef<TooltipRef>(null);
  const [isControlledOpen, setIsControlledOpen] = useState(false);

  return (
    <div className={styles.section}>
      <h3>基础功能</h3>
      <div className={styles.group}>
        <div className={styles.feature}>
          <h4>基础提示</h4>
          <Tooltip content="基础提示" arrow>
            <Button>基础提示</Button>
          </Tooltip>
        </div>

        <div className={styles.feature}>
          <h4>不带箭头</h4>
          <Tooltip content="不带箭头的提示">
            <Button>无箭头</Button>
          </Tooltip>
        </div>

        <div className={styles.feature}>
          <h4>禁用状态</h4>
          <Tooltip content="此 Tooltip 已禁用" disabled arrow>
            <Button>已禁用</Button>
          </Tooltip>
        </div>
      </div>

      <h3>箭头位置</h3>
      <div className={styles.group}>
        <div className={styles.feature}>
          <h4>顶部箭头</h4>
          <Tooltip content="顶部箭头" placement="top" arrow>
            <Button>Top</Button>
          </Tooltip>
        </div>
        <div className={styles.feature}>
          <h4>底部箭头</h4>
          <Tooltip content="底部箭头" placement="bottom" arrow>
            <Button>Bottom</Button>
          </Tooltip>
        </div>
        <div className={styles.feature}>
          <h4>左侧箭头</h4>
          <Tooltip content="左侧箭头" placement="left" arrow>
            <Button>Left</Button>
          </Tooltip>
        </div>
        <div className={styles.feature}>
          <h4>右侧箭头</h4>
          <Tooltip content="右侧箭头" placement="right" arrow>
            <Button>Right</Button>
          </Tooltip>
        </div>
      </div>

      <h3>Tooltip 形状</h3>
      <div className={styles.group}>
        <div className={styles.feature}>
          <h4>默认形状</h4>
          <Tooltip content="默认形状" shape="default" arrow>
            <Button>Default</Button>
          </Tooltip>
        </div>
        <div className={styles.feature}>
          <h4>圆角形状</h4>
          <Tooltip content="圆角形状" shape="rounded" arrow>
            <Button>Rounded</Button>
          </Tooltip>
        </div>
        <div className={styles.feature}>
          <h4>思考泡泡</h4>
          <Tooltip content="思考泡泡形状" shape="thought">
            <Button>Thought</Button>
          </Tooltip>
        </div>
        <div className={styles.feature}>
          <h4>方形</h4>
          <Tooltip content="方形" shape="square" arrow>
            <Button>Square</Button>
          </Tooltip>
        </div>
      </div>

      <h3>动画效果</h3>
      <div className={styles.group}>
        <div className={styles.feature}>
          <h4>淡入淡出</h4>
          <Tooltip content="淡入淡出效果" animation="fade">
            <Button>Fade</Button>
          </Tooltip>
        </div>
        <div className={styles.feature}>
          <h4>缩放</h4>
          <Tooltip content="缩放效果" animation="scale">
            <Button>Scale</Button>
          </Tooltip>
        </div>
        <div className={styles.feature}>
          <h4>远离</h4>
          <Tooltip content="远离效果" animation="shift-away">
            <Button>Shift Away</Button>
          </Tooltip>
        </div>
        <div className={styles.feature}>
          <h4>靠近</h4>
          <Tooltip content="靠近效果" animation="shift-toward">
            <Button>Shift Toward</Button>
          </Tooltip>
        </div>
        <div className={styles.feature}>
          <h4>透视</h4>
          <Tooltip content="透视效果" animation="perspective">
            <Button>Perspective</Button>
          </Tooltip>
        </div>
      </div>

      <h3>交互控制</h3>
      <div className={styles.group}>
        <div className={styles.feature}>
          <h4>Ref 控制</h4>
          <Tooltip content="通过 Ref 控制显示" ref={tooltipRef}>
            <Button onClick={() => tooltipRef.current?.toggle()}>
              点击切换显示
            </Button>
          </Tooltip>
        </div>
        <div className={styles.feature}>
          <h4>受控显示</h4>
          <Tooltip
            content="完全受控的 Tooltip"
            open={isControlledOpen}
            onOpen={() => setIsControlledOpen(true)}
            onClose={() => setIsControlledOpen(false)}
          >
            <Button onClick={() => setIsControlledOpen(!isControlledOpen)}>
              {isControlledOpen ? "点击关闭" : "点击打开"}
            </Button>
          </Tooltip>
        </div>
        <div className={styles.feature}>
          <h4>默认打开</h4>
          <Tooltip content="默认显示的 Tooltip" defaultOpen arrow>
            <Button>默认打开</Button>
          </Tooltip>
        </div>
      </div>

      <h3>特殊交互</h3>
      <div className={styles.group}>
        <div className={styles.feature}>
          <h4>跟随光标</h4>
          <Tooltip content="跟随光标移动" followCursor>
            <Button>移动光标</Button>
          </Tooltip>
        </div>
        <div className={styles.feature}>
          <h4>显示延迟</h4>
          <Tooltip content="延迟 500ms 显示" enterDelay={500}>
            <Button>延迟显示</Button>
          </Tooltip>
        </div>
        <div className={styles.feature}>
          <h4>消失延迟</h4>
          <Tooltip content="延迟 500ms 消失" leaveDelay={500}>
            <Button>延迟消失</Button>
          </Tooltip>
        </div>
      </div>

      <h3>自定义样式</h3>
      <div className={styles.group}>
        <div className={styles.feature}>
          <h4>自定义颜色</h4>
          <Tooltip
            content="自定义背景和文字颜色"
            bgColor="#6200ee"
            textColor="#ffffff"
            arrow
          >
            <Button>自定义颜色</Button>
          </Tooltip>
        </div>
        <div className={styles.feature}>
          <h4>自定义偏移</h4>
          <Tooltip content="自定义偏移距离" offset={[0, 16]} arrow>
            <Button>自定义偏移</Button>
          </Tooltip>
        </div>
        <div className={styles.feature}>
          <h4>自定义层级</h4>
          <Tooltip content="自定义 z-index" zIndex={2000} arrow>
            <Button>自定义层级</Button>
          </Tooltip>
        </div>
      </div>

      <h3>回调函数</h3>
      <div className={styles.group}>
        <div className={styles.feature}>
          <h4>显示回调</h4>
          <Tooltip
            content="触发 onOpen"
            onOpen={() => console.log("Tooltip opened")}
          >
            <Button>打开回调</Button>
          </Tooltip>
        </div>
        <div className={styles.feature}>
          <h4>关闭回调</h4>
          <Tooltip
            content="触发 onClose"
            onClose={() => console.log("Tooltip closed")}
          >
            <Button>关闭回调</Button>
          </Tooltip>
        </div>
      </div>

      <h3>Tooltip 变体（Variants）</h3>
      <div className={styles.group}>
        <div className={styles.feature}>
          <h4>亮色主题</h4>
          <Tooltip content="亮色主题" variant="light" arrow>
            <Button>Light</Button>
          </Tooltip>
        </div>
        <div className={styles.feature}>
          <h4>暗色主题</h4>
          <Tooltip content="暗色主题" variant="dark" arrow>
            <Button>Dark</Button>
          </Tooltip>
        </div>
        <div className={styles.feature}>
          <h4>信息提示</h4>
          <Tooltip content="信息提示样式" variant="info" arrow>
            <Button>Info</Button>
          </Tooltip>
        </div>
        <div className={styles.feature}>
          <h4>成功提示</h4>
          <Tooltip content="成功提示样式" variant="success" arrow>
            <Button>Success</Button>
          </Tooltip>
        </div>
        <div className={styles.feature}>
          <h4>警告提示</h4>
          <Tooltip content="警告提示样式" variant="warning" arrow>
            <Button>Warning</Button>
          </Tooltip>
        </div>
        <div className={styles.feature}>
          <h4>错误提示</h4>
          <Tooltip content="错误提示样式" variant="error" arrow>
            <Button>Error</Button>
          </Tooltip>
        </div>
      </div>

      <h3>详细位置（Placements）</h3>
      <div className={styles.group}>
        <div className={styles.feature}>
          <h4>顶部起始</h4>
          <Tooltip content="顶部起始位置" placement="top-start" arrow>
            <Button>Top Start</Button>
          </Tooltip>
        </div>
        <div className={styles.feature}>
          <h4>顶部结束</h4>
          <Tooltip content="顶部结束位置" placement="top-end" arrow>
            <Button>Top End</Button>
          </Tooltip>
        </div>
        <div className={styles.feature}>
          <h4>底部起始</h4>
          <Tooltip content="底部起始位置" placement="bottom-start" arrow>
            <Button>Bottom Start</Button>
          </Tooltip>
        </div>
        <div className={styles.feature}>
          <h4>底部结束</h4>
          <Tooltip content="底部结束位置" placement="bottom-end" arrow>
            <Button>Bottom End</Button>
          </Tooltip>
        </div>
        <div className={styles.feature}>
          <h4>左侧起始</h4>
          <Tooltip content="左侧起始位置" placement="left-start" arrow>
            <Button>Left Start</Button>
          </Tooltip>
        </div>
        <div className={styles.feature}>
          <h4>左侧结束</h4>
          <Tooltip content="左侧结束位置" placement="left-end" arrow>
            <Button>Left End</Button>
          </Tooltip>
        </div>
        <div className={styles.feature}>
          <h4>右侧起始</h4>
          <Tooltip content="右侧起始位置" placement="right-start" arrow>
            <Button>Right Start</Button>
          </Tooltip>
        </div>
        <div className={styles.feature}>
          <h4>右侧结束</h4>
          <Tooltip content="右侧结束位置" placement="right-end" arrow>
            <Button>Right End</Button>
          </Tooltip>
        </div>
      </div>

      <h3>自定义颜色示例</h3>
      <div className={styles.group}>
        <div className={styles.feature}>
          <h4>品牌色</h4>
          <Tooltip
            content="使用品牌色"
            bgColor="#6200ee"
            textColor="#ffffff"
            arrow
          >
            <Button>品牌色</Button>
          </Tooltip>
        </div>
        <div className={styles.feature}>
          <h4>柔和色</h4>
          <Tooltip
            content="使用柔和色"
            bgColor="#f0f7ff"
            textColor="#0066cc"
            arrow
          >
            <Button>柔和色</Button>
          </Tooltip>
        </div>
        <div className={styles.feature}>
          <h4>渐变背景</h4>
          <Tooltip
            content="渐变背景效果"
            bgColor="linear-gradient(45deg, #ff6b6b, #feca57)"
            textColor="#ffffff"
            arrow
          >
            <Button>渐变色</Button>
          </Tooltip>
        </div>
      </div>

      <h3>Ref 方法控制</h3>
      <div className={styles.group}>
        <div className={styles.feature}>
          <h4>打开方法</h4>
          <Tooltip content="使用 ref.open() 打开" ref={tooltipRef}>
            <Button onClick={() => tooltipRef.current?.open()}>打开</Button>
          </Tooltip>
        </div>
        <div className={styles.feature}>
          <h4>关闭方法</h4>
          <Tooltip content="使用 ref.close() 关闭" ref={tooltipRef} defaultOpen>
            <Button onClick={() => tooltipRef.current?.close()}>关闭</Button>
          </Tooltip>
        </div>
        <div className={styles.feature}>
          <h4>切换方法</h4>
          <Tooltip content="使用 ref.toggle() 切换" ref={tooltipRef}>
            <Button onClick={() => tooltipRef.current?.toggle()}>
              切换显示
            </Button>
          </Tooltip>
        </div>
      </div>
    </div>
  );
};

export default TooltipSection;
