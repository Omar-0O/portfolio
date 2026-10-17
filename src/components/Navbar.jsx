import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import { styles } from '../styles';
import { navLinks } from '../constants';

import MobNav from './mobnav/MobNav';
import CTABtn from './mobnav/CTABtn';
import useScrollPosition from '../hooks/useScrollPosition';
const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  const [oldPosition, setOldPosition] = useState(0);
  const [navClass, setNavClass] = useState('');
  const toggleNav = () => {
    setToggle((prev) => !prev);
  };

  const logoIcon = useRef();
  const scrollPosition = useScrollPosition();

  // Update active link based on which section is in view
  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.id);
    const observers = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            const link = navLinks.find((l) => l.id === id);
            if (link) setActive(link.title);
          }
        },
        { threshold: 0.3, rootMargin: '-80px 0px 0px 0px' }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  useEffect(() => {
    if (scrollPosition === 0) {
      setNavClass('');
      setActive('');
    } else if (oldPosition > scrollPosition) {
      setNavClass('nav_shown');
    } else if (oldPosition < scrollPosition) {
      setNavClass('nav_hidden');
      setToggle(false);
    }
    setOldPosition(() => scrollPosition);
  });
  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 nav ${navClass}`}
    >
      <div className="w-full flex justify-between items-center max-w-[clamp(350px,100vw,1500px)] mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={'/logo.svg'}
            ref={logoIcon}
            alt="logo"
            className="object-contain logo w-9 h-9"
            onMouseEnter={() => {
              if (!logoIcon.current.className.includes('animate')) {
                logoIcon.current.classList.add('animate');
                setTimeout(() => {
                  logoIcon.current.classList.remove('animate');
                }, 500);
              }
            }}
          />
        </Link>
        <div className="flex-row items-center justify-center hidden gap-10 sm:flex">
          <ul className="flex-row hidden gap-10 list-none sm:flex">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`${
                  active === link.title ? 'text-tertiary' : 'text-secondary'
                } hover:text-tertiary text-[18px] font-medium cursor-pointer link`}
                onClick={() => setActive(link.title)}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
          </ul>
          <CTABtn className="px-2 py-1" />
        </div>

        <div className="flex items-center justify-end flex-1 sm:hidden">
          <MobNav toggle={toggle} onClick={toggleNav}>
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`${
                  active === link.title ? 'text-tertiary' : 'text-secondary'
                } hover:text-tertiary text-[18px] font-medium cursor-pointer`}
                onClick={() => {
                  setActive(link.title);
                  toggleNav();
                }}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
          </MobNav>
        </div>
      </div>
    </nav>
    // mob nav
  );
};

export default Navbar;
