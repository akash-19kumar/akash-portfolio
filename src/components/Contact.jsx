import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaPaperPlane, FaMapMarkerAlt } from 'react-icons/fa';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { personalData } from '../data/portfolioData';

const Contact = () => {
  const [sectionRef, isVisible] = useScrollReveal({ threshold: 0.1 });
  const formRef = useRef();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      // EmailJS integration - replace with your credentials
      // await emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formRef.current, 'YOUR_PUBLIC_KEY');
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  const socialLinks = [
    { icon: FaGithub, href: personalData.social.github, label: 'GitHub' },
    { icon: FaLinkedin, href: personalData.social.linkedin, label: 'LinkedIn' },
    { icon: FaInstagram, href: personalData.social.instagram, label: 'Instagram' },
    { icon: FaEnvelope, href: personalData.social.email, label: 'Email' },
  ];

  return (
    <section id="contact" className="relative py-24 sm:py-32 section-padding" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={isVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="text-center mb-16">
          <span className="text-neon-cyan text-sm font-medium tracking-widest uppercase">Get In Touch</span>
          <h2 className="heading-lg mt-3 text-white">Contact <span className="text-gradient">Me</span></h2>
        </motion.div>
        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={isVisible ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8, delay: 0.2 }}>
            <div className="glass-card p-8 glow-border h-full">
              <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>
              <p className="body-text mb-8">Have a project in mind or want to collaborate? Feel free to reach out. I'm always open to discussing new projects, creative ideas, or opportunities.</p>
              <div className="space-y-6 mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl glass-strong flex items-center justify-center text-neon-cyan"><FaEnvelope size={20} /></div>
                  <div><p className="text-gray-500 text-sm">Email</p><p className="text-white font-medium">{personalData.email}</p></div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl glass-strong flex items-center justify-center text-neon-purple"><FaMapMarkerAlt size={20} /></div>
                  <div><p className="text-gray-500 text-sm">Location</p><p className="text-white font-medium">{personalData.location}</p></div>
                </div>
              </div>
              <div>
                <p className="text-gray-500 text-sm mb-4">Follow Me</p>
                <div className="flex gap-3">
                  {socialLinks.map((social) => (
                    <motion.a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}
                      whileHover={{ scale: 1.1, y: -3 }} whileTap={{ scale: 0.95 }}
                      className="w-11 h-11 rounded-xl glass flex items-center justify-center text-gray-400 hover:text-neon-cyan hover:border-neon-cyan/30 transition-colors border border-transparent">
                      <social.icon size={18} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} animate={isVisible ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8, delay: 0.4 }}>
            <form ref={formRef} onSubmit={handleSubmit} className="glass-card p-8 glow-border">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Your Name</label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required
                    className="w-full px-4 py-3 rounded-xl glass text-white placeholder-gray-500 focus:outline-none focus:border-neon-cyan/30 border border-transparent transition-colors" placeholder="John Doe" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Your Email</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required
                    className="w-full px-4 py-3 rounded-xl glass text-white placeholder-gray-500 focus:outline-none focus:border-neon-cyan/30 border border-transparent transition-colors" placeholder="john@example.com" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                  <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={5}
                    className="w-full px-4 py-3 rounded-xl glass text-white placeholder-gray-500 focus:outline-none focus:border-neon-cyan/30 border border-transparent transition-colors resize-none" placeholder="Tell me about your project..." />
                </div>
                <button type="submit" disabled={isSubmitting} className="w-full btn-primary py-4 text-sm font-semibold flex items-center justify-center gap-2 disabled:opacity-50">
                  {isSubmitting ? (
                    <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: 'linear' }} className="w-5 h-5 border-2 border-neon-cyan border-t-transparent rounded-full" />
                  ) : (<><FaPaperPlane size={14} />Send Message</>)}
                </button>
                {submitStatus === 'success' && (
                  <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-green-400 text-sm text-center">Message sent successfully! I'll get back to you soon.</motion.p>
                )}
                {submitStatus === 'error' && (
                  <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-red-400 text-sm text-center">Something went wrong. Please try again.</motion.p>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
