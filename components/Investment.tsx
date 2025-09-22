import Image from 'next/image'

export default function Investment() {
  return (
    <section className="section bg-white" id="investment">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">Investment Solutions</h2>
          <p className="section-description">
            Strategic investment options designed to maximize returns and achieve your financial goals.
          </p>
        </div>
        
        <div className="cards-grid two-columns">
          <div className="card" style={{padding: 0, overflow: 'hidden'}}>
            <div style={{
              height: '200px',
              position: 'relative',
              backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/assets/assets/mutual-fund.png")',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}>
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                padding: '2rem',
                color: 'white'
              }}>
                <h3 style={{fontSize: '1.8rem', fontWeight: 700, marginBottom: '0.5rem', color: 'white'}}>
                  Mutual Funds
                </h3>
                <p style={{fontSize: '1rem', color: 'rgba(255, 255, 255, 0.9)', margin: 0, lineHeight: 1.4}}>
                  Diversified investment portfolios managed by professionals
                </p>
              </div>
            </div>
            <div style={{padding: '2rem'}}>
              <ul style={{listStyle: 'none', padding: 0, margin: '0 0 2rem 0'}}>
                {['Equity Funds', 'Debt Funds', 'Hybrid Funds', 'Thematic Funds'].map((item, index) => (
                  <li key={index} style={{
                    color: '#374151',
                    padding: '0.8rem 0',
                    position: 'relative',
                    paddingLeft: '2.5rem',
                    fontSize: '1rem',
                    lineHeight: 1.4
                  }}>
                    <span style={{
                      content: '✓',
                      position: 'absolute',
                      left: 0,
                      top: '50%',
                      transform: 'translateY(-50%)',
                      width: '24px',
                      height: '24px',
                      background: '#3b82f6',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.9rem',
                      color: 'white',
                      fontWeight: 'bold'
                    }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <button style={{
                background: '#3b82f6',
                color: 'white',
                border: 'none',
                padding: '1rem 2rem',
                borderRadius: '8px',
                fontSize: '1rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                width: '100%'
              }}>
                Learn More
              </button>
            </div>
          </div>
          
          <div className="card" style={{padding: 0, overflow: 'hidden'}}>
            <div style={{
              height: '200px',
              position: 'relative',
              backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/assets/assets/ndc.png")',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}>
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                padding: '2rem',
                color: 'white'
              }}>
                <h3 style={{fontSize: '1.8rem', fontWeight: 700, marginBottom: '0.5rem', color: 'white'}}>
                  Non-Convertible Debentures (NCD)
                </h3>
                <p style={{fontSize: '1rem', color: 'rgba(255, 255, 255, 0.9)', margin: 0, lineHeight: 1.4}}>
                  Fixed income securities with attractive interest rates
                </p>
              </div>
            </div>
            <div style={{padding: '2rem'}}>
              <ul style={{listStyle: 'none', padding: 0, margin: '0 0 2rem 0'}}>
                {['Secured NCDs', 'Unsecured NCDs', 'Listed NCDs', 'Unlisted NCDs'].map((item, index) => (
                  <li key={index} style={{
                    color: '#374151',
                    padding: '0.8rem 0',
                    position: 'relative',
                    paddingLeft: '2.5rem',
                    fontSize: '1rem',
                    lineHeight: 1.4
                  }}>
                    <span style={{
                      content: '✓',
                      position: 'absolute',
                      left: 0,
                      top: '50%',
                      transform: 'translateY(-50%)',
                      width: '24px',
                      height: '24px',
                      background: '#3b82f6',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.9rem',
                      color: 'white',
                      fontWeight: 'bold'
                    }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <button style={{
                background: '#3b82f6',
                color: 'white',
                border: 'none',
                padding: '1rem 2rem',
                borderRadius: '8px',
                fontSize: '1rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                width: '100%'
              }}>
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
