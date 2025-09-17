import { useEffect } from 'react';

/**
 * Custom hook for scroll spy functionality.
 * Updates the active section based on scroll position.
 * @param sectionIds Array of section IDs to observe
 * @param setActiveSection Function to update the active section
 * @param offset Offset in pixels for header height (default: 100)
 */
export function useScrollSpy(sectionIds: string[], setActiveSection: (id: string) => void, offset: number = 100) {
  useEffect(() => {
    function handleScroll() {
      const scrollPosition = window.scrollY + offset;
      let found = false;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sectionIds[i]);
          found = true;
          break;
        }
      }
      if (!found && sectionIds.length > 0) {
        setActiveSection(sectionIds[0]); // fallback to first section
      }
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionIds, setActiveSection, offset]);
}
