import { useState } from 'react';
import { AnimatedSection, slideLeft, slideRight } from '../utils/animations';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { HiPaperAirplane, HiCheckCircle } from 'react-icons/hi2';

const socials = [
  {
    id: 'contact-github',
    icon: FaGithub,
    label: 'GitHub',
    value: 'github.com/gogabhavyasree',
    href: 'https://github.com/gogabhavyasree',
    color: 'hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white',
    iconClass: 'text-gray-700 dark:text-gray-300',
  },
  {
    id: 'contact-linkedin',
    icon: FaLinkedin,
    label: 'LinkedIn',
    value: 'in/bhavyasree-goga-8902a2378',
    href: 'https://linkedin.com/in/bhavyasree-goga-8902a2378',
    color: 'hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400',
    iconClass: 'text-blue-600 dark:text-blue-400',
  },
  {
    id: 'contact-email',
    icon: FaEnvelope,
    label: 'Email',
    value: 'gogabhavyasree@gmail.com',
    href: 'mailto:gogabhavyasree@gmail.com',
    color: 'hover:bg-red-50 dark:hover:bg-red-900/20 hover:text-red-600 dark:hover:text-red-400',
    iconClass: 'text-red-500 dark:text-red-400',
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required.';
    if (!form.email.trim()) {
      e.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      e.email = 'Enter a valid email address.';
    }
    if (!form.message.trim()) e.message = 'Message is required.';
    else if (form.message.trim().length < 10) e.message = 'Message must be at least 10 characters.';
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validation = validate();
    if (Object.keys(validation).length) {
      setErrors(validation);
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setForm({ name: '', email: '', message: '' });
      setErrors({});
    }, 1500);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (errors[name]) setErrors((err) => ({ ...err, [name]: '' }));
  };

  const inputClass = (field) =>
    `w-full px-4 py-3 rounded-xl border text-gray-900 dark:text-white bg-white dark:bg-gray-700 placeholder-gray-400 dark:placeholder-gray-500 outline-none transition-all duration-200 text-sm ${
      errors[field]
        ? 'border-red-400 dark:border-red-500 ring-2 ring-red-400/20'
        : 'border-gray-200 dark:border-gray-600 focus:border-primary-500 dark:focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20'
    }`;

  return (
    <section id="contact" className="py-24 bg-gray-50 dark:bg-gray-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-mesh pointer-events-none opacity-60" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <p className="text-center text-primary-500 font-semibold text-sm uppercase tracking-widest mb-3">Let's connect</p>
          <h2 className="section-heading text-gray-900 dark:text-white">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="section-subheading">
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left — Info */}
          <AnimatedSection variants={slideLeft} className="space-y-6">
            <div className="bg-gradient-to-br from-primary-500 to-accent-600 rounded-3xl p-8 text-white shadow-2xl shadow-primary-500/20">
              <h3 className="font-display text-2xl font-bold mb-3">Let's Work Together!</h3>
              <p className="text-white/80 leading-relaxed text-sm">
                I'm always open to exciting opportunities, internships, and collaborations.
                Whether you have a project idea or just want to say hello, feel free to reach out!
              </p>

              <div className="mt-8 space-y-4">
                {[
                  { emoji: '📧', label: 'Email', value: 'gogabhavyasree@gmail.com' },
                  { emoji: '📍', label: 'Location', value: 'Vijayawada, Andhra Pradesh' },
                  { emoji: '🕒', label: 'Response Time', value: 'Within 24 hours' },
                ].map((info) => (
                  <div key={info.label} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur flex items-center justify-center text-xl">
                      {info.emoji}
                    </div>
                    <div>
                      <div className="text-white/60 text-xs">{info.label}</div>
                      <div className="text-white font-semibold text-sm">{info.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social links */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700 shadow-sm space-y-3">
              <h4 className="font-semibold text-gray-700 dark:text-gray-300 text-sm uppercase tracking-wider mb-4">
                Find me on
              </h4>
              {socials.map((s) => (
                <a
                  key={s.id}
                  id={s.id}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-3 p-3 rounded-xl transition-all duration-200 ${s.color} group`}
                >
                  <s.icon className={`w-5 h-5 ${s.iconClass}`} />
                  <div>
                    <div className="text-sm font-semibold text-gray-800 dark:text-white">{s.label}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">{s.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </AnimatedSection>

          {/* Right — Form */}
          <AnimatedSection variants={slideRight}>
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 border border-gray-100 dark:border-gray-700 shadow-xl">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-4">
                    <HiCheckCircle className="w-10 h-10 text-green-500" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-gray-900 dark:text-white mb-2">Message Sent!</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    Thank you for reaching out! I'll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 btn-primary text-sm"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div>
                    <label htmlFor="contact-name" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                      Your Name *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Goga Bhavyasree"
                      className={inputClass('name')}
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className={inputClass('email')}
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                      Message *
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Tell me about your project or opportunity..."
                      className={`${inputClass('message')} resize-none`}
                    />
                    {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                  </div>

                  <button
                    id="contact-submit"
                    type="submit"
                    disabled={loading}
                    className="w-full btn-primary flex items-center justify-center gap-2 text-base disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                          className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        <HiPaperAirplane className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
