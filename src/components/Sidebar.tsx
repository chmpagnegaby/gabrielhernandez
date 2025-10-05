import { useEffect, useLayoutEffect, useRef } from "react";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import {
  Github, Linkedin, Twitter, Instagram,
  ChevronRight, ChevronLeft,
  User, Briefcase, FolderGit2,
  GraduationCap, BadgeCheck, Phone, Code2,
} from "lucide-react";

const navigation = [
  { name: "Sobre mi",            href: "#about",          id: "about",          icon: User },
  { name: "Tecnologías",         href: "#skills",         id: "skills",         icon: Code2 },
  { name: "Mi experiencia",      href: "#experience",     id: "experience",     icon: Briefcase },
  { name: "Mis proyectos",       href: "#projects",       id: "projects",       icon: FolderGit2 },
  { name: "Educación",           href: "#education",      id: "education",      icon: GraduationCap },
  { name: "Certificaciones",     href: "#certifications", id: "certifications", icon: BadgeCheck },
  { name: "Contacto",            href: "#contact",        id: "contact",        icon: Phone },
];

const socialLinks = [
  { icon: Github,   href: "https://github.com/chmpagnegaby",                        label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/gabriel-hernandez-cardoso", label: "LinkedIn" },
  { icon: Twitter,  href: "https://x.com/GabrielHernandezCardoso",                  label: "X" },
  { icon: Instagram,href: "https://instagram.com/gabriel.hdezzz",                   label: "Instagram" },
];

type SidebarProps = {
  pinned: boolean;
  setPinned: (v: boolean) => void;
};

export function Sidebar({ pinned, setPinned }: SidebarProps) {
  // ids en el mismo orden que navigation
  const sections = ["about","skills","experience","projects","education","certifications","contact"];
  const active = useScrollSpy(sections, { offset: 112, viewportAhead: 0.28 });


  // --- Indicador animado (barra vertical que sigue al activo) ---
  const listRef = useRef<HTMLUListElement>(null);
  const itemRefs = useRef<Record<string, HTMLLIElement | null>>({});
  const indicatorRef = useRef<HTMLSpanElement>(null);

  // Recalcula posición/altura del indicador cuando cambia sección o tamaño
  useLayoutEffect(() => {
    const update = () => {
      const list = listRef.current;
      const indicator = indicatorRef.current;
      const target = active ? itemRefs.current[active] : null;
      if (!list || !indicator || !target) return;

      const listBox = list.getBoundingClientRect();
      const targetBox = target.getBoundingClientRect();
      const top = targetBox.top - listBox.top;
      const height = targetBox.height;

      // Usamos transform/height con transición (definida en clases)
      indicator.style.transform = `translateY(${Math.max(0, top)}px)`;
      indicator.style.height = `${height}px`;
      indicator.style.opacity = "1";
    };

    update();
    const ro = new ResizeObserver(update);
    if (listRef.current) ro.observe(listRef.current);
    window.addEventListener("resize", update);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", update);
    };
  }, [active, pinned]);

  return (
    <aside
      data-pinned={pinned}
      className={[
        "peer group fixed left-0 top-0 z-40 hidden h-screen lg:flex flex-col",
        "border-r border-border bg-background",
        "transition-[width] duration-300",
        pinned ? "lg:w-64" : "lg:w-16 hover:lg:w-64",
      ].join(" ")}
    >
      <div className="flex-1 overflow-y-auto px-3 py-4">
        {/* Header compacto */}
        <div className="mb-4 flex items-center gap-3">
          <div className="grid h-9 w-9 place-items-center rounded-md border border-border bg-card/50 text-sm font-semibold">
            GH
          </div>
          <div
            className={[
              "transition-opacity duration-200",
              pinned ? "opacity-100" : "opacity-0",
              "group-hover:opacity-100",
            ].join(" ")}
          >
            <div className="leading-tight text-sm font-bold text-foreground">Gabriel Hernández</div>
            <div className="leading-tight text-xs text-accent">Fullstack Jr.</div>
          </div>
        </div>

        {/* Botón pin/unpin */}
        <button
          type="button"
          onClick={() => setPinned(!pinned)}
          title={pinned ? "Desfijar barra" : "Fijar barra"}
          aria-pressed={pinned}
          className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:text-accent"
        >
          {pinned ? <ChevronLeft className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
        </button>

        {/* Navegación con indicador animado */}
        <nav className="mt-2">
          <ul ref={listRef} className="relative space-y-1.5 pl-1">
            {/* Indicador: barra a la izquierda que se mueve suave */}
            <span
              ref={indicatorRef}
              aria-hidden="true"
              className="pointer-events-none absolute left-0 top-0 w-[2px] rounded-full bg-accent opacity-0 transition-all duration-300"
              style={{ transform: "translateY(0px)", height: 0 }}
            />
            {navigation.map((item) => {
              const Icon = item.icon;
              const isActive = active === item.id;
              return (
                <li
                  key={item.id}
                  ref={(el) => (itemRefs.current[item.id] = el)}
                >
                  <a
                    href={item.href}
                    aria-current={isActive ? "page" : undefined}
                    className={[
                      "flex items-center gap-3 rounded-md px-2 py-2 transition-colors",
                      isActive ? "text-accent" : "text-muted-foreground hover:text-accent",
                    ].join(" ")}
                  >
                    <Icon className="h-5 w-5 shrink-0" />
                    <span
                      className={[
                        "text-xs font-bold uppercase tracking-widest",
                        "transition-opacity duration-200",
                        pinned ? "opacity-100" : "opacity-0",
                        "group-hover:opacity-100",
                      ].join(" ")}
                    >
                      {item.name}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="mt-4 flex-1" />

        {/* Socials */}
        <div className="flex items-center gap-2 pb-2">
          {socialLinks.map((s, i) => (
            <a
              key={i}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="grid h-9 w-9 place-items-center rounded-md border border-border text-muted-foreground transition-colors hover:text-accent"
              aria-label={s.label}
              title={s.label}
            >
              <s.icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </aside>
  );
}
