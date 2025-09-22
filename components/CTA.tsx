export default function CTA() {
  return (
    <section className="relative py-20 bg-gradient-to-r from-gray-900 to-gray-800 overflow-hidden">
      {/* Blue gradient elements - Hidden on mobile */}
      <div className="hidden md:block absolute top-12 left-16 w-44 h-44 bg-blue-500/40 rounded-full blur-2xl animate-pulse"></div>
      <div className="hidden md:block absolute bottom-16 right-20 w-52 h-52 bg-blue-400/50 rounded-full blur-3xl animate-pulse delay-600"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6">
          READY TO TRANSFORM YOUR
          <br />
          <span className="text-blue-400">FINANCIAL FUTURE?</span>
        </h2>
        
        <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed px-4">
          Join thousands of satisfied clients who have achieved their financial goals 
          with our expert guidance and personalized solutions.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
          <a 
            href="/about" 
            className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 bg-blue-600 text-white font-bold text-base sm:text-lg rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            GET STARTED TODAY
          </a>
          <a 
            href="tel:+91-87630-19090" 
            className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 border-2 border-white text-white font-bold text-base sm:text-lg rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300"
          >
            CALL NOW
          </a>
        </div>
        
        <div className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-8 text-gray-400">
          <div className="flex items-center gap-2">
            <span className="text-green-400">✓</span>
            <span>Free Consultation</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-400">✓</span>
            <span>Expert Guidance</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-400">✓</span>
            <span>Personalized Solutions</span>
          </div>
        </div>
      </div>
    </section>
  )
}
