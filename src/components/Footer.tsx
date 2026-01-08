'use client';

import React from 'react';
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiHeart } from 'react-icons/fi';
import AnimateOnScroll from './AnimateOnScroll';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="container-max">
        <AnimateOnScroll>
          <div className="footer-content">
            <div className="footer-text">
              <p>© {currentYear} Dickson Godwin — Built with <FiHeart className="heart-icon" /> using Next.js</p>
            </div>
            <div className="footer-social">
              <a href="https://github.com/Dickson222" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FiGithub className="social-icon" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FiLinkedin className="social-icon" />
              </a>
              <a href="https://x.com/godwin929601" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <FiTwitter className="social-icon" />
              </a>
              <a href="mailto:godwindickson333@gmail.com" aria-label="Email">
                <FiMail className="social-icon" />
              </a>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </footer>
  );
}