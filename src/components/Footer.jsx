import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaArrowUp } from 'react-icons/fa';
import { personalData } from '../data/portfolioData';

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  const socialLinks = [
    { icon: FaGithub, href: personalData.social.github, label: 'GitHub' },
    { icon: FaLinkedin, href: personalData.social.linkedin, label: 'LinkedIn' },
    { icon: FaInstagram, href: personalData.social.instagram, label: 'Instagram' },
    { icon: FaEnvelope, href: personalData.social.email, label: 'Email' },
  ];

  return (
    <footer className="relative py-12 section-padding border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-6">
            <span className="text-2xl font-bold tracking-tight"><span className="text-gradient">AK</span><span className="text-white">.</span></span>
          </motion.div>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-gray-500 text-sm text-center mb-6 max-w-md">
            Building intelligent solutions with code and creativity.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex gap-4 mb-8">
            {socialLinks.map((social) => (
              <motion.a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}
                whileHover={{ scale: 1.1, y: -3 }} whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-lg glass flex items-center justify-center text-gray-400 hover:text-neon-cyan hover:border-neon-cyan/30 transition-colors border border-transparent">
                <social.icon size={16} />
              </motion.a>
            ))}
          </motion.div>
          <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-6" />
          <div className="flex flex-col sm:flex-row items-center justify-between w-full gap-4">
            <p className="text-gray-600 text-xs">© {new Date().getFullYear()} {personalData.name}. All rights reserved.</p>
            <motion.button onClick={scrollToTop} whileHover={{ scale: 1.1, y: -2 }} whileTap={{ scale: 0.95 }}
              className="w-10 h-10 rounded-lg glass flex items-center justify-center text-gray-400 hover:text-neon-cyan hover:border-neon-cyan/30 transition-colors border border-transparent" aria-label="Back to top">
              <FaArrowUp size={14} />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
