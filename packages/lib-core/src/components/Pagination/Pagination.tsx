import React, {
  useState,
  useCallback,
  useMemo,
  useRef,
  useEffect,
  MouseEvent,
  KeyboardEvent,
} from "react";
import {
  IoChevronBack,
  IoChevronForward,
  IoEllipsisHorizontal,
} from "react-icons/io5";
import classNames from "classnames";
import { PaginationProps } from "./types";
import styles from "./pagination.module.scss";

type PaginationType = "page" | "prev" | "next" | "jump-prev" | "jump-next";

/**
 * Pagination 分页组件
 *
 * @description 用于数据分页展示的导航组件,支持多种样式和交互方式
 *
 * @param {number} current - 当前页
 * @param {number} total - 总数
 * @param {number} pageSize - 每页显示数量
 * @param {function} onChange - 页码改变回调
 * @param {boolean} disabled - 是否禁用
 * @param {boolean} showQuickJumper - 是否显示快速跳转
 * @param {boolean} showSizeChanger - 是否显示页码大小改变
 * @param {number[]} pageSizeOptions - 页码大小选项
 * @param {(page: number, type: PaginationType) => ReactNode} itemRender - 页码渲染函数
 * @param {string} className - 组件类名
 * @param {React.CSSProperties} style - 组件样式
 * @param {boolean} showTotal - 是否显示总数
 * @param {(total: number, range: [number, number]) => ReactNode} totalRender - 总数渲染函数
 * @param {string} size - 组件尺寸
 * @param {string} shape - 组件形状
 * @param {string} variant - 组件样式
 * @param {boolean} simple - 是否简单模式
 * @param {boolean} responsive - 是否响应式
 * @param {object} icons - 组件图标
 */
