import { useState } from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const contactLinks = [
  {
    id: 'contact-email',
    label: 'Email',
    value: portfolioData.contact.email,
    href: `mailto:${portfolioData.contact.email}`,
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    color: 'from-indigo-500 to-purple-600',
    glow: 'rgba(99,102,241,0.2)',
  },
  {
    id: 'contact-linkedin',
    label: 'LinkedIn',
    value: 'atul-sinha-b548b62aa',
    href: portfolioData.contact.linkedin,
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    color: 'from-blue-500 to-blue-700',
    glow: 'rgba(59,130,246,0.2)',
  },
  {
    id: 'contact-github',
    label: 'GitHub',
    value: 'hardyolive97',
    href: portfolioData.contact.github,
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
    color: 'from-slate-600 to-slate-800',
    glow: 'rgba(100,116,139,0.2)',
  },
];

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Opens the user's mail client as a fallback — replace with a backend/EmailJS integration
    const subject = encodeURIComponent(`Portfolio Contact from ${formState.name}`);
    const body = encodeURIComponent(`Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`);
    window.open(`mailto:${portfolioData.contact.email}?subject=${subject}&body=${body}`);
    setLoading(true);
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 800);
  };

  return (
    <section id="contact" className="py-28 relative overflow-hidden" style={{ background: '#050816' }}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />

      {/* Background glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-5 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #6366f1, transparent)' }} />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-80px' }}
          className="text-center mb-16"
        >
          <p className="text-indigo-400 font-mono text-sm tracking-widest uppercase mb-3" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
            05. Get in touch
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Contact{' '}
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(135deg, #6366f1, #06b6d4)' }}>
              Me
            </span>
          </h2>
          <div className="w-16 h-1 mx-auto rounded-full mb-6" style={{ background: 'linear-gradient(90deg, #6366f1, #06b6d4)' }} />
          <p className="text-slate-400 max-w-xl mx-auto">
            I'm currently open to internship opportunities and exciting projects. Feel free to reach out — I'd love to chat!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Left — contact links */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4"
          >
            <h3 className="text-xl font-bold text-white mb-2">Let's connect</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              Whether you have a project in mind, want to collaborate, or just want to say hi — my inbox is always open.
            </p>

            {contactLinks.map((link, i) => (
              <motion.a
                key={link.id}
                id={link.id}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group flex items-center gap-4 p-4 rounded-2xl border border-white/8 bg-white/3 hover:border-white/20 transition-all duration-300"
                style={{ backdropFilter: 'blur(12px)' }}
                whileHover={{ x: 4, boxShadow: `0 8px 30px ${link.glow}` }}
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${link.color} flex items-center justify-center text-white shadow-lg flex-shrink-0`}>
                  {link.icon}
                </div>
                <div className="min-w-0">
                  <div className="text-xs text-slate-500 mb-0.5">{link.label}</div>
                  <div className="text-sm font-semibold text-slate-200 group-hover:text-white transition-colors truncate">
                    {link.value}
                  </div>
                </div>
                <svg className="w-4 h-4 text-slate-600 group-hover:text-slate-300 ml-auto shrink-0 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.a>
            ))}
          </motion.div>

          {/* Right — contact form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="rounded-2xl border border-white/10 p-6 sm:p-8" style={{ background: 'rgba(13,17,23,0.7)', backdropFilter: 'blur(12px)' }}>
              <div className="absolute top-0 left-6 right-6 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(99,102,241,0.5), transparent)' }} />

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center gap-4"
                >
                  <div className="text-5xl">🎉</div>
                  <h4 className="text-xl font-bold text-white">Message Sent!</h4>
                  <p className="text-slate-400 text-sm">Thanks for reaching out. I'll get back to you soon!</p>
                  <button
                    onClick={() => { setSubmitted(false); setFormState({ name: '', email: '', message: '' }); }}
                    className="mt-2 px-4 py-2 rounded-lg border border-indigo-500/30 text-indigo-400 text-sm hover:border-indigo-500 transition-colors"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form id="contact-form" onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <h3 className="text-xl font-bold text-white mb-2">Send a message</h3>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="contact-name" className="text-xs font-semibold text-slate-400 uppercase tracking-wide">Name</label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      value={formState.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-indigo-500/60 focus:ring-1 focus:ring-indigo-500/30 transition-all duration-200"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="contact-email-input" className="text-xs font-semibold text-slate-400 uppercase tracking-wide">Email</label>
                    <input
                      id="contact-email-input"
                      name="email"
                      type="email"
                      required
                      value={formState.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-indigo-500/60 focus:ring-1 focus:ring-indigo-500/30 transition-all duration-200"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="contact-message" className="text-xs font-semibold text-slate-400 uppercase tracking-wide">Message</label>
                    <textarea
                      id="contact-message"
                      name="message"
                      required
                      rows={5}
                      value={formState.message}
                      onChange={handleChange}
                      placeholder="What's on your mind?"
                      className="px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-indigo-500/60 focus:ring-1 focus:ring-indigo-500/30 transition-all duration-200 resize-none"
                    />
                  </div>

                  <motion.button
                    id="contact-submit"
                    type="submit"
                    disabled={loading}
                    className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-white font-semibold text-sm transition-all duration-300 disabled:opacity-70 mt-2"
                    style={{ background: 'linear-gradient(135deg, #6366f1, #4f46e5)', boxShadow: '0 4px 20px rgba(99,102,241,0.35)' }}
                    whileHover={{ scale: loading ? 1 : 1.02, boxShadow: '0 8px 30px rgba(99,102,241,0.5)' }}
                    whileTap={{ scale: 0.97 }}
                  >
                    {loading ? (
                      <>
                        <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Sending…
                      </>
                    ) : (
                      <>
                        Send Message
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
