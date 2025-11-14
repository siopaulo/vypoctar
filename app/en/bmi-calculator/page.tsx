'use client'

import { useState } from 'react'
import { calculateBMI, getBMICategory } from '@/lib/bmi'
import { Activity, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import ThemeToggle from '@/components/ThemeToggle'
import AdSlot from '@/components/AdSlot'

export default function BMICalculatorPageEN() {
  const [weight, setWeight] = useState(70)
  const [height, setHeight] = useState(175)
  const [bmi, setBmi] = useState<number | null>(null)
  const [category, setCategory] = useState<ReturnType<typeof getBMICategory> | null>(null)

  const handleCalculate = () => {
    const numWeight = Number(weight)
    const numHeight = Number(height)
    
    if (isNaN(numWeight) || isNaN(numHeight) || numWeight <= 0 || numHeight <= 0) {
      setBmi(null)
      setCategory(null)
      return
    }

    const calculatedBMI = calculateBMI(numWeight, numHeight)
    setBmi(calculatedBMI)
    setCategory(getBMICategory(calculatedBMI))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex flex-col">
      <header className="bg-white dark:bg-gray-800 shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link 
              href="/en" 
              className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium transition-colors group"
            >
              <svg className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to home page
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-grow">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-center mb-6">
            <Activity className="h-8 w-8 text-orange-600 dark:text-orange-400 mr-3" />
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">BMI Calculator</h1>
          </div>

          <p className="text-gray-600 dark:text-gray-300 mb-6">
            BMI (Body Mass Index) is an indicator that helps assess whether your weight is within a normal range.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Weight (kg)
              </label>
              <input
                type="number"
                value={Number.isNaN(weight) ? '' : weight}
                onChange={(e) => {
                  const value = e.target.value
                  setWeight(value === '' ? Number.NaN : Number(value))
                }}
                onKeyPress={(e) => e.key === 'Enter' && handleCalculate()}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700"
                placeholder="e.g. 70"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Height (cm)
              </label>
              <input
                type="number"
                value={Number.isNaN(height) ? '' : height}
                onChange={(e) => {
                  const value = e.target.value
                  setHeight(value === '' ? Number.NaN : Number(value))
                }}
                onKeyPress={(e) => e.key === 'Enter' && handleCalculate()}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700"
                placeholder="e.g. 175"
              />
            </div>
          </div>

          <button
            onClick={handleCalculate}
            className="w-full md:w-auto px-8 py-3 bg-orange-600 text-white rounded-lg font-semibold hover:bg-orange-700 transition-colors flex items-center justify-center"
          >
            Calculate BMI
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>

          {bmi !== null && category && (
            <div className="mt-8 space-y-4">
              <div className="p-6 bg-orange-50 dark:bg-orange-900/20 rounded-lg text-center">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Your BMI:</p>
                <p className="text-5xl font-bold text-orange-700 dark:text-orange-400 mb-4">{bmi.toFixed(1)}</p>
                <div className={`inline-flex flex-col items-center px-4 py-2 rounded-lg shadow-sm text-white ${category.badgeClass}`}>
                  <p className={`font-semibold text-base ${category.labelClass}`}>{category.label}</p>
                  <p className={`text-sm mt-1 ${category.rangeClass}`}>{category.range}</p>
                </div>
              </div>

              <div className="p-6 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <strong>Description:</strong> {category.description}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
                  <strong>Note:</strong> BMI is an indicative indicator. For accurate health assessment,
                  consult a doctor or nutritionist.
                </p>
              </div>

              <div className="p-6 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-lg">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-4">BMI scale:</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <div className="w-20 h-6 bg-blue-500 rounded mr-3"></div>
                    <span className="text-sm text-gray-700 dark:text-gray-300">Below 18.5 - Underweight</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-20 h-6 bg-green-500 rounded mr-3"></div>
                    <span className="text-sm text-gray-700 dark:text-gray-300">18.5 - 24.9 - Normal</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-20 h-6 bg-yellow-500 rounded mr-3"></div>
                    <span className="text-sm text-gray-700 dark:text-gray-300">25.0 - 29.9 - Overweight</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-20 h-6 bg-red-500 rounded mr-3"></div>
                    <span className="text-sm text-gray-700 dark:text-gray-300">30.0 and more - Obesity</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-8 text-center mb-8">
          <p className="text-gray-500 dark:text-gray-400 text-sm mb-2">Advertisement</p>
          <div className="bg-white dark:bg-gray-700 rounded p-4 min-h-[100px] flex items-center justify-center">
            <AdSlot />
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">About BMI Calculator</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            BMI (Body Mass Index) is a simple indicator that helps assess whether your weight relative to height
            is within a normal range. Formula: BMI = weight (kg) / height (m)²
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            <strong>Important:</strong> BMI is an indicative tool and does not account for body composition (muscle vs. fat).
            Always consult a doctor for accurate health assessment.
          </p>
        </div>
      </main>
    </div>
  )
}
