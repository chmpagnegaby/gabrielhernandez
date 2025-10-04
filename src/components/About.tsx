export function About() {
  return (
    <section id="about" className="mb-24">
      <div className="prose prose-lg max-w-none">
       <h2 className="section-title">Sobre mi</h2>

        <p className="text-muted-foreground leading-relaxed mb-6">
          Soy un joven desarrollador muy ilusionado por seguir aprendiendo y 
          creciendo en el mundo del software. Me apasiona construir interfaces 
          limpias y funcionales, cuidando tanto el diseño como la calidad del código. 
          Aunque aún estoy al inicio de mi carrera, ya cuento con una base sólida en 
          tecnologías modernas de frontend y backend, y un gran compromiso con la mejora continua.
        </p>

        <p className="text-muted-foreground leading-relaxed mb-6">
          En el área de frontend tengo experiencia con{" "}
          <span className="text-accent font-medium">HTML, CSS, JavaScript y React</span>, 
          además de frameworks como{" "}
          <span className="text-accent font-medium">Astro</span> y conocimientos en{" "}
          <span className="text-accent font-medium">PHP</span>. 
          Actualmente también amplío mis habilidades con lenguajes como{" "}
          <span className="text-accent font-medium">C++, Java y Python</span>, 
          lo que me permite adaptarme con facilidad a distintos entornos.
        </p>

        <p className="text-muted-foreground leading-relaxed mb-6">
          En bases de datos he trabajado con{" "}
          <span className="text-accent font-medium">MariaDB, PostgreSQL, MySQL</span> y{" "}
          <span className="text-accent font-medium">MongoDB</span>, cubriendo tanto 
          relacionales como NoSQL. Además, tengo experiencia en{" "}
          <span className="text-accent font-medium">autenticación y seguridad</span>, 
          implementando flujos con tecnologías y librerías como{" "}
          <span className="text-accent font-medium">JWT, Passport.js, Clerk y BetterAuth</span>. 
          En casos prácticos he aplicado estas herramientas para manejar registro, login 
          con cookies, validación de rutas protegidas y gestión de roles de usuario.
        </p>

        <p className="text-muted-foreground leading-relaxed mb-6">
          También he trabajado con{" "}
          <span className="text-accent font-medium">Spring Boot</span>, desarrollando 
          APIs y aprendiendo sobre buenas prácticas de arquitectura en proyectos backend. 
          Esta combinación de experiencia me permite comprender tanto el lado del cliente 
          como el del servidor, lo cual es clave para integraciones completas y proyectos escalables.
        </p>

        <p className="text-muted-foreground leading-relaxed">
          Me considero una persona con iniciativa, pasión por la tecnología y capacidad 
          de aprendizaje constante. Como perfil junior, mi objetivo es aportar 
          motivación, curiosidad y compromiso, además de un conjunto de habilidades 
          versátiles que cualquier empresa valoraría: desde la construcción de 
          interfaces modernas hasta el diseño de bases de datos robustas y sistemas 
          de autenticación seguros.
        </p>
      </div>
    </section>
  );
}

import { ExternalLink } from "lucide-react";
