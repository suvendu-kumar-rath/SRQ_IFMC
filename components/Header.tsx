'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50)
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {/* Desktop Header */}
      <div className="hidden md:flex justify-center">
        <header className={`transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] bg-white/95 backdrop-blur-md shadow-lg transform-gpu will-change-transform ${isScrolled
          ? 'mt-4 py-2 px-8 rounded-3xl w-[85vw] max-w-6xl scale-[0.98]'
          : 'mt-0 py-3 px-0 w-full rounded-none scale-100'
          }`}>
          <div className={`flex justify-between items-center transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${isScrolled ? 'px-0' : 'max-w-7xl mx-auto px-6'
            }`}>
            <div className={`flex items-center transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${isScrolled ? 'gap-2' : 'gap-3'}`}>
              <div className={`${isScrolled ? 'w-10 h-10' : 'w-14 h-14'} rounded-full bg-white shadow-lg flex items-center justify-center p-2 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] overflow-hidden transform-gpu`}>
                <Image
                  src="/assets/assets/SRIQ IFMC LLP BRAND KIT.jpg"
                  alt="SRIQ IFMC LLP Logo"
                  width={isScrolled ? 24 : 32}
                  height={isScrolled ? 24 : 32}
                  className="transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] object-contain transform-gpu"
                />
              </div>
              <span className={`font-bold text-red-600 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${isScrolled ? 'text-base' : 'text-xl'
                }`}>
                SRQ Estates
              </span>
            </div>
            <nav>
              <ul className={`flex items-center transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${isScrolled ? 'gap-4' : 'gap-8'}`}>
                {/* <li>
                  <Link
                    href="/"
                    className={`text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${isScrolled ? 'text-sm' : 'text-base'}`}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className={`text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${isScrolled ? 'text-sm' : 'text-base'}`}
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/finance"
                    className={`text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${isScrolled ? 'text-sm' : 'text-base'}`}
                  >
                    Finance
                  </Link>
                </li>
                <li>
                  <Link
                    href="/marketing-communication"
                    className={`text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${isScrolled ? 'text-sm' : 'text-base'}`}
                  >
                    Marketing & Communication
                  </Link>
                </li> */}
                <li>
                  <Link
                    href="/real-estate"
                    className={`text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${isScrolled ? 'text-sm' : 'text-base'}`}
                  >
                    Real Estate
                  </Link>
                </li> 
                <li>
                  <Link
                    href="/contact"
                    className={`bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 font-medium transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 ${isScrolled ? 'text-sm px-3 py-1.5' : 'text-base px-4 py-2'}`}
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
      </div>

      {/* Mobile Header */}
      <div className="md:hidden relative z-50">
        <header className="bg-white/95 backdrop-blur-md shadow-lg w-full relative z-50">
          <div className="flex justify-between items-center px-4 py-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center p-2 overflow-hidden">
                <Image
                  src="/assets/assets/SRIQ IFMC LLP BRAND KIT.svg"
                  alt="SRIQ IFMC LLP Logo"
                  width={24}
                  height={24}
                  className="object-contain"
                />
              </div>
              <span className="font-bold text-blue-800 text-lg">
                SRQ
              </span>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 relative z-50"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span className={`bg-gray-700 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMobileMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'
                  }`}></span>
                <span className={`bg-gray-700 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
                  }`}></span>
                <span className={`bg-gray-700 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMobileMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'
                  }`}></span>
              </div>
            </button>
          </div>

          {/* Mobile Dropdown Menu */}
          <div className={`absolute top-full left-0 right-0 transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] overflow-hidden z-50 transform-gpu ${isMobileMenuOpen ? 'max-h-96 opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-2'
            }`}>
            <nav className="px-4 pb-4 bg-white/95 backdrop-blur-md border-t border-gray-100 shadow-lg">
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/"
                    onClick={closeMobileMenu}
                    className="block py-3 px-4 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg font-medium transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] relative z-50 transform hover:translate-x-1"
                  >
                    🏠 Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    onClick={closeMobileMenu}
                    className="block py-3 px-4 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg font-medium transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] relative z-50 transform hover:translate-x-1"
                  >
                    ℹ️ About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/finance"
                    onClick={closeMobileMenu}
                    className="block py-3 px-4 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg font-medium transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] relative z-50 transform hover:translate-x-1"
                  >
                    💰 Finance
                  </Link>
                </li>
                <li>
                  <Link
                    href="/marketing-communication"
                    onClick={closeMobileMenu}
                    className="block py-3 px-4 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg font-medium transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] relative z-50 transform hover:translate-x-1"
                  >
                    📢 Marketing & Communication
                  </Link>
                </li>
                <li>
                  <Link
                    href="/real-estate"
                    onClick={closeMobileMenu}
                    className="block py-3 px-4 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg font-medium transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] relative z-50 transform hover:translate-x-1"
                  >
                    🏢 Real Estate
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    onClick={closeMobileMenu}
                    className="block py-3 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 rounded-lg font-medium transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] relative z-50 text-center shadow-lg transform hover:scale-105"
                  >
                    📞 Contact Us
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-30"
          onClick={closeMobileMenu}
        ></div>
      )}
    </div>
  )
}
