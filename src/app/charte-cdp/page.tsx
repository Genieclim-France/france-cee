"use client";

import { Header } from "../Header";
import { Footer } from "../Footer";

export default function CharteCDPPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="py-8 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <header className="mb-8">
            <h1 className="text-4xl font-bold text-[#012650] mb-4">
              Charte Coup de Pouce Chauffage
            </h1>
            <p className="text-lg text-gray-600">
              Consultez notre charte détaillée pour les opérations Coup de Pouce
              Chauffage
            </p>
          </header>

          {/* PDF Viewer */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-[#012650] px-6 py-4">
              <h2 className="text-white font-semibold text-lg">
                Charte Coup de Pouce Chauffage
              </h2>
              <p className="text-blue-200 text-sm">
                Document officiel - France CEE
              </p>
            </div>

            <div className="h-[800px] w-full">
              <iframe
                src="/charte-cdp/Chartes COUP DE POUCE CHAUFFAGE.pdf#toolbar=1&navpanes=1&scrollbar=1&view=FitH"
                width="100%"
                height="100%"
                className="border-0"
                title="Charte Coup de Pouce Chauffage"
              />
            </div>

            {/* Fallback pour les navigateurs qui ne supportent pas l'affichage PDF */}
            <div className="p-6 bg-gray-50 border-t">
              <p className="text-sm text-gray-600 mb-4">
                Si le document ne s'affiche pas correctement, vous pouvez le
                télécharger :
              </p>
              <a
                href="/charte-cdp/Chartes COUP DE POUCE CHAUFFAGE.pdf"
                download="Chartes COUP DE POUCE CHAUFFAGE.pdf"
                className="inline-flex items-center px-4 py-2 bg-[#C7271B] text-white rounded-lg hover:bg-red-700 transition-colors duration-200"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                Télécharger le PDF
              </a>
            </div>
          </div>

          {/* Informations supplémentaires */}
          <div className="mt-8 bg-blue-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-[#012650] mb-3">
              À propos de cette charte
            </h3>
            <p className="text-gray-700 mb-4">
              Cette charte définit les conditions et modalités d'application du
              dispositif "Coup de Pouce Chauffage" pour les professionnels du
              bâtiment partenaires de France CEE.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
