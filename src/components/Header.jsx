'use client' // Nécessaire pour les hooks et l'état

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import image from "../../public/images/logo2.png"
export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 rounded-md">
          <Image
            src={image}
            alt="DNPS Logo"
            width={120}  // Set actual width of your logo
            height={40}  // Set actual height of your logo
            className="h-10 scale-125 w-auto opacity-90 hover:opacity-100 transition-opacity duration-200"
            priority={true}  // If logo is above the fold
            quality={90}     // Optimize quality
            unoptimized={false} // Let Next.js optimize (remove if using external URLs)
          />
        </Link>
        {/* Navigation Desktop */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/" className="font-medium text-gray-800 hover:text-green-700">
            Accueil
          </Link>
          <Link href="/services" className="font-medium text-gray-800 hover:text-green-700">
            Services
          </Link>

          <Link href="/contact" className="font-medium text-gray-800 hover:text-green-700">
            Contact
          </Link>
          <Link
            href="/devis"
            className="bg-green-700 hover:bg-green-800 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
          >
            Devis gratuit
          </Link>
        </nav>

        {/* Menu mobile */}
        <div className="md:hidden flex items-center">
          {/* Bouton CTA mobile (visible seulement sur mobile) */}
          <Link
            href="/devis"
            className="mr-4 bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-lg font-semibold text-sm transition-colors"
          >
            Devis
          </Link>

          {/* Bouton burger */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-800 text-2xl"
            aria-label="Menu"
          >
            {isMobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Menu mobile dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg animate-fadeIn">
            <nav className="flex flex-col space-y-4 p-6">
              <Link
                href="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-medium text-gray-800 hover:text-green-700 py-2 border-b border-gray-100"
              >
                Accueil
              </Link>
              <Link
                href="/services"
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-medium text-gray-800 hover:text-green-700 py-2 border-b border-gray-100"
              >
                Services
              </Link>

              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-medium text-gray-800 hover:text-green-700 py-2 border-b border-gray-100"
              >
                Contact
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}