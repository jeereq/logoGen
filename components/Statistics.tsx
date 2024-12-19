"use client";

import { Card } from "@/components/ui/card";
import { Language } from "@/lib/i18n";
import { Draw } from "@/types/lottery";
import { motion } from "framer-motion";
import { TrendingUp, TrendingDown, Percent } from "lucide-react";
import { BarChart } from "@/components/charts/BarChart";
import { LineChart } from "@/components/charts/LineChart";
import { calculateStatistics } from "@/lib/statistics";

interface StatisticsProps {
  history: Draw[];
  language: Language;
  translations: any;
}

export function Statistics({ history, language, translations: t }: StatisticsProps) {
  const {
    totalBets,
    totalGains,
    winRate,
    numberFrequency,
    profitOverTime
  } = calculateStatistics(history);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Card className="p-6 bg-white/5 hover:bg-white/10 transition-colors">
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-medium text-white/60">{t.totalBets}</h4>
              <TrendingDown className="h-4 w-4 text-red-400" />
            </div>
            <p className="text-2xl font-bold mt-2">{language.currencyFormat(totalBets)}</p>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="p-6 bg-white/5 hover:bg-white/10 transition-colors">
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-medium text-white/60">{t.totalGains}</h4>
              <TrendingUp className="h-4 w-4 text-green-400" />
            </div>
            <p className="text-2xl font-bold mt-2">{language.currencyFormat(totalGains)}</p>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Card className="p-6 bg-white/5 hover:bg-white/10 transition-colors">
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-medium text-white/60">{t.winRate}</h4>
              <Percent className="h-4 w-4 text-blue-400" />
            </div>
            <p className="text-2xl font-bold mt-2">{winRate}%</p>
          </Card>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4 }}
      >
        <Card className="p-6 bg-white/5 hover:bg-white/10 transition-colors">
          <h4 className="text-sm font-medium text-white/60 mb-4">{t.numberFrequency}</h4>
          <BarChart
            data={numberFrequency}
            dataKey="frequency"
            xAxisKey="number"
            height={300}
          />
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
      >
        <Card className="p-6 bg-white/5 hover:bg-white/10 transition-colors">
          <h4 className="text-sm font-medium text-white/60 mb-4">{t.profitOverTime}</h4>
          <LineChart
            data={profitOverTime}
            dataKey="profit"
            xAxisKey="index"
            height={300}
          />
        </Card>
      </motion.div>
    </div>
  );
}