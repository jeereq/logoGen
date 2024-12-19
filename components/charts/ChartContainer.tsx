"use client";

import { ReactNode } from "react";
import { ResponsiveContainer } from "recharts";

interface ChartContainerProps {
  children: any;
  height?: number;
}

export function ChartContainer({ children, height = 300 }: ChartContainerProps) {
  return (
    <ResponsiveContainer width="100%" height={height}>
      {children}
    </ResponsiveContainer>
  );
}