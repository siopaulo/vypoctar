# Návod: reklamy, nasazení a propagace

Níže máš praktický checklist, jak web nasadit na vlastní doménu, připravit ho pro reklamní sítě a nastartovat propagaci.

## 1. Přidání reklamního systému (např. Google AdSense)

1. **Založ účet AdSense**
   - Přihlas se na [https://adsense.google.com](https://adsense.google.com), použij firemní nebo osobní Google účet.
   - Vyplň základní údaje, platební profil a adresu.
2. **Ověř vlastnictví webu**
   - AdSense nabídne meta tag nebo DNS záznam. V Next.js projektu přidej meta tag do `app/layout.tsx` (sekce `<head>`), případně uprav DNS v registru domény.
3. **Počkej na schválení**
   - Google obvykle schvaluje první web během 1–7 dní. Web musí být dostupný na finální doméně, mít funkční menu, obsah a stránku o projektu (již existuje).
4. **Vlož globální skript**
   - Po schválení přidej do `app/layout.tsx` (nejlépe přes `<Script src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js" strategy="afterInteractive" async />`) svůj `data-ad-client="ca-pub-XXXX"`.
5. **Umísti reklamní bloky**
   - Nahraď placeholdery “Reklamní blok - AdSense” vlastní komponentou.
   - Příklad:
     ```tsx
     <ins
       className="adsbygoogle"
       style={{ display: 'block' }}
       data-ad-client="ca-pub-XXXX"
       data-ad-slot="YYYY"
       data-ad-format="auto"
       data-full-width-responsive="true"
     />
     ```
   - Po renderu zavolej ` (window.adsbygoogle = window.adsbygoogle || []).push({}) ` (např. v klientské komponentě pomocí `useEffect`).
6. **Dodrž pravidla**
   - Na stránce musí být informace o cookies a ochraně soukromí.
   - Nevkládej více než tři velké bloky na jeden “fold”.

## 2. Nasazení a vlastní doména

1. **Vercel projekt**
   - Pokud ještě neběží, spusť `npm run build` a poté `vercel`/`vercel deploy`.
   - Každý branch může mít vlastní Preview; produkce běží z `main`.
2. **Přidání domény**
   - Ve Vercelu otevři projekt → *Settings* → *Domains* → zadej svou doménu (např. `kalkulator.cz`).
   - V registru nastav DNS záznamy podle instrukcí Vercelu (A záznamy na `76.76.21.21` nebo CNAME na `cname.vercel-dns.com`).
3. **HTTPS a kanonické URL**
   - Po propagaci DNS (může trvat až 24 h) Vercel automaticky vystaví TLS certifikát.
   - Uprav `metadataBase` v `app/layout.tsx` na finální URL a aktualizuj `sitemap.ts`.
4. **Monitoring**
   - Aktivuj Web Analytics ve Vercelu nebo nasadit Google Analytics 4.
   - Sleduj `Core Web Vitals` a případné chyby přes Vercel / Search Console.

## 3. Propagace a SEO kroky

1. **Základní checklist**
   - Přidej web do Google Search Console + Bing Webmaster Tools.
   - Odešli sitemapu (`/sitemap.xml`) a zkontroluj indexaci hlavních URL.
2. **On-page obsah**
   - U každé kalkulačky přidej odstavec s vysvětlením vzorce, příklad a FAQ (pomáhá long-tail dotazům).
   - Vkládej interní odkazy mezi kalkulačkami (např. DPH ⇄ Převodník měn).
3. **Blog / články**
   - Krátké návody typu “Jak na daň z přidané hodnoty v roce 2025” nebo “Jak spočítat spotřebu paliva před cestou”.
   - Publikuj 1–2 články týdně, sdílej je na LinkedIn/Facebook skupinách.
4. **Off-page odkazy**
   - Získej odkazy z katalogů (Firmy.cz, Najisto), odborných fór nebo partnerských blogů.
   - Nabídni kalkulačku jako embed pro menší blogy (odkaz zpět na zdroj).
5. **Sociální sítě a komunita**
   - Krátká videa / reels s ukázkou výpočtu.
   - Vstup do FB skupin o podnikání, účtování, studiu – sdílej konkrétní řešení (např. “potřebujete rychle spočítat DPH? tady je nástroj”).
6. **E-mail a notifikace**
   - Jakmile máš nasazenou doménu + GDPR dokumenty, přidej jednoduchý newsletter (např. Buttondown, MailerLite).
   - Posílej souhrny nových kalkulaček, aktualizací sazeb a tipů.

Dodržováním výše uvedeného checklistu bude projekt připravený pro reklamní sítě, korektně nasazený na vlastní doméně a viditelný ve vyhledávačích i na sociálních sítích.
