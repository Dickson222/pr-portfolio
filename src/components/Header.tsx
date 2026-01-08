'use client';

import React, { useEffect, useRef, useState } from 'react';
import { FiBriefcase, FiFolder, FiMail } from 'react-icons/fi';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  const [visible, setVisible] = useState(true);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || window.pageYOffset;
      const atBottom = window.innerHeight + y >= (document.documentElement.scrollHeight - 40);

      if (atBottom) {
        setVisible(false);
      } else if (y < lastY.current) {
        // scrolling up
        setVisible(true);
      }

      lastY.current = y;
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className={`floating-nav ${visible ? '' : 'nav-hidden'}`} role="navigation" aria-label="Quick navigation">
      <a href="#work" aria-label="Work" className="nav-btn">
        <FiBriefcase />
      </a>
      <a href="#projects" aria-label="Projects" className="nav-btn">
        <FiFolder />
      </a>
      <a href="#contact" aria-label="Contact" className="nav-btn">
        <FiMail />
      </a>
      <div className="nav-btn theme-btn" aria-hidden>
        <ThemeToggle />
      </div>
    </div>
  );
}