import { AnimatePresence, motion } from 'framer-motion';
import { styles } from '../../styles';
import classes from './projects.module.css';
import { Github, Live } from '../icons';
import { fadeIn } from '../../utils/motion';
import React, { useState } from 'react';

const Project = ({ name, live, github, description, stack, images, idx }) => {
  const [hovered, setHovered] = useState(false);
  const targetLink = live || github || '#';
  const imgList = Array.isArray(images) && images.length > 0 ? images : [images].filter(Boolean);
  const primaryImg = imgList[0] || '/projects/rtc/cover.svg';

  return (
    <motion.li
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      onTouchStart={() => setHovered(true)}
      onTouchEnd={() => setHovered(false)}
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`${classes.project_item} rounded w-full`}
    >
      <div
        className={`${classes.project_img} relative rounded overflow-hidden aspect-video w-full`}
      >
        <a
          href={targetLink}
          className="absolute block w-full h-full"
          rel="noreferrer noopener"
          target="_blank"
        >
          <span className="sr-only">{name}</span>

          <div
            className={`${classes.img_filter} w-full h-full absolute z-20`}
          ></div>
        </a>

        <motion.img
          src={primaryImg}
          className="object-cover w-full h-full rounded"
          initial={{ opacity: 1 }}
          animate={{ opacity: hovered && imgList.length > 1 ? 0 : 1 }}
          alt={'Showcase of project: ' + name}
          transition={{ duration: 0.3, delay: 0 }}
        />
        {imgList.length > 1 && (
          <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full">
            <AnimatePresence>
              {hovered &&
                imgList.map((src, index) => (
                  <motion.img
                    key={src}
                    src={src}
                    alt={'Showcase of project: ' + name}
                    className="absolute object-cover w-full h-full rounded"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ delay: index * 1.5, duration: 0.3 }}
                  />
                ))}
            </AnimatePresence>
          </div>
        )}
      </div>
      <div className={classes.project_content}>
        <p className={`${styles.projectSubTitle}`}>Featured Project</p>
        <h3 className={`${styles.projectTitle} ${classes.title}`}>
          <a href={targetLink} rel="noreferrer noopener" target="_blank">
            {name}
          </a>
        </h3>
        <p className={`${styles.projectP} ${classes.project_text}`}>
          {Array.isArray(description)
            ? description.map(({ text, highlight }, dIdx) =>
                highlight ? (
                  <span className="animated-text" key={dIdx}>
                    {text}
                  </span>
                ) : (
                  <React.Fragment key={dIdx}>{text}</React.Fragment>
                )
              )
            : description}
        </p>
        <ul
          className={`flex flex-wrap justify-end gap-4 mt-4 ${classes.flexed}`}
        >
          {stack.map((t) => (
            <li className={`${styles.projectTools}`} key={t}>
              {t}
            </li>
          ))}
        </ul>
        <div className={`flex justify-end gap-4 mt-3 ${classes.flexed}`}>
          {!!github && (
            <a href={github} rel="noreferrer noopener" target="_blank" title="GitHub Repository">
              <Github />
            </a>
          )}
          {!!live && (
            <a href={live} rel="noreferrer noopener" target="_blank" title="Live Website">
              <Live />
            </a>
          )}
        </div>
      </div>
    </motion.li>
  );
};
export default Project;

