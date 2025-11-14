'use client'

import Link from 'next/link'
import { Calculator, DollarSign, Percent, Activity, Ruler, Home as HomeIcon, Fuel, PiggyBank, TrendingUp } from 'lucide-react'
import ThemeToggle from '@/components/ThemeToggle'
import AdSlot from '@/components/AdSlot'

export default function Home() {
  const tools = [
    {
      title: 'Převodník jednotek',
      description: 'Převádějte délku, hmotnost, objem, plochu a další jednotky',
      icon: Ruler,
      href: '/prevodnik-jednotek',
      color: 'bg-blue-500',
    },
    {
      title: 'Převodník měn',
      description: 'Aktuální kurzy měn s převodem CZK, EUR, USD a dalších',
      icon: DollarSign,
      href: '/prevodnik-men',
      color: 'bg-green-500',
    },
    {
      title: 'DPH Kalkulačka',
      description: 'Výpočet DPH, ceny s DPH a bez DPH pro Českou republiku',
      icon: Percent,
      href: '/dph-kalkulacka',
      color: 'bg-purple-500',
    },
    {
      title: 'BMI Kalkulačka',
      description: 'Výpočet indexu tělesné hmotnosti a doporučení',
      icon: Activity,
      href: '/bmi-kalkulacka',
      color: 'bg-orange-500',
    },
    {
      title: 'Hypotéka Kalkulačka',
      description: 'Výpočet měsíční splátky hypotéky a celkových nákladů',
      icon: HomeIcon,
      href: '/hypoteka-kalkulacka',
      color: 'bg-indigo-500',
    },
    {
      title: 'Spotřeba Paliva',
      description: 'Výpočet spotřeby paliva a nákladů na cestu',
      icon: Fuel,
      href: '/spotreba-paliva',
      color: 'bg-red-500',
    },
    {
      title: 'Důchod Kalkulačka',
      description: 'Orientační výpočet odhadovaného důchodu',
      icon: PiggyBank,
      href: '/duchod-kalkulacka',
      color: 'bg-teal-500',
    },
    {
      title: 'Úroky Kalkulačka',
      description: 'Výpočet jednoduchého a složeného úroku',
      icon: TrendingUp,
      href: '/uroky-kalkulacka',
      color: 'bg-yellow-500',
    },
  ]

  const faqContent = [
    {
      question: 'Jaké kalkulačky na webu najdu?',
      answer:
        'Součástí jsou převodníky jednotek a měn, kalkulačky DPH, BMI, hypoték, důchodu, úroků i spotřeby paliva. Postupně přidáváme další šablony podle poptávky.',
    },
    {
      question: 'Je použití Kalkulátoru zdarma?',
      answer:
        'Ano, všechny výpočty jsou dostupné bez registrace i poplatků. Stačí jen zadat vstupní údaje a okamžitě získáte orientační výsledky.',
    },
    {
      question: 'Jak často aktualizujete data a sazby?',
      answer:
        'Kurzy měn, sazby DPH i další podklady kontrolujeme minimálně jednou týdně. U specifických výpočtů uvádíme zdroj i datum aktualizace.',
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
    name: 'Kalkulátor',
    url: 'https://cesky-kalkulator.vercel.app',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://cesky-kalkulator.vercel.app/?q={search_term_string}',
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
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Kalkulátor</h1>
            </div>
            <nav className="hidden md:flex items-center space-x-4">
              <Link href="/" className="text-gray-800 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-300 font-medium">
                Domů
              </Link>
              <Link href="/o-projektu" className="text-gray-800 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-300 font-medium">
                O projektu
              </Link>
              <Link href="/en" className="text-gray-800 dark:text-gray-100 hover:text-white dark:hover:text-gray-900 font-medium border border-gray-300 dark:border-gray-600 px-3 py-1 rounded-lg hover:border-primary-600 dark:hover:border-primary-400 hover:bg-primary-600 dark:hover:bg-primary-400 transition-colors">
                EN
              </Link>
              <ThemeToggle />
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Užitečné kalkulačky a převodníky
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-200 max-w-2xl mx-auto">
            Všechny nástroje zdarma a online. Převádějte jednotky, měny, počítajte DPH a mnohem více.
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
          <p className="text-gray-500 dark:text-gray-400 text-sm mb-2">Reklama</p>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-4 min-h-[100px] flex items-center justify-center shadow-inner shadow-black/10">
            <AdSlot />
          </div>
        </div>

        {/* Features */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Proč používat Kalkulátor?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">✓ Zdarma a bez registrace</h4>
              <p className="text-gray-600 dark:text-gray-200">Všechny nástroje jsou zdarma a nevyžadují registraci.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">✓ Aktuální data</h4>
              <p className="text-gray-600 dark:text-gray-200">Kurzy měn a další data se aktualizují automaticky.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">✓ Jednoduché použití</h4>
              <p className="text-gray-600 dark:text-gray-200">Intuitivní rozhraní pro rychlé výpočty.</p>
            </div>
          </div>
        </div>

        <section className="bg-white/95 dark:bg-gray-900/70 border border-gray-100 dark:border-gray-800 rounded-2xl shadow-lg p-8 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Optimalizované pro vyhledávače</h3>
              <p className="text-gray-600 dark:text-gray-200 mb-3">
                Každá kalkulačka má vlastní URL, strukturované nadpisy, popisy a interní odkazy. Díky tomu mohou vyhledávače snadno pochopit obsah
                a zobrazit web na dotazy jako <strong>„DPH kalkulačka“</strong>, <strong>„převodník jednotek“</strong> nebo <strong>„hypoteční kalkulačka“</strong>.
              </p>
              <p className="text-gray-600 dark:text-gray-200">
                Texty obsahují klíčová slova i přirozené vysvětlení vzorců. To pomáhá cílit na long-tail dotazy typu „jak vypočítat složené úročení“ nebo
                „kolik činí spotřeba paliva na 100 km“.
              </p>
            </div>
            <div className="space-y-3">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Co ještě vylepšujeme:</h4>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-200 space-y-2">
                <li>nahrávání náhledových obrázků pro sociální sítě a Google Discover,</li>
                <li>FAQ sekce s odpověďmi na nejhledanější otázky,</li>
                <li>značkování JSON-LD pro WebSite a FAQPage,</li>
                <li>rychlé načítání díky statickému renderování a optimalizovaným obrázkům.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-8 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Časté dotazy</h3>
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
              <h4 className="font-semibold mb-4">Kalkulátor</h4>
              <p className="text-gray-400 text-sm">
                Užitečné nástroje pro každodenní použití. Vše zdarma a online.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Nástroje</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/prevodnik-jednotek" className="hover:text-white">Převodník jednotek</Link></li>
                <li><Link href="/prevodnik-men" className="hover:text-white">Převodník měn</Link></li>
                <li><Link href="/dph-kalkulacka" className="hover:text-white">DPH Kalkulačka</Link></li>
                <li><Link href="/bmi-kalkulacka" className="hover:text-white">BMI Kalkulačka</Link></li>
                <li><Link href="/hypoteka-kalkulacka" className="hover:text-white">Hypotéka Kalkulačka</Link></li>
                <li><Link href="/spotreba-paliva" className="hover:text-white">Spotřeba Paliva</Link></li>
                <li><Link href="/duchod-kalkulacka" className="hover:text-white">Důchod Kalkulačka</Link></li>
                <li><Link href="/uroky-kalkulacka" className="hover:text-white">Úroky Kalkulačka</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Kontakt</h4>
              <p className="text-gray-400 text-sm">
                Máte návrh na nový nástroj? Napište nám!
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 Kalkulátor. Všechna práva vyhrazena.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
