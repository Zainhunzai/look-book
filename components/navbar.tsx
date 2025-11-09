"use client"

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="container max-w-7xl mx-auto flex justify-between items-center py-4 px-4 sm:px-6 lg:px-8">
        {/* Logo - Hidden on mobile, shown on desktop */}
        <div className="shrink-0 hidden lg:block">
          <Image src="/logo.svg" alt="Look&book" width={190} height={40} className="w-32 sm:w-40 md:w-48 h-auto" />
        </div>

        {/* Mobile: Menu button on left */}
        <button 
          className="lg:hidden z-50 p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Desktop Menu */}
        <div className="hidden lg:block">
          <ul className="flex items-center gap-8">
            <li>
              <a href="/" className="hover:text-purple-600 transition-colors">Home</a>
            </li>
            <li>
              <a href="/how-app-works" className="hover:text-purple-600 transition-colors">How apps works?</a>
            </li>
            <li>
              <a href="/blog" className="hover:text-purple-600 transition-colors">Blog</a>
            </li>
            {/* <li className="flex items-center gap-2">
              <a href="#Pages" className="hover:text-purple-600 transition-colors">Pages</a>
              <Image src="/dropdown.svg" alt="Download App" width={24} height={24} />
            </li> */}
            <Button 
              variant="outline" 
              className="px-6 py-3 cursor-pointer text-white text-lg font-rethink-sans font-semibold leading-6 hover:text-white/90"
              style={{
                borderRadius: '16px',
                border: '1px solid var(--Temp-UntitledStyle, #000)',
                background: 'var(--Gradient, linear-gradient(286deg, var(--purple-500, #8B5CF6) -5.43%, var(--purple-800, #5B21B6) 111.96%))',
                boxShadow: '0 0 0 1px #FFF inset, 0 0 0 1.5px var(--purple-50, #F5F3FF) inset, 0 0 0 1px var(--purple-300, #C4B5FD), 0 8px 16px 0 var(--purple-100, #EDE9FE), 0 16px 32px 0 var(--purple-100, #EDE9FE)',
              }}
            >
              Download App
              <Image src="/downArrow.svg" alt="Download App" width={32} height={32} />
            </Button>
          </ul>
        </div>

        {/* Mobile: Download button on right */}
        <div className="lg:hidden">
          <Button 
            variant="outline" 
            className="px-4 py-2 cursor-pointer text-white hover:text-white/90 font-semibold font-rethink-sans text-sm leading-5"
            style={{
              borderRadius: '16px',
              border: '1px solid var(--Temp-UntitledStyle, #000)',
              background: 'var(--Gradient, linear-gradient(286deg, var(--purple-500, #8B5CF6) -5.43%, var(--purple-800, #5B21B6) 111.96%))',
              boxShadow: '0 0 0 1px #FFF inset, 0 0 0 1.5px var(--purple-50, #F5F3FF) inset, 0 0 0 1px var(--purple-300, #C4B5FD), 0 8px 16px 0 var(--purple-100, #EDE9FE), 0 16px 32px 0 var(--purple-100, #EDE9FE)',
            }}
          >
            Download App
            <Image src="/downArrow.svg" alt="Download App" width={24} height={24} />
          </Button>
        </div>
      </nav>

      {/* Mobile Menu Side Drawer */}
      {isMenuOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
            onClick={() => setIsMenuOpen(false)}
          />
          {/* Side Drawer */}
          <div className="fixed left-0 top-0 h-full w-80 bg-white z-50 lg:hidden shadow-2xl transform transition-transform duration-300 ease-in-out">
            <div className="flex flex-col h-full p-6">
              {/* Header with Logo and Close Button */}
              <div className="flex justify-between items-start mb-8 pt-4">
                <Image src="/logo.svg" alt="Look&book" width={190} height={40} className="w-40 h-auto" />
                <button 
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  aria-label="Close menu"
                >
                  <X size={24} />
                </button>
              </div>
              
              {/* Navigation Links */}
              <nav className="flex flex-col space-y-6">
                <a 
                  href="/" 
                  className="text-xl font-medium hover:text-purple-600 transition-colors" 
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </a>
                <a 
                  href="/how-app-works" 
                  className="text-xl font-medium hover:text-purple-600 transition-colors" 
                  onClick={() => setIsMenuOpen(false)}
                >
                  How apps works?
                </a>
                <a 
                  href="/blog" 
                  className="text-xl font-medium hover:text-purple-600 transition-colors" 
                  onClick={() => setIsMenuOpen(false)}
                >
                  Blog
                </a>
                {/* <a 
                  href="/pages" 
                  className="text-xl font-medium hover:text-purple-600 transition-colors" 
                  onClick={() => setIsMenuOpen(false)}
                >
                  Pages
                </a> */}
              </nav>
            </div>
          </div>
        </>
      )}
    </>
  );
}

