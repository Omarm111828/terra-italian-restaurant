/** Unsplash image helper — crops server-side to the requested width. */
export const img = (id: string, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`

export const IMAGES = {
  heroPizza: '1622880833523-7cf1c0bd4296',
  handsPasta: '1692640911594-d6d8da5e05a2',
  tagliatelle: '1771508558380-92ccad26e977',
  margherita: '1574071318508-1cdbab80d002',
  risotto: '1680420574628-225def8eea0a',
  tiramisu: '1714385905983-6f8e06fffae1',
  sheetingDough: '1447279506476-3faec8071eee',
  chefCooking: '1600565193348-f74bd3c7ccdf',
  pastaTomatoes: '1498579150354-977475b7ea0b',
  cheers: '1611765083444-a3ce30f1c885',
  interiorTree: '1636405189493-181ecf851006',
  chefChopping: '1622021142947-da7dedc7c39a',
  friendsEating: '1528605248644-14dd04022da1',
  winePour: '1630449802361-569230fc6974',
  pizzaBoard: '1513104890138-7c749659a591',
  woodTables: '1624583338957-4d155ca886dc',
  burrata: '1767441357990-4c6d05ce79af',
  negroni: '1629145376525-7e990fd32bc9',
  fish: '1665401015549-712c0dc5ef85',
  spaghetti: '1626844131082-256783844137',
} as const

export type Dish = {
  name: string
  italian: string
  description: string
  price: number
  image: string
  tag?: string
}

export const SIGNATURE_DISHES: Dish[] = [
  {
    name: 'Truffle Tagliatelle',
    italian: 'Tagliatelle al tartufo',
    description: 'Egg-yolk ribbons rolled each morning, brown butter, Parmigiano 24 months, shaved black truffle.',
    price: 18,
    image: IMAGES.tagliatelle,
    tag: "Chef's pick",
  },
  {
    name: 'Margherita Pizza',
    italian: 'Pizza Margherita',
    description: '48-hour dough, San Marzano tomato, fior di latte and basil, blistered in the wood-fired oven.',
    price: 15,
    image: IMAGES.margherita,
  },
  {
    name: 'Creamy Mushroom Risotto',
    italian: 'Risotto ai funghi',
    description: 'Carnaroli rice, wild mushrooms, thyme and a slow mantecatura of butter and aged cheese.',
    price: 17,
    image: IMAGES.risotto,
  },
  {
    name: 'Classic Tiramisu',
    italian: 'Tiramisù della casa',
    description: 'Espresso-soaked savoiardi, whipped mascarpone and a generous dusting of bitter cocoa.',
    price: 9,
    image: IMAGES.tiramisu,
    tag: 'House favourite',
  },
]

export type MenuItem = {
  name: string
  description: string
  price: number
  tags?: ('V' | 'GF' | 'VG' | 'Spicy')[]
  featured?: boolean
}

export type MenuCategory = {
  id: string
  label: string
  note: string
  image: string
  imageAlt: string
  items: MenuItem[]
}

export const MENU: MenuCategory[] = [
  {
    id: 'starters',
    label: 'Starters',
    note: 'Antipasti — to share, or not.',
    image: IMAGES.burrata,
    imageAlt: 'Burrata with heirloom tomatoes and fresh herbs on a plate',
    items: [
      { name: 'Burrata & Heirloom Tomatoes', description: 'Basil oil, aged balsamic, grilled sourdough.', price: 14, tags: ['V'], featured: true },
      { name: 'Arancini al Ragù', description: 'Crisp saffron rice, slow-cooked beef ragù, smoked scamorza.', price: 11 },
      { name: 'Beef Carpaccio', description: 'Rocket, capers, lemon, shaved Parmigiano.', price: 15, tags: ['GF'] },
      { name: 'Focaccia della Casa', description: 'Rosemary, Maldon salt, cold-pressed olive oil.', price: 6, tags: ['VG'] },
    ],
  },
  {
    id: 'pasta',
    label: 'Pasta',
    note: 'Fatta a mano — rolled by hand every morning.',
    image: IMAGES.spaghetti,
    imageAlt: 'Spaghetti with cherry tomatoes on a white plate',
    items: [
      { name: 'Truffle Tagliatelle', description: 'Brown butter, Parmigiano 24 months, black truffle.', price: 18, featured: true },
      { name: 'Cacio e Pepe', description: 'Tonnarelli, Pecorino Romano, toasted Tellicherry pepper.', price: 16, tags: ['V'] },
      { name: 'Pappardelle al Ragù', description: 'Fourteen-hour beef and pork ragù, gremolata.', price: 19 },
      { name: 'Ricotta Ravioli', description: 'Lemon, sage butter, toasted hazelnut.', price: 17, tags: ['V'] },
    ],
  },
  {
    id: 'pizza',
    label: 'Pizza',
    note: 'Forno a legna — 90 seconds at 450°C.',
    image: IMAGES.pizzaBoard,
    imageAlt: 'Sliced pizza with cherry tomatoes and rosemary on a wooden board',
    items: [
      { name: 'Margherita', description: 'San Marzano tomato, fior di latte, basil.', price: 15, tags: ['V'], featured: true },
      { name: 'Diavola', description: 'Spicy salami, chilli honey, smoked mozzarella.', price: 17, tags: ['Spicy'] },
      { name: 'Funghi e Tartufo', description: 'Wild mushrooms, truffle cream, thyme, no tomato.', price: 19, tags: ['V'] },
    ],
  },
  {
    id: 'mains',
    label: 'Main Courses',
    note: 'Secondi — from the grill and the oven.',
    image: IMAGES.fish,
    imageAlt: 'Roasted whole fish with lemons on a plate',
    items: [
      { name: 'Branzino al Forno', description: 'Whole roasted sea bass, salsa verde, charred lemon.', price: 28, tags: ['GF'], featured: true },
      { name: 'Pollo al Mattone', description: 'Brick-pressed half chicken, rosemary potatoes, jus.', price: 24, tags: ['GF'] },
      { name: 'Osso Buco', description: 'Braised veal shank, saffron risotto, gremolata.', price: 32 },
    ],
  },
  {
    id: 'desserts',
    label: 'Desserts',
    note: 'Dolci — save room, always.',
    image: IMAGES.tiramisu,
    imageAlt: 'A slice of layered tiramisu on a white plate',
    items: [
      { name: 'Classic Tiramisu', description: 'Espresso, mascarpone, savoiardi, cocoa.', price: 9, tags: ['V'], featured: true },
      { name: 'Vanilla Panna Cotta', description: 'Roasted seasonal fruit, aged balsamic.', price: 8, tags: ['GF'] },
      { name: 'Cannoli Siciliani', description: 'Sheep’s ricotta, pistachio, candied orange.', price: 8, tags: ['V'] },
    ],
  },
  {
    id: 'drinks',
    label: 'Drinks',
    note: 'Bevande — aperitivo hour from 5pm.',
    image: IMAGES.negroni,
    imageAlt: 'A red cocktail in a glass on a white table',
    items: [
      { name: 'Negroni', description: 'Gin, Campari, sweet vermouth, orange peel.', price: 13, featured: true },
      { name: 'Aperol Spritz', description: 'Aperol, prosecco, soda, green olive.', price: 12 },
      { name: 'House Chianti', description: 'Tuscany, Sangiovese — by the glass.', price: 11 },
      { name: 'Limonata', description: 'Sparkling Sicilian lemon, non-alcoholic.', price: 5, tags: ['VG'] },
    ],
  },
]

export const TAG_LABELS: Record<string, string> = {
  V: 'Vegetarian',
  VG: 'Vegan',
  GF: 'Gluten-free option',
  Spicy: 'Spicy',
}

/** Sample opening hours — fictional portfolio content. index 0 = Monday */
export const HOURS = [
  { day: 'Monday', hours: 'Closed' },
  { day: 'Tuesday', hours: '17:00 – 22:00' },
  { day: 'Wednesday', hours: '17:00 – 22:00' },
  { day: 'Thursday', hours: '17:00 – 22:00' },
  { day: 'Friday', hours: '17:00 – 23:00' },
  { day: 'Saturday', hours: '12:00 – 23:00' },
  { day: 'Sunday', hours: '12:00 – 21:00' },
]

export const CONTACT = {
  address: '123 Example Street',
  city: 'Your City',
  phone: '(000) 000-0000',
  email: 'hello@example.com',
}

export const NAV_LINKS = [
  { label: 'Home', href: '#top', id: 'top' },
  { label: 'Menu', href: '#menu', id: 'menu' },
  { label: 'Our Story', href: '#story', id: 'story' },
  { label: 'Visit Us', href: '#visit', id: 'visit' },
]

export type GalleryImage = { id: string; alt: string; caption: string; className: string }

/** Editorial 12-col mosaic. Mobile: 2 cols; desktop: 12 cols × 3 rows. */
export const GALLERY: GalleryImage[] = [
  {
    id: IMAGES.interiorTree,
    alt: 'Restaurant dining room with a tree growing in the centre',
    caption: 'The dining room',
    className: 'col-span-2 row-span-2 md:col-span-6 lg:col-span-5 lg:row-span-2',
  },
  {
    id: IMAGES.pastaTomatoes,
    alt: 'Fresh pasta with cherry tomatoes',
    caption: 'Pasta, rolled this morning',
    className: 'col-span-1 md:col-span-3 lg:col-span-4',
  },
  {
    id: IMAGES.chefChopping,
    alt: 'Chef in a white coat chopping vegetables',
    caption: 'Mise en place',
    className: 'col-span-1 row-span-2 md:col-span-3 md:row-span-2 lg:col-span-3 lg:row-span-2',
  },
  {
    id: IMAGES.cheers,
    alt: 'Two guests clinking glasses of red wine over pizza and pasta',
    caption: 'Salute!',
    className: 'col-span-1 md:col-span-3 lg:col-span-4',
  },
  {
    id: IMAGES.winePour,
    alt: 'Red wine being poured into a glass',
    caption: 'Our cellar',
    className: 'col-span-2 md:col-span-4 lg:col-span-3',
  },
  {
    id: IMAGES.friendsEating,
    alt: 'Friends sharing a meal around a table',
    caption: 'Long tables, longer evenings',
    className: 'col-span-2 md:col-span-8 lg:col-span-5',
  },
  {
    id: IMAGES.heroPizza,
    alt: 'Pizza baking inside a wood-fired oven',
    caption: 'The oven',
    className: 'hidden md:block md:col-span-12 lg:col-span-4',
  },
]
