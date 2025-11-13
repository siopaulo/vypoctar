// Převodník měn - používá veřejné API

export interface Currency {
  code: string
  name: string
  symbol: string
}

export const currencies: Currency[] = [
  { code: 'CZK', name: 'Česká koruna', symbol: 'Kč' },
  { code: 'EUR', name: 'Euro', symbol: '€' },
  { code: 'USD', name: 'Americký dolar', symbol: '$' },
  { code: 'GBP', name: 'Britská libra', symbol: '£' },
  { code: 'PLN', name: 'Polský zlotý', symbol: 'zł' },
  { code: 'HUF', name: 'Maďarský forint', symbol: 'Ft' },
  { code: 'CHF', name: 'Švýcarský frank', symbol: 'CHF' },
  { code: 'JPY', name: 'Japonský jen', symbol: '¥' },
]

// ExchangeRateAPI - bezplatné API pro kurzy měn
// Alternativa: exchangerate-api.com nebo fixer.io (s API klíčem)
export async function getExchangeRate(from: string, to: string): Promise<number> {
  try {
    // Používáme exchangerate-api.com - bezplatné, bez API klíče
    const response = await fetch(
      `https://api.exchangerate-api.com/v4/latest/${from}`
    )
    const data = await response.json()
    return data.rates[to] || 1
  } catch (error) {
    console.error('Error fetching exchange rate:', error)
    // Fallback hodnoty (přibližné)
    const fallbackRates: Record<string, Record<string, number>> = {
      CZK: { EUR: 0.04, USD: 0.044, GBP: 0.035, PLN: 0.18 },
      EUR: { CZK: 25, USD: 1.1, GBP: 0.88, PLN: 4.5 },
      USD: { CZK: 23, EUR: 0.91, GBP: 0.8, PLN: 4.1 },
    }
    return fallbackRates[from]?.[to] || 1
  }
}

export function convertCurrency(
  amount: number,
  rate: number
): number {
  return amount * rate
}

