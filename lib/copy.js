// lib/copy.js — Kompletný viditeľný obsah landing page.
// Všetky textové zmeny sa robia tu. Komponenty čítajú dáta len z tohto objektu.

export const copy = {
  metadata: {
    title: "EcoHerbal — Vytváraj ručne robené mydlá, ktoré sa predávajú samy",
    description:
      "Kurz EcoHerbal pre ručne robené mydlá a prírodnú kozmetiku: nauč sa vyrábať prírodné mydlá s viac ako 27 sprievodcami, 500 receptami a 8 BONUSMI ZADARMO. Doživotný prístup so zľavou 80%.",
    lang: "sk",
  },

  brand: {
    name: "EcoHerbal",
    tagline: "Bylinná eko krása",
  },

  hero: {
    banner: "TÁTO PONUKA + BONUSY ZADARMO VYPRŠIA O:",
    timerLabels: { days: "Dni", hours: "Hod", minutes: "Min", seconds: "Sek" },
    kicker: "Už viac ako 2 586 žien si vyrába vlastné produkty",
    headlinePre: "EXPERTKA NA KOZMETIKU ODHAĽUJE,",
    headlineHighlight: "ako vytvoriť neodolateľné mydlá,",
    headlinePost: "ktoré tvoju pokožku ošetria už od prvého dňa",
    supporting:
      "Ideálne pre tie z vás, ktoré chcú začať OKAMŽITE a zarábať skutočné peniaze vlastnými prírodnými mydlami.",
    cta: "Chcem prístup hneď teraz 🧼",
    imageAlt: "Žena s pestovanou a žiarivou pokožkou vďaka prírodnej kozmetike od EcoHerbal",
    trustChips: [
      { icon: "⭐", text: "Viac ako 2 586 študentiek" },
      { icon: "🎁", text: "8 BONUSOV ZADARMO" },
      { icon: "🛡️", text: "7-dňová záruka" },
    ],
  },

  instructorIntro: {
    quote:
      "Tento exkluzívny kurz som vytvorila presne pre teba – pre ženu, ktorá miluje tvoriť rukami a chce získať zručnosť, ktorá naozaj vynáša.",
  },

  soapCarousel: {
    items: [
      { image: "/carousel/soap-1.webp", alt: "Čerstvo vyrobené ručné mydlá" },
      { image: "/carousel/soap-2.webp", alt: "Mydlá s mramorovým efektom" },
      { image: "/carousel/soap-3.webp", alt: "Mydlo s dekoratívnou zelenou vlnou" },
      { image: "/carousel/soap-4.webp", alt: "Prírodné levanduľové mydlo" },
      { image: "/carousel/soap-5.webp", alt: "Kolekcia ručne robených mydiel" },
      { image: "/carousel/soap-6.webp", alt: "Detaily dekoratívnych mydiel" },
    ],
  },

  benefits: {
    headline:
      "...môžeš začať s MINIMÁLNYM ROZPOČTOM a získať tieto VÝHODY!",
    items: [
      { icon: "Leaf", text: "Používaj prírodné a bezpečné suroviny." },
      { icon: "ShieldCheck", text: "Zabudni na suchú pokožku, podráždenie a alergie." },
      { icon: "Sparkles", text: "Vytvor akékoľvek mydlo, aké si len predstavíš." },
      { icon: "TrendingUp", text: "Premeň svoj koníček na reálny príjem." },
    ],
    checklist: [
      "Koniec nevydareným receptom",
      "Nemusíš byť žiadna expertka",
      "Žiadny stres ani presný rozvrh",
    ],
    imageAlt: "Ruky držiace čerstvo vyrobené ručné mydlá",
  },

  trending: {
    kicker: "TREND PRE ROK 2026",
    headline:
      "už za pár dní sa naučíš vyrábať moderné mydlá, ktoré sa predávajú úplne samy",
    imageAlt: "Ručne robené mydlá s moderným mramorovým dizajnom",
  },

  courseContent: {
    headline: "všetko ťa tu naučíme",
    subheadline: "pozri si kompletný obsah",
    sectionLabel: "vo viac ako 27 e-knihách nájdeš...",
    paragraphs: [
      {
        bold: "Kompletné know-how",
        rest: " na navrhovanie, výrobu a skladovanie prírodných mydiel ako naozajstná profesionálka.",
      },
      {
        bold: "Koniec metóde pokus-omyl:",
        rest:
          " sleduj jasný a overený postup s praktickými tipmi, ktoré ti ušetria kopec času aj nervov.",
      },
    ],
  },

  megapack: {
    kicker: "MEGA BALÍČEK",
    headline: "mega balíček obsahuje",
    items: [
      { bold: "Kompletný sprievodca krok za krokom", rest: " od začiatočníčky po profíčku." },
      { bold: "500 receptov", rest: " pre všetky typy pokožky." },
      { bold: "Výroba vlastných", rest: " esenciálnych olejov." },
      { bold: "Postupy na prípravu", rest: " prírodných tekutých mydiel." },
    ],
    imageAlt: "Ukážka mega balíčka na výrobu ručných mydiel EcoHerbal",
  },

  bonuses: {
    kicker: "BONUSY ZADARMO",
    headline: "Ak to využiješ ešte dnes, získaš 8 BONUSOV ZADARMO!",
    subheadline: "27 sprievodcov v digitálnom PDF formáte na stiahnutie.",
    badge: "BONUS #",
    freeLabel: "ZADARMO",
    items: [
      { image: "/bonuses/bonus-1.webp", title: "Telová kozmetika", desc: "Prírodné recepty pre dokonalú starostlivosť o telo." },
      { image: "/bonuses/bonus-2.webp", title: "Pleťová kozmetika", desc: "Krémy, séra a toniká pre žiarivú pleť." },
      { image: "/bonuses/bonus-3.webp", title: "Prírodný deodorant", desc: "Jemné a účinné zloženie bez chémie." },
      { image: "/bonuses/bonus-4.webp", title: "Tuhá ústna voda", desc: "Postaraj sa o svoje zuby pomocou prírodných zložiek." },
      { image: "/bonuses/bonus-5.webp", title: "Prírodná zubná pasta", desc: "Hĺbkové čistenie bez fluoridu a sulfátov." },
      { image: "/bonuses/bonus-6.webp", title: "Soli do kúpeľa", desc: "Dopraj si relax s domácimi voňavými soľami." },
      { image: "/bonuses/bonus-7.webp", title: "Tuhý šampón", desc: "Zdravé vlasy úplne bez plastových obalov." },
      { image: "/bonuses/bonus-8.webp", title: "Ručne robené sviečky", desc: "Kompletný bonusový kurz na výrobu dekoračných sviečok." },
    ],
    footer: "Všetky bonusy sú doručené okamžite a 100% digitálne.",
  },

  features: {
    headline: "Všetko, čo získaš",
    subheadline: "Plný prístup, materiály na stiahnutie (PDF) a certifikát.",
    items: [
      { icon: "Wifi", title: "100% online", desc: "Sleduj lekcie kedykoľvek a odkiaľkoľvek chceš." },
      { icon: "FolderOpen", title: "Materiály na Google Drive", desc: "Všetko je prehľadne usporiadané, aby si napredovala bez chaosu." },
      { icon: "Infinity", title: "Doživotný prístup ku kurzu", desc: "Uč sa vlastným tempom, prístup ti už nikdy nezmizne." },
      { icon: "BookOpen", title: "E-knihy sú navždy tvoje", desc: "Stiahni si ich alebo čítaj online bez časového obmedzenia." },
      { icon: "Award", title: "Certifikát o absolvovaní", desc: "Potvrď svoje nové zručnosti oficiálnym dokumentom." },
      { icon: "ShieldCheck", title: "7-dňová záruka", desc: "Ak nebudeš spokojná, vrátime ti 100% peňazí." },
    ],
  },

  primaryPricing: {
    discountBadge: "80% ZĽAVA",
    valuedAtLabel: "Bežná hodnota programu",
    regularPrice: "39,50 €",
    offerPrice: "8,90 €",
    cta: "ZÍSKAŤ ZĽAVU",
    payInfo: "Jednorazová platba s doživotným prístupom",
    imageAlt: "Ukážka programu EcoHerbal s exkluzívnou zľavou",
    socialImageAlt: "Screenshoty reálnych správ od nadšených študentiek",
  },

  socialProof: {
    headline: "NEPREPASNI TÚTO ŠANCU!",
    subheadlinePre: "Už viac ako",
    countHighlight: "2 586 žien",
    subheadlinePost: "si s radosťou vyrába vlastnú kozmetiku!",
  },

  reviewScreenshots: {
    headline: "Reálne správy od našich študentiek",
    subheadline: "Toto nám chodí na WhatsApp každý jeden deň.",
    onlineLabel: "online",
    typingLabel: "píše…",
    items: [
      {
        name: "Katarína",
        timeLabel: "10:24",
        messages: [
          { text: "Práve som urobila svoje prvé mydlá podľa tvojho návodu! 🌸" },
          { text: "Sú nádherné a moja pokožka je po nich super jemná ✨" },
          { text: "Kedy pridáš ďalšie recepty?" },
        ],
      },
      {
        name: "Lenka",
        timeLabel: "včera",
        messages: [
          { text: "V sobotu som na trhoch predala 12 mydiel 😱" },
          { text: "Ľudia sa o ne išli potrhať, vôbec som tomu neverila 🙌" },
          { text: "Naozaj moc ďakujem za tento kurz ❤️" },
        ],
      },
      {
        name: "Silvia",
        timeLabel: "12:05",
        messages: [
          { text: "Začala som pred 2 týždňami a už mám vlastnú značku 💕" },
          { text: "Recepty sa dajú zvládnuť ľavou zadnou" },
          { text: "A tie BONUSY zadarmo sú čistý poklad 🎁" },
        ],
      },
      {
        name: "Veronika",
        timeLabel: "dnes",
        messages: [
          { text: "Ahoj! Len som ti chcela napísať, že som práve uzavrela veľkú objednávku" },
          { text: "10 mydiel pre jeden bio obchodík 🌿" },
          { text: "Tisíckrát ďakujem, normálne si mi spravila deň 🌷" },
        ],
      },
    ],
  },

  curriculum: {
    headline: "Obsah kurzu",
    subheadline: "Klikni na menu a pozri si všetko, čo získaš.",
    courses: [
      {
        title: "Kurz | Ručne robené mydlá",
        lessons: [
          "Mydlá EcoHerbal mod. 1",
          "Mydlá EcoHerbal mod. 2",
          "Výroba mydiel mod. 1",
          "Výroba mydiel mod. 2",
          "Základné techniky",
          "Suroviny a procesy",
          "Neskutočné prísady a ich vlastnosti",
        ],
      },
      {
        title: "Kurz | 500 receptov na mydlá",
        lessons: [
          "E-kniha (PDF) s 500 unikátnymi receptami.",
          "Sprievodca úpravou a zámenou surovín.",
        ],
      },
      {
        title: "Kurz | Vytvor si vlastné tekuté mydlá",
        lessons: [
          "Kompletný sprievodca výrobou domácich glycerínových tekutých mydiel krok za krokom.",
        ],
      },
      {
        title: "Kurz | Vyrob si vlastné esenciálne oleje",
        lessons: [
          "Kompletný sprievodca výrobou vlastných esenciálnych olejov krok za krokom.",
        ],
      },
      {
        title: "BONUS ZADARMO | Kurz výroby ručných sviečok",
        lessons: [
          "Výroba sviečok 1",
          "Výroba sviečok 2",
          "Sviečky zo včelieho vosku",
          "Sviečky zo sójového vosku",
          "Zdobenie sviečok",
          "Sprievodca ručne robenými sviečkami",
          "Extra: Lávové lampy",
        ],
      },
      {
        title: "BONUS ZADARMO | Prírodná kozmetika",
        lessons: [
          "BONUS ZADARMO Telová kozmetika",
          "BONUS ZADARMO Pleťová kozmetika",
          "BONUS ZADARMO Deodorant",
          "BONUS ZADARMO Tuhá ústna voda",
          "BONUS ZADARMO Zubná pasta",
          "BONUS ZADARMO Soli do kúpeľa",
          "BONUS ZADARMO Tuhý šampón",
        ],
      },
    ],
  },

  urgencyBanner: {
    discount: "80% ZĽAVA",
    plus: "+ 8 BONUSOV ZADARMO",
    middle: "k tvojmu nákupu len do",
    deadline: "14. DECEMBRA",
    or: "alebo do vypredania",
    slots: "26 MIEST",
  },

  finalCta: {
    preHeadline: "TVOJ ČAS JE PRÁVE TERAZ",
    urgencyTop: "80% ZĽAVA",
    headline: "Získaj mega balíček EcoHerbal DNES s brutálnou zľavou",
    subUrgency:
      "Už viac ako 2 586 žien si vyrába vlastné mydlá a kozmetiku. Dnes si na rade ty.",
    bundleList: [
      "Kompletný kurz ručne robených mydiel (4 moduly)",
      "500 unikátnych receptov pre všetky typy pokožky",
      "Kurz výroby tekutých mydiel krok za krokom",
      "Kurz výroby esenciálnych olejov",
      "BONUS — Kompletný kurz ručne robených sviečok",
      "BONUS — 7 sprievodcov prírodnou kozmetikou",
      "Doživotný prístup (PDF/online) + Certifikát o absolvovaní",
    ],
    guaranteeText:
      "Plná 7-dňová záruka. Ak sa ti kurz nebude páčiť, bez akýchkoľvek otázok ti vrátime 100% peňazí.",
    guaranteeImageAlt: "Pečať 7-dňovej záruky",
    regularPriceLabel: "Predtým",
    regularPrice: "39,50 €",
    offerPrice: "8,90 €",
    discountBadge: "80% ZĽAVA",
    urgencyText: "Jednorazová platba s doživotným prístupom",
    bottomUrgency: "Táto ponuka vyprší, akonáhle časovač ukáže nulu.",
    button: "ZÍSKAŤ MEGA BALÍČEK TERAZ",
    trustRow: "100% bezpečné platby · Okamžitý prístup · 7-dňová záruka",
  },

  instructorBio: {
    name: "Elena Kováčová",
    title: "Expertka na prírodnú kozmetiku",
    bio: "Ahoj, volám sa Elena. Prírodnej kozmetike a výrobe mydiel sa venujem už viac ako 8 rokov. To, čo začalo ako osobná potreba starať sa o vlastnú pleť bez zbytočnej chémie, sa stalo mojou najväčšou vášňou... a tiež mojím životným štýlom. Za tie roky som si vyvinula desiatky vlastných receptúr a pomohla mnohým ženám, ako si ty, urobiť prvé kroky v tomto fascinujúcom svete. Od výroby úplne prvého mydla z domácich surovín, až po premenu tohto umenia na ziskový a udržateľný biznis. Viem, aké to je začať od nuly, bez skúseností, so strachom z chýb alebo s pocitom, že nevieš, kde začať. Preto v tomto kurze zdieľam všetko, čo som sa naučila – jasne, prakticky a bez zbytočných komplikácií.",
    imageAlt: "Elena Kováčová, expertka na prírodnú kozmetiku a ručne robené mydlá",
    portfolioImages: [
      "/instructor-portfolio/work-1.webp",
      "/instructor-portfolio/work-2.webp",
      "/instructor-portfolio/work-3.webp",
    ],
    portfolioAlts: [
      "Ručne robené mydlá z Eleninej dielne",
      "Práca v ateliéri prírodnej kozmetiky",
      "Hotové produkty pripravené na predaj",
    ],
    yearsLabel: "Viac ako 8 rokov",
    yearsText: "skúseností s tvorbou prírodnej kozmetiky",
    studentsLabel: "Viac ako 2 586",
    studentsText: "vyškolených študentiek",
  },

  testimonials: {
    headline: "Okrem iného si budeš môcť vyžiadať aj svoj certifikát",
    subheadline: "Pozri sa, čo hovoria tie, ktoré si už kurzom EcoHerbal prešli.",
    productLabel: "EcoHerbal — Kurz ručne robených mydiel",
    reviewedLabel: "napísala recenziu na",
    actions: { like: "Páči sa mi to", comment: "Komentovať", share: "Zdieľať" },
    items: [
      {
        name: "Jana Nováková",
        handle: "@janka_n",
        text: "Kurz sa mi strašne páčil. Robila som všetko presne podľa lektorky a za menej ako mesiac som rozbehla vlastný biznis a mala prvé predaje. Teraz robím mydiel čoraz viac a dokonca uvažujem o malom obchodíku. Ďakujem, tento kurz za to naozaj stál.",
      },
      {
        name: "Mária Balážová",
        handle: "",
        text: "Minulý týždeň som kurz dokončila a som úplne nadšená. Už som spravila prvé mydlá, doma sme ich otestovali a všetci ich milujú. Teraz chystám všetko na to, aby som ich začala predávať, presne ako nás to učili. Už teraz mám zopár známych, čo si chcú kúpiť. Ďakujem za túto šancu. Stálo to za každý cent.",
      },
      {
        name: "Zuzana Horváthová",
        handle: "",
        text: "Píšem sem, lebo kurz som si urobila už dávnejšie a hneď potom som začala budovať svoj biznis. Úprimne, ide to fakt skvele a včera som sa dohodla s jednou značkou, že začnú predávať pár mojich produktov. Nikdy by mi nenapadlo, že sa dostanem až sem, takže OBROVSKÉ ĎAKUJEM. Tento kurz bola tá najlepšia investícia.",
      },
      {
        name: "Martin Varga",
        handle: "@mato_varga",
        text: "Parádny obsah, všetko je vysvetlené jasne a profi. A tie bonusy zadarmo... ak máte možnosť si to kúpiť, bežte do toho. Neskutočne cenné info. Držte sa a vďaka, že posúvate ďalej takéto vedomosti, vďaka ktorým sa dá bez problémov rozbehnúť podnikanie.",
      },
    ],
    cta: "CHCEM ZAČAŤ EŠTE DNES",
  },

  closingProof: {
    headlinePre: "Naše študentky si vyrábajú prvé produkty za",
    headlineHighlight: "menej ako 3 dni",
    headlinePost: ". Na čo ešte čakáš?",
    ctaLabel: "ZAČNI EŠTE DNES",
  },

  guarantee: {
    badgeLabel: "7-DŇOVÁ ZÁRUKA",
    headline: "NEMUSÍŠ MAŤ STRACH, RIZIKO BERIEME NA SEBA.",
    text: "Máš celý jeden týždeň na otestovanie kurzu, a ak sa ti nebude páčiť alebo nenaplní tvoje očakávania, vrátime ti 100% peňazí.",
    badgeAlt: "Pečať 7-dňovej záruky EcoHerbal",
    certs: [
      { icon: "Award", label: "Oficiálny certifikát" },
      { icon: "ShieldCheck", label: "100% bezpečná platba" },
      { icon: "Lock", label: "Chránené údaje" },
      { icon: "BadgeCheck", label: "Overená kvalita" },
    ],
  },

  faq: {
    headline: "Často kladené otázky",
    subheadline: "Všetko, čo potrebuješ vedieť predtým, než začneš.",
    items: [
      {
        q: "Je platba bezpečná?",
        a: "Áno, platba prebieha cez Hotmart, jednu z najbezpečnejších a najznámejších digitálnych platforiem na svete, ktorá funguje vo viac ako 160 krajinách a disponuje najmodernejšími bezpečnostnými certifikátmi. Tvoje platobné údaje budú plne chránené a sú 100% dôverné, čo zaručuje absolútne bezpečný nákup.",
      },
      {
        q: "Môžem kurz zvládnuť, aj keď o tom nič neviem?",
        a: "Samozrejme! Všetky e-knihy sú veľmi detailné a jediné, čo naozaj potrebuješ, je chuť učiť sa. Celý proces je veľmi jednoduchý a získaš neskutočne praktické nástroje.",
      },
      {
        q: "Môžem sa do kurzu dostať z akéhokoľvek zariadenia?",
        a: "Áno, do kurzu sa dostaneš z akéhokoľvek zariadenia! Či už si na počítači, tablete alebo mobile, obsah si môžeš prechádzať kedykoľvek, a to nezáviskle od tvojho operačného systému – Windows, macOS, iOS alebo Android. Pre ešte ľahší prístup z mobilu si môžeš stiahnuť aj priamo aplikáciu Hotmart.",
      },
      {
        q: "Je ťažké a drahé začať?",
        a: "Vôbec nie! Prírodná kozmetika si vyžaduje len veľmi nízku počiatočnú investíciu a my ťa naučíme, ako využiť dostupné materiály, aby si mohla začať bez zbytočných výdavkov.",
      },
      {
        q: "Kedy kurz začína?",
        a: "Ihneď po zakúpení dostaneš prístupový odkaz (a digitálne knihy v PDF), ktorý ti umožní okamžite vstúpiť do platformy. Kurz môžeš prechádzať kedykoľvek budeš chcieť a ostáva ti navždy.",
      },
      {
        q: "Čo všetko kurz zahŕňa?",
        a: "Kurz zahŕňa doživotný prístup, e-knihy s postupmi krok za krokom, materiály na stiahnutie (PDF), technickú podporu a certifikát o absolvovaní.",
      },
      {
        q: "Dávate aj certifikát?",
        a: "Samozrejme, akonáhle kurz dokončíš a napíšeš nám e-mail so žiadosťou, certifikát ti obratom pošleme.",
      },
    ],
  },

  footer: {
    brand: "CREARIS",
    copyright: "Copyright © crearis.online ® 2026",
    disclaimer:
      "Tento web nie je súčasťou webovej stránky Facebook alebo spoločnosti Facebook Inc. Taktiež táto stránka NIE JE žiadnym spôsobom podporovaná ani sponzorovaná spoločnosťou Facebook.",
    trademark: "FACEBOOK je registrovaná ochranná známka spoločnosti FACEBOOK, Inc.",
  },
};