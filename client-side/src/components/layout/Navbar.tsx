import { useState } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  const mobileMenuVariants = {
    closed: { opacity: 0, y: -20 },
    open: { opacity: 1, y: 0 },
  };

  const linkVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.05,
        duration: 0.3,
      },
    }),
  };

  return (
    <header className="fixed top-4 left-4 right-4 z-50">
      {/* Glowing Navbar Container */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative max-w-6xl mx-auto"
      >
        {/* Glow Effect */}
        <div className="absolute -inset-0.5 bg-linear-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20 rounded-2xl blur-xl" />
        
        {/* Navbar Background */}
        <nav className="relative bg-black/70 backdrop-blur-xl rounded-2xl px-4 py-2 flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#home"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="shrink-0 group"
          >
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                custom={index}
                variants={linkVariants}
                initial="hidden"
                animate="visible"
                className="relative px-4 py-2 text-gray-400 hover:text-white transition-all duration-300 font-medium text-15px border border-transparent hover:border-white/30 rounded-lg"
              >
                {item.name}
              </motion.a>
            ))}
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="hidden md:flex items-center"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative group"
            >
              <span className="absolute -inset-0.5 bg-linear-to-r from-blue-500 to-purple-500 rounded-lg opacity-70 blur group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative block px-6 py-2.5 bg-linear-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg text-lg">
                Let's Work
              </span>
            </motion.a>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="md:hidden flex flex-col space-y-1.5 cursor-pointer p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <motion.div
              className="w-6 h-0.5 bg-linear-to-r from-blue-400 to-purple-400"
              animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 8 : 0 }}
              transition={{ duration: 0.3 }}
            />
            <motion.div
              className="w-6 h-0.5 bg-linear-to-r from-blue-400 to-purple-400"
              animate={{ opacity: isOpen ? 0 : 1 }}
              transition={{ duration: 0.3 }}
            />
            <motion.div
              className="w-6 h-0.5 bg-linear-to-r from-blue-400 to-purple-400"
              animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -8 : 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </nav>

        {/* Mobile Menu */}
        <motion.div
          variants={mobileMenuVariants}
          initial="closed"
          animate={isOpen ? 'open' : 'closed'}
          transition={{ duration: 0.3 }}
          className={`md:hidden absolute top-full left-0 right-0 mt-2 bg-black/90 backdrop-blur-xl rounded-2xl overflow-hidden ${isOpen ? 'block' : 'hidden'}`}
        >
          <div className="px-6 py-6 space-y-2">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="block text-gray-400 hover:text-white hover:bg-white/5 transition-all duration-300 font-medium py-3 px-4 rounded-lg"
                onClick={() => setIsOpen(false)}
                whileHover={{ x: 4 }}
              >
                {item.name}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setIsOpen(false)}
              className="block w-full text-center mt-4 px-6 py-3 bg-linear-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg"
            >
              Let's Work
            </motion.a>
          </div>
        </motion.div>
      </motion.div>
    </header>
  );
};

export default Navbar;
