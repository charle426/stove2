'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation'
import Link from 'next/link';
import Image from "next/image";

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsMenuOpen(false); // Close menu on route change
  }, [pathname]);

  return (
    <nav className="flex justify-center items-center">
      <div className='bg-[#ffffff73] shadow-lg fixed w-full backdrop-blur-3xl lg:top-5 top-2 z-50 lg:max-w-5xl mx-auto rounded-full'>
      <div className="mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex justify-between items-center p-5">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <div className="w-10 h-10 bg-gradient-to-r rounded-lg flex items-center justify-center">
                <Image src='/logo.png' alt='Stove Africa Logo' width={120} height={40} className="w-full" />
              </div>
             
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="gap-1 flex items-baseline font-medium">
              <Link href="/" className={pathname === '/' ? `text-[#006400] px-3 py-2 text-sm font-medium transition-colors` : `text-gray-900 hover:text-[#006400] px-3 py-2 rounded-md text-sm font-medium transition-colors`}>
                Home
              </Link>
              <Link href="/services" className={pathname === '/services' ? `text-[#006400] px-3 py-2 text-sm font-medium transition-colors` : `text-gray-900 hover:text-[#006400] px-3 py-2 rounded-md text-sm font-medium transition-colors`}>
                Services
              </Link>
              <Link href="/about" className={pathname === '/about' ? `text-[#006400] px-3 py-2 text-sm font-medium transition-colors` : `text-gray-900 hover:text-[#006400] px-3 py-2 rounded-md text-sm font-medium transition-colors`}>
                About
              </Link>
              <Link href="/contact" className={pathname === '/contact' ? `text-[#006400] px-4 py-2 rounded-lg text-sm font-medium transition-colors` : `text-gray-900 hover:text-[#006400] px-4 py-2 rounded-lg text-sm font-medium transition-colors`}>
                Contact Us
              </Link>
              <Link href="/programs" className={pathname === '/programs' ? `text-[#006400] px-3 py-2 rounded-md text-sm font-medium transition-colors` : `text-gray-900 hover:text-[#006400] px-3 py-2 rounded-md text-sm font-medium transition-colors`}>
                Programs
              </Link>
              <Link href="/how-it-works" className={pathname === '/how-it-works' ? `text-[#006400] px-3 py-2 rounded-md text-sm font-medium transition-colors` : `text-gray-900 hover:text-[#006400] px-3 py-2 rounded-md text-sm font-medium transition-colors`}>
                How It Works
              </Link>
              <Link href="/environmental-commitment" className={pathname === '/environmental-commitment' ? `text-[#006400] px-3 py-2 rounded-md text-sm font-medium transition-colors` : `text-gray-900 hover:text-[#000080] px-3 py-2 rounded-md text-sm font-medium transition-colors`}>
                Environmental Commitment
              </Link>
              <Link href="/faq" className={pathname === '/faq' ? `text-[#006400] px-3 py-2 rounded-md text-sm font-medium transition-colors` : `text-gray-900 hover:text-[#006400] px-3 py-2 rounded-md text-sm font-medium transition-colors`}>
                FAQ
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-900 hover:text-green-600 focus:outline-none focus:text-blue-600"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col bg-white border-t">
            <Link href="/"  className={pathname === '/' ? `text-[#000080] px-3 py-2 text-sm font-medium transition-colors` : `text-gray-900 hover:text-[#000080] px-3 py-2 rounded-md text-sm font-medium transition-colors`}>
              Home
            </Link>
            <Link href="/services" className={pathname === '/services' ? `text-[#000080] px-3 py-2 text-sm font-medium transition-colors` : `text-gray-900 hover:text-[#000080] px-3 py-2 rounded-md text-sm font-medium transition-colors`}>
              Services
            </Link>
            <Link href="/programs" className={pathname === '/programs' ? `text-[#000080] px-3 py-2 text-sm font-medium transition-colors` : `text-gray-900 hover:text-[#000080] px-3 py-2 rounded-md text-sm font-medium transition-colors`}>
              Programs
            </Link>
            <Link href="/about" className={pathname === '/about' ? `text-[#000080] px-3 py-2 text-sm font-medium transition-colors` : `text-gray-900 hover:text-[#000080] px-3 py-2 rounded-md text-sm font-medium transition-colors`}>
              About Us
            </Link>
            <Link href="/contact" className={pathname === '/contact' ? `text-[#000080] px-3 py-2 text-sm font-medium transition-colors` : `text-gray-900 hover:text-[#000080] px-3 py-2 rounded-md text-sm font-medium transition-colors`}>
              Contact
            </Link>
            {/* <Link href="/pricing" className={pathname === '/pricing' ? `text-[#000080] px-3 py-2 text-sm font-medium transition-colors` : `text-gray-900 hover:text-[#000080] px-3 py-2 rounded-md text-sm font-medium transition-colors`}>
              Pricing
            </Link> */}
            <Link href="/how-it-works" className={pathname === '/how-it-works' ? `text-[#000080] px-3 py-2 text-sm font-medium transition-colors` : `text-gray-900 hover:text-[#000080] px-3 py-2 rounded-md text-sm font-medium transition-colors`}>
              How It Works
            </Link>
            <Link href="/faq" className={pathname === '/faq' ? `text-[#000080] px-3 py-2 text-sm font-medium transition-colors` : `text-gray-900 hover:text-[#000080] px-3 py-2 rounded-md text-sm font-medium transition-colors`}>
              FAQ
            </Link>
          </div>
        </div>
      )}
      </div>
    </nav>
  );
}
