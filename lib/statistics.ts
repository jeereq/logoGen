import { Draw } from "@/types/lottery";

export interface StatisticsData {
  totalBets: number;
  totalGains: number;
  winRate: number;
  numberFrequency: Array<{ number: number; frequency: number }>;
  profitOverTime: Array<{ index: number; profit: number }>;
}

export function calculateStatistics(history: Draw[]): StatisticsData {
  // Calculate basic metrics
  const totalBets = history.reduce((sum, draw) => sum + draw.bet, 0);
  const totalGains = history.reduce((sum, draw) => sum + (draw.gain || 0), 0);
  const winCount = history.filter(draw => (draw.gain || 0) > draw.bet).length;
  const winRate = history.length > 0
    ? Number((winCount / history.length * 100).toFixed(1))
    : 0;

  // Calculate number frequency
  const frequencyMap = new Map<number, number>();
  history.forEach(draw => {
    draw.numbers.forEach(num => {
      frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
    });
  });

  const numberFrequency = Array.from(frequencyMap.entries())
    .map(([number, frequency]) => ({ number, frequency }))
    .sort((a, b) => a.number - b.number);

  // Calculate cumulative profit over time
  const profitOverTime = history.reduce<Array<{ index: number; profit: number }>>(
    (acc, draw, index) => {
      const previousProfit = index > 0 ? acc[index - 1].profit : 0;
      const currentProfit = (draw.gain || 0) - draw.bet;
      acc.push({
        index,
        profit: previousProfit + currentProfit
      });
      return acc;
    }, 
    []
  );

  return {
    totalBets,
    totalGains,
    winRate,
    numberFrequency,
    profitOverTime
  };
}