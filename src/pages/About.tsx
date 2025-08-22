import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Eye, Award, Code, Lightbulb } from 'lucide-react';

const About = () => {
  const founders = [
    {
      name: 'Varun Shah',
      role: 'Founder & CEO',
      description: 'Passionate software developer with expertise in full-stack development and a vision for creating innovative digital solutions.',
      skills: ['React', 'Node.js', 'Python', 'Cloud Architecture']
    },
    {
      name: 'Sharvil Pandit',
      role: 'Co-Founder & CTO',
      description: 'Technical visionary with deep expertise in modern web technologies and a commitment to delivering exceptional user experiences.',
      skills: ['JavaScript', 'React', 'DevOps', 'System Design']
    }
  ];

  const values = [
    {
      icon: <Code className="h-8 w-8" />,
      title: 'Technical Excellence',
      description: 'We maintain the highest standards in code quality and technical implementation.'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Client-Centric',
      description: 'Your success is our success. We build lasting partnerships with our clients.'
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: 'Innovation',
      description: 'We embrace cutting-edge technologies to deliver forward-thinking solutions.'
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: 'Quality Assurance',
      description: 'Every project undergoes rigorous testing to ensure flawless performance.'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-16"
    >
      {/* Hero Section */}
      <section className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About <span className="gradient-text">Studios8</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Founded by passionate developers, Studios8 is dedicated to transforming innovative ideas 
              into powerful software solutions that drive business growth and create exceptional user experiences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-300 mb-6">
                Studios8 was born from a shared vision between two experienced developers who recognized 
                the need for high-quality, innovative software solutions in today's digital landscape. 
                With years of combined experience in the industry, we decided to create a company that 
                prioritizes technical excellence, client satisfaction, and cutting-edge innovation.
              </p>
              <p className="text-gray-300 mb-6">
                Our journey began with a simple belief: that great software can transform businesses 
                and create meaningful impact. Today, we continue to uphold this belief by delivering 
                exceptional digital experiences that exceed our clients' expectations.
              </p>
            </motion.div>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="glass-effect p-8 rounded-xl"
            >
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text mb-2">50+</div>
                  <div className="text-gray-300">Projects Delivered</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text mb-2">25+</div>
                  <div className="text-gray-300">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text mb-2">3+</div>
                  <div className="text-gray-300">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text mb-2">100%</div>
                  <div className="text-gray-300">Client Satisfaction</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Meet Our <span className="gradient-text">Founders</span></h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The visionary minds behind Studios8, bringing together years of experience and passion for technology.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {founders.map((founder, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="glass-effect p-8 rounded-xl card-hover"
              >
                <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">
                    {founder.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-2xl font-semibold mb-2 text-center">{founder.name}</h3>
                <p className="text-blue-400 text-center mb-4">{founder.role}</p>
                <p className="text-gray-300 mb-6 text-center">{founder.description}</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {founder.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="glass-effect p-8 rounded-xl"
            >
              <Target className="h-12 w-12 text-blue-400 mb-6" />
              <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-300">
                To empower businesses with innovative software solutions that drive growth, 
                enhance efficiency, and create exceptional user experiences. We are committed 
                to delivering high-quality, scalable, and maintainable software that exceeds 
                our clients' expectations.
              </p>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="glass-effect p-8 rounded-xl"
            >
              <Eye className="h-12 w-12 text-purple-400 mb-6" />
              <h3 className="text-3xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-300">
                To become a leading software development agency recognized for our technical 
                excellence, innovative solutions, and client-centric approach. We envision 
                a future where technology seamlessly integrates with business needs to create 
                meaningful impact and lasting value.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Our <span className="gradient-text">Values</span></h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The principles that guide everything we do at Studios8.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="glass-effect p-6 rounded-xl text-center card-hover"
              >
                <div className="text-blue-400 mb-4 flex justify-center">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-300 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;