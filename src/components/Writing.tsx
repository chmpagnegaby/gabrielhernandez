import { ExternalLink } from "lucide-react";

const writings = [
  {
    year: "2024",
    title: "5 Common Accessibility Pitfalls and How to Avoid Them",
    url: "https://klaviyo.tech/5-common-accessibility-pitfalls-and-how-to-avoid-them-e316dfc55ff0",
    image: "/images/a11y.png",
    alt: "Accessibility icon"
  },
  {
    year: "2020",
    title: "Integrating Algolia Search with WordPress Multisite",
    url: "https://upstatement.com/blog/integrating-algolia-search-with-wordpress-multisite/",
    image: "/images/algolia-search.jpeg",
    alt: "Telescope"
  },
  {
    year: "2019",
    title: "Building a Headless Mobile App CMS From Scratch", 
    url: "https://upstatement.com/blog/building-a-headless-mobile-app-cms-from-scratch/",
    image: "/images/headless.jpeg",
    alt: "Headless horseman"
  }
];

export function Writing() {
  return (
    <section id="writing" className="mb-24">
      <h2 className="section-title">Writing</h2>
      
      <div className="space-y-8">
        {writings.map((article, index) => (
          <article key={index} className="group">
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-6 p-4 rounded-lg transition-all duration-300 hover:bg-card/50"
            >
              <div className="w-20 h-20 flex-shrink-0">
                <img
                  src={article.image}
                  alt={article.alt}
                  className="w-full h-full object-cover rounded-lg border border-border"
                />
              </div>
              
              <div className="flex-1">
                <div className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-2">
                  {article.year}
                </div>
                
                <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors flex items-start gap-2">
                  {article.title}
                  <ExternalLink className="w-4 h-4 mt-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
              </div>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}