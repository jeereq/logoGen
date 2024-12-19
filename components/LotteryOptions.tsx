"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LotteryOption } from "@/lib/lottery-options";

interface LotteryOptionsProps {
  options: LotteryOption[];
  selectedOption: LotteryOption | null;
  onSelect: (option: LotteryOption) => void;
  translations: any;
}

export function LotteryOptions({ options, selectedOption, onSelect, translations: t }: LotteryOptionsProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
      {options.map((option, index) => (
        <motion.div
          key={option?.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <Card
            className={`p-4 cursor-pointer transition-all ${
              selectedOption?.id === option?.id
                ? "bg-blue-600/20 border-blue-500/50"
                : "bg-white/5 border-white/10 hover:bg-white/10"
            }`}
            onClick={() => onSelect(option)}
          >
            <div className="flex flex-col h-full">
              <h3 className="text-lg font-semibold mb-1">{option?.name}</h3>
              <p className="text-sm text-white/60 mb-3">{option?.description}</p>
              <div className="mt-auto flex justify-between items-center">
                <span className="text-sm font-medium">
                  {option?.defaultCount}/{option?.maxNumber}
                </span>
                <Button
                  variant={selectedOption?.id === option?.id ? "default" : "outline"}
                  size="sm"
                  className={selectedOption?.id === option?.id 
                    ? "bg-blue-600/80 hover:bg-blue-700/80"
                    : "bg-white/5 border-white/10"}
                >
                  {selectedOption?.id === option?.id ? t.selected : t.select}
                </Button>
              </div>
            </div>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}