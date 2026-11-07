import { projectsData } from '@/lib/portfolio-data'
import { ProjectCard } from './project-card'

export function ProjectsSection() {
  return (
    <div className="space-y-8 md:space-y-10">
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Projects</h2>
        <div className="w-12 h-1 bg-gradient-to-r from-accent to-accent/30 rounded-full mb-6 shadow-xs shadow-accent/40" />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {projectsData.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </div>
  )
}
