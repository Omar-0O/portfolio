import { motion } from 'framer-motion';
import { staggerContainer } from '../../utils/motion';
const SectionWrapper = (Component, idName, className, animation) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.05 }}
        className={className}
      >
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>
        <Component />
      </motion.section>
    );
  };
export default SectionWrapper;
