"use client";

import { useState, useCallback } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion, AnimatePresence } from "framer-motion";
import { generateCombinations } from "@/lib/combinations";

interface CombinationSelectorProps {
  maxNumber: number;
  count: number;
  onSelect: (combination: number[]) => void;
  translations: any;
}

export function CombinationSelector({
  maxNumber,
  count,
  onSelect,
  translations: t
}: CombinationSelectorProps) {
  const [page, setPage] = useState(0);
  const pageSize = 10;
  
  const getCombinations = useCallback(() => {
    return generateCombinations(maxNumber, count);
  }, [maxNumber, count]);
  
  const combinations = getCombinations();
  const totalPages = Math.ceil(combinations.length / pageSize);
  
  const currentCombinations = combinations.slice(
    page * pageSize,
    (page + 1) * pageSize
  );

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">
          {t.availableCombinations} ({combinations.length})
        </h3>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setPage(p => Math.max(0, p - 1))}
            disabled={page === 0}
            className="bg-white/5 border-white/10"
          >
            {t.previous}
          </Button>
          <span className="px-3 py-1 bg-white/10 rounded-md text-sm">
            {page + 1} / {totalPages}
          </span>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setPage(p => Math.min(totalPages - 1, p + 1))}
            disabled={page === totalPages - 1}
            className="bg-white/5 border-white/10"
          >
            {t.next}
          </Button>
        </div>
      </div>

      <ScrollArea className="h-[400px]">
        <div className="grid grid-cols-1 gap-2">
          <AnimatePresence mode="popLayout">
            {currentCombinations.map((combination, index) => (
              <motion.div
                key={combination.join("-")}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
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
                          className="w-8 h-8 rounded-full bg-blue-600/20 flex items-center justify-center text-sm font-medium"
                        >
                          {num}
                        </div>
                      ))}
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-blue-400 hover:text-blue-300"
                    >
                      {t.select}
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </ScrollArea>
    </div>
  );
}