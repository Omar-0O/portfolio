import { motion } from 'framer-motion';
import { slideIn, textVariant } from '../utils/motion';
import { styles } from '../styles';
import { EXPERIENCES, EDUCATION, ACHIEVEMENTS_LEADERSHIP } from '../constants';
import SectionWrapper from './hoc/SectionWrapper';
import {
  Briefcase,
  GraduationCap,
  ExternalLink,
  Calendar,
  MapPin,
  Trophy,
  Users,
  Code2,
} from 'lucide-react';

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="w-full">
        <p className={`${styles.sectionSubText}`}>Career & Academic Journey</p>
        <h2 className={styles.sectionHeadText}>Experience & Education</h2>
      </motion.div>

      {/* Main Grid: Experience on left, Education on right */}
      <div className="grid items-stretch grid-cols-1 gap-6 mx-auto mt-6 lg:gap-8 lg:grid-cols-2">
        {/* Experience Column */}
        {EXPERIENCES.map((exp) => (
          <motion.article
            key={exp.company}
            variants={slideIn('left', 'spring', 0.3, 1.5)}
            className="flex flex-col"
          >
            <div className="flex flex-col justify-between h-full p-6 text-white border rounded-2xl shadow-md sm:p-8 bg-primary-semi border-tertiary hover:border-tertiary-light transition-all">
              <div className="space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-tertiary-transparent text-tertiary border border-tertiary/30">
                    <Briefcase size={13} />
                    {exp.badge}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-white-200">
                    <Calendar size={13} className="text-tertiary" />
                    {exp.date}
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-white hover:text-tertiary transition-colors">
                    {exp.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-tertiary">
                    {exp.website ? (
                      <a
                        href={exp.website}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="inline-flex items-center gap-1 font-semibold hover:underline"
                      >
                        {exp.company}
                        <ExternalLink size={14} />
                      </a>
                    ) : (
                      <span className="font-semibold">{exp.company}</span>
                    )}
                    <span className="text-white-200 flex items-center gap-1 text-xs">
                      <MapPin size={12} /> {exp.location}
                    </span>
                  </div>
                </div>

                <ul className="flex flex-col gap-3 pt-2">
                  {exp.description.map((desc, i) => (
                    <li
                      key={i}
                      className="text-white-200 font-para text-[0.875rem] sm:text-[0.9375rem] leading-relaxed relative pl-5 before:content-['▹'] before:absolute before:left-0 before:text-tertiary before:font-bold"
                    >
                      {desc}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 mt-4 border-t border-white/10">
                <p className="text-[11px] uppercase tracking-wider text-white-200 mb-2 font-semibold">
                  Technologies & Production Stack
                </p>
                <ul className="flex flex-wrap gap-1.5">
                  {exp.stack.map((techItem, i) => (
                    <li
                      key={i}
                      className="px-2.5 py-1 rounded-lg bg-tertiary-transparent text-[0.75rem] font-medium text-tertiary border border-tertiary/20"
                    >
                      {techItem}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.article>
        ))}

        {/* Education Column */}
        {EDUCATION.map((edu) => (
          <motion.article
            key={edu.institution}
            variants={slideIn('right', 'spring', 0.3, 1.5)}
            className="flex flex-col"
          >
            <div className="flex flex-col justify-between h-full p-6 text-white border rounded-2xl shadow-md sm:p-8 bg-primary-semi border-tertiary hover:border-tertiary-light transition-all">
              <div className="space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-tertiary-transparent text-tertiary border border-tertiary/30">
                    <GraduationCap size={14} />
                    {edu.badge}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-white-200">
                    <Calendar size={13} className="text-tertiary" />
                    {edu.date}
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-white hover:text-tertiary transition-colors">
                    {edu.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-tertiary">
                    <span className="font-semibold">{edu.institution}</span>
                    <span className="text-white-200 flex items-center gap-1 text-xs">
                      <MapPin size={12} /> {edu.location}
                    </span>
                  </div>
                </div>

                <ul className="flex flex-col gap-3 pt-2">
                  {edu.description.map((desc, i) => (
                    <li
                      key={i}
                      className="text-white-200 font-para text-[0.875rem] sm:text-[0.9375rem] leading-relaxed relative pl-5 before:content-['▹'] before:absolute before:left-0 before:text-tertiary before:font-bold"
                    >
                      {desc}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 mt-4 border-t border-white/10">
                <p className="text-[11px] uppercase tracking-wider text-white-200 mb-2 font-semibold">
                  Core Engineering Focus Areas
                </p>
                <ul className="flex flex-wrap gap-1.5">
                  {edu.focus.map((focusItem, i) => (
                    <li
                      key={i}
                      className="px-2.5 py-1 rounded-lg bg-tertiary-transparent text-[0.75rem] font-medium text-tertiary border border-tertiary/20"
                    >
                      {focusItem}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      {/* Achievements & Leadership Subsection */}
      <motion.div variants={textVariant()} className="w-full mt-14 sm:mt-16">
        <p className={`${styles.sectionSubText}`}>Recognition & Mentorship</p>
        <h3 className="text-white font-black md:text-[36px] sm:text-[30px] xs:text-[24px] text-[20px]">
          Achievements & Leadership
        </h3>
      </motion.div>

      <div className="grid grid-cols-1 gap-6 mt-6 md:grid-cols-2">
        {ACHIEVEMENTS_LEADERSHIP.map((item, idx) => {
          const iconMap = { Trophy, Users, Code2 };
          const IconComponent = iconMap[item.icon] || Users;
          return (
            <motion.div
              key={item.title}
              variants={slideIn(idx === 0 ? 'left' : 'right', 'spring', 0.4, 1.5)}
              className="flex items-start gap-4 p-6 border rounded-2xl bg-primary-semi border-tertiary/60 hover:border-tertiary transition-all"
            >
              <div className="p-3 text-tertiary bg-tertiary-transparent rounded-xl shrink-0">
                <IconComponent size={24} />
              </div>
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-2.5 py-0.5 text-[11px] font-semibold rounded bg-tertiary-transparent text-tertiary border border-tertiary/30">
                    {item.badge}
                  </span>
                </div>
                <h4 className="text-lg font-bold text-white sm:text-xl">
                  {item.title}
                </h4>
                <p className="text-xs font-semibold text-tertiary">
                  {item.organization}
                </p>
                <p className="text-sm leading-relaxed text-white-200 font-para">
                  {item.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </>
  );
};

export default SectionWrapper(
  Experience,
  'experience',
  `w-full ${styles.padding} max-w-[clamp(350px,100vw,1500px)] mx-auto`
);
