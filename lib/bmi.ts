// BMI kalkulačka

export interface BMICategory {
  range: string
  label: string
  description: string
  badgeClass: string
  labelClass: string
  rangeClass: string
}

export const bmiCategories: BMICategory[] = [
  {
    range: 'Pod 18.5',
    label: 'Podváha',
    description: 'Máte podváhu. Zvažte konzultaci s lékařem.',
    badgeClass: 'bg-blue-500',
    labelClass: 'text-white',
    rangeClass: 'text-white/80',
  },
  {
    range: '18.5 - 24.9',
    label: 'Normální',
    description: 'Vaše hmotnost je v normálním rozmezí.',
    badgeClass: 'bg-green-500',
    labelClass: 'text-white',
    rangeClass: 'text-white/80',
  },
  {
    range: '25.0 - 29.9',
    label: 'Nadváha',
    description: 'Máte mírnou nadváhu. Zvažte změnu životního stylu.',
    badgeClass: 'bg-yellow-500',
    labelClass: 'text-white',
    rangeClass: 'text-white/80',
  },
  {
    range: '30.0 a více',
    label: 'Obezita',
    description: 'Máte obezitu. Doporučujeme konzultaci s lékařem.',
    badgeClass: 'bg-red-500',
    labelClass: 'text-white',
    rangeClass: 'text-white/80',
  },
]


export function calculateBMI(weight: number, height: number): number {
  // BMI = hmotnost (kg) / výška (m)²
  const heightInMeters = height / 100
  return weight / (heightInMeters * heightInMeters)
}

export function getBMICategory(bmi: number): BMICategory {
  if (bmi < 18.5) {
    return bmiCategories[0]
  } else if (bmi < 25) {
    return bmiCategories[1]
  } else if (bmi < 30) {
    return bmiCategories[2]
  } else {
    return bmiCategories[3]
  }
}

