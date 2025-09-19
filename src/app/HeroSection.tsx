"use client";

import { Button } from "../app/ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useEffect, useState } from "react";
import { Sparkles, Zap, TrendingUp } from "lucide-react";

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="hero-section"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#012650] via-[#1a4a7a] to-[#2d5aa0] py-24"
      role="banner"
      aria-labelledby="hero-title"
    >
      {/* Background Effects */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-[#012650]/20 via-white/5 to-[#012650]/10 animate-pulse"
        aria-hidden="true"
      ></div>

      {/* Animated Background Shapes */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        aria-hidden="true"
      >
        {/* Floating orbs */}
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full animate-bounce ${
              i % 3 === 0
                ? "bg-gradient-to-br from-white/20 to-white/30"
                : i % 3 === 1
                ? "bg-gradient-to-br from-white/15 to-white/25"
                : "bg-gradient-to-br from-red-400/15 to-red-300/20"
            }`}
            style={{
              width: `${80 + i * 15}px`,
              height: `${80 + i * 15}px`,
              left: `${15 + i * 20}%`,
              top: `${20 + (i % 3) * 25}%`,
              animationDelay: `${i * 1}s`,
              animationDuration: `${5 + i * 0.5}s`,
            }}
            aria-hidden="true"
          />
        ))}

        {/* Geometric patterns */}
        <div
          className="absolute top-20 right-20 w-24 h-24 border border-white/40 rounded-full animate-spin opacity-40"
          style={{ animationDuration: "30s" }}
          aria-hidden="true"
        ></div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Column - Content */}
        <article
          className={`space-y-8 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          {/* Badge */}
          <span className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer group">
            <Sparkles
              className="w-4 h-4 text-white group-hover:text-red-400 transition-colors duration-300"
              aria-hidden="true"
            />
            <span className="text-sm font-medium text-white group-hover:text-blue-200 transition-colors duration-300">
              #1 Mandataire CEE en France
            </span>
            <span
              className="w-2 h-2 bg-green-500 rounded-full animate-pulse"
              aria-hidden="true"
            ></span>
          </span>

          {/* Main Title */}
          <header className="space-y-6">
            <h1
              id="hero-title"
              className="text-5xl lg:text-7xl font-bold leading-tight"
            >
              <span className="text-white">Votre partenaire CEE pour la </span>
              <span className="relative">
                <span className="text-white">rénovation</span>{" "}
                <span className="text-red-400">énergétique</span>
                {/* Underline effect - French colors */}
                <div
                  className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-white to-red-400 rounded-full transform scale-x-0 animate-scale-x animation-delay-1000"
                  aria-hidden="true"
                ></div>
              </span>
            </h1>

            <p className="text-xl text-blue-100 leading-relaxed max-w-2xl">
              <span className="font-semibold text-white">France CEE</span>{" "}
              révolutionne l&apos;accompagnement des artisans et professionnels
              du bâtiment.
              <span className="text-white font-medium">
                {" "}
                Valorisez vos chantiers et intégrez directement les primes CEE
                dans vos devis.
              </span>
            </p>
          </header>

          {/* Action Buttons */}
          <nav
            className="flex flex-col sm:flex-row gap-4"
            role="navigation"
            aria-label="Actions principales"
          >
            <Button
              onClick={() => (window.location.href = "#process")}
              size="lg"
              className="cursor-pointer relative bg-gradient-to-r from-[#C7271B] to-red-600 hover:from-red-600 hover:to-[#C7271B] text-white px-8 py-4 text-lg font-semibold rounded-2xl transition-all duration-300 hover:scale-102 hover:shadow-lg active:scale-95 group overflow-hidden shadow-lg"
              aria-label="Commencer maintenant - Aller à la section processus"
            >
              <span className="relative z-10 flex items-center">
                <Zap className="w-5 h-5 mr-2" aria-hidden="true" />
                <span className="transition-transform duration-300">
                  Commencer maintenant
                </span>
              </span>

              {/* Subtle shimmer effect */}
              <div
                className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000"
                aria-hidden="true"
              ></div>
            </Button>

            <Button
              onClick={() => (window.location.href = "#crm")}
              size="lg"
              variant="outline"
              className="cursor-pointer border-2 border-white/60 text-[#012650] hover:bg-white/10 hover:border-red-400 hover:text-white px-8 py-4 text-lg font-semibold rounded-2xl transition-all duration-300 hover:scale-102 hover:shadow-md active:scale-95 group backdrop-blur-sm shadow-sm"
              aria-label="Découvrir notre CRM - Aller à la section CRM"
            >
              <TrendingUp
                className="w-5 h-5 mr-2 group-hover:text-red-400 transition-colors duration-300"
                aria-hidden="true"
              />
              Découvrir notre CRM
            </Button>
          </nav>

          {/* Stats */}
          <section
            className="grid grid-cols-2 gap-6 pt-8 border-t border-white/20"
            aria-label="Statistiques France CEE"
          >
            {[
              {
                icon: Zap,
                value: "98%",
                label: "Taux de satisfaction",
                color: "text-white",
              },
              {
                icon: TrendingUp,
                value: "48h",
                label: "Délai de traitement",
                color: "text-red-400",
              },
            ].map((stat, index) => (
              <article
                key={index}
                className="text-center group hover:scale-105 transition-transform duration-300"
                aria-label={`${stat.label}: ${stat.value}`}
              >
                <stat.icon
                  className={`w-8 h-8 ${stat.color} transition-colors duration-300 mx-auto mb-2`}
                  aria-hidden="true"
                />
                <span
                  className={`text-2xl font-bold ${stat.color} transition-transform duration-300 block`}
                  aria-label={stat.value}
                >
                  {stat.value}
                </span>
                <span className="text-sm text-blue-200 group-hover:text-white transition-colors duration-300 block">
                  {stat.label}
                </span>
              </article>
            ))}
          </section>
        </article>

        {/* Right Column - Image */}
        <aside
          aria-label="Image illustrative France CEE"
          aria-hidden="true"
          className={`relative transition-all duration-1000 animation-delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          {/* Main image container */}
          <figure className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 hover:shadow-3xl hover:scale-105 group">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1752852381090-d3e0edf8f373?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmVyZ3klMjBlZmZpY2llbmN5JTIwcmVub3ZhdGlvbiUyMGhvdXNlJTIwaW5zdWxhdGlvbiUyMHdvcmtlcnxlbnwxfHx8fDE3NTc5MzU1ODF8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Équipe de professionnels France CEE - Rénovation énergétique et isolation"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

            {/* Image overlay with gradient */}
            <div
              className="absolute inset-0 bg-gradient-to-t from-[#012650]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              aria-hidden="true"
            ></div>

            {/* Glow effect around image - More subtle */}
            <div
              className="absolute inset-0 bg-gradient-to-r from-white/10 to-red-400/10 rounded-3xl blur-xl scale-105 opacity-30 group-hover:opacity-50 transition-opacity duration-500"
              aria-hidden="true"
            ></div>
          </figure>

          {/* Floating badges - More subtle */}
          <aside
            className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-lg p-4 border border-gray-100 hover:scale-105 transition-all duration-300 group flex items-center space-x-3"
            aria-label="Certification qualité premium"
          >
            <span className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-white" aria-hidden="true" />
            </span>
            <span>
              <span className="text-lg font-bold text-gray-900 group-hover:text-green-700 transition-colors duration-300 block">
                Certifié
              </span>
              <span className="text-sm text-gray-500 group-hover:text-green-600 transition-colors duration-300 block">
                Qualité Premium
              </span>
            </span>
          </aside>
        </aside>
      </main>

      {/* Bottom gradient fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#012650] to-transparent"
        aria-hidden="true"
      ></div>
    </section>
  );
}
