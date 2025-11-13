'use client'

import { useState, useEffect } from 'react'
import { currencies, getExchangeRate, convertCurrency } from '@/lib/currency'
import { DollarSign, ArrowRight, RefreshCw } from 'lucide-react'
import Link from 'next/link'
import ThemeToggle from '@/components/ThemeToggle'

export default function CurrencyConverterPageEN() {
  const [fromCurrency, setFromCurrency] = useState(currencies[0])
  const [toCurrency, setToCurrency] = useState(currencies[1])
  const [amount, setAmount] = useState('100')
  const [rate, setRate] = useState<number | null>(null)
  const [result, setResult] = useState<number | null>(null)
  const [loading, setLoading] = useState(false)
  const [lastUpdate, setLastUpdate] = useState<Date | null>(null)

  const fetchRate = async () => {
    setLoading(true)
    try {
      const exchangeRate = await getExchangeRate(fromCurrency.code, toCurrency.code)
      setRate(exchangeRate)
      setLastUpdate(new Date())
      const numAmount = parseFloat(amount)
      if (!isNaN(numAmount)) {
        const converted = convertCurrency(numAmount, exchangeRate)
        setResult(converted)
      }
    } catch (error) {
      console.error('Error fetching rate:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchRate()
  }, [fromCurrency.code, toCurrency.code])

  const handleConvert = () => {
    const numAmount = parseFloat(amount)
    if (isNaN(numAmount) || rate === null) {
      setResult(null)
      return
    }
    const converted = convertCurrency(numAmount, rate)
    setResult(converted)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex flex-col">
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
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <DollarSign className="h-8 w-8 text-green-600 dark:text-green-400 mr-3" />
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Currency Converter</h1>
            </div>
            <button
              onClick={fetchRate}
              disabled={loading}
              className="px-4 py-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg transition-colors disabled:opacity-50 flex items-center text-gray-700 dark:text-gray-300"
            >
              <RefreshCw className={`h-4 w-4 mr-2 ${loading ? 'animate-spin' : ''}`} />
              Refresh
            </button>
          </div>

          {lastUpdate && (
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
              Last update: {lastUpdate.toLocaleString('en-US')}
            </p>
          )}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                From currency
              </label>
              <select
                value={fromCurrency.code}
                onChange={(e) => {
                  const currency = currencies.find((c) => c.code === e.target.value)
                  if (currency) setFromCurrency(currency)
                }}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              >
                {currencies.map((currency) => (
                  <option key={currency.code} value={currency.code}>
                    {currency.name} ({currency.code})
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Amount
              </label>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleConvert()}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700"
                placeholder="Enter amount"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                To currency
              </label>
              <select
                value={toCurrency.code}
                onChange={(e) => {
                  const currency = currencies.find((c) => c.code === e.target.value)
                  if (currency) setToCurrency(currency)
                }}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              >
                {currencies.map((currency) => (
                  <option key={currency.code} value={currency.code}>
                    {currency.name} ({currency.code})
                  </option>
                ))}
              </select>
            </div>
          </div>

          <button
            onClick={handleConvert}
            disabled={loading}
            className="mt-6 w-full md:w-auto px-8 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors disabled:opacity-50 flex items-center justify-center"
          >
            Convert
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>

          {rate !== null && (
            <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Current rate: 1 {fromCurrency.code} = {rate.toFixed(4)} {toCurrency.code}
              </p>
            </div>
          )}

          {result !== null && (
            <div className="mt-8 p-6 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Result:</p>
              <p className="text-3xl font-bold text-green-700 dark:text-green-400">
                {result.toLocaleString('en-US', { maximumFractionDigits: 2 })} {toCurrency.symbol}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                {amount} {fromCurrency.symbol} = {result.toLocaleString('en-US', { maximumFractionDigits: 2 })} {toCurrency.symbol}
              </p>
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
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">About Currency Converter</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            This converter uses current exchange rates from a public API. Rates are updated automatically
            and are based on real market values.
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Note: Rates are indicative. For accurate rates for bank transfers, use official sources.
          </p>
        </div>
      </main>
    </div>
  )
}

