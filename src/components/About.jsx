import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { personalData } from '../data/portfolioData';
import AnimatedCounter from './AnimatedCounter';

const About = () => {
  const [sectionRef, isVisible] = useScrollReveal({ threshold: 0.1 });
  const stats = [
    { label: 'Projects Completed', value: 15, suffix: '+' },
    { label: 'Certificates Earned', value: 10, suffix: '+' },
    { label: 'Coding Hours', value: 2500, suffix: '+' },
    { label: 'Years Experience', value: 2, suffix: '+' },
  ];

  return (
    <section id="about" className="relative py-24 sm:py-32 section-padding" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="text-center mb-16">
          <span className="text-neon-cyan text-sm font-medium tracking-widest uppercase">About Me</span>
          <h2 className="heading-lg mt-3 text-white">Know Who <span className="text-gradient">I Am</span></h2>
        </motion.div>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={isVisible ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8, delay: 0.2 }}>
            <div className="glass-card p-8 sm:p-10 glow-border">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">Professional Introduction</h3>
              <p className="body-text mb-6 leading-relaxed">{personalData.about.intro}</p>
              <p className="body-text leading-relaxed">{personalData.about.journey}</p>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} animate={isVisible ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8, delay: 0.4 }} className="grid grid-cols-2 gap-4 sm:gap-6">
            {stats.map((stat, index) => (
              <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="glass-card p-6 sm:p-8 text-center glow-border">
                <div className="text-3xl sm:text-4xl font-bold text-gradient mb-2">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-xs sm:text-sm text-gray-400">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
