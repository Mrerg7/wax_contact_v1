export const SITE = {
  name: 'wax.contact',
  title: 'wax.contact for Sale | Premium Global Domain for Professional Hair Removal',
  description:
    'Buy wax.contact — a rare, short .contact domain for professional waxing, epilation, and hair removal brands. Asking $100,000. Direct owner sale, escrow available, immediate transfer.',
  url: 'https://wax.contact/',
  locale: 'en_US',
  email: 'sales@desertrich.com',
  location: 'Phoenix, Arizona',
  lastUpdated: '2026-09-28',
  googleSiteVerification: 'cU-3eQvfs0UdhThxl1rlp6MGvHU-TVPNlYlBdWb81Tg',
  /** Asking price shown in the acquisition block */
  price: 100_000,
  priceFormatted: '$100,000',
  keywords:
    'wax.contact, domain for sale, buy domain, premium domain, .contact domain, waxing domain, hair removal brand, professional waxing, epilation, salon domain',
} as const;

export const CF_STREAM = {
  customerCode: 'wa9cpywo3l4jte5c',
  videoId: 'ca3aaca0311e01acf5cde53acc603af7',
  /** Intrinsic Stream embed aspect ratio (padding-top %) */
  aspectPaddingPercent: 54.32098765432099,
  get poster() {
    return `https://customer-${this.customerCode}.cloudflarestream.com/${this.videoId}/thumbnails/thumbnail.jpg?time=&height=600`;
  },
  get iframeSrc() {
    const poster = encodeURIComponent(this.poster);
    return `https://customer-${this.customerCode}.cloudflarestream.com/${this.videoId}/iframe?muted=true&loop=true&autoplay=true&poster=${poster}&controls=false`;
  },
} as const;

/** Poster still used for Open Graph / Twitter cards */
export const CF_IMAGES = {
  hero: CF_STREAM.poster,
} as const;

export const ACQUISITION_MAILTO = `mailto:${SITE.email}?subject=${encodeURIComponent('Acquisition Inquiry: wax.contact')}&body=${encodeURIComponent('Hello,\n\nI am interested in acquiring wax.contact. Please share details and next steps.\n\nBest regards,')}`;

export const FAQ = [
  {
    question: 'Is wax.contact available for purchase?',
    answer:
      'Yes. wax.contact is owned privately and available for direct acquisition at an asking price of $100,000 USD. There are no brokers — you negotiate with the owner.',
  },
  {
    question: 'How does the domain transfer work?',
    answer:
      'Once terms are agreed, transfer is handled via escrow for buyer protection. The domain can be transferred immediately after cleared payment through your preferred registrar.',
  },
  {
    question: 'What makes this domain valuable?',
    answer:
      'wax.contact combines a universally understood service keyword with the .contact TLD — implying connection, inquiry, and trust. It is short, brandable, and works globally across languages and markets.',
  },
  {
    question: 'Who is this domain ideal for?',
    answer:
      'Global salon groups, booking platforms, mobile waxing services, product brands, training academies, and media properties in professional hair removal and beauty.',
  },
  {
    question: 'How do I make an offer?',
    answer: `Email ${SITE.email} with your offer or request. Typical response time is within 24 hours. Escrow is available.`,
  },
] as const;
