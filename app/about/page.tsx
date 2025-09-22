'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Team from '@/components/Team'
import Image from 'next/image'
import { useEffect, useRef } from 'react'

export default function AboutPage() {
  const sectionRefs = useRef<(HTMLElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in')
          }
        })
      },
      { threshold: 0.1 }
    )

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <main className="overflow-hidden">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-16 sm:pt-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-slate-900/40 to-slate-900"></div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-60 h-60 sm:w-80 sm:h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-60 h-60 sm:w-80 sm:h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-6xl mx-auto px-4 sm:px-6">

          
          {/* Enhanced heading with gradient text */}
          <h1 className="text-7xl md:text-8xl lg:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-blue-200 mb-8 leading-tight tracking-tight animate-slide-up">
            About SRQ IFMC
          </h1>
          
          {/* Decorative elements */}
          <div className="flex items-center justify-center mb-12 animate-fade-in delay-300">
            <div className="h-px bg-gradient-to-r from-transparent via-white/50 to-transparent w-32"></div>
            <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full mx-6 animate-pulse"></div>
            <div className="h-px bg-gradient-to-r from-transparent via-white/50 to-transparent w-32"></div>
          </div>
          
          {/* Enhanced subtitle */}
          <p className="text-2xl md:text-3xl font-light text-white/90 mb-16 max-w-4xl mx-auto leading-relaxed animate-slide-up delay-500">
            Pioneering the future of financial services through innovation, integrity, and unwavering commitment to excellence.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section 
        ref={(el) => { sectionRefs.current[0] = el }}
        className="py-32 bg-white relative opacity-0 translate-y-20 transition-all duration-1000"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <div className="inline-block">
                <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold tracking-wide uppercase">
                  Our Story
                </span>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                Building Tomorrow's 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600"> Financial Landscape</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Founded with a vision to revolutionize financial services, SRQ IFMC has grown from a boutique consultancy to a comprehensive financial solutions provider. Our journey is marked by continuous innovation, strategic partnerships, and an unwavering commitment to client success.
              </p>
              <p className="text-lg text-gray-500 leading-relaxed">
                We believe that every business deserves access to world-class financial expertise and strategic communication solutions. This belief drives us to constantly evolve, adapt, and deliver exceptional value to our clients across diverse industries.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-purple-100 to-blue-100 rounded-3xl p-8 shadow-2xl">
                <div className="w-full h-full bg-white rounded-2xl shadow-inner flex items-center justify-center">
                  <div className="text-center space-y-6">
                    <div className="w-24 h-24 mx-auto bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg">
                      <span className="text-4xl">🚀</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">Innovation First</h3>
                    <p className="text-gray-600">Pioneering solutions for modern challenges</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section 
        ref={(el) => { sectionRefs.current[1] = el }}
        className="py-32 bg-gradient-to-br from-gray-50 to-purple-50 opacity-0 translate-y-20 transition-all duration-1000"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Our Purpose & Vision
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Mission */}
            <div className="group">
              <div className="bg-white rounded-3xl p-12 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-purple-200 h-full">
                <div className="flex items-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <span className="text-3xl">🎯</span>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 ml-6">Our Mission</h3>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  To empower businesses with comprehensive financial solutions and strategic communication services that drive sustainable growth and market leadership.
                </p>
                <p className="text-base text-gray-500 leading-relaxed">
                  We are committed to delivering excellence through innovative approaches, deep industry expertise, and personalized service that exceeds expectations and creates lasting partnerships.
                </p>
              </div>
            </div>
            
            {/* Vision */}
            <div className="group">
              <div className="bg-white rounded-3xl p-12 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-blue-200 h-full">
                <div className="flex items-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <span className="text-3xl">🔮</span>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 ml-6">Our Vision</h3>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  To be the global leader in integrated financial and communication solutions, setting new standards for innovation, integrity, and client success.
                </p>
                <p className="text-base text-gray-500 leading-relaxed">
                  We envision a future where every organization has access to world-class financial expertise and strategic communication capabilities that unlock their full potential.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section 
        ref={(el) => { sectionRefs.current[2] = el }}
        className="py-32 bg-white opacity-0 translate-y-20 transition-all duration-1000"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide every decision, every interaction, and every solution we deliver.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: '🛡️',
                title: 'Integrity & Trust',
                description: 'Building lasting relationships through transparency, honesty, and ethical practices in every interaction.',
                color: 'from-blue-500 to-blue-600'
              },
              {
                icon: '⚡',
                title: 'Innovation & Excellence',
                description: 'Continuously pushing boundaries to deliver cutting-edge solutions that exceed expectations.',
                color: 'from-purple-500 to-purple-600'
              },
              {
                icon: '🤝',
                title: 'Client-Centric Focus',
                description: 'Putting our clients at the heart of everything we do, ensuring their success is our success.',
                color: 'from-green-500 to-green-600'
              },
              {
                icon: '🌟',
                title: 'Collaborative Partnership',
                description: 'Working together as true partners to achieve shared goals and create mutual value.',
                color: 'from-orange-500 to-orange-600'
              }
            ].map((value, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-gray-200 h-full hover:-translate-y-2">
                  <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-xl flex items-center justify-center shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-2xl">{value.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <Team />

      {/* CTA Section */}
      <section 
        ref={(el) => { sectionRefs.current[3] = el }}
        className="py-32 bg-gradient-to-br from-purple-600 via-blue-600 to-purple-700 opacity-0 translate-y-20 transition-all duration-1000"
      >
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
            Ready to Transform Your Future?
          </h2>
          <p className="text-2xl text-white/90 mb-12 leading-relaxed max-w-3xl mx-auto">
            Join hundreds of satisfied clients who have transformed their financial landscape with our expert guidance and innovative solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="px-10 py-4 bg-white text-purple-600 font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Schedule Consultation
            </button>
            <button className="px-10 py-4 bg-white/10 backdrop-blur-md text-white font-bold rounded-xl border-2 border-white/30 hover:bg-white/20 transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </section>

      <Footer />
      
      <style jsx>{`
        .animate-fade-in {
          animation: fadeIn 1s ease-out forwards;
        }
        
        .animate-slide-up {
          animation: slideUp 1s ease-out forwards;
        }
        
        .delay-300 {
          animation-delay: 0.3s;
        }
        
        .delay-500 {
          animation-delay: 0.5s;
        }
        
        .animate-in {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </main>
  )
}
