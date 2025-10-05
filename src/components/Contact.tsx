import { useState } from "react";
import { Phone, Mail, MessageCircle } from "lucide-react";

export function Contact() {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const tel = "+34692607795";
  const email = "hcgabriel7@gmail.com";
  const whatsapp = "34692607795";

  const mailto = () =>
    `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
  const wa = () =>
    `https://wa.me/${whatsapp}?text=${encodeURIComponent(message || "¡Hola! Me gustaría hablar contigo.")}`;

  return (
    <section id="contact" className="scroll-mt-24 mt-16">
      <h2 className="section-title">Contacto</h2>

      <div className="grid gap-6 md:grid-cols-3">
        {/* Llamada */}
        <div className="project-card">
          <h3 className="text-lg font-semibold text-foreground">¿Prefieres llamada?</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Atención directa y rápida. Disponible en horario laboral.
          </p>
          <div className="mt-4">
            <a
              href={`tel:${tel}`}
              className="inline-flex items-center gap-2 rounded-md border border-border bg-card/50 px-3 py-2 text-sm text-foreground transition-colors hover:bg-card"
            >
              <Phone className="h-4 w-4" /> Llámame
            </a>
          </div>
        </div>

        {/* Email */}
        <div className="project-card md:col-span-2">
          <h3 className="text-lg font-semibold text-foreground">Enviar correo</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Completa el asunto y tu mensaje. Se abrirá tu cliente de correo.
          </p>

          <form
            className="mt-4 grid gap-3"
            onSubmit={(e) => {
              e.preventDefault();
              window.location.href = mailto();
            }}
          >
            <div>
              <label className="text-xs text-muted-foreground">Asunto</label>
              <input
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none ring-0 focus:border-accent"
                placeholder="Consulta / Propuesta / Presupuesto…"
              />
            </div>
            <div>
              <label className="text-xs text-muted-foreground">Mensaje</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
                className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:border-accent"
                placeholder="Cuéntame brevemente tu necesidad."
              />
            </div>
            <div className="mt-1">
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-md border border-border bg-card/50 px-3 py-2 text-sm text-foreground transition-colors hover:bg-card"
              >
                <Mail className="h-4 w-4" /> Enviar correo
              </button>
            </div>
          </form>
        </div>

        {/* WhatsApp */}
        <div className="project-card md:col-span-3">
          <h3 className="text-lg font-semibold text-foreground">Hablar por WhatsApp</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Mensaje directo a mi número. Respondo lo antes posible.
          </p>
          <div className="mt-4">
            <a
              href={wa()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-card/50 px-3 py-2 text-sm text-foreground transition-colors hover:bg-card"
            >
              <MessageCircle className="h-4 w-4" /> Abrir WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
