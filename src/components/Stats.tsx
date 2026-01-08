'use client';

import React from 'react';
import { FiClock, FiTarget, FiStar, FiMonitor } from 'react-icons/fi';
import AnimateOnScroll from './AnimateOnScroll';

const stats = [
  { number: '4+', label: 'Years Experience', icon: FiClock },
  { number: '50+', label: 'Projects Completed', icon: FiTarget },
  { number: '100%', label: 'Client Satisfaction', icon: FiStar },
  { number: '24/7', label: 'Available', icon: FiMonitor },
];

export default function Stats() {
  return (
    <div className="container-max section stats-section">
      <AnimateOnScroll>
        <h2 className="section-heading center-text">Achievements & Stats</h2>
      </AnimateOnScroll>
      <div className="stats-grid">
        {stats.map((stat, index) => {
          const IconComponent = stat.icon;
          return (
            <AnimateOnScroll key={stat.label} delay={index * 100}>
              <div className="stat-card">
                <div className="stat-icon">
                  <IconComponent />
                </div>
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            </AnimateOnScroll>
          );
        })}
      </div>
    </div>
  );
}

