import { useState, useEffect } from 'react'

export default function SubtleBrightPoliceSiren() {
  const [intensity, setIntensity] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIntensity((prev) => (prev + 0.02) % 1)
    }, 50)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="absolute z-0 inset-0 flex">
      <div 
        className="w-1/2 transition-all duration-1000 ease-in-out"
        style={{
          background: `linear-gradient(to left, rgba(255,0,0,0), rgba(255,0,0,${0.1 + 0.1 * Math.sin(intensity * Math.PI * 2)}))`,
        }}
        aria-hidden="true"
      />
      <div 
        className="w-1/2 transition-all duration-1000 ease-in-out"
        style={{
          background: `linear-gradient(to right, rgba(0,0,255,0), rgba(0,0,255,${0.1 + 0.1 * Math.sin((intensity + 0.5) * Math.PI * 2)}))`,
        }}
        aria-hidden="true"
      />
      <span className="sr-only">Subtle bright police siren effect</span>
    </div>
  )
}