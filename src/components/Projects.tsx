import { ExternalLink } from "lucide-react";

function DifficultyPill({ level }) {
  const cls =
    level === "Avanzado"
      ? "bg-red-500/10 text-red-300 border-red-500/20"
      : level === "Intermedio"
      ? "bg-yellow-500/10 text-yellow-300 border-yellow-500/20"
      : "bg-emerald-500/10 text-emerald-300 border-emerald-500/20";
  return (
    <span className={`text-xs px-2 py-1 rounded-full border ${cls}`}>
      {level}
    </span>
  );
}

export function Projects() {
  const project = {
    title: "Socials Chmpagne (MiniBlog)",
    date: "02/10/2025",
    difficulty: "Intermedio",
    description:
      "Mini red social full-stack con CRUD de posts y UI moderna. Objetivo: experimentar el ciclo completo (desarrollo local → despliegue en la nube).",
    technologies: [
      "React",
      "Tailwind",
      "Express",
      "PostgreSQL",
      "Neon",
      "Render",
      "Vercel",
    ],
    image:
      "https://placehold.co/600x400?text=Proyecto+Socials+Chmpagne", // placeholder
    links: {
      demo: "https://socials-chmpagne.vercel.app",
      api: "https://socialschmpagne.onrender.com",
      repo: "https://github.com/chmpagnegaby/SocialsChmpagne",
    },
  };

  return (
    
  <section>
    <h2 className="section-title">Mis proyectos</h2>
    <article className="experience-card overflow-hidden ">
      
      {/* Imagen clicable */}
      <a
        href={project.links.demo}
        target="_blank"
        rel="noopener noreferrer"
        className="block group"
      >
        <img
          src={project.image}
          alt={project.title}
          className="h-44 w-full object-cover transition duration-300 group-hover:opacity-90"
        />
      </a>

      {/* Contenido */}
      <div className="p-4 pb space-y-3">
        <div className="flex items-center gap-3">
          <h3 className="text-lg font-semibold text-foreground">
            {project.title}
          </h3>
          <DifficultyPill level={project.difficulty} />
        </div>

        <div className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
          Día realizado: {project.date}
        </div>

        <p className="text-muted-foreground leading-relaxed">
          {project.description}
        </p>

        {/* Tecnologías */}
        <div className="flex flex-wrap gap-2 pt-1">
          {project.technologies.map((t) => (
            <span key={t} className="tech-tag">
              {t}
            </span>
          ))}
        </div>

        {/* Enlaces */}
        <div className="flex flex-wrap gap-4 pt-2">
          {project.links.demo && (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-accent hover:underline"
            >
              Demo <ExternalLink className="w-4 h-4" />
            </a>
          )}
          {project.links.api && (
            <a
              href={project.links.api}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-accent hover:underline"
            >
              API <ExternalLink className="w-4 h-4" />
            </a>
          )}
          {project.links.repo && (
            <a
              href={project.links.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-accent hover:underline"
            >
              Código <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </article>

  </section>
  );
}
