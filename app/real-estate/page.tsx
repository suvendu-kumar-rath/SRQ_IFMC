'use client'

import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useEffect, useRef } from 'react'

export default function RealEstate() {
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
    <div className="min-h-screen bg-gradient-to-br from-white via-red-50 to-rose-100 font-['Inter'] overflow-hidden">
      <Header />
      
      {/* Hero Section - About the Service */}
      <section className="relative min-h-screen flex items-center justify-center pt-16 sm:pt-20 bg-gradient-to-br from-red-900 via-red-700 to-rose-800">
        {/* Background Image - No blur on mobile */}
        <div className="absolute inset-0">
          <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2073&q=80')] bg-cover bg-center md:block hidden"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-red-900 via-red-700 to-rose-800 md:from-red-900/80 md:via-red-700/70 md:to-rose-800/80"></div>
        </div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-60 h-60 sm:w-80 sm:h-80 bg-red-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-60 h-60 sm:w-80 sm:h-80 bg-rose-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-5xl mx-auto px-4 sm:px-6">
          {/* ESTATES Logo */}
          <div className="mb-6 sm:mb-8 animate-fade-in">
            <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto rounded-full bg-white/10 backdrop-blur-2xl shadow-2xl ring-2 ring-white/20 flex items-center justify-center p-2 overflow-hidden hover:scale-105 transition-transform duration-500">
              <Image 
                src="/assets/assets/ESTATES.svg" 
                alt="SRQ Estates Logo" 
                width={50}
                height={50}
                className="object-contain sm:w-[60px] sm:h-[60px]"
              />
            </div>
          </div>
          
          {/* Enhanced heading with gradient text */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-red-100 to-rose-100 mb-4 sm:mb-6 leading-tight tracking-tight animate-slide-up">
            SRQ ESTATES
          </h1>
          
          {/* Decorative elements */}
          <div className="flex items-center justify-center mb-6 sm:mb-8 animate-fade-in delay-300">
            <div className="h-px bg-gradient-to-r from-transparent via-white/50 to-transparent w-16 sm:w-24"></div>
            <div className="w-2 h-2 bg-gradient-to-r from-red-400 to-rose-400 rounded-full mx-3 sm:mx-4 animate-pulse"></div>
            <div className="h-px bg-gradient-to-r from-transparent via-white/50 to-transparent w-16 sm:w-24"></div>
          </div>
          
          {/* Enhanced subtitle */}
          <p className="text-base sm:text-lg md:text-xl font-light text-white/90 mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed animate-slide-up delay-500 px-2">
            Premium Real Estate Solutions. Exceptional Investment Opportunities. Unmatched Market Expertise.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center animate-fade-in delay-700 px-4">
            <button className="px-6 sm:px-8 py-3 bg-white/10 backdrop-blur-md text-white font-semibold rounded-xl border-2 border-white/30 hover:bg-white/20 transition-all duration-300 hover:scale-105 text-sm sm:text-base">
              Explore Properties
            </button>
            <button className="px-6 sm:px-8 py-3 bg-gradient-to-r from-red-500 to-rose-600 text-white font-semibold rounded-xl hover:from-red-600 hover:to-rose-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-sm sm:text-base">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Services We Offer Section */}
      <section 
        ref={(el) => { sectionRefs.current[0] = el }}
        className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 opacity-0 translate-y-20 transition-all duration-1000"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <div className="inline-block mb-4 sm:mb-6">
              <span className="px-3 sm:px-4 py-2 bg-red-100 text-red-700 rounded-full text-xs sm:text-sm font-semibold tracking-wide uppercase">
                Our Services
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 px-2">
              Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-rose-600">Real Estate Solutions</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              Comprehensive real estate consulting services designed to maximize your investment potential and strategic growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Market Research & Analysis */}
            <div className="group">
              <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-red-200 h-full hover:-translate-y-2">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">📊</span>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold text-gray-900">Market Research</h3>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Comprehensive market analysis, property valuations, and investment opportunity assessments.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-gray-500">
                    <div className="w-2 h-2 bg-red-400 rounded-full mr-3"></div>
                    Market Trends Analysis
                  </div>
                  <div className="flex items-center text-gray-500">
                    <div className="w-2 h-2 bg-red-400 rounded-full mr-3"></div>
                    Property Valuations
                  </div>
                  <div className="flex items-center text-gray-500">
                    <div className="w-2 h-2 bg-red-400 rounded-full mr-3"></div>
                    Investment Insights
                  </div>
                </div>
              </div>
            </div>

            {/* Client Advisory */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-white/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative p-8 backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl mb-6 flex items-center justify-center shadow-lg shadow-blue-600/30">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Client Advisory</h3>
                <p className="text-gray-600 leading-relaxed">
                  Offer expert guidance on buying, selling, or developing properties aligned with long-term goals.
                </p>
              </div>
            </div>

            {/* Investment Strategy */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700/20 to-white/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative p-8 backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-700 to-blue-800 rounded-xl mb-6 flex items-center justify-center shadow-lg shadow-blue-700/30">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Investment Strategy</h3>
                <p className="text-gray-600 leading-relaxed">
                  Develop and recommend strategies to increase investment returns and identify profitable property investments.
                </p>
              </div>
            </div>

            {/* Property Development */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-white/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative p-8 backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl mb-6 flex items-center justify-center shadow-lg shadow-blue-500/30">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Property Development</h3>
                <p className="text-gray-600 leading-relaxed">
                  Assist clients in planning and managing property development projects from concept to completion.
                </p>
              </div>
            </div>

            {/* Negotiation & Compliance */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-white/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative p-8 backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl mb-6 flex items-center justify-center shadow-lg shadow-blue-600/30">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Negotiation & Compliance</h3>
                <p className="text-gray-600 leading-relaxed">
                  Negotiate on behalf of clients and ensure all transactions/projects comply with real estate laws and regulations.
                </p>
              </div>
            </div>

            {/* Client Relationships */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700/20 to-white/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative p-8 backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-700 to-blue-800 rounded-xl mb-6 flex items-center justify-center shadow-lg shadow-blue-700/30">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Client Relationships</h3>
                <p className="text-gray-600 leading-relaxed">
                  Build and maintain strong relationships, acting as a trusted advisor beyond single transactions.
                </p>
              </div>
            </div>

            {/* Property Valuation */}
            <div className="group relative md:col-start-2 lg:col-start-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-800/20 to-white/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative p-8 backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-800 to-blue-900 rounded-xl mb-6 flex items-center justify-center shadow-lg shadow-blue-800/30">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Property Valuation</h3>
                <p className="text-gray-600 leading-relaxed">
                  Evaluate property values and present profitable proposals to clients with accurate market assessments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Showcase Section */}
      <section 
        ref={(el) => { sectionRefs.current[1] = el }}
        className="py-32 bg-gradient-to-br from-red-50 to-rose-100 opacity-0 translate-y-20 transition-all duration-1000"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-block">
                <span className="px-4 py-2 bg-red-100 text-red-700 rounded-full text-sm font-semibold tracking-wide uppercase">
                  Real Estate Excellence
                </span>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                Premium Properties & 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-rose-600"> Investment Opportunities</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                With extensive market knowledge and a portfolio of premium properties, we help clients make informed real estate decisions that maximize their investment potential and long-term wealth creation.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
                  <div className="text-3xl font-bold text-red-600 mb-2">₹100Cr+</div>
                  <div className="text-gray-600">Properties Sold</div>
                </div>
                <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
                  <div className="text-3xl font-bold text-rose-600 mb-2">250+</div>
                  <div className="text-gray-600">Happy Investors</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-red-100 to-rose-100 rounded-3xl p-8 shadow-2xl">
                <div className="w-full h-full bg-white rounded-2xl shadow-inner flex items-center justify-center">
                  <div className="text-center space-y-6">
                    <div className="text-8xl">🏢</div>
                    <h3 className="text-2xl font-bold text-gray-800">Premium Real Estate</h3>
                    <p className="text-gray-600">Exclusive properties and investment opportunities</p>
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
        className="py-32 px-6 opacity-0 translate-y-20 transition-all duration-1000"
      >
        <div className="max-w-7xl mx-auto">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-white/10 rounded-3xl blur-2xl"></div>
            <div className="relative backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-12 shadow-2xl">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6">
                  Why Choose <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Us</span>
                </h2>
              </div>

              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left: Icons/illustrations */}
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg shadow-blue-500/30">
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <h4 className="font-semibold text-gray-800">Analytics</h4>
                  </div>
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg shadow-blue-600/30">
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </div>
                    <h4 className="font-semibold text-gray-800">Communication</h4>
                  </div>
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-r from-blue-700 to-blue-800 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg shadow-blue-700/30">
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <h4 className="font-semibold text-gray-800">Compliance</h4>
                  </div>
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-r from-blue-800 to-blue-900 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg shadow-blue-800/30">
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h4 className="font-semibold text-gray-800">Market Trends</h4>
                  </div>
                </div>

                {/* Right: Text */}
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">Strong Analytical, Negotiation & Communication Skills</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Our team combines data-driven analysis with exceptional negotiation abilities and clear communication to deliver optimal results.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">Expertise in Local Real Estate Laws & Regulations</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Deep understanding of legal frameworks ensures all transactions are compliant and risk-free for our clients.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-blue-700 rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">Deep Understanding of Market Trends</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Continuous market research and trend analysis enable us to provide insights that maximize investment potential.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-blue-800 rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">Trusted Advisors for Long-term Property Success</h3>
                      <p className="text-gray-600 leading-relaxed">
                        We build lasting relationships focused on your long-term success, not just individual transactions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Glowing accent background */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-blue-600/30 to-blue-500/20 rounded-3xl blur-2xl"></div>
            <div className="absolute inset-0 bg-blue-500/5 rounded-3xl"></div>
            
            {/* Frosted glass panel */}
            <div className="relative backdrop-blur-xl bg-white/10 border border-white/30 rounded-3xl p-12 text-center shadow-2xl">
              <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6">
                Ready to make <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">smarter real estate moves?</span>
              </h2>
              
              <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                Book a consultation and let us guide you towards smarter investments, profitable properties, and long-term growth.
              </p>
              
              <button className="group relative px-12 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full font-semibold text-lg shadow-lg shadow-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/40 transition-all duration-300 hover:scale-105 overflow-hidden">
                <span className="relative z-10">Book a Consultation</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
              </button>
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
