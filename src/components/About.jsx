import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: 'easeOut' },
  }),
};

export default function About() {
  return (
    <section id="about" className="py-28 relative overflow-hidden" style={{ background: '#050816' }}>
      {/* Subtle background accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeIn}
          className="text-center mb-16"
        >
          <p className="text-indigo-400 font-mono text-sm tracking-widest uppercase mb-3" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
            01. Who am I?
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            About{' '}
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(135deg, #6366f1, #06b6d4)' }}>
              Me
            </span>
          </h2>
          <div className="w-16 h-1 mx-auto rounded-full" style={{ background: 'linear-gradient(90deg, #6366f1, #06b6d4)' }} />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left – Avatar / illustration */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            viewport={{ once: true, margin: '-80px' }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative">
              {/* Glow ring */}
              <div className="absolute -inset-4 rounded-3xl opacity-30 blur-2xl"
                style={{ background: 'linear-gradient(135deg, #6366f1, #06b6d4)' }} />

              {/* Card */}
              <div className="relative w-80 h-80 sm:w-96 sm:h-96 rounded-3xl border border-white/10 flex flex-col items-center justify-center gap-4 overflow-hidden"
                style={{ background: 'linear-gradient(135deg, rgba(99,102,241,0.15), rgba(6,182,212,0.1))' }}>

                {/* Decorative code snippet */}
                <div className="absolute top-4 left-4 right-4 bg-[#0d1117]/80 rounded-xl p-4 font-mono text-xs text-left border border-white/10"
                  style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                  <div className="text-slate-500 mb-1">{'// Developer profile'}</div>
                  <div><span className="text-indigo-400">const</span> <span className="text-cyan-400">dev</span> <span className="text-white">=</span> {'{'}</div>
                  <div className="pl-4"><span className="text-emerald-400">name</span>: <span className="text-amber-300">"Atul Sinha"</span>,</div>
                  <div className="pl-4"><span className="text-emerald-400">role</span>: <span className="text-amber-300">"Full Stack Dev"</span>,</div>
                  <div className="pl-4"><span className="text-emerald-400">stack</span>: <span className="text-amber-300">"MERN"</span>,</div>
                  <div className="pl-4"><span className="text-emerald-400">status</span>: <span className="text-emerald-400">true</span>,</div>
                  <div>{'}'}</div>
                </div>

                {/* Avatar initials */}
                <div className="mt-24 w-20 h-20 rounded-2xl flex items-center justify-center text-3xl font-black text-white shadow-xl"
                  style={{ background: 'linear-gradient(135deg, #6366f1, #06b6d4)' }}>
                  AS
                </div>

                {/* Name tag */}
                <div className="text-center">
                  <div className="text-white font-bold text-lg">Atul Sinha</div>
                  <div className="text-slate-400 text-sm">Full Stack Developer Intern</div>
                </div>

                {/* Stat badges */}
                <div className="flex gap-3">
                  <div className="px-3 py-1.5 rounded-lg bg-indigo-500/20 border border-indigo-500/30 text-indigo-300 text-xs font-semibold">
                    MERN Stack
                  </div>
                  <div className="px-3 py-1.5 rounded-lg bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 text-xs font-semibold">
                    DSA
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right – Text content */}
          <div className="flex flex-col gap-6">
            {portfolioData.about.map((paragraph, i) => (
              <motion.p
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                variants={fadeIn}
                className="text-slate-400 leading-relaxed text-base sm:text-lg"
              >
                {paragraph}
              </motion.p>
            ))}

            {/* Quick stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="grid grid-cols-3 gap-4 mt-4"
            >
              {[
                { label: 'Projects Built', value: '3+' },
                { label: 'Tech Stack', value: 'MERN' },
                { label: 'Grad Year', value: '2028' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="text-center p-4 rounded-xl border border-white/8"
                  style={{ background: 'rgba(255,255,255,0.03)' }}
                >
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-xs text-slate-500">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            {/* Focus areas */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-wrap gap-2 mt-2"
            >
              {['Full Stack Dev', 'MERN Stack', 'DSA', 'Software Engineering', 'Open Source'].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 text-xs font-medium rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300"
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
