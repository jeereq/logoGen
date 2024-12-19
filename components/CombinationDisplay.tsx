"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion, AnimatePresence } from "framer-motion";
import { generateRandomCombinations } from "@/lib/lottery-options";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CombinationDisplayProps {
  maxNumber: number;
  count: number;
  translations: any;
}

export function CombinationDisplay({
  maxNumber,
  count,
  translations: t
}: CombinationDisplayProps) {
  const [page, setPage] = useState(0);
  const pageSize = 10;
  const combinations = generateRandomCombinations(maxNumber, count, 100);
  const totalPages = Math.ceil(combinations.length / pageSize);
  
  const currentCombinations = combinations.slice(
    page * pageSize,
    (page + 1) * pageSize
  );

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">
          {t.availableCombinations} (100)
        </h3>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setPage(p => Math.max(0, p - 1))}
            disabled={page === 0}
            className="bg-white/5 border-white/10"
          >
            <ChevronLeft className="h-4 w-4 mr-1" />
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
            <ChevronRight className="h-4 w-4 ml-1" />
          </Button>
        </div>
      </div>

      <ScrollArea className="h-[600px] pr-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <AnimatePresence mode="popLayout">
            {currentCombinations.map((combination, index) => (
              <motion.div
                key={combination.join("-")}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="p-4 bg-white/5 border-white/10 hover:bg-white/10 transition-all">
                  <div className="flex flex-col space-y-2">
                    <div className="text-sm text-white/60">
                      Combinaison #{page * pageSize + index + 1}
                    </div>
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