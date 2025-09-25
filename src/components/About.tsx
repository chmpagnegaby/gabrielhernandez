export function About() {
  return (
    <section id="about" className="mb-24">
      <div className="prose prose-lg max-w-none">
        <p className="text-muted-foreground leading-relaxed mb-6">
          I'm a developer passionate about crafting accessible, pixel-perfect user 
          interfaces that blend thoughtful design with robust engineering. My favorite 
          work lies at the intersection of design and development, creating experiences 
          that not only look great but are meticulously built for performance and usability.
        </p>
        
        <p className="text-muted-foreground leading-relaxed mb-6">
          Currently, I'm a Senior Front-End Engineer at{" "}
          <a 
            href="https://www.klaviyo.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-accent hover:underline inline-flex items-center gap-1"
          >
            Klaviyo
            <ExternalLink className="w-3 h-3" />
          </a>
          , specializing in accessibility. I contribute to the creation and maintenance 
          of UI components that power Klaviyo's frontend, ensuring our platform meets 
          web accessibility standards and best practices to deliver an inclusive user experience.
        </p>
        
        <p className="text-muted-foreground leading-relaxed mb-6">
          In the past, I've had the opportunity to develop software across a variety 
          of settings — from{" "}
          <a 
            href="https://us.mullenlowe.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-accent hover:underline inline-flex items-center gap-1"
          >
            advertising agencies
            <ExternalLink className="w-3 h-3" />
          </a>{" "}
          and{" "}
          <a 
            href="https://www.apple.com/apple-music/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-accent hover:underline inline-flex items-center gap-1"
          >
            large corporations
            <ExternalLink className="w-3 h-3" />
          </a>{" "}
          to{" "}
          <a 
            href="https://starry.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-accent hover:underline inline-flex items-center gap-1"
          >
            start-ups
            <ExternalLink className="w-3 h-3" />
          </a>{" "}
          and{" "}
          <a 
            href="https://upstatement.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-accent hover:underline inline-flex items-center gap-1"
          >
            small digital product studios
            <ExternalLink className="w-3 h-3" />
          </a>
          . Additionally, I also released a{" "}
          <a 
            href="https://www.newline.co/courses/build-a-spotify-connected-app" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-accent hover:underline inline-flex items-center gap-1"
          >
            comprehensive video course
            <ExternalLink className="w-3 h-3" />
          </a>{" "}
          a few years ago, guiding learners through building a web app with the Spotify API.
        </p>
        
        <p className="text-muted-foreground leading-relaxed">
          In my spare time, I'm usually climbing, playing tennis, hanging out with my 
          wife and two cats, or running around Hyrule searching for{" "}
          <span className="text-accent font-medium">Korok seeds</span>.
        </p>
      </div>
    </section>
  );
}

import { ExternalLink } from "lucide-react";