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

export function Education() {
  return (
    <section id="education" className="scroll-mt-24 mt-24">
      <h2 className="section-title">Educación</h2>

      {/* Pasado */}
      <div className="mt-6 space-y-12">
        {educationPast.map((edu, i) => (
          <div key={`past-${i}`} className="experience-card">
            <div className="absolute left-0 top-0 h-2 w-2 -translate-x-[5px] rounded-full bg-accent" />
            <div className="mb-2">
              <div className="mb-2 text-xs font-mono uppercase tracking-wider text-muted-foreground">
                {edu.period}
              </div>
              <h3 className="mb-1 text-lg font-semibold text-foreground">
                {edu.title} · {edu.place}
              </h3>
            </div>
            <p className="mb-4 leading-relaxed text-muted-foreground">{edu.description}</p>
          </div>
        ))}
      </div>

      {/* Más adelante */}
      <div className="mt-10">
        <h3 className="section-title">Más adelante</h3>
        <div className="space-y-12">
          {educationFuture.map((edu, i) => (
            <div key={`future-${i}`} className="experience-card">
              <div className="absolute left-0 top-0 h-2 w-2 -translate-x-[5px] rounded-full bg-accent" />
              <div className="mb-2">
                <div className="mb-2 text-xs font-mono uppercase tracking-wider text-muted-foreground">
                  {edu.period}
                </div>
                <h3 className="mb-1 text-lg font-semibold text-foreground">
                  {edu.title} · {edu.place}
                </h3>
              </div>
              <p className="mb-4 leading-relaxed text-muted-foreground">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
