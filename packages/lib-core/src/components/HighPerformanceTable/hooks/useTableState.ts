import { useState, useCallback } from "react";
import { TableState, TableDataValue } from "../types";

interface UseTableStateResult {
  sortState: TableState;
  filterState: Record<string, TableDataValue>;
  handleSort: (key: string) => void;
  handleFilter: (key: string, value: TableDataValue) => void;
}

export const useTableState = (): UseTableStateResult => {
  const [sortState, setSortState] = useState<TableState>({
    sortKey: undefined,
    sortOrder: null,
    filters: {},
  });

  const [filterState, setFilterState] = useState<
    Record<string, TableDataValue>
  >({});

  const handleSort = useCallback((key: string) => {
    setSortState((prev) => {
      if (prev.sortKey !== key) {
        return {
          ...prev,
          sortKey: key,
          sortOrder: "asc",
        };
      }

      const nextOrder =
        prev.sortOrder === "asc"
          ? "desc"
          : prev.sortOrder === "desc"
            ? null
            : "asc";

      return {
        ...prev,
        sortKey: nextOrder === null ? undefined : key,
        sortOrder: nextOrder,
      };
    });
  }, []);

  const handleFilter = useCallback((key: string, value: TableDataValue) => {
    setFilterState((prev) => {
      const newState = { ...prev };
      if (value === undefined || value === null) {
        delete newState[key];
      } else {
        newState[key] = value;
      }
      return newState;
    });

    setSortState((prev) => ({
      ...prev,
      filters: {
        ...prev.filters,
        [key]: value,
      },
    }));
  }, []);

  return {
    sortState,
    filterState,
    handleSort,
    handleFilter,
  };
};
