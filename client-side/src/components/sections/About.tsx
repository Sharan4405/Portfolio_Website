import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="section-container">
      <div className="section-inner">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full" />
        </motion.div>

        {/* Bio Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <p className="text-lg text-gray-300 mb-6 leading-relaxed">
            Hey! I'm Sharan, a passionate full-stack developer and{' '}
            <span className="text-white font-semibold">B.Tech student at IIT Jodhpur</span> (Pre-final year).
            With <span className="text-white font-semibold">1+ years</span> of experience, I specialize in
            building scalable web applications and AI-powered solutions.
          </p>
          <p className="text-lg text-gray-300 mb-6 leading-relaxed">
            I love building products that solve real-world problems - from WhatsApp e-commerce chatbots
            to AI agents that simplify job hunting. My work spans the entire stack, from database design
            to intuitive user interfaces.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            When I'm not coding, you'll find me exploring emerging technologies, working on open-source
            projects, or contributing to the developer community at IIT Jodhpur.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
