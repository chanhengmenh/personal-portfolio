import Image from 'next/image'
import { Mail, Phone, Calendar, MapPin } from 'lucide-react'
import { Github, Linkedin} from 'lucide-react'
import { profileData } from '@/lib/portfolio-data'
import { SiCredly } from "react-icons/si";

interface ProfileSidebarProps {
  data?: typeof profileData
  isMobileTab?: boolean
}

export function ProfileSidebar({ data = profileData, isMobileTab = false }: ProfileSidebarProps) {
  const content = (
    <div className="w-full relative overflow-hidden">
      {/* Profile Image */}
      <div className="flex flex-col items-center">
        <div className="relative w-56 md:w-full aspect-[3/4] mb-4 md:mb-6">
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-accent/30 via-accent/10 to-transparent blur-xs opacity-75 animate-pulse-slow" />
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-accent/20 via-accent/5 to-transparent" />
          <div className="absolute inset-[2px] rounded-3xl bg-secondary/80 overflow-hidden border border-white/10">
            <Image
              src={data.avatar || "/placeholder.svg"}
              alt={data.name}
              fill
              priority
              sizes="(max-width: 768px) 256px, 320px"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>
        <h3 className="text-xl font-bold text-foreground tracking-tight">{data.name}</h3>
      </div>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-black/[0.08] dark:via-white/[0.1] to-transparent my-4 md:my-5" />

      {/* Contact Info */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5 md:gap-3">
        <div className="flex items-start gap-3 p-2.5 sm:p-3 rounded-xl glass-panel-subtle glass-interactive">
          <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 border border-accent/20">
            <Mail className="w-4 h-4 text-accent" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[10px] sm:text-xs text-muted-foreground uppercase font-medium tracking-wider mb-0.5">Email</p>
            <a
              href={`mailto:${data.email}`}
              className="text-xs sm:text-sm text-foreground hover:text-accent transition-colors break-all"
            >
              {data.email}
            </a>
          </div>
        </div>

        <div className="flex items-start gap-3 p-2.5 sm:p-3 rounded-xl glass-panel-subtle glass-interactive">
          <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 border border-accent/20">
            <Phone className="w-4 h-4 text-accent" />
          </div>
          <div className="flex-1">
            <p className="text-[10px] sm:text-xs text-muted-foreground uppercase font-medium tracking-wider mb-0.5">Phone</p>
            <a
              href={`tel:${data.phone.replace(/\s/g, '')}`}
              className="text-xs sm:text-sm text-foreground hover:text-accent transition-colors"
            >
              {data.phone}
            </a>
          </div>
        </div>

        <div className="flex items-start gap-3 p-2.5 sm:p-3 rounded-xl glass-panel-subtle glass-interactive">
          <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 border border-accent/20">
            <MapPin className="w-4 h-4 text-accent" />
          </div>
          <div className="flex-1">
            <p className="text-[10px] sm:text-xs text-muted-foreground uppercase font-medium tracking-wider mb-0.5">Location</p>
            <p className="text-xs sm:text-sm text-foreground">{data.location}</p>
          </div>
        </div>
      </div>

      {/* Social Links */}
      <div className="flex items-center justify-center gap-3 mt-4 md:mt-5 pt-4 border-t border-black/[0.06] dark:border-white/[0.08]">
        <a
          href={data.social.github}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-xl glass-panel-subtle glass-interactive hover:bg-accent hover:text-accent-foreground transition-all flex items-center justify-center"
          aria-label="GitHub"
        >
          <Github className="w-4 h-4" aria-hidden="true" />
        </a>
        <a
          href={data.social.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-xl glass-panel-subtle glass-interactive hover:bg-accent hover:text-accent-foreground transition-all flex items-center justify-center"
          aria-label="LinkedIn"
        >
          <Linkedin className="w-4 h-4" aria-hidden="true" />
        </a>

        <a          
          href={data.social.credly}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-xl glass-panel-subtle glass-interactive hover:bg-accent hover:text-accent-foreground transition-all flex items-center justify-center"
          aria-label="Credly"
        >
          <SiCredly className="w-4 h-4" aria-hidden="true" />
        </a>
      </div>
    </div>
  )

  if (isMobileTab) {
    return (
      <div className="space-y-6 md:space-y-8">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Profile</h2>
          <div className="w-12 h-1 bg-gradient-to-r from-accent to-accent/30 rounded-full mb-6 shadow-xs shadow-accent/40" />
        </div>
        <div className="max-w-md mx-auto w-full glass-panel-subtle rounded-2xl p-5 sm:p-6 border border-black/[0.06] dark:border-white/[0.08] shadow-md">
          {content}
        </div>
      </div>
    )
  }

  return (
    <aside className="w-full lg:w-80 glass-panel rounded-2xl p-4 md:p-6 lg:sticky lg:top-8 h-fit relative overflow-hidden">
      {content}
    </aside>
  )
}
