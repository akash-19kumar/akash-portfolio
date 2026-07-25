import { useState } from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { skillsData } from '../data/portfolioData';
import TiltCard from './TiltCard';

const Skills = () => {
  const [sectionRef, isVisible] = useScrollReveal({ threshold: 0.1 });
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', ...new Set(skillsData.map(skill => skill.category))];
  const filteredSkills = activeCategory === 'All' ? skillsData : skillsData.filter(skill => skill.category === activeCategory);

  const CircularProgress = ({ percentage, delay = 0 }) => {
    const radius = 36;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;
    return (
      <div className="relative w-24 h-24 flex items-center justify-center">
        <svg className="transform -rotate-90 w-24 h-24">
          <circle cx="48" cy="48" r={radius} stroke="rgba(255,255,255,0.05)" strokeWidth="6" fill="none" />
          <motion.circle cx="48" cy="48" r={radius} stroke="url(#gradient)" strokeWidth="6" fill="none" strokeLinecap="round"
            strokeDasharray={circumference} initial={{ strokeDashoffset: circumference }}
            animate={isVisible ? { strokeDashoffset } : {}} transition={{ duration: 1.5, delay, ease: 'easeOut' }} />
          <defs><linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="#00F5FF" /><stop offset="100%" stopColor="#6C63FF" /></linearGradient></defs>
        </svg>
        <span className="absolute text-sm font-bold text-white">{percentage}%</span>
      </div>
    );
  };

  return (
    <section id="skills" className="relative py-24 sm:py-32 section-padding" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="text-center mb-16">
          <span className="text-neon-cyan text-sm font-medium tracking-widest uppercase">My Skills</span>
          <h2 className="heading-lg mt-3 text-white">Technical <span className="text-gradient">Expertise</span></h2>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }} className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button key={category} onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                activeCategory === category ? 'bg-neon-cyan/10 text-neon-cyan border border-neon-cyan/30' : 'glass text-gray-400 hover:text-white border border-transparent'
              }`}>{category}</button>
          ))}
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredSkills.map((skill, index) => (
            <motion.div key={skill.name} initial={{ opacity: 0, y: 20 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 * index }}>
              <TiltCard tiltAmount={8}>
                <div className="glass-card p-6 glow-border h-full flex flex-col items-center text-center group">
                  <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    <CircularProgress percentage={skill.level} delay={0.2 + index * 0.1} />
                  </div>
                  <h3 className="text-white font-semibold mb-1">{skill.name}</h3>
                  <span className="text-xs text-gray-500 uppercase tracking-wider">{skill.category}</span>
                  <div className="w-full mt-4 skill-progress-bg h-1.5">
                    <motion.div className="skill-progress-fill h-1.5" initial={{ width: 0 }} animate={isVisible ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1.5, delay: 0.3 + index * 0.1, ease: 'easeOut' }} />
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
