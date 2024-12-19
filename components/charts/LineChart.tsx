"use client";

import { Line } from "recharts";
import { ChartBase } from "./ChartBase";
import { chartConfig } from "./config";
import type { SingleSeriesChartProps } from "./types";

export function LineChart({
  data,
  dataKey,
  xAxisKey,
  height = chartConfig.dimensions.defaultHeight
}: SingleSeriesChartProps) {
  return (
    <ChartBase 
      data={data} 
      height={height} 
      xAxisKey={xAxisKey}
      yAxisKey={dataKey}
    >
      <Line
        type="monotone"
        dataKey={dataKey}
        stroke={chartConfig.colors.line}
        strokeWidth={chartConfig.dimensions.strokeWidth}
        dot={{ 
          fill: chartConfig.colors.line,
          strokeWidth: chartConfig.dimensions.strokeWidth,
          r: 4
        }}
        activeDot={{
          r: 6,
          fill: chartConfig.colors.hover
        }}
        animationDuration={chartConfig.animation.duration}
        animationEasing={chartConfig.animation.easing}
      />
    </ChartBase>
  );
}