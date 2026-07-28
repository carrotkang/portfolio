import ScrollReveal from './ScrollReveal'

export default function SectionTitle({ label, title, description }) {
  return (
    <ScrollReveal direction="left" className="mb-12 max-w-3xl">
      <p className="eyebrow">{label}</p>
      <h2 className="display mt-5 text-4xl font-bold leading-[1.05] sm:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-5 max-w-2xl text-pretty text-base leading-7 text-[#111827]/65">
          {description}
        </p>
      )}
    </ScrollReveal>
  )
}
