// src/components/Certifications.tsx
import { BadgeCheck } from "lucide-react";

export function Certifications() {
  return (
    <section id="certifications" className="scroll-mt-24 mt-16">
      <h2 className="section-title">Certificaciones oficiales</h2>

      <article className="project-card">
        <div className="flex items-start gap-3">
          <BadgeCheck className="h-5 w-5 text-accent mt-0.5" />
          <div>
            <h3 className="text-lg font-semibold text-foreground">Próximas certificaciones</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Actualmente estoy preparándome para obtener varias certificaciones oficiales que refuercen mi perfil técnico
              y acrediten mis competencias. Actualizaré esta sección en cuanto disponga de las credenciales verificables.
            </p>

            {/* (Opcional) Pequeño “status” sutil */}
            <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-3 py-1 text-xs text-foreground">
              <span className="inline-block h-2 w-2 rounded-full bg-accent" />
              En preparación
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}
