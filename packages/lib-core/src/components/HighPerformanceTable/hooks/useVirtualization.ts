import { useState, useEffect } from "react";

interface VirtualizationProps {
  totalRows: number;
  rowHeight: number;
  viewportHeight: number;
  overscan?: number;
}

interface VirtualizationResult {
  virtualRows: number[];
  totalHeight: number;
  scrollTop: number;
  visibleStartIndex: number;
  visibleEndIndex: number;
}

export const useVirtualization = ({
  totalRows,
  rowHeight,
  viewportHeight,
  overscan = 3,
}: VirtualizationProps): VirtualizationResult => {
  const [scrollTop, setScrollTop] = useState(0);

  const visibleRowsCount = Math.ceil(viewportHeight / rowHeight);
  const totalHeight = totalRows * rowHeight;

  const visibleStartIndex = Math.floor(scrollTop / rowHeight);
  const visibleEndIndex = Math.min(
    visibleStartIndex + visibleRowsCount + overscan,
    totalRows - 1,
  );

  const startIndex = Math.max(0, visibleStartIndex - overscan);
  const endIndex = Math.min(totalRows - 1, visibleEndIndex + overscan);

  const virtualRows = Array.from(
    { length: endIndex - startIndex + 1 },
    (_, index) => startIndex + index,
  );

  useEffect(() => {
    const handleScroll = (e: Event) => {
      const target = e.target as HTMLElement;
      setScrollTop(target.scrollTop);
    };

    document.addEventListener("scroll", handleScroll, true);
    return () => document.removeEventListener("scroll", handleScroll, true);
  }, []);

  return {
    virtualRows,
    totalHeight,
    scrollTop,
    visibleStartIndex,
    visibleEndIndex,
  };
};
