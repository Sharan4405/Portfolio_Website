import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      title: 'Software Developer Intern',
      company: 'Yashinfotech Solutions',
      period: 'August 2025 - October 2025',
      description: 'Working on full-stack web development projects, building scalable applications using modern technologies like React, Node.js, and cloud services.',
      responsibilities: [
        'Developed and maintained web applications using React and Node.js',
        'Collaborated with cross-functional teams to deliver client projects',
        'Implemented RESTful APIs and database integrations',
        'Participated in code reviews and agile development processes',
      ],
      Live_Website: 'https://yashinfotechsolutions.com/',
    },
    {
      title: 'Full Stack Developer (Freelance)',
      company: 'Bhuramal Bhagirath Prasad ',
      period: 'December 2025 - February 2026',
      description: 'Built a complete WhatsApp e-commerce chatbot system with real-time admin dashboard for a traditional business.',
      responsibilities: [
        'Designed and developed WhatsApp chatbot using WhatsApp Business API',
        'Built real-time admin dashboard with Next.js and Socket.io',
        'Integrated Razorpay payment gateway for seamless transactions',
        'Implemented MongoDB database for order and inventory management',
      ],
      githubUrl: 'https://github.com/Sharan4405/Bhuramal',
    },
  ];

  return (
    <section id="experience" className="section-container">
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
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full" />
        </motion.div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-blue-500 hidden md:block" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative mb-12 md:mb-16 ${
                index % 2 === 0 ? 'md:pr-[50%] md:text-right' : 'md:pl-[50%] md:text-left'
              }`}
            >
              {/* Timeline Dot */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-black" />

              {/* Content Card */}
              <div className={`${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                  <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-400 bg-blue-400/10 rounded-full mb-3">
                    {exp.period}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                  <p className="text-purple-400 font-medium mb-3">{exp.company}</p>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">{exp.description}</p>
                  
                  <ul className={`space-y-2 mb-4 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="text-gray-500 text-sm flex items-start gap-2">
                        <span className="text-blue-400 mt-1 flex-shrink-0">•</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Link Button */}
                  <motion.a
                    href={exp.Live_Website || exp.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`inline-flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white text-sm font-medium rounded-lg transition-colors ${index % 2 === 0 ? 'md:ml-auto' : ''}`}
                  >
                    {exp.Live_Website ? (
                      <>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        Live Website
                      </>
                    ) : (
                      <>
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        View on GitHub
                      </>
                    )}
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
