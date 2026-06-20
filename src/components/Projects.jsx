import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const statusStyles = {
  completed:   { label: 'Completed',   class: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30' },
  'in-progress': { label: 'In Progress', class: 'bg-amber-500/15 text-amber-400 border-amber-500/30' },
  planned:     { label: 'Planned',      class: 'bg-slate-500/15 text-slate-400 border-slate-500/30' },
};

function ProjectCard({ project, index }) {
  const status = statusStyles[project.status] || statusStyles.planned;
  const isFeatured = project.featured;
  const isPlaceholder = !project.liveUrl && !project.githubUrl;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      viewport={{ once: true, margin: '-60px' }}
      className={`group relative rounded-2xl border overflow-hidden transition-all duration-500 ${
        isFeatured
          ? 'border-indigo-500/40 shadow-2xl shadow-indigo-500/10'
          : 'border-white/8'
      }`}
      style={{ background: 'rgba(13,17,23,0.8)', backdropFilter: 'blur(12px)' }}
      whileHover={{ y: -6 }}
    >
      {/* Featured gradient top border */}
      {isFeatured && (
        <div className="absolute top-0 left-0 right-0 h-px"
          style={{ background: 'linear-gradient(90deg, transparent, #6366f1, #06b6d4, transparent)' }} />
      )}

      {/* Hover glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
        style={{
          background: isFeatured
            ? 'radial-gradient(600px circle at 50% 0%, rgba(99,102,241,0.08), transparent 60%)'
            : 'radial-gradient(400px circle at 50% 0%, rgba(255,255,255,0.03), transparent 60%)',
        }}
      />

      <div className="relative p-6 sm:p-8 flex flex-col h-full">
        {/* Header row */}
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex items-center gap-3">
            {/* Project icon */}
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl shadow-lg ${
              isFeatured
                ? 'bg-gradient-to-br from-indigo-500 to-cyan-500 shadow-indigo-500/30'
                : 'bg-white/8 border border-white/10'
            }`}>
              {isFeatured ? '🎯' : isPlaceholder ? '🔮' : '📁'}
            </div>
            <div>
              {project.highlight && (
                <div className="text-xs font-semibold text-indigo-400 uppercase tracking-wider mb-1">
                  ⭐ {project.highlight}
                </div>
              )}
              <h3 className={`font-bold leading-tight ${isFeatured ? 'text-xl text-white' : 'text-lg text-slate-200'}`}>
                {project.title}
              </h3>
            </div>
          </div>
          <span className={`shrink-0 px-2.5 py-1 text-xs font-semibold rounded-full border ${status.class}`}>
            {status.label}
          </span>
        </div>

        {/* Description */}
        <p className="text-slate-400 text-sm leading-relaxed mb-5 flex-1">
          {isFeatured ? project.longDescription || project.description : project.description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 text-xs font-medium rounded-lg border border-white/10 bg-white/5 text-slate-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action buttons */}
        {!isPlaceholder ? (
          <div className="flex items-center gap-3">
            {project.liveUrl && project.liveUrl !== '#' ? (
              <a
                id={`project-live-${project.id}`}
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-white transition-all duration-300 shadow-lg"
                style={{ background: 'linear-gradient(135deg, #6366f1, #4f46e5)', boxShadow: '0 4px 15px rgba(99,102,241,0.3)' }}
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Live Demo
              </a>
            ) : (
              <span className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium text-slate-500 border border-white/5 cursor-not-allowed">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Live Demo
              </span>
            )}
            {project.githubUrl && project.githubUrl !== '#' ? (
              <a
                id={`project-github-${project.id}`}
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-slate-300 border border-white/15 bg-white/5 hover:border-white/30 hover:text-white transition-all duration-300"
              >
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                GitHub
              </a>
            ) : (
              <span className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium text-slate-500 border border-white/5 cursor-not-allowed">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                GitHub (Soon)
              </span>
            )}
          </div>
        ) : (
          <div className="flex items-center gap-2 text-slate-600 text-sm">
            <div className="w-2 h-2 rounded-full bg-slate-600 animate-pulse" />
            Coming soon — stay tuned!
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [featured, ...rest] = portfolioData.projects;

  return (
    <section id="projects" className="py-28 relative overflow-hidden" style={{ background: '#050816' }}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />

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
            03. What I've built
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            My{' '}
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(135deg, #6366f1, #06b6d4)' }}>
              Projects
            </span>
          </h2>
          <div className="w-16 h-1 mx-auto rounded-full" style={{ background: 'linear-gradient(90deg, #6366f1, #06b6d4)' }} />
        </motion.div>

        {/* Featured project (full width) */}
        <div className="mb-8">
          <ProjectCard project={featured} index={0} />
        </div>

        {/* Other projects (grid) */}
        <div className="grid sm:grid-cols-2 gap-6">
          {rest.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i + 1} />
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <a
            id="github-profile-link"
            href={portfolioData.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/15 bg-white/5 text-slate-300 font-medium hover:border-indigo-500/50 hover:text-white transition-all duration-300"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            See all projects on GitHub
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
