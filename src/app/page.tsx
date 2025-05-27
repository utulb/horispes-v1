'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import FullSection from "@/components/FullSection";
import PartialSection from "@/components/PartialSection";
import { sectionStyles as styles } from "@/styles/sections";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white overflow-hidden">
      {/* Navigation */}
      <nav className={styles.navigation.base}>
        <div className={styles.navigation.container}>
          <h1 className={styles.navigation.logo}>HORISPES</h1>
          <div className={styles.navigation.links}>
            <a href="#services" className={styles.navigation.link}>Services</a>
            <a href="#membership" className={styles.navigation.link}>Membership</a>
            <a href="#contact" className={styles.navigation.link}>Contact</a>
          </div>
          <button className={styles.navigation.button}>
            Apply Now
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <FullSection isDark={false} isCentered={true}>
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-bg.jpg"
            alt="Luxury Experience"
            fill
            className="object-cover brightness-[0.6]"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/95 to-[#0A0A0A]/60 z-10" />
        <div className={`relative z-20 ${styles.container.base}`}>
          <div className="flex items-center justify-center h-full w-full">
            <div className={styles.content.hero}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-9xl mb-6 sm:mb-8 leading-[1.1] tracking-tight">
                  The Most Exclusive Concierge Club
                </h1>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <p className="font-sans text-lg sm:text-xl md:text-2xl mb-8 sm:mb-12 text-white/80 leading-relaxed">
                  Luxury travel and lifestyle agent, elite concierge service, dedicated extension of your personal office – there are several ways to describe HORISPES, but one word our members often use might explain it best of all.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center"
              >
                <button className="bg-[#C6A45C] text-[#0A0A0A] px-8 sm:px-12 py-4 sm:py-5 rounded-none font-sans text-sm tracking-[0.2em] uppercase hover:bg-[#D4B87C] transition-all duration-300">
                  Apply for Membership
                </button>
                <button className="border border-[#C6A45C] text-[#C6A45C] px-8 sm:px-12 py-4 sm:py-5 rounded-none font-sans text-sm tracking-[0.2em] uppercase hover:bg-[#C6A45C]/10 transition-all duration-300">
                  Learn More
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </FullSection>

      {/* Services Section */}
      <FullSection id="services" hasPadding={true}>
        <div className={styles.container.base}>
          <div className="flex items-center justify-center h-full w-full">
            <div className={styles.content.services}>
              <div>
                <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl mb-6 sm:mb-10 leading-tight tracking-tight">We Specialise in Making the Impossible Possible</h2>
                <p className="text-white/80 text-base sm:text-lg mb-8 sm:mb-12 leading-relaxed">
                  Your own hyper-connected fixer-of-fabulous, we develop a deep understanding of your needs in both the short and long term, on hand wherever in the world you may be.
                </p>
                <button className="text-[#C6A45C] hover:text-[#D4B87C] transition-all duration-300 flex items-center gap-4 text-sm tracking-[0.2em] uppercase group">
                  Explore Services
                  <span className="text-lg transform group-hover:translate-x-2 transition-transform duration-300">→</span>
                </button>
              </div>
              <div className="grid grid-cols-2 gap-4 sm:gap-10">
                {[{"title": "Travel", "icon": "✈️"}, {"title": "Events", "icon": "🎭"}, {"title": "Dining", "icon": "🍽️"}, {"title": "Lifestyle", "icon": "👔"}].map((service, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="aspect-square border border-white/10 rounded-none flex flex-col items-center justify-center hover:border-[#C6A45C] transition-all duration-300 p-6 sm:p-10 group"
                  >
                    <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 transform group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                    <h3 className="font-serif text-xl sm:text-2xl tracking-wide">{service.title}</h3>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </FullSection>

      {/* Image Block 1 */}
      <PartialSection isImage={true}>
        <div className={styles.image.container}>
          <Image
            src="/images/divider-1.jpg"
            alt="Luxury Experience"
            fill
            className="object-cover"
          />
          <div className={styles.image.overlay}></div>
        </div>
      </PartialSection>

      {/* Membership Section */}
      <FullSection id="membership">
        <div className={styles.container.base}>
          <div className="flex items-center justify-center h-full w-full">
            <div className={styles.content.membership.header}>
              <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl mb-6 sm:mb-10 leading-tight tracking-tight">Exclusive for Good Reason</h2>
              <p className="text-white/80 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
                We strictly limit our membership to ensure we can deliver on our promises, big and small. Each member and their family is matched perfectly with their own personal manager.
              </p>
            </div>
            <div className={styles.content.membership.grid}>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className={styles.card.base}
              >
                <h3 className={styles.card.title}>Individual</h3>
                <p className={styles.card.description}>Personalized luxury lifestyle management for discerning individuals.</p>
                <ul className={styles.card.list}>
                  <li className={styles.card.listItem}>
                    <span className={styles.card.bullet}>•</span>
                    Dedicated Lifestyle Manager
                  </li>
                  <li className={styles.card.listItem}>
                    <span className={styles.card.bullet}>•</span>
                    24/7 Concierge Service
                  </li>
                  <li className={styles.card.listItem}>
                    <span className={styles.card.bullet}>•</span>
                    Exclusive Event Access
                  </li>
                </ul>
                <button className={styles.card.button}>
                  Apply Now
                </button>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className={styles.card.base}
              >
                <h3 className={styles.card.title}>Corporate</h3>
                <p className={styles.card.description}>Elite services for discerning businesses and their executives.</p>
                <ul className={styles.card.list}>
                  <li className={styles.card.listItem}>
                    <span className={styles.card.bullet}>•</span>
                    Team Management
                  </li>
                  <li className={styles.card.listItem}>
                    <span className={styles.card.bullet}>•</span>
                    Business Travel Support
                  </li>
                  <li className={styles.card.listItem}>
                    <span className={styles.card.bullet}>•</span>
                    Corporate Entertainment
                  </li>
                </ul>
                <button className={styles.card.button}>
                  Apply Now
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </FullSection>

      {/* Image Block 2 */}
      <PartialSection isImage={true}>
        <div className={styles.image.container}>
          <Image
            src="/images/divider-2.jpg"
            alt="Luxury Experience"
            fill
            className="object-cover"
          />
          <div className={styles.image.overlay}></div>
        </div>
      </PartialSection>

      {/* Contact Section */}
      <FullSection id="contact" hasPadding={true}>
        <div className={styles.container.narrow}>
          <div className="flex items-center justify-center h-full w-full">
            <div className={styles.content.contact}>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="font-serif text-4xl sm:text-5xl md:text-6xl mb-6 sm:mb-10 leading-tight tracking-tight"
              >
                Begin Your Journey
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-white/80 text-base sm:text-lg mb-12 sm:mb-16 leading-relaxed"
              >
                Members of HORISPES are hand-picked and consist of those who have a zeal for the best things in life and the multifaceted opportunities it offers. Membership is awarded on a selective basis.
              </motion.p>
              <motion.button 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-[#C6A45C] text-[#0A0A0A] px-12 sm:px-16 py-4 sm:py-5 rounded-none font-sans text-sm tracking-[0.2em] uppercase hover:bg-[#D4B87C] transition-all duration-300">
                Apply for Membership
              </motion.button>
            </div>
          </div>
        </div>
      </FullSection>

      {/* Footer */}
      <footer className={styles.footer.base}>
        <div className={styles.footer.container}>
          <div className={styles.footer.grid}>
            <div>
              <h3 className={styles.footer.title}>HORISPES</h3>
              <p className="text-white/60">Premium Experiences</p>
            </div>
            <div>
              <h4 className={styles.footer.subtitle}>Services</h4>
              <ul className={styles.footer.list}>
                <li><a href="#" className={styles.footer.link}>Travel</a></li>
                <li><a href="#" className={styles.footer.link}>Events</a></li>
                <li><a href="#" className={styles.footer.link}>Dining</a></li>
                <li><a href="#" className={styles.footer.link}>Lifestyle</a></li>
              </ul>
            </div>
            <div>
              <h4 className={styles.footer.subtitle}>Company</h4>
              <ul className={styles.footer.list}>
                <li><a href="#" className={styles.footer.link}>About</a></li>
                <li><a href="#" className={styles.footer.link}>Contact</a></li>
                <li><a href="#" className={styles.footer.link}>Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className={styles.footer.subtitle}>Legal</h4>
              <ul className={styles.footer.list}>
                <li><a href="#" className={styles.footer.link}>Privacy Policy</a></li>
                <li><a href="#" className={styles.footer.link}>Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className={styles.footer.copyright}>
            © 2024 HORISPES. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
