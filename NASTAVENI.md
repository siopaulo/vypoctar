# ⚙️ Nastavení projektu - Krok za krokem

## 📦 1. Instalace a spuštění

```bash
# Přejděte do složky projektu
cd cesky-kalkulator

# Nainstalujte závislosti
npm install

# Spusťte vývojový server
npm run dev
```

Otevřete http://localhost:3000 v prohlížeči.

## 🌐 2. Nasazení na Vercel

### Krok 1: Vytvořte GitHub repozitář

1. Jděte na [github.com](https://github.com)
2. Klikněte "New repository"
3. Pojmenujte ho `cesky-kalkulator`
4. Vytvořte repozitář

### Krok 2: Push kódu na GitHub

```bash
# Inicializujte git (pokud ještě není)
git init

# Přidejte všechny soubory
git add .

# Vytvořte commit
git commit -m "Initial commit - Český Kalkulátor"

# Přidejte remote (nahraďte VASE-USERNAME)
git remote add origin https://github.com/VASE-USERNAME/cesky-kalkulator.git

# Push na GitHub
git branch -M main
git push -u origin main
```

### Krok 3: Deploy na Vercel

1. Jděte na [vercel.com](https://vercel.com)
2. Přihlaste se pomocí GitHub účtu
3. Klikněte "New Project"
4. Vyberte váš repozitář `cesky-kalkulator`
5. Vercel automaticky detekuje Next.js
6. Klikněte "Deploy"
7. Počkejte na dokončení (1-2 minuty)
8. Váš web bude dostupný na `cesky-kalkulator.vercel.app`

**Tip:** Můžete změnit název projektu v nastavení Vercel.

## 💵 3. Nastavení Google AdSense

### Krok 1: Registrace

1. Jděte na [adsense.google.com](https://www.google.com/adsense/)
2. Přihlaste se pomocí Google účtu
3. Klikněte "Začít"
4. Vyberte "Web"
5. Zadejte URL vašeho webu z Vercel (např. `cesky-kalkulator.vercel.app`)
6. Vyplňte informace o webu
7. Odeslete žádost
8. Počkejte na schválení (obvykle 1-7 dní)

### Krok 2: Získání AdSense ID

Po schválení:
1. Přihlaste se do AdSense
2. Jděte do "Weby"
3. Zkopírujte vaše AdSense ID (formát: `ca-pub-XXXXXXXXXX`)

### Krok 3: Implementace do projektu

#### A) Upravte `components/AdBanner.tsx`:

Najděte řádek:
```typescript
script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXX'
```

Nahraďte `ca-pub-XXXXXXXXXX` vaším skutečným ID.

#### B) Odkomentujte AdSense kód v `components/AdBanner.tsx`:

Najděte sekci s komentářem:
```tsx
{/* Odkomentujte po registraci AdSense: */}
```

A odkomentujte `<ins>` tag:
```tsx
<ins
  className="adsbygoogle"
  style={style}
  data-ad-client="ca-pub-VASE-ID"
  data-ad-slot={slot}
  data-ad-format={format}
  data-full-width-responsive={responsive ? 'true' : 'false'}
/>
```

Odstraňte placeholder div.

#### C) Přidejte AdSense script do `app/layout.tsx`:

```tsx
import Script from 'next/script'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="cs">
      <head>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-VASE-ID"
          crossOrigin="anonymous"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
```

Nahraďte `ca-pub-VASE-ID` vaším skutečným ID.

#### D) Commit a push změn:

```bash
git add .
git commit -m "Add AdSense integration"
git push
```

Vercel automaticky nasadí změny.

## 📊 4. Nastavení Google Analytics

### Krok 1: Vytvoření účtu

1. Jděte na [analytics.google.com](https://analytics.google.com)
2. Přihlaste se pomocí Google účtu
3. Klikněte "Začít měřit"
4. Vytvořte účet (např. "Český Kalkulátor")
5. Vytvořte vlastnost (váš web)
6. Zkopírujte Measurement ID (formát: `G-XXXXXXXXXX`)

### Krok 2: Implementace

#### A) Upravte `app/analytics.tsx`:

Najděte řádek:
```typescript
const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX'
```

Nahraďte `G-XXXXXXXXXX` vaším skutečným Measurement ID.

#### B) Přidejte Analytics do `app/layout.tsx`:

```tsx
import Analytics from './analytics'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="cs">
      <body className={inter.className}>
        <Analytics />
        {children}
      </body>
    </html>
  )
}
```

#### C) Commit a push:

```bash
git add .
git commit -m "Add Google Analytics"
git push
```

## 🔍 5. Nastavení Google Search Console

1. Jděte na [search.google.com/search-console](https://search.google.com/search-console)
2. Přihlaste se pomocí Google účtu
3. Přidejte vlastnost (váš web)
4. Ověřte vlastnictví (doporučeno přes DNS nebo HTML tag)
5. Odeslete sitemap: `https://vas-web.vercel.app/sitemap.xml`

## 🔗 6. Nastavení affiliate odkazů

### Doporučené affiliate programy:

1. **Alza Partner:**
   - [alza.cz/partner](https://www.alza.cz/partner)
   - Registrace zdarma
   - Provize: 1-5%

2. **Heureka Affiliate:**
   - [heureka.cz/affiliate](https://www.heureka.cz/affiliate)
   - Registrace zdarma
   - Provize: 1-10%

3. **Mall Affiliate:**
   - Kontaktujte Mall.cz
   - Provize: 2-8%

### Implementace:

Přidejte affiliate odkazy do sekcí s doporučeními:

```tsx
<a 
  href="https://vas-affiliate-link.cz" 
  target="_blank" 
  rel="nofollow sponsored"
  className="text-primary-600 hover:underline"
>
  Doporučený produkt
</a>
```

**Tip:** Přidejte affiliate odkazy pod výsledky kalkulaček nebo do sidebaru.

## 📝 7. Aktualizace URL v projektu

Po nasazení na Vercel aktualizujte URL v těchto souborech:

1. **app/sitemap.ts:**
```typescript
const baseUrl = 'https://vas-web.vercel.app'
```

2. **app/robots.ts:**
```typescript
const baseUrl = 'https://vas-web.vercel.app'
```

3. **README.md:** Aktualizujte všechny odkazy

## ✅ 8. Kontrolní seznam

- [ ] Projekt běží lokálně (`npm run dev`)
- [ ] Projekt nasazen na Vercel
- [ ] AdSense registrován a implementován
- [ ] Google Analytics nastaven
- [ ] Google Search Console nastaven
- [ ] Sitemap aktualizován s správnou URL
- [ ] Robots.txt aktualizován
- [ ] Všechny odkazy fungují
- [ ] Mobilní verze funguje
- [ ] Reklamy se zobrazují (po schválení AdSense)

## 🎯 9. První kroky po nasazení

1. **Testování:**
   - Otestujte všechny kalkulačky
   - Zkontrolujte responzivitu
   - Ověřte rychlost načítání

2. **SEO:**
   - Odeslete sitemap do Search Console
   - Zkontrolujte indexování
   - Optimalizujte meta tagy

3. **Propagace:**
   - Sdílejte na sociálních sítích
   - Přidejte do katalogů webů
   - Začněte s obsahem (blog)

## 🐛 Řešení problémů

### AdSense se nezobrazuje:
- Počkejte 24-48 hodin po schválení
- Zkontrolujte, zda je ID správné
- Ověřte, zda není blokován adblocker

### Analytics nefunguje:
- Zkontrolujte Measurement ID
- Ověřte, zda je script správně načten
- Použijte Google Tag Assistant

### Build selhává:
- Zkontrolujte TypeScript chyby: `npm run lint`
- Ověřte všechny importy
- Zkontrolujte konzoli v terminálu

## 📞 Podpora

Pro dotazy a problémy:
- Zkontrolujte README.md
- Podívejte se do PLAN.md
- Vytvořte issue na GitHubu

---

**Vše je připraveno! Postupujte krok za krokem a váš web bude brzy generovat příjem! 🚀**

