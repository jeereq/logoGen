"use client";

import { ReactNode } from "react";
import {
  ComposedChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  XAxisProps,
  YAxisProps,
  TooltipProps
} from "recharts";
import { ChartContainer } from "./ChartContainer";

const defaultAxisProps: any = {
  stroke: "#ffffff60",
  fontSize: 12,
  tickLine: false,
  axisLine: false
};

const defaultTooltipStyle: any = {
  background: "rgba(17, 24, 39, 0.95)",
  border: "1px solid rgba(255,255,255,0.1)",
  borderRadius: "8px",
  boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
  padding: "8px 12px",
  fontSize: "12px"
};

interface BaseChartProps {
  children: ReactNode;
  data: Array<{ [key: string]: any }>;
  height?: number;
  xAxisKey: string;
  yAxisKey?: string;
}

export function BaseChart({
  children,
  data,
  height,
  xAxisKey,
  yAxisKey
}: BaseChartProps) {
  return (
    <ChartContainer height={height}>
      <ComposedChart data={data}>
        <CartesianGrid
          stroke="rgba(255,255,255,0.1)"
          strokeDasharray="3 3"
        />
        <XAxis
          {...defaultAxisProps}
          dataKey={xAxisKey}
        />
        <YAxis
          {...defaultAxisProps}
          dataKey={yAxisKey}
        />
        <Tooltip contentStyle={defaultTooltipStyle} />
        {children}
      </ComposedChart>
    </ChartContainer>
  );
}