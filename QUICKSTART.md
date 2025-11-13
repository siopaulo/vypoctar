# Rychlý start - Český Kalkulátor

## 🚀 Okamžité spuštění

### 1. Instalace závislostí
```bash
cd cesky-kalkulator
npm install
```

### 2. Spuštění vývojového serveru
```bash
npm run dev
```

### 3. Otevření v prohlížeči
```
http://localhost:3000
```

## 📦 Co je v projektu

✅ **4 funkční kalkulačky:**
- Převodník jednotek (délka, hmotnost, objem, plocha, teplota)
- Převodník měn (aktuální kurzy z API)
- DPH kalkulačka (21%, 15%, 10%)
- BMI kalkulačka

✅ **Kompletní UI:**
- Moderní, responzivní design
- Hlavní stránka s přehledem
- Jednotlivé stránky pro každou kalkulačku

✅ **SEO optimalizace:**
- Meta tagy
- Sitemap
- Robots.txt

✅ **Připraveno pro monetizaci:**
- Komponenta pro reklamy
- Místa pro AdSense bloky
- Dokumentace pro affiliate

## 🌐 Nasazení na Vercel

### Krok 1: Push na GitHub
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/VASE-USERNAME/cesky-kalkulator.git
git push -u origin main
```

### Krok 2: Vercel
1. Jděte na [vercel.com](https://vercel.com)
2. Přihlaste se pomocí GitHub
3. Klikněte "New Project"
4. Vyberte váš repozitář
5. Klikněte "Deploy"

**Hotovo!** Váš web bude dostupný na `vas-projekt.vercel.app`

## 💵 Nastavení AdSense

### 1. Registrace
- Jděte na [adsense.google.com](https://www.google.com/adsense/)
- Přidejte svůj web (URL z Vercel)
- Počkejte na schválení (1-7 dní)

### 2. Implementace
1. Získejte AdSense ID (formát: `ca-pub-XXXXXXXXXX`)
2. Upravte `components/AdBanner.tsx`:
   - Nahraďte `ca-pub-XXXXXXXXXX` vaším ID
   - Odkomentujte AdSense kód
3. Přidejte script do `app/layout.tsx`:
```tsx
import Script from 'next/script'

// V <head> nebo před </body>:
<Script
  async
  src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXX"
  crossOrigin="anonymous"
/>
```

## 📊 Sledování výkonu

### Google Analytics
1. Vytvořte účet na [analytics.google.com](https://analytics.google.com)
2. Získejte Measurement ID (G-XXXXXXXXXX)
3. Přidejte do `app/layout.tsx`:
```tsx
<Script
  src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`}
  strategy="afterInteractive"
/>
<Script id="google-analytics">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  `}
</Script>
```

## 🔧 Struktura projektu

```
cesky-kalkulator/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Hlavní layout
│   ├── page.tsx           # Hlavní stránka
│   ├── sitemap.ts         # SEO sitemap
│   ├── robots.ts          # SEO robots
│   └── [kalkulacky]/      # Stránky kalkulaček
├── components/            # React komponenty
│   └── AdBanner.tsx      # Reklamní komponenta
├── lib/                   # Utility funkce
│   ├── conversions.ts    # Převody jednotek
│   ├── currency.ts       # Převody měn
│   ├── vat.ts            # DPH výpočty
│   └── bmi.ts            # BMI výpočty
└── README.md             # Kompletní dokumentace
```

## ⚡ Rychlé tipy

### Přidání nové kalkulačky
1. Vytvořte novou složku v `app/`
2. Přidejte `page.tsx` s komponentou
3. Přidejte odkaz na hlavní stránku
4. Aktualizujte sitemap

### Změna vzhledu
- Barvy: `tailwind.config.ts`
- Globální styly: `app/globals.css`
- Komponenty: `components/`

### Aktualizace kurzů měn
- API se aktualizuje automaticky
- Fallback hodnoty v `lib/currency.ts`
- Pro produkci zvažte placené API

## 🐛 Řešení problémů

### Chyba při instalaci
```bash
# Vymažte node_modules a zkuste znovu
rm -rf node_modules package-lock.json
npm install
```

### Chyba při buildu
```bash
# Zkontrolujte TypeScript chyby
npm run lint
```

### API nefunguje
- Zkontrolujte internetové připojení
- Fallback hodnoty se použijí automaticky
- Pro produkci zvažte placené API

## 📞 Další pomoc

- **Kompletní dokumentace:** `README.md`
- **Plán projektu:** `PLAN.md`
- **GitHub Issues:** Vytvořte issue pro problémy

---

**Vše je připraveno! Stačí spustit `npm install` a `npm run dev` 🎉**

