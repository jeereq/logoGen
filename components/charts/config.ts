export const chartConfig = {
  axis: {
    props: {
      stroke: "#ffffff60",
      fontSize: 12,
      tickLine: false,
      axisLine: false,
      tickMargin: 8,
      minTickGap: 5,
      interval: "preserveStartEnd"
    }
  },
  grid: {
    props: {
      stroke: "rgba(255,255,255,0.1)",
      strokeDasharray: "3 3",
      vertical: true,
      horizontal: true
    }
  },
  tooltip: {
    props: {
      cursor: { fill: "rgba(255,255,255,0.05)" },
      contentStyle: {
        background: "rgba(17, 24, 39, 0.95)",
        border: "1px solid rgba(255,255,255,0.1)",
        borderRadius: "8px",
        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
        padding: "8px 12px",
        fontSize: "12px",
        color: "#ffffff"
      }
    }
  },
  colors: {
    primary: "rgba(59, 130, 246, 0.5)",
    line: "#3b82f6",
    hover: "rgba(59, 130, 246, 0.7)"
  },
  dimensions: {
    defaultHeight: 300,
    barRadius: [4, 4, 0, 0],
    strokeWidth: 2,
    margin: { top: 10, right: 10, bottom: 5, left: 0 }
  },
  animation: {
    duration: 300,
    easing: "ease-out"
  }
} as const;