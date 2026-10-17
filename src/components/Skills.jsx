import { motion } from 'framer-motion';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';
import SectionWrapper from './hoc/SectionWrapper';
import { SKILL_CATEGORIES } from '../constants';
import { Code2, Smartphone, Database, Cpu } from 'lucide-react';

const iconMap = {
  Code2: Code2,
  Smartphone: Smartphone,
  Database: Database,
  Cpu: Cpu,
};

const Skills = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="w-full">
        <p className={`${styles.sectionSubText}`}>Technical Expertise</p>
        <h2 className={styles.sectionHeadText}>Skills & Tech Stack</h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 w-full">
        {SKILL_CATEGORIES.map((category, idx) => {
          const IconComponent = iconMap[category.icon] || Code2;

          return (
            <motion.div
              key={category.title}
              variants={fadeIn('up', 'spring', idx * 0.15, 0.75)}
              className="bg-primary-semi border border-tertiary rounded-2xl p-6 sm:p-8 hover:border-white transition-all duration-300 shadow-md flex flex-col justify-between group hover:shadow-card"
            >
              <div>
                <div className="flex items-center gap-4 mb-3">
                  <div className="p-3 duration-200 rounded-xl bg-tertiary-transparent text-tertiary group-hover:scale-110">
                    <IconComponent size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-tertiary transition-colors">
                      {category.title}
                    </h3>
                  </div>
                </div>

                <p className="text-white-300 text-xs sm:text-sm font-para mb-4">
                  {category.description}
                </p>

                <ul className="flex flex-wrap gap-2 sm:gap-2.5">
                  {category.skills.map((skill) => (
                    <li
                      key={skill}
                      className="px-3 py-1.5 rounded-xl bg-[#120d2680] border border-tertiary/25 text-white-200 text-xs sm:text-sm font-para font-medium hover:text-white hover:border-tertiary hover:bg-tertiary-transparent transition-all duration-200 cursor-default select-none shadow-sm"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          );
        })}
      </div>
    </>
  );
};

export default SectionWrapper(
  Skills,
  'skills',
  `w-full ${styles.padding} max-w-[clamp(350px,100vw,1500px)] mx-auto pt-0 pb-16`
);
