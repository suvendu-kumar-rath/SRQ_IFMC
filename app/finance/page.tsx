'use client'

import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useEffect, useRef } from 'react'

export default function Finance() {
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 overflow-hidden">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-16 sm:pt-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
        {/* Background Image - No blur on mobile */}
        <div className="absolute inset-0">
          <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center md:block hidden"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 md:from-slate-900/80 md:via-blue-900/70 md:to-indigo-900/80"></div>
        </div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-60 h-60 sm:w-80 sm:h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-60 h-60 sm:w-80 sm:h-80 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-5xl mx-auto px-4 sm:px-6">

          
          {/* Enhanced heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-indigo-100 mb-4 sm:mb-6 leading-tight tracking-tight animate-slide-up">
            SRQ FINANCE
          </h1>
          
          {/* Decorative elements */}
          <div className="flex items-center justify-center mb-6 sm:mb-8 animate-fade-in delay-300">
            <div className="h-px bg-gradient-to-r from-transparent via-white/50 to-transparent w-16 sm:w-24"></div>
            <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full mx-3 sm:mx-4 animate-pulse"></div>
            <div className="h-px bg-gradient-to-r from-transparent via-white/50 to-transparent w-16 sm:w-24"></div>
          </div>
          
          {/* Enhanced subtitle */}
          <p className="text-base sm:text-lg md:text-xl font-light text-white/90 mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed animate-slide-up delay-500 px-2">
            Comprehensive Financial Planning. Strategic Investment Advisory. Secure Insurance Solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center animate-fade-in delay-700 px-4">
            <button className="px-6 sm:px-8 py-3 bg-white/10 backdrop-blur-md text-white font-semibold rounded-xl border-2 border-white/30 hover:bg-white/20 transition-all duration-300 hover:scale-105 text-sm sm:text-base">
              Explore Services
            </button>
            <button className="px-6 sm:px-8 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-sm sm:text-base">
              Get Financial Advice
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section 
        ref={(el) => { sectionRefs.current[0] = el }}
        className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 opacity-0 translate-y-20 transition-all duration-1000"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <div className="inline-block mb-4 sm:mb-6">
              <span className="px-3 sm:px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-xs sm:text-sm font-semibold tracking-wide uppercase">
                Financial Services
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 px-2">
              Comprehensive <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Financial Solutions</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              Expert financial planning and investment strategies designed to secure your future and maximize your wealth potential
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Investment Advisory */}
            <div className="group">
              <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-blue-200 h-full hover:-translate-y-2">
                <div className="flex flex-col sm:flex-row items-start sm:items-center mb-4 sm:mb-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 mb-3 sm:mb-0">
                    <span className="text-xl sm:text-2xl">📈</span>
                  </div>
                  <div className="sm:ml-4">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Investment Advisory</h3>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                  Expert guidance on investment strategies, portfolio management, and wealth creation tailored to your financial goals.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-gray-500 text-sm sm:text-base">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 flex-shrink-0"></div>
                    Portfolio Optimization
                  </div>
                  <div className="flex items-center text-gray-500 text-sm sm:text-base">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 flex-shrink-0"></div>
                    Risk Assessment
                  </div>
                  <div className="flex items-center text-gray-500 text-sm sm:text-base">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 flex-shrink-0"></div>
                    Wealth Management
                  </div>
                </div>
              </div>
            </div>

            {/* Financial Planning */}
            <div className="group p-8 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/80 transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Financial Planning</h3>
              <p className="text-gray-600 leading-relaxed">
                Comprehensive financial planning services including retirement planning, tax optimization, and risk management.
              </p>
            </div>

            {/* Insurance Solutions */}
            <div className="group p-8 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/80 transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Insurance Solutions</h3>
              <p className="text-gray-600 leading-relaxed">
                Comprehensive insurance products including life, health, property, and business insurance solutions.
              </p>
            </div>

            {/* Corporate Finance */}
            <div className="group p-8 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/80 transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Corporate Finance</h3>
              <p className="text-gray-600 leading-relaxed">
                Business financing solutions, capital structuring, and corporate financial advisory services.
              </p>
            </div>

            {/* Mutual Funds */}
            <div className="group p-8 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/80 transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Mutual Funds</h3>
              <p className="text-gray-600 leading-relaxed">
                Diversified mutual fund investments with professional fund management and regular portfolio reviews.
              </p>
            </div>

            {/* Tax Advisory */}
            <div className="group p-8 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/80 transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Tax Advisory</h3>
              <p className="text-gray-600 leading-relaxed">
                Strategic tax planning and advisory services to optimize your tax efficiency and compliance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Showcase Section */}
      <section 
        ref={(el) => { sectionRefs.current[1] = el }}
        className="py-16 sm:py-24 lg:py-32 bg-gradient-to-br from-blue-50 to-indigo-100 opacity-0 translate-y-20 transition-all duration-1000"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-block">
                <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold tracking-wide uppercase">
                  Financial Excellence
                </span>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                Your Financial 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600"> Success Partner</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                With over a decade of experience in financial services, we provide comprehensive solutions that help individuals and businesses achieve their financial goals through strategic planning and expert guidance.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
                  <div className="text-3xl font-bold text-blue-600 mb-2">₹50Cr+</div>
                  <div className="text-gray-600">Assets Managed</div>
                </div>
                <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
                  <div className="text-3xl font-bold text-indigo-600 mb-2">500+</div>
                  <div className="text-gray-600">Happy Clients</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-blue-100 to-indigo-100 rounded-3xl p-8 shadow-2xl">
                <div className="w-full h-full bg-white rounded-2xl shadow-inner flex items-center justify-center">
                  <div className="text-center space-y-6">
                    <div className="text-8xl">💼</div>
                    <h3 className="text-2xl font-bold text-gray-800">Professional Finance</h3>
                    <p className="text-gray-600">Expert financial planning and investment strategies</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section 
        ref={(el) => { sectionRefs.current[2] = el }}
        className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 bg-gradient-to-r from-blue-50 to-purple-50 opacity-0 translate-y-20 transition-all duration-1000"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-800 mb-4 sm:mb-6 px-2">
              Why Choose <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">SRQ IFMC</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">10+</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Years Experience</h3>
              <p className="text-gray-600">Decade of expertise in financial services</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">500+</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Happy Clients</h3>
              <p className="text-gray-600">Satisfied customers across various sectors</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">24/7</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Support</h3>
              <p className="text-gray-600">Round-the-clock customer assistance</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">100%</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Transparency</h3>
              <p className="text-gray-600">Complete transparency in all dealings</p>
            </div>
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
        
        .delay-700 {
          animation-delay: 0.7s;
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
    </div>
  )
}
