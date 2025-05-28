'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import FullSection from "@/components/FullSection";
import PartialSection from "@/components/PartialSection";
import ContactForm from "@/components/ContactForm";
import { sectionStyles as styles } from "@/styles/sections";

export default function Home() {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  const openContactForm = () => setIsContactFormOpen(true);
  const closeContactForm = () => setIsContactFormOpen(false);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white overflow-hidden">
      <ContactForm isOpen={isContactFormOpen} onClose={closeContactForm} />
      
      {/* Navigation */}
      <nav className={styles.navigation.base}>
        <div className={styles.navigation.container}>
          {/* Left Section: Links */}
          <div className="hidden md:grid w-1/3 flex justify-center items-center">
            <div className={styles.navigation.links}>
              <a href="#services" className={styles.navigation.link}>Services</a>
              <a href="#membership" className={styles.navigation.link}>Membership</a>
              <a href="#contact" className={styles.navigation.link}>Contact</a>
            </div>
          </div>

          {/* Middle Section: Logo */}
          <div className="flex justify-center items-center">
            <Image
              src="/images/horispes-yuvarlak-trans.png"
              alt="HORISPES Logo"
              width={150}
              height={40}
            />
          </div>

          {/* Right Section: Button */}
          <div className="hidden md:grid w-1/3 flex justify-center items-center">
            <button onClick={openContactForm} className={styles.navigation.button}>
              Apply Now
            </button>
          </div>
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
                <button onClick={openContactForm} className="bg-[#C6A45C] text-[#0A0A0A] px-8 sm:px-12 py-4 sm:py-5 rounded-none font-sans text-sm tracking-[0.2em] uppercase hover:bg-[#D4B87C] transition-all duration-300">
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
                <button onClick={openContactForm} className="text-[#C6A45C] hover:text-[#D4B87C] transition-all duration-300 flex items-center gap-4 text-sm tracking-[0.2em] uppercase group">
                  Explore Services
                  <span className="text-lg transform group-hover:translate-x-2 transition-transform duration-300">→</span>
                </button>
              </div>
              {/* Hide this div on mobile, show as grid on md+ */}
              <div className="hidden md:grid grid-cols-2 gap-4 sm:gap-10">
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
      <PartialSection id="membership" hasPadding={true}>
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
                onClick={openContactForm}
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
                onClick={openContactForm}
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

      {/* Image Block 3 */}
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

      {/* Footer */}
      <footer className={styles.footer.base}>
        <div className={styles.footer.container}>
          {/* Centered content block */}
          <div className="flex flex-col items-center text-center space-y-6">
            <h3 className={styles.footer.title}>HORISPES</h3>
            {/* Combined Legal Links and Contact Info into one structured block */}
            <div className="text-white/60 text-sm tracking-[0.1em] flex flex-col items-center space-y-4">
              {/* Legal Links */}
              <ul className="list-none p-0 m-0 text-center space-y-2">
                <li><a href="#" className={`${styles.footer.link} font-bold`}>Privacy Statement</a></li>
                <li><a href="#" className={`${styles.footer.link} font-bold`}>Terms & Conditions</a></li>
              </ul>

              {/* Separator Line 1 */}
              <div className="border-t border-white/10 w-16 sm:w-24 my-4"></div> {/* Adjusted width for a shorter line */}

              {/* Tel Info */}
              <ul className="list-none p-0 m-0 text-center space-y-2">
                <li><span className="font-bold">Tel</span></li>
                <li>TR +90 (532) 333 4444</li>
                <li>UK +44 (1) 123 1234 123</li>
                <li>US +1 (123) 123 1234</li>
              </ul>

              {/* Separator Line 2 */}
              <div className="border-t border-white/10 w-16 sm:w-24 my-4"></div> {/* Adjusted width for a shorter line */}

              {/* Email Info */}
              <ul className="list-none p-0 m-0 text-center space-y-2">
                <li><span className="font-bold">Email</span></li>
                <li>membership@horispes.com</li>
              </ul>
            </div>

            {/* Copyright */}
            <div className="border-t border-white/10 w-16 sm:w-24 my-4"></div>
            <p className={styles.footer.copyright}>© 2025 HORISPES. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
