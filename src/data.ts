export type Match = {
  id: string;
  date: string;
  time: string;
  competition: string;
  venue: string;
  home: string;
  away: string;
  homeScore?: number;
  awayScore?: number;
  status: 'upcoming' | 'played';
  note: string;
  lineups: { home: string[]; away: string[] };
  stats: { label: string; home: number; away: number; unit?: string }[];
};

export type Player = {
  id: string;
  name: string;
  number: number;
  position: 'Brankár' | 'Obranca' | 'Stredopoliar' | 'Útočník';
  age: number;
  nationality: string;
  height: string;
  image: string;
  appearances: number;
  goals: number;
  assists: number;
  bio: string;
};

export type Article = {
  id: string;
  category: string;
  date: string;
  title: string;
  excerpt: string;
  image: string;
  readingTime: string;
  paragraphs: string[];
};

export const matches: Match[] = [
  {
    id: 'dynamo-shakhtar-demo',
    date: '2. novembra 2026',
    time: '18:00',
    competition: 'Ukážkový ligový zápas',
    venue: 'Štadión Valerija Lobanovského',
    home: 'Dynamo Kyjev',
    away: 'Šachtar Doneck',
    homeScore: 2,
    awayScore: 1,
    status: 'played',
    note: 'Modelový výsledok vytvorený pre univerzitný projekt.',
    lineups: {
      home: ['M. Hordiienko', 'T. Bondar', 'A. Melnyk', 'I. Koval', 'D. Marchenko', 'O. Savchuk', 'R. Petrenko', 'V. Danyliuk', 'M. Kravets', 'Y. Shevchuk', 'A. Hnatiuk'],
      away: ['P. Lysenko', 'B. Kozak', 'S. Moroz', 'K. Pavlenko', 'D. Havrysh', 'M. Tkachenko', 'A. Bilyk', 'V. Romanenko', 'I. Klymenko', 'O. Yaremchuk', 'N. Bondarenko'],
    },
    stats: [
      { label: 'Držanie lopty', home: 58, away: 42, unit: '%' },
      { label: 'Strely na bránu', home: 7, away: 4 },
      { label: 'Rohové kopy', home: 6, away: 3 },
      { label: 'Presnosť prihrávok', home: 86, away: 79, unit: '%' },
    ],
  },
  {
    id: 'dynamo-karpaty-demo',
    date: '15. novembra 2026',
    time: '17:00',
    competition: 'Ukážkový ligový zápas',
    venue: 'Štadión Valerija Lobanovského',
    home: 'Dynamo Kyjev',
    away: 'Karpaty Ľvov',
    status: 'upcoming',
    note: 'Modelový termín; nejde o potvrdený rozpis súťaže.',
    lineups: { home: [], away: [] },
    stats: [],
  },
  {
    id: 'dynamo-vorskla-demo',
    date: '25. októbra 2026',
    time: '16:00',
    competition: 'Ukážkový ligový zápas',
    venue: 'Štadión Valerija Lobanovského',
    home: 'Dynamo Kyjev',
    away: 'Vorskla Poltava',
    homeScore: 1,
    awayScore: 0,
    status: 'played',
    note: 'Modelový výsledok vytvorený pre univerzitný projekt.',
    lineups: {
      home: ['M. Hordiienko', 'T. Bondar', 'A. Melnyk', 'I. Koval', 'D. Marchenko', 'O. Savchuk', 'R. Petrenko', 'V. Danyliuk', 'M. Kravets', 'Y. Shevchuk', 'A. Hnatiuk'],
      away: ['L. Boiko', 'M. Babenko', 'Y. Poliak', 'D. Sokol', 'A. Rudenko', 'V. Bereza', 'P. Hrytsenko', 'I. Chornyi', 'O. Duda', 'N. Kravchuk', 'S. Zadorozhnyi'],
    },
    stats: [
      { label: 'Držanie lopty', home: 54, away: 46, unit: '%' },
      { label: 'Strely na bránu', home: 5, away: 3 },
      { label: 'Rohové kopy', home: 4, away: 5 },
      { label: 'Presnosť prihrávok', home: 83, away: 77, unit: '%' },
    ],
  },
];

