'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useEffect, useRef, useState } from 'react'

export default function ContactPage() {
  const sectionRefs = useRef<(HTMLElement | null)[]>([])
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    })
    alert('Thank you for your message! We will get back to you soon.')
  }

  return (
    <main className="overflow-hidden">
      <Header />      

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-16 sm:pt-20 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-900/40 to-purple-900"></div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-60 h-60 sm:w-80 sm:h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-60 h-60 sm:w-80 sm:h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-6xl mx-auto px-4 sm:px-6">
          {/* Enhanced heading with gradient text */}
          <h1 className="text-7xl md:text-8xl lg:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-purple-200 mb-8 leading-tight tracking-tight animate-slide-up">
            Contact Us
          </h1>
          
          {/* Decorative elements */}
          <div className="flex items-center justify-center mb-12 animate-fade-in delay-300">
            <div className="h-px bg-gradient-to-r from-transparent via-white/50 to-transparent w-32"></div>
            <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mx-6 animate-pulse"></div>
            <div className="h-px bg-gradient-to-r from-transparent via-white/50 to-transparent w-32"></div>
          </div>
          
          {/* Enhanced subtitle */}
          <p className="text-2xl md:text-3xl font-light text-white/90 mb-16 max-w-4xl mx-auto leading-relaxed animate-slide-up delay-500">
            Get in touch with our expert team for personalized financial and communication solutions.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section 
        ref={(el) => { sectionRefs.current[0] = el }}
        className="py-32 bg-white opacity-0 translate-y-20 transition-all duration-1000"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="inline-block">
                <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold tracking-wide uppercase">
                  Get In Touch
                </span>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                Let's Start a 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> Conversation</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Ready to transform your financial future? Our team of experts is here to provide personalized solutions 
                tailored to your unique needs and goals.
              </p>
              
              {/* Contact Details */}
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                    <span className="text-xl text-white">📧</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Email Us</h3>
                    <p className="text-gray-600">info@srqifmc.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                    <span className="text-xl text-white">📞</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Call Us</h3>
                    <p className="text-gray-600">+91 87630 19090</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
                    <span className="text-xl text-white">📍</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Visit Us</h3>
                    <p className="text-gray-600">DCB-228 DLF CYBERCITY, PATIA BHUBANESWAR</p>
                  </div>
                </div>
              </div>
            </div>         
   
            {/* Contact Form */}
            <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-8 shadow-xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">
                      Service Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    >
                      <option value="">Select a service</option>
                      <option value="finance">Finance Services</option>
                      <option value="insurance">Insurance Solutions</option>
                      <option value="marketing">Marketing & Communication</option>
                      <option value="real-estate">Real Estate Services</option>
                      <option value="consultation">General Consultation</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="Tell us about your requirements..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
   
   {/* Services Overview Section */}
      <section 
        ref={(el) => { sectionRefs.current[1] = el }}
        className="py-32 bg-gradient-to-br from-blue-50 to-purple-50 opacity-0 translate-y-20 transition-all duration-1000"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              How We Can Help You
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our comprehensive range of services designed to meet all your financial and communication needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: '💼',
                title: 'Finance Services',
                description: 'Comprehensive financial planning, loans, and investment advisory services.',
                color: 'from-blue-500 to-blue-600'
              },
              {
                icon: '🛡️',
                title: 'Insurance Solutions',
                description: 'Life, health, motor, and general insurance products tailored for you.',
                color: 'from-purple-500 to-purple-600'
              },
              {
                icon: '📢',
                title: 'Marketing & Communication',
                description: 'Strategic brand communication and digital marketing excellence.',
                color: 'from-pink-500 to-pink-600'
              },
              {
                icon: '🏢',
                title: 'Real Estate Services',
                description: 'Property investment, advisory, and market analysis services.',
                color: 'from-green-500 to-green-600'
              }
            ].map((service, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-gray-200 h-full hover:-translate-y-2">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-2xl">{service.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              </div>
            ))}
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