'use client'

import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useEffect, useRef } from 'react'

export default function MarketingCommunication() {
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50 overflow-hidden">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-16 sm:pt-20 bg-gradient-to-br from-purple-900 via-pink-800 to-purple-900">
        {/* Background Image - No blur on mobile */}
        <div className="absolute inset-0">
          <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2015&q=80')] bg-cover bg-center md:block hidden"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-pink-800 to-purple-900 md:from-purple-900/80 md:via-pink-800/70 md:to-purple-900/80"></div>
        </div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-60 h-60 sm:w-80 sm:h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-60 h-60 sm:w-80 sm:h-80 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-5xl mx-auto px-4 sm:px-6">

          
          {/* Enhanced heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-100 to-pink-100 mb-4 sm:mb-6 leading-tight tracking-tight animate-slide-up">
            SRQ MARKETING
          </h1>
          
          {/* Decorative elements */}
          <div className="flex items-center justify-center mb-6 sm:mb-8 animate-fade-in delay-300">
            <div className="h-px bg-gradient-to-r from-transparent via-white/50 to-transparent w-16 sm:w-24"></div>
            <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mx-3 sm:mx-4 animate-pulse"></div>
            <div className="h-px bg-gradient-to-r from-transparent via-white/50 to-transparent w-16 sm:w-24"></div>
          </div>
          
          {/* Enhanced subtitle */}
          <p className="text-base sm:text-lg md:text-xl font-light text-white/90 mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed animate-slide-up delay-500 px-2">
            Strategic Brand Communication. Digital Marketing Excellence. Creative Campaign Solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center animate-fade-in delay-700 px-4">
            <button className="px-6 sm:px-8 py-3 bg-white/10 backdrop-blur-md text-white font-semibold rounded-xl border-2 border-white/30 hover:bg-white/20 transition-all duration-300 hover:scale-105 text-sm sm:text-base">
              View Portfolio
            </button>
            <button className="px-6 sm:px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-600 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-sm sm:text-base">
              Start Your Campaign
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
              <span className="px-3 sm:px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-xs sm:text-sm font-semibold tracking-wide uppercase">
                Marketing Services
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 px-2">
              Strategic <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Marketing Solutions</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              Comprehensive marketing and communication strategies designed to amplify your brand presence and drive meaningful engagement
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Digital Marketing */}
            <div className="group">
              <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-purple-200 h-full hover:-translate-y-2">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">💻</span>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold text-gray-900">Digital Marketing</h3>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Comprehensive digital strategies including SEO, SEM, social media marketing, and targeted advertising campaigns.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-gray-500">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                    SEO & SEM Optimization
                  </div>
                  <div className="flex items-center text-gray-500">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                    Social Media Campaigns
                  </div>
                  <div className="flex items-center text-gray-500">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                    Performance Analytics
                  </div>
                </div>
              </div>
            </div>

            {/* Brand Strategy */}
            <div className="group p-8 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/80 transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Brand Strategy</h3>
              <p className="text-gray-600 leading-relaxed">
                Strategic brand positioning, identity development, and brand architecture to create compelling brand experiences.
              </p>
            </div>

            {/* Content Creation */}
            <div className="group p-8 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/80 transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-red-500 rounded-xl mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Content Creation</h3>
              <p className="text-gray-600 leading-relaxed">
                High-quality content development including copywriting, video production, graphic design, and multimedia content.
              </p>
            </div>

            {/* Public Relations */}
            <div className="group p-8 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/80 transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Public Relations</h3>
              <p className="text-gray-600 leading-relaxed">
                Strategic PR campaigns, media relations, crisis communication, and reputation management services.
              </p>
            </div>

            {/* Social Media Management */}
            <div className="group p-8 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/80 transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-10 0a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2M9 12l2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Social Media Management</h3>
              <p className="text-gray-600 leading-relaxed">
                Complete social media strategy, content planning, community management, and social media advertising.
              </p>
            </div>

            {/* Event Marketing */}
            <div className="group p-8 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/80 transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-pink-500 rounded-xl mb-6 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 0V6a2 2 0 012-2h4a2 2 0 012 2v1m-6 0h6m-6 0l-2 9a2 2 0 002 2h8a2 2 0 002-2l-2-9" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Event Marketing</h3>
              <p className="text-gray-600 leading-relaxed">
                Event planning, promotion, and execution for corporate events, product launches, and brand activations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Showcase Section */}
      <section 
        ref={(el) => { sectionRefs.current[1] = el }}
        className="py-32 bg-gradient-to-br from-purple-50 to-pink-100 opacity-0 translate-y-20 transition-all duration-1000"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl p-8 shadow-2xl">
                <div className="w-full h-full bg-white rounded-2xl shadow-inner flex items-center justify-center">
                  <div className="text-center space-y-6">
                    <div className="text-8xl">🎨</div>
                    <h3 className="text-2xl font-bold text-gray-800">Creative Excellence</h3>
                    <p className="text-gray-600">Innovative marketing campaigns that captivate audiences</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <div className="inline-block">
                <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold tracking-wide uppercase">
                  Marketing Excellence
                </span>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                Creative Campaigns That 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600"> Drive Results</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Our award-winning marketing team creates compelling campaigns that not only capture attention but drive measurable business results through strategic storytelling and data-driven insights.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
                  <div className="text-3xl font-bold text-purple-600 mb-2">200+</div>
                  <div className="text-gray-600">Campaigns Delivered</div>
                </div>
                <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
                  <div className="text-3xl font-bold text-pink-600 mb-2">300%</div>
                  <div className="text-gray-600">Average ROI</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section 
        ref={(el) => { sectionRefs.current[2] = el }}
        className="py-32 px-6 bg-gradient-to-r from-purple-50 to-pink-50 opacity-0 translate-y-20 transition-all duration-1000"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6">
              Our <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach to deliver exceptional marketing and communication results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Research & Analysis</h3>
              <p className="text-gray-600">Deep market research and competitor analysis to understand your landscape</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Strategy Development</h3>
              <p className="text-gray-600">Creating comprehensive marketing strategies aligned with your business goals</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-red-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Implementation</h3>
              <p className="text-gray-600">Executing campaigns with precision and attention to detail</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Optimization</h3>
              <p className="text-gray-600">Continuous monitoring and optimization for maximum ROI</p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Metrics Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6">
              Our <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Impact</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">200+</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Campaigns Delivered</h3>
              <p className="text-gray-600">Successful marketing campaigns across industries</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">150+</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Brands Served</h3>
              <p className="text-gray-600">Diverse portfolio of satisfied clients</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-red-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">300%</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Average ROI</h3>
              <p className="text-gray-600">Return on investment for our clients</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">95%</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Client Retention</h3>
              <p className="text-gray-600">Long-term partnerships with our clients</p>
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
