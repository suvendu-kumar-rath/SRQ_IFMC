'use client'

import { useEffect, useRef, useState } from 'react'

export default function Features() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])
  const features = [
    {
      title: 'Expert Financial Advisory',
      description: 'Get personalized financial guidance from certified professionals with 15+ years of experience.',
      icon: '💼',
      gradient: 'from-blue-500 to-blue-700'
    },
    {
      title: 'Strategic Communication',
      description: 'Build your brand with comprehensive marketing and communication strategies that deliver results.',
      icon: '📢',
      gradient: 'from-purple-500 to-purple-700'
    },
    {
      title: 'Premium Real Estate',
      description: 'Access exclusive property deals and investment opportunities with our expert real estate team.',
      icon: '🏢',
      gradient: 'from-green-500 to-green-700'
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock assistance to ensure your financial and business needs are always met.',
      icon: '🕐',
      gradient: 'from-orange-500 to-orange-700'
    }
  ]

  return (
    <section ref={sectionRef} className="relative py-20 bg-white overflow-hidden">
      {/* Blue gradient elements - Hidden on mobile */}
      <div className="hidden md:block absolute top-16 left-8 w-40 h-40 bg-blue-500/45 rounded-full blur-2xl"></div>
      <div className="hidden md:block absolute bottom-20 right-12 w-56 h-56 bg-blue-400/50 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className={`text-center mb-12 sm:mb-16 px-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            WHY CHOOSE <span className="text-blue-600">SRQ IFMC</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We combine expertise, innovation, and personalized service to deliver 
            exceptional results for our clients across all service areas.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 sm:px-0">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`group hover:scale-105 transition-all duration-300 ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ 
                transitionDelay: isVisible ? `${index * 150}ms` : '0ms',
                transitionDuration: '800ms'
              }}
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-100 h-full">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
