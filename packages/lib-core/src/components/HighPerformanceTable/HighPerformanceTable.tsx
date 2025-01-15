import React, { useRef, useEffect, useState, useCallback } from "react";
import * as PIXI from "pixi.js";
import { TableProps, TableRow, TableStyle } from "./types";
import { useVirtualization } from "./hooks/useVirtualization";
import styles from "./styles.module.scss";

const HighPerformanceTable: React.FC<TableProps> = ({
  data,
  columns,
  rowHeight = 40,
  headerHeight = 50,
  width = "100%",
  height = 500,
  onScroll,
  style = {
    backgroundColor: "#ffffff",
    headerTextColor: "#262626",
    borderColor: "#e8e8e8",
    textColor: "#262626",
    fontSize: 14,
  },
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [hoveredRow, setHoveredRow] = useState<number | null>(null);

  const { virtualRows, totalHeight } = useVirtualization({
    totalRows: data.length,
    rowHeight,
    viewportHeight: typeof height === "number" ? height : 500,
  });

  // 初始化 PixiJS
  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return;

    const { width, height } = containerRef.current.getBoundingClientRect();
    const app = new PIXI.Application({
      view: canvasRef.current,
      width,
      height,
      backgroundAlpha: 0,
      antialias: true,
      resolution: window.devicePixelRatio || 1,
      autoDensity: true,
      powerPreference: "high-performance",
    });

    // 初始渲染
    renderTable(app, {
      data,
      columns,
      virtualRows,
      hoveredRow,
      style,
      rowHeight,
      headerHeight,
      width: app.screen.width,
    });

    // 监听尺寸变化
    const updateSize = () => {
      if (!containerRef.current) return;
      const { width, height } = containerRef.current.getBoundingClientRect();
      app.renderer.resize(width, height);
      renderTable(app, {
        data,
        columns,
        virtualRows,
        hoveredRow,
        style,
        rowHeight,
        headerHeight,
        width: app.screen.width,
      });
    };

    const resizeObserver = new ResizeObserver(() => {
      requestAnimationFrame(updateSize);
    });

    resizeObserver.observe(containerRef.current);

    return () => {
      resizeObserver.disconnect();
      app.destroy(true);
    };
  }, [data, columns, virtualRows, hoveredRow, style, rowHeight, headerHeight]);

  // 处理滚动事件
  const handleScrollEvent = useCallback(
    (e: React.UIEvent<HTMLDivElement>) => {
      const target = e.currentTarget;
      onScroll?.(target.scrollTop, target.scrollLeft);

      if (canvasRef.current) {
        const app = new PIXI.Application({
          view: canvasRef.current,
          width: containerRef.current?.clientWidth || 0,
          height: containerRef.current?.clientHeight || 0,
          backgroundAlpha: 0,
        });

        requestAnimationFrame(() => {
          renderTable(app, {
            data,
            columns,
            virtualRows,
            hoveredRow,
            style,
            rowHeight,
            headerHeight,
            width: app.screen.width,
          });
        });
      }
    },
    [
      data,
      columns,
      virtualRows,
      hoveredRow,
      style,
      rowHeight,
      headerHeight,
      onScroll,
    ],
  );

  // 渲染表格内容
  const renderTable = useCallback(
    (
      app: PIXI.Application,
      options: {
        data: TableRow[];
        columns: TableProps["columns"];
        virtualRows: number[];
        hoveredRow: number | null;
        style: TableStyle;
        rowHeight: number;
        headerHeight: number;
        width: number;
      },
    ) => {
      const {
        data,
        columns,
        virtualRows,
        hoveredRow,
        style,
        rowHeight,
        headerHeight,
        width: containerWidth,
      } = options;

      // 清除现有内容
      app.stage.removeChildren();

      // 创建表格容器
      const tableContainer = new PIXI.Container();
      app.stage.addChild(tableContainer);

      // 渲染表头背景
      const headerBg = new PIXI.Graphics();
      headerBg
        .beginFill(
          parseInt(
            (style?.headerBackgroundColor || "#f7f7f7").replace("#", "0x"),
          ),
        )
        .drawRect(0, 0, containerWidth, headerHeight)
        .endFill();
      tableContainer.addChild(headerBg);

      // 渲染表头文本
      let headerX = 0;
      columns.forEach((column) => {
        const width = column.width || 100;
        const text = new PIXI.Text(column.title || column.key, {
          fontSize: style?.fontSize || 14,
          fill: style?.headerTextColor || "#262626",
          fontFamily: "Arial",
          fontWeight: "bold",
        });

        text.x = headerX + 8;
        text.y = headerHeight / 2;
        text.anchor.set(0, 0.5);
        tableContainer.addChild(text);

        headerX += width;
      });

      // 渲染数据行
      virtualRows.forEach((rowIndex, index) => {
        const row = data[rowIndex];
        const y = index * rowHeight + headerHeight;

        // 渲染行背景
        const rowBg = new PIXI.Graphics();
        const isHovered = hoveredRow === rowIndex;
        const isEven = rowIndex % 2 === 0;
        const bgColor = isHovered
          ? style?.hoverBackgroundColor || "#f5f5f5"
          : isEven
            ? style?.stripedBackgroundColor || "#fafafa"
            : style?.backgroundColor || "#ffffff";
        rowBg
          .beginFill(parseInt(bgColor.replace("#", "0x")))
          .drawRect(0, y, containerWidth, rowHeight)
          .endFill();
        tableContainer.addChild(rowBg);

        // 渲染单元格
        let x = 0;
        columns.forEach((column) => {
          const width = column.width || 100;
          const value = row[column.key];

          // 渲染单元格内容
          const cellContent = column.render
            ? String(column.render(value, row, rowIndex))
            : String(value);
          const text = new PIXI.Text(cellContent, {
            fontSize: style?.fontSize || 14,
            fill: style?.textColor || "#262626",
            fontFamily: "Arial",
          });

          text.x = x + 8;
          text.y = y + rowHeight / 2;
          text.anchor.set(0, 0.5);
          tableContainer.addChild(text);

          // 渲染单元格边框
          const border = new PIXI.Graphics();
          border
            .lineStyle(
              1,
              parseInt((style?.borderColor || "#e8e8e8").replace("#", "0x")),
            )
            .moveTo(x, y)
            .lineTo(x + width, y)
            .lineTo(x + width, y + rowHeight)
            .lineTo(x, y + rowHeight)
            .lineTo(x, y);
          tableContainer.addChild(border);

          x += width;
        });
      });
    },
    [],
  );

  // 处理鼠标悬停
  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const y = e.clientY - rect.top + containerRef.current.scrollTop;
      const rowIndex = Math.floor((y - headerHeight) / rowHeight);
      if (rowIndex >= 0 && rowIndex < data.length) {
        setHoveredRow(rowIndex);
      }
    },
    [headerHeight, rowHeight, data.length],
  );

  return (
    <div
      ref={containerRef}
      className={styles.tableContainer}
      style={{
        width,
        height,
        position: "relative",
        overflow: "auto",
      }}
      onScroll={handleScrollEvent}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setHoveredRow(null)}
    >
      <canvas ref={canvasRef} className={styles.tableCanvas} />
      <div style={{ height: totalHeight }} />
    </div>
  );
};

export default HighPerformanceTable;
