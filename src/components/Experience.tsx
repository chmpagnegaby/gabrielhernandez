import { ExternalLink } from "lucide-react";

const experiences = [
  {
    period: "2024 — Present",
    title: "Senior Frontend Engineer, Accessibility",
    company: "Klaviyo",
    companyUrl: "https://www.klaviyo.com/",
    description: "Build and maintain critical components used to construct Klaviyo's frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility.",
    technologies: ["JavaScript", "TypeScript", "React", "Storybook"],
  },
  {
    period: "2018 — 2024",
    title: "Lead Engineer • Senior Engineer",
    company: "Upstatement",
    companyUrl: "https://upstatement.com/",
    description: "Build, style, and ship high-quality websites, design systems, mobile apps, and digital experiences for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more. Provide leadership within engineering department through close collaboration, knowledge shares, and mentorship.",
    technologies: ["React", "GSAP", "WordPress", "TypeScript"],
  },
  {
    period: "2017 — 2018",
    title: "UI Engineer Co-op",
    company: "Apple",
    companyUrl: "https://www.apple.com/",
    description: "Developed and shipped highly interactive web applications for Apple Music using Ember.js. Built and shipped the Apple Music Extension within Facebook Messenger leveraging third-party APIs, OAuth 2.0, and JavaScript SDK.",
    technologies: ["Ember", "JavaScript", "SCSS", "Web Audio API"],
    links: [
      {
        title: "MusicKit JS",
        url: "https://developer.apple.com/documentation/musickitjs"
      }
    ]
  },
  {
    period: "2016 — 2017",
    title: "Studio Developer",
    company: "Scout",
    companyUrl: "https://scout.camd.northeastern.edu/",
    description: "Collaborated with a team of three designers to build a marketing website and e-commerce platform for blistabloc, an ambitious startup originating from Northeastern's IDEA venture accelerator program. Built out a cross-platform mobile application and web platform for the team at Pbjtime, an existing business aiming to improve communication for after-school programs with parents.",
    technologies: ["Jekyll", "SCSS", "JavaScript", "Liquid"],
  },
  {
    period: "2016",
    title: "Software Engineer Co-op",
    company: "Starry",
    companyUrl: "https://starry.com/",
    description: "Worked with the UI team to engineer and improve major features of Starry's customer-facing Android app.",
    technologies: ["Cordova", "Backbone", "JavaScript", "CSS"],
    links: [
      {
        title: "Android App",
        url: "https://play.google.com/store/apps/details?id=com.starry.management&hl=en_US&gl=US"
      },
      {
        title: "ScreenTime 2.0",
        url: "https://starry.com/blog/product/whats-new-screentime-just-got-better-for-parents"
      }
    ]
  },
  {
    period: "2014 — 2015",
    title: "Creative Technologist Co-op",
    company: "MullenLowe U.S.",
    companyUrl: "https://us.mullenlowe.com/",
    description: "Developed, maintained, and shipped production code for client websites. Clients included JetBlue, Lovesac, U.S. Cellular, U.S. Department of Defense, and more.",
    technologies: ["HTML", "CSS", "JavaScript", "jQuery"],
  },
];

export function Experience() {
  return (
    <section id="experience" className="mb-24">
      <h2 className="section-title">Experience</h2>
      
      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-card">
            <div className="absolute left-0 top-0 w-2 h-2 bg-accent rounded-full -translate-x-[5px]"></div>
            
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
            
            <p className="text-muted-foreground leading-relaxed mb-4">
              {exp.description}
            </p>
            
            {exp.links && (
              <div className="mb-4">
                {exp.links.map((link, linkIndex) => (
                  <a
                    key={linkIndex}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-accent hover:underline mr-4"
                  >
                    {link.title}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                ))}
              </div>
            )}
            
            <div className="flex flex-wrap gap-2">
              {exp.technologies.map((tech, techIndex) => (
                <span key={techIndex} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-12">
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-accent hover:underline font-medium"
        >
          View Full Résumé
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}