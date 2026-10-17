import SectionWrapper from './hoc/SectionWrapper';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { textVariant } from '../utils/motion';
import { AdditionalProjects } from './projects';
import { additionalProjects } from '../constants';

const AdditionalWorks = () => {
  if (!additionalProjects || additionalProjects.length === 0) return null;

  return (

    <>
      <motion.div
        variants={textVariant()}
        className="w-full mx-auto text-center"
      >
        <p className={`${styles.sectionSubText} `}>Other noteworthy projects</p>
        <h2 className={styles.sectionHeadText}>Additional Projects</h2>
      </motion.div>
      <AdditionalProjects />
    </>
  );
};
const AdditionalWorksComponent = SectionWrapper(
  AdditionalWorks,
  'more_works',
  `min-h-screen w-full ${styles.padding} 
max-w-[clamp(350px,100vw,1500px)] mx-auto`
);
export default AdditionalWorksComponent;
