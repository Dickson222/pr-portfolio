import dcpImg from '../images/dcp.png';
import nimecheImg from '../images/nimeche.png';
import brayvionImg from '../images/brayvion.png';
import shamadeanImg from '../images/shamadean.png';
import hsscImg from '../images/hssc.png';
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
    title: 'DCP Alternative Fuel Initiative',
    description:
      'A research website presenting a sourcing and pricing model for alternative fuels (palm kernel shell, refuse-derived fuel, agro-residue, scrap tyres) for cement plants in Nigeria, with roadmap, references and conclusion pages.',
    image: dcpImg,
    tags: ['HTML', 'CSS', 'JavaScript', 'Research'],
    links: { live: 'https://dcp-alternative-fuel-initiative.vercel.app/' },
  },
  {
    title: 'NIMECHE Awards',
    description:
      'An online awards and voting platform where visitors browse nominees across dozens of categories, view contestant profiles and cast their votes.',
    image: nimecheImg,
    tags: ['Voting Platform', 'Web App', 'Payments'],
    links: { live: 'https://nimech-award.vercel.app/' },
  },
  {
    title: 'Brayvion Engineering Limited',
    description:
      'A premium company website for a Lagos-based metal fabrication and structural steel firm, covering services, projects, products, team, blog and quote/service booking.',
    image: brayvionImg,
    tags: ['Business Website', 'Responsive Design', 'Lead Generation'],
    links: { live: 'https://brayvionengineering.com/' },
  },
  {
    title: 'Shamadean Imole Charity Foundation',
    description:
      'A website for a charity foundation focused on creating opportunities and transforming lives.',
    image: shamadeanImg,
    tags: ['NGO Website', 'Responsive Design'],
    links: { live: 'https://shamadean-imole-charity-foundation1-six.vercel.app/' },
  },
  {
    title: 'HSSC — High School STEM Championship',
    description:
      'A platform for secondary school science students to learn, compete and excel in STEM.',
    image: hsscImg,
    tags: ['Education', 'STEM', 'Web Platform'],
    links: { live: 'https://stem-psi.vercel.app/' },
  },
];

export default projects;
