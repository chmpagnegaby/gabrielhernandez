import { useEffect, useState } from "react";

export function useScrollSpy(sectionIds: string[], offset: number = 100) {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset;

      // Find the current section
      let currentSection = "";
      
      for (const sectionId of sectionIds) {
        const element = document.getElementById(sectionId);
        if (element) {
          const elementTop = element.offsetTop;
          const elementHeight = element.offsetHeight;
          
          if (scrollPosition >= elementTop && scrollPosition < elementTop + elementHeight) {
            currentSection = sectionId;
            break;
          }
        }
      }

      // If we're at the top, default to the first section
      if (scrollPosition < 200) {
        currentSection = sectionIds[0];
      }

      setActiveSection(currentSection);
    };

    // Initial check
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionIds, offset]);

  return activeSection;
}