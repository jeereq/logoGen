"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Language, languages, translations } from "@/lib/i18n";
import { lotteryOptions } from "@/lib/lottery-options";
import { CombinationDisplay } from "@/components/CombinationDisplay";
import { LotteryOptions } from "@/components/LotteryOptions";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";

export default function CombinationsPage() {
  const [selectedOption, setSelectedOption] = useState(lotteryOptions[0]);
  const [numberCount, setNumberCount] = useState(selectedOption.minCount);
  const [language, setLanguage] = useState<Language>(languages[0]);
  const t = translations[language.code];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white p-4 pb-20">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center text-white/80 hover:text-white">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Retour
          </Link>
          <h1 className="text-3xl font-bold">{t.availableCombinations}</h1>
          <div className="w-20" />
        </div>

        <Card className="p-6 bg-white/5 backdrop-blur-xl border-white/10">
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-4">{t.lotteryType}</h2>
              <LotteryOptions
                options={lotteryOptions}
                selectedOption={selectedOption}
                onSelect={setSelectedOption}
                translations={t}
              />
            </div>

            <div>
              <Label>{t.numberCount}</Label>
              <div className="pt-2">
                <Slider
                  min={selectedOption.minCount}
                  max={selectedOption.maxCount}
                  step={1}
                  value={[numberCount]}
                  onValueChange={(value) => setNumberCount(value[0])}
                  className="mb-2"
                />
                <div className="flex justify-between text-sm text-white/60">
                  <span>{selectedOption.minCount}</span>
                  <span>{numberCount}</span>
                  <span>{selectedOption.maxCount}</span>
                </div>
              </div>
            </div>
          </div>
        </Card>

        <Card className="p-6 bg-white/5 backdrop-blur-xl border-white/10">
          <CombinationDisplay
            maxNumber={selectedOption.maxNumber}
            count={numberCount}
            translations={t}
          />
        </Card>
      </div>
    </div>
  );
}