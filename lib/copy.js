// lib/copy.js — Kompletný viditeľný obsah landing page.
// Všetky textové zmeny sa robia tu. Komponenty čítajú dáta len z tohto objektu.

export const copy = {
  metadata: {
    title: "EkoBylinka — Vyrábaj si ručne robené mydlá a prírodnú kozmetiku doma",
    description:
      "Kurz EkoBylinka pre ručne robené mydlá a prírodnú kozmetiku: nauč sa vyrábať prírodné produkty pre seba a svoju rodinu s viac ako 27 sprievodcami, 500 receptami a 3 BONUSMI ZADARMO. Doživotný prístup so zľavou 80%.",
    lang: "sk",
  },

  brand: {
    name: "EkoBylinka",
    tagline: "Bylinná eko krása",
  },

  hero: {
    banner: "TÁTO PONUKA + BONUSY ZADARMO VYPRŠIA O:",
    timerLabels: { days: "Dni", hours: "Hod", minutes: "Min", seconds: "Sek" },
    kicker: "Už viac ako 2 586 žien si vyrába vlastné produkty doma",
    headlinePre: "EXPERTKA NA PRÍRODNÚ KOZMETIKU ODHAĽUJE,",
    headlineHighlight: "ako vytvoriť voňavé mydlá,",
    headlinePost: "ktoré budú tvoju pokožku ošetrovať už od prvého dňa",
    supporting:
      "Ideálne pre každého, kto chce OKAMŽITE začať vyrábať vlastné prírodné mydlá — bez chémie, bez zbytočných výdavkov a s ozajstnou radosťou.",
    cta: "Chcem prístup hneď teraz 🧼",
    imageAlt: "Žena s pestovanou a žiarivou pokožkou vďaka prírodnej kozmetike od EkoBylinka",
    trustChips: [
      { icon: "⭐", text: "Viac ako 2 586 študentiek" },
      { icon: "🎁", text: "3 BONUSY ZADARMO" },
      { icon: "🛡️", text: "14-dňová záruka" },
    ],
  },

  instructorIntro: {
    quote:
      "Tento kurz som vytvorila presne pre teba – pre ženu, ktorá miluje tvoriť rukami a chce sa starať o seba a svojich blízkych prirodzenou cestou.",
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
      { icon: "TrendingUp", text: "Premeň tvorenie na ozajstnú radosť u seba doma." },
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
      "už za pár dní sa naučíš vyrábať moderné mydlá, ktorými všetkých očaríš",
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
      { bold: "Kompletný sprievodca krok za krokom —", rest: " od začiatočníčky po pokročilú úroveň." },
      { bold: "500 receptov", rest: " pre všetky typy pokožky." },
      { bold: "Výroba vlastných", rest: " esenciálnych olejov." },
      { bold: "Postupy na prípravu", rest: " prírodných tekutých mydiel." },
    ],
    imageAlt: "Ukážka mega balíčka na výrobu ručných mydiel EkoBylinka",
  },

  bonuses: {
    kicker: "BONUSY ZADARMO",
    headline: "Ak to využiješ ešte dnes, získaš 3 BONUSY ZADARMO!",
    subheadline: "Doplnkoví sprievodcovia v digitálnom PDF formáte na stiahnutie.",
    badge: "BONUS #",
    freeLabel: "ZADARMO",
    items: [
      { image: "/bonuses/bonus-1.webp", title: "Telová kozmetika", desc: "Prírodné recepty na maslá, mlieka a peelingy pre dokonalú starostlivosť o telo." },
      { image: "/bonuses/bonus-6.webp", title: "Soli do kúpeľa", desc: "Dopraj si relax s domácimi voňavými soľami a šumivými bombami." },
      { image: "/bonuses/bonus-7.webp", title: "Tuhý šampón", desc: "Zdravé vlasy bez plastových obalov a bez chémie." },
    ],
    footer: "Všetky bonusy sú doručené okamžite a 100% digitálne.",
  },

  features: {
    headline: "Všetko, čo získaš",
    subheadline: "Plný prístup a materiály na stiahnutie (PDF).",
    items: [
      { icon: "Wifi", title: "100% online", desc: "Sleduj lekcie kedykoľvek a odkiaľkoľvek chceš." },
      { icon: "FolderOpen", title: "Materiály na Google Drive", desc: "Všetko je prehľadne usporiadané, aby si napredovala bez chaosu." },
      { icon: "Infinity", title: "Doživotný prístup ku kurzu", desc: "Uč sa vlastným tempom, prístup ti už nikdy nezmizne." },
      { icon: "BookOpen", title: "E-knihy sú navždy tvoje", desc: "Stiahni si ich alebo čítaj online bez časového obmedzenia." },
      { icon: "Sparkles", title: "Praktické know-how", desc: "Všetko, čo potrebuješ, aby si si prvé produkty vyrobila hneď." },
      { icon: "ShieldCheck", title: "14-dňová záruka", desc: "Ak nebudeš spokojná, vrátime ti 100% peňazí." },
    ],
  },

  primaryPricing: {
    discountBadge: "80% ZĽAVA",
    valuedAtLabel: "Bežná hodnota programu",
    regularPrice: "39,50 €",
    offerPrice: "8,90 €",
    cta: "ZÍSKAŤ ZĽAVU",
    payInfo: "Jednorazová platba s doživotným prístupom",
    imageAlt: "Ukážka programu EkoBylinka s exkluzívnou zľavou",
    socialImageAlt: "Screenshoty reálnych správ od nadšených študentiek",
  },

  socialProof: {
    headline: "NEPREMEŠKAJ TÚTO ŠANCU!",
    subheadlinePre: "Už viac ako",
    countHighlight: "2 586 žien",
    subheadlinePost: "si s radosťou vyrába vlastnú prírodnú kozmetiku doma!",
  },

  reviewScreenshots: {
    headline: "Reálne správy od našich študentiek",
    subheadline: "Toto nám chodí každý jeden deň.",
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
          { text: "Včera večer som spravila levanduľové mydlá pre celú rodinu 💜" },
          { text: "Mama ich miluje, vraví že má pokožku úplne inú 🙌" },
          { text: "Naozaj moc ďakujem za tento kurz ❤️" },
        ],
      },
      {
        name: "Silvia",
        timeLabel: "12:05",
        messages: [
          { text: "Začala som pred 2 týždňami a už mám celú zbierku 💕" },
          { text: "Recepty sa dajú zvládnuť ľavou zadnou" },
          { text: "A tie BONUSY zadarmo sú čistý poklad 🎁" },
        ],
      },
      {
        name: "Veronika",
        timeLabel: "dnes",
        messages: [
          { text: "Ahoj! Len som ti chcela napísať veľké ďakujem 🌿" },
          { text: "Spravila som si tuhý šampón a pokožka už nie je suchá" },
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
          "Mydlá EkoBylinka mod. 1",
          "Mydlá EkoBylinka mod. 2",
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
        title: "BONUS ZADARMO | Prírodná kozmetika",
        lessons: [
          "BONUS ZADARMO — Telová kozmetika",
          "BONUS ZADARMO — Soli do kúpeľa",
          "BONUS ZADARMO — Tuhý šampón",
        ],
      },
    ],
  },

  urgencyBanner: {
    discount: "80% ZĽAVA",
    plus: "+ 3 BONUSY ZADARMO",
    middle: "k tvojmu nákupu len do",
    deadline: "14. DECEMBRA",
    or: "alebo do vypredania",
    slots: "26 MIEST",
  },

  finalCta: {
    preHeadline: "TVOJ ČAS JE PRÁVE TERAZ",
    urgencyTop: "80% ZĽAVA",
    headline: "Získaj mega balíček EkoBylinka DNES s brutálnou zľavou",
    subUrgency:
      "Už viac ako 2 586 žien si vyrába vlastné mydlá a kozmetiku doma. Dnes si na rade ty.",
    bundleList: [
      "Kompletný kurz ručne robených mydiel (4 moduly)",
      "500 unikátnych receptov pre všetky typy pokožky",
      "Kurz výroby tekutých mydiel krok za krokom",
      "Kurz výroby esenciálnych olejov",
      "BONUS — Telová kozmetika",
      "BONUS — Soli do kúpeľa",
      "BONUS — Tuhý šampón",
      "Doživotný prístup (PDF/online)",
    ],
    guaranteeText:
      "Plná 14-dňová záruka. Ak sa ti kurz nebude páčiť, bez akýchkoľvek otázok ti vrátime 100% peňazí.",
    guaranteeImageAlt: "Pečať 14-dňovej záruky",
    regularPriceLabel: "Predtým",
    regularPrice: "39,50 €",
    offerPrice: "8,90 €",
    discountBadge: "80% ZĽAVA",
    urgencyText: "Jednorazová platba s doživotným prístupom",
    bottomUrgency: "Táto ponuka vyprší, akonáhle časovač ukáže nulu.",
    button: "ZÍSKAŤ MEGA BALÍČEK TERAZ",
    trustRow: "100% bezpečné platby · Okamžitý prístup · 14-dňová záruka",
  },

  instructorBio: {
    name: "Elena Kováčová",
    title: "Expertka na prírodnú kozmetiku",
    bio: "Ahoj, volám sa Elena. Prírodnej kozmetike a výrobe mydiel sa venujem už viac ako 8 rokov. To, čo začalo ako osobná potreba starať sa o vlastnú pleť bez zbytočnej chémie, sa stalo mojou najväčšou vášňou... a tiež mojím životným štýlom. Za tie roky som si vyvinula desiatky vlastných receptúr a pomohla mnohým ženám, ako si ty, urobiť prvé kroky v tomto fascinujúcom svete — vyrobiť si prvé mydlo z bežných surovín z kuchyne a objaviť radosť zo starania sa o seba a svojich blízkych prirodzenou cestou. Viem, aké to je začať od nuly, bez skúseností, so strachom z chýb alebo s pocitom, že nevieš, kde začať. Preto v tomto kurze zdieľam všetko, čo som sa naučila – jasne, prakticky a bez zbytočných komplikácií.",
    imageAlt: "Elena Kováčová, expertka na prírodnú kozmetiku a ručne robené mydlá",
    portfolioImages: [
      "/instructor-portfolio/work-1.webp",
      "/instructor-portfolio/work-2.webp",
      "/instructor-portfolio/work-3.webp",
    ],
    portfolioAlts: [
      "Ručne robené mydlá z Eleninej dielne",
      "Práca v ateliéri prírodnej kozmetiky",
      "Hotové prírodné produkty",
    ],
    yearsLabel: "Viac ako 8 rokov",
    yearsText: "skúseností s tvorbou prírodnej kozmetiky",
    studentsLabel: "Viac ako 2 586",
    studentsText: "vyškolených študentiek",
  },

  testimonials: {
    headline: "Čo hovoria tie, ktoré si už kurzom prešli",
    subheadline: "Skutočné recenzie od našich študentiek kurzu EkoBylinka.",
    productLabel: "EkoBylinka — Kurz ručne robených mydiel",
    reviewedLabel: "napísala recenziu na",
    actions: { like: "Páči sa mi to", comment: "Komentovať", share: "Zdieľať" },
    items: [
      {
        name: "Jana Nováková",
        handle: "@janka_n",
        text: "Kurz sa mi strašne páčil. Robila som všetko presne podľa lektorky a za menej ako mesiac som mala celú zbierku vlastných mydiel pre celú rodinu. Pleť mojich detí sa výrazne zlepšila odkedy používame iba moje domáce prírodné produkty. Ďakujem, tento kurz za to naozaj stál.",
      },
      {
        name: "Mária Balážová",
        handle: "",
        text: "Minulý týždeň som kurz dokončila a som úplne nadšená. Už som spravila prvé mydlá, doma sme ich otestovali a všetci ich milujú. Pleť mám oveľa jemnejšiu a hydratovanejšiu a vône sú úžasné. Ďakujem za túto šancu. Stálo to za každý cent.",
      },
      {
        name: "Zuzana Horváthová",
        handle: "",
        text: "Píšem sem, lebo kurz som si urobila už dávnejšie a odvtedy som si nekúpila ani jedno priemyselné mydlo. Celá rodina používa moje prírodné produkty a rozdiel pre pleť je obrovský. Nikdy by mi nenapadlo, že doma dokážem vyrobiť také kvalitné veci. ĎAKUJEM. Tento kurz bola tá najlepšia investícia.",
      },
      {
        name: "Martin Varga",
        handle: "@mato_varga",
        text: "Parádny obsah, všetko je vysvetlené jasne a profi. A tie bonusy zadarmo... ak máte možnosť si to kúpiť, bežte do toho. Neskutočne cenné info. Držte sa a vďaka, že posúvate ďalej takéto vedomosti.",
      },
    ],
    cta: "CHCEM ZAČAŤ EŠTE DNES",
  },

  closingProof: {
    headlinePre: "Naše študentky si vyrábajú prvé mydlá",
    headlineHighlight: "už počas prvého týždňa",
    headlinePost: ". Na čo ešte čakáš?",
    ctaLabel: "ZAČNI EŠTE DNES",
  },

  guarantee: {
    badgeLabel: "14-DŇOVÁ ZÁRUKA",
    headline: "NEMUSÍŠ MAŤ STRACH, RIZIKO BERIEME NA SEBA.",
    text: "Máš celé dva týždne na otestovanie kurzu a ak sa ti nebude páčiť alebo nenaplní tvoje očakávania, vrátime ti 100% peňazí.",
    badgeAlt: "Pečať 14-dňovej záruky EkoBylinka",
    certs: [
      { icon: "Award", label: "Overená kvalita" },
      { icon: "ShieldCheck", label: "100% bezpečná platba" },
      { icon: "Lock", label: "Chránené údaje" },
      { icon: "BadgeCheck", label: "Spokojné študentky" },
    ],
  },

  faq: {
    headline: "Často kladené otázky",
    subheadline: "Všetko, čo potrebuješ vedieť predtým, než začneš.",
    items: [
      {
        q: "Je platba bezpečná?",
        a: "Áno, platba prebieha cez Hotmart — jednu z najbezpečnejších a najznámejších digitálnych platforiem na svete, ktorá funguje vo viac ako 160 krajinách a disponuje najmodernejšími bezpečnostnými certifikátmi. Tvoje platobné údaje budú plne chránené a sú 100% dôverné, čo zaručuje absolútne bezpečný nákup.",
      },
      {
        q: "Môžem kurz zvládnuť, aj keď o tom nič neviem?",
        a: "Samozrejme! Všetky e-knihy sú veľmi detailné a jediné, čo naozaj potrebuješ, je chuť učiť sa. Celý proces je veľmi jednoduchý a získaš neskutočne praktické nástroje.",
      },
      {
        q: "Môžem sa do kurzu dostať z akéhokoľvek zariadenia?",
        a: "Áno, do kurzu sa dostaneš z akéhokoľvek zariadenia! Či už si na počítači, tablete alebo mobile, obsah si môžeš prechádzať kedykoľvek, a to nezávisle od tvojho operačného systému – Windows, macOS, iOS alebo Android. Pre ešte ľahší prístup z mobilu si môžeš stiahnuť aj priamo aplikáciu Hotmart.",
      },
      {
        q: "Potrebujem veľkú investíciu, aby som mohla začať?",
        a: "Vôbec nie! Prírodná kozmetika si vyžaduje len veľmi nízku počiatočnú investíciu a my ťa naučíme, ako využiť dostupné materiály, aby si mohla začať bez zbytočných výdavkov.",
      },
      {
        q: "Kedy kurz začína?",
        a: "Ihneď po zakúpení dostaneš prístupový odkaz (a digitálne knihy v PDF), ktorý ti umožní okamžite vstúpiť do platformy. Kurz môžeš prechádzať kedykoľvek budeš chcieť a ostáva ti navždy.",
      },
      {
        q: "Čo všetko kurz zahŕňa?",
        a: "Kurz zahŕňa doživotný prístup, e-knihy s postupmi krok za krokom, materiály na stiahnutie (PDF) a technickú podporu.",
      },
      {
        q: "Čo ak mi kurz nebude vyhovovať?",
        a: "Máš plnú 14-dňovú záruku. Ak z akéhokoľvek dôvodu nebudeš spokojná, stačí nám napísať a vrátime ti 100% peňazí, bez akýchkoľvek otázok.",
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