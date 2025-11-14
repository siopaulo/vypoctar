'use client'

'use client'

import Link from 'next/link'
import { Info, ShieldCheck, LifeBuoy } from 'lucide-react'
import ThemeToggle from '@/components/ThemeToggle'

export default function AboutProjectEN() {
  const highlights = [
    {
      title: 'Helper for quick estimates',
      description:
        'Calculator brings the most common converters and calculators together. It is perfect when you need an approximate answer for home, school, or work tasks in a few seconds.',
    },
    {
      title: 'Updated data without accounts',
      description:
        'VAT rates, exchange data, and preset values are reviewed on a regular basis. Everything stays free to use, with no registration or unnecessary data collection.',
    },
    {
      title: 'Transparent approach',
      description:
        'Each card explains what assumptions it uses. Whenever a formula is simplified, we mark it directly next to the result so you know how to interpret it.',
    },
  ]

  const notices = [
    {
      icon: ShieldCheck,
      title: 'Advisory disclaimer',
      description:
        'Results are indicative only and must not be treated as financial or legal advice. Always double-check key numbers before making commitments.',
    },
    {
      icon: Info,
      title: 'Data sources',
      description:
        'We monitor public sources and official releases, yet changes can happen between updates. Validate critical parameters with the latest legislation.',
    },
    {
      icon: LifeBuoy,
      title: 'User responsibility',
      description:
        'Every visitor is responsible for how they use the calculations. The website cannot be liable for losses caused by wrong inputs or misinterpretation of outputs.',
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 flex flex-col">
      <header className="bg-white/95 dark:bg-gray-950/85 backdrop-blur border-b border-gray-100 dark:border-gray-800 shadow-sm sticky top-0 z-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link
            href="/en"
            className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium transition-colors group"
          >
            <svg
              className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to homepage
          </Link>
          <ThemeToggle />
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-grow space-y-12">
        <section className="bg-white/95 dark:bg-gray-900/70 border border-gray-100 dark:border-gray-800 rounded-2xl shadow-lg p-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-primary-600 dark:text-primary-400">About the project</p>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mt-2">Calculator as a helper tool</h1>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                The website was created to save time on everyday conversions and ballpark estimates. It gives you a quick answer, but the final
                decision and validation is always up to you.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {highlights.map((item) => (
              <div key={item.title} className="bg-gray-50 dark:bg-gray-800/60 rounded-xl p-5 border border-gray-100 dark:border-gray-800">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white/95 dark:bg-gray-900/70 border border-gray-100 dark:border-gray-800 rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Important notes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {notices.map((notice) => {
              const Icon = notice.icon
              return (
                <div key={notice.title} className="rounded-xl border border-gray-100 dark:border-gray-800 bg-gray-50/70 dark:bg-gray-800/70 p-6">
                  <Icon className="h-8 w-8 text-primary-600 dark:text-primary-400 mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{notice.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{notice.description}</p>
                </div>
              )
            })}
          </div>
        </section>

      </main>
    </div>
  )
}
