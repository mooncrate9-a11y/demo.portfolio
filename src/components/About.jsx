import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FiCode, FiUsers, FiAward, FiHeart } from "react-icons/fi";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const stats = [
    { icon: FiCode, label: "Projects Built", value: "10+" },
    { icon: FiUsers, label: "Happy Clients", value: "5+" },
    { icon: FiAward, label: "Certifications", value: "5+" },
    { icon: FiHeart, label: "Code Commits", value: "500+" },
  ];

  const skills = [
    "Problem Solving",
    "Critical Thinking",
    "Adaptability",
    "MERN Stack",
    "Full Stack Development",
    "Database Management",
  ];

  return (
    <section id="about" className="py-20 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-gradient">
              About Me
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-green-500 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div variants={itemVariants}>
              <h3 className="text-3xl font-bold mb-6 text-white">
                Full Stack Developer & Tech Enthusiast
              </h3>

              <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
                <p>
                  I'm a passionate Full Stack Developer specializing in building
                  modern web applications. With expertise in the MERN stack
                  (MongoDB, Express.js, React.js, Node.js), I create scalable
                  and user-friendly solutions that bring ideas to life.
                </p>

                <p>
                  My development journey has been driven by curiosity and a love
                  for problem-solving. From learning core programming concepts
                  to mastering modern frameworks like React and Tailwind CSS, I
                  continuously evolve my skills to stay at the forefront of web
                  development technologies.
                </p>

                <p>
                  I'm dedicated to writing clean, efficient code and creating
                  exceptional user experiences. Always eager to take on new
                  challenges and collaborate on innovative projects that make a
                  difference in the digital world.
                </p>
              </div>

              {/* Soft Skills */}
              <div className="mt-8">
                <h4 className="text-xl font-semibold mb-4 text-white">
                  Core Strengths
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill}
                      className="flex items-center space-x-2"
                      initial={{ opacity: 0, x: -20 }}
                      animate={
                        isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                      }
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-green-500 rounded-full"></div>
                      <span className="text-gray-300">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Content - Stats */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="bg-black/50 p-6 rounded-xl border border-gray-700 hover:border-gray-600 transition-all duration-300 text-center group"
                    whileHover={{ scale: 1.05, y: -5 }}
                    initial={{ opacity: 0, y: 30 }}
                    animate={
                      isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                    }
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className="flex justify-center mb-4">
                      <div className="p-3 bg-gradient-to-r from-blue-500/20 to-green-500/20 rounded-full group-hover:from-blue-500/30 group-hover:to-green-500/30 transition-all duration-300">
                        <stat.icon className="text-2xl text-blue-400" />
                      </div>
                    </div>
                    <div className="text-3xl font-bold text-white mb-2">
                      {stat.value}
                    </div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              {/* Personal Quote */}
              <motion.div
                className="bg-gradient-to-r from-blue-500/10 to-green-500/10 p-6 rounded-xl border border-gray-700"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={
                  isInView
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.9 }
                }
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div className="text-center">
                  <div className="text-4xl text-blue-400 mb-4">"</div>
                  <p className="text-gray-300 italic text-lg mb-4">
                    Code is like humor. When you have to explain it, it's bad.
                  </p>
                  <div className="text-sm text-gray-500">- Cory House</div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Fun Facts */}
          <motion.div className="mt-20 text-center" variants={itemVariants}>
            <h4 className="text-2xl font-bold mb-8 text-white">
              Fun Facts About Me
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { emoji: "🎓", text: "Computer Science Graduate with Honors" },
                {
                  emoji: "💻",
                  text: "Active contributor to open source projects",
                },
                {
                  emoji: "🏆",
                  text: "Certified in Modern Web Development Technologies",
                },
              ].map((fact, index) => (
                <motion.div
                  key={index}
                  className="bg-black/30 p-6 rounded-xl border border-gray-700 hover:border-gray-600 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                >
                  <div className="text-3xl mb-3">{fact.emoji}</div>
                  <p className="text-gray-300">{fact.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
