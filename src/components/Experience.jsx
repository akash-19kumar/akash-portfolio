import { motion } from 'framer-motion';
import { FaBriefcase, FaTrophy, FaMedal } from 'react-icons/fa';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { experienceData } from '../data/portfolioData';

const Experience = () => {
  const [sectionRef, isVisible] = useScrollReveal({ threshold: 0.1 });
  const getIcon = (type) => { switch(type) { case 'internship': return FaBriefcase; case 'hackathon': return FaTrophy; case 'achievement': return FaMedal; default: return FaBriefcase; } };
  const getColor = (type) => { switch(type) { case 'internship': return 'text-neon-cyan bg-neon-cyan/10 border-neon-cyan/20'; case 'hackathon': return 'text-neon-purple bg-neon-purple/10 border-neon-purple/20'; case 'achievement': return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20'; default: return 'text-gray-400'; } };

  return (
    <section id="experience" className="relative py-24 sm:py-32 section-padding" ref={sectionRef}>
      <div className="max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="text-center mb-16">
          <span className="text-neon-cyan text-sm font-medium tracking-widest uppercase">Journey</span>
          <h2 className="heading-lg mt-3 text-white">Experience & <span className="text-gradient">Achievements</span></h2>
        </motion.div>
        <div className="relative">
          <div className="timeline-line hidden md:block" />
          <div className="space-y-12">
            {experienceData.map((item, index) => {
              const Icon = getIcon(item.type);
              const isLeft = index % 2 === 0;
              return (
                <motion.div key={item.id} initial={{ opacity: 0, x: isLeft ? -50 : 50 }} animate={isVisible ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: 0.2 + index * 0.15 }}
                  className={`relative flex flex-col md:flex-row items-center ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`w-full md:w-5/12 ${isLeft ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}`}>
                    <div className="glass-card p-6 glow-border">
                      <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-lg text-xs font-medium mb-3 ${getColor(item.type)}`}>
                        <Icon size={12} /><span className="capitalize">{item.type}</span>
                      </div>
                      <h3 className="text-lg font-bold text-white mb-1">{item.title}</h3>
                      <p className="text-neon-cyan text-sm font-medium mb-2">{item.company}</p>
                      <p className="text-gray-500 text-xs mb-3">{item.duration}</p>
                      <p className="body-text text-sm mb-4">{item.description}</p>
                      <div className={`flex flex-wrap gap-2 ${isLeft ? 'md:justify-end' : 'md:justify-start'}`}>
                        {item.skills.map((skill) => <span key={skill} className="px-2 py-1 rounded-md bg-white/5 text-xs text-gray-300">{skill}</span>)}
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full glass-strong items-center justify-center z-10">
                    <div className={`w-4 h-4 rounded-full ${item.type === 'achievement' ? 'bg-yellow-400' : 'bg-neon-cyan'} animate-pulse`} />
                  </div>
                  <div className="hidden md:block w-5/12" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
