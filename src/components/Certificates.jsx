import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight, FaExternalLinkAlt, FaDownload, FaTimes } from 'react-icons/fa';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { certificatesData } from '../data/portfolioData';

const Certificates = () => {
  const [sectionRef, isVisible] = useScrollReveal({ threshold: 0.1 });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const slideVariants = {
    enter: (direction) => ({ x: direction > 0 ? 300 : -300, opacity: 0, scale: 0.9 }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (direction) => ({ x: direction < 0 ? 300 : -300, opacity: 0, scale: 0.9 }),
  };

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setCurrentIndex((prev) => {
      const next = prev + newDirection;
      if (next < 0) return certificatesData.length - 1;
      if (next >= certificatesData.length) return 0;
      return next;
    });
  };

  const current = certificatesData[currentIndex];
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <section id="certificates" className="relative py-24 sm:py-32 section-padding" ref={sectionRef}>
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="text-center mb-16">
          <span className="text-neon-cyan text-sm font-medium tracking-widest uppercase">Credentials</span>
          <h2 className="heading-lg mt-3 text-white">My <span className="text-gradient">Certificates</span></h2>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }} className="relative">
          <div className="glass-card p-4 sm:p-8 glow-border overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden glass cursor-pointer group" onClick={openModal}>
                <AnimatePresence initial={false} custom={direction} mode="wait">
                  <motion.img key={currentIndex} src={current.image} alt={current.title} custom={direction} variants={slideVariants}
                    initial="enter" animate="center" exit="exit" transition={{ duration: 0.4, ease: 'easeInOut' }} className="w-full h-full object-cover" loading="lazy" />
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f]/60 to-transparent pointer-events-none" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40">
                  <span className="px-4 py-2 rounded-xl glass text-white text-sm font-medium">Click to View</span>
                </div>
              </div>

              <div className="text-center lg:text-left">
                <AnimatePresence mode="wait">
                  <motion.div key={currentIndex} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }}>
                    <span className="text-neon-purple text-sm font-medium">{current.issuer}</span>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mt-2 mb-3">{current.title}</h3>
                    <p className="text-gray-500 text-sm mb-6">Issued on {current.date}</p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                      <button onClick={openModal} className="btn-primary py-3 px-6 text-sm flex items-center justify-center gap-2">
                        <FaExternalLinkAlt size={14} />View Certificate
                      </button>
                      <a href={current.image} download className="btn-secondary py-3 px-6 text-sm flex items-center justify-center gap-2">
                        <FaDownload size={14} />Download
                      </a>
                    </div>
                  </motion.div>
                </AnimatePresence>
                <div className="flex justify-center lg:justify-start gap-2 mt-8">
                  {certificatesData.map((_, index) => (
                    <button key={index} onClick={() => { setDirection(index > currentIndex ? 1 : -1); setCurrentIndex(index); }}
                      className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex ? 'w-8 bg-neon-cyan' : 'w-2 bg-gray-600 hover:bg-gray-500'}`} />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <button onClick={() => paginate(-1)} className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full glass-strong flex items-center justify-center text-white hover:text-neon-cyan hover:border-neon-cyan/30 transition-colors z-10">
            <FaChevronLeft size={18} />
          </button>
          <button onClick={() => paginate(1)} className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full glass-strong flex items-center justify-center text-white hover:text-neon-cyan hover:border-neon-cyan/30 transition-colors z-10">
            <FaChevronRight size={18} />
          </button>
        </motion.div>
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8" onClick={closeModal}>
            <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" />
            <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeOut' }} className="relative z-10 w-full max-w-5xl max-h-[90vh] flex flex-col" onClick={(e) => e.stopPropagation()}>
              <button onClick={closeModal} className="absolute -top-12 right-0 w-10 h-10 rounded-full glass-strong flex items-center justify-center text-white hover:text-neon-cyan transition-colors z-20">
                <FaTimes size={18} />
              </button>
              <div className="text-center mb-4">
                <h3 className="text-xl sm:text-2xl font-bold text-white">{current.title}</h3>
                <p className="text-neon-cyan text-sm mt-1">{current.issuer} • {current.date}</p>
              </div>
              <div className="relative flex-1 overflow-hidden rounded-2xl glass-strong border border-white/10">
                <img src={current.image} alt={current.title} className="w-full h-full object-contain max-h-[70vh]" />
              </div>
              <div className="flex justify-center mt-4">
                <a href={current.image} download className="btn-primary py-2.5 px-6 text-sm flex items-center gap-2">
                  <FaDownload size={14} />Download Certificate
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certificates;