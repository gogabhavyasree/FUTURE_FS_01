import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AnimatedSection, staggerContainer, scaleIn } from '../utils/animations';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    id: 'portfolio',
    title: 'Personal Portfolio Website',
    description:
      'A modern, fully responsive personal portfolio built with JavaScript and Tailwind CSS, featuring dark/light mode, smooth animations, and glassmorphism design.',
    image: null,
    gradient: 'from-indigo-500 via-purple-500 to-pink-500',
    emoji: '🌐',
    tags: ['JavaScript', 'Tailwind CSS', 'Framer Motion', 'Vite'],
    github: 'https://github.com/gogabhavyasree',
    live: '#',
    category: 'Frontend',
  },
  {
    id: 'todo-app',
    title: 'Task Manager App',
    description:
      'A clean and functional task management application with CRUD operations, local storage persistence, and responsive UI with priority labelling.',
    image: null,
    gradient: 'from-cyan-500 via-blue-500 to-indigo-500',
    emoji: '✅',
    tags: ['HTML', 'CSS', 'JavaScript', 'LocalStorage'],
    github: 'https://github.com/gogabhavyasree',
    live: '#',
    category: 'Frontend',
  },
  {
    id: 'weather-app',
    title: 'Weather Dashboard',
    description:
      'Real-time weather dashboard using OpenWeatherMap API. Displays current weather, temperature, humidity, and 5-day forecast with animated icons.',
    image: null,
    gradient: 'from-orange-400 via-amber-400 to-yellow-400',
    emoji: '🌤️',
    tags: ['JavaScript', 'REST API', 'HTML', 'CSS'],
    github: 'https://github.com/gogabhavyasree',
    live: '#',
    category: 'Frontend',
  },
  {
    id: 'quiz-app',
    title: 'Interactive Quiz App',
    description:
      'A dynamic quiz application with multiple categories, timer functionality, score tracking, and progress indicators built with vanilla JavaScript.',
    image: null,
    gradient: 'from-green-400 via-emerald-400 to-teal-500',
    emoji: '🧠',
    tags: ['JavaScript', 'HTML5', 'CSS3', 'JSON'],
    github: 'https://github.com/gogabhavyasree',
    live: '#',
    category: 'Frontend',
  },
];

const categories = ['All', 'Frontend', 'Backend', 'Full Stack'];

function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      id={`project-${project.id}`}
      className="group card bg-white dark:bg-gray-800 rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-700 hover:border-primary-200 dark:hover:border-primary-700 flex flex-col"
    >
      {/* Card top banner */}
      <div className={`relative h-44 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}>
        <div className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'radial-gradient(circle at 20% 80%, white 1px, transparent 1px), radial-gradient(circle at 80% 20%, white 1px, transparent 1px)',
            backgroundSize: '30px 30px',
          }}
        />
        <span className="text-7xl drop-shadow-lg group-hover:scale-110 transition-transform duration-300">
          {project.emoji}
        </span>
        <div className="absolute top-3 right-3">
          <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-white/20 text-white backdrop-blur-sm">
            {project.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-display text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4 flex-1">
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2.5 py-1 rounded-lg bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action buttons */}
        <div className="flex gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            id={`project-${project.id}-github`}
            className="flex-1 flex items-center justify-center gap-2 py-2 rounded-xl border-2 border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300 text-sm font-semibold hover:border-gray-900 dark:hover:border-white hover:text-gray-900 dark:hover:text-white transition-all duration-200"
          >
            <FaGithub className="w-4 h-4" /> GitHub
          </a>

        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 bg-white dark:bg-gray-900 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <p className="text-center text-primary-500 font-semibold text-sm uppercase tracking-widest mb-3">What I've built</p>
          <h2 className="section-heading text-gray-900 dark:text-white">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="section-subheading">
            A collection of projects that showcase my problem-solving skills and technical abilities.
          </p>
        </AnimatedSection>

        {/* Filter tabs */}
        <AnimatedSection className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              id={`filter-${cat.toLowerCase()}`}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                activeFilter === cat
                  ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-lg shadow-primary-500/25'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </AnimatedSection>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6"
          >
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

        {filtered.length === 0 && (
          <div className="text-center py-16 text-gray-400 dark:text-gray-600">
            <span className="text-5xl">🔍</span>
            <p className="mt-4 text-lg">No projects in this category yet.</p>
          </div>
        )}
      </div>
    </section>
  );
}
