# Plán projektu - Český Kalkulátor

## 📋 Název projektu
**Český Kalkulátor** - Univerzální kalkulační nástroj pro české uživatele

## 🎯 Účel projektu
Vytvořit užitečný webový nástroj, který:
- Pomáhá českým uživatelům s každodenními výpočty
- Generuje pasivní příjem z reklam a affiliate odkazů
- Funguje automaticky bez nutnosti ručního zadávání dat
- Je zdarma hostovatelný na Vercel

## 👥 Cílová skupina

### Primární cílová skupina:
1. **České domácnosti** (30-50 let)
   - Potřebují rychlé výpočty DPH při nákupu
   - Převody měn při cestování
   - Převody jednotek při vaření, stavebních pracích

2. **Malé podniky a živnostníci** (25-45 let)
   - Výpočet DPH pro faktury
   - Převody měn pro mezinárodní obchod
   - Rychlé kalkulace

3. **Studenti** (18-25 let)
   - Převody jednotek pro školní projekty
   - BMI kalkulačka pro zdravotní výchovu

### Sekundární cílová skupina:
- Učitelé a pedagogové
- Senioři (jednoduché použití)
- Cestovatelé

## 💰 Zdroje příjmů

### 1. Google AdSense (primární zdroj)
- **Umístění reklam:**
  - Hlavní stránka: 2 bloky (pod nástroji, v patičce)
  - Stránky kalkulaček: 1 blok pod výsledky
  - Mezi sekcemi: 1 blok
  
- **Očekávaný výdělek:**
  - 1000 návštěvníků/měsíc = cca 200-500 Kč
  - 5000 návštěvníků/měsíc = cca 1000-2500 Kč
  - 10000+ návštěvníků/měsíc = cca 3000-5000 Kč

### 2. Affiliate odkazy
- **Finanční produkty:**
  - Bankovní účty, kreditní karty
  - Pojištění
  - Investiční produkty
  
- **E-shopy:**
  - Alza.cz (affiliate program)
  - Mall.cz
  - Heureka.cz
  
- **Nástroje a software:**
  - Kalkulačky a aplikace
  - Online služby

- **Očekávaný výdělek:**
  - 1-2% konverze z návštěvníků
  - Průměrná provize: 50-500 Kč/konverze

### 3. Mikroplatby (budoucí rozšíření)
- Prémiové funkce bez reklam
- Export výsledků do PDF
- Historie výpočtů
- Vlastní kalkulačky

### 4. Sponzorované obsahy
- Partnerství s českými firmami
- Bannerové reklamy
- Branded content

## 🛠️ Technologický plán

### Frontend:
- **Next.js 14** - React framework s App Router
  - Server-side rendering pro SEO
  - Automatická optimalizace
  - Rychlé načítání

- **TypeScript** - Typování pro bezpečnost kódu
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Moderní ikony

### Backend/API:
- **Minimální backend** - Vše běží na frontendu
- **Veřejné API:**
  - ExchangeRate API (kurzy měn) - bezplatné
  - Alternativa: Fixer.io, CurrencyAPI (s API klíčem)

### Hosting:
- **Vercel** - Bezplatné hostování
  - Automatické deployment z GitHub
  - SSL certifikáty zdarma
  - CDN globálně

### Analytika:
- **Google Analytics 4** - Sledování návštěvnosti
- **Google Search Console** - SEO monitoring

## 📝 Kompletní plán kroků

### Fáze 1: Inicializace projektu ✅
- [x] Vytvoření Next.js projektu
- [x] Nastavení TypeScript
- [x] Konfigurace Tailwind CSS
- [x] Základní struktura složek

### Fáze 2: Vývoj funkcionalit ✅
- [x] Převodník jednotek
  - [x] Délka, hmotnost, objem, plocha, teplota
  - [x] Logika převodů
  - [x] Uživatelské rozhraní
  
- [x] Převodník měn
  - [x] Integrace s ExchangeRate API
  - [x] Podpora hlavních měn (CZK, EUR, USD, GBP, PLN)
  - [x] Automatická aktualizace kurzů
  
