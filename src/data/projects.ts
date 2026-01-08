import carmpusImg from '../images/carmpus-CJ4V3Qr8.png';
import dicksonDevImg from '../images/dicksondev.png';
import jambcbtImg from '../images/jambcbt.png';
import panatImg from '../images/panat.svg';
import castellumImg from '../images/castellum.svg';
import kcfmbImg from '../images/kcfmb.svg';
import unifiedPaymentImg from '../images/unified-payment.svg';
import type { StaticImageData } from 'next/image';

export type Project = {
  title: string;
  description: string;
  image?: string | StaticImageData;
  tags?: string[];
  links: { live?: string; source?: string };
};

export const projects: Project[] = [
  { 
    title: 'Carmpus', 
    description: 'Carmpus is a platform designed for students to learn and share knowledge, offering access to courses taught by top tutors globally. It aims to empower education, particularly for underserved communities', 
    image: carmpusImg, 
    tags: ['Next.js', 'TypeScript', 'Evergreen'], 
    links: { live: 'https://carmpus.ng', source: 'https://github.com/you/carmpus' } 
  },
  { 
    title: 'Dickson Dev Portfolio',
description: 'A modern personal portfolio website showcasing my skills, projects, and experience as a frontend developer. Designed with a clean dark UI, smooth animations, and responsive layouts to highlight my work and make it easy for recruiters and clients to connect with me.',
image: dicksonDevImg,
tags: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
links: {
  live: 'https://godwin-dickson-profolio.vercel.app/',
  source: 'https://github.com/yourusername/dickson-dev-portfolio'
}
  },
  { 
    title: 'Castellum', 
    description: 'Castellum is a cybersecurity awareness platform that provides training and resources to help individuals and organizations protect themselves against cyber threats.', 
    image: castellumImg, 
    tags: ['React', 'Redux', 'Tailwind', 'JavaScript'], 
    links: { live: '#', source: '#' } 
  },
  {
   title: 'JAMB CBT Test Generator',
description: 'A web-based platform for generating customized JAMB CBT practice tests that simulate the real exam format. Students can practice at their own pace, track progress, and prepare confidently for the Unified Tertiary Matriculation Examination.',
tags: ['Education', 'Exam Prep', 'React', 'TypeScript', 'Tailwind CSS'],
image:jambcbtImg, 
links: {
 live: 'https://jambify-test-generator.lovable.app/',
 source: 'https://github.com/you/jamb-cbt-generator'

    }
  },
  {
    title: "Unified Payment",
    description: "Focused on providing payment solutions for businesses and individuals in Africa, it aims to simplify transactions, fuel commerce, drive growth, and support individual success through innovative payment systems",
    image: unifiedPaymentImg,
    tags: ['React', 'JavaScript', 'CSS'],
    links: {
      live: "https://example.com/unified-payment",
      source: "https://github.com/user/unified-payment"
    }
  }
];

export default projects;