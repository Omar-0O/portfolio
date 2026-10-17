import { Github, LinkedIn, Mail } from './icons';
import { PERSONAL_INFO } from '../constants';

const Socials = ({ className }) => {
  return (
    <ul className={`flex gap-3 items-center sm:ml-0 ml-2 ${className}`}>
      <li>
        <a
          href={PERSONAL_INFO.linkedin}
          rel="noreferrer noopener"
          target="_blank"
          title="LinkedIn"
        >
          <span className="sr-only">LinkedIn</span>
          <LinkedIn />
        </a>
      </li>
      <li>
        <a
          href={PERSONAL_INFO.github}
          rel="noreferrer noopener"
          target="_blank"
          title="GitHub"
        >
          <span className="sr-only">GitHub</span>
          <Github />
        </a>
      </li>
      <li>
        <a
          href={`mailto:${PERSONAL_INFO.email}`}
          rel="noreferrer noopener"
          target="_blank"
          title="Email"
        >
          <span className="sr-only">Email</span>
          <Mail />
        </a>
      </li>
    </ul>
  );
};
export default Socials;

