import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

export default function Education() {
  return (
    <section
      id="education"
      className="py-28 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #050816 0%, #080d20 50%, #050816 100%)' }}
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />

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
            04. My journey
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(135deg, #6366f1, #06b6d4)' }}>
              Education
            </span>
          </h2>
          <div className="w-16 h-1 mx-auto rounded-full" style={{ background: 'linear-gradient(90deg, #6366f1, #06b6d4)' }} />
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {portfolioData.education.map((edu, i) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              viewport={{ once: true, margin: '-60px' }}
            >
              {/* Timeline card */}
              <div className="relative flex gap-6">
                {/* Timeline line + dot */}
                <div className="flex flex-col items-center">
                  <div className="relative">
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shadow-xl"
                      style={{ background: 'linear-gradient(135deg, #6366f1, #06b6d4)', boxShadow: '0 0 30px rgba(99,102,241,0.4)' }}>
                      🎓
                    </div>
                    {/* Pulse ring */}
                    <div className="absolute -inset-1 rounded-2xl border-2 border-indigo-500/30 animate-pulse" />
                  </div>
                  <div className="w-px flex-1 mt-4 bg-gradient-to-b from-indigo-500/30 to-transparent" />
                </div>

                {/* Content card */}
                <div
                  className="flex-1 mb-8 rounded-2xl border border-indigo-500/20 overflow-hidden"
                  style={{
                    background: 'linear-gradient(135deg, rgba(99,102,241,0.08), rgba(6,182,212,0.04))',
                    backdropFilter: 'blur(12px)',
                  }}
                >
                  {/* Top gradient bar */}
                  <div className="h-1 w-full" style={{ background: 'linear-gradient(90deg, #6366f1, #06b6d4)' }} />

                  <div className="p-6 sm:p-8">
                    {/* Institution */}
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                          {edu.shortName}
                        </h3>
                        <p className="text-slate-400 text-sm">{edu.institution}</p>
                      </div>
                      <span className="px-3 py-1.5 rounded-full text-xs font-bold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                        {edu.status}
                      </span>
                    </div>

                    {/* Degree info */}
                    <div className="flex flex-wrap gap-3 mb-5">
                      <div className="flex items-center gap-2 px-3 py-2 rounded-xl border border-white/8 bg-white/4">
                        <span className="text-base">📚</span>
                        <div>
                          <div className="text-xs text-slate-500 mb-0.5">Degree</div>
                          <div className="text-sm font-semibold text-slate-200">{edu.degree}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 px-3 py-2 rounded-xl border border-white/8 bg-white/4">
                        <span className="text-base">💻</span>
                        <div>
                          <div className="text-xs text-slate-500 mb-0.5">Field</div>
                          <div className="text-sm font-semibold text-slate-200">{edu.field}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 px-3 py-2 rounded-xl border border-white/8 bg-white/4">
                        <span className="text-base">📅</span>
                        <div>
                          <div className="text-xs text-slate-500 mb-0.5">Duration</div>
                          <div className="text-sm font-semibold text-slate-200">{edu.startYear} – {edu.endYear}</div>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-slate-400 text-sm leading-relaxed border-t border-white/8 pt-4">
                      {edu.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Future education placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex gap-6"
          >
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl border-2 border-dashed border-slate-700 bg-slate-900/50">
                🔮
              </div>
            </div>
            <div className="flex-1 rounded-2xl border border-dashed border-slate-700 p-6 flex items-center gap-3">
              <div>
                <p className="text-slate-500 font-medium">Next chapter…</p>
                <p className="text-slate-600 text-sm mt-0.5">Master's / Advanced Opportunities</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
