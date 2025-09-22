export default function Testimonials() {
  const testimonials = [
    {
      name: 'Rajesh Kumar',
      role: 'Business Owner',
      company: 'Kumar Industries',
      content: 'SRQ IFMC helped us secure the perfect business loan with excellent terms. Their expertise in financial advisory made the entire process seamless.',
      rating: 5,
      image: '👨‍💼'
    },
    {
      name: 'Priya Sharma',
      role: 'Marketing Director',
      company: 'Tech Solutions Pvt Ltd',
      content: 'Their strategic communication services transformed our brand presence. The marketing campaigns delivered exceptional ROI and brand recognition.',
      rating: 5,
      image: '👩‍💼'
    },
    {
      name: 'Amit Patel',
      role: 'Real Estate Investor',
      company: 'Patel Properties',
      content: 'Found my dream commercial property through SRQ IFMC. Their real estate team provided valuable insights and negotiated the best deal.',
      rating: 5,
      image: '👨‍🏢'
    }
  ]

  return (
    <section className="relative py-20 bg-gradient-to-br from-blue-50 to-white overflow-hidden">
      {/* Blue gradient elements - Hidden on mobile */}
      <div className="hidden md:block absolute top-12 right-16 w-56 h-56 bg-blue-500/45 rounded-full blur-3xl animate-pulse"></div>
      <div className="hidden md:block absolute bottom-20 left-12 w-40 h-40 bg-blue-400/50 rounded-full blur-2xl animate-pulse delay-700"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16 px-4">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            CLIENT <span className="text-blue-600">SUCCESS STORIES</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients 
            have to say about their experience with SRQ IFMC.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-0">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:scale-105"
            >
              <div className="flex items-center mb-6">
                <div className="text-4xl mr-4">{testimonial.image}</div>
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-xs text-blue-600 font-medium">{testimonial.company}</p>
                </div>
              </div>
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">⭐</span>
                ))}
              </div>
              
              <p className="text-gray-700 leading-relaxed italic">
                "{testimonial.content}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
