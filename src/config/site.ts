export const SITE = {
  name: 'wax.contact',
  title: 'wax.contact • Premium Global Domain for Sale | Professional Hair Removal',
  description:
    'Own wax.contact — the definitive global domain for professional waxing, epilation, and hair removal. A modern .contact TLD that positions your brand as the trusted worldwide connection for expert hair removal services.',
  url: 'https://wax.contact/',
  locale: 'en_US',
  email: 'sales@desertrich.com',
  location: 'Phoenix, Arizona',
  lastUpdated: '2026-06-22',
  googleSiteVerification: 'cU-3eQvfs0UdhThxl1rlp6MGvHU-TVPNlYlBdWb81Tg',
  /** Asking price shown in the footer acquisition block */
  price: 100_000,
  priceFormatted: '$100,000',
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
