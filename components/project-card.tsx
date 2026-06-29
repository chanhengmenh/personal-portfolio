import Image from 'next/image'
import { ExternalLink } from 'lucide-react'

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
    <article className="group flex flex-col gap-4 rounded-xl border border-border bg-secondary/30 overflow-hidden transition-colors hover:bg-secondary/60">
      {imageUrl && (
        <div className="relative h-44 w-full">
          <Image src={imageUrl} alt={title} fill className="object-cover" />
        </div>
      )}
      <div className="flex flex-col gap-4 p-5">
      <div className="flex items-start justify-between gap-2">
        <h3 className="text-base font-semibold tracking-tight text-foreground">
          {title}
        </h3>
        <div className="flex shrink-0 gap-2">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-foreground"
              aria-label="GitHub"
            >
              <ExternalLink className="h-4 w-4" />
            </a>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-foreground"
              aria-label="Live demo"
            >
              <ExternalLink className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>

      <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>

      <div className="mt-auto flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-md border border-border bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground"
          >
            {tag}
          </span>
        ))}
      </div>
      </div>
    </article>
  )
}
