'use client'

import Link from 'next/link'
import { Info, ShieldCheck, LifeBuoy } from 'lucide-react'
import ThemeToggle from '@/components/ThemeToggle'

export default function AboutProjectPage() {
  const highlights = [
    {
      title: 'Pomocník pro rychlé orientační výpočty',
      description:
        'Kalkulátor sjednocuje nejčastější převodníky a kalkulačky na jednom místě. Hodí se pro domácnost, studium i práci, kdy potřebujete výsledek během několika sekund.',
    },
    {
      title: 'Aktualizovaná data bez nutnosti přihlášení',
      description:
        'Sazby DPH, měnové kurzy nebo výchozí parametry pravidelně kontrolujeme. Vše funguje zdarma, bez registrace a sběru zbytečných osobních údajů.',
    },
    {
      title: 'Transparentní fungování',
      description:
        'Karty kalkulaček jasně vysvětlují, z jakých hodnot vycházejí. Pokud je výpočet zjednodušený, vždy to uvádíme přímo u výsledku.',
    },
  ]

  const notices = [
    {
      icon: ShieldCheck,
      title: 'Jen orientační pomůcka',
      description:
        'Výsledky nenahrazují odborné poradenství ani oficiální kalkulačky státních institucí. Berte je jako pomocný odhad, který je vždy potřeba ověřit.',
    },
    {
      icon: Info,
      title: 'Práce s daty',
      description:
        'Zdroje pravidelně revidujeme, přesto může dojít k prodlevám nebo změnám sazeb. U citlivých rozhodnutí doporučujeme zkontrolovat aktuální legislativu.',
    },
    {
      icon: LifeBuoy,
      title: 'Odpovědnost uživatele',
      description:
        'Za použití kalkulaček odpovídá každý uživatel sám. Web nenese odpovědnost za škody způsobené nesprávným zadáním nebo pochopením výsledků.',
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 flex flex-col">
      <header className="bg-white/95 dark:bg-gray-950/85 backdrop-blur border-b border-gray-100 dark:border-gray-800 shadow-sm sticky top-0 z-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link
            href="/"
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
            Zpět na hlavní stránku
          </Link>
          <ThemeToggle />
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-grow space-y-12">
        <section className="bg-white/95 dark:bg-gray-900/70 border border-gray-100 dark:border-gray-800 rounded-2xl shadow-lg p-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-primary-600 dark:text-primary-400">O projektu</p>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mt-2">Kalkulátor jako pomocný nástroj</h1>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                Tento web vznikl jako praktická sada nástrojů, která urychlí běžné přepočty doma i v práci. Poskytuje orientační hodnoty,
                aby vám ušetřil čas, ale konečné rozhodnutí je vždy na vás.
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
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Na co dát pozor</h2>
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
