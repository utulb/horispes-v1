'use client';

import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A]/95 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 flex justify-between items-center">
          <h1 className="font-serif text-xl sm:text-2xl tracking-[0.2em]">HORISPES</h1>
          <div className="hidden md:flex gap-8 lg:gap-16">
            <a href="#services" className="text-white/70 hover:text-[#C6A45C] transition-all duration-300 text-sm tracking-[0.2em] uppercase">Services</a>
            <a href="#membership" className="text-white/70 hover:text-[#C6A45C] transition-all duration-300 text-sm tracking-[0.2em] uppercase">Membership</a>
            <a href="#contact" className="text-white/70 hover:text-[#C6A45C] transition-all duration-300 text-sm tracking-[0.2em] uppercase">Contact</a>
          </div>
          <button className="bg-[#C6A45C] text-[#0A0A0A] px-6 sm:px-10 py-2 sm:py-3 rounded-none text-sm tracking-[0.2em] uppercase hover:bg-[#D4B87C] transition-all duration-300">
            Apply Now
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
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
        <div className="relative z-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full py-20 sm:py-32 md:py-0 md:mx-0">
          <div className="max-w-2xl text-center md:text-left md:mx-0">
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
              <p className="font-sans text-lg sm:text-xl md:text-2xl mb-8 sm:mb-12 text-white/80 max-w-xl mx-auto md:mx-0 leading-relaxed">
                Luxury travel and lifestyle agent, elite concierge service, dedicated extension of your personal office – there are several ways to describe HORISPES, but one word our members often use might explain it best of all.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center md:justify-start"
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
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 sm:py-32 md:py-48 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32 items-center mb-20 sm:mb-40">
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
              {[
                { title: "Travel", icon: "✈️" },
                { title: "Events", icon: "🎭" },
                { title: "Dining", icon: "🍽️" },
                { title: "Lifestyle", icon: "👔" }
              ].map((service, index) => (
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
      </section>

      {/* Membership Section */}
      <section id="membership" className="py-24 sm:py-32 md:py-48 px-4 sm:px-6 lg:px-8 bg-[#0A0A0A]/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 sm:mb-32">
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl mb-6 sm:mb-10 leading-tight tracking-tight">Exclusive for Good Reason</h2>
            <p className="text-white/80 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              We strictly limit our membership to ensure we can deliver on our promises, big and small. Each member and their family is matched perfectly with their own personal manager.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-16 max-w-6xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="p-8 sm:p-16 border border-white/10 rounded-none hover:border-[#C6A45C] transition-all duration-300"
            >
              <h3 className="font-serif text-3xl sm:text-4xl mb-6 sm:mb-8">Individual</h3>
              <p className="text-white/80 mb-8 sm:mb-10 leading-relaxed">Personalized luxury lifestyle management for discerning individuals.</p>
              <ul className="space-y-4 sm:space-y-6 mb-12 sm:mb-16">
                <li className="flex items-center gap-4 text-white/80">
                  <span className="text-[#C6A45C] text-2xl">•</span>
                  Dedicated Lifestyle Manager
                </li>
                <li className="flex items-center gap-4 text-white/80">
                  <span className="text-[#C6A45C] text-2xl">•</span>
                  24/7 Concierge Service
                </li>
                <li className="flex items-center gap-4 text-white/80">
                  <span className="text-[#C6A45C] text-2xl">•</span>
                  Exclusive Event Access
                </li>
              </ul>
              <button className="w-full bg-[#C6A45C] text-[#0A0A0A] py-4 sm:py-5 rounded-none text-sm tracking-[0.2em] uppercase hover:bg-[#D4B87C] transition-all duration-300">
                Apply Now
              </button>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-8 sm:p-16 border border-white/10 rounded-none hover:border-[#C6A45C] transition-all duration-300"
            >
              <h3 className="font-serif text-3xl sm:text-4xl mb-6 sm:mb-8">Corporate</h3>
              <p className="text-white/80 mb-8 sm:mb-10 leading-relaxed">Elite services for discerning businesses and their executives.</p>
              <ul className="space-y-4 sm:space-y-6 mb-12 sm:mb-16">
                <li className="flex items-center gap-4 text-white/80">
                  <span className="text-[#C6A45C] text-2xl">•</span>
                  Team Management
                </li>
                <li className="flex items-center gap-4 text-white/80">
                  <span className="text-[#C6A45C] text-2xl">•</span>
                  Business Travel Support
          </li>
                <li className="flex items-center gap-4 text-white/80">
                  <span className="text-[#C6A45C] text-2xl">•</span>
                  Corporate Entertainment
          </li>
              </ul>
              <button className="w-full bg-[#C6A45C] text-[#0A0A0A] py-4 sm:py-5 rounded-none text-sm tracking-[0.2em] uppercase hover:bg-[#D4B87C] transition-all duration-300">
                Apply Now
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 sm:py-32 md:py-48 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
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
            className="bg-[#C6A45C] text-[#0A0A0A] px-12 sm:px-16 py-4 sm:py-5 rounded-none font-sans text-sm tracking-[0.2em] uppercase hover:bg-[#D4B87C] transition-all duration-300"
          >
            Apply for Membership
          </motion.button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-20">
            <div>
              <h3 className="font-serif text-xl sm:text-2xl mb-6 sm:mb-8 tracking-[0.2em]">HORISPES</h3>
              <p className="text-white/60">Premium Experiences</p>
            </div>
            <div>
              <h4 className="font-serif text-base sm:text-lg mb-6 sm:mb-8 tracking-[0.2em]">Services</h4>
              <ul className="space-y-2 sm:space-y-4">
                <li><a href="#" className="text-white/60 hover:text-[#C6A45C] transition-all duration-300 text-sm tracking-[0.2em] uppercase">Travel</a></li>
                <li><a href="#" className="text-white/60 hover:text-[#C6A45C] transition-all duration-300 text-sm tracking-[0.2em] uppercase">Events</a></li>
                <li><a href="#" className="text-white/60 hover:text-[#C6A45C] transition-all duration-300 text-sm tracking-[0.2em] uppercase">Dining</a></li>
                <li><a href="#" className="text-white/60 hover:text-[#C6A45C] transition-all duration-300 text-sm tracking-[0.2em] uppercase">Lifestyle</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-serif text-base sm:text-lg mb-6 sm:mb-8 tracking-[0.2em]">Company</h4>
              <ul className="space-y-2 sm:space-y-4">
                <li><a href="#" className="text-white/60 hover:text-[#C6A45C] transition-all duration-300 text-sm tracking-[0.2em] uppercase">About</a></li>
                <li><a href="#" className="text-white/60 hover:text-[#C6A45C] transition-all duration-300 text-sm tracking-[0.2em] uppercase">Contact</a></li>
                <li><a href="#" className="text-white/60 hover:text-[#C6A45C] transition-all duration-300 text-sm tracking-[0.2em] uppercase">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-serif text-base sm:text-lg mb-6 sm:mb-8 tracking-[0.2em]">Legal</h4>
              <ul className="space-y-2 sm:space-y-4">
                <li><a href="#" className="text-white/60 hover:text-[#C6A45C] transition-all duration-300 text-sm tracking-[0.2em] uppercase">Privacy Policy</a></li>
                <li><a href="#" className="text-white/60 hover:text-[#C6A45C] transition-all duration-300 text-sm tracking-[0.2em] uppercase">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 sm:mt-20 pt-8 border-t border-white/10 text-center text-white/60 text-sm tracking-[0.2em]">
            © 2024 HORISPES. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
