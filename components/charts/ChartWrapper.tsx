"use client";

import {
  ResponsiveContainer,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ComposedChart
} from "recharts";
import { ReactNode } from "react";

interface ChartWrapperProps {
  children: ReactNode;
  data: Array<{ [key: string]: any }>;
  height?: number;
  xAxisKey: string;
  yAxisKey?: string;
}

export function ChartWrapper({
  children,
  data,
  height = 300,
  xAxisKey,
  yAxisKey
}: ChartWrapperProps) {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <ComposedChart data={data}>
        <CartesianGrid 
          stroke="rgba(255,255,255,0.1)" 
          strokeDasharray="3 3" 
        />
        <XAxis 
          dataKey={xAxisKey} 
          stroke="#ffffff60"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis 
          dataKey={yAxisKey}
          stroke="#ffffff60"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <Tooltip 
          contentStyle={{
            background: 'rgba(17, 24, 39, 0.95)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '8px',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
            padding: '8px 12px',
            fontSize: '12px'
          }}
        />
        {children}
      </ComposedChart>
    </ResponsiveContainer>
  );
}