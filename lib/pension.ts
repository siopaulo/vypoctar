// Kalkulačka důchodu (orientační)

export interface PensionCalculation {
  estimatedPension: number
  yearsOfWork: number
  averageSalary: number
  contributionRate: number
}

export function calculatePension(
  yearsOfWork: number,
  averageSalary: number,
  contributionRate: number = 28 // 28% z platu jde na důchod
): PensionCalculation {
  // Zjednodušený výpočet - orientační
  const monthlyContribution = (averageSalary * contributionRate) / 100
  const totalContributions = monthlyContribution * 12 * yearsOfWork
  
  // Předpoklad: důchod = cca 40% z průměrného platu po odpracovaných letech
  // Toto je velmi zjednodušený výpočet, skutečný důchod závisí na mnoha faktorech
  const estimatedPension = (averageSalary * yearsOfWork) / 40 // zjednodušený vzorec

  return {
    estimatedPension: round(Math.max(estimatedPension, 0), 2),
    yearsOfWork,
    averageSalary,
    contributionRate,
  }
}

function round(value: number, decimals: number): number {
  return Math.round(value * Math.pow(10, decimals)) / Math.pow(10, decimals)
}

