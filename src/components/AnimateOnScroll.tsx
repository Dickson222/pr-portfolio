'use client';

import React, { useEffect, useRef, useState } from 'react';

interface AnimateOnScrollProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  key?: string | number;
}

export default function AnimateOnScroll({ children, delay = 0, className = '' }: AnimateOnScrollProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`animate-on-scroll ${isVisible ? 'animate-in' : ''} ${className}`}
    >
      {children}
    </div>
  );
}

