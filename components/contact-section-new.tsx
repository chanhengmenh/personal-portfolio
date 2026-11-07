'use client'

import { Mail, Phone, MapPin, Send } from 'lucide-react'
import { useState } from 'react'
import { contactData } from '@/lib/portfolio-data'

interface ContactSectionProps {
  data?: typeof contactData
}

export function ContactSection({ data = contactData }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('https://formspree.io/f/mvzjrlpg', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: 'Your Portfolio',
        }),
      })
      if (res.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="space-y-6 md:space-y-8">
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Contact</h2>
        <div className="w-12 h-1 bg-gradient-to-r from-accent to-accent/30 rounded-full mb-6 shadow-xs shadow-accent/40" />
      </div>

      <div className="w-full h-64 md:h-80 rounded-xl md:rounded-2xl overflow-hidden glass-panel-subtle border border-black/[0.06] dark:border-white/[0.08] shadow-sm">
        <iframe
          src={data.mapEmbedUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Office Location"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
        <div className="flex items-center gap-3 md:gap-4 p-4 md:p-5 glass-panel-subtle glass-interactive rounded-xl md:rounded-2xl border border-black/[0.06] dark:border-white/[0.08] group">
          <div className="w-11 h-11 md:w-12 md:h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 border border-accent/20 transition-colors">
            <Mail className="w-5 h-5 text-accent" />
          </div>
          <div className="min-w-0">
            <h3 className="text-xs md:text-sm font-medium text-muted-foreground mb-0.5">Email</h3>
            <a
              href={`mailto:${data.email}`}
              className="text-xs sm:text-sm md:text-base text-foreground hover:text-accent transition-colors font-medium truncate block"
            >
              {data.email}
            </a>
          </div>
        </div>

        <div className="flex items-center gap-3 md:gap-4 p-4 md:p-5 glass-panel-subtle glass-interactive rounded-xl md:rounded-2xl border border-black/[0.06] dark:border-white/[0.08] group">
          <div className="w-11 h-11 md:w-12 md:h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 border border-accent/20 transition-colors">
            <Phone className="w-5 h-5 text-accent" />
          </div>
          <div>
            <h3 className="text-xs md:text-sm font-medium text-muted-foreground mb-0.5">Phone</h3>
            <a
              href={`tel:${data.phone.replace(/\s/g, '')}`}
              className="text-xs sm:text-sm md:text-base text-foreground hover:text-accent transition-colors font-medium"
            >
              {data.phone}
            </a>
          </div>
        </div>

        <div className="flex items-center gap-3 md:gap-4 p-4 md:p-5 glass-panel-subtle glass-interactive rounded-xl md:rounded-2xl border border-black/[0.06] dark:border-white/[0.08] group">
          <div className="w-11 h-11 md:w-12 md:h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 border border-accent/20 transition-colors">
            <MapPin className="w-5 h-5 text-accent" />
          </div>
          <div>
            <h3 className="text-xs md:text-sm font-medium text-muted-foreground mb-0.5">Location</h3>
            <p className="text-xs sm:text-sm md:text-base text-foreground font-medium">{data.location}</p>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 md:px-5 py-3 md:py-3.5 glass-panel-subtle border border-black/[0.08] dark:border-white/[0.1] rounded-xl text-foreground placeholder:text-muted-foreground focus:border-accent focus:bg-card/90 focus:ring-2 focus:ring-accent/20 focus:outline-none transition-all text-sm md:text-base"
              placeholder="John Doe"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 md:px-5 py-3 md:py-3.5 glass-panel-subtle border border-black/[0.08] dark:border-white/[0.1] rounded-xl text-foreground placeholder:text-muted-foreground focus:border-accent focus:bg-card/90 focus:ring-2 focus:ring-accent/20 focus:outline-none transition-all text-sm md:text-base"
              placeholder="john@example.com"
              required
            />
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
            Your Message
          </label>
          <textarea
            id="message"
            rows={6}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full px-4 md:px-5 py-3 md:py-3.5 glass-panel-subtle border border-black/[0.08] dark:border-white/[0.1] rounded-xl text-foreground placeholder:text-muted-foreground focus:border-accent focus:bg-card/90 focus:ring-2 focus:ring-accent/20 focus:outline-none transition-all resize-none text-sm md:text-base"
            placeholder="Write your message here..."
            required
          />
        </div>

        {status === 'success' && (
          <p className="text-sm text-green-500 font-medium">Message sent! I'll get back to you soon.</p>
        )}
        {status === 'error' && (
          <p className="text-sm text-red-500 font-medium">Something went wrong. Please try again.</p>
        )}
        <button
          type="submit"
          disabled={status === 'sending'}
          className="flex items-center justify-center gap-2 w-full md:w-auto px-7 md:px-9 py-3.5 bg-accent text-accent-foreground rounded-xl font-medium shadow-md shadow-accent/25 hover:shadow-lg hover:shadow-accent/35 hover:-translate-y-0.5 active:translate-y-0 transition-all text-sm md:text-base cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
        >
          <Send className="w-4 h-4" />
          {status === 'sending' ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  )
}
