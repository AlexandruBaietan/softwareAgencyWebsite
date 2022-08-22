import React, { useCallback, useEffect, useState } from "react";

interface ScrollValue {
  scrollY: number;
}

export const ScollContext = React.createContext<ScrollValue>({
  scrollY: 0,
});

const ScrollObserver: React.FC = ({ children }) => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = useCallback(() => setScrollY(window.scrollY), []);

  useEffect(() => {
    document.addEventListener("scroll", handleScroll, { passive: true });
    return () => document.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);
  return (
    <ScollContext.Provider value={{ scrollY }}>
      {children}
    </ScollContext.Provider>
  );
};

export default ScrollObserver;
