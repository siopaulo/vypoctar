'use client'

import { useState } from 'react'
import { VAT_RATES, calculateVAT, type VATCalculation } from '@/lib/vat'
import { Percent, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import ThemeToggle from '@/components/ThemeToggle'

export default function VATCalculatorPage() {
  const [vatRate, setVatRate] = useState(VAT_RATES.standard)
  const [customRate, setCustomRate] = useState('')
  const [useCustom, setUseCustom] = useState(false)
  const [calculationType, setCalculationType] = useState<'with' | 'without'>('without')
  const [amount, setAmount] = useState('1000')
  const [result, setResult] = useState<VATCalculation | null>(null)

  const getCurrentVatRate = () => {
    if (useCustom && customRate) {
      const rate = parseFloat(customRate)
      return isNaN(rate) || rate < 0 ? VAT_RATES.standard : rate
    }
    return vatRate
  }

  const handleCalculate = () => {
    const numAmount = parseFloat(amount)
    if (isNaN(numAmount) || numAmount <= 0) {
      setResult(null)
      return
    }
    const currentRate = getCurrentVatRate()
    const calculation = calculateVAT(numAmount, currentRate, calculationType)
    setResult(calculation)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex flex-col">
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
            <Percent className="h-8 w-8 text-purple-600 dark:text-purple-400 mr-3" />
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">DPH Kalkulačka</h1>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Typ výpočtu
            </label>
            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => setCalculationType('without')}
                className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                  calculationType === 'without'
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                Cena bez DPH → Cena s DPH
              </button>
              <button
                onClick={() => setCalculationType('with')}
                className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                  calculationType === 'with'
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                Cena s DPH → Cena bez DPH
              </button>
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Sazba DPH
            </label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
              <button
                onClick={() => { setUseCustom(false); setVatRate(VAT_RATES.standard) }}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  !useCustom && vatRate === VAT_RATES.standard
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                Standardní {VAT_RATES.standard}%
              </button>
              <button
                onClick={() => { setUseCustom(false); setVatRate(VAT_RATES.reduced) }}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  !useCustom && vatRate === VAT_RATES.reduced
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                Snížená {VAT_RATES.reduced}%
              </button>
              <button
                onClick={() => { setUseCustom(false); setVatRate(VAT_RATES.reduced2) }}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  !useCustom && vatRate === VAT_RATES.reduced2
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                Snížená 2 {VAT_RATES.reduced2}%
              </button>
              <button
                onClick={() => setUseCustom(true)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  useCustom
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                Vlastní %
              </button>
            </div>
            {useCustom && (
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Vlastní sazba DPH (%)
                </label>
                <input
                  type="number"
                  value={customRate}
                  onChange={(e) => setCustomRate(e.target.value)}
                  min="0"
                  max="100"
                  step="0.1"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700"
                  placeholder="Např. 12.5"
                />
              </div>
            )}
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              {calculationType === 'without' ? 'Cena bez DPH (Kč)' : 'Cena s DPH (Kč)'}
            </label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleCalculate()}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700"
              placeholder="Zadejte částku"
            />
          </div>

          <button
            onClick={handleCalculate}
            className="w-full md:w-auto px-8 py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors flex items-center justify-center"
          >
            Vypočítat
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>

          {result && (
            <div className="mt-8 space-y-4">
              <div className="p-6 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Cena bez DPH:</p>
                <p className="text-3xl font-bold text-purple-700 dark:text-purple-400">
                  {result.amountWithoutVAT.toLocaleString('cs-CZ', { maximumFractionDigits: 2 })} Kč
                </p>
              </div>
              <div className="p-6 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">DPH ({result.vatRate.toFixed(1)}%):</p>
                <p className="text-3xl font-bold text-purple-800 dark:text-purple-300">
                  {result.vatAmount.toLocaleString('cs-CZ', { maximumFractionDigits: 2 })} Kč
                </p>
              </div>
              <div className="p-6 bg-purple-200 dark:bg-purple-900/40 rounded-lg">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Cena s DPH:</p>
                <p className="text-3xl font-bold text-purple-900 dark:text-purple-200">
                  {result.amountWithVAT.toLocaleString('cs-CZ', { maximumFractionDigits: 2 })} Kč
                </p>
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
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">O DPH kalkulačce</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Tato kalkulačka vám pomůže rychle vypočítat DPH podle českých sazeb. Podporuje standardní
            sazbu 21% a snížené sazby 15% a 10%.
          </p>
          <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
            <p><strong>Standardní sazba 21%:</strong> Většina zboží a služeb</p>
            <p><strong>Snížená sazba 15%:</strong> Potraviny, léky, knihy</p>
            <p><strong>Snížená sazba 10%:</strong> Některé služby (např. ubytování)</p>
          </div>
        </div>
      </main>
    </div>
  )
}

