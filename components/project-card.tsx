import Image from 'next/image'
import { ExternalLink, Github } from 'lucide-react'

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  githubUrl?: string
  liveUrl?: string
  imageUrl?: string
}

export function ProjectCard({ title, description, tags, githubUrl, liveUrl, imageUrl }: ProjectCardProps) {
  return (
    <article className="group flex flex-col rounded-xl glass-panel-subtle glass-interactive overflow-hidden border border-black/[0.06] dark:border-white/[0.08] relative">
      {imageUrl && (
        <div className="relative h-48 w-full overflow-hidden bg-secondary/40">
          <Image
            src={imageUrl}
            alt={title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-transparent to-transparent z-10 pointer-events-none" />
        </div>
      )}
      <div className="flex flex-col flex-1 gap-3.5 p-5 relative z-20">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-base font-semibold tracking-tight text-foreground group-hover:text-accent transition-colors">
            {title}
          </h3>
          <div className="flex shrink-0 gap-1.5">
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg glass-panel-subtle glass-interactive flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent/40"
                aria-label="View source on GitHub"
                title="View source on GitHub"
              >
                <Github className="h-4 w-4" aria-hidden="true" />
              </a>
            )}
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg glass-panel-subtle glass-interactive flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent/40"
                aria-label="Live demo"
                title="Open live demo"
              >
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </a>
            )}
          </div>
        </div>

        <p className="text-xs sm:text-sm leading-relaxed text-muted-foreground line-clamp-4">{description}</p>

        <div className="mt-auto pt-3 flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-lg border border-black/[0.06] dark:border-white/[0.08] bg-secondary/50 backdrop-blur-xs px-2.5 py-0.5 text-[11px] font-medium text-muted-foreground group-hover:text-foreground transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  )
}
