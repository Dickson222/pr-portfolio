// Type declarations for React modules to fix TypeScript errors
// Note: With skipLibCheck: true, these declarations help TypeScript recognize the modules
// The actual types come from Next.js and React at runtime

// Global JSX namespace
declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
  interface Element extends React.ReactNode {}
}

declare module 'react' {
  // Minimal declarations - actual types come from Next.js
  export function createContext<T>(defaultValue: T): any;
  export function useContext<T>(context: any): T;
  export function useEffect(effect: () => void | (() => void), deps?: any[]): void;
  export function useState<T>(initial: T): [T, (value: T | ((prev: T) => T)) => void];
  export function useRef<T>(initialValue: T): { current: T };
  export type ReactNode = any;
  export namespace React {
    type ReactNode = any;
  }
}

declare module 'react/jsx-runtime' {
  const jsx: any;
  const jsxs: any;
  const Fragment: any;
  export { jsx, jsxs, Fragment };
}

// React Icons type declarations
declare module 'react-icons/fi' {
  import { FC, SVGProps } from 'react';
  export interface IconBaseProps extends SVGProps<SVGSVGElement> {
    className?: string;
    size?: string | number;
    title?: string;
  }
  export const FiBook: FC<IconBaseProps>;
  export const FiBriefcase: FC<IconBaseProps>;
  export const FiCode: FC<IconBaseProps>;
  export const FiFolder: FC<IconBaseProps>;
  export const FiMail: FC<IconBaseProps>;
  export const FiTool: FC<IconBaseProps>;
  export const FiClock: FC<IconBaseProps>;
  export const FiTarget: FC<IconBaseProps>;
  export const FiStar: FC<IconBaseProps>;
  export const FiMonitor: FC<IconBaseProps>;
  export const FiGithub: FC<IconBaseProps>;
  export const FiLinkedin: FC<IconBaseProps>;
  export const FiTwitter: FC<IconBaseProps>;
  export const FiHeart: FC<IconBaseProps>;
  export const FiMoon: FC<IconBaseProps>;
  export const FiSun: FC<IconBaseProps>;
}
