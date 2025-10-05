// src/hooks/useScrollSpy.ts
import { useEffect, useState } from "react";

type Options = {
  /** Pixeles a sumar al scroll para decidir la sección activa (compensa headers/sticky paddings) */
  offset?: number;
  /** Fracción de la altura de viewport que adelantamos (0..1). Por defecto 0.25 */
  viewportAhead?: number;
};

export function useScrollSpy(ids: string[], opts: Options = {}) {
  const { offset = 96, viewportAhead = 0.25 } = opts;
  const [activeId, setActiveId] = useState<string>(ids[0] ?? "");

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY + offset + window.innerHeight * viewportAhead;
      const doc = document.documentElement;
      const atBottom =
        window.scrollY + window.innerHeight >= (doc.scrollHeight - 2);

      // Si estás al fondo, activa la última sección renderizada
      if (atBottom) {
        setActiveId(ids[ids.length - 1] ?? "");
        return;
      }

      let current = ids[0] ?? "";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top + window.scrollY;
        if (top <= y) current = id;
        else break; // ids deben ir en el mismo orden vertical que en la página
      }
      setActiveId(current);
    };

    onScroll(); // inicial
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ids.join(","), offset, viewportAhead]);

  return activeId;
}
