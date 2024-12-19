export interface ChartDataPoint {
  [key: string]: number | string;
}

export interface BaseChartProps {
  data: ChartDataPoint[];
  height?: number;
  xAxisKey: string;
  yAxisKey?: string;
}

export interface SingleSeriesChartProps extends BaseChartProps {
  dataKey: string;
}

export interface ChartDimensions {
  width?: number | string;
  height?: number;
  margin?: {
    top?: number;
    right?: number;
    bottom?: number;
    left?: number;
  };
}

export interface ChartColors {
  primary: string;
  line: string;
  hover: string;
}

export interface ChartAnimation {
  duration: number;
  easing: string;
}