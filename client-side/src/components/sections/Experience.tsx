import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      title: 'Software Developer Intern',
      company: 'Yashinfotech Solutions',
      period: '2024 - Present',
      description: 'Working on full-stack web development projects, building scalable applications using modern technologies like React, Node.js, and cloud services.',
      responsibilities: [
        'Developed and maintained web applications using React and Node.js',
        'Collaborated with cross-functional teams to deliver client projects',
        'Implemented RESTful APIs and database integrations',
        'Participated in code reviews and agile development processes',
      ],
    },
    {
      title: 'Full Stack Developer',
      company: 'Bhuramal Bhagirath Prasad (Freelance)',
      period: '2024',
      description: 'Built a complete WhatsApp e-commerce chatbot system with real-time admin dashboard for a traditional business.',
      responsibilities: [
        'Designed and developed WhatsApp chatbot using WhatsApp Business API',
        'Built real-time admin dashboard with Next.js and Socket.io',
        'Integrated Razorpay payment gateway for seamless transactions',
        'Implemented MongoDB database for order and inventory management',
      ],
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
                  
                  <ul className={`space-y-2 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="text-gray-500 text-sm flex items-start gap-2">
                        <span className="text-blue-400 mt-1 flex-shrink-0">•</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
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
