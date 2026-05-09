import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa';

const socials = [
  { id: 'footer-github', icon: FaGithub, href: 'https://github.com/gogabhavyasree', label: 'GitHub' },
  { id: 'footer-linkedin', icon: FaLinkedin, href: 'https://linkedin.com/in/bhavyasree-goga-8902a2378', label: 'LinkedIn' },
  { id: 'footer-email', icon: FaEnvelope, href: 'mailto:gogabhavyasree@gmail.com', label: 'Email' },
];

const navLinks = [
  { label: 'Home', to: 'home' },
  { label: 'About', to: 'about' },
  { label: 'Skills', to: 'skills' },
  { label: 'Projects', to: 'projects' },
  { label: 'Resume', to: 'resume' },
  { label: 'Contact', to: 'contact' },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-gray-400 py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <Link to="home" smooth duration={600} className="cursor-pointer">
              <span className="font-display text-2xl font-bold bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                Bhavyasree
              </span>
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-gray-500">
              Computer Science Student & Full Stack Web Development Intern.
              Passionate about building elegant digital experiences.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    smooth
                    duration={600}
                    className="text-sm text-gray-500 hover:text-primary-400 transition-colors cursor-pointer"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>📧 gogabhavyasree@gmail.com</li>
              <li>📍 Vijayawada, Andhra Pradesh</li>
              <li>🎓 PVP Siddhartha Institute of Technology</li>
            </ul>
            {/* Social icons */}
            <div className="flex gap-3 mt-5">
              {socials.map((s) => (
                <a
                  key={s.id}
                  id={s.id}
                  href={s.href}
                  target={s.href.startsWith('http') ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-lg bg-gray-800 hover:bg-primary-600 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200"
                >
                  <s.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm">
          <p className="text-gray-600">
            © {new Date().getFullYear()} Goga Bhavyasree. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5 text-gray-600">
            Made with <FaHeart className="w-3.5 h-3.5 text-red-500 animate-pulse" /> in Vijayawada, AP
          </p>
        </div>
      </div>
    </footer>
  );
}
