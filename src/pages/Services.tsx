import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Smartphone, 
  Globe, 
  Database, 
  Cloud, 
  Palette, 
  Shield, 
  Zap,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Code className="h-12 w-12" />,
      title: 'Web Development',
      description: 'Custom web applications built with modern frameworks and technologies.',
      features: ['React/Next.js Development', 'Full-Stack Solutions', 'Progressive Web Apps', 'E-commerce Platforms'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Smartphone className="h-12 w-12" />,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      features: ['React Native Apps', 'Native iOS/Android', 'Cross-Platform Solutions', 'App Store Deployment'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Cloud className="h-12 w-12" />,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and deployment solutions.',
      features: ['AWS/Azure/GCP', 'DevOps & CI/CD', 'Microservices Architecture', 'Container Orchestration'],
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: <Database className="h-12 w-12" />,
      title: 'Backend Development',
      description: 'Robust backend systems and APIs for your applications.',
      features: ['RESTful APIs', 'GraphQL', 'Database Design', 'Real-time Systems'],
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: <Palette className="h-12 w-12" />,
      title: 'UI/UX Design',
      description: 'Beautiful and intuitive user interfaces that enhance user experience.',
      features: ['User Research', 'Wireframing & Prototyping', 'Visual Design', 'Usability Testing'],
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: <Shield className="h-12 w-12" />,
      title: 'Security & Testing',
      description: 'Comprehensive security audits and quality assurance testing.',
      features: ['Security Audits', 'Automated Testing', 'Performance Testing', 'Code Reviews'],
      color: 'from-gray-500 to-gray-700'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery',
      description: 'We understand your business needs, goals, and technical requirements.'
    },
    {
      step: '02',
      title: 'Planning',
      description: 'We create a detailed project roadmap with timelines and milestones.'
    },
    {
      step: '03',
      title: 'Development',
      description: 'Our team builds your solution using agile development methodologies.'
    },
    {
      step: '04',
      title: 'Testing',
      description: 'Rigorous testing ensures your application is bug-free and performant.'
    },
    {
      step: '05',
      title: 'Deployment',
      description: 'We deploy your application and provide ongoing support and maintenance.'
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
              Our <span className="gradient-text">Services</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive software development services to bring your vision to life. 
              From concept to deployment, we've got you covered.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="glass-effect p-8 rounded-xl card-hover group"
              >
                <div className={`bg-gradient-to-r ${service.color} p-4 rounded-lg inline-block mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white">{service.icon}</div>
                </div>
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2">
                      <CheckCircle size={16} className="text-green-400" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">
              Our <span className="gradient-text">Process</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A proven methodology that ensures successful project delivery every time.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center relative"
              >
                <div className="glass-effect p-6 rounded-xl mb-4">
                  <div className="text-4xl font-bold gradient-text mb-4">{step.step}</div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-300 text-sm">{step.description}</p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="text-blue-400" size={24} />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">
              Technologies We <span className="gradient-text">Master</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We stay at the forefront of technology to deliver cutting-edge solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              'React', 'Node.js', 'Python', 'TypeScript', 'Next.js', 'React Native',
              'AWS', 'Docker', 'MongoDB', 'PostgreSQL', 'GraphQL', 'Tailwind CSS'
            ].map((tech, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="glass-effect p-4 rounded-lg text-center hover:bg-blue-500/10 transition-colors"
              >
                <span className="text-gray-300 font-medium">{tech}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Start Your <span className="gradient-text">Project?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help bring your ideas to life with our expert development services.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="gradient-bg text-white px-8 py-4 rounded-lg font-semibold flex items-center space-x-2 mx-auto shadow-lg"
            >
              <span>Get a Free Consultation</span>
              <ArrowRight size={20} />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Services;