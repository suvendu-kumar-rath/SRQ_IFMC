'use client'

import { useEffect, useState } from 'react'

export default function ScrollingText() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const texts = [
    'Crafting Influence.',
    'Shaping Brands.',
    'Inspiring Impact.'
  ]

  const getTextOpacity = (index: number) => {
    // Return default opacity during SSR
    if (typeof window === 'undefined') return 0

    const sectionHeight = window.innerHeight * 1.5 // Increased from 0.8 to 1.5
    const startOffset = window.innerHeight * 0.8 // Increased from 0.5 to 0.8
    const sectionStart = startOffset + (index * sectionHeight)
    const sectionEnd = sectionStart + sectionHeight

    if (scrollY < sectionStart - 300) return 0 // Increased fade distance
    if (scrollY > sectionEnd + 300) return 0

    const fadeInStart = sectionStart - 300
    const fadeInEnd = sectionStart + 150
    const fadeOutStart = sectionEnd - 150
    const fadeOutEnd = sectionEnd + 300

    if (scrollY >= fadeInStart && scrollY <= fadeInEnd) {
      return (scrollY - fadeInStart) / (fadeInEnd - fadeInStart)
    }

    if (scrollY > fadeInEnd && scrollY < fadeOutStart) {
      return 1
    }

    if (scrollY >= fadeOutStart && scrollY <= fadeOutEnd) {
      return 1 - (scrollY - fadeOutStart) / (fadeOutEnd - fadeOutStart)
    }

    return 0
  }

  const getTextBlur = (index: number) => {
    const opacity = getTextOpacity(index)
    return (1 - opacity) * 30
  }

  const getTextTransform = (index: number) => {
    const opacity = getTextOpacity(index)
    const translateY = (1 - opacity) * 120 // More dramatic upward movement
    const scale = 0.8 + (opacity * 0.2) // Scale from 0.8 to 1.0
    return `translateY(${translateY}px) scale(${scale})`
  }

  return (
    // Hide on mobile (md:block means show on medium screens and up)
    <div className="relative hidden md:block">
      {texts.map((text, index) => (
        <section
          key={index}
          className="h-[150vh] flex items-center justify-center relative"
          style={{ minHeight: '150vh' }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <h2
              className="text-6xl lg:text-8xl xl:text-9xl 2xl:text-[10rem] font-thin text-gray-900 text-center leading-none tracking-wide transition-all duration-500 ease-out"
              style={{
                opacity: getTextOpacity(index),
                filter: `blur(${getTextBlur(index)}px)`,
                transform: getTextTransform(index)
              }}
            >
              {text}
            </h2>
          </div>
        </section>
      ))}
    </div>
  )
}
