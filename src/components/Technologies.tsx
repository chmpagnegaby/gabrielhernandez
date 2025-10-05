// src/components/Technologies.tsx
import { useState } from "react";

type Tech = { key: string; label: string };

/** Mapa a Simple Icons (slug + color de marca) */
const ICONS: Record<string, { slug: string; color: string }> = {
  // Lenguajes
  javascript: { slug: "javascript", color: "F7DF1E" },
  typescript: { slug: "typescript", color: "3178C6" },
  python: { slug: "python", color: "3776AB" },
  java: { slug: "java", color: "007396" },
  cplusplus: { slug: "cplusplus", color: "00599C" },

  // Frontend
  react: { slug: "react", color: "61DAFB" },
  astro: { slug: "astro", color: "FF5D01" },
  vite: { slug: "vite", color: "646CFF" },
  tailwindcss: { slug: "tailwindcss", color: "06B6D4" },
  shadcn: { slug: "radixui", color: "161618" }, // aproximación
  "framer-motion": { slug: "framer", color: "0055FF" },

  // Backend
  nodejs: { slug: "nodedotjs", color: "339933" },
  express: { slug: "express", color: "000000" },
  jwt: { slug: "jsonwebtokens", color: "000000" },
  websocket: { slug: "socketdotio", color: "010101" },

  // Bases de datos
  postgresql: { slug: "postgresql", color: "4169E1" },
  mysql: { slug: "mysql", color: "4479A1" },

  // DevOps
  git: { slug: "git", color: "F05032" },
  "github-actions": { slug: "githubactions", color: "2088FF" },
  vercel: { slug: "vercel", color: "000000" },
  netlify: { slug: "netlify", color: "00C7B7" },

  // Otras
  "react-query": { slug: "reactquery", color: "FF4154" },
  seo: { slug: "google", color: "4285F4" },

  // En auge
  nextjs: { slug: "nextdotjs", color: "000000" },
  bun: { slug: "bun", color: "000000" },
  svelte: { slug: "svelte", color: "FF3E00" },
  solid: { slug: "solid", color: "2C4F7C" },
  qwik: { slug: "qwik", color: "000000" },
  remix: { slug: "remix", color: "000000" },
  prisma: { slug: "prisma", color: "2D3748" },
  trpc: { slug: "trpc", color: "2596BE" },
  supabase: { slug: "supabase", color: "3FCF8E" },
  docker: { slug: "docker", color: "2496ED" },
  kubernetes: { slug: "kubernetes", color: "326CE5" },
  playwright: { slug: "playwright", color: "2EAD33" },
  openai: { slug: "openai", color: "412991" },
};

const iconUrl = (key: string) => {
  const meta = ICONS[key];
  return meta ? `https://cdn.simpleicons.org/${meta.slug}/${meta.color}` : null;
};

function TechIcon({ keyName, label }: { keyName: string; label: string }) {
  const [error, setError] = useState(false);
  const src = iconUrl(keyName);

  if (!src || error) {
    return (
      <span className="grid h-4 w-4 place-items-center rounded-full bg-accent/20 text-[10px] font-bold text-accent">
        {label[0] || "?"}
      </span>
    );
  }
  return (
    <img
      src={src}
      alt={label}
      width={16}
      height={16}
      loading="lazy"
      className="h-4 w-4"
      onError={() => setError(true)}
    />
  );
}

function TechPill({ t }: { t: Tech }) {
  return (
    <span className="tech-tag inline-flex items-center gap-2">
      <TechIcon keyName={t.key} label={t.label} />
      {t.label}
    </span>
  );
}

export function Technologies() {
  // Puedes ajustar el stack principal si quieres incluir Python/Java aquí también:
  const stackPrincipal: Tech[] = [
    { key: "react", label: "React" },
    { key: "typescript", label: "TypeScript" },
    { key: "nodejs", label: "Node.js" },
    { key: "postgresql", label: "PostgreSQL" },
  ];

  const lenguajes: Tech[] = [
    { key: "typescript", label: "TypeScript" },
    { key: "javascript", label: "JavaScript" },
    { key: "python", label: "Python" },
    { key: "java", label: "Java" },
    { key: "cplusplus", label: "C++" },
  ];

  const frontend: Tech[] = [
    { key: "react", label: "React" },
    { key: "astro", label: "Astro" },
    { key: "vite", label: "Vite" },
    { key: "tailwindcss", label: "Tailwind CSS" },
    { key: "shadcn", label: "shadcn/ui" },
    { key: "framer-motion", label: "Framer Motion" },
  ];

  const backend: Tech[] = [
    { key: "nodejs", label: "Node.js" },
    { key: "express", label: "Express" },
    { key: "jwt", label: "JWT" },
    { key: "websocket", label: "WebSockets" },
  ];

  const bd: Tech[] = [
    { key: "postgresql", label: "PostgreSQL" },
    { key: "mysql", label: "MySQL" },
  ];

  const devops: Tech[] = [
    { key: "git", label: "Git" },
    { key: "github-actions", label: "GitHub Actions" },
    { key: "vercel", label: "Vercel" },
    { key: "netlify", label: "Netlify" },
  ];

  const auge: Tech[] = [
    { key: "nextjs", label: "Next.js" },
    { key: "bun", label: "Bun" },
    { key: "svelte", label: "Svelte" },
    { key: "solid", label: "Solid" },
    { key: "qwik", label: "Qwik" },
    { key: "remix", label: "Remix" },
    { key: "prisma", label: "Prisma" },
    { key: "trpc", label: "tRPC" },
    { key: "supabase", label: "Supabase" },
    { key: "docker", label: "Docker" },
    { key: "kubernetes", label: "Kubernetes" },
    { key: "playwright", label: "Playwright" },
    { key: "openai", label: "OpenAI" },
  ];

  const Section = ({ title, items }: { title: string; items: Tech[] }) => (
    <div className="project-card">
      <h3 className="text-lg font-semibold text-foreground">{title}</h3>
      <div className="mt-4 flex flex-wrap gap-2">
        {items.map((t) => (
          <TechPill key={t.key} t={t} />
        ))}
      </div>
    </div>
  );

  return (
    <section id="skills" className="scroll-mt-24 mt-16">
      <h2 className="section-title">Tecnologías</h2>

      {/* Stack destacado */}
      <div className="project-card">
        <p className="text-sm text-muted-foreground">Stack principal</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {stackPrincipal.map((t) => (
            <TechPill key={t.key} t={t} />
          ))}
        </div>
      </div>

      {/* Bloques */}
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <Section title="Lenguajes" items={lenguajes} />
        <Section title="Frontend" items={frontend} />
        <Section title="Backend" items={backend} />
        <Section title="Bases de datos" items={bd} />
        <Section title="DevOps / Deploy" items={devops} />
        <Section title="En auge" items={auge} />
      </div>
    </section>
  );
}
