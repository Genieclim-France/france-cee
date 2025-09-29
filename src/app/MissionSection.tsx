"use client";

export function MissionSection() {
  return (
    <section
      id="services"
      className="relative py-24 bg-gradient-to-br from-blue-50/30 via-white to-red-50/20 overflow-hidden"
      role="main"
      aria-labelledby="mission-title"
    >
      {/* Subtle background effects */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-[#012650]/3 via-white/3 to-[#C7271B]/3"
        aria-hidden="true"
      ></div>

      {/* Floating elements - very subtle */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        aria-hidden="true"
      >
        <div className="absolute top-20 right-20 w-16 h-16 border border-[#012650]/20 rounded-full opacity-30"></div>
        <div className="absolute bottom-32 left-16 w-12 h-12 border border-[#C7271B]/20 rounded-lg rotate-45 opacity-30"></div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left column - Text content */}
        <header className="space-y-8">
          <h2
            id="mission-title"
            className="text-4xl lg:text-5xl font-bold leading-tight"
          >
            <span className="text-gray-900">
              France CEE accompagne au quotidien les professionnels de la{" "}
            </span>
            <span className="relative">
              <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
                transition énergétique et écologique
              </span>
            </span>
          </h2>

          <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
            Notre rôle : gérer de bout en bout leurs Certificats
            d&apos;Économies d&apos;Énergie afin qu&apos;ils puissent se
            concentrer sur leurs chantiers et proposer à leurs clients des
            solutions accessibles grâce aux primes CEE.
          </p>
        </header>

        {/* Right column - Stats */}
        <section
          className="grid grid-cols-2 gap-8"
          aria-label="Statistiques France CEE"
        >
          {[
            {
              value: "100%",
              label: "Dossiers sécurisés",
              color: "text-blue-600",
            },
            {
              value: "48h",
              label: "Délai de traitement",
              color: "text-gray-600",
            },
            {
              value: "0€",
              label: "Frais d'inscription",
              color: "text-red-600",
            },
            {
              value: "24/7",
              label: "Support client",
              color: "text-blue-600",
            },
          ].map((stat, index) => (
            <article
              key={index}
              className="relative group hover:scale-105 transition-all duration-300 text-center space-y-3 p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-gray-100/50 shadow-sm hover:shadow-lg hover:bg-white/80"
              aria-label={`${stat.label}: ${stat.value}`}
            >
              <div
                className={`text-4xl font-bold ${stat.color} transition-transform duration-300 group-hover:scale-110 text-center`}
                aria-label={stat.value}
              >
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 font-medium group-hover:text-gray-700 transition-colors duration-300 text-center">
                {stat.label}
              </div>

              {/* Subtle glow effect */}
              <div
                className={`absolute inset-0 ${stat.color.replace(
                  "text-",
                  "bg-"
                )}/5 rounded-2xl opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-300`}
                aria-hidden="true"
              ></div>
            </article>
          ))}
        </section>
      </main>
    </section>
  );
}
