'use client';

import React from 'react';
import { FiFolder } from 'react-icons/fi';
import ProjectCard from './ProjectCard';
import { projects } from '../data/projects';
import AnimateOnScroll from './AnimateOnScroll';

export default function Projects() {
  return (
    <div className="container-max section">
      <AnimateOnScroll>
        <div className="center" style={{ marginBottom: 24 }}>
          <div
            className="btn"
            style={{
              background: '#000',
              color: '#fff',
              borderRadius: 999,
              padding: '.35rem .9rem',
              display: 'inline-block',
            }}
          >
            My Projects
          </div>
          <h2 style={{ marginTop: 12, fontSize: '1.5rem', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
            <FiFolder /> Check out my latest work
          </h2>
          <p
            className="text-muted"
            style={{
              maxWidth: '60ch',
              margin: '8px auto 20px',
            }}
          >
            I've worked on a variety of projects, either on contract, or in my
            leisure. From simple websites to complex web applications. Here are a few of my favorites.
          </p>
        </div>
      </AnimateOnScroll>

      <div className="grid-cards">
        {projects.map((p, index) => (
          <AnimateOnScroll key={p.title} delay={index * 100}>
            <ProjectCard project={p} />
          </AnimateOnScroll>
        ))}
      </div>
    </div>
  );
}