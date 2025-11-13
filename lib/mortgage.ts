// Kalkulačka hypotéky

export interface MortgageCalculation {
  monthlyPayment: number
  totalPayment: number
  totalInterest: number
  principal: number
  interestRate: number
  years: number
}

export function calculateMortgage(
  principal: number,
  annualRate: number,
  years: number
): MortgageCalculation {
  const monthlyRate = annualRate / 100 / 12
  const numPayments = years * 12

  if (monthlyRate === 0) {
    // Bez úroku
    const monthlyPayment = principal / numPayments
    return {
      monthlyPayment,
      totalPayment: principal,
      totalInterest: 0,
      principal,
      interestRate: annualRate,
      years,
    }
  }

  // Vzorec pro anuitní splátku
  const monthlyPayment =
    principal *
    (monthlyRate * Math.pow(1 + monthlyRate, numPayments)) /
    (Math.pow(1 + monthlyRate, numPayments) - 1)

  const totalPayment = monthlyPayment * numPayments
  const totalInterest = totalPayment - principal

  return {
    monthlyPayment: round(monthlyPayment, 2),
    totalPayment: round(totalPayment, 2),
    totalInterest: round(totalInterest, 2),
    principal,
    interestRate: annualRate,
    years,
  }
}

function round(value: number, decimals: number): number {
  return Math.round(value * Math.pow(10, decimals)) / Math.pow(10, decimals)
}

