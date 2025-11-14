'use client'

import { useState } from 'react'
import { calculateFuel } from '@/lib/fuel'
import { Fuel, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import ThemeToggle from '@/components/ThemeToggle'
import AdSlot from '@/components/AdSlot'

export default function FuelCalculatorPageEN() {
  const [distance, setDistance] = useState('100')
  const [consumption, setConsumption] = useState('7.5')
  const [pricePerLiter, setPricePerLiter] = useState('38.5')
  const [result, setResult] = useState<ReturnType<typeof calculateFuel> | null>(null)

  const handleCalculate = () => {
    const numDistance = parseFloat(distance)
    const numConsumption = parseFloat(consumption)
    const numPrice = parseFloat(pricePerLiter)

    if (isNaN(numDistance) || isNaN(numConsumption) || isNaN(numPrice) || 
        numDistance <= 0 || numConsumption <= 0 || numPrice <= 0) {
      setResult(null)
      return
    }

    const calculation = calculateFuel(numDistance, numConsumption, numPrice)
    setResult(calculation)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-orange-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex flex-col">
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
            <Fuel className="h-8 w-8 text-red-600 dark:text-red-400 mr-3" />
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Fuel Consumption</h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Distance (km)
              </label>
              <input
                type="number"
                value={distance}
                onChange={(e) => setDistance(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleCalculate()}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700"
                placeholder="100"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Consumption (l/100km)
              </label>
              <input
                type="number"
                value={consumption}
                onChange={(e) => setConsumption(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleCalculate()}
                step="0.1"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700"
                placeholder="7.5"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Price per liter (CZK)
              </label>
              <input
                type="number"
                value={pricePerLiter}
                onChange={(e) => setPricePerLiter(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleCalculate()}
                step="0.1"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700"
                placeholder="38.5"
              />
            </div>
          </div>

          <button
            onClick={handleCalculate}
            className="w-full md:w-auto px-8 py-3 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-colors flex items-center justify-center"
          >
            Calculate
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>

          {result && (
            <div className="mt-8 space-y-4">
              <div className="p-6 bg-red-50 dark:bg-red-900/20 rounded-lg">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Fuel needed:</p>
                <p className="text-3xl font-bold text-red-700 dark:text-red-400">
                  {result.fuelNeeded.toLocaleString('en-US', { maximumFractionDigits: 2 })} l
                </p>
              </div>
              <div className="p-6 bg-red-100 dark:bg-red-900/30 rounded-lg">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Total cost:</p>
                <p className="text-3xl font-bold text-red-800 dark:text-red-300">
                  {result.cost.toLocaleString('en-US', { maximumFractionDigits: 2 })} CZK
                </p>
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
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">About Fuel Consumption Calculator</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            This calculator helps you calculate how much fuel you will need for a certain distance
            and what the total fuel costs will be.
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            <strong>Tip:</strong> Actual consumption may be affected by driving style, road conditions,
            weather and other factors.
          </p>
        </div>
      </main>
    </div>
  )
}
