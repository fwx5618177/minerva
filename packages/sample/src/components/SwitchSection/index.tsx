import React, { useState } from "react";
import { Switch, Space } from "@minerva/lib-core";
import {
  IoMoon,
  IoSunny,
  IoNotifications,
  IoVolumeMute,
  IoWifi,
  IoBluetooth,
  IoAirplane,
  IoLocation,
  IoSync,
  IoCloudUpload,
  IoShield,
  IoGlobe,
  IoNotificationsOff,
  IoLanguage,
  IoFingerPrint,
  IoEye,
  IoEyeOff,
  IoHeart,
  IoHeartDislike,
  IoLockClosed,
  IoLockOpen,
} from "react-icons/io5";
import styles from "./section.module.scss";

const SwitchSection: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [sound, setSound] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSyncing, setIsSyncing] = useState(false);

  const [privacy, setPrivacy] = useState({
    fingerprint: true,
    faceId: false,
    location: true,
    analytics: false,
  });

  const [preferences, setPreferences] = useState({
    autoSave: true,
    notifications: true,
    darkMode: false,
    sound: true,
  });

  const handleSubmit = () => {
    setIsSubmitting(true);
    setTimeout(() => setIsSubmitting(false), 2000);
  };

  const handleSync = () => {
    setIsSyncing(true);
    setTimeout(() => setIsSyncing(false), 2000);
  };

  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <h2>Switch 开关</h2>
        <p>开关选择器，用于在两个互斥状态间切换。</p>
      </div>

      <Space direction="vertical" size="large" block>
        <div>
          <h3>基础用法</h3>
          <p className={styles.description}>最基本的开关用法。</p>
          <div className={styles.group}>
            <Space size="large">
              <Switch />
              <Switch defaultChecked />
              <Switch disabled />
              <Switch disabled defaultChecked />
            </Space>
          </div>
        </div>

        <div>
          <h3>尺寸大小</h3>
          <p className={styles.description}>提供三种尺寸的开关。</p>
          <div className={styles.group}>
            <Space size="large" align="center">
              <Switch size="small" label="Small" />
              <Switch size="medium" label="Medium" />
              <Switch size="large" label="Large" />
            </Space>
          </div>
        </div>

        <div>
          <h3>颜色主题</h3>
          <p className={styles.description}>不同状态下的开关颜色。</p>
          <div className={styles.group}>
            <Space direction="vertical" size="medium">
              <Space size="large">
                <Switch color="primary" label="Primary" defaultChecked />
                <Switch color="secondary" label="Secondary" defaultChecked />
                <Switch color="success" label="Success" defaultChecked />
              </Space>
              <Space size="large">
                <Switch color="warning" label="Warning" defaultChecked />
                <Switch color="error" label="Error" defaultChecked />
                <Switch color="#8B5CF6" label="Custom" defaultChecked />
              </Space>
            </Space>
          </div>
        </div>

        <div>
          <h3>标签位置</h3>
          <p className={styles.description}>可以配置标签在开关的不同位置。</p>
          <div className={styles.group}>
            <Space direction="vertical" size="medium">
              <Space size="large">
                <Switch label="Start" labelPlacement="start" />
                <Switch label="End" labelPlacement="end" />
              </Space>
              <Space size="large">
                <Switch label="Top" labelPlacement="top" />
                <Switch label="Bottom" labelPlacement="bottom" />
              </Space>
            </Space>
          </div>
        </div>

        <div>
          <h3>加载状态</h3>
          <p className={styles.description}>切换时可以显示加载状态。</p>
          <div className={styles.group}>
            <Space size="large">
              <Switch loading label="Loading" />
              <Switch loading defaultChecked label="Loading Checked" />
              <Switch loading disabled label="Loading Disabled" />
            </Space>
          </div>
        </div>

        <div>
          <h3>实际应用场景</h3>
          <p className={styles.description}>在实际应用中的一些常见场景。</p>
          <div className={styles.group}>
            <Space direction="vertical" size="large">
              <Switch
                checked={darkMode}
                onChange={(checked) => setDarkMode(checked)}
                label={darkMode ? "Dark Mode" : "Light Mode"}
                icon={darkMode ? <IoMoon /> : <IoSunny />}
              />

              <Switch
                checked={notifications}
                onChange={(checked) => setNotifications(checked)}
                label="通知提醒"
                icon={<IoNotifications />}
                color="success"
              />

              <Switch
                checked={sound}
                onChange={(checked) => setSound(checked)}
                label={sound ? "声音开启" : "静音模式"}
                icon={<IoVolumeMute />}
                color="warning"
              />
            </Space>
          </div>
        </div>

        <div>
          <h3>自定义样式</h3>
          <p className={styles.description}>可以自定义开关的样式。</p>
          <div className={styles.group}>
            <Space size="large">
              <Switch
                style={{
                  "--switch-checked-thumb-bg": "#8B5CF6",
                  "--switch-checked-track-bg": "rgba(139, 92, 246, 0.5)",
                }}
                defaultChecked
                label="紫色主题"
              />
              <Switch
                style={{
                  "--switch-checked-thumb-bg": "#10B981",
                  "--switch-checked-track-bg": "rgba(16, 185, 129, 0.5)",
                }}
                defaultChecked
                label="绿色主题"
              />
              <Switch
                style={{
                  "--switch-checked-thumb-bg": "#F59E0B",
                  "--switch-checked-track-bg": "rgba(245, 158, 11, 0.5)",
                }}
                defaultChecked
                label="橙色主题"
              />
            </Space>
          </div>
        </div>

        <div>
          <h3>加载状态与动画</h3>
          <p className={styles.description}>展示不同状态下的加载动画。</p>
          <div className={styles.group}>
            <Space direction="vertical" size="large">
              <Space size="large">
                <Switch loading />
                <Switch loading defaultChecked />
                <Switch loading disabled />
              </Space>
              <Space size="large">
                <Switch loading size="small" label="Small Loading" />
                <Switch loading size="medium" label="Medium Loading" />
                <Switch loading size="large" label="Large Loading" />
              </Space>
            </Space>
          </div>
        </div>

        <div>
          <h3>自定义颜色</h3>
          <p className={styles.description}>展示不同颜色搭配的效果。</p>
          <div className={styles.group}>
            <Space direction="vertical" size="large">
              <Space size="large">
                <Switch color="#8B5CF6" label="紫色" defaultChecked />
                <Switch color="#10B981" label="绿色" defaultChecked />
                <Switch color="#F59E0B" label="橙色" defaultChecked />
              </Space>
              <Space size="large">
                <Switch color="#EC4899" label="粉色" defaultChecked />
                <Switch color="#3B82F6" label="蓝色" defaultChecked />
                <Switch color="#6366F1" label="靛蓝" defaultChecked />
              </Space>
            </Space>
          </div>
        </div>

        <div>
          <h3>组合场景</h3>
          <p className={styles.description}>在实际应用中的组合使用场景。</p>
          <div className={styles.group}>
            <Space direction="vertical" size="large">
              <div className={styles.settingItem}>
                <Space size="large">
                  <Switch
                    checked={darkMode}
                    onChange={setDarkMode}
                    color="#6366F1"
                    size="large"
                    label={darkMode ? "深色模式已开启" : "深色模式已关闭"}
                  />
                  <Switch
                    checked={notifications}
                    onChange={setNotifications}
                    color="#10B981"
                    label="系统通知"
                    loading={false}
                  />
                </Space>
              </div>
              <div className={styles.settingItem}>
                <Space size="large">
                  <Switch color="#F59E0B" label="自动更新" defaultChecked />
                  <Switch color="#EC4899" label="位置服务" />
                </Space>
              </div>
            </Space>
          </div>
        </div>

        <div>
          <h3>特殊状态</h3>
          <p className={styles.description}>展示各种特殊状态下的效果。</p>
          <div className={styles.group}>
            <Space direction="vertical" size="large">
              <Space size="large">
                <Switch disabled label="禁用状态" />
                <Switch disabled checked label="禁用选中" />
                <Switch loading label="加载中" />
              </Space>
              <Space size="large">
                <Switch shape="square" label="方形开关" />
                <Switch ripple={false} label="无涟漪效果" />
                <Switch size="small" shape="square" label="小方形" />
              </Space>
            </Space>
          </div>
        </div>

        <div>
          <h3>交互反馈</h3>
          <p className={styles.description}>展示不同的交互状态和动画效果。</p>
          <div className={styles.group}>
            <Space direction="vertical" size="large">
              <Space size="large">
                <Switch
                  label="提交更改"
                  loading={isSubmitting}
                  icon={<IoCloudUpload />}
                  onClick={handleSubmit}
                />
                <Switch
                  label="同步数据"
                  loading={isSyncing}
                  icon={<IoSync />}
                  onClick={handleSync}
                />
              </Space>
              <div className={styles.settingCard}>
                <h4>快速设置</h4>
                <Space direction="vertical" size="medium">
                  <Switch icon={<IoWifi />} label="无线网络" defaultChecked />
                  <Switch icon={<IoBluetooth />} label="蓝牙" />
                  <Switch icon={<IoAirplane />} label="飞行模式" />
                  <Switch
                    icon={<IoLocation />}
                    label="定位服务"
                    defaultChecked
                  />
                </Space>
              </div>
            </Space>
          </div>
        </div>

        <div>
          <h3>动态效果</h3>
          <p className={styles.description}>展示开关的动态交互效果。</p>
          <div className={styles.group}>
            <Space direction="vertical" size="large">
              <div className={styles.interactiveDemo}>
                <Switch
                  size="large"
                  color="primary"
                  label="带有涟漪效果"
                  ripple
                />
                <Switch
                  size="large"
                  color="secondary"
                  label="悬停效果"
                  className={styles.hoverDemo}
                />
                <Switch
                  size="large"
                  color="success"
                  label="点击效果"
                  className={styles.activeDemo}
                />
              </div>
            </Space>
          </div>
        </div>

        <div>
          <h3>图标与动效</h3>
          <p className={styles.description}>展示带有图标和动画效果的开关。</p>
          <div className={styles.group}>
            <Space direction="vertical" size="large">
              <Space size="large">
                <Switch
                  icon={<IoWifi />}
                  label="WiFi"
                  defaultChecked
                  color="primary"
                />
                <Switch icon={<IoBluetooth />} label="蓝牙" color="secondary" />
                <Switch icon={<IoLocation />} label="定位" color="success" />
              </Space>
              <Space size="large">
                <Switch
                  icon={<IoNotifications />}
                  label="通知"
                  loading
                  defaultChecked
                />
                <Switch icon={<IoSync />} label="同步中" loading />
              </Space>
            </Space>
          </div>
        </div>

        <div>
          <h3>高级动效</h3>
          <p className={styles.description}>展示更丰富的动画效果。</p>
          <div className={styles.group}>
            <Space direction="vertical" size="large">
              <div className={styles.animationDemo}>
                <Switch
                  size="large"
                  color="primary"
                  label="脉冲效果"
                  className={styles.pulseDemo}
                  defaultChecked
                />
                <Switch
                  size="large"
                  color="success"
                  label="弹性效果"
                  className={styles.bounceDemo}
                />
                <Switch
                  size="large"
                  color="warning"
                  label="渐变效果"
                  className={styles.fadeDemo}
                />
              </div>
            </Space>
          </div>
        </div>

        <div>
          <h3>系统设置面板</h3>
          <p className={styles.description}>模拟系统设置面板的开关组合。</p>
          <div className={styles.group}>
            <div className={styles.settingsPanel}>
              <div className={styles.settingsGroup}>
                <h4>隐私设置</h4>
                <Space direction="vertical" size="medium">
                  <Switch
                    checked={privacy.fingerprint}
                    onChange={(checked) =>
                      setPrivacy((prev) => ({ ...prev, fingerprint: checked }))
                    }
                    icon={<IoFingerPrint />}
                    label="指纹解锁"
                    color="primary"
                  />
                  <Switch
                    checked={privacy.location}
                    onChange={(checked) =>
                      setPrivacy((prev) => ({ ...prev, location: checked }))
                    }
                    icon={<IoLocation />}
                    label="位置服务"
                    color="warning"
                  />
                  <Switch
                    checked={privacy.analytics}
                    onChange={(checked) =>
                      setPrivacy((prev) => ({ ...prev, analytics: checked }))
                    }
                    icon={<IoShield />}
                    label="数据分析"
                    color="error"
                  />
                </Space>
              </div>

              <div className={styles.settingsGroup}>
                <h4>个性化</h4>
                <Space direction="vertical" size="medium">
                  <Switch
                    checked={preferences.autoSave}
                    onChange={(checked) =>
                      setPreferences((prev) => ({ ...prev, autoSave: checked }))
                    }
                    icon={<IoCloudUpload />}
                    label="自动保存"
                    color="success"
                  />
                  <Switch
                    checked={preferences.notifications}
                    onChange={(checked) =>
                      setPreferences((prev) => ({
                        ...prev,
                        notifications: checked,
                      }))
                    }
                    icon={
                      preferences.notifications ? (
                        <IoNotifications />
                      ) : (
                        <IoNotificationsOff />
                      )
                    }
                    label={
                      preferences.notifications ? "通知已开启" : "通知已关闭"
                    }
                    color="primary"
                  />
                  <Switch
                    checked={preferences.darkMode}
                    onChange={(checked) =>
                      setPreferences((prev) => ({ ...prev, darkMode: checked }))
                    }
                    icon={preferences.darkMode ? <IoMoon /> : <IoSunny />}
                    label={preferences.darkMode ? "深色模式" : "浅色模式"}
                    color="secondary"
                  />
                </Space>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3>动态状态切换</h3>
          <p className={styles.description}>展示开关状态切换时的动态效果。</p>
          <div className={styles.group}>
            <Space direction="vertical" size="large">
              <Space size="large">
                <Switch
                  icon={preferences.sound ? <IoHeart /> : <IoHeartDislike />}
                  label={preferences.sound ? "已收藏" : "未收藏"}
                  checked={preferences.sound}
                  onChange={(checked) =>
                    setPreferences((prev) => ({ ...prev, sound: checked }))
                  }
                  color="#EC4899"
                />
                <Switch
                  icon={privacy.faceId ? <IoEye /> : <IoEyeOff />}
                  label={privacy.faceId ? "显示密码" : "隐藏密码"}
                  checked={privacy.faceId}
                  onChange={(checked) =>
                    setPrivacy((prev) => ({ ...prev, faceId: checked }))
                  }
                  color="#6366F1"
                />
                <Switch
                  icon={darkMode ? <IoLockClosed /> : <IoLockOpen />}
                  label={darkMode ? "已锁定" : "未锁定"}
                  checked={darkMode}
                  onChange={(checked) => setDarkMode(checked)}
                  color="#10B981"
                />
              </Space>
            </Space>
          </div>
        </div>

        <div>
          <h3>快捷操作面板</h3>
          <p className={styles.description}>常用的快捷操作组合。</p>
          <div className={styles.group}>
            <div className={styles.quickPanel}>
              <Space wrap size={[24, 16]}>
                <Switch
                  size="large"
                  icon={<IoWifi />}
                  label="WiFi"
                  defaultChecked
                  color="primary"
                />
                <Switch
                  size="large"
                  icon={<IoBluetooth />}
                  label="蓝牙"
                  color="secondary"
                />
                <Switch
                  size="large"
                  icon={<IoGlobe />}
                  label="漫游"
                  color="warning"
                />
                <Switch
                  size="large"
                  icon={<IoLanguage />}
                  label="翻译"
                  color="success"
                />
              </Space>
            </div>
          </div>
        </div>
      </Space>
    </div>
  );
};

export default SwitchSection;