const Pagination: React.FC<PaginationProps> = ({
  current = 1,
  total = 0,
  pageSize = 10,
  onChange,
  disabled = false,
  showQuickJumper = false,
  showSizeChanger = false,
  pageSizeOptions = [10, 20, 50, 100],
  itemRender,
  className,
  style,
  showTotal = false,
  totalRender,
  size = "medium",
  shape = "rounded",
  variant = "filled",
  simple = false,
  responsive = false,
  icons = {
    prev: <IoChevronBack />,
    next: <IoChevronForward />,
    jumpPrev: <IoEllipsisHorizontal />,
    jumpNext: <IoEllipsisHorizontal />,
  },
}) => {
  // 内部状态
  const [jumpValue, setJumpValue] = useState("");
  const [currentPageSize, setCurrentPageSize] = useState(pageSize);
  const [ripples, setRipples] = useState<
    { x: number; y: number; id: number }[]
  >([]);
  const nextRippleId = useRef(0);

  // 计算总页数
  const totalPages = Math.ceil(total / currentPageSize);

  // 计算显示的页码范围
  const getPageRange = useCallback(() => {
    const range: number[] = [];
    const showItems = 5; // 显示的页码数量
    let start = Math.max(1, current - Math.floor(showItems / 2));
    const end = Math.min(totalPages, start + showItems - 1);

    if (end - start + 1 < showItems) {
      start = Math.max(1, end - showItems + 1);
    }

    for (let i = start; i <= end; i++) {
      range.push(i);
    }

    return range;
  }, [current, totalPages]);

  // 处理页码点击
  const handlePageClick = useCallback(
    (page: number, event?: MouseEvent<HTMLElement>) => {
      if (page === current || page < 1 || page > totalPages || disabled) {
        return;
      }

      if (event) {
        // 添加水波纹效果
        const rect = event.currentTarget.getBoundingClientRect();
        const ripple = {
          x: event.clientX - rect.left,
          y: event.clientY - rect.top,
          id: nextRippleId.current++,
        };
        setRipples((prev) => [...prev, ripple]);
      }

      onChange?.(page, currentPageSize);
    },
    [current, totalPages, disabled, onChange, currentPageSize],
  );

  // 处理快速跳转
  const handleJump = useCallback(
    (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        const value = parseInt(jumpValue);
        if (!isNaN(value) && value >= 1 && value <= totalPages) {
          onChange?.(value, currentPageSize);
          setJumpValue("");
        }
      }
    },
    [jumpValue, totalPages, onChange, currentPageSize],
  );

  // 处理页码大小改变
  const handleSizeChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      const newSize = parseInt(e.target.value);
      setCurrentPageSize(newSize);
      onChange?.(1, newSize);
    },
    [onChange],
  );

  // 清理水波纹效果
  useEffect(() => {
    const timer = setTimeout(() => {
      if (ripples.length > 0) {
        setRipples([]);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [ripples]);

  // 渲染页码项
  const renderPageItem = useCallback(
    (page: number, type: PaginationType) => {
      const isDisabled = type === "prev" ? page <= 1 : page >= totalPages;
      const itemClassName = classNames(styles.item, {
        [styles.active]: type === "page" && page === current,
        [styles.disabled]: isDisabled,
        [styles.prev]: type === "prev",
        [styles.next]: type === "next",
      });

      let content: React.ReactNode;
      switch (type) {
        case "prev":
          content = icons.prev;
          break;
        case "next":
          content = icons.next;
          break;
        case "jump-prev":
          content = icons.jumpPrev;
          break;
        case "jump-next":
          content = icons.jumpNext;
          break;
        default:
          content = page;
      }

      if (itemRender) {
        content = itemRender(page, type);
      }

      return (
        <div
          key={`${type}-${page}`}
          className={itemClassName}
          onClick={(e) => handlePageClick(page, e)}
          role="button"
          tabIndex={0}
          aria-label={`${type === "page" ? "Page " : ""}${page}`}
          aria-current={
            type === "page" && page === current ? "page" : undefined
          }
        >
          {content}
          {ripples.map((ripple) => (
            <span
              key={ripple.id}
              className={styles.ripple}
              style={{
                left: ripple.x,
                top: ripple.y,
              }}
            />
          ))}
        </div>
      );
    },
    [current, totalPages, itemRender, icons, handlePageClick, ripples],
  );

  // 渲染页码列表
  const renderPageList = useMemo(() => {
    if (simple) {
      return (
        <>
          {renderPageItem(current - 1, "prev")}
          <span className={styles.current}>{current}</span>
          {renderPageItem(current + 1, "next")}
        </>
      );
    }

    const range = getPageRange();
    const items: React.ReactNode[] = [];

    // 上一页
    items.push(renderPageItem(current - 1, "prev"));

    // 第一页
    if (range[0] > 1) {
      items.push(renderPageItem(1, "page"));
      if (range[0] > 2) {
        items.push(renderPageItem(current - 5, "jump-prev"));
      }
    }

    // 页码列表
    range.forEach((page) => {
      items.push(renderPageItem(page, "page"));
    });

    // 最后一页
    if (range[range.length - 1] < totalPages) {
      if (range[range.length - 1] < totalPages - 1) {
        items.push(renderPageItem(current + 5, "jump-next"));
      }
      items.push(renderPageItem(totalPages, "page"));
    }

    // 下一页
    items.push(renderPageItem(current + 1, "next"));

    return items;
  }, [current, totalPages, simple, getPageRange, renderPageItem]);

  // 组件类名
  const componentClassName = classNames(
    styles.pagination,
    {
      [styles.disabled]: disabled,
      [styles.small]: size === "small",
      [styles.large]: size === "large",
      [styles.circle]: shape === "circle",
      [styles.square]: shape === "square",
      [styles.outlined]: variant === "outlined",
      [styles.text]: variant === "text",
      [styles.responsive]: responsive,
    },
    className,
  );

  // 键盘导航支持
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (disabled) return;

      switch (e.key) {
        case "ArrowLeft":
          handlePageClick(current - 1);
          break;
        case "ArrowRight":
          handlePageClick(current + 1);
          break;
        case "Home":
          handlePageClick(1);
          break;
        case "End":
          handlePageClick(totalPages);
          break;
      }
    },
    [current, totalPages, disabled, handlePageClick],
  );

  return (
    <div
      className={componentClassName}
      style={style}
      role="navigation"
      aria-label="Pagination"
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      {showTotal && (
        <div className={styles.total}>
          {totalRender
            ? totalRender(total, [
                (current - 1) * currentPageSize + 1,
                Math.min(current * currentPageSize, total),
              ])
            : `Total ${total} items`}
        </div>
      )}

      {renderPageList}

      {showQuickJumper && (
        <div className={styles.jumper}>
          Go to
          <input
            value={jumpValue}
            onChange={(e) => setJumpValue(e.target.value)}
            onKeyDown={handleJump}
            aria-label="Jump to page"
          />
        </div>
      )}

      {showSizeChanger && (
        <div className={styles.sizeChanger}>
          <select
            value={currentPageSize}
            onChange={handleSizeChange}
            aria-label="Items per page"
          >
            {pageSizeOptions.map((option) => (
              <option key={option} value={option}>
                {option} / page
              </option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
};

export default Pagination;
