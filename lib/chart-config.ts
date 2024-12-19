export const chartConfig = {
  colors: {
    primary: "rgba(59, 130, 246, 0.5)",
    line: "#3b82f6",
    grid: "rgba(255, 255, 255, 0.1)",
    axis: "#ffffff60"
  },
  defaults: {
    height: 300,
    fontSize: 12,
    radius: [4, 4, 0, 0],
    strokeWidth: 2
  },
  tooltip: {
    style: {
      background: "rgba(17, 24, 39, 0.95)",
      border: "1px solid rgba(255,255,255,0.1)",
      borderRadius: "8px",
      boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
      padding: "8px 12px",
      fontSize: "12px"
    }
  }
} as const;