- [x] DPH kalkulačka
  - [x] Standardní sazba 21%
  - [x] Snížené sazby 15% a 10%
  - [x] Výpočet s DPH i bez DPH
  
- [x] BMI kalkulačka
  - [x] Výpočet BMI
  - [x] Kategorizace výsledků
  - [x] Vizuální zobrazení

### Fáze 3: UI/UX ✅
- [x] Hlavní stránka s přehledem nástrojů
- [x] Responzivní design
- [x] Moderní a čistý vzhled
- [x] Navigace mezi stránkami
- [x] Footer s odkazy

### Fáze 4: SEO optimalizace ✅
- [x] Meta tagy pro všechny stránky
- [x] Open Graph pro sociální sítě
- [x] Sitemap.xml
- [x] Robots.txt
- [x] Strukturovaná data (doporučeno přidat JSON-LD)

### Fáze 5: Monetizace ✅
- [x] Komponenta pro reklamy (AdBanner)
- [x] Místa pro reklamní bloky
- [x] Příprava pro AdSense integraci
- [x] Dokumentace pro affiliate odkazy

### Fáze 6: Nasazení
- [ ] Push na GitHub
- [ ] Propojení s Vercel
- [ ] První deployment
- [ ] Testování na produkci

### Fáze 7: Registrace AdSense
- [ ] Vytvoření Google AdSense účtu
- [ ] Přidání webu do AdSense
- [ ] Čekání na schválení (1-7 dní)
- [ ] Implementace AdSense kódu
- [ ] Testování reklam

### Fáze 8: Marketing a propagace
- [ ] Registrace Google Analytics
- [ ] Registrace Google Search Console
- [ ] Vytvoření Facebook stránky
- [ ] První SEO optimalizace
- [ ] Backlinky a propagace

## 🚀 Nastavení pro monetizaci

### Google AdSense:

1. **Registrace:**
   - Jděte na adsense.google.com
   - Přihlaste se pomocí Google účtu
   - Přidejte svůj web (URL z Vercel)
   - Počkejte na schválení

2. **Implementace:**
   - Získejte AdSense ID (ca-pub-XXXXXXXXXX)
   - Upravte `components/AdBanner.tsx`
   - Přidejte script do `app/layout.tsx`
   - Umístěte reklamní bloky na stránky

3. **Umístění reklam:**
   - **Hlavní stránka:** 2 bloky (pod nástroji, v sidebaru)
   - **Stránky kalkulaček:** 1 blok pod výsledky
   - **Mezi sekcemi:** 1 blok (volitelné)

### Affiliate odkazy:

1. **Registrace do affiliate programů:**
   - Alza Partner (alza.cz)
   - Mall Affiliate
   - Heureka Affiliate
   - Finanční produkty (banky, pojišťovny)

2. **Implementace:**
   - Přidejte odkazy do sekcí s doporučeními
   - Použijte `rel="nofollow sponsored"`
   - Sledujte konverze

3. **Umístění:**
   - Pod výsledky kalkulaček
   - V sidebaru
   - V článcích a návodech

## 🔧 Údržba a škálování (1-2 hodiny týdně)

### Týdenní úkoly:

1. **Kontrola funkcionality (15 min):**
   - Otestujte všechny kalkulačky
   - Zkontrolujte API pro kurzy měn
   - Ověřte, že vše funguje

2. **Analytika (15 min):**
   - Google Analytics - zkontrolujte návštěvnost
   - AdSense - zkontrolujte výdělky
   - Identifikujte nejpopulárnější stránky

3. **Obsah (30 min):**
   - Napište 1 článek do blogu týdně
   - Aktualizujte informace na stránkách
   - Přidejte nové tipy a návody

4. **Technická údržba (30 min):**
   - Aktualizujte závislosti (měsíčně)
   - Zkontrolujte bezpečnost
   - Opravte případné chyby

### Měsíční úkoly:

