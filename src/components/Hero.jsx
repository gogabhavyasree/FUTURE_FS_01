import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { TypeAnimation } from 'react-type-animation';
import { HiArrowDown, HiArrowDownTray } from 'react-icons/hi2';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-purple-50 dark:from-gray-950 dark:via-gray-900 dark:to-indigo-950"
    >
      {/* Animated blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-400/5 rounded-full blur-3xl" />

        {/* Grid dots */}
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
          style={{
            backgroundImage: 'radial-gradient(circle, #6366f1 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* Left content */}
          <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-50 dark:bg-primary-900/30 border border-primary-200 dark:border-primary-700 text-primary-600 dark:text-primary-400 text-sm font-medium mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Available for opportunities
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-5xl sm:text-6xl lg:text-7xl font-extrabold text-gray-900 dark:text-white mb-4 leading-tight"
            >
              Hi, I'm{' '}
              <span className="text-gradient">Bhavyasree</span>
            </motion.h1>

            {/* Typewriter role */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl sm:text-2xl font-medium text-gray-600 dark:text-gray-300 mb-6 h-8"
            >
              <TypeAnimation
                sequence={[
                  'Computer Science Student 🎓',
                  2000,
                  'Full Stack Web Developer 💻',
                  2000,
                  'Problem Solver 🧩',
                  2000,
                  'DSA Enthusiast 🚀',
                  2000,
                ]}
                wrapper="span"
                repeat={Infinity}
                className="font-semibold text-primary-500 dark:text-primary-400"
              />
            </motion.div>

            {/* Intro */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0"
            >
              Passionate about building modern, responsive web experiences.
              B.Tech CSE student at PVP Siddhartha Institute of Technology,
              Vijayawada — turning ideas into elegant digital solutions.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8"
            >
              <Link to="projects" smooth duration={600}>
                <button id="hero-view-projects" className="btn-primary flex items-center gap-2 text-base">
                  View Projects
                  <HiArrowDown className="w-4 h-4" />
                </button>
              </Link>
              <Link to="contact" smooth duration={600}>
                <button id="hero-contact" className="btn-outline flex items-center gap-2 text-base">
                  Contact Me
                </button>
              </Link>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-center gap-4 justify-center lg:justify-start"
            >
              <a
                id="hero-github"
                href="https://github.com/gogabhavyasree"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-primary-100 dark:hover:bg-primary-900/40 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-200"
                aria-label="GitHub"
              >
                <FaGithub className="w-5 h-5" />
              </a>
              <a
                id="hero-linkedin"
                href="https://linkedin.com/in/bhavyasree-goga-8902a2378"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-blue-900/40 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
              <span className="text-sm text-gray-500 dark:text-gray-400">📍 Vijayawada, AP</span>
            </motion.div>
          </div>

          {/* Right — Profile image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
            className="order-1 lg:order-2 flex-shrink-0"
          >
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-full animated-gradient opacity-20 blur-2xl scale-110 animate-pulse-slow" />
              {/* Border ring */}
              <div className="absolute inset-0 rounded-full p-1 animated-gradient pulse-ring">
                <div className="w-full h-full rounded-full bg-white dark:bg-gray-900" />
              </div>
              {/* Image */}
              <img
                src="/MyPhoto.jpeg"
                alt="Goga Bhavyasree — Computer Science Student"
                className="absolute inset-1 w-[calc(100%-8px)] h-[calc(100%-8px)] rounded-full object-cover object-top animate-float"
              />
              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute -bottom-2 -right-4 glass dark:glass-dark rounded-2xl px-3 py-2 shadow-xl"
              >
                <div className="flex items-center gap-2">
                  <span className="text-2xl">💻</span>
                  <div>
                    <div className="text-xs font-bold text-gray-800 dark:text-white">Full Stack</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">Developer</div>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 }}
                className="absolute -top-2 -left-4 glass dark:glass-dark rounded-2xl px-3 py-2 shadow-xl"
              >
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🎓</span>
                  <div>
                    <div className="text-xs font-bold text-gray-800 dark:text-white">B.Tech CSE</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">PVP Siddhartha</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-gray-400 dark:text-gray-600 tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-5 h-5 text-gray-400"
          >
            <HiArrowDown className="w-full h-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
