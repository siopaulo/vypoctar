// DPH kalkulačka pro Českou republiku

export const VAT_RATES = {
  standard: 21, // Standardní sazba DPH
  reduced: 15, // Snížená sazba DPH (potraviny, léky)
  reduced2: 10, // Druhá snížená sazba (některé služby)
}

export interface VATCalculation {
  amountWithoutVAT: number
  vatAmount: number
  amountWithVAT: number
  vatRate: number
}

export function calculateVAT(
  input: number,
  vatRate: number,
  calculationType: 'with' | 'without'
): VATCalculation {
  if (calculationType === 'with') {
    // Cena s DPH -> cena bez DPH
    const amountWithoutVAT = input / (1 + vatRate / 100)
    const vatAmount = input - amountWithoutVAT
    return {
      amountWithoutVAT: round(amountWithoutVAT, 2),
      vatAmount: round(vatAmount, 2),
      amountWithVAT: round(input, 2),
      vatRate,
    }
  } else {
    // Cena bez DPH -> cena s DPH
    const vatAmount = input * (vatRate / 100)
    const amountWithVAT = input + vatAmount
    return {
      amountWithoutVAT: round(input, 2),
      vatAmount: round(vatAmount, 2),
      amountWithVAT: round(amountWithVAT, 2),
      vatRate,
    }
  }
}

function round(value: number, decimals: number): number {
  return Math.round(value * Math.pow(10, decimals)) / Math.pow(10, decimals)
}

