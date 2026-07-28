import { ArrowUpRight, Code2, Mail, Phone } from 'lucide-react'
import ScrollReveal from '../components/ScrollReveal'
import { trackEvent } from '../lib/analytics'

export default function Contact() {
  return (
    <footer id="contact" className="bg-[#1d4ed8] py-20 text-[#f8fafc] sm:py-28">
      <div className="site-shell">
        <p className="eyebrow !text-[#bfdbfe]">Next chapter</p>
        <ScrollReveal direction="up" className="mt-8 grid gap-10 lg:grid-cols-[1.4fr_0.6fr] lg:items-end">
          <h2 className="display max-w-4xl break-keep text-5xl font-bold leading-[0.98] sm:text-7xl">
            더 나은 서비스를 함께 만들고 싶습니다.
          </h2>
          <div>
            <p className="leading-7 text-white/65">새로운 문제를 배우고, 동료와 투명하게 소통하며, 신뢰할 수 있는 개발자로 성장하겠습니다.</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="mailto:carrotkang@gmail.com"
                onClick={() => trackEvent('contact_click', { contact_type: 'email' })}
                className="inline-flex items-center gap-2 rounded-full bg-[#f8fafc] px-5 py-3 text-sm font-bold text-[#111827]"
              >
                <Mail size={17} /> 이메일
              </a>
              <a
                href="tel:01092069174"
                onClick={() => trackEvent('contact_click', { contact_type: 'phone' })}
                className="inline-flex items-center gap-2 rounded-full border border-white/30 px-5 py-3 text-sm font-bold"
              >
                <Phone size={17} /> 010-9206-9174
              </a>
              <a
                href="https://github.com/carrotkang"
                target="_blank"
                rel="noreferrer"
                onClick={() => trackEvent('contact_click', { contact_type: 'github' })}
                className="inline-flex items-center gap-2 rounded-full border border-white/30 px-5 py-3 text-sm font-bold"
              >
                <Code2 size={17} /> GitHub <ArrowUpRight size={15} />
              </a>
            </div>
          </div>
        </ScrollReveal>
        <div className="mt-20 flex flex-wrap justify-between gap-3 border-t border-white/20 pt-6 text-xs font-bold uppercase tracking-widest text-white/45">
          <span>© 2026 Kang Gyeonggeun</span>
          <a href="#top">Back to top ↑</a>
        </div>
      </div>
    </footer>
  )
}
