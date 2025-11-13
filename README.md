# Český Kalkulátor

Kompletní webový projekt s užitečnými kalkulačkami a převodníky pro české uživatele. Projekt je navržen pro pasivní příjem z reklam a affiliate odkazů.

## 📋 Popis projektu

**Český Kalkulátor** je soubor praktických online nástrojů:
- Převodník jednotek (délka, hmotnost, objem, plocha, teplota)
- Převodník měn s aktuálními kurzy
- DPH kalkulačka pro Českou republiku
- BMI kalkulačka

## 🎯 Cílová skupina

- České domácnosti a jednotlivci
- Malé podniky a živnostníci
- Studenti a učitelé
- Každý, kdo potřebuje rychlé výpočty a převody

## 💰 Zdroje příjmů

1. **Google AdSense** - reklamní bloky na stránkách
2. **Affiliate odkazy** - odkazy na finanční produkty, kalkulačky, nástroje
3. **Mikroplatby** (budoucí) - prémiové funkce, bez reklam
4. **Sponzorované obsahy** - partnerství s českými firmami

## 🛠️ Technologie

- **Next.js 14** - React framework s App Router
- **TypeScript** - typování
- **Tailwind CSS** - styling
- **Lucide React** - ikony
- **ExchangeRate API** - kurzy měn (bezplatné API)

## 📦 Instalace

1. **Nainstalujte závislosti:**
```bash
npm install
```

2. **Spusťte vývojový server:**
```bash
npm run dev
```

3. **Otevřete prohlížeč:**
```
http://localhost:3000
```

## 🚀 Nasazení na Vercel

