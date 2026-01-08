import codeBoulevardImg from '../images/code boulevard.jpeg';
import babtechLogo from '../images/babtech-logo.jpeg';
import type { StaticImageData } from 'next/image';

export type ExperienceItem = { company: string; role: string; period: string; logo?: string | StaticImageData; };
export const experience: ExperienceItem[] = [
  { company: 'CODEBOULEVARD', role: 'Frontend Developer (Remote)', period: 'july 2025 - Present', logo: codeBoulevardImg },
  { company: 'BABTECH COMPUTERS', role: 'Frontend Developer ', period: 'Feb 2024 - may 2025', logo: babtechLogo },
];