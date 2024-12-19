"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Language } from "@/lib/i18n";
import { Draw } from "@/types/lottery";
import { motion, AnimatePresence } from "framer-motion";
import { LotteryOptions } from "@/components/LotteryOptions";
import { CombinationSelector } from "@/components/CombinationSelector";
import { ScrollArea } from "@/components/ui/scroll-area";
import { DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { lotteryOptions, LotteryOption, generateRandomCombinations } from "@/lib/lottery-options";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface LotteryFormProps {
  language: Language;
  translations: any;
  onSuccess: (draw: Draw) => void;
  setCurrentNumbers: (numbers: number[]) => void;
}

export function LotteryForm({
  language,
  translations: t,
  onSuccess,
  setCurrentNumbers
}: LotteryFormProps) {
  const [selectedOption, setSelectedOption] = useState<LotteryOption | null>(null);
  const [numberCount, setNumberCount] = useState(6);
  const [bet, setBet] = useState(2);
  const [useCustomNumbers, setUseCustomNumbers] = useState(false);
  const [customNumbers, setCustomNumbers] = useState("");
  const [generating, setGenerating] = useState(false);
  const [showAllCombinations, setShowAllCombinations] = useState(false);
  const [randomCombinations, setRandomCombinations] = useState<number[][]>([]);

  useEffect(() => {
    if (selectedOption) {
      setNumberCount(selectedOption.minCount);
      generateNewRandomCombinations();
    }
  }, [selectedOption]);

  const generateNewRandomCombinations = () => {
    if (selectedOption) {
      const combinations = generateRandomCombinations(
        selectedOption.maxNumber,
        numberCount,
        15
      );
      setRandomCombinations(combinations);
    }
  };

  const handleCombinationSelect = (combination: number[]) => {
    setCustomNumbers(combination.join(", "));
    setUseCustomNumbers(true);
  };

  const generateNumbers = () => {
    if (!selectedOption) return;

    setGenerating(true);
    setCurrentNumbers([]);

    let numbers: number[];
    if (useCustomNumbers) {
      numbers = Array.from(new Set(
        customNumbers.split(",")
          .map(n => parseInt(n.trim()))
          .filter(n => !isNaN(n) && n > 0 && n <= selectedOption.maxNumber)
      )).slice(0, numberCount);
    } else {
      numbers = [];
      while (numbers.length < numberCount) {
        const num = Math.floor(Math.random() * selectedOption.maxNumber) + 1;
        if (!numbers.includes(num)) {
          numbers.push(num);
        }
      }
    }

    numbers.sort((a, b) => a - b);

    const animateNumbers = async () => {
      for (let i = 0; i < numbers.length; i++) {
        await new Promise(resolve => setTimeout(resolve, 500));
        setCurrentNumbers(numbers.slice(0, i + 1));
      }
      setGenerating(false);

      const draw: Draw = {
        numbers,
        date: new Date().toISOString(),
        bet,
        gain: null
      };
      onSuccess(draw);
    };

    animateNumbers();
  };

  return (
    <>
      <DialogHeader>
        <DialogTitle>{t.generate}</DialogTitle>
      </DialogHeader>
      
      <ScrollArea className="h-[80vh] md:h-[70vh] px-4">
        <form onSubmit={(e) => {
          e.preventDefault();
          generateNumbers();
        }} className="space-y-6">
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">{t.lotteryType}</h2>
            <LotteryOptions
              options={lotteryOptions}
              selectedOption={selectedOption}
              onSelect={setSelectedOption}
              translations={t}
            />
          </div>

          {selectedOption && (
            <>
              <div className="space-y-4">
                <div>
                  <Label>{t.numberCount}</Label>
                  <div className="pt-2">
                    <Slider
                      min={selectedOption.minCount}
                      max={selectedOption.maxCount}
                      step={1}
                      value={[numberCount]}
                      onValueChange={(value) => {
                        setNumberCount(value[0]);
                        generateNewRandomCombinations();
                      }}
                      className="mb-2"
                    />
                    <div className="flex justify-between text-sm text-white/60">
                      <span>{selectedOption.minCount}</span>
                      <span>{numberCount}</span>
                      <span>{selectedOption.maxCount}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>{t.bet}</Label>
                  <div className="relative">
                    <Input
                      type="number"
                      min="1"
                      step="0.1"
                      value={bet}
                      onChange={(e) => setBet(parseFloat(e.target.value))}
                      className="bg-white/5 border-white/10 pl-8"
                    />
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-white/60">
                      {language.symbol}
                    </span>
                  </div>
                </div>
              </div>

              <Tabs defaultValue="random" className="w-full">
                <TabsList className="grid w-full">
                  <TabsTrigger value="random">{t.randomCombinations}</TabsTrigger>
                </TabsList>
                <TabsContent value="random" className="mt-4">
                  <div className="space-y-4">
                    {randomCombinations.map((combination, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="p-3 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-all cursor-pointer"
                        onClick={() => handleCombinationSelect(combination)}
                      >
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
                      </motion.div>
                    ))}
                    <Button
                      type="button"
                      variant="outline"
                      onClick={generateNewRandomCombinations}
                      className="w-full mt-4"
                    >
                      {t.generateCombinations}
                    </Button>
                  </div>
                </TabsContent>
                <TabsContent value="all" className="mt-4">
                  <CombinationSelector
                    maxNumber={selectedOption.maxNumber}
                    count={numberCount}
                    onSelect={handleCombinationSelect}
                    translations={t}
                  />
                </TabsContent>
              </Tabs>

              <div className="flex items-center space-x-2 py-2">
                <Switch
                  id="custom-numbers"
                  checked={useCustomNumbers}
                  onCheckedChange={setUseCustomNumbers}
                />
                <Label htmlFor="custom-numbers" className="cursor-pointer">
                  {t.useCustomNumbers}
                </Label>
              </div>

              <AnimatePresence>
                {useCustomNumbers && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="space-y-2 overflow-hidden"
                  >
                    <Label>{t.customNumbers}</Label>
                    <Input
                      placeholder="1, 2, 3, 4, 5, 6"
                      value={customNumbers}
                      onChange={(e) => setCustomNumbers(e.target.value)}
                      className="bg-white/5 border-white/10"
                    />
                    <p className="text-sm text-white/60">{t.duplicateWarning}</p>
                  </motion.div>
                )}
              </AnimatePresence>

              <Button
                type="submit"
                disabled={generating}
                className="w-full bg-blue-600/80 hover:bg-blue-700/80 mt-8"
              >
                {generating ? t.generating : t.generate}
              </Button>
            </>
          )}
        </form>
      </ScrollArea>
    </>
  );
}