1. **Vytvořte účet na Vercel:**
   - Jděte na [vercel.com](https://vercel.com)
   - Přihlaste se pomocí GitHub účtu

2. **Připojte repozitář:**
   - Klikněte na "New Project"
   - Vyberte váš GitHub repozitář
   - Vercel automaticky detekuje Next.js

3. **Nastavení:**
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Vercel to nastaví automaticky

4. **Deploy:**
   - Klikněte na "Deploy"
   - Počkejte na dokončení buildu
   - Váš web bude dostupný na `vas-projekt.vercel.app`

## 💵 Monetizace - Nastavení AdSense

### 1. Registrace Google AdSense

1. Jděte na [Google AdSense](https://www.google.com/adsense/)
2. Přihlaste se pomocí Google účtu
3. Přidejte svůj web (URL z Vercel)
4. Počkejte na schválení (obvykle 1-7 dní)

### 2. Implementace AdSense kódu

1. Po schválení získejte svůj AdSense ID (formát: `ca-pub-XXXXXXXXXX`)
2. Upravte soubor `components/AdBanner.tsx`:
   - Nahraďte `ca-pub-XXXXXXXXXX` vaším skutečným ID
   - Odkomentujte `<ins>` tag s AdSense kódem
   - Odstraňte placeholder

3. Přidejte AdSense script do `app/layout.tsx`:
```tsx
<Script
  async
  src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXX"
  crossOrigin="anonymous"
/>
```

### 3. Umístění reklam

Reklamní bloky jsou umístěny:
- Na hlavní stránce (pod nástroji)
- Na každé stránce kalkulačky (pod výsledky)
- V sidebaru (volitelné)

**Doporučené umístění:**
- Hlavní stránka: 1-2 bloky
- Stránky kalkulaček: 1 blok pod výsledky
- Mezi sekcemi: 1 blok

## 🔗 Affiliate odkazy

### Doporučené affiliate programy:

1. **Finanční produkty:**
   - Banky (např. ČSOB, Komerční banka)
   - Finanční poradci (např. Partners, OVB)

2. **E-shopy:**
   - Alza.cz
   - Mall.cz
   - Heureka.cz

3. **Nástroje:**
   - Kalkulačky a software
   - Online služby

### Implementace:

Přidejte affiliate odkazy do sekcí s doporučeními:
```tsx
<a href="https://affiliate-link.com" target="_blank" rel="nofollow sponsored">
  Doporučený produkt
</a>
```

## 📈 SEO optimalizace

### 1. Metadata
- Všechny stránky mají správné meta tagy
- Open Graph pro sociální sítě
- Strukturovaná data (JSON-LD) - doporučuji přidat

### 2. Sitemap
Vytvořte `app/sitemap.ts`:
```typescript
export default function sitemap() {
  return [
    {
      url: 'https://vas-web.vercel.app',
      lastModified: new Date(),
    },
    // další URL
  ]
}
```

### 3. Robots.txt
Vytvořte `app/robots.txt`:
```
User-agent: *
Allow: /
Sitemap: https://vas-web.vercel.app/sitemap.xml
```

## 📊 Propagace a marketing

### 1. SEO strategie
- **Klíčová slova:** "kalkulačka", "převodník", "DPH kalkulačka", "převod měn"
- **Lokální SEO:** zaměřte se na české vyhledávání
- **Blog:** přidejte blog s články o kalkulačkách, tipy, návody

### 2. Sociální sítě
- **Facebook:** vytvořte stránku, sdílejte užitečné tipy
- **Instagram:** vizuální obsah, infografiky
- **LinkedIn:** profesionální obsah pro podnikatele

### 3. Obsahový marketing
- Napište články: "Jak vypočítat DPH", "Převod měn - průvodce"
- Vytvořte YouTube videa s návody
- Sdílejte na Reddit (r/czech, r/cesky)

### 4. Backlinky
- Kontaktujte české blogy a weby
- Napište guest posty
- Zaregistrujte se do katalogů webů

### 5. Google Ads (volitelné)
- Začněte s malým rozpočtem (500-1000 Kč/měsíc)
- Zaměřte se na klíčová slova: "kalkulačka DPH", "převodník měn"

## 🔧 Údržba a škálování

### Týdenní údržba (1-2 hodiny):

1. **Kontrola funkcionality:**
   - Otestujte všechny kalkulačky
   - Zkontrolujte API pro kurzy měn

2. **Analytika:**
   - Google Analytics - zkontrolujte návštěvnost
   - AdSense - zkontrolujte výdělky

3. **Obsah:**
   - Přidejte nové články do blogu (1x týdně)
   - Aktualizujte informace

4. **Technická údržba:**
   - Aktualizujte závislosti (měsíčně)
   - Zkontrolujte bezpečnost

### Škálování:

1. **Přidejte nové kalkulačky:**
   - Kalkulačka hypotéky
   - Kalkulačka důchodu
   - Převodník času
   - Kalkulačka spotřeby paliva

2. **Rozšíření funkcí:**
   - Ukládání výsledků
   - Historie výpočtů
   - Export do PDF
   - Mobilní aplikace

3. **Monetizace:**
   - Prémiové funkce
   - API pro vývojáře
   - White-label řešení

## 📝 Struktura projektu

```
cesky-kalkulator/
├── app/
│   ├── layout.tsx          # Hlavní layout
│   ├── page.tsx            # Hlavní stránka
│   ├── globals.css         # Globální styly
│   ├── prevodnik-jednotek/ # Převodník jednotek
│   ├── prevodnik-men/      # Převodník měn
│   ├── dph-kalkulacka/     # DPH kalkulačka
│   └── bmi-kalkulacka/     # BMI kalkulačka
├── components/
│   └── AdBanner.tsx        # Komponenta pro reklamy
├── lib/
│   ├── conversions.ts      # Logika převodu jednotek
│   ├── currency.ts         # Logika převodu měn
│   ├── vat.ts              # Logika DPH
│   └── bmi.ts              # Logika BMI
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── README.md
```

## 🎯 Cíle a očekávání

### Realistické cíle (první 3 měsíce):
- **Návštěvnost:** 500-1000 návštěvníků/měsíc
- **Výdělek:** 200-500 Kč/měsíc z AdSense
- **Konverze:** 1-2% z affiliate odkazů

### Střednědobé cíle (6-12 měsíců):
- **Návštěvnost:** 2000-5000 návštěvníků/měsíc
- **Výdělek:** 1000-3000 Kč/měsíc
- **SEO:** Top 10 pro klíčová slova

### Dlouhodobé cíle (1+ rok):
- **Návštěvnost:** 10000+ návštěvníků/měsíc
- **Výdělek:** 5000+ Kč/měsíc
- **Brand:** Uznávaný český kalkulační nástroj

## ⚠️ Důležité poznámky

1. **API pro kurzy měn:**
   - Používá se bezplatné API (exchangerate-api.com)
   - Pro produkci zvažte placené API pro lepší spolehlivost
   - Fallback hodnoty jsou zahrnuty pro případ výpadku

2. **AdSense schválení:**
   - Může trvat několik dní až týdnů
   - Ujistěte se, že máte kvalitní obsah
   - Dodržujte AdSense zásady

3. **GDPR:**
   - Přidejte cookie banner
   - Zvažte přidání zásad ochrany osobních údajů

## 📞 Podpora

Pro dotazy a problémy:
- Vytvořte issue v GitHub repozitáři
- Kontaktujte autora projektu

## 📄 Licence

Tento projekt je open-source a volně použitelný pro komerční i nekomerční účely.

---

**Hodně štěstí s vaším projektem! 🚀**

