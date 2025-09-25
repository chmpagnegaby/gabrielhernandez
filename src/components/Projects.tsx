import { ExternalLink, Github, Star } from "lucide-react";

const projects = [
  {
    title: "Build a Spotify Connected App",
    description: "Video course that teaches how to build a web app with the Spotify Web API. Topics covered include the principles of REST APIs, user auth flows, Node, Express, React, Styled Components, and more.",
    image: "/images/course-card.png",
    technologies: ["React", "Node.js", "Express", "Spotify API"],
    links: [
      {
        type: "external",
        url: "https://www.newline.co/courses/build-a-spotify-connected-app",
        label: "Course"
      }
    ]
  },
  {
    title: "Spotify Profile",
    description: "Web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.",
    image: "/images/spotify-profile.png",
    technologies: ["React", "Express", "Spotify API", "Heroku"],
    links: [
      {
        type: "github",
        url: "https://github.com/bchiang7/spotify-profile",
        label: "696"
      },
      {
        type: "external",
        url: "https://spotify-profile.herokuapp.com/",
        label: "Demo"
      }
    ]
  },
  {
    title: "Halcyon Theme",
    description: "Minimal dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more.",
    image: "/images/halcyon.png",
    technologies: ["VS Code", "Sublime Text", "Atom", "iTerm"],
    links: [
      {
        type: "external",
        url: "https://marketplace.visualstudio.com/items?itemName=brittanychiang.halcyon-vscode",
        label: "100k+ Installs"
      },
      {
        type: "external",
        url: "https://halcyon-theme.netlify.app/",
        label: "Demo"
      }
    ]
  },
  {
    title: "brittanychiang.com (v4)",
    description: "An old portfolio site built with Gatsby with 6k+ stars and 3k+ forks",
    image: "/images/v4.png",
    technologies: ["Gatsby", "Styled Components", "Netlify"],
    links: [
      {
        type: "github",
        url: "https://github.com/bchiang7/v4",
        label: "8,069"
      },
      {
        type: "external",
        url: "https://v4.brittanychiang.com/",
        label: "Demo"
      }
    ]
  }
];

export function Projects() {
  return (
    <section id="projects" className="mb-24">
      <h2 className="section-title">Projects</h2>
      
      <div className="space-y-12">
        {projects.map((project, index) => (
          <div key={index} className="project-card group">
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="lg:w-1/3">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-lg border border-border"
                />
              </div>
              
              <div className="lg:w-2/3">
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center gap-4">
                  {project.links.map((link, linkIndex) => (
                    <a
                      key={linkIndex}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-accent hover:underline font-medium"
                    >
                      {link.type === "github" && <Github className="w-4 h-4" />}
                      {link.type === "external" && <ExternalLink className="w-4 h-4" />}
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-12">
        <a
          href="/archive"
          className="inline-flex items-center gap-2 text-accent hover:underline font-medium"
        >
          View Full Project Archive
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}