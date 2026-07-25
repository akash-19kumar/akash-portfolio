import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaSearch } from 'react-icons/fa';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { projectsData } from '../data/portfolioData';
import TiltCard from './TiltCard';

const Projects = () => {
  const [sectionRef, isVisible] = useScrollReveal({ threshold: 0.05 });
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const categories = ['All', ...new Set(projectsData.map(p => p.category))];
  const filteredProjects = projectsData.filter(project => {
    const matchesCategory = activeFilter === 'All' || project.category === activeFilter;
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tech.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="projects" className="relative py-24 sm:py-32 section-padding" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="text-center mb-12">
          <span className="text-neon-cyan text-sm font-medium tracking-widest uppercase">Portfolio</span>
          <h2 className="heading-lg mt-3 text-white">Featured <span className="text-gradient">Projects</span></h2>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <div className="relative w-full sm:w-72">
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
            <input type="text" placeholder="Search projects..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-xl glass text-white placeholder-gray-500 text-sm focus:outline-none focus:border-neon-cyan/30 border border-transparent transition-colors" />
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button key={category} onClick={() => setActiveFilter(category)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                  activeFilter === category ? 'bg-neon-cyan/10 text-neon-cyan border border-neon-cyan/30' : 'glass text-gray-400 hover:text-white border border-transparent'
                }`}>{category}</button>
            ))}
          </div>
        </motion.div>
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div key={project.id} layout initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}>
                <TiltCard tiltAmount={5}>
                  <div className="glass-card overflow-hidden glow-border group h-full flex flex-col">
                    <div className="relative h-48 overflow-hidden">
                      <img src={project.image} alt={project.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" loading="lazy" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent opacity-60" />
                      <span className="absolute top-4 left-4 glass px-3 py-1 rounded-lg text-xs font-medium text-neon-cyan">{project.category}</span>
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-neon-cyan transition-colors">{project.title}</h3>
                      <p className="body-text text-sm mb-4 flex-1">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map((tech) => (
                          <span key={tech} className="px-2.5 py-1 rounded-md bg-white/5 text-xs text-gray-300 border border-white/5">{tech}</span>
                        ))}
                      </div>
                      <div className="flex gap-3">
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex-1 btn-secondary py-2.5 text-sm flex items-center justify-center gap-2">
                          <FaGithub size={14} />Code
                        </a>
                        <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex-1 btn-primary py-2.5 text-sm flex items-center justify-center gap-2">
                          <FaExternalLinkAlt size={12} />Demo
                        </a>
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        {filteredProjects.length === 0 && (
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center text-gray-500 py-12">No projects found matching your criteria.</motion.p>
        )}
      </div>
    </section>
  );
};

export default Projects;
