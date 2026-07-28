import { Mail, Menu, Phone, X } from 'lucide-react'
import { useState } from 'react'
import { trackEvent } from '../lib/analytics'

const navigation = [
  ['소개', '#about'],
  ['경험', '#experience'],
  ['기술', '#skills'],
  ['프로젝트', '#projects'],
  ['연락', '#contact'],
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="site-header-enter sticky top-0 z-40 border-b border-[#111827]/10 bg-[#f6f8fc]/90 backdrop-blur-xl">
      <div className="bg-[#111827] text-white">
        <div className="site-shell flex h-9 items-center justify-end gap-4 text-[0.7rem] font-semibold sm:gap-6 sm:text-xs">
          <a
            href="mailto:carrotkang@gmail.com"
            onClick={() => trackEvent('contact_click', { contact_type: 'header_email' })}
            className="inline-flex items-center gap-1.5 text-white/75 transition hover:text-white"
          >
            <Mail size={13} />
            carrotkang@gmail.com
          </a>
          <a
            href="tel:+821092069174"
            onClick={() => trackEvent('contact_click', { contact_type: 'header_phone' })}
            className="inline-flex items-center gap-1.5 text-white/75 transition hover:text-white"
          >
            <Phone size={13} />
            010-9206-9174
          </a>
        </div>
      </div>
      <div className="site-shell flex h-18 items-center justify-between">
        <a href="#top" className="display text-xl font-bold" aria-label="맨 위로">
          KGG<span className="text-[#7c3aed]">.</span>
        </a>
        <nav className="hidden items-center gap-7 md:flex" aria-label="주요 메뉴">
          {navigation.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="text-sm font-semibold text-[#111827]/70 transition hover:text-[#2563eb]"
            >
              {label}
            </a>
          ))}
        </nav>
        <button
          type="button"
          className="rounded-full border border-[#111827]/15 p-2 md:hidden"
          onClick={() => setIsOpen((open) => !open)}
          aria-expanded={isOpen}
          aria-label="메뉴 열기"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {isOpen && (
        <nav className="site-shell grid gap-1 border-t border-[#111827]/10 py-3 md:hidden">
          {navigation.map(([label, href]) => (
            <a
              key={href}
              href={href}
              onClick={() => setIsOpen(false)}
              className="rounded-lg px-3 py-2.5 text-sm font-semibold hover:bg-white/60"
            >
              {label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
