import { motion } from 'framer-motion';
import { FaGraduationCap, FaSchool } from 'react-icons/fa';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { educationData } from '../data/portfolioData';

const Education = () => {
  const [sectionRef, isVisible] = useScrollReveal({ threshold: 0.1 });

  return (
    <section id="education" className="relative py-24 sm:py-32 section-padding" ref={sectionRef}>
      <div className="max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="text-center mb-16">
          <span className="text-neon-cyan text-sm font-medium tracking-widest uppercase">Background</span>
          <h2 className="heading-lg mt-3 text-white">Academic <span className="text-gradient">Education</span></h2>
        </motion.div>
        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <motion.div key={edu.id} initial={{ opacity: 0, y: 30 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.2 + index * 0.15 }}>
              <div className="glass-card p-6 sm:p-8 glow-border relative overflow-hidden group">
                <div className="absolute right-6 top-6 opacity-5 group-hover:opacity-10 transition-opacity">
                  {index === 0 ? <FaGraduationCap size={120} /> : <FaSchool size={120} />}
                </div>
                <div className="relative z-10 flex flex-col sm:flex-row gap-6 items-start">
                  <div className="w-14 h-14 rounded-2xl glass-strong flex items-center justify-center flex-shrink-0">
                    {index === 0 ? <FaGraduationCap className="text-neon-cyan" size={24} /> : <FaSchool className="text-neon-purple" size={24} />}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                      <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                      <span className="px-3 py-1 rounded-lg bg-neon-cyan/10 text-neon-cyan text-xs font-medium w-fit">{edu.grade}</span>
                    </div>
                    <p className="text-neon-purple font-medium mb-1">{edu.institution}</p>
                    <p className="text-gray-500 text-sm mb-3">{edu.location} • {edu.duration}</p>
                    <p className="body-text text-sm">{edu.description}</p>
                  </div>
                </div>
                {index < educationData.length - 1 && (
                  <div className="absolute left-10 sm:left-11 bottom-0 translate-y-full w-0.5 h-8 bg-gradient-to-b from-neon-cyan/30 to-transparent" />
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
