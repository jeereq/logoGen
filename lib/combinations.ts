// Utility functions for generating and managing combinations
export function generateCombinations(maxNumber: number, count: number): number[][] {
  const combinations: number[][] = [];
  const numbers = Array.from({ length: maxNumber }, (_, i) => i + 1);

  function backtrack(start: number, current: number[]) {
    if (current.length === count) {
      combinations.push([...current]);
      return;
    }

    for (let i = start; i <= maxNumber; i++) {
      current.push(i);
      backtrack(i + 1, current);
      current.pop();
    }
  }

  backtrack(1, []);
  return combinations;
}

export function generateRandomCombinations(maxNumber: number, count: number, numCombinations: number = 100): number[][] {
  const combinations: number[][] = [];
  const allNumbers = Array.from({ length: maxNumber }, (_, i) => i + 1);

  while (combinations.length < numCombinations) {
    const combination: any[] = [];
    const availableNumbers = [...allNumbers];

    while (combination.length < count) {
      const randomIndex = Math.floor(Math.random() * availableNumbers.length);
      combination.push(availableNumbers[randomIndex]);
      availableNumbers.splice(randomIndex, 1);
    }

    combination.sort((a, b) => a - b);

    if (!combinations.some(existing =>
      existing.length === combination.length &&
      existing.every((num, i) => num === combination[i])
    )) {
      combinations.push(combination);
    }
  }

  return combinations;
}