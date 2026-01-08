'use client';

import React from 'react';
import { FiTool } from 'react-icons/fi';
import { skills } from '../data/skills';
import AnimateOnScroll from './AnimateOnScroll';

export default function Skills() {
  return (
    <div className="container-max section">
      <AnimateOnScroll>
        <h2 className="section-heading">
          <FiTool className="heading-icon" /> Skills
        </h2>
      </AnimateOnScroll>
      <div className="skills-grid">
        {skills.map((s, index) => (
          <AnimateOnScroll key={s} delay={index * 50}>
            <div className="skill-pill">{s}</div>
          </AnimateOnScroll>
        ))}
      </div>
    </div>
  );
}