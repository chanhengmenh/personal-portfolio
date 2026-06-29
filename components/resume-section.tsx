import Image from 'next/image'
import { BookOpen, Briefcase, Code2, Download, ExternalLink, Star } from 'lucide-react'
import { resumeData, skillsData, extracurricularData } from '@/lib/portfolio-data'

interface ResumeSectionProps {
  data?: typeof resumeData
}

export function ResumeSection({ data = resumeData }: ResumeSectionProps) {
  return (
    <div className="space-y-8 md:space-y-10">
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">Resume</h2>
          <a
            href="/resume.pdf"
            download="Chanheng_Menh_Resume.pdf"
            className="flex items-center gap-2 text-sm text-accent border border-accent px-3 py-1.5 rounded hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            <Download className="w-4 h-4" />
            Download CV
          </a>
        </div>
        <div className="w-10 h-1 bg-accent rounded-full mb-6" />
      </div>

      {/* Education */}
      <div>
        <div className="flex items-center gap-2 md:gap-3 mb-6">
          <BookOpen className="w-5 h-5 md:w-6 md:h-6 text-accent" />
          <h3 className="text-xl md:text-2xl font-bold text-foreground">Education</h3>
        </div>
        <div className="space-y-4">
          {data.education.map((item, index) => (
            <div key={index} className="relative pl-5 md:pl-6 pb-6 border-l-2 border-border last:pb-0">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-accent" />
              <div className="flex items-center gap-2 mb-2">
                {item.schoolUrl ? (
                  <a href={item.schoolUrl} target="_blank" rel="noopener noreferrer" className="text-base md:text-lg font-semibold text-foreground hover:text-accent transition-colors">
                    {item.title}
                  </a>
                ) : (
                  <h4 className="text-base md:text-lg font-semibold text-foreground">{item.title}</h4>
                )}
              </div>
              <p className="text-xs md:text-sm text-accent mb-2">{item.period}</p>
              <div className="flex items-start gap-2 mb-2">
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                {item.degreeUrl && (
                  <a href={item.degreeUrl} target="_blank" rel="noopener noreferrer" className="text-accent hover:text-foreground transition-colors flex-shrink-0 mt-0.5">
                    <ExternalLink className="w-3 h-3 md:w-4 md:h-4" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Experience */}
      <div>
        <div className="flex items-center gap-2 md:gap-3 mb-6">
          <Briefcase className="w-5 h-5 md:w-6 md:h-6 text-accent" />
          <h3 className="text-xl md:text-2xl font-bold text-foreground">Experience</h3>
        </div>
        <div className="space-y-4">
          {data.experience.map((item, index) => (
            <div key={index} className="relative pl-5 md:pl-6 pb-6 border-l-2 border-border last:pb-0">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-accent" />
              <h4 className="text-base md:text-lg font-semibold text-foreground mb-2">{item.title}</h4>
              {item.company && (
                item.companyUrl ? (
                  <a href={item.companyUrl} target="_blank" rel="noopener noreferrer" className="text-xs md:text-sm text-muted-foreground hover:text-accent transition-colors mb-1 inline-block">
                    {item.company}
                  </a>
                ) : (
                  <p className="text-xs md:text-sm text-muted-foreground mb-1">{item.company}</p>
                )
              )}
              <p className="text-xs md:text-sm text-accent mb-2">{item.period}</p>
              <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Skills */}
      <div>
        <div className="flex items-center gap-2 md:gap-3 mb-6">
          <Code2 className="w-5 h-5 md:w-6 md:h-6 text-accent" />
          <h3 className="text-xl md:text-2xl font-bold text-foreground">Skills</h3>
        </div>
        <div className="space-y-4">
          {Object.entries(skillsData).map(([category, items], index) => (
            <div key={index} className="relative pl-5 md:pl-6 pb-6 border-l-2 border-border last:pb-0">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-accent" />
              <h4 className="text-base md:text-lg font-semibold text-foreground mb-2">
                {category === 'aiMl' ? 'AI / ML' : category.charAt(0).toUpperCase() + category.slice(1)}
              </h4>
              <div className="flex flex-wrap gap-2">
                {items.map((skill, i) => (
                  <span key={i} className="flex items-center gap-1.5 text-xs md:text-sm text-muted-foreground px-2 py-1 rounded border border-border">
                    {skill.icon && (
                      <Image
                        src={skill.icon}
                        alt={skill.name}
                        width={16}
                        height={16}
                        className="object-contain"
                      />
                    )}
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Icon carousel */}
        {(() => {
          const icons = Object.values(skillsData)
            .flat()
            .filter((s): s is { name: string; icon: string } => !!s.icon)
            .filter((s, i, arr) => arr.findIndex(x => x.icon === s.icon) === i)
          const doubled = [...icons, ...icons]
          return (
            <div className="mt-8 overflow-hidden rounded-lg border border-border bg-card py-4">
              <div className="flex animate-marquee gap-6 w-max">
                {doubled.map((skill, i) => (
                  <div key={i} className="flex flex-col items-center gap-1.5 px-3">
                    <div className="bg-white rounded-md p-1.5 flex items-center justify-center">
                      <Image
                        src={skill.icon}
                        alt={skill.name}
                        width={28}
                        height={28}
                        className="object-contain"
                      />
                    </div>
                    <span className="text-[10px] text-muted-foreground whitespace-nowrap">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          )
        })()}
      </div>

      {/* Extracurricular & Leadership */}
      <div>
        <div className="flex items-center gap-2 md:gap-3 mb-6">
          <Star className="w-5 h-5 md:w-6 md:h-6 text-accent" />
          <h3 className="text-xl md:text-2xl font-bold text-foreground">Extracurricular &amp; Leadership</h3>
        </div>
        <div className="space-y-4">
          {extracurricularData.map((item, index) => (
            <div key={index} className="relative pl-5 md:pl-6 pb-6 border-l-2 border-border last:pb-0">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-accent" />
              <h4 className="text-base md:text-lg font-semibold text-foreground mb-1">{item.title}</h4>
              <p className="text-xs md:text-sm text-muted-foreground mb-1">{item.organization}</p>
              <p className="text-xs md:text-sm text-accent mb-2">{item.period}</p>
              <ul className="space-y-1">
                {item.description.map((point, i) => (
                  <li key={i} className="text-xs md:text-sm text-muted-foreground leading-relaxed flex gap-2">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-accent flex-shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}
