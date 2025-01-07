import React, { useState, useRef, useEffect } from "react";
import classNames from "classnames";
import type { SwitchProps } from "./types";
import styles from "./switch.module.scss";

/**
 * Switch 开关组件
 * 用于在两个互斥状态之间切换
 * @param checked - 开关是否选中
 * @param defaultChecked - 默认是否选中
 * @param disabled - 是否禁用
 * @param size - 开关大小
 * @param color - 开关颜色
 * @param shape - 开关形状
 * @param label - 开关标签
 * @param labelPlacement - 标签位置
 * @param loading - 是否加载中
 * @param ripple - 是否显示涟漪效果
 * @param className - 自定义类名
 * @param style - 自定义样式
 * @param onChange - 值改变时的回调函数
 * @param onFocus - 聚焦时的回调函数
 * @param onBlur - 失焦时的回调函数
 * @param icon - 自定义图标
 * @param iconPlacement - 图标位置
 */
const Switch: React.FC<SwitchProps> = ({
  checked,
  defaultChecked = false,
  disabled = false,
  size = "medium",
  color = "primary",
  shape = "round",
  label,
  labelPlacement = "end",
  loading = false,
  ripple = true,
  className,
  style,
  onChange,
  onFocus,
  onBlur,
  icon,
  iconPlacement = "start",
}) => {
  const [isChecked, setIsChecked] = useState(checked ?? defaultChecked);
  const [rippleActive, setRippleActive] = useState(false);
  const switchRef = useRef<HTMLLabelElement>(null);

  useEffect(() => {
    if (checked !== undefined) {
      setIsChecked(checked);
    }
  }, [checked]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (disabled || loading) return;

    if (checked === undefined) {
      setIsChecked(event.target.checked);
    }

    onChange?.(event.target.checked, event);
  };

  const handleRipple = () => {
    if (!ripple || disabled || loading) return;

    setRippleActive(true);
    setTimeout(() => setRippleActive(false), 400);
  };

  const switchClasses = classNames(
    styles.switch,
    styles[size],
    {
      [styles.checked]: isChecked,
      [styles.disabled]: disabled,
      [styles.loading]: loading,
      [styles.square]: shape === "square",
      [styles.ripple]: ripple && rippleActive,
      [styles[color]]: Object.prototype.hasOwnProperty.call(styles, color),
    },
    className,
  );

  const thumbStyle = {
    ...(isChecked &&
    !disabled &&
    !Object.prototype.hasOwnProperty.call(styles, color)
      ? {
          backgroundColor: color,
          color: color,
        }
      : {}),
  };

  const renderLabel = () => {
    if (!label) return null;
    return <span className={styles.label}>{label}</span>;
  };

  const renderIcon = () => {
    if (!icon) return null;
    return <span className={styles.icon}>{icon}</span>;
  };

  return (
    <label
      className={switchClasses}
      style={style}
      ref={switchRef}
      onClick={handleRipple}
    >
      {labelPlacement === "start" && renderLabel()}
      <div className={styles.switchBase}>
        <input
          type="checkbox"
          checked={isChecked}
          disabled={disabled || loading}
          onChange={handleChange}
          onFocus={onFocus}
          onBlur={onBlur}
        />
        <div className={styles.track} />
        <div className={styles.thumb} style={thumbStyle}>
          {iconPlacement === "start" && renderIcon()}
        </div>
        {ripple && <div className={styles.rippleEffect} />}
      </div>
      {iconPlacement === "end" && renderIcon()}
      {labelPlacement === "end" && renderLabel()}
    </label>
  );
};

export default Switch;
