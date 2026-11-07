import Image from 'next/image'
import {
  Briefcase,
  GraduationCap,
  Compass,
  BookCopy,
  Phone,
} from 'lucide-react'
import { aboutData, profileData } from '@/lib/portfolio-data'

interface AboutSectionProps {
  data?: typeof aboutData
  profile?: typeof profileData
  onNavigate?: (section: 'home' | 'resume' | 'projects' | 'contact' | 'profile') => void
}

const EVERYDAY_TOOLS = [
  'Kubernetes',
  'Docker',
  'Linux',
  'Python',
  'PostgreSQL',
  'GitHub Actions',
]

export function AboutSection({
  data = aboutData,
  profile = profileData,
  onNavigate,
}: AboutSectionProps) {
  return (
    <div className="space-y-8 md:space-y-10">
      {/* Header */}
      <div>
        {/* Location & Discipline Tag at the very top (centered on mobile, left on desktop) */}
        <p className="text-[11px] sm:text-xs font-semibold text-accent uppercase tracking-widest mb-3 text-center lg:text-left">
          Phnom Penh, Cambodia • Cloud Infrastructure
        </p>

        {/* Mobile: Avatar centered, same size and frame as the profile photo */}
        <div className="flex justify-center my-5 lg:hidden">
          <div className="relative w-56 sm:w-60 aspect-[3/4]">
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-accent/30 via-accent/10 to-transparent blur-xs opacity-75 animate-pulse-slow" />
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-accent/20 via-accent/5 to-transparent" />
            <div className="absolute inset-[2px] rounded-3xl bg-secondary/80 overflow-hidden border border-white/10 shadow-xl">
              <Image
                src={profile.avatar || '/profile.jpg'}
                alt={profile.name}
                fill
                sizes="(max-width: 640px) 224px, 240px"
                priority
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>

        {/* Mobile Name (Centered: Chanheng Menh) */}
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground leading-tight text-center lg:hidden">
          <span className="bg-gradient-to-r from-accent via-accent to-sky-400 bg-clip-text text-transparent">
            {profile.name}
          </span>
        </h1>

        {/* Desktop Greeting (Left-aligned: Hey, I'm Chanheng Menh) */}
        <h1 className="hidden lg:block text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground leading-tight">
          Hey, I&apos;m{' '}
          <span className="bg-gradient-to-r from-accent via-accent to-sky-400 bg-clip-text text-transparent">
            {profile.name}
          </span>
        </h1>

        {/* Accent Bar (Centered on mobile, left on desktop) */}
        <div className="w-12 h-1 bg-gradient-to-r from-accent to-accent/30 rounded-full mt-4 mb-6 shadow-xs shadow-accent/40 mx-auto lg:mx-0" />
      </div>

      {/* 'Currently' Status Block */}
      <div className="glass-panel-subtle rounded-2xl p-4 sm:p-5 border border-black/[0.06] dark:border-white/[0.08]">
        <div className="flex items-center gap-2 mb-3.5">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <h2 className="text-xs uppercase font-bold text-accent tracking-wider">Currently</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs sm:text-sm text-foreground/90">
          <div className="flex items-start gap-2.5">
            <Briefcase className="w-4 h-4 text-accent shrink-0 mt-0.5" />
            <span>
              Cloud Infrastructure at <strong className="font-semibold text-foreground">RMO Technology</strong>.
            </span>
          </div>
          <div className="flex items-start gap-2.5">
            <GraduationCap className="w-4 h-4 text-accent shrink-0 mt-0.5" />
            <span>
              B.S. in Digital Infrastructure graduate from <strong className="font-semibold text-foreground">AUPP</strong>.
            </span>
          </div>
          <div className="flex items-start gap-2.5">
            <Compass className="w-4 h-4 text-accent shrink-0 mt-0.5" />
            <span>Former President of AUPP Chess Club.</span>
          </div>
        </div>
      </div>

      {/* Technical Story / How I Work */}
      <div className="space-y-3.5">
        <h2 className="text-lg sm:text-xl font-bold text-foreground tracking-tight">How I Work</h2>
        <div className="space-y-3.5 text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">
          {data.description.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>

      {/* Everyday Stack & Tooling */}
      <div>
        <h2 className="text-xs uppercase font-bold text-muted-foreground tracking-wider mb-3">
          Everyday Stack &amp; Tooling
        </h2>
        <div className="flex flex-wrap gap-1.5 sm:gap-2">
          {EVERYDAY_TOOLS.map((tool) => (
            <span
              key={tool}
              className="px-3.5 py-1.5 rounded-xl text-xs font-medium glass-panel-subtle text-foreground/90 border border-black/[0.04] dark:border-white/[0.06] hover:border-accent/40 hover:text-accent transition-all cursor-default"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>

      {/* Small Icon Buttons in a straight horizontal line */}
      {onNavigate && (
        <div className="flex flex-row items-center gap-2 sm:gap-2.5 justify-center lg:justify-start pt-2">
          <button
            onClick={() => onNavigate('projects')}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-accent text-accent-foreground font-semibold text-xs shadow-xs hover:shadow-sm hover:scale-105 active:scale-95 transition-all cursor-pointer whitespace-nowrap"
            title="Explore Projects"
            aria-label="Explore Projects"
          >
            <BookCopy className="w-3.5 h-3.5 shrink-0" />
            <span>
              <span className="hidden sm:inline">Explore </span>Projects
            </span>
          </button>
          <button
            onClick={() => onNavigate('resume')}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl glass-panel-subtle border border-black/[0.08] dark:border-white/[0.1] text-foreground font-medium text-xs hover:border-accent/40 hover:text-accent hover:scale-105 active:scale-95 transition-all cursor-pointer whitespace-nowrap"
            title="View Resume & Skills"
            aria-label="View Resume & Skills"
          >
            <GraduationCap className="w-3.5 h-3.5 shrink-0" />
            <span>
              <span className="inline sm:hidden">Resume</span>
              <span className="hidden sm:inline">View Resume &amp; Skills</span>
            </span>
          </button>
          <button
            onClick={() => onNavigate('contact')}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl glass-panel-subtle border border-black/[0.08] dark:border-white/[0.1] text-foreground font-medium text-xs hover:border-accent/40 hover:text-accent hover:scale-105 active:scale-95 transition-all cursor-pointer whitespace-nowrap"
            title="Get in Touch"
            aria-label="Get in Touch"
          >
            <Phone className="w-3.5 h-3.5 shrink-0" />
            <span>
              <span className="inline sm:hidden">Contact</span>
              <span className="hidden sm:inline">Get in Touch</span>
            </span>
          </button>
        </div>
      )}
    </div>
  )
}
