"use client"

import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-8 text-primary"
        >
          About Me
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg text-muted-foreground space-y-6"
        >
          <p>
            Hi, I'm Srishant Kumar, a passionate UI/UX designer and developer with a keen eye for creating beautiful, functional, and user-centered digital experiences.
          </p>
          <p>
            With several years of experience in the field, I've had the opportunity to work on a diverse range of projects, from mobile applications to responsive websites. My approach combines creativity with a deep understanding of user behavior and modern design principles.
          </p>
          <p>
            I'm constantly learning and staying up-to-date with the latest design trends and technologies to deliver cutting-edge solutions that not only look great but also provide seamless user experiences.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;