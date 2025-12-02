"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { ReadingsHero, FilterOption } from "@/components/organisms/ReadingsHero";
import { ReadingsGrid, ReadingItem } from "@/components/organisms/ReadingsGrid";

export type ReadingsTemplateProps = {
  hero: {
    title: string;
    description: string;
    filters: FilterOption[];
  };
  readings: ReadingItem[];
  className?: string;
  style?: React.CSSProperties;
};

export const ReadingsTemplate: React.FC<ReadingsTemplateProps> = ({
  hero,
  readings,
  className,
  style,
}) => {
  const searchParams = useSearchParams();
  const [activeFilter, setActiveFilter] = useState<string | undefined>(() => {
    return searchParams.get("filter") ?? undefined;
  });

  useEffect(() => {
    const paramFilter = searchParams.get("filter") ?? undefined;
    setActiveFilter(paramFilter);
  }, [searchParams]);

  const handleFilterChange = (value: string) => {
    setActiveFilter(activeFilter === value ? undefined : value);
  };

  const filteredReadings = activeFilter
    ? readings.filter((reading) => {
        const normalizedCategory = reading.category.toLowerCase().replace(/\s/g, "-");
        const normalizedFilter = activeFilter.toLowerCase().replace(/\s/g, "-");
        return normalizedCategory === normalizedFilter;
      })
    : readings;

  return (
    <div className={className} style={style}>
      <ReadingsHero
        title={hero.title}
        description={hero.description}
        filters={hero.filters}
        activeFilter={activeFilter}
        onFilterChange={handleFilterChange}
      />
      <ReadingsGrid readings={filteredReadings} />
    </div>
  );
};

export default ReadingsTemplate;

