'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Handle form submission logic here
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section className="section bg-gray relative overflow-hidden" id="contact-us">
      {/* Blue gradient elements - Hidden on mobile */}
      <div className="hidden md:block absolute top-16 right-14 w-48 h-48 bg-blue-500/45 rounded-full blur-2xl animate-pulse"></div>
      <div className="hidden md:block absolute bottom-20 left-12 w-56 h-56 bg-blue-400/50 rounded-full blur-3xl animate-pulse delay-800"></div>
      
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">Get in Touch</h2>
          <p className="section-description">
            Ready to start your journey? Let&apos;s discuss how we can help you achieve your goals.
          </p>
        </div>
        
        <div style={{display: 'grid', gridTemplateColumns: '1fr', gap: '3rem', alignItems: 'start'}} className="lg:grid-cols-2 lg:gap-16">
          <div>
            <h3 style={{fontSize: '1.3rem', fontWeight: 600, color: '#1e293b', marginBottom: '2rem'}}>
              Contact Information
            </h3>
            
            <div style={{display: 'flex', flexDirection: 'column', gap: '1.5rem'}} className="sm:gap-8">
              <div style={{display: 'flex', gap: '1rem', alignItems: 'flex-start'}}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  background: '#3b82f6',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.2rem',
                  flexShrink: 0
                }}>
                  📍
                </div>
                <div>
                  <h4 style={{fontSize: '1.1rem', fontWeight: 600, color: '#1e293b', marginBottom: '0.5rem'}}>Our Office</h4>
                  <p style={{color: '#64748b', margin: 0, lineHeight: 1.5}}>DCB-228 DLF CYBERCITY, PATIA BHUBANESWAR</p>
                </div>
              </div>
              
              <div style={{display: 'flex', gap: '1rem', alignItems: 'flex-start'}}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  background: '#3b82f6',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.2rem',
                  flexShrink: 0
                }}>
                  📞
                </div>
                <div>
                  <h4 style={{fontSize: '1.1rem', fontWeight: 600, color: '#1e293b', marginBottom: '0.5rem'}}>Phone</h4>
                  <p style={{color: '#64748b', margin: 0, lineHeight: 1.5}}>+91 87630 19090</p>
                </div>
              </div>
              
              <div style={{display: 'flex', gap: '1rem', alignItems: 'flex-start'}}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  background: '#3b82f6',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.2rem',
                  flexShrink: 0
                }}>
                  📧
                </div>
                <div>
                  <h4 style={{fontSize: '1.1rem', fontWeight: 600, color: '#1e293b', marginBottom: '0.5rem'}}>Email</h4>
                  <p style={{color: '#64748b', margin: 0, lineHeight: 1.5}}>solutions@srq.in</p>
                </div>
              </div>
              
              <div style={{display: 'flex', gap: '1rem', alignItems: 'flex-start'}}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  background: '#3b82f6',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.2rem',
                  flexShrink: 0
                }}>
                  🕒
                </div>
                <div>
                  <h4 style={{fontSize: '1.1rem', fontWeight: 600, color: '#1e293b', marginBottom: '0.5rem'}}>Business Hours</h4>
                  <p style={{color: '#64748b', margin: 0, lineHeight: 1.5}}>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p style={{color: '#64748b', margin: 0, lineHeight: 1.5}}>Saturday: 10:00 AM - 2:00 PM</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="card">
            <h3 style={{fontSize: '1.3rem', fontWeight: 600, color: '#1e293b', marginBottom: '1.5rem'}}>
              Send Us a Message
            </h3>
            <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column', gap: '1.25rem'}} className="sm:gap-6">
              <div style={{display: 'grid', gridTemplateColumns: '1fr', gap: '1rem'}} className="sm:grid-cols-2">
                <div>
                  <label style={{display: 'block', marginBottom: '0.5rem', fontWeight: 500, color: '#374151'}}>
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '1px solid #d1d5db',
                      borderRadius: '8px',
                      fontSize: '1rem'
                    }}
                  />
                </div>
                <div>
                  <label style={{display: 'block', marginBottom: '0.5rem', fontWeight: 500, color: '#374151'}}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '1px solid #d1d5db',
                      borderRadius: '8px',
                      fontSize: '1rem'
                    }}
                  />
                </div>
              </div>
              
              <div>
                <label style={{display: 'block', marginBottom: '0.5rem', fontWeight: 500, color: '#374151'}}>
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '1px solid #d1d5db',
                    borderRadius: '8px',
                    fontSize: '1rem'
                  }}
                />
              </div>
              
              <div>
                <label style={{display: 'block', marginBottom: '0.5rem', fontWeight: 500, color: '#374151'}}>
                  Service of Interest
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '1px solid #d1d5db',
                    borderRadius: '8px',
                    fontSize: '1rem'
                  }}
                >
                  <option value="">Select a Service</option>
                  <option value="finance">Finance Services</option>
                  <option value="insurance">Insurance Services</option>
                  <option value="investment">Investment Solutions</option>
                  <option value="communication">Communication Services</option>
                </select>
              </div>
              
              <div>
                <label style={{display: 'block', marginBottom: '0.5rem', fontWeight: 500, color: '#374151'}}>
                  Your Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  required
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '1px solid #d1d5db',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    resize: 'vertical'
                  }}
                />
              </div>
              
              <button
                type="submit"
                className="btn btn-primary"
                style={{width: '100%', padding: '1rem'}}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
