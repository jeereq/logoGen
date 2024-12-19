"use client";

import { ReactNode } from "react";
import {
  ResponsiveContainer,
  ComposedChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  XAxisProps,
  YAxisProps,
  TooltipProps
} from "recharts";
import { chartConfig } from "./config";
import type { BaseChartProps } from "./types";

interface ChartBaseComponentProps extends BaseChartProps {
  children: ReactNode;
}

// Define explicit types for axis props to avoid defaultProps warnings
const xAxisProps: Partial<XAxisProps> = {
  ...chartConfig.axis.props,
  scale: "auto",
  allowDataOverflow: true,
  domain: ["dataMin", "dataMax"]
};

const yAxisProps: Partial<YAxisProps> = {
  ...chartConfig.axis.props,
  scale: "auto",
  allowDataOverflow: true,
  domain: ["dataMin", "dataMax"]
};

const tooltipProps: Partial<TooltipProps<any, any>> = {
  ...chartConfig.tooltip.props,
  wrapperStyle: { outline: "none" }
};

export function ChartBase({
  data,
  height = chartConfig.dimensions.defaultHeight,
  children,
  xAxisKey,
  yAxisKey
}: ChartBaseComponentProps) {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <ComposedChart 
        data={data}
        margin={chartConfig.dimensions.margin}
      >
        <CartesianGrid {...chartConfig.grid.props} />
        <XAxis 
          dataKey={xAxisKey} 
          {...xAxisProps}
        />
        <YAxis 
          dataKey={yAxisKey}
          {...yAxisProps}
        />
        <Tooltip {...tooltipProps} />
        {children}
      </ComposedChart>
    </ResponsiveContainer>
  );
}