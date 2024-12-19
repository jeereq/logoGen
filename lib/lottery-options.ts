import { generateCombinations, generateRandomCombinations } from './combinations';

export interface LotteryOption {
  id: string;
  name: string;
  defaultCount?: any;
  maxNumber: number;
  minCount: number;
  maxCount: number;
  description: string;
}

export const lotteryOptions: LotteryOption[] = [
  {
    id: "lotto-50",
    name: "Lotto 1-50",
    maxNumber: 50,
    minCount: 6,
    maxCount: 10,
    description: "Plage étendue de 1 à 50"
  },
  {
    id: "lotto-49",
    name: "Lotto 1-49",
    maxNumber: 49,
    minCount: 6,
    maxCount: 10,
    description: "Format classique 1-49"
  },
  {
    id: "lotto-40",
    name: "Lotto 1-40",
    maxNumber: 40,
    minCount: 6,
    maxCount: 10,
    description: "Plage moyenne 1-40"
  },
  {
    id: "lotto-28",
    name: "Lotto 1-28",
    maxNumber: 28,
    minCount: 6,
    maxCount: 10,
    description: "Plage compacte 1-28"
  }
];

export { generateCombinations, generateRandomCombinations };