'use client'

import { useState } from 'react'
import { calculatePension } from '@/lib/pension'
import { PiggyBank, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import ThemeToggle from '@/components/ThemeToggle'

export default function PensionCalculatorPageEN() {
  const [yearsOfWork, setYearsOfWork] = useState('40')
  const [averageSalary, setAverageSalary] = useState('35000')
  const [result, setResult] = useState<ReturnType<typeof calculatePension> | null>(null)

  const handleCalculate = () => {
    const numYears = parseFloat(yearsOfWork)
    const numSalary = parseFloat(averageSalary)

    if (isNaN(numYears) || isNaN(numSalary) || numYears <= 0 || numSalary <= 0) {
      setResult(null)
      return
    }

    const calculation = calculatePension(numYears, numSalary)
    setResult(calculation)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex flex-col">
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
            <PiggyBank className="h-8 w-8 text-teal-600 dark:text-teal-400 mr-3" />
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Pension Calculator</h1>
          </div>

          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Estimated pension calculation. The actual pension depends on many factors and may vary.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Years of work
              </label>
              <input
                type="number"
                value={yearsOfWork}
                onChange={(e) => setYearsOfWork(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleCalculate()}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700"
                placeholder="40"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Average monthly salary (CZK)
              </label>
              <input
                type="number"
                value={averageSalary}
                onChange={(e) => setAverageSalary(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleCalculate()}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700"
                placeholder="35000"
              />
            </div>
          </div>

          <button
            onClick={handleCalculate}
            className="w-full md:w-auto px-8 py-3 bg-teal-600 text-white rounded-lg font-semibold hover:bg-teal-700 transition-colors flex items-center justify-center"
          >
            Calculate
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>

          {result && (
            <div className="mt-8 space-y-4">
              <div className="p-6 bg-teal-50 dark:bg-teal-900/20 rounded-lg">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Estimated monthly pension:</p>
                <p className="text-3xl font-bold text-teal-700 dark:text-teal-400">
                  {result.estimatedPension.toLocaleString('en-US', { maximumFractionDigits: 2 })} CZK
                </p>
              </div>
              <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  <strong>Note:</strong> This is only an estimated calculation. The actual pension depends on
                  many factors including contribution amounts, retirement age and other conditions.
                  For an accurate calculation, contact the Czech Social Security Administration.
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
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">About Pension Calculator</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            This calculator provides only an estimated pension amount. The actual pension is calculated by
            the Czech Social Security Administration based on many factors.
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            <strong>Important:</strong> For an accurate pension calculation, contact the CSSA or use the
            official calculator on their website.
          </p>
        </div>
      </main>
    </div>
  )
}

