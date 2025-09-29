"use client";

import { Button } from "../app/ui/button";
import { FileText, GraduationCap, Key, Users, CreditCard } from "lucide-react";

export function ProcessSection() {
  const steps = [
    {
      number: "01",
      title: "Inscription",
      description:
        "Vous remplissez un formulaire rapide pour devenir partenaire France CEE.",
      icon: FileText,
    },
    {
      number: "02",
      title: "Formation",
      description:
        "Nous vous présentons simplement le fonctionnement des CEE et les bonnes pratiques pour vos devis et dossiers.",
      icon: GraduationCap,
    },
    {
      number: "03",
      title: "Accès",
      description:
        "Vous obtenez vos identifiants à notre espace dédié, pour suivre et déposer vos dossiers en toute autonomie.",
      icon: Key,
    },
    {
      number: "04",
      title: "Premiers dossiers",
      description:
        "Vous commencez à transmettre vos chantiers. Notre équipe contrôle, valide et vous accompagne pour assurer la conformité.",
      icon: Users,
    },
    {
      number: "05",
      title: "Paiement",
      description:
        "Une fois le dossier validé, la prime est versée rapidement selon les conditions prévues, afin de réduire le reste à charge de vos clients.",
      icon: CreditCard,
    },
  ];

  return (
    <section
      id="process"
      className="relative py-24 bg-[#002B72] overflow-hidden"
    >
      {/* Subtle background effects */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-[#012650]/20 via-[#012650]/10 to-[#012650]/20"
        aria-hidden="true"
      ></div>

      {/* Floating elements - very subtle */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        aria-hidden="true"
      >
        <div className="absolute top-20 right-20 w-32 h-32 border border-[#012650]/10 rounded-full opacity-30"></div>
        <div className="absolute bottom-32 left-16 w-20 h-20 border border-[#012650]/15 rounded-lg rotate-45 opacity-25"></div>
        <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-[#012650]/30 rounded-full animate-pulse"></div>
        <div
          className="absolute top-1/3 right-1/3 w-1 h-1 bg-[#012650]/40 rounded-full animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <header className="text-center mb-20 space-y-6">
          <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
            <span className="text-white">Comment devenir </span>
            <span className="relative">
              <span className="bg-[#C7271B] bg-clip-text text-transparent">
                partenaire ?
              </span>
            </span>
          </h2>

          <p className="text-xl text-blue-100 leading-relaxed max-w-3xl mx-auto">
            Avec France CEE, tout est pensé pour être rapide et accessible. Nous
            vous formons et vous accompagnons gratuitement à chaque étape, afin
            que la gestion de vos Certificats d&apos;Économies d&apos;Énergie
            devienne un vrai levier commercial.
          </p>
        </header>

        <section className="relative" aria-label="Étapes du processus">
          <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 list-none">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <li
                  key={index}
                  className="relative z-10 group bg-white/95 backdrop-blur-sm rounded-3xl p-8 h-full shadow-xl border border-white/20 hover:shadow-2xl hover:bg-white transition-all duration-500 hover:scale-105 hover:-translate-y-2"
                >
                  <article className="text-center space-y-6">
                    <div className="relative inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl mb-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-lg">
                      <IconComponent
                        className="w-10 h-10 text-[#012650] transition-all duration-300 group-hover:scale-110 group-hover:text-[#012650]/90"
                        aria-hidden="true"
                      />
                      {/* Icon glow effect */}
                      <div
                        className="absolute inset-0 bg-[#012650]/10 rounded-2xl opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-300"
                        aria-hidden="true"
                      ></div>
                    </div>

                    <div className="relative">
                      <span className="text-3xl font-bold bg-gradient-to-r from-[#012650] to-[#012650]/90 bg-clip-text text-transparent transition-all duration-300 group-hover:scale-110 block">
                        {step.number}
                      </span>
                      {/* Number underline */}
                      <div
                        className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-gradient-to-r from-[#012650] to-[#012650]/90 group-hover:w-8 transition-all duration-300 transform -translate-x-1/2 rounded-full"
                        aria-hidden="true"
                      ></div>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 transition-all duration-300 group-hover:text-[#012650]">
                      {step.title}
                    </h3>

                    <p className="text-sm text-gray-600 leading-relaxed transition-all duration-300 group-hover:text-gray-800">
                      {step.description}
                    </p>
                  </article>

                  {/* Card glow effect */}
                  <div
                    className="absolute inset-0 bg-gradient-to-r from-[#012650]/5 to-[#012650]/5 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"
                    aria-hidden="true"
                  ></div>
                </li>
              );
            })}
          </ol>

          {/* Enhanced connector lines */}
          <div
            className="hidden lg:block absolute inset-0 pointer-events-none -z-10"
            aria-hidden="true"
          >
            {steps.map(
              (_, index) =>
                index < steps.length - 1 && (
                  <div
                    key={index}
                    className="absolute top-1/2 h-0.5 bg-gradient-to-r from-blue-300/60 to-blue-200/40 transform -translate-y-1/2 rounded-full"
                    style={{
                      left: `${((index + 1) * 100) / 5 - 4}%`,
                      width: "8%",
                    }}
                  />
                )
            )}

            {/* Animated dots on connector lines */}
            {steps.map(
              (_, index) =>
                index < steps.length - 1 && (
                  <div
                    key={`dot-${index}`}
                    className="absolute top-1/2 w-2 h-2 bg-blue-300 rounded-full transform -translate-y-1/2 animate-pulse opacity-60"
                    style={{
                      left: `${((index + 1) * 100) / 5}%`,
                      animationDelay: `${index * 0.5}s`,
                    }}
                  />
                )
            )}
          </div>
        </section>

        <footer className="text-center mt-16">
          <Button
            onClick={() => (window.location.href = "#contact")}
            size="lg"
            className="cursor-pointer bg-white/95 backdrop-blur-sm text-[#012650] hover:bg-[#C7271B] hover:text-white border-2 border-white/30 hover:border-white px-10 py-4 text-lg font-semibold rounded-2xl transition-all duration-300 hover:scale-102 hover:shadow-xl hover:-translate-y-0.5 active:scale-98 group"
          >
            <span className="flex items-center">
              <span className="transition-transform duration-300 group-hover:translate-x-0.5">
                Commencer mon inscription
              </span>
              <svg
                className="w-5 h-5 ml-3 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5-5 5M6 12h12"
                />
              </svg>
            </span>
          </Button>
        </footer>
      </main>
    </section>
  );
}
