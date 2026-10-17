import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';

const DURATION = 0.35;
const STAGGER = 0.035;

const FlipHeroText = ({ children }) => {
  return (
    <motion.h1
      initial="initial"
      animate="animate"
      className={`${styles.heroHeadText} relative block uppercase whitespace-nowrap overflow-hidden text-white sm:leading-[0.8]`}
    >
      <div>
        {children.split('').map((l, i) => {
          if (l === ' ') {
            return <span key={i}>&nbsp;</span>;
          }
          return (
            <motion.span
              variants={{
                initial: {
                  y: 0,
                },
                animate: {
                  y: '-100%',
                },
              }}
              transition={{
                duration: DURATION,
                ease: 'easeInOut',
                delay: STAGGER * i,
              repeat: Infinity,
                repeatDelay: 2,
              }}
              className="inline-block"
              key={i}
            >
              {l}
            </motion.span>
          );
        })}
      </div>
      {/* This styling creates an empty container above the text with its content hidden below the original text */}
      <div className="absolute inset-0">
        {children.split('').map((l, i) => {
          if (l === ' ') {
            return <span key={i}>&nbsp;</span>;
          }
          return (
            <motion.span
              variants={{
                initial: {
                  y: '100%',
                },
                animate: {
                  y: 0,
                },
              }}
              transition={{
                duration: DURATION,
                ease: 'easeInOut',
                delay: STAGGER * i,
              repeat: Infinity,
                repeatDelay: 2,
              }}
              className="inline-block"
              key={i}
            >
              {l}
            </motion.span>
          );
        })}
      </div>
    </motion.h1>
  );
};

export default FlipHeroText;
