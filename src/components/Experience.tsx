'use client';

import React from 'react';
import { FiBriefcase } from 'react-icons/fi';
import { experience } from '../data/experience';
import AnimateOnScroll from './AnimateOnScroll';

export default function Experience() {
  return (
    <div className="container-max section">
      <AnimateOnScroll>
        <h2 className="section-heading">
          <FiBriefcase className="heading-icon" /> Work Experience
        </h2>
      </AnimateOnScroll>
      <div className="timeline">
        {experience.map((e, index) => {
          const logoSrc = e.logo ? (typeof e.logo === 'string' ? e.logo : (e.logo as any).src || (e.logo as any).default || '') : '';
          return (
            <AnimateOnScroll key={e.company} delay={index * 100}>
              <div className="timeline-item">
                <div className="timeline-left">
                  {logoSrc ? <img src={logoSrc} alt={e.company} className="logo" /> : null}
                  <div>
                    <div className="company-name">{e.company}</div>
                    <div className="role">{e.role}</div>
                  </div>
                </div>
                <div className="text-muted period">
                  {e.period && (
                    <>
                      <span className="arrow">←</span> {e.period}
                    </>
                  )}
                </div>
              </div>
            </AnimateOnScroll>
          );
        })} 
      </div>
    </div>
  );
}