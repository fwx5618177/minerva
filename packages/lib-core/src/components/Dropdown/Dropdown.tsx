import React, { useState, useRef, useEffect } from "react";
import styles from "./dropdown.module.scss";
import { DropdownProps, DropdownOption } from "./types";
import { Button } from "..";

/**
 * Dropdown component
 * @param className - Additional classes to be added to the dropdown
 * @param ariaLabel - The aria-label attribute for the dropdown, used for accessibility
 * @param disabled - Whether the dropdown is disabled
 * @param items - The items to be displayed in the dropdown menu
 * @param onSelect - Function to be called when an item is selected
 * @param menuBgColor - Background color of the menu
 * @param menuTextColor - Text color of the menu
 * @param menuBoxShadow - Box shadow of the menu
 * @param direction - Direction of the menu (down, up, left, right)
 * @param children - The trigger element for the dropdown
 * @returns A dropdown component
 */
const Dropdown: React.FC<DropdownProps> = ({
  className = "",
  ariaLabel,
  disabled = false,
  items = [],
  onSelect,
  menuBgColor = "#f8f9fa",
  menuTextColor = "#000000",
  menuBoxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)",
  direction = "down",
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
    }
  };

  const handleSelect = (item: DropdownOption) => {
    if (onSelect && !item.disabled) {
      onSelect(item);
    }
    setIsOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      className={`${styles.dropdown} ${className}`}
      aria-label={ariaLabel}
      role="menu"
      tabIndex={0}
      aria-disabled={disabled}
      ref={dropdownRef}
    >
      <div className={styles.trigger} onClick={handleToggle}>
        {children || (
          <Button size="small" disabled={disabled}>
            Dropdown
          </Button>
        )}
      </div>
      {isOpen && (
        <div
          className={`${styles.menu} ${styles[direction]}`}
          style={{
            backgroundColor: menuBgColor,
            boxShadow: menuBoxShadow,
          }}
        >
          <ul className={styles.menuList}>
            {items.map((item, index) => (
              <li
                key={index}
                className={`${styles.menuItem} ${item.disabled ? styles.disabled : ""}`}
                onClick={() => handleSelect(item)}
                style={{
                  color: item.disabled ? "#c0c0c0" : menuTextColor,
                }}
              >
                {item.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default React.memo(Dropdown);
