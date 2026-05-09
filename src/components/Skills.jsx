import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { AnimatedSection, staggerContainer, fadeUp } from '../utils/animations';
import { FaHtml5, FaJs, FaGitAlt } from 'react-icons/fa';

const skills = [
  {
    id: 'html-css',
    icon: <FaHtml5 className="w-8 h-8" />,
    iconColor: 'text-orange-500',
    iconBg: 'bg-orange-50 dark:bg-orange-900/20',
    borderColor: 'hover:border-orange-300 dark:hover:border-orange-700',
    name: 'HTML & CSS',
    level: 90,
    levelLabel: 'Advanced',
    levelColor: 'from-orange-400 to-orange-600',
    tags: ['Semantic HTML5', 'Flexbox & Grid', 'Animations', 'Responsive Design'],
    desc: 'Building structured, accessible, and beautifully styled web pages.',
  },
  {
    id: 'javascript',
    icon: <FaJs className="w-8 h-8" />,
    iconColor: 'text-yellow-500',
    iconBg: 'bg-yellow-50 dark:bg-yellow-900/20',
    borderColor: 'hover:border-yellow-300 dark:hover:border-yellow-700',
    name: 'JavaScript',
    level: 80,
    levelLabel: 'Proficient',
    levelColor: 'from-yellow-400 to-yellow-600',
    tags: ['ES6+', 'DOM Manipulation', 'Async/Await', 'APIs'],
    desc: 'Writing clean, efficient, and dynamic JavaScript for modern web apps.',
  },

  {
    id: 'git',
    icon: <FaGitAlt className="w-8 h-8" />,
    iconColor: 'text-red-500',
    iconBg: 'bg-red-50 dark:bg-red-900/20',
    borderColor: 'hover:border-red-300 dark:hover:border-red-700',
    name: 'Git & GitHub',
    level: 82,
    levelLabel: 'Proficient',
    levelColor: 'from-red-400 to-red-600',
    tags: ['Version Control', 'Branching', 'Pull Requests', 'Collaboration'],
    desc: 'Managing code effectively with Git workflows and open source collaboration.',
  },
];

function SkillCard({ skill, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      id={`skill-${skill.id}`}
      className={`group card bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700 ${skill.borderColor} transition-all duration-300`}
    >
      {/* Icon + level badge */}
      <div className="flex items-start justify-between mb-4">
        <div className={`p-3 rounded-xl ${skill.iconBg} ${skill.iconColor}`}>
          {skill.icon}
        </div>
        <span className="text-xs font-semibold px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300">
          {skill.levelLabel}
        </span>
      </div>

      <h3 className="font-display text-xl font-bold text-gray-900 dark:text-white mb-2">{skill.name}</h3>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 leading-relaxed">{skill.desc}</p>

      {/* Progress bar */}
      <div className="mb-4">
        <div className="flex justify-between items-center mb-1.5">
          <span className="text-xs font-medium text-gray-600 dark:text-gray-400">Proficiency</span>
          <span className="text-xs font-bold text-gray-800 dark:text-white">{skill.level}%</span>
        </div>
        <div className="w-full h-2 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
            transition={{ duration: 1.2, delay: index * 0.15, ease: 'easeOut' }}
            className={`h-full rounded-full bg-gradient-to-r ${skill.levelColor}`}
          />
        </div>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5">
        {skill.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-2.5 py-1 rounded-lg bg-gray-50 dark:bg-gray-700/60 text-gray-600 dark:text-gray-400 border border-gray-100 dark:border-gray-600"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 bg-gray-50 dark:bg-gray-950 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-mesh pointer-events-none opacity-60" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <p className="text-center text-primary-500 font-semibold text-sm uppercase tracking-widest mb-3">What I work with</p>
          <h2 className="section-heading text-gray-900 dark:text-white">
            My <span className="text-gradient">Skills</span>
          </h2>
          <p className="section-subheading">
            A focused set of technical skills I've been building and applying in real-world projects.
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, i) => (
            <SkillCard key={skill.id} skill={skill} index={i} />
          ))}
        </div>

        {/* Also knows row */}
        <AnimatedSection className="mt-12">
          <div className="text-center">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 font-medium">Also familiar with</p>
            <div className="flex flex-wrap justify-center gap-3">
              {['C', 'Java', 'Python', 'Node.js', 'MySQL', 'Tailwind CSS', 'DSA'].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-sm font-medium text-gray-700 dark:text-gray-300 hover:border-primary-300 dark:hover:border-primary-600 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200 shadow-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
