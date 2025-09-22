'use client'
import { useState, useEffect } from 'react'

export default function About() {
  const [activeCard, setActiveCard] = useState(0)

  const cards = [
    {
      icon: '🎯',
      title: 'Our Mission',
      content: 'To provide comprehensive financial and communication solutions that create lasting value and meaningful impact for our clients.',
      gradient: 'linear-gradient(135deg, #3b82f6, #60a5fa)'
    },
    {
      icon: '👁️',
      title: 'Our Vision',
      content: 'To be the trusted partner of choice for organizations seeking to optimize their financial performance and enhance their market presence.',
      gradient: 'linear-gradient(135deg, #8b5cf6, #a78bfa)'
    },
    {
      icon: '💎',
      title: 'Core Values',
      content: 'Integrity & Transparency • Innovation & Excellence • Client-Centric Approach • Collaborative Partnership',
      gradient: 'linear-gradient(135deg, #10b981, #34d399)'
    }
  ]

  // Auto-rotate cards every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % cards.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [cards.length])

  return (
    <section className="section bg-gray relative overflow-hidden" id="about" style={{ padding: '4rem 0' }}>
      {/* Blue gradient elements - Hidden on mobile */}
      <div className="hidden md:block absolute top-20 left-8 w-52 h-52 bg-blue-500/40 rounded-full blur-3xl animate-pulse"></div>
      <div className="hidden md:block absolute bottom-24 right-10 w-44 h-44 bg-blue-400/50 rounded-full blur-2xl animate-pulse delay-1000"></div>
      
      <div className="section-container">
        <div className="section-header" style={{ marginBottom: '3rem' }}>
          <h2 className="section-title">
            About <span className="highlight-blue">SRQ IFMC</span>
          </h2>
          <div className="title-underline"></div>
          <p className="section-description">
            We are a premier financial services and strategic communications company dedicated to empowering businesses and individuals through integrated solutions.
          </p>
        </div>
        
        {/* Stacked Cards Container */}
        <div style={{
          position: 'relative',
          height: '350px',
          maxWidth: '500px',
          margin: '0 auto',
          perspective: '1000px'
        }} className="sm:h-96 sm:max-w-2xl">
          {cards.map((card, index) => {
            const isActive = index === activeCard
            const isPrev = index === (activeCard - 1 + cards.length) % cards.length
            const isNext = index === (activeCard + 1) % cards.length
            
            let transform = 'translateX(100%) rotateY(45deg) scale(0.8)'
            let opacity = 0
            let zIndex = 1
            
            if (isActive) {
              transform = 'translateX(0%) rotateY(0deg) scale(1)'
              opacity = 1
              zIndex = 10
            } else if (isPrev) {
              transform = 'translateX(-100%) rotateY(-45deg) scale(0.8)'
              opacity = 0.3
              zIndex = 5
            } else if (isNext) {
              transform = 'translateX(100%) rotateY(45deg) scale(0.8)'
              opacity = 0.3
              zIndex = 5
            }
            
            return (
              <div
                key={index}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  transform,
                  opacity,
                  zIndex,
                  transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
                  transformOrigin: 'center center'
                }}
              >
                <div style={{
                  background: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(20px)',
                  borderRadius: '20px',
                  padding: '2rem',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  boxShadow: isActive 
                    ? '0 25px 80px rgba(0, 0, 0, 0.15), 0 10px 40px rgba(59, 130, 246, 0.1)' 
                    : '0 10px 40px rgba(0, 0, 0, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  position: 'relative',
                  overflow: 'hidden'
                }}>
                  {/* Background gradient overlay */}
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: `${card.gradient}`,
                    opacity: 0.05,
                    borderRadius: '24px'
                  }} />
                  
                  {/* Icon */}
                  <div style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '16px',
                    background: card.gradient,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.5rem',
                    marginBottom: '1.5rem',
                    boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)',
                    position: 'relative',
                    zIndex: 2
                  }} className="sm:w-20 sm:h-20 sm:text-2xl sm:mb-8">
                    {card.icon}
                  </div>
                  
                  {/* Title */}
                  <h3 style={{
                    fontSize: '1.4rem',
                    fontWeight: '700',
                    color: '#1e293b',
                    marginBottom: '1rem',
                    fontFamily: '"Inter", "Helvetica Neue", Arial, sans-serif',
                    position: 'relative',
                    zIndex: 2
                  }} className="sm:text-2xl sm:mb-6">
                    {card.title}
                  </h3>
                  
                  {/* Content */}
                  <p style={{
                    fontSize: '0.9rem',
                    color: '#64748b',
                    lineHeight: '1.6',
                    maxWidth: '350px',
                    position: 'relative',
                    zIndex: 2,
                    fontFamily: '"Inter", "Helvetica Neue", Arial, sans-serif'
                  }} className="sm:text-lg sm:max-w-md">
                    {card.content}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
        
        {/* Card Indicators */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '1rem',
          marginTop: '2rem'
        }}>
          {cards.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveCard(index)}
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                border: 'none',
                background: index === activeCard 
                  ? 'linear-gradient(135deg, #3b82f6, #60a5fa)' 
                  : 'rgba(148, 163, 184, 0.4)',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                transform: index === activeCard ? 'scale(1.2)' : 'scale(1)',
                boxShadow: index === activeCard ? '0 4px 12px rgba(59, 130, 246, 0.4)' : 'none'
              }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
