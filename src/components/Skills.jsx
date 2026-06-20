import { useState } from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const categoryColors = {
  Frontend: { border: 'rgba(99,102,241,0.3)', bg: 'rgba(99,102,241,0.08)', badge: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30', glow: '#6366f1' },
  Backend:  { border: 'rgba(6,182,212,0.3)',  bg: 'rgba(6,182,212,0.08)',  badge: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30',     glow: '#06b6d4' },
  Database: { border: 'rgba(16,185,129,0.3)', bg: 'rgba(16,185,129,0.08)', badge: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30', glow: '#10b981' },
  Tools:    { border: 'rgba(245,158,11,0.3)', bg: 'rgba(245,158,11,0.08)', badge: 'bg-amber-500/20 text-amber-300 border-amber-500/30',   glow: '#f59e0b' },
};

const categoryIcons = {
  Frontend: '🎨',
  Backend: '⚙️',
  Database: '🗄️',
  Tools: '🛠️',
};

function SkillCard({ skill, color }) {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div
      className="flex flex-col items-center gap-2 p-4 rounded-xl border transition-all duration-300 cursor-default select-none"
      style={{
        borderColor: hovered ? color.border : 'rgba(255,255,255,0.08)',
        background: hovered ? color.bg : 'rgba(255,255,255,0.03)',
        boxShadow: hovered ? `0 0 20px ${color.glow}20` : 'none',
      }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ scale: 1.06, y: -4 }}
      whileTap={{ scale: 0.97 }}
    >
      <span className="text-2xl">{skill.icon}</span>
      <span className="text-xs font-semibold text-slate-300 text-center leading-tight">{skill.name}</span>
    </motion.div>
  );
}

export default function Skills() {
  const [activeTab, setActiveTab] = useState('All');
  const categories = ['All', ...Object.keys(portfolioData.skills)];

  return (
    <section
      id="skills"
      className="py-28 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #050816 0%, #080d20 50%, #050816 100%)' }}
    >
      <div className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'radial-gradient(circle at 25% 25%, #6366f1 0%, transparent 50%), radial-gradient(circle at 75% 75%, #06b6d4 0%, transparent 50%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-80px' }}
          className="text-center mb-12"
        >
          <p className="text-indigo-400 font-mono text-sm tracking-widest uppercase mb-3" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
            02. What I know
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            My{' '}
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(135deg, #6366f1, #06b6d4)' }}>
              Skills
            </span>
          </h2>
          <div className="w-16 h-1 mx-auto rounded-full" style={{ background: 'linear-gradient(90deg, #6366f1, #06b6d4)' }} />
        </motion.div>

        {/* Tab filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              id={`skills-tab-${cat.toLowerCase()}`}
              onClick={() => setActiveTab(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold border transition-all duration-300 ${
                activeTab === cat
                  ? 'bg-indigo-600 border-indigo-500 text-white shadow-lg shadow-indigo-500/30'
                  : 'border-white/10 bg-white/5 text-slate-400 hover:text-white hover:border-indigo-500/40'
              }`}
            >
              {cat === 'All' ? '⚡ All' : `${categoryIcons[cat]} ${cat}`}
            </button>
          ))}
        </motion.div>

        {/* Skill category cards */}
        <div className="flex flex-col gap-10">
          {Object.entries(portfolioData.skills).map(([category, skills], catIndex) => {
            if (activeTab !== 'All' && activeTab !== category) return null;
            const color = categoryColors[category];

            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: catIndex * 0.1 }}
                viewport={{ once: true, margin: '-60px' }}
              >
                <div
                  className="rounded-2xl border p-6 sm:p-8"
                  style={{
                    borderColor: color.border,
                    background: 'rgba(13,17,23,0.7)',
                    backdropFilter: 'blur(12px)',
                  }}
                >
                  {/* Category header */}
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-xl">{categoryIcons[category]}</span>
                    <h3 className="text-lg font-bold text-white">{category}</h3>
                    <span className={`ml-auto px-2.5 py-1 text-xs font-semibold rounded-full border ${color.badge}`}>
                      {skills.length} {skills.length === 1 ? 'skill' : 'skills'}
                    </span>
                  </div>

                  {/* Skill grid */}
                  <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3">
                    {skills.map((skill) => (
                      <SkillCard key={skill.name} skill={skill} color={color} />
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
