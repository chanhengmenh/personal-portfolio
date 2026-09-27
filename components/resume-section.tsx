'use client'

import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import Image from 'next/image'
import {
  BookOpen,
  Briefcase,
  Code2,
  Download,
  ExternalLink,
  Star,
  Globe,
  Eye,
  Bot,
  Database,
  ShieldCheck,
  Boxes,
  GitFork,
  Layers,
  Award,
  X,
  ZoomIn,
} from 'lucide-react'
import { resumeData, skillsData, extracurricularData } from '@/lib/portfolio-data'

function getSkillFallbackIcon(name: string) {
  const lower = name.toLowerCase()
  if (lower.includes('api') || lower.includes('rest')) {
    return <Globe className="w-6 h-6 text-neutral-800" />
  }
  if (lower.includes('vision')) {
    return <Eye className="w-6 h-6 text-neutral-800" />
  }
  if (lower.includes('nlp') || lower.includes('language')) {
    return <Bot className="w-6 h-6 text-neutral-800" />
  }
  if (lower.includes('dynamodb') || lower.includes('database')) {
    return <Database className="w-6 h-6 text-neutral-800" />
  }
  if (
    lower.includes('rbac') ||
    lower.includes('auth') ||
    lower.includes('security') ||
    lower.includes('recovery') ||
    lower.includes('directory') ||
    lower.includes('ad ds')
  ) {
    return <ShieldCheck className="w-6 h-6 text-neutral-800" />
  }
  if (lower.includes('microservice')) {
    return <Boxes className="w-6 h-6 text-neutral-800" />
  }
  if (lower.includes('ci/cd') || lower.includes('pipeline') || lower.includes('mft') || lower.includes('transfer')) {
    return <GitFork className="w-6 h-6 text-neutral-800" />
  }
  if (lower.includes('design') || lower.includes('system')) {
    return <Layers className="w-6 h-6 text-neutral-800" />
  }
  return <Code2 className="w-6 h-6 text-neutral-800" />
}

function formatSkillCategoryTitle(category: string): string {
  switch (category) {
    case 'languages':
      return 'Languages & Frameworks'
    case 'analytics':
      return 'Analytics'
    case 'aiMl':
      return 'AI / ML'
    case 'cloudDevops':
      return 'Cloud & DevOps Infrastructure'
    case 'enterprise':
      return 'Enterprise & IT Systems'
    default:
      return category.charAt(0).toUpperCase() + category.slice(1)
  }
}

interface ResumeSectionProps {
  data?: typeof resumeData
}

