"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface SuggestedNumbersProps {
  combinations: number[][];
  onSelect: (numbers: number[]) => void;
  translations: any;
}

export function SuggestedNumbers({ combinations, onSelect, translations: t }: SuggestedNumbersProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">{t.suggestedCombinations}</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {combinations.map((combination, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            <Card 
              className="p-3 bg-white/5 border-white/10 hover:bg-white/10 transition-all cursor-pointer"
              onClick={() => onSelect(combination)}
            >
              <div className="flex justify-between items-center">
                <div className="flex flex-wrap gap-2">
                  {combination.map((num, i) => (
                    <div
                      key={i}
                      className="w-7 h-7 rounded-full bg-blue-600/20 flex items-center justify-center text-sm font-medium"
                    >
                      {num}
                    </div>
                  ))}
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-blue-400 hover:text-blue-300 hidden sm:flex"
                >
                  {t.use}
                </Button>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}