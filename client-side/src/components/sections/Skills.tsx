import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: '🎨',
      skills: [
        { name: 'React', level: 90 },
        { name: 'Next.js', level: 85 },
        { name: 'TypeScript', level: 88 },
        { name: 'Tailwind CSS', level: 92 },
        { name: 'Framer Motion', level: 80 },
      ],
    },
    {
      title: 'Backend',
      icon: '⚙️',
      skills: [
        { name: 'Node.js', level: 88 },
        { name: 'Express', level: 85 },
        { name: 'MongoDB', level: 85 },
        { name: 'Socket.io', level: 80 },
        { name: 'REST APIs', level: 90 },
      ],
    },
    {
      title: 'Tools & Others',
      icon: '🛠️',
      skills: [
        { name: 'Git', level: 88 },
        { name: 'Docker', level: 70 },
        { name: 'Razorpay', level: 75 },
        { name: 'WhatsApp API', level: 82 },
        { name: 'Vercel', level: 85 },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="skills" className="section-container bg-linear-to-b from-black to-gray-900/50">
      <div className="section-inner">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life.
          </p>
          <div className="w-20 h-1 bg-linear-to-r from-blue-400 to-purple-500 rounded-full mx-auto mt-6" />
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.15 }}
              className="glass p-6"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">{category.icon}</span>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>

              {/* Skills List */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-5"
              >
                {category.skills.map((skill) => (
                  <motion.div key={skill.name} variants={itemVariants}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-blue-400 text-sm font-semibold">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
                        className="h-full bg-linear-to-r from-blue-400 to-purple-500 rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12"
        >
          <h3 className="text-xl font-bold text-white mb-6 text-center">Other Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {['JavaScript', 'Python', 'C', 'JWT', 'Bcrypt', 'Vite', 'ESLint', 'Postman', 'MongoDB Atlas', 'GitHub Actions', 'Figma', 'VS Code'].map((tech) => (
              <motion.span
                key={tech}
                whileHover={{ scale: 1.1, y: -4 }}
                className="px-4 py-2 glass text-gray-300 text-sm font-medium cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
