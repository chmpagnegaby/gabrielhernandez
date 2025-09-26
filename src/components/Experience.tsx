import { ExternalLink } from "lucide-react";

const experiences = [
  {
    period: "Marzo 2025 — Junio 2025",
    title: "Frontend Developer",
    company: "Filmer",
    companyUrl: "https://filmer.com/",
    description:
      "Formé parte del equipo de **Filmer**, una plataforma que conecta marcas con creadores UGC. Lideré el desarrollo frontend de páginas principales junto a un equipo multidisciplinar, aplicando buenas prácticas de UI/UX y rendimiento. Implementé **seguridad y autenticación** con **JWT + cookies** (rutas protegidas, validación de sesión) y colaboré en backend con **sockets** para chat en tiempo real y endpoints **PUT/DELETE/PATCH** para la gestión de datos.",
    technologies: ["React", "Astro", "Node.js", "PostgreSQL", "JWT", "WebSockets"],
  },
  {
    period: "Junio 2025 — Actualidad",
    title: "Fullstack Developer",
    company: "Cooperativa Monesterio",
    companyUrl: "https://cooperativamonesterio.com/",
    description:
      "Diseño y desarrollo de una aplicación interna para **stock de almacén** y **RR. HH.** con **React, Node.js y PostgreSQL**, optimizando procesos, trazabilidad e informes.",
    technologies: ["React", "Node.js", "PostgreSQL"],
  },
  {
    period: "Enero 2025 — Actualidad",
    title: "Responsable de Estrategia Digital",
    company: "Monesterio Calidad",
    companyUrl: "https://monesteriocalidad.es/",
    description:
      "Liderazgo digital en empresa familiar dedicada al ibérico. Impulso de **SEO** y creación de un **Marketplace online** para llevar el producto tradicional a nuevos mercados. Enfoque en conversión, posicionamiento y experiencia de compra.",
    technologies: ["Astro", "React", "Node.js", "PostgreSQL", "SEO"],
  },
  {
    period: "2024 — 2025",
    title: "Software Developer",
    company: "Nutrieco",
    companyUrl: "https://nutrieco.com/",
    description:
      "Aplicación de **gestión veterinaria** capaz de generar productos a partir de datos preparados, integrables en plataformas ganaderas. Desarrollada con **Java, React y MySQL**, priorizando escalabilidad y usabilidad.",
    technologies: ["Java", "React", "MySQL"],
  },
  {
    period: "2022 — Actualidad",
    title: "Responsable Digital y SEO",
    company: "Bar Leo by Agustín",
    companyUrl: "https://chmpagnegaby.github.io/Bar-Leo-By-AgustiN-PaginaWeb-QR/",
    description:
      "Responsable de visibilidad online: **SEO**, creación de **QR** con redirección a carta y desarrollo de la **nueva web con sistema de reservas**. Rol de liderazgo en la modernización tecnológica del restaurante.",
    technologies: ["SEO", "JavaScript", "React", "Node.js"],
  },
];

const educationPast = [
  {
    period: "2016 — 2020",
    title: "Educación Secundaria Obligatoria (ESO)",
    place: "IES Maestro Juan Calero, Monesterio",
    description:
      "Bases académicas y competencias generales; punto de partida para la rama tecnológica.",
  },
  {
    period: "2020 — 2021",
    title: "Mantenimiento Electrónico (1º año)",
    place: "IES Heliópolis, Sevilla",
    description:
      "Fundamentos de sistemas eléctricos/electrónicos y resolución técnica de problemas.",
  },
  {
    period: "2021 — 2023",
    title: "Desarrollo de Aplicaciones Web (DAW)",
    place: "FESAC – SS.CC. San José, Sevilla",
    description:
      "Formación integral en frontend, backend y BBDD (HTML/CSS/JS, PHP, SQL). Enfoque práctico y orientado a producto.",
  },
];

const educationFuture = [
  {
    period: "2025 — 2026",
    title: "Curso de Especialización en Ciberseguridad",
    place: "Digitech (Remoto)",
    description:
      "Hardening, detección de vulnerabilidades, gestión de identidades, protección de datos y respuesta ante incidentes.",
  },
  {
    period: "2026 — 2027",
    title: "Curso de Especialización en IA y Big Data",
    place: "Digitech (Remoto)",
    description:
      "Fundamentos de IA aplicada, pipelines de datos y analítica avanzada para casos de uso reales en empresa.",
  },
];

export function Experience() {
  return (
    <section id="experience" className="mb-24">
      <h2 className="section-title">Experiencia</h2>

      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-card">
            <div className="absolute left-0 top-0 w-2 h-2 bg-accent rounded-full -translate-x-[5px]" />
            <div className="mb-2">
              <div className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-2">
                {exp.period}
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-1">
                <a
                  href={exp.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-accent hover:underline"
                >
                  {exp.title} · {exp.company}
                  <ExternalLink className="w-4 h-4" />
                </a>
              </h3>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">{exp.description}</p>
            <div className="flex flex-wrap gap-2">
              {exp.technologies?.map((tech, techIndex) => (
                <span key={techIndex} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Educación */}
      <div className="mt-24">
        <h2 className="section-title">Educación</h2>

        {/* Pasado */}
        <div className="space-y-12 mt-6">
          {educationPast.map((edu, index) => (
            <div key={`past-${index}`} className="experience-card">
              <div className="absolute left-0 top-0 w-2 h-2 bg-accent rounded-full -translate-x-[5px]" />
              <div className="mb-2">
                <div className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-2">
                  {edu.period}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  {edu.title} · {edu.place}
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">{edu.description}</p>
            </div>
          ))}
        </div>

        {/* Más adelante */}
        <div className="mt-10">
          <h3 className="section-title">
            Más adelante
          </h3>
          <div className="space-y-12">
            {educationFuture.map((edu, index) => (
              <div key={`future-${index}`} className="experience-card">
                <div className="absolute left-0 top-0 w-2 h-2 bg-accent rounded-full -translate-x-[5px]" />
                <div className="mb-2">
                  <div className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-2">
                    {edu.period}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    {edu.title} · {edu.place}
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">{edu.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-12">

      </div>
    </section>
  );
}
