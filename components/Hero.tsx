'use client'

import Link from 'next/link'
import { useEffect, useRef } from 'react'

export default function Hero() {
  const gifRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (gifRef.current) {
        const rect = gifRef.current.getBoundingClientRect()
        const centerX = rect.left + rect.width / 2
        const centerY = rect.top + rect.height / 2
        
        const deltaX = (e.clientX - centerX) * 0.02
        const deltaY = (e.clientY - centerY) * 0.02
        
        // Apply both cursor following and preserve the floating animation
        gifRef.current.style.setProperty('--mouse-x', `${deltaX}px`)
        gifRef.current.style.setProperty('--mouse-y', `${deltaY}px`)
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])
  return (
    <section className="relative min-h-screen flex items-center pt-20 sm:pt-24 md:pt-28 bg-white overflow-hidden">
      {/* Blue gradient elements - Hidden on mobile */}
      <div className="hidden md:block absolute top-20 right-10 w-64 h-64 bg-blue-500/40 rounded-full blur-3xl animate-pulse z-0"></div>
      <div className="hidden md:block absolute bottom-32 left-16 w-48 h-48 bg-blue-400/50 rounded-full blur-2xl animate-pulse delay-1000 z-0"></div>
      <div className="hidden lg:block absolute top-1/2 right-1/4 w-32 h-32 bg-blue-300/45 rounded-full blur-xl animate-pulse delay-500 z-0"></div>
      
      <div className="max-w-full mx-auto px-6 sm:px-8 md:px-4 lg:px-6 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 md:gap-6 lg:gap-8 items-center min-h-[calc(100vh-4rem)] md:min-h-[calc(100vh-5rem)]">
          {/* Left Grid - Content */}
          <div className="px-6 sm:px-8 md:px-2 lg:pl-4 xl:pl-8 text-center lg:text-left order-1 lg:col-span-1 lg:order-1 py-8 md:py-0">
            {/* Animated heading - No blur on mobile */}
            <h1 className="text-5xl sm:text-6xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-gray-900 mb-8 sm:mb-10 md:mb-6 lg:mb-8 leading-tight tracking-tight md:animate-blur-in">
              FINANCE &
              <br />
              COMMUNICATION
              <br />
              <span className="text-blue-600">AGENCY</span>
            </h1>
            
            {/* Animated descriptive text - No blur on mobile */}
            <div className="max-w-4xl mb-10 sm:mb-12 md:mb-6 lg:mb-8 md:animate-blur-in-delayed mx-auto lg:mx-0 px-2">
              <p className="text-base sm:text-lg md:text-sm lg:text-base text-gray-700 font-medium md:font-normal leading-relaxed mb-6 sm:mb-8 md:mb-3 lg:mb-4 uppercase tracking-wide">
                WE SPECIALIZE IN COMPREHENSIVE FINANCIAL ADVISORY SERVICES, 
                STRATEGIC MARKETING COMMUNICATIONS, AND PREMIUM REAL ESTATE 
                SOLUTIONS TAILORED FOR MODERN BUSINESSES.
              </p>
              <p className="text-lg sm:text-xl md:text-base lg:text-lg text-gray-600 font-normal leading-relaxed">
                From investment planning and insurance solutions to brand strategy and property consultancy, 
                we deliver integrated expertise that drives sustainable growth and builds lasting value for our clients.
              </p>
            </div>

            {/* Animated CTA Button - No blur on mobile */}
            <Link 
              href="/about" 
              className="inline-block px-10 sm:px-12 md:px-6 lg:px-8 py-5 sm:py-6 md:py-3 lg:py-4 bg-gray-900 text-white text-lg sm:text-xl md:text-sm lg:text-base font-semibold md:font-medium tracking-wider uppercase hover:bg-gray-800 transition-all duration-300 md:animate-blur-in-more-delayed hover:scale-105 rounded-xl md:rounded-lg shadow-xl md:shadow-lg"
            >
              Discover More
            </Link>
          </div>

          {/* Right Grid - Floating GIF - Hidden on mobile */}
          <div className="hidden lg:flex relative justify-center items-center overflow-visible order-1 lg:order-2 py-8 lg:py-0">
            <div 
              ref={gifRef}
              className="floating-gif cursor-follow md:animate-craft-in relative z-10"
              style={{
                transform: 'translate(var(--mouse-x, 0px), var(--mouse-y, 0px))',
                transition: 'transform 0.15s ease-out',
                '--mouse-x': '0px',
                '--mouse-y': '0px',
              } as React.CSSProperties}
            >
              <img 
                src="/assets/assets/lol.gif" 
                alt="Floating animation" 
                className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 xl:w-[30rem] xl:h-[30rem] object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { 
            transform: translate(var(--mouse-x, 0px), var(--mouse-y, 0px)) translateY(0px); 
          }
          50% { 
            transform: translate(var(--mouse-x, 0px), var(--mouse-y, 0px)) translateY(-20px); 
          }
        }

        @keyframes blur-in {
          0% { 
            opacity: 0; 
            filter: blur(20px); 
            transform: translateY(30px); 
          }
          100% { 
            opacity: 1; 
            filter: blur(0px); 
            transform: translateY(0px); 
          }
        }

        @keyframes craft-in {
          0% { 
            opacity: 0; 
            transform: translate(var(--mouse-x, 0px), var(--mouse-y, 0px)) scale(0.3); 
            filter: blur(10px);
          }
          50% { 
            opacity: 0.7; 
            transform: translate(var(--mouse-x, 0px), var(--mouse-y, 0px)) scale(1.1); 
            filter: blur(5px);
          }
          100% { 
            opacity: 1; 
            transform: translate(var(--mouse-x, 0px), var(--mouse-y, 0px)) scale(1); 
            filter: blur(0px);
          }
        }

        /* Desktop animations only */
        @media (min-width: 768px) {
          .animate-blur-in {
            animation: blur-in 1.2s ease-out forwards;
          }

          .animate-blur-in-delayed {
            animation: blur-in 1.2s ease-out 0.3s forwards;
            opacity: 0;
          }

          .animate-blur-in-more-delayed {
            animation: blur-in 1.2s ease-out 0.6s forwards;
            opacity: 0;
          }

          .animate-craft-in {
            opacity: 0;
            animation: craft-in 2s ease-out forwards, float 6s ease-in-out infinite 2s;
          }
        }

        /* Mobile - no animations */
        @media (max-width: 767px) {
          .animate-blur-in,
          .animate-blur-in-delayed,
          .animate-blur-in-more-delayed,
          .animate-craft-in {
            opacity: 1;
            filter: none;
            transform: none;
            animation: none;
          }
        }
      `}</style>
    </section>
  )
}
