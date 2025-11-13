// Převodníky jednotek

export type UnitCategory = 'length' | 'weight' | 'volume' | 'area' | 'temperature'

export interface Unit {
  name: string
  symbol: string
  toBase: number // převod na základní jednotku
}

export const units: Record<UnitCategory, Unit[]> = {
  length: [
    { name: 'Milimetr', symbol: 'mm', toBase: 0.001 },
    { name: 'Centimetr', symbol: 'cm', toBase: 0.01 },
    { name: 'Metr', symbol: 'm', toBase: 1 },
    { name: 'Kilometr', symbol: 'km', toBase: 1000 },
    { name: 'Palec', symbol: 'in', toBase: 0.0254 },
    { name: 'Stopa', symbol: 'ft', toBase: 0.3048 },
    { name: 'Yard', symbol: 'yd', toBase: 0.9144 },
    { name: 'Míle', symbol: 'mi', toBase: 1609.344 },
  ],
  weight: [
    { name: 'Gram', symbol: 'g', toBase: 0.001 },
    { name: 'Kilogram', symbol: 'kg', toBase: 1 },
    { name: 'Tuna', symbol: 't', toBase: 1000 },
    { name: 'Unce', symbol: 'oz', toBase: 0.0283495 },
    { name: 'Libra', symbol: 'lb', toBase: 0.453592 },
  ],
  volume: [
    { name: 'Mililitr', symbol: 'ml', toBase: 0.001 },
    { name: 'Litr', symbol: 'l', toBase: 1 },
    { name: 'Kubický metr', symbol: 'm³', toBase: 1000 },
    { name: 'Galon (US)', symbol: 'gal', toBase: 3.78541 },
    { name: 'Pinta (US)', symbol: 'pt', toBase: 0.473176 },
  ],
  area: [
    { name: 'Čtvereční metr', symbol: 'm²', toBase: 1 },
    { name: 'Čtvereční kilometr', symbol: 'km²', toBase: 1000000 },
    { name: 'Hektar', symbol: 'ha', toBase: 10000 },
    { name: 'Akr', symbol: 'ac', toBase: 4046.86 },
    { name: 'Čtvereční stopa', symbol: 'ft²', toBase: 0.092903 },
  ],
  temperature: [
    { name: 'Celsius', symbol: '°C', toBase: 1 },
    { name: 'Fahrenheit', symbol: '°F', toBase: 1 },
    { name: 'Kelvin', symbol: 'K', toBase: 1 },
  ],
}

export function convertUnit(
  value: number,
  fromUnit: Unit,
  toUnit: Unit,
  category: UnitCategory
): number {
  if (category === 'temperature') {
    return convertTemperature(value, fromUnit.symbol, toUnit.symbol)
  }

  // Převod na základní jednotku a pak na cílovou
  const baseValue = value * fromUnit.toBase
  return baseValue / toUnit.toBase
}

function convertTemperature(value: number, from: string, to: string): number {
  if (from === to) return value

  // Převod na Celsius
  let celsius = value
  if (from === '°F') {
    celsius = (value - 32) * (5 / 9)
  } else if (from === 'K') {
    celsius = value - 273.15
  }

  // Převod z Celsius
  if (to === '°F') {
    return celsius * (9 / 5) + 32
  } else if (to === 'K') {
    return celsius + 273.15
  }

  return celsius
}

