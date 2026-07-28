const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID?.trim()
const isValidMeasurementId = /^G-[A-Z0-9]+$/i.test(measurementId ?? '')

let initialized = false

export function initializeAnalytics() {
  if (!isValidMeasurementId || initialized || typeof window === 'undefined') {
    return
  }

  initialized = true
  window.dataLayer = window.dataLayer || []
  window.gtag = function gtag() {
    window.dataLayer.push(arguments)
  }

  window.gtag('js', new Date())
  window.gtag('config', measurementId)

  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`
  document.head.appendChild(script)
}

export function trackEvent(eventName, parameters = {}) {
  if (!initialized || typeof window.gtag !== 'function') {
    return
  }

  window.gtag('event', eventName, parameters)
}
