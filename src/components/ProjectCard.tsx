import Image, { StaticImageData } from 'next/image';
import React from 'react';
import type { Project } from '../data/projects';

export default function ProjectCard({ project }: { project: Project }) {
  // Normalize the image value to a usable src for next/image
  let imgSrc: string | StaticImageData | undefined;

  if (project.image) {
    if (typeof project.image === 'string') {
      imgSrc = project.image;
    } else if (project.image && typeof project.image === 'object') {
      // Imported images may be objects with a `src` property or a default export
      // Try a few common shapes and fall back to the object itself (next/image can handle StaticImageData)
      imgSrc = (project.image as any).src || (project.image as any).default || project.image;
    }
  }

  return (
    <article className="card">
      {imgSrc ? (
        <div style={{ width: '100%', height: 160, position: 'relative' }}>
          <Image src={imgSrc as any} alt={project.title} fill className="image" sizes="(max-width: 640px) 100vw, 33vw" />
        </div>
      ) : null}
      <div className="card-body">
        <h3>{project.title}</h3>
        <p className="text-muted" style={{ marginTop: 4 }}>{project.description}</p>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 }}>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {project.tags?.map((t) => <span key={t} className="tag">{t}</span>)}
          </div>
          <div>
            {project.links.live && (
              <a className="btn btn-dark" href={project.links.live} target="_blank" rel="noopener noreferrer">
                <span style={{ fontSize: '1rem' }}>🌐</span> Website
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}