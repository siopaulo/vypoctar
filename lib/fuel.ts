// Kalkulačka spotřeby paliva

export interface FuelCalculation {
  fuelNeeded: number
  cost: number
  distance: number
  consumption: number
  pricePerLiter: number
}

export function calculateFuel(
  distance: number,
  consumption: number,
  pricePerLiter: number
): FuelCalculation {
  const fuelNeeded = (distance / 100) * consumption
  const cost = fuelNeeded * pricePerLiter

  return {
    fuelNeeded: round(fuelNeeded, 2),
    cost: round(cost, 2),
    distance,
    consumption,
    pricePerLiter,
  }
}

function round(value: number, decimals: number): number {
  return Math.round(value * Math.pow(10, decimals)) / Math.pow(10, decimals)
}

