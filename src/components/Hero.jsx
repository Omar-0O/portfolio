import { motion } from 'framer-motion';
import { styles } from '../styles';
import { AstroCanvas } from './canvas';
import CTABtn from './mobnav/CTABtn';
import Socials from './Socials';
import { TextFade } from './TextFade';
import { useState } from 'react';
import FlipHeroText from './FlipHeroText';
import { PERSONAL_INFO } from '../constants';

const Hero = () => {
  const [onHappy, setOnHappy] = useState(() => {});
  const [onSad, setOnSad] = useState(() => {});

  return (
    <section
      className={`relative flex flex-col md:flex-row items-center justify-start min-h-screen overflow-hidden ${styles.paddingX} md:pr-0 max-w-[clamp(350px,100vw,1500px)] md:pt-8 xs:pt-36 pt-28 mx-auto`}
    >
      <div className="flex flex-col">
        <div
          className={`md:max-w-1/2 max-w-full flex flex-row items-start justify-center z-5`}
        >
          <div className={``}>
            <TextFade
              direction="up"
              className="flex flex-col justify-center w-full gap-6 pt-0 pb-5"
              staggerChildren={0.3}
            >
              <h2 className={`${styles.heroSubText}`}>
                Hi, I'm{' '}
                <span className="inline-block animated-text">{PERSONAL_INFO.displayName}</span>
              </h2>
              <FlipHeroText>{PERSONAL_INFO.title}</FlipHeroText>

              <h2 className={`${styles.heroSubHead} text-white-200 max-w-[620px]`}>
                Building <span className="animated-text">scalable full-stack web platforms</span>,{' '}
                <span className="animated-text">privacy-first native Android apps</span>, and{' '}
                <span className="animated-text">real-time multimodal AI experiences</span>.
              </h2>
              <div className="mt-4 xs:text-[16px] flex flex-col items-start sm:gap-6 gap-4 justify-start max-w-fit">
                <div className="flex flex-wrap items-center gap-4">
                  <CTABtn
                    href="#work"
                    text="View Projects"
                    className="md:px-8 md:py-3 md:text-[1.125rem]"
                    onMouseEnter={onHappy}
                    onMouseLeave={onSad}
                    onTouchStart={onHappy}
                    onTouchEnd={onSad}
                  />
                  <CTABtn
                    href={`mailto:${PERSONAL_INFO.email}`}
                    text="Contact Me"
                    className="md:px-8 md:py-3 md:text-[1.125rem]"
                    onMouseEnter={onHappy}
                    onMouseLeave={onSad}
                    onTouchStart={onHappy}
                    onTouchEnd={onSad}
                  />
                </div>
                <Socials className="justify-between w-full sm:max-w-full max-w-[130px] icons_large" />
              </div>
            </TextFade>

          </div>
        </div>
      </div>

      <AstroCanvas setOnHappy={setOnHappy} setOnSad={setOnSad} />

      <div className="absolute flex items-center justify-center w-full md:hidden xs:bottom-10 bottom-20 ">
        <a href="#about">
          <span className="sr-only">About Section</span>

          <div className="flex items-start justify-center w-6 h-12 p-2 border-2 rounded-2xl border-white-200">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              className="w-2 h-2 mb-1 rounded-full bg-white-200"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
