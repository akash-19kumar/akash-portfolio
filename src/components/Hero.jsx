import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaDownload, FaArrowDown } from 'react-icons/fa';
import { personalData } from '../data/portfolioData';
import MagneticButton from './MagneticButton';

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = personalData.roles[currentRole];
    const typeSpeed = isDeleting ? 50 : 100;
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(role.substring(0, displayText.length + 1));
        if (displayText === role) setTimeout(() => setIsDeleting(true), 2000);
      } else {
        setDisplayText(role.substring(0, displayText.length - 1));
        if (displayText === '') { setIsDeleting(false); setCurrentRole((prev) => (prev + 1) % personalData.roles.length); }
      }
    }, typeSpeed);
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole]);

  const handleScrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: FaGithub, href: personalData.social.github, label: 'GitHub' },
    { icon: FaLinkedin, href: personalData.social.linkedin, label: 'LinkedIn' },
    { icon: FaInstagram, href: personalData.social.instagram, label: 'Instagram' },
    { icon: FaEnvelope, href: personalData.social.email, label: 'Email' },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center section-padding overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="blob blob-3" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center pt-20">
        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="text-center lg:text-left">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }} className="text-neon-cyan font-medium text-sm sm:text-base tracking-widest uppercase mb-4">
            Hello, I'm
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.8 }} className="heading-xl mb-4">
            <span className="text-white">{personalData.firstName}</span><br />
            <span className="text-gradient">{personalData.lastName}</span>
          </motion.h1>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.6 }} className="h-10 sm:h-12 mb-8">
            <span className="text-xl sm:text-2xl md:text-3xl text-gray-300 font-light typing-cursor">{displayText}</span>
            <span className="text-gray-500">|</span>
          </motion.div>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.6 }} className="body-text max-w-lg mx-auto lg:mx-0 mb-10">
            Crafting intelligent solutions through code and creativity. Specializing in AI, machine learning, and modern web development.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1, duration: 0.6 }} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
            <MagneticButton href={personalData.resumeUrl} className="btn-primary">
              <span className="relative z-10 flex items-center gap-2"><FaDownload size={16} />Download Resume</span>
            </MagneticButton>
            <MagneticButton onClick={handleScrollToProjects} className="btn-secondary">
              <span className="relative z-10 flex items-center gap-2">View Projects<FaArrowDown size={14} /></span>
            </MagneticButton>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2, duration: 0.6 }} className="flex gap-4 justify-center lg:justify-start">
            {socialLinks.map((social, index) => (
              <motion.a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}
                initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.4 + index * 0.1, type: 'spring' }}
                whileHover={{ scale: 1.15, y: -3 }} whileTap={{ scale: 0.95 }}
                className="w-11 h-11 rounded-xl glass flex items-center justify-center text-gray-400 hover:text-neon-cyan hover:border-neon-cyan/30 transition-colors">
                <social.icon size={18} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="relative flex justify-center lg:justify-end">
          <div className="relative">
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0 rounded-full bg-gradient-to-r from-neon-cyan/20 to-neon-purple/20 blur-2xl" style={{ transform: 'scale(1.2)' }} />
            <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }} className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-neon-cyan/30 to-neon-purple/30 p-1">
                <div className="w-full h-full rounded-full overflow-hidden glass-strong">
                  <img src={personalData.profileImage} alt={personalData.name} className="w-full h-full object-cover" loading="eager" />
                </div>
              </div>
              <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute -top-4 -right-4 glass px-4 py-2 rounded-xl text-xs font-medium text-neon-cyan">AI/ML Student</motion.div>
              <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-4 -left-4 glass px-4 py-2 rounded-xl text-xs font-medium text-neon-purple">Frontend Dev</motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }} className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }} className="flex flex-col items-center gap-2">
          <span className="text-xs text-gray-500 tracking-widest uppercase">Scroll</span>
          <div className="w-6 h-10 rounded-full border-2 border-gray-600 flex justify-center pt-2">
            <motion.div animate={{ y: [0, 12, 0] }} transition={{ duration: 2, repeat: Infinity }} className="w-1.5 h-1.5 rounded-full bg-neon-cyan" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
