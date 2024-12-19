"use client";

import { Bar } from "recharts";
import { ChartBase } from "./ChartBase";
import { chartConfig } from "./config";
import type { SingleSeriesChartProps } from "./types";

export function BarChart({
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
      <Bar
        dataKey={dataKey}
        fill={chartConfig.colors.primary}
        // radius={chartConfig.dimensions.barRadius}
        animationDuration={chartConfig.animation.duration}
        animationEasing={chartConfig.animation.easing}
        onMouseOver={(data: any) => {
          if (data.element) {
            data.element.style.fill = chartConfig.colors.hover;
          }
        }}
        onMouseOut={(data: any) => {
          if (data.element) {
            data.element.style.fill = chartConfig.colors.primary;
          }
        }}
      />
    </ChartBase>
  );
}