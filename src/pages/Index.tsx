import { useEffect, useState } from "react";
import { Technologies } from "@/components/Technologies";
import { Sidebar } from "@/components/Sidebar";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Education } from "@/components/Education";
import { Certifications } from "@/components/Certifications";
import { Contact } from "@/components/Contact";
import { CursorGlow } from "@/components/CursorGlow";

const Index = () => {
  // smooth scroll (igual que antes)
  useEffect(() => {
    const handleScroll = (e: Event) => {
      const t = e.target as HTMLAnchorElement;
      if (t.tagName === "A" && t.getAttribute("href")?.startsWith("#")) {
        e.preventDefault();
        const id = t.getAttribute("href")?.slice(1);
        const el = id ? document.getElementById(id) : null;
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }
    };
    document.addEventListener("click", handleScroll);
    return () => document.removeEventListener("click", handleScroll);
  }, []);

  // pin del rail (persistente)
  const [pinned, setPinned] = useState(false);
  useEffect(() => {
    const raw = localStorage.getItem("sidebar:pinned");
    if (raw) setPinned(raw === "1");
  }, []);
  useEffect(() => {
    localStorage.setItem("sidebar:pinned", pinned ? "1" : "0");
  }, [pinned]);

  return (
    <div className="min-h-screen bg-background">
      <CursorGlow />
      <Sidebar pinned={pinned} setPinned={setPinned} />

      <main
        className={[
          "min-h-screen px-8 py-24",
          "transition-[padding] duration-300",
          "lg:pl-16",
          "peer-hover:lg:pl-64",
          pinned ? "lg:pl-64" : "",
        ].join(" ")}
      >
        <div className="mx-auto max-w-4xl">
          <About />
          <Technologies/>
          <Experience />
          <Projects />

          {/* Aquí lo nuevo, en este orden */}
          <Education />
          <Certifications />



          <Contact />
        </div>
      </main>
    </div>
  );
};

export default Index;
