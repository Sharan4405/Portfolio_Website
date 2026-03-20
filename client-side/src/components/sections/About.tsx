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
          <div className="w-20 h-1 bg-linear-to-r from-blue-400 to-purple-500 rounded-full" />
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
  <span className="text-white font-semibold">B.Tech student at IIT Jodhpur</span>.
  I enjoy building impactful tech solutions by combining strong fundamentals in
  development with a growing interest in AI and real-world problem solving.
</p>

<p className="text-lg text-gray-300 mb-6 leading-relaxed">
  My work focuses on developing scalable and intelligent applications — from
  conversational e-commerce systems and AI-driven job tools to high-performance
  web platforms with optimized backend architectures and seamless user experiences.
</p>

<p className="text-lg text-gray-300 leading-relaxed">
  Beyond coding, I’m constantly sharpening my problem-solving skills, exploring
  system design, and building projects that push me toward becoming a high-impact
  software engineer.
</p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
