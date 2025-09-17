import { useEffect } from 'react';

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

export function scrollToSection(sectionId: string, path: string, setActiveSection: (id: string) => void, setIsMenuOpen?: (open: boolean) => void) {
  const element = document.getElementById(sectionId);
  if (element) {
    window.history.pushState({}, '', path);
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setActiveSection(sectionId);
    if (setIsMenuOpen) setIsMenuOpen(false);
  } else {
    window.location.href = path;
  }
}

export function useInitialHashScroll(setActiveSection: (id: string) => void) {
  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash) {
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setActiveSection(hash);
      }
    }
  }, [setActiveSection]);
}
