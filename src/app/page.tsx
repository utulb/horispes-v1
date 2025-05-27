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
                <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 sm:mb-8 leading-[1.1] tracking-tight">
                  Luxury Concierge Beyond Expectation
                </h1>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <p className="font-sans text-lg sm:text-xl md:text-2xl mb-8 sm:mb-12 text-white/80 leading-relaxed">
                  Discover unparalleled luxury travel and lifestyle management<span className="text-base">.</span>
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
              </motion.div>
            </div>
          </div>
        </div>
      </FullSection>

      {/* Services Section */}
      <PartialSection id="services" hasPadding={true}>
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
      </PartialSection>

      {/* Image Block 1 */}
      <FullSection isImage={true}>
        <div className={styles.image.container}>
          <Image
            src="/images/balloon.jpg"
            alt="Luxury Experience"
            fill
            className="object-cover"
          />
          <div className={styles.image.overlay}></div>
        </div>
      </FullSection>

      {/* Membership Section */}
      <PartialSection id="contact" hasPadding={true}>
        <div className={styles.container.narrow}>
          <div className="flex items-center justify-center h-full w-full">
            <div className={styles.content.contact}>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="font-serif text-4xl sm:text-5xl md:text-6xl mb-6 sm:mb-10 leading-tight tracking-tight"
              >
                Exclusive for Good Reason
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-white/80 text-base sm:text-lg mb-12 sm:mb-16 leading-relaxed"
              >
                We strictly limit our membership to ensure we can deliver on our promises, big and small. Each member and their family is matched perfectly with their own personal manager.
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
      </PartialSection>

      {/* Image Block 2 */}
      <FullSection isImage={true}>
        <div className={styles.image.container}>
          <Image
            src="/images/valley.jpg"
            alt="Luxury Experience"
            fill
            className="object-cover"
          />
          <div className={styles.image.overlay}></div>
        </div>
      </FullSection>

      {/* Contact Section */}
      <PartialSection id="contact" hasPadding={true}>
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
      </PartialSection>

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
            © 2025 HORISPES. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
