import { useEffect, useRef, useState } from 'react'

export default function ScrollReveal({
  as: Component = 'div',
  children,
  className = '',
  delay = 0,
  direction = 'up',
  ...props
}) {
  const elementRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = elementRef.current

    if (!element || !('IntersectionObserver' in window)) {
      setIsVisible(true)
      return undefined
    }

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      {
        rootMargin: '-8% 0px -8%',
        threshold: 0.08,
      },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return (
    <Component
      ref={elementRef}
      className={`scroll-reveal scroll-reveal--${direction} ${isVisible ? 'scroll-reveal--visible' : ''} ${className}`}
      style={{ '--reveal-delay': `${delay}ms` }}
      {...props}
    >
      {children}
    </Component>
  )
}
