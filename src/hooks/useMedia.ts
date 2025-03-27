import { useState, useEffect } from "react";

export function useMedia(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [matches, query]);

  return matches;
}

export const useIsMobile = () => useMedia("(max-width: 600px)");
export const useIsTablet = () => useMedia("(max-width: 900px)");
export const useIsDesktop = () => useMedia("(min-width: 901px)");