1. **SEO optimalizace:**
   - Zkontrolujte pozice v Google
   - Aktualizujte klíčová slova
   - Přidejte nové backlinky

2. **Rozšíření funkcí:**
   - Přidejte novou kalkulačku
   - Vylepšete existující funkce
   - Přidejte nové jednotky nebo měny

## 📈 Mini plán propagace

### 1. SEO (Search Engine Optimization)

**Klíčová slova:**
- "kalkulačka DPH"
- "převodník měn"
- "převodník jednotek"
- "BMI kalkulačka"
- "česká kalkulačka"
- "online kalkulačka"

**Strategie:**
- Optimalizace meta tagů ✅
- Strukturovaná data (JSON-LD) - doporučeno
- Interní propojení mezi stránkami
- Rychlé načítání stránek
- Mobilní optimalizace

**Obsah:**
- Blog s články o kalkulačkách
- Návody a tipy
- FAQ sekce

### 2. Sociální sítě

**Facebook:**
- Vytvořte stránku "Český Kalkulátor"
- Sdílejte užitečné tipy
- Odpovídejte na komentáře
- Spolupracujte s dalšími stránkami

**Instagram:**
- Vizuální obsah
- Infografiky s kalkulačkami
- Tipy a triky
- Stories s odkazy

**LinkedIn:**
- Profesionální obsah
- Články pro podnikatele
- Sdílení v skupinách

### 3. Obsahový marketing

**Blog:**
- "Jak vypočítat DPH - kompletní průvodce"
- "Převod měn - vše co potřebujete vědět"
- "BMI kalkulačka - jak správně měřit"
- "Převodník jednotek - praktické tipy"

**YouTube:**
- Návody na použití kalkulaček
- Tipy a triky
- Recenze a srovnání

### 4. Komunitní propagace

**Reddit:**
- r/czech - sdílení užitečných nástrojů
- r/cesky - lokální komunita
- r/personalfinance - finanční kalkulačky

**Diskuzní fóra:**
- Diskuse.cz
- Poradna.cz
- Finanční fóra

### 5. Backlinky a odkazy

**Strategie:**
- Kontaktujte české blogy
- Napište guest posty
- Zaregistrujte se do katalogů webů
- Spolupracujte s influencery

**Katalogy:**
- Seznam.cz - přidání do katalogu
- Google My Business
- Lokální katalogy

### 6. Google Ads (volitelné)

**Rozpočet:**
- Začněte s 500-1000 Kč/měsíc
- Zaměřte se na klíčová slova
- Sledujte ROI

**Klíčová slova:**
- "kalkulačka DPH"
- "převodník měn CZK"
- "BMI kalkulačka online"

## 📊 Očekávané výsledky

### První měsíc:
- **Návštěvnost:** 100-300 návštěvníků
- **Výdělek:** 0-100 Kč (čekání na AdSense schválení)
- **Cíl:** Spuštění, základní SEO

### Třetí měsíc:
- **Návštěvnost:** 500-1000 návštěvníků/měsíc
- **Výdělek:** 200-500 Kč/měsíc
- **Cíl:** Stabilní návštěvnost, první výdělky

### Šestý měsíc:
- **Návštěvnost:** 2000-5000 návštěvníků/měsíc
- **Výdělek:** 1000-3000 Kč/měsíc
- **Cíl:** Růst, rozšíření funkcí

### Dvanáctý měsíc:
- **Návštěvnost:** 10000+ návštěvníků/měsíc
- **Výdělek:** 5000+ Kč/měsíc
- **Cíl:** Uznávaný český kalkulační nástroj

## ✅ Závěr

Projekt je navržen tak, aby:
- Byl užitečný pro české uživatele
- Generoval pasivní příjem
- Vyžadoval minimální údržbu
- Byl škálovatelný a rozšiřitelný

**Další kroky:**
1. Nainstalujte závislosti: `npm install`
2. Spusťte vývojový server: `npm run dev`
3. Otestujte všechny funkce
4. Deploy na Vercel
5. Registrace AdSense
6. Začněte propagaci

**Hodně štěstí! 🚀**