export function ResumeSection({ data = resumeData }: ResumeSectionProps) {
  const [mounted, setMounted] = useState(false)
  const [modalState, setModalState] = useState<{
    isOpen: boolean
    activeTab: 'photo' | 'diploma'
    title: string
    photoUrl?: string
    diplomaUrl?: string
    verifyUrl?: string
  }>({
    isOpen: false,
    activeTab: 'photo',
    title: '',
  })

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setModalState((prev) => ({ ...prev, isOpen: false }))
      }
    }
    if (modalState.isOpen) {
      window.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'unset'
    }
  }, [modalState.isOpen])

  const currentImgUrl =
    modalState.activeTab === 'photo'
      ? modalState.photoUrl || ''
      : modalState.diplomaUrl || modalState.photoUrl || ''

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
          {data.education.map((item: any, index: number) => (
            <div key={index} className="relative pl-5 md:pl-6 pb-6 border-l-2 border-border last:pb-0">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-accent" />
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-between items-start">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1.5">
                    {item.schoolUrl ? (
                      <a href={item.schoolUrl} target="_blank" rel="noopener noreferrer" className="text-base md:text-lg font-semibold text-foreground hover:text-accent transition-colors">
                        {item.title}
                      </a>
                    ) : (
                      <h4 className="text-base md:text-lg font-semibold text-foreground">{item.title}</h4>
                    )}
                  </div>
                  <p className="text-xs md:text-sm text-accent mb-2">{item.period}</p>
                  <div className="flex items-start gap-2 mb-3">
                    <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                    {item.degreeUrl && (
                      <a href={item.degreeUrl} target="_blank" rel="noopener noreferrer" title="Degree curriculum" className="text-accent hover:text-foreground transition-colors flex-shrink-0 mt-0.5">
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                  {item.verifyUrl && (
                    <a
                      href={item.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-accent bg-accent/10 hover:bg-accent hover:text-accent-foreground px-3 py-1.5 rounded-lg border border-accent/20 transition-all shadow-xs"
                    >
                      <Award className="w-3.5 h-3.5" />
                      Verify Official Diploma
                      <ExternalLink className="w-3 h-3 ml-0.5 opacity-70" />
                    </a>
                  )}
                </div>

                {item.imageUrl && (
                  <button
                    type="button"
                    onClick={() =>
                      setModalState({
                        isOpen: true,
                        activeTab: 'photo',
                        title: item.title,
                        photoUrl: item.imageUrl,
                        diplomaUrl: item.diplomaUrl,
                        verifyUrl: item.verifyUrl,
                      })
                    }
                    className="w-32 sm:w-36 md:w-40 aspect-[3/4] relative rounded-xl overflow-hidden border border-border bg-secondary shrink-0 shadow-sm group cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent block text-left p-0"
                    aria-label="Click to enlarge photo and diploma"
                  >
                    <Image
                      src={item.imageUrl}
                      alt={item.title}
                      fill
                      sizes="(max-width: 640px) 128px, (max-width: 768px) 144px, 160px"
                      className="object-cover object-top transition-transform duration-300 group-hover:scale-105 pointer-events-none"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-2.5 pointer-events-none">
                      <span className="text-xs text-white font-medium flex items-center gap-1.5 bg-black/70 px-2.5 py-1 rounded-md backdrop-blur-xs shadow-xs">
                        <ZoomIn className="w-3.5 h-3.5 text-accent" /> Click to enlarge
                      </span>
                    </div>
                  </button>
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
              {Array.isArray(item.description) ? (
                <ul className="space-y-1.5 mt-2">
                  {item.description.map((point: string, i: number) => (
                    <li key={i} className="text-xs md:text-sm text-muted-foreground leading-relaxed flex gap-2">
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-accent shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              )}
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
        <div className="space-y-6">
          {Object.entries(skillsData).map(([category, items], index) => (
            <div key={index} className="relative pl-5 md:pl-6 pb-6 border-l-2 border-border last:pb-0">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-accent" />
              <h4 className="text-base md:text-lg font-semibold text-foreground mb-3">
                {formatSkillCategoryTitle(category)}
              </h4>
              <div className="flex flex-wrap gap-3 sm:gap-4 md:gap-5 pt-1">
                {items.map((skill, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center gap-1.5 w-18 sm:w-20 text-center group"
                  >
                    <div className="bg-white rounded-lg p-2 flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 shadow-xs border border-border/20 group-hover:scale-105 transition-transform duration-200">
                      {skill.icon ? (
                        <Image
                          src={skill.icon}
                          alt={skill.name}
                          width={28}
                          height={28}
                          className="object-contain w-7 h-7"
                        />
                      ) : (
                        getSkillFallbackIcon(skill.name)
                      )}
                    </div>
                    <span className="text-[10px] sm:text-[11px] text-muted-foreground text-center leading-tight break-words">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
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

      {/* Lightbox Preview Modal via Portal */}
      {mounted &&
        modalState.isOpen &&
        createPortal(
          <div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/85 backdrop-blur-md p-3 sm:p-6 animate-in fade-in duration-200"
            onClick={() => setModalState((prev) => ({ ...prev, isOpen: false }))}
          >
            <div
              className="relative max-w-4xl w-full max-h-[92vh] flex flex-col items-center bg-card border border-border rounded-2xl overflow-hidden shadow-2xl p-4 sm:p-5"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="w-full flex items-center justify-between pb-3 border-b border-border gap-2">
                <div className="flex items-center gap-2 min-w-0">
                  {modalState.photoUrl && modalState.diplomaUrl ? (
                    <div className="flex bg-secondary p-1 rounded-lg gap-1 border border-border">
                      <button
                        type="button"
                        onClick={() => setModalState((prev) => ({ ...prev, activeTab: 'photo' }))}
                        className={`px-3 py-1 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                          modalState.activeTab === 'photo'
                            ? 'bg-accent text-accent-foreground shadow-xs'
                            : 'text-muted-foreground hover:text-foreground'
                        }`}
                      >
                        Graduation Photo
                      </button>
                      <button
                        type="button"
                        onClick={() => setModalState((prev) => ({ ...prev, activeTab: 'diploma' }))}
                        className={`px-3 py-1 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                          modalState.activeTab === 'diploma'
                            ? 'bg-accent text-accent-foreground shadow-xs'
                            : 'text-muted-foreground hover:text-foreground'
                        }`}
                      >
                        Official Diploma
                      </button>
                    </div>
                  ) : (
                    <h4 className="text-sm font-semibold text-foreground truncate">{modalState.title}</h4>
                  )}
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  {modalState.verifyUrl && (
                    <a
                      href={modalState.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-accent bg-accent/10 hover:bg-accent hover:text-accent-foreground px-2.5 py-1.5 rounded-lg border border-accent/20 transition-colors"
                    >
                      <Award className="w-3.5 h-3.5" />
                      <span className="hidden sm:inline">Verify on Gov Portal</span>
                      <span className="sm:hidden">Verify</span>
                      <ExternalLink className="w-3 h-3 ml-0.5 opacity-70" />
                    </a>
                  )}
                  {currentImgUrl && (
                    <a
                      href={currentImgUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground bg-secondary hover:bg-secondary/80 px-2.5 py-1.5 rounded-lg border border-border transition-colors cursor-pointer"
                      title="Open full resolution in new tab"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span className="hidden sm:inline">Full Size</span>
                    </a>
                  )}
                  <button
                    type="button"
                    onClick={() => setModalState((prev) => ({ ...prev, isOpen: false }))}
                    className="w-8 h-8 rounded-lg bg-secondary hover:bg-destructive hover:text-destructive-foreground flex items-center justify-center text-muted-foreground transition-colors cursor-pointer"
                    aria-label="Close modal"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Modal Body / Image View */}
              <div className="relative w-full flex-1 min-h-[300px] max-h-[72vh] flex items-center justify-center overflow-auto rounded-xl bg-black/40 p-2 sm:p-4 my-2">
                <img
                  src={currentImgUrl}
                  alt={modalState.title}
                  className="max-w-full max-h-[68vh] object-contain rounded-lg shadow-md select-none"
                />
              </div>

              {/* Modal Footer */}
              <div className="w-full flex items-center justify-between pt-2 text-xs text-muted-foreground border-t border-border">
                <span className="truncate">{modalState.title}</span>
                <span className="hidden sm:inline opacity-70">Press Esc or click outside to close</span>
              </div>
            </div>
          </div>,
          document.body
        )}

    </div>
  )
}
