import Link from 'next/link'
import { Calculator, DollarSign, Percent, Activity, Ruler, Home as HomeIcon, Fuel, PiggyBank, TrendingUp } from 'lucide-react'
import ThemeToggle from '@/components/ThemeToggle'

export default function HomeEN() {
  const tools = [
    {
      title: 'Unit Converter',
      description: 'Convert length, weight, volume, area and other units',
      icon: Ruler,
      href: '/en/unit-converter',
      color: 'bg-blue-500',
    },
    {
      title: 'Currency Converter',
      description: 'Current exchange rates for CZK, EUR, USD and more',
      icon: DollarSign,
      href: '/en/currency-converter',
      color: 'bg-green-500',
    },
    {
      title: 'VAT Calculator',
      description: 'Calculate VAT, price with VAT and without VAT for Czech Republic',
      icon: Percent,
      href: '/en/vat-calculator',
      color: 'bg-purple-500',
    },
    {
      title: 'BMI Calculator',
      description: 'Calculate body mass index and recommendations',
      icon: Activity,
      href: '/en/bmi-calculator',
      color: 'bg-orange-500',
    },
    {
      title: 'Mortgage Calculator',
      description: 'Calculate monthly mortgage payment and total costs',
      icon: HomeIcon,
      href: '/en/mortgage-calculator',
      color: 'bg-indigo-500',
    },
    {
      title: 'Fuel Consumption',
      description: 'Calculate fuel consumption and trip costs',
      icon: Fuel,
      href: '/en/fuel-consumption',
      color: 'bg-red-500',
    },
    {
      title: 'Pension Calculator',
      description: 'Estimated pension calculation',
      icon: PiggyBank,
      href: '/en/pension-calculator',
      color: 'bg-teal-500',
    },
    {
      title: 'Interest Calculator',
      description: 'Calculate simple and compound interest',
      icon: TrendingUp,
      href: '/en/interest-calculator',
      color: 'bg-yellow-500',
    },
  ]

  const faqContent = [
    {
      question: 'Which calculators are included?',
      answer:
        'We bundle unit and currency converters together with VAT, BMI, mortgage, interest, pension, and fuel calculators. More templates are added based on user interest.',
    },
    {
      question: 'Is the Calculator free to use?',
      answer:
        'Yes. All tools are free, require no login, and provide instant approximate results once you enter the necessary inputs.',
    },
    {
      question: 'How often do you update rates and formulas?',
      answer:
        'Exchange rates, VAT rates, and other references are reviewed at least weekly. Specialised calculators include a note describing the data source and last update date.',
    },
  ]

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqContent.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }

  const webSiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Calculator',
    url: 'https://cesky-kalkulator.vercel.app/en',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://cesky-kalkulator.vercel.app/en?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 flex flex-col">
      {/* Header */}
      <header className="bg-white/95 dark:bg-gray-950/80 backdrop-blur border-b border-gray-100 dark:border-gray-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Calculator className="h-8 w-8 text-primary-600 dark:text-primary-400" />
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Calculator</h1>
            </div>
            <nav className="hidden md:flex items-center space-x-4">
              <Link href="/en" className="text-gray-800 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-300 font-medium">
                Home
              </Link>
              <Link href="/en/about" className="text-gray-800 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-300 font-medium">
                About
              </Link>
              <Link href="/" className="text-gray-800 dark:text-gray-100 hover:text-white dark:hover:text-gray-900 font-medium border border-gray-300 dark:border-gray-600 px-3 py-1 rounded-lg hover:border-primary-600 dark:hover:border-primary-400 hover:bg-primary-600 dark:hover:bg-primary-400 transition-colors">
                CS
              </Link>
              <ThemeToggle />
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-grow">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Useful Calculators and Converters
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-200 max-w-2xl mx-auto">
            All tools free and online. Convert units, currencies, calculate VAT and much more.
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {tools.map((tool) => {
            const Icon = tool.icon
            return (
              <Link
                key={tool.href}
                href={tool.href}
                className="bg-white/90 dark:bg-gray-900/70 border border-gray-100 dark:border-gray-700 rounded-2xl shadow-lg hover:shadow-2xl dark:hover:shadow-[0_20px_35px_rgba(0,0,0,0.65)] transition-all p-6 group"
              >
                <div className={`${tool.color} w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-inner shadow-black/10`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{tool.title}</h3>
                <p className="text-gray-600 dark:text-gray-200">{tool.description}</p>
              </Link>
            )
          })}
        </div>

        {/* Ad Space - Placeholder */}
        <div className="bg-gray-100/80 dark:bg-gray-900/70 border border-dashed border-gray-300 dark:border-gray-700 rounded-xl p-8 text-center mb-12">
          <p className="text-gray-500 dark:text-gray-400 text-sm mb-2">Advertisement</p>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-4 min-h-[100px] flex items-center justify-center shadow-inner shadow-black/10">
            <p className="text-gray-500 dark:text-gray-400">Ad block - AdSense or affiliate</p>
          </div>
        </div>

        {/* Features */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Why use Calculator?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">✓ Free and no registration</h4>
              <p className="text-gray-600 dark:text-gray-200">All tools are free and require no registration.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">✓ Current data</h4>
              <p className="text-gray-600 dark:text-gray-200">Exchange rates and other data are updated automatically.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">✓ Easy to use</h4>
              <p className="text-gray-600 dark:text-gray-200">Intuitive interface for quick calculations.</p>
            </div>
          </div>
        </div>

        <section className="bg-white/95 dark:bg-gray-900/70 border border-gray-100 dark:border-gray-800 rounded-2xl shadow-lg p-8 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">SEO-ready experience</h3>
              <p className="text-gray-600 dark:text-gray-200 mb-3">
                Every calculator has its own crawlable URL, descriptive headings, and structured content. Search engines can easily match the page to
                keywords such as <strong>“VAT calculator Czech Republic”</strong>, <strong>“compound interest calculator”</strong>, or <strong>“unit converter”</strong>.
              </p>
              <p className="text-gray-600 dark:text-gray-200">
                We balance keyword coverage with natural explanations of formulas, so the content also ranks for long-tail questions like “how to compute BMI quickly”.
              </p>
            </div>
            <div className="space-y-3">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Technical enhancements:</h4>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-200 space-y-2">
                <li>preview images for social media and Google Discover,</li>
                <li>FAQ blocks that mirror user intent,</li>
                <li>JSON-LD markup for both WebSite and FAQPage entities,</li>
                <li>static rendering with lightweight assets for faster loading.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-8 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Frequently asked questions</h3>
          <div className="space-y-4">
            {faqContent.map((item) => (
              <details key={item.question} className="group border border-gray-200 dark:border-gray-700 rounded-lg p-4 bg-gray-50/70 dark:bg-gray-900/40">
                <summary className="cursor-pointer text-lg font-semibold text-gray-900 dark:text-white flex items-center justify-between">
                  {item.question}
                  <span className="text-primary-600 dark:text-primary-400 text-sm group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="mt-3 text-gray-600 dark:text-gray-200">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify([webSiteSchema, faqSchema]) }}
        />
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-black text-white py-8 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-semibold mb-4">Calculator</h4>
              <p className="text-gray-400 text-sm">
                Useful tools for everyday use. All free and online.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Tools</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/en/unit-converter" className="hover:text-white">Unit Converter</Link></li>
                <li><Link href="/en/currency-converter" className="hover:text-white">Currency Converter</Link></li>
                <li><Link href="/en/vat-calculator" className="hover:text-white">VAT Calculator</Link></li>
                <li><Link href="/en/bmi-calculator" className="hover:text-white">BMI Calculator</Link></li>
                <li><Link href="/en/mortgage-calculator" className="hover:text-white">Mortgage Calculator</Link></li>
                <li><Link href="/en/fuel-consumption" className="hover:text-white">Fuel Consumption</Link></li>
                <li><Link href="/en/pension-calculator" className="hover:text-white">Pension Calculator</Link></li>
                <li><Link href="/en/interest-calculator" className="hover:text-white">Interest Calculator</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <p className="text-gray-400 text-sm">
                Have a suggestion for a new tool? Contact us!
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 Calculator. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

