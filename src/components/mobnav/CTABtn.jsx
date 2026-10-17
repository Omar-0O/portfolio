import { PERSONAL_INFO } from '../../constants';

const CTABtn = ({
  className = '',
  text = 'Get in touch',
  href = `mailto:${PERSONAL_INFO.email}`,
  children,
  ...props
}) => {
  const label = children || text;

  return (
    <a
      className={`cta px-4 py-2 ${className}`}
      data-text={label}
      href={href}
      {...props}
    >
      <span className="inline-block">{label}</span>
      <div className="cta-border"></div>
    </a>
  );
};

export default CTABtn;


