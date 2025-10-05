import { ExternalLink } from "lucide-react";

const experiences = [
  {
    period: "Marzo 2025 — Junio 2025",
    title: "Frontend Developer",
    company: "Filmer",
    companyUrl: "https://filmer.es/",
    description:
      "Formé parte del equipo de Filmer, una plataforma que conecta marcas con creadores UGC. Lideré el desarrollo frontend de páginas principales junto a un equipo multidisciplinar, aplicando buenas prácticas de UI/UX y rendimiento. Implementé seguridad y autenticación con JWT + cookies (rutas protegidas, validación de sesión) y colaboré en backend con sockets para chat en tiempo real y endpoints PUT/DELETE/PATCH para la gestión de datos.",
    technologies: ["React", "Astro", "Node.js", "PostgreSQL", "JWT", "WebSockets"],
  },
  {
    period: "Junio 2025 — Actualidad",
    title: "Fullstack Developer",
    company: "Cooperativa Monesterio",
    companyUrl: "https://coopsanisidro.com/",
    description:
      "Diseño y desarrollo de una aplicación interna para stock de almacén y RR. HH. con React, Node.js y PostgreSQL, optimizando procesos, trazabilidad e informes.",
    technologies: ["React", "Node.js", "PostgreSQL"],
  },
  {
    period: "Enero 2025 — Actualidad",
    title: "Responsable de Estrategia Digital",
    company: "Monesterio Calidad",
    companyUrl: "https://monesteriocalidad.es/",
    description:
      "Liderazgo digital en empresa familiar dedicada al ibérico. Impulso de SEO y creación de un Marketplace online para llevar el producto tradicional a nuevos mercados. Enfoque en conversión, posicionamiento y experiencia de compra.",
    technologies: ["Astro", "React", "Node.js", "PostgreSQL", "SEO"],
  },
  {
    period: "2024 — 2025",
    title: "Software Developer",
    company: "Nutrieco",
    companyUrl: "https://nutrieco.es/",
    description:
      "Aplicación de gestión veterinaria capaz de generar productos a partir de datos preparados, integrables en plataformas ganaderas. Desarrollada con Java, React y MySQL, priorizando escalabilidad y usabilidad.",
    technologies: ["Java", "React", "MySQL"],
  },
  {
    period: "2022 — Actualidad",
    title: "Responsable Digital y SEO",
    company: "Bar Leo by Agustín",
    companyUrl: "https://chmpagnegaby.github.io/Bar-Leo-By-AgustiN-PaginaWeb-QR/",
    description:
      "Responsable de visibilidad online: SEO, creación de QR con redirección a carta y desarrollo de la nueva web con sistema de reservas. Rol de liderazgo en la modernización tecnológica del restaurante.",
    technologies: ["SEO", "JavaScript", "React", "Node.js"],
  },
];

export function Experience() {
  return (
    <section id="experience" className="mb-24 mt-24">
      <h2 className="section-title">Experiencia</h2>

      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-card">
            <div className="absolute left-0 top-0 h-2 w-2 -translate-x-[5px] rounded-full bg-accent" />
            <div className="mb-2">
              <div className="mb-2 text-xs font-mono uppercase tracking-wider text-muted-foreground">
                {exp.period}
              </div>
              <h3 className="mb-1 text-lg font-semibold text-foreground">
                <a
                  href={exp.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-accent hover:underline"
                >
                  {exp.title} · {exp.company}
                  <ExternalLink className="h-4 w-4" />
                </a>
              </h3>
            </div>
            <p className="mb-4 leading-relaxed text-muted-foreground">{exp.description}</p>
            <div className="flex flex-wrap gap-2">
              {exp.technologies?.map((tech, i) => (
                <span key={i} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
