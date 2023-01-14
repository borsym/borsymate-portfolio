'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About Me" textStyles="text-center" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        I am a highly motivated individual with nearly{' '}
        <span className="font-extrabold text-white">2 years</span> of software
        development experience. I see programming as{' '}
        <span className="font-extrabold text-white">fun</span> rather than work.
        I am seeking to leverage my solid development skills, with a focus on{' '}
        <span className="font-extrabold text-white">
          collaboration, communication, passion and creativity
        </span>
        , as a programmer. My ultimate{' '}
        <span className="font-extrabold text-white">goal</span> is to devise a
        better problem-solving method for challenging tasks, and to continuously
        learn new technologies and tools. I am eager to join a team where I can
        contribute my skills, learn from my colleagues and{' '}
        <span className="font-extrabold text-white">make a positive</span>{' '}
        impact on the projects I work on. Someone whose determination and
        curiosity{' '}
        <span className="font-extrabold text-white">reaches the stars</span>{' '}
      </motion.p>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
        }}
      >
        <motion.img
          variants={fadeIn('up', 'tween', 0.3, 1)}
          src="/arrow-down.svg"
          alt="arrow down"
          className="w-[18px] h-[28px] object-contain mt-[28px]"
        />
      </motion.div>
    </motion.div>
  </section>
);

export default About;
