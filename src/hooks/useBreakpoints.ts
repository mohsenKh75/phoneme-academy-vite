import { useLayoutEffect, useState } from 'react';

type Breakpoint = 'sm' | 'md' | 'lg' | 'xl' | '2xl';

const breakpoints: Record<Breakpoint, string> = {
  sm: '(min-width: 640px)',
  md: '(min-width: 768px)',
  lg: '(min-width: 1084px)',
  xl: '(min-width: 1280px)',
  '2xl': '(min-width: 1536px)'
};
interface UseBreakpointReturnTypes {
  breakpoint: Breakpoint;
  isMobile: boolean;
}
export function useBreakpoint(): UseBreakpointReturnTypes {
  const getBreakpoint = (): Breakpoint => {
    if (window.matchMedia(breakpoints['2xl']).matches) return '2xl';
    if (window.matchMedia(breakpoints['xl']).matches) return 'xl';
    if (window.matchMedia(breakpoints['lg']).matches) return 'lg';
    if (window.matchMedia(breakpoints['md']).matches) return 'md';
    return 'sm';
  };

  const [breakpoint, setBreakpoint] = useState<Breakpoint>(() =>
    typeof window !== 'undefined' ? getBreakpoint() : 'sm'
  );

  useLayoutEffect(() => {
    const onResize = () => {
      const current = getBreakpoint();
      setBreakpoint((prev) => (prev !== current ? current : prev));
    };

    const mediaQList = Object.values(breakpoints).map((q) => window.matchMedia(q));

    mediaQList.forEach((q) => q.addEventListener('change', onResize));

    return () => {
      mediaQList.forEach((q) => q.removeEventListener('change', onResize));
    };
  }, []);
  const isMobile = breakpoint === 'md' || breakpoint === 'sm';
  return { breakpoint, isMobile };
}
