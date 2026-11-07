'use client'

export const dynamic = 'force-static'

import { useState, useEffect } from 'react'
import { ProfileSidebar } from '@/components/profile-sidebar'
import { AboutSection } from '@/components/about-section'
import { ResumeSection } from '@/components/resume-section'
import { ContactSection } from '@/components/contact-section-new'
import { ProjectsSection } from '@/components/projects-section'
import { ThemeToggle } from '@/components/theme-toggle'
import {
  Home as HomeIcon,
  User,
  GraduationCap,
  BookCopy,
  Phone,
} from 'lucide-react'
import {
  profileData,
  aboutData,
  resumeData,
  contactData,
} from '@/lib/portfolio-data'

const SECTIONS = ['home', 'resume', 'projects', 'contact', 'profile'] as const
type Section = (typeof SECTIONS)[number]

const DESKTOP_NAV_ITEMS = [
  { id: 'home', label: 'Home', icon: HomeIcon },
  { id: 'resume', label: 'Resume', icon: GraduationCap },
  { id: 'projects', label: 'Projects', icon: BookCopy },
  { id: 'contact', label: 'Contact', icon: Phone },
] as const

const MOBILE_NAV_ITEMS = [
  { id: 'home', label: 'Home', icon: HomeIcon },
  { id: 'resume', label: 'Resume', icon: GraduationCap },
  { id: 'projects', label: 'Projects', icon: BookCopy },
  { id: 'contact', label: 'Contact', icon: Phone },
  { id: 'profile', label: 'Profile', icon: User },
] as const

export default function Home() {
  const [activeSection, setActiveSection] = useState<Section>('home')

  useEffect(() => {
    const syncFromHash = () => {
      let hash = window.location.hash.replace('#', '').toLowerCase()
      if (hash === 'about') hash = 'home'
      if (SECTIONS.includes(hash as Section)) {
        if (window.innerWidth >= 1024 && hash === 'profile') {
          setActiveSection('home')
        } else {
          setActiveSection(hash as Section)
        }
      }
    }

    syncFromHash()
    window.addEventListener('hashchange', syncFromHash)

    const handleResize = () => {
      if (window.innerWidth >= 1024 && activeSection === 'profile') {
        setActiveSection('home')
        window.history.replaceState(null, '', '#home')
      }
    }
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('hashchange', syncFromHash)
      window.removeEventListener('resize', handleResize)
    }
  }, [activeSection])

  const handleSectionChange = (section: Section) => {
    setActiveSection(section)
    window.history.replaceState(null, '', `#${section}`)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="relative min-h-screen bg-background p-3 sm:p-4 md:p-6 lg:p-12 pb-24 lg:pb-12 overflow-x-hidden">
      {/* Ambient Lighting Glow Orbs */}
      <div
        className="fixed -top-28 -right-28 w-80 sm:w-96 md:w-[500px] h-80 sm:h-96 md:h-[500px] bg-accent/15 dark:bg-accent/12 rounded-full blur-[120px] md:blur-[140px] pointer-events-none animate-float-slow -z-10"
        aria-hidden="true"
      />
      <div
        className="fixed -bottom-28 -left-28 w-80 sm:w-96 md:w-[480px] h-80 sm:h-96 md:h-[480px] bg-blue-600/15 dark:bg-blue-500/10 rounded-full blur-[130px] md:blur-[150px] pointer-events-none animate-float-reverse -z-10"
        aria-hidden="true"
      />
      <div
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[500px] md:w-[650px] h-[350px] sm:h-[500px] md:h-[650px] bg-sky-500/5 dark:bg-indigo-500/5 rounded-full blur-[160px] pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="fixed top-4 right-4 md:top-6 md:right-6 z-50">
        <ThemeToggle />
      </div>

      <div className="mx-auto max-w-7xl relative z-10 pt-10 sm:pt-12 lg:pt-0">
        <div className="flex flex-col lg:flex-row gap-4 sm:gap-5 md:gap-6">
          {/* Desktop Left Sidebar: normal as before, hidden on mobile */}
          <div className="hidden lg:block lg:w-80 shrink-0">
            <ProfileSidebar data={profileData} />
          </div>

          {/* Main Glass Content Container */}
          <main className="flex-1 min-w-0 glass-panel rounded-xl md:rounded-2xl relative overflow-hidden">
            {/* Desktop Top Navigation (hidden on mobile) */}
            <nav className="hidden lg:flex items-center gap-1.5 p-3.5 md:p-4 border-b border-black/[0.06] dark:border-white/[0.08] bg-card/70 dark:bg-card/50 backdrop-blur-md">
              {DESKTOP_NAV_ITEMS.map(({ id, label, icon: Icon }) => {
                const isActive = activeSection === id
                return (
                  <button
                    key={id}
                    onClick={() => handleSectionChange(id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 whitespace-nowrap cursor-pointer ${
                      isActive
                        ? 'text-accent dark:text-accent font-semibold bg-accent/15 border border-accent/30 shadow-xs shadow-accent/10'
                        : 'text-muted-foreground hover:text-foreground hover:bg-secondary/60 border border-transparent'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{label}</span>
                  </button>
                )
              })}
            </nav>

            <div className="p-4 sm:p-5 md:p-6 lg:p-8">
              {activeSection === 'home' && (
                <AboutSection
                  data={aboutData}
                  profile={profileData}
                  onNavigate={handleSectionChange}
                />
              )}
              {activeSection === 'resume' && <ResumeSection data={resumeData} />}
              {activeSection === 'projects' && <ProjectsSection />}
              {activeSection === 'contact' && <ContactSection data={contactData} />}
              {activeSection === 'profile' && (
                <>
                  <div className="block lg:hidden">
                    <ProfileSidebar data={profileData} isMobileTab={true} />
                  </div>
                  <div className="hidden lg:block">
                    <AboutSection
                      data={aboutData}
                      profile={profileData}
                      onNavigate={handleSectionChange}
                    />
                  </div>
                </>
              )}
            </div>
          </main>
        </div>
      </div>

      {/* Mobile Fixed Bottom Navigation (Instagram / TikTok Style) */}
      <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden pb-safe pt-1.5 px-3 bg-card/90 dark:bg-card/85 backdrop-blur-2xl border-t border-black/[0.08] dark:border-white/[0.1] shadow-[0_-8px_25px_rgba(0,0,0,0.18)]">
        <nav className="flex items-center justify-around max-w-md mx-auto">
          {MOBILE_NAV_ITEMS.map(({ id, label, icon: Icon }) => {
            const isActive = activeSection === id
            return (
              <button
                key={id}
                onClick={() => handleSectionChange(id)}
                className={`flex flex-col items-center justify-center py-1 px-1 rounded-xl transition-all duration-200 cursor-pointer flex-1 ${
                  isActive
                    ? 'text-accent font-semibold'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
                aria-label={label}
              >
                <div
                  className={`p-1.5 rounded-xl transition-all duration-200 ${
                    isActive
                      ? 'bg-accent/15 scale-110 shadow-xs shadow-accent/25'
                      : 'bg-transparent'
                  }`}
                >
                  <Icon className="w-5 h-5" aria-hidden="true" />
                </div>
                <span className="text-[10px] mt-0.5 tracking-tight font-medium">
                  {label}
                </span>
              </button>
            )
          })}
        </nav>
      </div>
    </div>
  )
}
