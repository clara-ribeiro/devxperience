"use client";

import React from "react";
import { FilterButton } from "@/components/atoms/FilterButton";
import { StyledFilterButtons } from "./styles";

export type FilterOption = {
  label: string;
  value: string;
};

export type FilterButtonsProps = {
  filters: FilterOption[];
  activeFilter?: string;
  onFilterChange?: (value: string) => void;
  className?: string;
  style?: React.CSSProperties;
};

export const FilterButtons: React.FC<FilterButtonsProps> = ({
  filters,
  activeFilter,
  onFilterChange,
  className,
  style,
}) => {
  return (
    <StyledFilterButtons className={className} style={style}>
      {filters.map((filter) => (
        <FilterButton
          key={filter.value}
          label={filter.label}
          isActive={activeFilter === filter.value}
          onClick={() => onFilterChange?.(filter.value)}
        />
      ))}
    </StyledFilterButtons>
  );
};

export default FilterButtons;

