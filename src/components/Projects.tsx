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
  const projects = [
    {
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
      image: "https://placehold.co/600x400?text=Proyecto+Socials+Chmpagne",
      links: {
        demo: "https://socials-chmpagne.vercel.app",
        api: "https://socialschmpagne.onrender.com",
        repo: "https://github.com/chmpagnegaby/SocialsChmpagne",
      },
    },
    {
      title: "Granadron",
      date: "05/07/2024",
      difficulty: "Intermedio",
      description:
        "Plataforma audiovisual profesional dedicada a la grabación con dron, fotografía aérea y producción de contenido promocional para eventos y marcas.",
      technologies: ["React", "Vite", "TailwindCSS", "Framer Motion", "Vercel"],
      image: "https://placehold.co/600x400?text=Granadron",
      links: {
        demo: "https://granadron.com",
        repo: "https://github.com/chmpagnegaby/granadron",
      },
    },
    {
      title: "Transportes Ángel Iglesias",
      date: "14/09/2024",
      difficulty: "Básico",
      description:
        "Página corporativa para empresa familiar de transporte y logística. Optimizada para SEO y con enfoque en la claridad, confianza y presentación de servicios.",
      technologies: ["Astro", "TailwindCSS", "Vercel", "SEO"],
      image: "https://placehold.co/600x400?text=Transportes+Ángel+Iglesias",
      links: {
        demo: "https://transportesangeliglesias.com",
        repo: "https://github.com/chmpagnegaby/transportesangeliglesias",
      },
    },
    {
      title: "CJ Barbershop",
      date: "18/02/2024",
      difficulty: "Básico",
      description:
        "Landing page moderna y minimalista para una barbería local. Incluye galería, horarios, mapa interactivo y estética industrial vintage adaptada a dispositivos móviles.",
      technologies: ["Astro", "TailwindCSS", "Vercel", "SEO"],
      image: "https://placehold.co/600x400?text=CJ+Barbershop",
      links: {
        demo: "https://cjbarbershop.com",
        repo: "https://github.com/chmpagnegaby/cjbarbershop",
      },
    },
    {
      title: "Monesterio Calidad",
      date: "27/10/2024",
      difficulty: "Intermedio",
      description:
        "E-commerce profesional desarrollado con PrestaShop para una marca familiar de productos ibéricos. Incluye gestión de catálogo, SEO, pasarela de pago y estrategias de marketing digital.",
      technologies: ["PrestaShop", "SEO", "HTML", "CSS", "Marketing Digital"],
      image: "https://placehold.co/600x400?text=Monesterio+Calidad",
      links: {
        demo: "https://monesteriocalidad.es",
      },
    },
  ];

  return (
    <section>
      <h2 className="section-title">Mis proyectos</h2>

      {/* Layout vertical (uno debajo de otro) */}
      <div className="flex flex-col gap-8">
        {projects.map((project) => (
          <article
            key={project.title}
            className="experience-card overflow-hidden"
          >
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
            <div className="p-4 space-y-3">
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
        ))}
      </div>
    </section>
  );
}
