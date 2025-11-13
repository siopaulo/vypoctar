// Kalkulačka úroků (jednoduchý a složený úrok)

export interface InterestCalculation {
  simpleInterest: number
  compoundInterest: number
  totalSimple: number
  totalCompound: number
  principal: number
  rate: number
  years: number
}

export function calculateInterest(
  principal: number,
  rate: number,
  years: number,
  compoundFrequency: number = 12 // měsíčně
): InterestCalculation {
  // Jednoduchý úrok
  const simpleInterest = principal * (rate / 100) * years
  const totalSimple = principal + simpleInterest

  // Složený úrok
  const n = compoundFrequency // počet složení za rok
  const compoundInterest =
    principal * Math.pow(1 + rate / 100 / n, n * years) - principal
  const totalCompound = principal + compoundInterest

  return {
    simpleInterest: round(simpleInterest, 2),
    compoundInterest: round(compoundInterest, 2),
    totalSimple: round(totalSimple, 2),
    totalCompound: round(totalCompound, 2),
    principal,
    rate,
    years,
  }
}

function round(value: number, decimals: number): number {
  return Math.round(value * Math.pow(10, decimals)) / Math.pow(10, decimals)
}

