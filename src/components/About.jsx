import { motion } from 'framer-motion';
import { AnimatedSection, staggerContainer, fadeUp, slideLeft, slideRight } from '../utils/animations';
import { HiAcademicCap, HiCodeBracket, HiLightBulb, HiMapPin } from 'react-icons/hi2';

const highlights = [
  { icon: HiAcademicCap, label: 'B.Tech CSE', desc: 'PVP Siddhartha Institute' },
  { icon: HiCodeBracket, label: 'Full Stack', desc: 'Web Development' },
  { icon: HiLightBulb, label: 'DSA Practice', desc: 'Regular Problem Solving' },
  { icon: HiMapPin, label: 'Vijayawada', desc: 'Andhra Pradesh' },
];

export default function About() {
  return (
    <section
      id="about"
      className="py-24 bg-white dark:bg-gray-900 relative overflow-hidden"
    >
      {/* Subtle bg accent */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-primary-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <AnimatedSection>
          <p className="text-center text-primary-500 font-semibold text-sm uppercase tracking-widest mb-3">Get to know me</p>
          <h2 className="section-heading text-gray-900 dark:text-white">About <span className="text-gradient">Me</span></h2>
          <p className="section-subheading">
            Passionate developer, curious learner, and dedicated problem-solver.
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Image / visual */}
          <AnimatedSection variants={slideLeft}>
            <div className="relative">
              <div className="relative w-full max-w-md mx-auto">
                {/* Decorative card behind */}
                <div className="absolute -inset-4 bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-3xl blur-xl" />
                <div className="relative bg-gradient-to-br from-primary-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-3xl p-8 shadow-2xl">
                  <img
                    src="/MyPhoto.jpeg"
                    alt="Bhavyasree - About"
                    className="w-full h-72 object-cover object-top rounded-2xl shadow-lg"
                  />
                  {/* Stats row */}
                  <div className="grid grid-cols-3 gap-4 mt-6">
                    {[
                      { num: '4+', label: 'Projects' },
                      { num: '5+', label: 'Technologies' },
                      { num: '2+', label: 'Years Learning' },
                    ].map((s) => (
                      <div key={s.label} className="text-center">
                        <div className="font-display text-2xl font-bold text-gradient">{s.num}</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{s.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Right — Content */}
          <AnimatedSection variants={slideRight}>
            <div className="space-y-6">
              <h3 className="font-display text-2xl font-bold text-gray-900 dark:text-white">
                Turning Passion into <span className="text-gradient">Code</span>
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                I'm <strong className="text-gray-900 dark:text-white">Goga Bhavyasree</strong>, a passionate Computer
                Science student interested in <strong className="text-primary-500">Full Stack Development</strong>,
                Web Technologies, and Problem Solving.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                I have knowledge in C, Java, Python, HTML, CSS, and JavaScript. I enjoy building responsive
                websites, learning modern technologies, and improving my coding skills through regular DSA
                practice and real-world projects.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                My goal is to grow into a skilled Full Stack Developer, contribute to impactful projects,
                and continuously evolve with the ever-changing landscape of technology.
              </p>

              {/* Highlights grid */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                {highlights.map((h) => (
                  <div
                    key={h.label}
                    className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 dark:bg-gray-800/60 border border-gray-100 dark:border-gray-700 hover:border-primary-200 dark:hover:border-primary-700 transition-colors duration-200"
                  >
                    <div className="p-2 rounded-lg bg-primary-100 dark:bg-primary-900/40">
                      <h.icon className="w-4 h-4 text-primary-600 dark:text-primary-400" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-800 dark:text-white">{h.label}</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">{h.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex gap-3 pt-2">
                <a
                  id="about-email"
                  href="mailto:gogabhavyasree@gmail.com"
                  className="btn-primary text-sm"
                >
                  📧 Get In Touch
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
