"use client";

import { Button } from "../app/ui/button";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Navbar visible si on est en haut ou si on remonte
      if (currentScrollY < 10) {
        setIsVisible(true);
      } else if (currentScrollY < lastScrollY) {
        // On remonte
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // On descend et on a dépassé 100px
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white shadow-sm hover:shadow-lg border-b border-gray-100/50 transition-all duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
      role="banner"
    >
      {/* Subtle animated background - matching HeroSection */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-blue-50/20 via-white to-red-50/10 opacity-60"
        aria-hidden="true"
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex justify-between items-center h-20">
          {/* Logo harmonisé avec HeroSection */}
          <div className="flex items-center">
            <Link
              href="/"
              className="flex items-center space-x-3 cursor-pointer transition-all duration-300 hover:scale-105 group"
              aria-label="France CEE - Accueil"
            >
              <div className="relative">
                <Image
                  src="/logo.svg"
                  alt="Logo France CEE"
                  className="w-32 h-32 object-contain transition-all duration-300 group-hover:scale-110"
                  width={48}
                  height={48}
                />
                {/* Subtle glow - très léger */}
                <div
                  className="absolute inset-0 bg-[#012650]/10 rounded-xl opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-300"
                  aria-hidden="true"
                ></div>
              </div>
            </Link>
          </div>

          {/* Navigation avec Tailwind pur */}
          <nav
            className="hidden md:flex space-x-1"
            role="navigation"
            aria-label="Navigation principale"
          >
            <a
              href="#services"
              className="relative px-4 py-3 text-gray-700 hover:text-[#012650] transition-all duration-300 group rounded-lg hover:bg-blue-50/50"
              aria-label="Aller à la section Nos services"
            >
              <span className="relative z-10 font-medium">Nos services</span>
              <div
                className="absolute inset-0 bg-[#012650]/5 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"
                aria-hidden="true"
              ></div>
              <div
                className="absolute bottom-1 left-1/2 w-0 h-0.5 bg-[#012650] group-hover:w-3/4 transition-all duration-300 transform -translate-x-1/2"
                aria-hidden="true"
              ></div>
            </a>
            <a
              href="#process"
              className="relative px-4 py-3 text-gray-700 hover:text-[#012650] transition-all duration-300 group rounded-lg hover:bg-blue-50/50"
              aria-label="Aller à la section Comment ça marche"
            >
              <span className="relative z-10 font-medium">
                Comment ça marche
              </span>
              <div
                className="absolute inset-0 bg-[#012650]/5 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"
                aria-hidden="true"
              ></div>
              <div
                className="absolute bottom-1 left-1/2 w-0 h-0.5 bg-[#012650] group-hover:w-3/4 transition-all duration-300 transform -translate-x-1/2"
                aria-hidden="true"
              ></div>
            </a>
            <a
              href="#crm"
              className="relative px-4 py-3 text-gray-700 hover:text-[#012650] transition-all duration-300 group rounded-lg hover:bg-blue-50/50"
              aria-label="Aller à la section Notre CRM"
            >
              <span className="relative z-10 font-medium">Notre CRM</span>
              <div
                className="absolute inset-0 bg-[#012650]/5 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"
                aria-hidden="true"
              ></div>
              <div
                className="absolute bottom-1 left-1/2 w-0 h-0.5 bg-[#012650] group-hover:w-3/4 transition-all duration-300 transform -translate-x-1/2"
                aria-hidden="true"
              ></div>
            </a>
            <a
              href="#contact"
              className="relative px-4 py-3 text-gray-700 hover:text-[#012650] transition-all duration-300 group rounded-lg hover:bg-blue-50/50"
              aria-label="Aller à la section Contact"
            >
              <span className="relative z-10 font-medium">Contact</span>
              <div
                className="absolute inset-0 bg-[#012650]/5 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"
                aria-hidden="true"
              ></div>
              <div
                className="absolute bottom-1 left-1/2 w-0 h-0.5 bg-[#012650] group-hover:w-3/4 transition-all duration-300 transform -translate-x-1/2"
                aria-hidden="true"
              ></div>
            </a>
          </nav>

          {/* Desktop CTA Button + Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            {/* Desktop CTA Button */}
            <div className="hidden lg:block relative group">
              <Button
                onClick={() => (window.location.href = "#contact")}
                className="relative bg-[#002B72] text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 hover:scale-102 hover:shadow-lg hover:-translate-y-0.5 overflow-hidden cursor-pointer"
              >
                <span className="relative z-10 flex items-center space-x-2">
                  <span>Devenir partenaire</span>
                  <div className="w-1.5 h-1.5 bg-[#C7271B]/80 rounded-full animate-pulse"></div>
                </span>

                {/* Subtle shimmer - très léger */}
                <div className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
              </Button>
            </div>

            {/* Mobile CTA Button (smaller) */}
            <div className="lg:hidden">
              <Button
                onClick={() => (window.location.href = "#contact")}
                className="bg-gradient-to-r from-[#012650] to-[#012650] hover:from-[#012650]/90 hover:to-[#012650]/90 text-white font-semibold px-4 py-2 rounded-lg text-sm transition-all duration-300 cursor-pointer"
              >
                Contact
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-gray-700 hover:text-[#012650] hover:bg-blue-50/50 transition-all duration-300"
              aria-label={
                isMobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"
              }
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" aria-hidden="true" />
              ) : (
                <Menu className="w-6 h-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Bottom border harmonisé */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-300/50 to-transparent opacity-80"></div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100/50 shadow-lg"
          role="navigation"
          aria-label="Menu mobile"
        >
          <nav className="px-4 py-4 space-y-2">
            <a
              href="#services"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-4 py-3 text-gray-700 hover:text-[#012650] hover:bg-blue-50/50 rounded-lg transition-all duration-300 font-medium"
              aria-label="Aller à la section Nos services"
            >
              Nos services
            </a>
            <a
              href="#process"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-4 py-3 text-gray-700 hover:text-[#012650] hover:bg-blue-50/50 rounded-lg transition-all duration-300 font-medium"
              aria-label="Aller à la section Comment ça marche"
            >
              Comment ça marche
            </a>
            <a
              href="#crm"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-4 py-3 text-gray-700 hover:text-[#012650] hover:bg-blue-50/50 rounded-lg transition-all duration-300 font-medium"
              aria-label="Aller à la section Notre CRM"
            >
              Notre CRM
            </a>
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-4 py-3 text-gray-700 hover:text-[#012650] hover:bg-blue-50/50 rounded-lg transition-all duration-300 font-medium"
              aria-label="Aller à la section Contact"
            >
              Contact
            </a>

            {/* Mobile CTA Button in menu */}
            <div className="pt-4 border-t border-gray-100 ">
              <Button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  window.location.href = "#contact";
                }}
                className="w-full bg-gradient-to-r from-[#002B72] to-[#002B72] hover:from-[#002B72]/90 hover:to-[#002B72]/90 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300"
                aria-label="Devenir partenaire - Aller à la section contact"
              >
                <span className="flex items-center justify-center space-x-2">
                  <span>Devenir partenaire</span>
                  <div
                    className="w-1.5 h-1.5 bg-[#C7271B]/80 rounded-full animate-pulse"
                    aria-hidden="true"
                  ></div>
                </span>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
