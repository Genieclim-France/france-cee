"use client";

import { Button } from "../app/ui/button";
import { useEffect, useState } from "react";
import { Sparkles, Zap, TrendingUp } from "lucide-react";
import Image from "next/image";

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="hero-section"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#002B72] py-24"
      role="banner"
      aria-labelledby="hero-title"
    >
      {/* Background Effects */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-[#012650]/20 via-white/5 to-[#012650]/10 animate-pulse"
        aria-hidden="true"
      ></div>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <article
          className={`space-y-10 transition-all duration-1000 text-center md:text-left ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          {/* Badge */}
          <span className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer group mx-auto md:mx-0">
            <Sparkles
              className="w-4 h-4 text-white group-hover:text-red-400 transition-colors duration-300"
              aria-hidden="true"
            />
            <span className="text-sm font-medium text-white group-hover:text-blue-200 transition-colors duration-300 drop-shadow-md">
              Mandataire CEE en France
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
              <span className="text-white drop-shadow-lg">
                Votre partenaire CEE pour la{" "}
              </span>
              <span className="relative">
                <span className="text-white drop-shadow-lg">transition</span>{" "}
                <span className="text-[#C7271B] drop-shadow-lg">
                  énergétique
                </span>
                {/* Underline effect - French colors */}
                <div
                  className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-white to-red-400 rounded-full transform scale-x-0 animate-scale-x animation-delay-1000"
                  aria-hidden="true"
                ></div>
              </span>
            </h1>

            <p className="text-xl text-blue-100 leading-relaxed max-w-3xl mx-auto md:mx-0 drop-shadow-md">
              <span className="font-semibold text-white drop-shadow-lg">
                France CEE
              </span>{" "}
              révolutionne l&apos;accompagnement des artisans et professionnels
              du bâtiment.
              <span className="text-white font-medium drop-shadow-md">
                {" "}
                Valorisez vos chantiers et intégrez directement les primes CEE
                dans vos devis.
              </span>
            </p>
          </header>

          {/* Action Buttons */}
          <nav
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            role="navigation"
            aria-label="Actions principales"
          >
            <Button
              onClick={() => (window.location.href = "#process")}
              size="lg"
              className="cursor-pointer relative bg-[#C7271B] hover:bg-gradient-to-r from-[#C7271B] to-red-600 text-white px-8 py-4 text-lg font-semibold rounded-2xl transition-all duration-300 hover:scale-102 hover:shadow-lg active:scale-95 group overflow-hidden shadow-lg"
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
              className="cursor-pointer border-2 border-black text-white bg-black hover:bg-transparent hover:border-red-400 hover:text-white px-8 py-4 text-lg font-semibold rounded-2xl transition-all duration-300 hover:scale-102 hover:shadow-md active:scale-95 group backdrop-blur-sm shadow-sm"
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
            className="grid grid-cols-2 gap-6 pt-8 border-t border-white/20 max-w-xl mx-auto md:mx-0"
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
                color: "text-[#C7271B]",
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
                  className={`text-2xl font-bold ${stat.color} transition-transform duration-300 block drop-shadow-md`}
                  aria-label={stat.value}
                >
                  {stat.value}
                </span>
                <span className="text-sm text-blue-200 group-hover:text-white transition-colors duration-300 block drop-shadow-sm">
                  {stat.label}
                </span>
              </article>
            ))}
          </section>
        </article>
      </main>

      {/* Logo mask en bas à gauche */}
      <div
        className="absolute -bottom-30 -right-30 w-[60rem] h-[60rem] pointer-events-none"
        aria-hidden="true"
      >
        <Image
          src="/logomask.svg"
          alt=""
          width={320}
          height={320}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Bottom gradient fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#012650] to-transparent"
        aria-hidden="true"
      ></div>
    </section>
  );
}
