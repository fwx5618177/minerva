export interface DropdownOption {
  label: string;
  value: string;
  disabled?: boolean;
}

export interface DropdownProps {
  className?: string;
  ariaLabel?: string;
  disabled?: boolean;
  items?: DropdownOption[];
  onSelect?: (item: DropdownOption) => void;
  menuBgColor?: string;
  menuTextColor?: string;
  menuBoxShadow?: string;
  direction?: "down" | "up" | "left" | "right";
  children?: React.ReactNode;
}
