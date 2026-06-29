import { projectsData } from '@/lib/portfolio-data'
import { ProjectCard } from './project-card'

export function ProjectsSection() {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold tracking-tight text-foreground">Projects</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {projectsData.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </div>
  )
}
