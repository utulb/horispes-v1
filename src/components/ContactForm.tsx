'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ContactFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactForm({ isOpen, onClose }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setSubmitStatus('success');
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
      
      // Close form after 2 seconds
      setTimeout(() => {
        onClose();
        setSubmitStatus('idle');
      }, 2000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[51]"
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="fixed inset-x-4 top-1/2 -translate-y-1/2 w-auto max-w-md mx-auto bg-[#0A0A0A] border border-white/10 p-6 sm:p-10 z-[51] max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6 sm:mb-8">
              <h2 className="font-serif text-xl sm:text-3xl tracking-tight">Begin Your Journey</h2>
              <button
                onClick={onClose}
                className="text-white/60 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full"
                aria-label="Close form"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div className="space-y-1">
                <label htmlFor="name" className="block text-sm text-white/80 font-medium tracking-wide">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your full name"
                  className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-white/30 focus:border-[#C6A45C] focus:ring-1 focus-within:ring-1 focus:ring-[#C6A45C] outline-none transition-all duration-300 text-base"
                />
              </div>

              <div className="space-y-1">
                <label htmlFor="email" className="block text-sm text-white/80 font-medium tracking-wide">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email address"
                  className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-white/30 focus:border-[#C6A45C] focus:ring-1 focus-within:ring-1 focus:ring-[#C6A45C] outline-none transition-all duration-300 text-base"
                />
              </div>

              <div className="space-y-1">
                <label htmlFor="phone" className="block text-sm text-white/80 font-medium tracking-wide">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-white/30 focus:border-[#C6A45C] focus:ring-1 focus-within:ring-1 focus:ring-[#C6A45C] outline-none transition-all duration-300 text-base"
                />
              </div>

              <div className="space-y-1">
                <label htmlFor="message" className="block text-sm text-white/80 font-medium tracking-wide">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell us about your interests and requirements"
                  rows={4}
                  className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-white/30 focus:border-[#C6A45C] focus:ring-1 focus-within:ring-1 focus:ring-[#C6A45C] outline-none transition-all duration-300 resize-none text-base"
                />
              </div>

              {submitStatus === 'error' && (
                <div className="text-red-500 text-sm">
                  Failed to send message. Please try again.
                </div>
              )}

              {submitStatus === 'success' && (
                <div className="text-green-500 text-sm">
                  Thank you! Your application has been submitted successfully.
                </div>
              )}

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-[#C6A45C] text-[#0A0A0A] px-8 py-4 rounded-none font-sans text-sm tracking-[0.2em] uppercase hover:bg-[#D4B87C] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Submitting...
                  </>
                ) : (
                  'Submit Application'
                )}
              </motion.button>
            </form>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
} 