'use client'
import { useEffect, useState, useRef } from 'react'

export default function ScrollSections() {
  const [scrollY, setScrollY] = useState(0)
  const [windowHeight, setWindowHeight] = useState(0)

  useEffect(() => {
    // Set initial window height
    setWindowHeight(window.innerHeight)
    
    const handleScroll = () => setScrollY(window.scrollY)
    const handleResize = () => setWindowHeight(window.innerHeight)
    
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleResize)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const getOpacity = (sectionIndex: number, scrollPosition: number) => {
    if (windowHeight === 0) return 0 // Prevent calculations before window is available
    
    const sectionHeight = windowHeight * 1.2 
    const sectionStart = windowHeight + (sectionIndex * sectionHeight)
    const sectionCenter = sectionStart + (sectionHeight * 0.4)
    const sectionEnd = sectionStart + sectionHeight
    
    const fadeDistance = windowHeight * 0.3 
    
    // Fade in
    if (scrollPosition < sectionStart - fadeDistance) return 0
    if (scrollPosition < sectionStart) {
      return (scrollPosition - (sectionStart - fadeDistance)) / fadeDistance
    }
    
    // Full visibility in center
    if (scrollPosition < sectionCenter + fadeDistance) {
      return 1
    }
    
    // Fade out
    if (scrollPosition < sectionEnd) {
      return 1 - ((scrollPosition - (sectionCenter + fadeDistance)) / fadeDistance)
    }
    
    return 0
  }

  const getBlur = (opacity: number) => {
    return `blur(${Math.max(0, (1 - opacity) * 8)}px)`
  }

  const getScale = (opacity: number) => {
    return 0.8 + (opacity * 0.2)
  }

  const sections = [
    {
      text: 'Crafting',
      highlight: 'Influence.',
      gradient: 'linear-gradient(135deg, #3b82f6, #60a5fa)'
    },
    {
      text: 'Shaping',
      highlight: 'Brands.',
      gradient: 'linear-gradient(135deg, #8b5cf6, #a78bfa)'
    },
    {
      text: 'Inspiring',
      highlight: 'Impact.',
      gradient: 'linear-gradient(135deg, #10b981, #34d399)'
    }
  ]

  return (
    <>
      {sections.map((section, index) => {
        const opacity = getOpacity(index, scrollY)
        const blur = getBlur(opacity)
        const scale = getScale(opacity)
        
        return (
          <section
            key={index}
            style={{
              minHeight: '120vh',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              background: 'transparent'
            }}
          >
            <div
              style={{
                textAlign: 'center',
                opacity: opacity,
                filter: blur,
                transform: `translateY(${(1 - opacity) * 30}px) scale(${scale})`,
                transition: 'all 0.4s ease-out'
              }}
            >
              <h2
                style={{
                  fontSize: 'clamp(4rem, 12vw, 9rem)',
                  fontWeight: '200',
                  fontFamily: '"Inter", "Helvetica Neue", Arial, sans-serif',
                  lineHeight: '1.1',
                  color: '#1e293b',
                  letterSpacing: '-0.02em',
                  margin: 0
                }}
              >
                {section.text}{' '}
                <span
                  style={{
                    background: section.gradient,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    fontWeight: '300'
                  }}
                >
                  {section.highlight}
                </span>
              </h2>
            </div>
          </section>
        )
      })}
    </>
  )
}
