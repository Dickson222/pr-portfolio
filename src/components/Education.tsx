'use client';

import React from 'react';
import { FiBook } from 'react-icons/fi';
import { education } from '../data/education';
import AnimateOnScroll from './AnimateOnScroll';

export default function Education() {
  return (
    <div className="container-max section">
      <AnimateOnScroll>
        <h2 className="section-heading">
          <FiBook className="heading-icon" /> Education
        </h2>
      </AnimateOnScroll>
      <div className="edu-list">
        {education.map((ed, index) => {
          const logoSrc = ed.logo ? (typeof ed.logo === 'string' ? ed.logo : (ed.logo as any).src || (ed.logo as any).default || '') : '';
          return (
            <AnimateOnScroll key={ed.school} delay={index * 100}>
              <div className="edu-item">
                <div className="edu-left">
                  {logoSrc ? <img src={logoSrc} alt={ed.school} style={{ width:40, height:40, objectFit:'contain' }} /> : null}
                  <div>
                    <div style={{ fontWeight:700 }}>{ed.school}</div>
                    <div className="text-muted">{ed.program}</div>
                  </div>
                </div>
                <div className="text-muted period">
                  {ed.period && (
                    <>
                      <span className="arrow">←</span> {ed.period}
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