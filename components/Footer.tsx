import Link from 'next/link'

export default function Footer() {
  return (
    <footer style={{background: '#1e293b', color: 'white', padding: '3rem 0 1rem'}}>
      <div className="section-container">
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem', marginBottom: '2rem'}}>
          {/* Column 1: SRIQ IFMC */}
          <div>
            <h3 style={{fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: 'white'}}>
              SRQ IFMC
            </h3>
            <p style={{color: '#94a3b8', lineHeight: 1.6, marginBottom: '1.5rem'}}>
              Integrated financial and communication solutions that drive growth, enhance brand presence, and optimize financial portfolios.
            </p>
            <div style={{display: 'flex', gap: '1rem'}}>
              {['📘', '🐦', '💼', '📷'].map((icon, index) => (
                <div key={index} style={{
                  width: '40px',
                  height: '40px',
                  background: '#374151',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.2rem',
                  cursor: 'pointer',
                  transition: 'background 0.3s ease'
                }}>
                  {icon}
                </div>
              ))}
            </div>
          </div>
          
          {/* Column 2: Quick Links */}
          <div>
            <h4 style={{fontSize: '1.2rem', fontWeight: 600, marginBottom: '1rem', color: 'white'}}>
              Quick Links
            </h4>
            <ul style={{listStyle: 'none', padding: 0, margin: 0}}>
              {[
                { href: '#home', text: 'Home' },
                { href: '#about', text: 'About Us' },
                { href: '#services', text: 'Services' },
                { href: '#investment', text: 'Investment' },
                { href: '#contact-us', text: 'Contact' }
              ].map((link, index) => (
                <li key={index} style={{marginBottom: '0.5rem'}}>
                  <Link 
                    href={link.href}
                    style={{
                      color: '#94a3b8',
                      textDecoration: 'none',
                      transition: 'color 0.3s ease'
                    }}
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Column 3: Services */}
          <div>
            <h4 style={{fontSize: '1.2rem', fontWeight: 600, marginBottom: '1rem', color: 'white'}}>
              Services
            </h4>
            <ul style={{listStyle: 'none', padding: 0, margin: 0}}>
              {[
                { href: '#services', text: 'Finance Services' },
                { href: '#services', text: 'General Insurance' },
                { href: '#services', text: 'Life Insurance' },
                { href: '#investment', text: 'Mutual Funds' },
                { href: '#investment', text: 'NCDs' },
                { href: '#communication', text: 'Strategic Communication' }
              ].map((link, index) => (
                <li key={index} style={{marginBottom: '0.5rem'}}>
                  <Link 
                    href={link.href}
                    style={{
                      color: '#94a3b8',
                      textDecoration: 'none',
                      transition: 'color 0.3s ease'
                    }}
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Column 4: Contact Information */}
          <div>
            <h4 style={{fontSize: '1.2rem', fontWeight: 600, marginBottom: '1rem', color: 'white'}}>
              Contact Information
            </h4>
            <div style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
              <div style={{display: 'flex', gap: '0.75rem', alignItems: 'flex-start'}}>
                <div style={{
                  width: '20px',
                  height: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1rem',
                  flexShrink: 0,
                  marginTop: '0.1rem'
                }}>
                  📍
                </div>
                <p style={{color: '#94a3b8', margin: 0, lineHeight: 1.5}}>
                  DCB-228 DLF CYBERCITY, PATIA BHUBANESWAR
                </p>
              </div>
              
              <div style={{display: 'flex', gap: '0.75rem', alignItems: 'center'}}>
                <div style={{
                  width: '20px',
                  height: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1rem',
                  flexShrink: 0
                }}>
                  📞
                </div>
                <p style={{color: '#94a3b8', margin: 0}}>+91 87630 19090</p>
              </div>
              
              <div style={{display: 'flex', gap: '0.75rem', alignItems: 'center'}}>
                <div style={{
                  width: '20px',
                  height: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1rem',
                  flexShrink: 0
                }}>
                  📧
                </div>
                <p style={{color: '#94a3b8', margin: 0}}>solutions@srq.in</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Section: Copyright and Disclaimer */}
        <div style={{
          borderTop: '1px solid #374151',
          paddingTop: '2rem',
          textAlign: 'center'
        }}>
          <p style={{color: '#94a3b8', margin: '0 0 0.5rem 0', fontSize: '0.9rem'}}>
            © 2023 SRQ IFMC. All rights reserved.
          </p>
          <p style={{color: '#6b7280', margin: 0, fontSize: '0.85rem', lineHeight: 1.4}}>
            Disclaimer: Financial and insurance advisory services are subject to market risks. Please read all scheme-related documents carefully before investing.
          </p>
        </div>
      </div>
    </footer>
  )
}
