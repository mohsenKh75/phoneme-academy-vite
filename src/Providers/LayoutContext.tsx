import { createContext, useContext, useEffect, useLayoutEffect, useState } from 'react';
import { useBreakpoint } from '@/hooks/useBreakpoints';

type LayoutContextType = {
  isSidebarOpen: boolean;
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  elementXSpacing: string;
  isMobile: boolean;
};

const LayoutContext = createContext<LayoutContextType | undefined>(undefined);

export const LayoutProvider = ({ children }: { children: React.ReactNode }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { breakpoint, isMobile } = useBreakpoint();
  const [elementXSpacing, setElementXSpacing] = useState('112px');

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (isSidebarOpen) {
      setElementXSpacing('267px');
    } else {
      timeoutId = setTimeout(() => setElementXSpacing('112px'), 300);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [isSidebarOpen]);

  useLayoutEffect(() => {
    if (breakpoint === 'xl') {
      setIsSidebarOpen(true);
    }
  }, [breakpoint]);

  return (
    <LayoutContext.Provider value={{ isSidebarOpen, setIsSidebarOpen, elementXSpacing, isMobile }}>
      {children}
    </LayoutContext.Provider>
  );
};

export const useLayout = () => {
  const context = useContext(LayoutContext);

  if (!context) {
    throw new Error('useLayout must be used within a LayoutProvider');
  }
  return context;
};