const portraits = [
  'photo-1560272564-c83b66b1ad12',
  'photo-1517466787929-bc90951d0974',
  'photo-1521412644187-c49fa049e84d',
  'photo-1574629810360-7efbbe195018',
  'photo-1518604666860-9ed391f76460',
  'photo-1522778119026-d647f0596c20',
  'photo-1508098682722-e99c43a406b2',
  'photo-1579952363873-27f3bade9f55',
];

const portrait = (index: number) => `https://images.unsplash.com/${portraits[index]}?auto=format&fit=crop&w=900&q=82`;

export const players: Player[] = [
  { id: 'maksym-hordiienko', name: 'Maksym Hordiienko', number: 1, position: 'Brankár', age: 25, nationality: 'Ukrajina', height: '191 cm', image: portrait(0), appearances: 18, goals: 0, assists: 1, bio: 'Modelový profil brankára s istotou pri centrovaných loptách a pokojnou rozohrávkou. Všetky údaje na tejto stránke sú ilustračné.' },
  { id: 'taras-bondar', name: 'Taras Bondar', number: 4, position: 'Obranca', age: 27, nationality: 'Ukrajina', height: '186 cm', image: portrait(1), appearances: 21, goals: 2, assists: 1, bio: 'Modelový profil stopéra, ktorý vyniká v súbojoch a organizácii obrannej línie. Uvedené štatistiky nie sú aktuálnymi klubovými údajmi.' },
  { id: 'andrii-melnyk', name: 'Andrii Melnyk', number: 22, position: 'Obranca', age: 23, nationality: 'Ukrajina', height: '183 cm', image: portrait(2), appearances: 16, goals: 1, assists: 3, bio: 'Modelový profil krajného obrancu s aktívnym zapájaním do útočnej fázy. Uvedené štatistiky sú demonštračné.' },
  { id: 'oleh-savchuk', name: 'Oleh Savchuk', number: 6, position: 'Stredopoliar', age: 24, nationality: 'Ukrajina', height: '179 cm', image: portrait(3), appearances: 20, goals: 3, assists: 5, bio: 'Modelový profil tvorivého stredopoliara, ktorý prepája obranu s útokom. Všetky údaje sú vytvorené pre účely projektu.' },
  { id: 'roman-petrenko', name: 'Roman Petrenko', number: 8, position: 'Stredopoliar', age: 26, nationality: 'Ukrajina', height: '181 cm', image: portrait(4), appearances: 19, goals: 4, assists: 4, bio: 'Modelový profil stredopoliara s dôrazom na pohyb bez lopty a presnú prihrávku. Štatistiky sú ilustračné.' },
  { id: 'viktor-danyliuk', name: 'Viktor Danyliuk', number: 11, position: 'Útočník', age: 22, nationality: 'Ukrajina', height: '184 cm', image: portrait(5), appearances: 17, goals: 8, assists: 2, bio: 'Modelový profil útočníka, ktorý hľadá priestor za obranou a zakončuje oboma nohami. Uvedené údaje nie sú aktuálnou štatistikou.' },
  { id: 'mykola-kravets', name: 'Mykola Kravets', number: 17, position: 'Útočník', age: 28, nationality: 'Ukrajina', height: '188 cm', image: portrait(6), appearances: 15, goals: 6, assists: 3, bio: 'Modelový profil hrotového útočníka s dobrým výberom miesta v pokutovom území. Všetky štatistiky sú demonštračné.' },
  { id: 'yaroslav-shevchuk', name: 'Yaroslav Shevchuk', number: 10, position: 'Stredopoliar', age: 21, nationality: 'Ukrajina', height: '177 cm', image: portrait(7), appearances: 12, goals: 2, assists: 6, bio: 'Modelový profil mladého ofenzívneho hráča s citom pre finálnu prihrávku. Informácie slúžia len ako ukážkové dáta.' },
];

