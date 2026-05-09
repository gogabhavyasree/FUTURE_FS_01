import { AnimatedSection, slideLeft, slideRight } from '../utils/animations';
import { HiDocumentText } from 'react-icons/hi2';
import { motion } from 'framer-motion';

const resumeSkills = [
  { label: 'Frontend Development', items: 'HTML, CSS, JavaScript, Tailwind CSS' },
  { label: 'Databases', items: 'MySQL' },
  { label: 'Programming Languages', items: 'C, Java, Python, JavaScript' },
  { label: 'Tools & Platforms', items: 'Git, GitHub, VS Code, Postman' },
  { label: 'Concepts', items: 'DSA, OOP, Responsive Design, Agile' },
];

export default function Resume() {
  return (
    <section
      id="resume"
      className="py-24 bg-gray-50 dark:bg-gray-950 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-mesh pointer-events-none opacity-60" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <p className="text-center text-primary-500 font-semibold text-sm uppercase tracking-widest mb-3">My Background</p>
          <h2 className="section-heading text-gray-900 dark:text-white">
            My <span className="text-gradient">Resume</span>
          </h2>
          <p className="section-subheading">
            A snapshot of my technical profile and experience.
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Left — Preview card */}
          <AnimatedSection variants={slideLeft}>
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="relative bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden border border-gray-100 dark:border-gray-700"
            >
              {/* Header banner */}
              <div className="animated-gradient p-8 text-white">
                <div className="flex items-center gap-4">
                  <img
                    src="/MyPhoto.jpeg"
                    alt="Bhavyasree"
                    className="w-16 h-16 rounded-full border-2 border-white/50 object-cover object-top"
                  />
                  <div>
                    <h3 className="font-display text-xl font-bold">Goga Bhavyasree</h3>
                    <p className="text-white/80 text-sm">Computer Science Student | Full Stack Intern</p>
                    <p className="text-white/60 text-xs mt-0.5">📍 Vijayawada, Andhra Pradesh</p>
                  </div>
                </div>
              </div>

              {/* Skills preview */}
              <div className="p-6">
                <h4 className="font-semibold text-gray-700 dark:text-gray-300 text-sm uppercase tracking-wider mb-4">
                  Technical Highlights
                </h4>
                <div className="space-y-3">
                  {resumeSkills.map((s) => (
                    <div key={s.label} className="flex gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary-500 mt-1.5 flex-shrink-0" />
                      <div>
                        <span className="text-sm font-semibold text-gray-800 dark:text-white">{s.label}: </span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">{s.items}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100 dark:border-gray-700 flex items-center gap-2 text-xs text-gray-400">
                  <HiDocumentText className="w-4 h-4" />
                  Resume — Goga Bhavyasree — 2024
                </div>
              </div>
            </motion.div>
          </AnimatedSection>

          {/* Right — Info + download */}
          <AnimatedSection variants={slideRight} className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700 shadow-sm">
              <h3 className="font-display text-xl font-bold text-gray-900 dark:text-white mb-4">
                Why hire me?
              </h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                {[
                  '🎯 Passionate about clean, efficient, and scalable code',
                  '📚 Continuously upskilling through online learning and DSA practice',
                  '🤝 Strong collaborative mindset and communication skills',
                  '⚡ Quick learner, adapts rapidly to new technologies',
                  '🏗️ Hands-on experience building real-world web applications',
                ].map((point) => (
                  <li key={point} className="flex gap-3 text-sm leading-relaxed">
                    {point}
                  </li>
                ))}
              </ul>
            </div>



            {/* Contact info */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700 shadow-sm space-y-2">
              <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 uppercase tracking-wider">Contact Details</p>
              {[
                { icon: '📧', label: 'gogabhavyasree@gmail.com', href: 'mailto:gogabhavyasree@gmail.com' },
                { icon: '🔗', label: 'LinkedIn Profile', href: 'https://linkedin.com/in/bhavyasree-goga-8902a2378' },
                { icon: '💻', label: 'GitHub', href: 'https://github.com/gogabhavyasree' },
                { icon: '📍', label: 'Vijayawada, Andhra Pradesh', href: null },
              ].map((c) => (
                c.href ? (
                  <a
                    key={c.label}
                    href={c.href}
                    target={c.href.startsWith('http') ? '_blank' : '_self'}
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    <span>{c.icon}</span>
                    <span>{c.label}</span>
                  </a>
                ) : (
                  <div key={c.label} className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
                    <span>{c.icon}</span>
                    <span>{c.label}</span>
                  </div>
                )
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
