import Image from 'next/image'

export default function Team() {
  return (
    <section className="section bg-gray bg-pattern relative overflow-hidden" id="team">
      <div className="gradient-orb gradient-orb-1"></div>
      <div className="gradient-orb gradient-orb-2"></div>
      
      {/* Additional blue gradient elements - Hidden on mobile */}
      <div className="hidden md:block absolute top-16 right-12 w-48 h-48 bg-blue-500/45 rounded-full blur-3xl animate-pulse"></div>
      <div className="hidden md:block absolute bottom-28 left-14 w-56 h-56 bg-blue-400/50 rounded-full blur-2xl animate-pulse delay-800"></div>
      
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">
            Meet Our <span className="highlight-blue">Expert Team</span>
          </h2>
          <div className="title-underline"></div>
          <p className="section-description">
            Our dedicated professionals bring decades of combined expertise in finance, real estate, strategic communications, 
            and business operations to deliver exceptional results and drive sustainable growth for our clients.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-4 sm:px-0">
          <div className="team-card">
            <Image 
              src="/assets/assets/punyabrata-mohanty.jpeg" 
              alt="Punyabrata Mohanty" 
              width={120}
              height={120}
              className="team-avatar"
            />
            <h3 className="team-name">Punyabrata Mohanty</h3>
            <p className="team-role">Chief Executive Officer</p>
            <p className="team-description">
              A seasoned executive with 27 years of chronicle success in Public Relations, Corporate Communication, 
              Corporate Affairs, Brand Management, Liaisoning and HR. Punyabrata's extensive expertise drives strategic 
              growth and builds lasting partnerships that create exceptional value for our clients.
            </p>
          </div>
          
          <div className="team-card">
            <Image 
              src="/assets/assets/manasi-jena.jpeg" 
              alt="Manasi Jena" 
              width={120}
              height={120}
              className="team-avatar"
            />
            <h3 className="team-name">Manasi Jena</h3>
            <p className="team-role">Head of Operations & Finance</p>
            <p className="team-description">
              A versatile professional with 20 years of comprehensive experience in administration, office management, 
              law enforcement, surveillance and financial consultation. Manasi ensures operational excellence while 
              providing strategic financial guidance that drives organizational success.
            </p>
          </div>

          <div className="team-card">
            <Image 
              src="/assets/assets/WhatsApp Image 2025-08-29 at 1.31.46 PM.jpeg" 
              alt="Itismita Swain" 
              width={120}
              height={120}
              className="team-avatar"
            />
            <h3 className="team-name">Itismita Swain</h3>
            <p className="team-role">Head of Sales - Real Estate</p>
            <p className="team-description">
              A real estate industry veteran with 15 years of hard-core experience in property sales, investment advisory, 
              and market analysis. Itismita's deep understanding of real estate dynamics and client-focused approach 
              consistently delivers exceptional results in property transactions and investment opportunities.
            </p>
          </div>
        </div>
        
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <p style={{ 
            fontSize: '1.1rem', 
            color: '#64748b', 
            marginBottom: '2rem',
            maxWidth: '600px',
            margin: '0 auto 2rem'
          }}>
            Ready to work with our expert team? Let's discuss how we can help you achieve your financial and business goals.
          </p>
          <a href="#contact-us" className="btn btn-primary">
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  )
}