export const articles: Article[] = [
  {
    id: 'modra-identita-kyjeva', category: 'Klub', date: '6. novembra 2026', title: 'Modrá a biela: farby, ktoré spájajú Kyjev', excerpt: 'Pohľad na symboliku klubových farieb a ich miesto v príbehu Dynama.', image: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&w=1400&q=85', readingTime: '4 min čítania',
    paragraphs: ['Modrá a biela sprevádzajú Dynamo Kyjev naprieč generáciami. Na ihrisku vytvárajú výraznú identitu, mimo neho sú spoločným znakom fanúšikov a mesta.', 'Tento ukážkový článok predstavuje redakčný formát budúcej klubovej sekcie. Nejde o aktuálnu klubovú správu ani o oficiálne vyjadrenie.', 'V plnej verzii projektu môžu články čerpať z overených klubových zdrojov a obsahovať fotografie s vyriešenými právami.'],
  },
  {
    id: 'akademia-nove-talenty', category: 'Akadémia', date: '4. novembra 2026', title: 'Akadémia ako základ budúcnosti', excerpt: 'Ako sa z tréningového ihriska začína cesta k prvému tímu.', image: 'https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&w=1400&q=85', readingTime: '3 min čítania',
    paragraphs: ['Klubová akadémia rozvíja techniku, rozhodovanie aj tímovú spoluprácu. Každý tréning je príležitosťou pripraviť mladých hráčov na vyššiu úroveň.', 'Text a sprievodné informácie na tejto stránke sú demonštračné. Neopisujú konkrétny aktuálny program akadémie.', 'Pri skutočnom redakčnom obsahu by jednotlivé príbehy dopĺňali rozhovory, overené údaje a fotografie s povolením.'],
  },
  {
    id: 'stadion-den-zapasu', category: 'Fanúšikovia', date: '1. novembra 2026', title: 'Deň zápasu sa začína dávno pred výkopom', excerpt: 'Atmosféra štadióna, klubové farby a rituály, ktoré patria k futbalu.', image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=1400&q=85', readingTime: '5 min čítania',
    paragraphs: ['Futbalový deň má svoj rytmus. Cesta na štadión, stretnutia s priateľmi a prvý pohľad na trávnik vytvárajú kulisu, ktorá patrí ku každému veľkému zápasu.', 'Tento článok je ukážkovým obsahom pre univerzitný projekt a neinformuje o konkrétnom podujatí.', 'Sekcia je pripravená na doplnenie aktuálnych klubových oznamov a reportáží z overených zdrojov.'],
  },
];

export const milestones = [
  { year: '1927', title: 'Založenie klubu', description: 'Dynamo Kyjev vzniklo 13. mája 1927 a stalo sa jedným z najvýznamnejších futbalových klubov Ukrajiny.' },
  { year: '1975', title: 'Európsky pohár víťazov pohárov', description: 'Dynamo získalo Pohár víťazov pohárov a následne aj Európsky superpohár.' },
  { year: '1986', title: 'Druhé európske víťazstvo', description: 'Klub opäť triumfoval v Pohári víťazov pohárov, čím potvrdil svoje miesto na európskej scéne.' },
  { year: '1991', title: 'Nová kapitola ukrajinského futbalu', description: 'Po vzniku samostatnej Ukrajiny začalo Dynamo písať ďalšiu éru domácich súťaží.' },
  { year: '2015', title: 'Návrat na vrchol', description: 'Dynamo získalo ukrajinský ligový titul a ukončilo dlhé čakanie na prvenstvo v domácej súťaži.' },
];

export const clubHonors = [
  { value: '16×', label: 'majster Ukrajiny*' },
  { value: '2×', label: 'Pohár víťazov pohárov' },
  { value: '1×', label: 'Európsky superpohár' },
];
