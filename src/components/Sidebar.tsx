import { Github, Linkedin, Twitter, Instagram, ExternalLink } from "lucide-react";
import { useScrollSpy } from "@/hooks/useScrollSpy";

const navigation = [
  { name: "About", href: "#about", id: "about" },
  { name: "Experience", href: "#experience", id: "experience" },
  { name: "Projects", href: "#projects", id: "projects" },
];

const socialLinks = [
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
];

export function Sidebar() {
  const activeSection = useScrollSpy(["about", "experience", "projects"]);

  return (
    <aside className="fixed left-0 top-0 z-40 h-screen w-80 bg-background border-r border-border flex flex-col">
      <div className="flex-1 flex flex-col justify-between p-8">
        {/* Header */}
        <div>
          <div className="mb-4">
            <h1 className="text-4xl font-bold text-foreground mb-2">
              Brittany Chiang
            </h1>
            <h2 className="text-xl font-medium text-accent mb-4">
              Front End Engineer
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              I build accessible, pixel-perfect digital experiences for the web.
            </p>
          </div>

          {/* Navigation */}
          <nav className="mt-12">
            <ul className="space-y-4">
              {navigation.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className={`nav-link block py-2 uppercase tracking-widest text-xs font-bold transition-all duration-300 ${
                      activeSection === item.id 
                        ? "active text-accent" 
                        : "text-muted-foreground hover:text-accent"
                    }`}
                  >
                    <span className="relative">
                      {item.name}
                      <span 
                        className={`absolute left-0 bottom-0 h-[2px] bg-accent transition-all duration-300 ${
                          activeSection === item.id ? "w-full" : "w-0"
                        }`}
                      />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Social Links */}
        <div className="flex space-x-4">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors"
              aria-label={social.label}
            >
              <social.icon className="w-5 h-5" />
            </a>
          ))}
        </div>
      </div>
    </aside>
  );
}