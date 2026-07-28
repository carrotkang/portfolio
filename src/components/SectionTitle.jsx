import ScrollReveal from './ScrollReveal'

export default function SectionTitle({ label, title, description }) {
  return (
    <ScrollReveal direction="left" className="mb-12 max-w-3xl">
      <p className="eyebrow">{label}</p>
      <h2 className="display mt-5 break-keep text-[clamp(2rem,9vw,3rem)] font-bold leading-[1.08]">
        {title}
      </h2>
      {description && (
        <p className="mt-5 max-w-2xl break-keep text-pretty text-[0.9375rem] leading-7 text-[#111827]/65 sm:text-base">
          {description}
        </p>
      )}
    </ScrollReveal>
  )
}
