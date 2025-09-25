import { useEffect } from "react";
import { Sidebar } from "@/components/Sidebar";
import { About } from "@/components/About"; 
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Writing } from "@/components/Writing";

const Index = () => {
  useEffect(() => {
    // Smooth scroll behavior for anchor links
    const handleScroll = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = target.getAttribute('href')?.slice(1);
        const element = document.getElementById(id || '');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    document.addEventListener('click', handleScroll);
    return () => document.removeEventListener('click', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-bg-dark">
      <Sidebar />
      
      <main className="ml-80 min-h-screen">
        <div className="max-w-4xl mx-auto px-8 py-24">
          <About />
          <Experience />
          <Projects />
          <Writing />
        </div>
      </main>
    </div>
  );
};

export default Index;
