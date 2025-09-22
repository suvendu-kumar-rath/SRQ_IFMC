'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

export default function Services() {
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
  return (
    <section ref={sectionRef} className="section bg-white relative overflow-hidden" id="services">
      {/* Blue gradient elements - Hidden on mobile */}
      <div className="hidden md:block absolute top-24 left-6 w-60 h-60 bg-blue-500/45 rounded-full blur-3xl"></div>
      <div className="hidden md:block absolute bottom-32 right-8 w-48 h-48 bg-blue-400/50 rounded-full blur-2xl animate-pulse"></div>
      
      <div className="section-container">
        <div className={`section-header transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="section-title">
            Core <span className="highlight-blue">Finance & Insurance Services</span>
          </h2>
          <div className="title-underline"></div>
          <p className="section-description">
            Comprehensive financial and insurance solutions tailored to your unique needs and objectives.
          </p>
        </div>
        
        {/* Featured Service with Image */}
        <div style={{ 
          marginBottom: '4rem',
          background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.05) 0%, rgba(139, 92, 246, 0.05) 100%)',
          borderRadius: '24px',
          padding: '2rem',
          display: 'flex',
          alignItems: 'center',
          gap: '2rem',
          flexWrap: 'wrap'
        }} className="sm:p-8 sm:gap-12">
          <div style={{ flex: '1', minWidth: '280px' }}>
            <h3 style={{ 
              fontSize: '2rem', 
              fontWeight: '700', 
              color: '#1e293b', 
              marginBottom: '1rem' 
            }}>
              Why Choose Our Services?
            </h3>
            <p style={{ 
              fontSize: '1.1rem', 
              color: '#64748b', 
              lineHeight: '1.7',
              marginBottom: '2rem'
            }}>
              Our comprehensive approach combines years of expertise with personalized service to deliver 
              financial solutions that truly make a difference in your life and business.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <span style={{
                background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
                color: 'white',
                padding: '0.5rem 1rem',
                borderRadius: '20px',
                fontSize: '0.9rem',
                fontWeight: '600'
              }}>Expert Guidance</span>
              <span style={{
                background: 'linear-gradient(135deg, #8b5cf6, #7c3aed)',
                color: 'white',
                padding: '0.5rem 1rem',
                borderRadius: '20px',
                fontSize: '0.9rem',
                fontWeight: '600'
              }}>Personalized Solutions</span>
              <span style={{
                background: 'linear-gradient(135deg, #10b981, #059669)',
                color: 'white',
                padding: '0.5rem 1rem',
                borderRadius: '20px',
                fontSize: '0.9rem',
                fontWeight: '600'
              }}>Trusted Partners</span>
            </div>
          </div>
          
          <div style={{ flex: '1', minWidth: '280px', textAlign: 'center' }}>
            <div style={{
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15)',
              background: 'rgba(255, 255, 255, 0.8)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.3)'
            }}>
              <Image 
                src="/assets/assets/why.png" 
                alt="Why Choose SRQ IFMC Services" 
                width={400}
                height={300}
                style={{ 
                  width: '100%',
                  height: 'auto',
                  objectFit: 'cover'
                }}
              />
            </div>
          </div>
        </div>
        
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginTop: '3rem', padding: '0 1rem'}} className="md:flex md:overflow-x-auto md:justify-center md:grid-cols-none">
          <div style={{
            padding: '2rem 1.5rem',
            borderRadius: '16px',
            textAlign: 'center',
            background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
            color: 'white',
            minWidth: '240px',
            flexShrink: 0,
            transition: 'transform 0.3s ease, box-shadow 0.3s ease'
          }}>
            <div style={{
              width: '50px',
              height: '50px',
              background: 'rgba(255, 255, 255, 0.2)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1rem',
              fontSize: '1.5rem',
              backdropFilter: 'blur(10px)'
            }}>
              📈
            </div>
            <h3 style={{fontSize: '1.3rem', fontWeight: 600, marginBottom: '1rem'}}>Finance Services</h3>
            <ul style={{listStyle: 'none', padding: 0, textAlign: 'left'}}>
              {['Business Loans', 'Personal Loans', 'Home Loans', 'Loan Against Property', 'Working Capital Finance', 'Project Finance', 'And many more...'].map((item, index) => (
                <li key={index} style={{
                  padding: '0.4rem 0',
                  position: 'relative',
                  paddingLeft: '1.5rem',
                  fontSize: '0.85rem',
                  lineHeight: 1.3
                }}>
                  <span style={{
                    content: '✓',
                    position: 'absolute',
                    left: 0,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    width: '16px',
                    height: '16px',
                    background: 'white',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.7rem',
                    color: '#3b82f6',
                    fontWeight: 'bold'
                  }}>✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          
          <div style={{
            padding: '2rem 1.5rem',
            borderRadius: '16px',
            textAlign: 'center',
            background: 'linear-gradient(135deg, #8b5cf6, #7c3aed)',
            color: 'white',
            minWidth: '240px',
            flexShrink: 0,
            transition: 'transform 0.3s ease, box-shadow 0.3s ease'
          }}>
            <div style={{
              width: '50px',
              height: '50px',
              background: 'rgba(255, 255, 255, 0.2)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1rem',
              fontSize: '1.5rem',
              backdropFilter: 'blur(10px)'
            }}>
              🛡️
            </div>
            <h3 style={{fontSize: '1.3rem', fontWeight: 600, marginBottom: '1rem'}}>General Insurance</h3>
            <ul style={{listStyle: 'none', padding: 0, textAlign: 'left'}}>
              {['Motor Insurance', 'Health Insurance', 'Travel Insurance', 'Home Insurance', 'Fire Insurance', 'Marine Insurance', 'And many more...'].map((item, index) => (
                <li key={index} style={{
                  padding: '0.4rem 0',
                  position: 'relative',
                  paddingLeft: '1.5rem',
                  fontSize: '0.85rem',
                  lineHeight: 1.3
                }}>
                  <span style={{
                    content: '✓',
                    position: 'absolute',
                    left: 0,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    width: '16px',
                    height: '16px',
                    background: 'white',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.7rem',
                    color: '#8b5cf6',
                    fontWeight: 'bold'
                  }}>✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          
          <div style={{
            padding: '2rem 1.5rem',
            borderRadius: '16px',
            textAlign: 'center',
            background: 'linear-gradient(135deg, #1e40af, #1e3a8a)',
            color: 'white',
            minWidth: '240px',
            flexShrink: 0,
            transition: 'transform 0.3s ease, box-shadow 0.3s ease'
          }}>
            <div style={{
              width: '50px',
              height: '50px',
              background: 'rgba(255, 255, 255, 0.2)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1rem',
              fontSize: '1.5rem',
              backdropFilter: 'blur(10px)'
            }}>
              ❤️
            </div>
            <h3 style={{fontSize: '1.3rem', fontWeight: 600, marginBottom: '1rem'}}>Life Insurance</h3>
            <ul style={{listStyle: 'none', padding: 0, textAlign: 'left'}}>
              {['Term Life Insurance', 'Endowment Plans', 'ULIPs', 'Child Plans', 'Retirement Plans', 'Group Life Insurance', 'And many more...'].map((item, index) => (
                <li key={index} style={{
                  padding: '0.4rem 0',
                  position: 'relative',
                  paddingLeft: '1.5rem',
                  fontSize: '0.85rem',
                  lineHeight: 1.3
                }}>
                  <span style={{
                    content: '✓',
                    position: 'absolute',
                    left: 0,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    width: '16px',
                    height: '16px',
                    background: 'white',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.7rem',
                    color: '#1e40af',
                    fontWeight: 'bold'
                  }}>✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          
          <div style={{
            padding: '2rem 1.5rem',
            borderRadius: '16px',
            textAlign: 'center',
            background: 'linear-gradient(135deg, #059669, #047857)',
            color: 'white',
            minWidth: '240px',
            flexShrink: 0,
            transition: 'transform 0.3s ease, box-shadow 0.3s ease'
          }}>
            <div style={{
              width: '50px',
              height: '50px',
              background: 'rgba(255, 255, 255, 0.2)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1rem',
              fontSize: '1.5rem',
              backdropFilter: 'blur(10px)'
            }}>
              🏢
            </div>
            <h3 style={{fontSize: '1.3rem', fontWeight: 600, marginBottom: '1rem'}}>Real Estate Services</h3>
            <ul style={{listStyle: 'none', padding: 0, textAlign: 'left'}}>
              {['Property Investment', 'Real Estate Advisory', 'Property Valuation', 'Market Analysis', 'Investment Planning', 'Portfolio Management', 'And many more...'].map((item, index) => (
                <li key={index} style={{
                  padding: '0.4rem 0',
                  position: 'relative',
                  paddingLeft: '1.5rem',
                  fontSize: '0.85rem',
                  lineHeight: 1.3
                }}>
                  <span style={{
                    content: '✓',
                    position: 'absolute',
                    left: 0,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    width: '16px',
                    height: '16px',
                    background: 'white',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.7rem',
                    color: '#059669',
                    fontWeight: 'bold'
                  }}>✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
