import { AnimatedSection, staggerContainer, fadeUp } from '../utils/animations';
import { motion } from 'framer-motion';
import { HiAcademicCap } from 'react-icons/hi2';

const education = [
  {
    id: 'btech',
    type: 'education',
    icon: HiAcademicCap,
    iconColor: 'text-primary-500',
    iconBg: 'bg-primary-50 dark:bg-primary-900/30',
    period: '2022 – 2026',
    title: 'B.Tech in Computer Science and Engineering',
    institution: 'Prasad V. Potluri Siddhartha Institute of Technology',
    location: 'Vijayawada, Andhra Pradesh',
    desc: 'Pursuing a comprehensive curriculum covering Data Structures, Algorithms, Operating Systems, DBMS, Computer Networks, and Web Technologies.',
    tags: ['DSA', 'DBMS', 'OS', 'CN', 'Web Tech'],
    status: 'Ongoing',
    statusColor: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400',
  },
  {
    id: 'intermediate',
    type: 'education',
    icon: HiAcademicCap,
    iconColor: 'text-purple-500',
    iconBg: 'bg-purple-50 dark:bg-purple-900/30',
    period: '2020 – 2022',
    title: 'Intermediate (MPC)',
    institution: 'Sri Chaitanya Junior College',
    location: 'Andhra Pradesh',
    desc: 'Completed Intermediate education with Mathematics, Physics, and Chemistry as core subjects.',
    tags: ['Mathematics', 'Physics', 'Chemistry'],
    status: 'Completed',
    statusColor: 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400',
  },
];



export default function Education() {
  return (
    <section id="education" className="py-24 bg-white dark:bg-gray-900 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <p className="text-center text-primary-500 font-semibold text-sm uppercase tracking-widest mb-3">Academic Journey</p>
          <h2 className="section-heading text-gray-900 dark:text-white">
            <span className="text-gradient">Education</span>
          </h2>
          <p className="section-subheading">
            My academic foundation and the credentials I've earned along the way.
          </p>
        </AnimatedSection>

        <div className="max-w-3xl mx-auto">
          {/* Education Timeline */}
          <div>
            <AnimatedSection>
              <h3 className="font-display text-xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-2">
                <HiAcademicCap className="w-6 h-6 text-primary-500" />
                Education
              </h3>
            </AnimatedSection>

            <div className="relative pl-6 space-y-8">
              {/* Timeline line */}
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-accent-500 to-transparent" />

              {education.map((item, i) => (
                <motion.div
                  key={item.id}
                  id={`edu-${item.id}`}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="relative"
                >
                  {/* Dot */}
                  <div className={`absolute -left-[25px] w-3 h-3 rounded-full border-2 border-primary-500 ${item.iconBg} flex items-center justify-center top-2`}>
                    <div className="w-1.5 h-1.5 rounded-full bg-primary-500" />
                  </div>

                  <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-5 border border-gray-100 dark:border-gray-700 hover:border-primary-200 dark:hover:border-primary-700 transition-colors duration-200">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2.5 py-1 rounded-full">
                        {item.period}
                      </span>
                      <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${item.statusColor}`}>
                        {item.status}
                      </span>
                    </div>
                    <h4 className="font-display font-bold text-gray-900 dark:text-white text-base mt-2">{item.title}</h4>
                    <p className="text-sm text-primary-600 dark:text-primary-400 font-medium mt-0.5">{item.institution}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">📍 {item.location}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-3 leading-relaxed">{item.desc}</p>
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {item.tags.map((tag) => (
                        <span key={tag} className="text-xs px-2.5 py-1 rounded-lg bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-600">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>


        </div>
      </div>
    </section>
  );
}
