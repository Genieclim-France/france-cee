"use client";

import { ImageWithFallback } from "./figma/ImageWithFallback";
import {
  CheckCircle,
  BarChart3,
  Users,
  Calendar,
  ShoppingCart,
  Bell,
  Smartphone,
  CreditCard,
} from "lucide-react";

export function CRMSection() {
  const essentialFeatures = [
    {
      icon: BarChart3,
      text: "Tableau de bord intuitif : une vision claire de votre activité en temps réel.",
    },
    {
      icon: CheckCircle,
      text: "Saisie et suivi des dossiers : chaque étape centralisée, de la création à la validation.",
    },
    {
      icon: CheckCircle,
      text: "Génération automatique des documents : devis, attestations et pièces nécessaires en quelques clics.",
    },
    {
      icon: CreditCard,
      text: "Suivi des paiements : transparence totale sur les primes en attente ou déjà versées.",
    },
  ];

  const advancedFeatures = [
    {
      icon: Users,
      text: "Accès multi-profils : prospecteurs, commerciaux, apporteurs… avec gestion des droits et autorisations.",
    },
    {
      icon: Calendar,
      text: "Planification des équipes : organisation du planning commercial et suivi des rendez-vous.",
    },
    {
      icon: ShoppingCart,
      text: "Gestion des commandes : suivi des fournisseurs et coordination avec les installateurs.",
    },
    {
      icon: Calendar,
      text: "Gestion des plannings de pose : optimisation des interventions et visibilité totale sur les chantiers.",
    },
    {
      icon: BarChart3,
      text: "Statistiques & reporting : analyse détaillée de vos performances.",
    },
    {
      icon: Bell,
      text: "Notifications intelligentes : soyez alerté en temps réel des actions à réaliser.",
    },
    {
      icon: Smartphone,
      text: "Application de suivi client : vos clients accèdent à l'avancement de leurs projets.",
    },
    {
      icon: CreditCard,
      text: "Facturation intégrée : gérez vos flux financiers sans multiplier les outils.",
    },
  ];

  return (
    <section
      id="crm"
      className="relative py-24 bg-gradient-to-br from-gray-50/50 via-white to-blue-50/20 overflow-hidden"
    >
      {/* Subtle background effects */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-gray-600/2 via-white/3 to-[#012650]/2"
        aria-hidden="true"
      ></div>

      {/* Floating elements - very subtle */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        aria-hidden="true"
      >
        <div className="absolute top-24 right-24 w-24 h-24 border border-[#012650]/15 rounded-full opacity-30"></div>
        <div className="absolute bottom-32 left-20 w-16 h-16 border border-gray-300/20 rounded-lg rotate-12 opacity-25"></div>
        <div className="absolute top-1/3 left-1/3 w-2 h-2 bg-[#012650]/20 rounded-full animate-pulse"></div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <header className="text-center mb-20 space-y-6">
          <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
            <span className="text-gray-900">
              Un CRM de gestion simple et fluide, pensé pour nos{" "}
            </span>
            <span className="relative">
              <span className="bg-[#C7271B] bg-clip-text text-transparent">
                partenaires
              </span>
            </span>
          </h2>

          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Notre outil de gestion dédié vous permet de piloter facilement vos
            activités liées aux CEE et à la rénovation énergétique.
          </p>
        </header>

        <section
          className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-24"
          aria-label="Fonctionnalités essentielles"
        >
          <article className="space-y-10">
            <h3 className="text-3xl font-bold text-gray-900 mb-8">
              <span className="relative">
                Fonctionnalités essentielles
                {/* Subtle underline */}
                <div
                  className="absolute -bottom-2 left-0 w-16 h-0.5 bg-gradient-to-r from-[#012650] to-[#012650]/90 rounded-full"
                  aria-hidden="true"
                ></div>
              </span>
            </h3>
            <ul className="space-y-6 list-none">
              {essentialFeatures.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <li
                    key={index}
                    className="group flex items-start space-x-4 p-4 rounded-2xl hover:bg-blue-50/50 transition-all duration-300 hover:scale-102"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                      <IconComponent
                        className="w-6 h-6 text-[#012650] group-hover:text-[#012650]/90 transition-colors duration-300"
                        aria-hidden="true"
                      />
                    </div>
                    <p className="text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors duration-300 text-lg">
                      {feature.text}
                    </p>
                  </li>
                );
              })}
            </ul>
          </article>

          <aside className="relative group" aria-label="Illustration CRM">
            <figure className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-102">
              <ImageWithFallback
                src="https://images.pexels.com/photos/572061/pexels-photo-572061.jpeg"
                alt="Écran d'ordinateur moderne - CRM France CEE"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Image overlay */}
              <div
                className="absolute inset-0 rounded-3xl bg-gradient-to-t from-[#012650]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                aria-hidden="true"
              ></div>
            </figure>

            {/* Subtle glow effect */}
            <div
              className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-gray-600/10 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl scale-105 transition-opacity duration-500"
              aria-hidden="true"
            ></div>
          </aside>
        </section>

        <section
          className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-10 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-500 group"
          aria-label="Fonctionnalités avancées"
        >
          <header className="text-center mb-10">
            <h3 className="text-3xl font-bold text-gray-900 mb-2">
              <span className="relative">
                Des options avancées pour aller plus loin…
                {/* Subtle underline */}
                <div
                  className="absolute -bottom-2 left-1/2 w-20 h-0.5 bg-gradient-to-r from-red-600 to-red-700 rounded-full transform -translate-x-1/2"
                  aria-hidden="true"
                ></div>
              </span>
            </h3>
          </header>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-8 list-none">
            {advancedFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <li
                  key={index}
                  className="group flex items-start space-x-4 p-4 rounded-2xl hover:bg-red-50/30 transition-all duration-300 hover:scale-102 cursor-pointer"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-red-100 to-red-200 rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <IconComponent
                      className="w-6 h-6 text-red-600 group-hover:text-red-700 transition-colors duration-300"
                      aria-hidden="true"
                    />
                  </div>
                  <p className="text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors duration-300">
                    {feature.text}
                  </p>
                </li>
              );
            })}
          </ul>

          {/* Card glow effect */}
          <div
            className="absolute inset-0 bg-gradient-to-r from-red-600/3 to-blue-600/3 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"
            aria-hidden="true"
          ></div>
        </section>
      </main>
    </section>
  );
}
