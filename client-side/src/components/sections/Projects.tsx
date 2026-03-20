import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: 'JarSafari',
      description: 'A web application project showcasing modern development practices and user-centric design.',
      tags: ['React-Native', 'JavaScript', 'Tailwind-CSS', 'App Development'],
      githubUrl: 'https://github.com/Sharan4405/JARSafari',
    },
    {
      title: 'ICS Project',
      description: 'Academic project developed as part of IIT Jodhpur coursework, demonstrating core computer science concepts.',
      tags: ['C/C++', 'Algorithms', 'Data Structures'],
      githubUrl: 'https://github.com/Sharan4405/ICS_EquationSolver',
    },
    {
      title: 'Comic Studies Lab - IIT Jodhpur',
      description: 'Official website for the Comic Studies Lab at IIT Jodhpur, showcasing research, publications, and team information.',
      tags: ['JavaScript', 'React', 'CSS', 'JavaScript', 'Express.js','Node.js', 'MongoDB', 'Responsive Design'],
      githubUrl: 'https://github.com/Sharan4405/Comic_Studies_Lab',
    },
    {
      title: 'Resume Parser',
      description: 'An intelligent resume parsing tool that extracts and structures information from resumes using NLP techniques.',
      tags: ['Python', 'NLP', 'Machine Learning', 'Text Processing', 'Node.js', 'PostgreSQL'],
      githubUrl: 'https://github.com/Sharan4405/Resume_Parser',
    },
    {
      title: 'Backend Learning',
      description: 'A comprehensive backend development learning project covering Node.js, Express, databases, and API development.',
      tags: ['Node.js', 'Express', 'MongoDB', 'REST APIs'],
      githubUrl: 'https://github.com/Sharan4405/Backend_learning',
    },
    {
      title: 'JavaScript Learning',
      description: 'Practice projects and exercises for mastering JavaScript fundamentals and advanced concepts.',
      tags: ['JavaScript', 'ES6+', 'DOM', 'Async Programming'],
      githubUrl: 'https://github.com/Sharan4405/JS_Learning',
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

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="projects" className="section-container">
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
            My <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full" />
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-all duration-300 group"
            >
              {/* Project Icon */}
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all">
                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                </svg>
              </div>

              <h3 className="text-lg font-bold text-white mb-2">{project.title}</h3>
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">{project.description}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs font-medium text-blue-400 bg-blue-400/10 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* GitHub Link */}
              <motion.a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 4 }}
                className="inline-flex items-center gap-2 text-gray-400 hover:text-white text-sm transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                View on GitHub
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </motion.a>
            </motion.div>
          ))}
        </motion.div>

        {/* View More CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <motion.a
            href="https://github.com/Sharan4405"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
          >
            View All on GitHub
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
