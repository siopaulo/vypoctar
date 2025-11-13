'use client'

import { useState } from 'react'
import { calculateMortgage } from '@/lib/mortgage'
import { Home, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import ThemeToggle from '@/components/ThemeToggle'

export default function MortgageCalculatorPage() {
  const [principal, setPrincipal] = useState('3000000')
  const [rate, setRate] = useState('4.5')
  const [years, setYears] = useState('25')
  const [result, setResult] = useState<ReturnType<typeof calculateMortgage> | null>(null)

  const handleCalculate = () => {
    const numPrincipal = parseFloat(principal)
    const numRate = parseFloat(rate)
    const numYears = parseFloat(years)

    if (isNaN(numPrincipal) || isNaN(numRate) || isNaN(numYears) || 
        numPrincipal <= 0 || numRate < 0 || numYears <= 0) {
      setResult(null)
      return
    }

    const calculation = calculateMortgage(numPrincipal, numRate, numYears)
    setResult(calculation)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex flex-col">
      <header className="bg-white dark:bg-gray-800 shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link 
              href="/" 
              className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium transition-colors group"
            >
              <svg className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Zpět na hlavní stránku
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-grow">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-center mb-6">
            <Home className="h-8 w-8 text-indigo-600 dark:text-indigo-400 mr-3" />
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Hypotéka Kalkulačka</h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Výše úvěru (Kč)
              </label>
              <input
                type="number"
                value={principal}
                onChange={(e) => setPrincipal(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleCalculate()}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700"
                placeholder="3000000"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Úroková sazba (% ročně)
              </label>
              <input
                type="number"
                value={rate}
                onChange={(e) => setRate(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleCalculate()}
                step="0.1"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700"
                placeholder="4.5"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Doba splácení (roky)
              </label>
              <input
                type="number"
                value={years}
                onChange={(e) => setYears(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleCalculate()}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700"
                placeholder="25"
              />
            </div>
          </div>

          <button
            onClick={handleCalculate}
            className="w-full md:w-auto px-8 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition-colors flex items-center justify-center"
          >
            Vypočítat
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>

          {result && (
            <div className="mt-8 space-y-4">
              <div className="p-6 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Měsíční splátka:</p>
                <p className="text-3xl font-bold text-indigo-700 dark:text-indigo-400">
                  {result.monthlyPayment.toLocaleString('cs-CZ', { maximumFractionDigits: 2 })} Kč
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Celková částka:</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">
                    {result.totalPayment.toLocaleString('cs-CZ', { maximumFractionDigits: 2 })} Kč
                  </p>
                </div>
                <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Celkové úroky:</p>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">
                    {result.totalInterest.toLocaleString('cs-CZ', { maximumFractionDigits: 2 })} Kč
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-8 text-center mb-8">
          <p className="text-gray-500 dark:text-gray-400 text-sm mb-2">Reklama</p>
          <div className="bg-white dark:bg-gray-700 rounded p-4 min-h-[100px] flex items-center justify-center">
            <p className="text-gray-400 dark:text-gray-500">Reklamní blok - AdSense</p>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">O hypotéce kalkulačce</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Tato kalkulačka vám pomůže odhadnout měsíční splátku hypotéky. Výpočet je založen na anuitní
            splátce, kde se výše splátky během celé doby splácení nemění.
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            <strong>Poznámka:</strong> Skutečná výše splátky může být ovlivněna dalšími faktory jako jsou
            pojištění, poplatky a další náklady. Pro přesný výpočet kontaktujte svou banku.
          </p>
        </div>
      </main>
    </div>
  )
}

