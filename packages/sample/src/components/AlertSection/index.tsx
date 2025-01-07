import React, { useState } from "react";
import { Alert, Button } from "@minerva/lib-core";
import { IoHeart, IoClose, IoStar } from "react-icons/io5";
import styles from "./section.module.scss";

const AlertSection: React.FC = () => {
  const [visible, setVisible] = useState(true);

  const handleReset = () => {
    setVisible(true);
  };

  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <h2>Alert 警告提示</h2>
        <p>用于页面中展示重要的提示信息，适用于系统级通知、操作反馈等场景。</p>
      </div>

      <h3>Basic Alerts</h3>
      <p className={styles.description}>基础的警告提示，展示不同的提示类型</p>
      <div className={styles.group}>
        <Alert variant="info">这是一条信息提示</Alert>
        <Alert variant="success">这是一条成功提示</Alert>
        <Alert variant="warning">这是一条警告提示</Alert>
        <Alert variant="error">这是一条错误提示</Alert>
      </div>

      <h3>With Title</h3>
      <p className={styles.description}>带有标题的警告提示</p>
      <div className={styles.group}>
        <Alert title="信息提示标题" variant="info">
          这是一条带有标题的信息提示
        </Alert>
        <Alert title="成功提示标题" variant="success">
          这是一条带有标题的成功提示
        </Alert>
      </div>

      <h3>Different Sizes</h3>
      <p className={styles.description}>不同尺寸的警告提示</p>
      <div className={styles.group}>
        <Alert size="small" variant="info">
          这是一个小型的警告提示
        </Alert>
        <Alert size="medium" variant="info">
          这是一个中型的警告提示
        </Alert>
        <Alert size="large" variant="info">
          这是一个大型的警告提示
        </Alert>
      </div>

      <h3>Closable Alerts</h3>
      <p className={styles.description}>可关闭的警告提示</p>
      <div className={styles.group}>
        <Alert
          closable
          variant="info"
          onClose={() => console.log("Alert closed")}
        >
          点击右侧的按钮关闭此警告
        </Alert>
        <Alert closable closeIcon={<IoClose color="red" />} variant="warning">
          自定义关闭图标
        </Alert>
      </div>

      <h3>Custom Icons</h3>
      <p className={styles.description}>自定义图标的警告提示</p>
      <div className={styles.group}>
        <Alert icon={<IoHeart />} variant="info">
          使用自定义图标
        </Alert>
        <Alert showIcon={false} variant="success">
          不显示图标
        </Alert>
      </div>

      <h3>Styles Variants</h3>
      <p className={styles.description}>不同样式变体的警告提示</p>
      <div className={styles.group}>
        <Alert variant="info" outlined>
          描边样式
        </Alert>
        <Alert variant="success" filled>
          填充样式
        </Alert>
        <Alert variant="warning" banner>
          Banner样式
        </Alert>
      </div>

      <h3>With Actions</h3>
      <p className={styles.description}>带有操作按钮的警告提示</p>
      <div className={styles.group}>
        <Alert
          variant="info"
          action={
            <Button size="small" variant="primary">
              查看详情
            </Button>
          }
        >
          这是一条带有操作按钮的提示
        </Alert>
        <Alert
          variant="warning"
          action={
            <>
              <Button size="small" variant="primary" style={{ marginRight: 8 }}>
                确认
              </Button>
              <Button size="small" variant="secondary">
                取消
              </Button>
            </>
          }
        >
          这是一条带有多个操作按钮的提示
        </Alert>
      </div>

      <h3>Custom Styles</h3>
      <p className={styles.description}>自定义样式的警告提示</p>
      <div className={styles.group}>
        <Alert
          style={{
            background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
            color: "white",
          }}
        >
          自定义渐变背景色
        </Alert>
        <Alert style={{ borderLeft: "5px solid #4caf50" }} variant="success">
          自定义边框样式
        </Alert>
      </div>

      <h3>Collapsible Alerts</h3>
      <p className={styles.description}>可展开收起的警告提示</p>
      <div className={styles.group}>
        <Alert
          title="可展开的警告提示"
          variant="info"
          collapsible
          defaultExpanded={false}
          onExpand={(expanded) => console.log("Expanded:", expanded)}
        >
          这是一段可以展开收起的内容。
          <br />
          可以包含多行文本。
          <br />
          点击标题或箭头图标即可展开/收起。
        </Alert>
      </div>

      <h3>Elevation</h3>
      <p className={styles.description}>带阴影效果的警告提示</p>
      <div className={styles.group}>
        <Alert variant="info" elevation title="带阴影的警告提示">
          这是一个带有阴影效果的警告提示
        </Alert>
        <Alert variant="success" elevation rounded borderRadius="16px">
          自定义圆角的警告提示
        </Alert>
      </div>

      <h3>Complex Examples</h3>
      <p className={styles.description}>组合使用各种特性</p>
      <div className={styles.group}>
        <Alert
          variant="info"
          title="组合特性示例"
          icon={<IoStar />}
          elevation
          rounded
          collapsible
          closable
          action={
            <Button size="small" variant="primary">
              详情
            </Button>
          }
        >
          这个示例组合了多个特性：
          自定义图标、阴影、圆角、可展开收起、可关闭、操作按钮等。
        </Alert>

        <Alert
          variant="success"
          type="filled"
          title="渐变背景示例"
          showIcon
          elevation
          style={{
            background: "linear-gradient(135deg, #28a745 0%, #20c997 100%)",
          }}
        >
          使用渐变背景色的成功提示
        </Alert>
      </div>

      <h3>Animation Effects</h3>
      <p className={styles.description}>不同的动画效果展示</p>
      <div className={styles.group}>
        <Alert variant="info" animation animationName="slideIn">
          滑入动画效果
        </Alert>
        <Alert variant="success" animation animationName="fadeIn">
          淡入动画效果
        </Alert>
        <Alert variant="warning" animation animationName="bounce">
          弹跳动画效果
        </Alert>
        <Alert variant="error" animation animationName="zoom">
          缩放动画效果
        </Alert>
      </div>

      <h3>Visibility Control</h3>
      <p className={styles.description}>控制警告提示的显示和隐藏</p>
      <div className={styles.group}>
        <div className={styles.visibilityDemo}>
          {visible && (
            <Alert
              variant="info"
              closable
              onClose={() => setVisible(false)}
              action={
                <Button
                  size="small"
                  variant="primary"
                  onClick={() => setVisible(false)}
                >
                  知道了
                </Button>
              }
            >
              这是一个可以通过状态控制显示隐藏的提示
            </Alert>
          )}
          <div className={styles.controls}>
            <Button variant="primary" onClick={handleReset} disabled={visible}>
              重新显示提示
            </Button>
          </div>
        </div>
      </div>

      <h3>Multiple Alerts</h3>
      <p className={styles.description}>多个警告提示的垂直排列</p>
      <div className={styles.group}>
        <div className={styles.alertStack}>
          <Alert variant="info">第一条提示信息</Alert>
          <Alert variant="success">第二条提示信息</Alert>
          <Alert variant="warning">第三条提示信息</Alert>
        </div>
      </div>

      <h3>Horizontal Layout</h3>
      <p className={styles.description}>水平排列的警告提示</p>
      <div className={styles.group}>
        <div className={styles.horizontalAlerts}>
          <Alert variant="info" style={{ margin: 0 }}>
            提示信息
          </Alert>
          <Alert variant="success" style={{ margin: 0 }}>
            成功信息
          </Alert>
          <Alert variant="warning" style={{ margin: 0 }}>
            警告信息
          </Alert>
        </div>
      </div>

      <h3>Responsive Layout</h3>
      <p className={styles.description}>在不同设备上的响应式展示</p>
      <div className={styles.group}>
        <Alert variant="info" banner title="横幅提示" showIcon>
          这是一个横幅式的警告提示，会自适应屏幕宽度
        </Alert>
      </div>
    </div>
  );
};

export default AlertSection;
