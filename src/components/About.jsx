import { motion } from 'framer-motion';

import { styles } from '../styles';
import { slideIn, textVariant } from '../utils/motion';
import SectionWrapper from './hoc/SectionWrapper';
import Achievements from './Achievements';

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="md:col-span-2">
        <p className={`${styles.sectionSubText} `}>Overview</p>
        <h2 className={styles.sectionHeadText}>About Me</h2>
      </motion.div>
      <div className="grid items-center justify-between grid-cols-1 gap-4 md:grid-cols-3 lg:gap-8 md:gap-1">
        <motion.article
          variants={slideIn('left', 'spring', 0.2, 2)}
          className="flex flex-col gap-6 md:col-span-2"
        >
          <p className={styles.sectionText}>
            I’m a <span className="animated-text">Software Engineer</span> based in Cairo, Egypt, 
            studying Software Development at <span className="animated-text">Eva International Applied Technology School</span>. 
            I specialize in building real-world, production-grade applications across web and mobile platforms—architecting 
            robust systems with <span className="animated-text">React, Next.js, TypeScript, and ASP.NET Core</span>, 
            alongside privacy-first native Android apps with <span className="animated-text">Kotlin and Jetpack Compose</span>.
          </p>
          <p className={styles.sectionText}>
            I actively own and develop the production operations platform for <span className="animated-text">Resala Training Center (RTC)</span>, serve as a <span className="animated-text">Committee Head & Technical Mentor</span> leading volunteer development and student programming workshops on Git and modern web technologies, and represent Egypt as an <span className="animated-text">ICSC Finalist & Official Ambassador</span>.
          </p>
          <p className={styles.sectionText}>
            My development philosophy centers on <span className="animated-text">Clean Architecture</span>, ironclad database security with <span className="animated-text">PostgreSQL Row-Level Security (RLS)</span>, 
            and automated <span className="animated-text">CI/CD pipelines</span> to deliver dependable, high-performance software.
          </p>
        </motion.article>

        <Achievements />
      </div>

    </>
  );
};

export default SectionWrapper(
  About,
  'about',
  `md:mb-16 w-full ${styles.paddingX} pt-4 sm:pt-0  max-w-[clamp(350px,100vw,1500px)] mx-auto`
);
