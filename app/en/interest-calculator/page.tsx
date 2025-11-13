'use client'

import { useState } from 'react'
import { calculateInterest } from '@/lib/interest'
import { TrendingUp, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import ThemeToggle from '@/components/ThemeToggle'

export default function InterestCalculatorPageEN() {
  const [principal, setPrincipal] = useState('100000')
  const [rate, setRate] = useState('5')
  const [years, setYears] = useState('10')
  const [result, setResult] = useState<ReturnType<typeof calculateInterest> | null>(null)

  const handleCalculate = () => {
    const numPrincipal = parseFloat(principal)
    const numRate = parseFloat(rate)
    const numYears = parseFloat(years)

    if (isNaN(numPrincipal) || isNaN(numRate) || isNaN(numYears) || 
        numPrincipal <= 0 || numRate < 0 || numYears <= 0) {
      setResult(null)
      return
    }

    const calculation = calculateInterest(numPrincipal, numRate, numYears)
    setResult(calculation)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-white to-amber-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex flex-col">
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
            <TrendingUp className="h-8 w-8 text-yellow-600 dark:text-yellow-400 mr-3" />
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Interest Calculator</h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Initial amount (CZK)
              </label>
              <input
                type="number"
                value={principal}
                onChange={(e) => setPrincipal(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleCalculate()}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700"
                placeholder="100000"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Interest rate (% per year)
              </label>
              <input
                type="number"
                value={rate}
                onChange={(e) => setRate(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleCalculate()}
                step="0.1"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700"
                placeholder="5"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Number of years
              </label>
              <input
                type="number"
                value={years}
                onChange={(e) => setYears(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleCalculate()}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700"
                placeholder="10"
              />
            </div>
          </div>

          <button
            onClick={handleCalculate}
            className="w-full md:w-auto px-8 py-3 bg-yellow-600 text-white rounded-lg font-semibold hover:bg-yellow-700 transition-colors flex items-center justify-center"
          >
            Calculate
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>

          {result && (
            <div className="mt-8 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Simple interest:</p>
                  <p className="text-2xl font-bold text-yellow-700 dark:text-yellow-400 mb-1">
                    {result.simpleInterest.toLocaleString('en-US', { maximumFractionDigits: 2 })} CZK
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Total: {result.totalSimple.toLocaleString('en-US', { maximumFractionDigits: 2 })} CZK
                  </p>
                </div>
                <div className="p-6 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg">
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Compound interest:</p>
                  <p className="text-2xl font-bold text-yellow-800 dark:text-yellow-300 mb-1">
                    {result.compoundInterest.toLocaleString('en-US', { maximumFractionDigits: 2 })} CZK
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Total: {result.totalCompound.toLocaleString('en-US', { maximumFractionDigits: 2 })} CZK
                  </p>
                </div>
              </div>
              <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  <strong>Difference:</strong> Compound interest is higher by{' '}
                  {(result.compoundInterest - result.simpleInterest).toLocaleString('en-US', { maximumFractionDigits: 2 })} CZK
                </p>
              </div>
            </div>
          )}
        </div>

        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-8 text-center mb-8">
          <p className="text-gray-500 dark:text-gray-400 text-sm mb-2">Advertisement</p>
          <div className="bg-white dark:bg-gray-700 rounded p-4 min-h-[100px] flex items-center justify-center">
            <p className="text-gray-400 dark:text-gray-500">Ad block - AdSense</p>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">About Interest Calculator</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            This calculator compares simple and compound interest. Simple interest is calculated only on the original
            amount, while compound interest is calculated on the amount including previously accrued interest.
          </p>
          <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
            <p><strong>Simple interest:</strong> Interest = P × r × t</p>
            <p><strong>Compound interest:</strong> Interest = P × (1 + r/n)^(n×t) - P</p>
            <p className="text-gray-500 dark:text-gray-400 mt-2">
              Where P = principal amount, r = interest rate, t = time, n = compounding frequency (12 = monthly)
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}

