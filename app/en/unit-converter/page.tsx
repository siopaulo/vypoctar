'use client'

import { useState } from 'react'
import { units, convertUnit, type UnitCategory } from '@/lib/conversions'
import { Ruler, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import ThemeToggle from '@/components/ThemeToggle'
import AdSlot from '@/components/AdSlot'

export default function UnitConverterPageEN() {
  const [category, setCategory] = useState<UnitCategory>('length')
  const [fromUnit, setFromUnit] = useState(units[category][2])
  const [toUnit, setToUnit] = useState(units[category][2])
  const [value, setValue] = useState('1')
  const [result, setResult] = useState<number | null>(null)

  const handleConvert = () => {
    const numValue = parseFloat(value)
    if (isNaN(numValue)) {
      setResult(null)
      return
    }
    const converted = convertUnit(numValue, fromUnit, toUnit, category)
    setResult(converted)
  }

  const handleCategoryChange = (newCategory: UnitCategory) => {
    setCategory(newCategory)
    const categoryUnits = units[newCategory]
    setFromUnit(categoryUnits[2] || categoryUnits[0])
    setToUnit(categoryUnits[2] || categoryUnits[0])
    setResult(null)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex flex-col">
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
            <Ruler className="h-8 w-8 text-primary-600 dark:text-primary-400 mr-3" />
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Unit Converter</h1>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Category
            </label>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
              {(['length', 'weight', 'volume', 'area', 'temperature'] as UnitCategory[]).map((cat) => (
                <button
                  key={cat}
                  onClick={() => handleCategoryChange(cat)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    category === cat
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}
                >
                  {cat === 'length' && 'Length'}
                  {cat === 'weight' && 'Weight'}
                  {cat === 'volume' && 'Volume'}
                  {cat === 'area' && 'Area'}
                  {cat === 'temperature' && 'Temperature'}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                From
              </label>
              <select
                value={fromUnit.symbol}
                onChange={(e) => {
                  const unit = units[category].find((u) => u.symbol === e.target.value)
                  if (unit) setFromUnit(unit)
                }}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              >
                {units[category].map((unit) => (
                  <option key={unit.symbol} value={unit.symbol}>
                    {unit.name} ({unit.symbol})
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Value
              </label>
              <input
                type="number"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleConvert()}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700"
                placeholder="Enter value"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                To
              </label>
              <select
                value={toUnit.symbol}
                onChange={(e) => {
                  const unit = units[category].find((u) => u.symbol === e.target.value)
                  if (unit) setToUnit(unit)
                }}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              >
                {units[category].map((unit) => (
                  <option key={unit.symbol} value={unit.symbol}>
                    {unit.name} ({unit.symbol})
                  </option>
                ))}
              </select>
            </div>
          </div>

          <button
            onClick={handleConvert}
            className="mt-6 w-full md:w-auto px-8 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors flex items-center justify-center"
          >
            Convert
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>

          {result !== null && (
            <div className="mt-8 p-6 bg-primary-50 dark:bg-primary-900/20 rounded-lg">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Result:</p>
              <p className="text-3xl font-bold text-primary-700 dark:text-primary-400">
                {result.toLocaleString('en-US', { maximumFractionDigits: 6 })} {toUnit.symbol}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                {value} {fromUnit.symbol} = {result.toLocaleString('en-US', { maximumFractionDigits: 6 })} {toUnit.symbol}
              </p>
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
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">About Unit Converter</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            This converter allows you to convert between different units of length, weight, volume, area and temperature.
            All conversions are accurate and based on international standards.
          </p>
        </div>
      </main>
    </div>
  )
}
