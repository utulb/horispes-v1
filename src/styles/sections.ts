export const sectionStyles = {
  container: {
    base: 'w-full max-w-7xl mx-auto px-8 sm:px-12 lg:px-16',
    narrow: 'w-full max-w-4xl mx-auto px-8 sm:px-12 lg:px-16',
  },
  content: {
    hero: 'max-w-3xl mx-auto text-center', // Centered content for Hero
    services: 'grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32 items-center', // Original Services grid layout
    membership: {
      header: 'text-center mb-16 sm:mb-24', // Centered header for Membership
      grid: 'grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16 max-w-5xl mx-auto', // Centered grid for Membership cards
    },
    contact: 'text-center', // Centered content for Contact
  },
  card: {
    base: 'p-10 sm:p-16 border border-white/10 rounded-none hover:border-[#C6A45C] transition-all duration-300',
    title: 'font-serif text-3xl sm:text-4xl mb-8 sm:mb-10',
    description: 'text-white/80 mb-10 sm:mb-12 leading-relaxed',
    list: 'space-y-6 sm:space-y-8 mb-16 sm:mb-20',
    listItem: 'flex items-center gap-4 text-white/80',
    bullet: 'text-[#C6A45C] text-2xl',
    button: 'w-full bg-[#C6A45C] text-[#0A0A0A] py-5 sm:py-6 rounded-none text-sm tracking-[0.2em] uppercase hover:bg-[#D4B87C] transition-all duration-300',
  },
  image: {
    container: 'relative w-full h-full',
    overlay: 'absolute inset-0 bg-black/40',
  },
  navigation: {
    base: 'absolute top-0 left-0 right-0 z-50 bg-transparent',
    container: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center',
    logo: 'font-serif text-xl sm:text-2xl tracking-[0.2em]',
    links: 'hidden md:flex gap-8 lg:gap-16',
    link: 'text-white/70 hover:text-[#C6A45C] transition-all duration-300 text-sm tracking-[0.2em] uppercase',
    button: 'bg-[#C6A45C] text-[#0A0A0A] px-6 sm:px-10 py-2 sm:py-3 rounded-none text-sm tracking-[0.2em] uppercase hover:bg-[#D4B87C] transition-all duration-300',
  },
  footer: {
    base: 'py-12 sm:py-20 px-4 sm:px-6 lg:px-8 border-t border-white/10',
    container: 'max-w-7xl mx-auto',
    grid: 'grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-20',
    title: 'font-serif text-xl sm:text-2xl mb-6 sm:mb-8 tracking-[0.2em]',
    subtitle: 'font-serif text-base sm:text-lg mb-6 sm:mb-8 tracking-[0.2em]',
    list: 'space-y-2 sm:space-y-4',
    link: 'text-white/60 hover:text-[#C6A45C] transition-all duration-300 text-sm tracking-[0.2em] uppercase',
    copyright: 'mt-12 sm:mt-20 pt-8 border-t border-white/10 text-center text-white/60 text-sm tracking-[0.2em]',
  },
} as const;