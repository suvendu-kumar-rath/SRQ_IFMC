'use client'

import { useEffect, useRef, useState } from 'react'

export default function Stats() {
  const [isVisible, setIsVisible] = useState(false)
  const [animatedNumbers, setAnimatedNumbers] = useState([0, 0, 0, 0])
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Animate numbers
          const targets = [15, 2000, 500, 98]
          targets.forEach((target, index) => {
            let current = 0
            const increment = target / 50
            const timer = setInterval(() => {
              current += increment
              if (current >= target) {
                current = target
                clearInterval(timer)
              }
              setAnimatedNumbers(prev => {
                const newNumbers = [...prev]
                newNumbers[index] = Math.floor(current)
                return newNumbers
              })
            }, 30)
          })
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])
  const stats = [
    { number: '15+', label: 'Years Experience', icon: '🏆', suffix: '+' },
    { number: '2000+', label: 'Happy Clients', icon: '👥', suffix: '+' },
    { number: '₹500Cr+', label: 'Loans Processed', icon: '💰', prefix: '₹', suffix: 'Cr+' },
    { number: '98%', label: 'Success Rate', icon: '📈', suffix: '%' }
  ]

  return (
    <section ref={sectionRef} className="relative py-20 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      {/* Blue gradient elements - Hidden on mobile */}
      <div className="hidden md:block absolute top-10 right-20 w-52 h-52 bg-blue-500/40 rounded-full blur-3xl animate-pulse"></div>
      <div className="hidden md:block absolute bottom-16 left-10 w-44 h-44 bg-blue-400/50 rounded-full blur-2xl animate-pulse delay-500"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className={`text-center mb-12 sm:mb-16 px-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            TRUSTED BY <span className="text-blue-600">THOUSANDS</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our track record speaks for itself. We've helped businesses and individuals 
            achieve their financial goals with expert guidance and personalized solutions.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 px-2 sm:px-0">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className={`text-center group hover:scale-105 transition-all duration-500 ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ 
                transitionDelay: isVisible ? `${index * 200}ms` : '0ms'
              }}
            >
              <div className="bg-white rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <div className="text-4xl mb-4 animate-bounce">{stat.icon}</div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 mb-2">
                  {index === 2 ? `₹${animatedNumbers[index]}Cr+` : 
                   index === 3 ? `${animatedNumbers[index]}%` : 
                   `${animatedNumbers[index]}+`}
                </div>
                <div className="text-xs sm:text-sm font-medium text-gray-600 uppercase tracking-wide">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
