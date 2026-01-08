'use client';

import React from 'react';
import { FiMail } from 'react-icons/fi';
import AnimateOnScroll from './AnimateOnScroll';

export default function Contact() {
  return (
    <div className="container-max section center">
      <AnimateOnScroll>
        <a href="#contact" className="btn btn-dark" style={{ marginBottom: 18 }}>Contact</a>
        <h2 style={{ fontSize: '2rem', fontWeight:800, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
          <FiMail /> Let's Connect & Innovate
        </h2>
        <p className="text-muted" style={{ maxWidth:'64ch', margin:'1rem auto' }}>
          I love to solve problems, and always eager to explore new challenges, and connect with professionals who are passionate about technology and innovation. If you're looking to elevate your projects with a blend of creativity, collaboration, and technical excellence, feel free to connect with me on <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'underline', transition: 'all 0.3s ease' }} onMouseEnter={(e: Event) => (e.currentTarget as HTMLAnchorElement).style.textDecoration = 'none'} onMouseLeave={(e: Event) => (e.currentTarget as HTMLAnchorElement).style.textDecoration = 'underline'}>LinkedIn</a> or reach out at <a href="mailto:godwindickson333@gmail.com" style={{ color: '#2563eb', textDecoration: 'underline', transition: 'all 0.3s ease' }} onMouseEnter={(e: Event) => (e.currentTarget as HTMLAnchorElement).style.textDecoration = 'none'} onMouseLeave={(e: Event) => (e.currentTarget as HTMLAnchorElement).style.textDecoration = 'underline'}>godwindickson333@gmail.com</a>
        </p>
      </AnimateOnScroll>
    </div>
  );
}