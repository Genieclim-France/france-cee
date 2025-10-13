"use client";

import { Header } from "../Header";
import { Footer } from "../Footer";

export default function PolitiqueConfidentialite() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Header />

      <main className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header de la page */}
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-[#012650] mb-6">
              Politique de Confidentialité
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Protection de vos données personnelles conformément au RGPD
            </p>
          </div>

          {/* Contenu de la politique */}
          <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12">
            <div className="prose prose-lg max-w-none">
              {/* Introduction */}
              <section className="mb-12">
                <div className="bg-blue-50 p-6 rounded-2xl border-l-4 border-[#012650]">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    <strong>France CEE</strong> s&apos;engage à protéger la
                    confidentialité et la sécurité de vos données personnelles.
                    Cette politique de confidentialité vous informe sur la
                    manière dont nous collectons, utilisons, stockons et
                    protégeons vos informations personnelles conformément au
                    Règlement Général sur la Protection des Données (RGPD) et à
                    la loi française.
                  </p>
                  <p className="text-sm text-gray-600 mb-0">
                    <strong>Dernière mise à jour :</strong>{" "}
                    {new Date().toLocaleDateString("fr-FR", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                </div>
              </section>

              {/* 1. Responsable du traitement */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-[#012650] mb-6 pb-3 border-b-2 border-[#C7271B]">
                  1. Responsable du traitement
                </h2>
                <div className="bg-gray-50 p-6 rounded-2xl">
                  <p className="mb-4">
                    <strong>Responsable du traitement :</strong> France CEE
                  </p>
                  <p className="mb-4">
                    <strong>Adresse :</strong> 20 rue Jean Mermoz, 33185 LE
                    HAILLAN, France
                  </p>
                  <p className="mb-4">
                    <strong>Téléphone :</strong> 09 72 19 64 12
                  </p>
                  <p className="mb-4">
                    <strong>Email :</strong> contact@francecee.fr
                  </p>
                  <p className="mb-0">
                    <strong>Délégué à la Protection des Données (DPO) :</strong>{" "}
                    [À compléter si applicable] - dpo@francecee.fr
                  </p>
                </div>
              </section>

              {/* 2. Données collectées */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-[#012650] mb-6 pb-3 border-b-2 border-[#C7271B]">
                  2. Données personnelles collectées
                </h2>

                <h3 className="text-xl font-semibold text-[#012650] mb-4">
                  2.1 Données collectées directement
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Nous collectons les données personnelles que vous nous
                  fournissez directement, notamment :
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-blue-50 p-4 rounded-xl">
                    <h4 className="font-semibold text-[#012650] mb-3">
                      📞 Formulaire de contact :
                    </h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Prénom et nom</li>
                      <li>• Adresse email</li>
                      <li>• Numéro de téléphone</li>
                      <li>• Message/demande</li>
                    </ul>
                  </div>

                  <div className="bg-red-50 p-4 rounded-xl">
                    <h4 className="font-semibold text-[#C7271B] mb-3">
                      🤝 Candidature partenaire :
                    </h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Informations personnelles</li>
                      <li>• Nom de l&apos;entreprise</li>
                      <li>• Numéro SIRET</li>
                      <li>• Secteur d&apos;activité</li>
                      <li>• Zone d&apos;intervention</li>
                      <li>• Présentation de l&apos;entreprise</li>
                    </ul>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-[#012650] mb-4">
                  2.2 Données collectées automatiquement
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Lors de votre navigation sur notre site, nous pouvons
                  collecter automatiquement :
                </p>
                <ul className="text-gray-700 leading-relaxed space-y-2 mb-6">
                  <li>• Adresse IP</li>
                  <li>• Type de navigateur et version</li>
                  <li>• Système d&apos;exploitation</li>
                  <li>• Pages visitées et durée de visite</li>
                  <li>• Données de géolocalisation approximative</li>
                  <li>• Référent (site depuis lequel vous arrivez)</li>
                </ul>
              </section>

              {/* 3. Finalités du traitement */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-[#012650] mb-6 pb-3 border-b-2 border-[#C7271B]">
                  3. Finalités du traitement
                </h2>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 p-6 rounded-xl">
                    <h3 className="text-lg font-semibold text-[#012650] mb-4">
                      🎯 Finalités principales
                    </h3>
                    <ul className="text-gray-700 space-y-2">
                      <li>• Répondre à vos demandes de contact</li>
                      <li>• Traiter les candidatures de partenariat</li>
                      <li>• Fournir nos services CEE</li>
                      <li>• Gérer la relation client/partenaire</li>
                      <li>• Assurer le support technique</li>
                    </ul>
                  </div>

                  <div className="bg-green-50 p-6 rounded-xl">
                    <h3 className="text-lg font-semibold text-green-700 mb-4">
                      📊 Finalités secondaires
                    </h3>
                    <ul className="text-gray-700 space-y-2">
                      <li>• Améliorer notre site web</li>
                      <li>• Analyser l&apos;utilisation du site</li>
                      <li>
                        • Envoyer des informations commerciales (avec
                        consentement)
                      </li>
                      <li>• Respecter nos obligations légales</li>
                      <li>• Prévenir la fraude</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* 4. Base légale */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-[#012650] mb-6 pb-3 border-b-2 border-[#C7271B]">
                  4. Base légale du traitement
                </h2>

                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-xl border-l-4 border-blue-500">
                    <p className="font-semibold text-blue-700 mb-2">
                      Exécution d&apos;un contrat ou mesures précontractuelles
                    </p>
                    <p className="text-gray-700 text-sm">
                      Traitement des demandes de partenariat, fourniture de
                      services CEE
                    </p>
                  </div>

                  <div className="bg-green-50 p-4 rounded-xl border-l-4 border-green-500">
                    <p className="font-semibold text-green-700 mb-2">
                      Intérêt légitime
                    </p>
                    <p className="text-gray-700 text-sm">
                      Amélioration du site, analyse de l&apos;audience, sécurité
                    </p>
                  </div>

                  <div className="bg-purple-50 p-4 rounded-xl border-l-4 border-purple-500">
                    <p className="font-semibold text-purple-700 mb-2">
                      Consentement
                    </p>
                    <p className="text-gray-700 text-sm">
                      Newsletter, cookies non essentiels, marketing direct
                    </p>
                  </div>

                  <div className="bg-orange-50 p-4 rounded-xl border-l-4 border-orange-500">
                    <p className="font-semibold text-orange-700 mb-2">
                      Obligation légale
                    </p>
                    <p className="text-gray-700 text-sm">
                      Conservation des données comptables, respect des
                      réglementations CEE
                    </p>
                  </div>
                </div>
              </section>

              {/* 5. Destinataires */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-[#012650] mb-6 pb-3 border-b-2 border-[#C7271B]">
                  5. Destinataires des données
                </h2>

                <p className="text-gray-700 leading-relaxed mb-4">
                  Vos données personnelles sont destinées aux personnes
                  suivantes :
                </p>

                <ul className="text-gray-700 leading-relaxed space-y-3">
                  <li>
                    • <strong>Personnel autorisé de France CEE</strong> :
                    équipes commerciales, techniques et administratives
                  </li>
                  <li>
                    • <strong>Prestataires techniques</strong> : hébergeur
                    (Vercel), service d&apos;emailing (Brevo)
                  </li>
                  <li>
                    • <strong>Partenaires obligés CEE</strong> : uniquement dans
                    le cadre de la fourniture de nos services
                  </li>
                  <li>
                    • <strong>Autorités compétentes</strong> : en cas
                    d&apos;obligation légale ou réglementaire
                  </li>
                </ul>

                <div className="bg-red-50 p-4 rounded-xl mt-6 border-l-4 border-red-500">
                  <p className="text-red-700 font-semibold mb-2">
                    🔒 Engagement de confidentialité
                  </p>
                  <p className="text-gray-700 text-sm">
                    Tous nos prestataires sont tenus par des accords de
                    confidentialité et s&apos;engagent à respecter la
                    réglementation en matière de protection des données
                    personnelles.
                  </p>
                </div>
              </section>

              {/* 6. Durée de conservation */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-[#012650] mb-6 pb-3 border-b-2 border-[#C7271B]">
                  6. Durée de conservation
                </h2>

                <div className="overflow-x-auto">
                  <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm">
                    <thead className="bg-[#012650] text-white">
                      <tr>
                        <th className="p-4 text-left">Type de données</th>
                        <th className="p-4 text-left">Durée de conservation</th>
                        <th className="p-4 text-left">Justification</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-700">
                      <tr className="border-b border-gray-100">
                        <td className="p-4 font-medium">Demandes de contact</td>
                        <td className="p-4">3 ans</td>
                        <td className="p-4">Suivi de la relation prospect</td>
                      </tr>
                      <tr className="border-b border-gray-100 bg-gray-50">
                        <td className="p-4 font-medium">
                          Données partenaires actifs
                        </td>
                        <td className="p-4">Durée de la relation + 5 ans</td>
                        <td className="p-4">
                          Obligations comptables et fiscales
                        </td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="p-4 font-medium">
                          Candidatures refusées
                        </td>
                        <td className="p-4">2 ans</td>
                        <td className="p-4">Possibilité de recontact</td>
                      </tr>
                      <tr className="border-b border-gray-100 bg-gray-50">
                        <td className="p-4 font-medium">
                          Données de navigation
                        </td>
                        <td className="p-4">25 mois</td>
                        <td className="p-4">Recommandations CNIL</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-medium">Newsletter</td>
                        <td className="p-4">
                          Jusqu&apos;à désinscription + 3 ans
                        </td>
                        <td className="p-4">Preuve du consentement</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* 7. Vos droits */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-[#012650] mb-6 pb-3 border-b-2 border-[#C7271B]">
                  7. Vos droits
                </h2>

                <p className="text-gray-700 leading-relaxed mb-6">
                  Conformément au RGPD, vous disposez des droits suivants sur
                  vos données personnelles :
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="bg-blue-50 p-4 rounded-xl">
                      <h3 className="font-semibold text-[#012650] mb-2">
                        👁️ Droit d&apos;accès
                      </h3>
                      <p className="text-sm text-gray-700">
                        Obtenir une copie de vos données personnelles
                      </p>
                    </div>

                    <div className="bg-green-50 p-4 rounded-xl">
                      <h3 className="font-semibold text-green-700 mb-2">
                        ✏️ Droit de rectification
                      </h3>
                      <p className="text-sm text-gray-700">
                        Corriger des données inexactes ou incomplètes
                      </p>
                    </div>

                    <div className="bg-red-50 p-4 rounded-xl">
                      <h3 className="font-semibold text-red-700 mb-2">
                        🗑️ Droit à l&apos;effacement
                      </h3>
                      <p className="text-sm text-gray-700">
                        Demander la suppression de vos données
                      </p>
                    </div>

                    <div className="bg-orange-50 p-4 rounded-xl">
                      <h3 className="font-semibold text-orange-700 mb-2">
                        ⏸️ Droit à la limitation
                      </h3>
                      <p className="text-sm text-gray-700">
                        Restreindre le traitement de vos données
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-purple-50 p-4 rounded-xl">
                      <h3 className="font-semibold text-purple-700 mb-2">
                        📦 Droit à la portabilité
                      </h3>
                      <p className="text-sm text-gray-700">
                        Récupérer vos données dans un format structuré
                      </p>
                    </div>

                    <div className="bg-yellow-50 p-4 rounded-xl">
                      <h3 className="font-semibold text-yellow-700 mb-2">
                        🚫 Droit d&apos;opposition
                      </h3>
                      <p className="text-sm text-gray-700">
                        Vous opposer au traitement de vos données
                      </p>
                    </div>

                    <div className="bg-indigo-50 p-4 rounded-xl">
                      <h3 className="font-semibold text-indigo-700 mb-2">
                        🤖 Décision automatisée
                      </h3>
                      <p className="text-sm text-gray-700">
                        Ne pas faire l&apos;objet de décisions automatisées
                      </p>
                    </div>

                    <div className="bg-pink-50 p-4 rounded-xl">
                      <h3 className="font-semibold text-pink-700 mb-2">
                        ↩️ Retrait du consentement
                      </h3>
                      <p className="text-sm text-gray-700">
                        Retirer votre consentement à tout moment
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-[#012650] text-white p-6 rounded-xl mt-6">
                  <h3 className="text-lg font-semibold mb-4">
                    📧 Comment exercer vos droits ?
                  </h3>
                  <p className="mb-4">
                    Pour exercer vos droits, contactez-nous par email à{" "}
                    <strong>contact@francecee.fr</strong>
                    en précisant votre demande et en joignant une copie de votre
                    pièce d&apos;identité.
                  </p>
                  <p className="text-sm opacity-90">
                    Nous vous répondrons dans un délai maximum d&apos;un mois à
                    compter de la réception de votre demande.
                  </p>
                </div>
              </section>

              {/* 8. Sécurité */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-[#012650] mb-6 pb-3 border-b-2 border-[#C7271B]">
                  8. Sécurité des données
                </h2>

                <p className="text-gray-700 leading-relaxed mb-6">
                  France CEE met en œuvre des mesures techniques et
                  organisationnelles appropriées pour assurer un niveau de
                  sécurité adapté au risque :
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-green-50 p-6 rounded-xl">
                    <h3 className="text-lg font-semibold text-green-700 mb-4">
                      🔒 Mesures techniques
                    </h3>
                    <ul className="text-gray-700 space-y-2 text-sm">
                      <li>• Chiffrement des données en transit (HTTPS/TLS)</li>
                      <li>• Sauvegardes régulières et sécurisées</li>
                      <li>• Accès sécurisé aux systèmes</li>
                      <li>• Mise à jour régulière des systèmes</li>
                      <li>• Monitoring de sécurité</li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 p-6 rounded-xl">
                    <h3 className="text-lg font-semibold text-blue-700 mb-4">
                      👥 Mesures organisationnelles
                    </h3>
                    <ul className="text-gray-700 space-y-2 text-sm">
                      <li>• Formation du personnel à la sécurité</li>
                      <li>
                        • Accès limité aux données (principe du moindre
                        privilège)
                      </li>
                      <li>• Procédures de gestion des incidents</li>
                      <li>• Audits réguliers de sécurité</li>
                      <li>• Clauses de confidentialité</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* 9. Transferts internationaux */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-[#012650] mb-6 pb-3 border-b-2 border-[#C7271B]">
                  9. Transferts internationaux
                </h2>

                <div className="bg-orange-50 p-6 rounded-xl border-l-4 border-orange-500">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Certains de nos prestataires peuvent être situés en dehors
                    de l&apos;Union Européenne :
                  </p>
                  <ul className="text-gray-700 space-y-2">
                    <li>
                      • <strong>Vercel (hébergement) :</strong> États-Unis -
                      Clauses contractuelles types
                    </li>
                    <li>
                      • <strong>Brevo (emailing) :</strong> Union Européenne -
                      Pas de transfert hors UE
                    </li>
                  </ul>
                  <p className="text-sm text-gray-600 mt-4">
                    Tous les transferts sont encadrés par des garanties
                    appropriées conformément au RGPD.
                  </p>
                </div>
              </section>

              {/* 10. Cookies */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-[#012650] mb-6 pb-3 border-b-2 border-[#C7271B]">
                  10. Cookies et technologies similaires
                </h2>

                <p className="text-gray-700 leading-relaxed mb-6">
                  Notre site utilise des cookies pour améliorer votre expérience
                  et analyser l&apos;utilisation du site.
                </p>

                <div className="space-y-4">
                  <div className="bg-green-50 p-4 rounded-xl border-l-4 border-green-500">
                    <h3 className="font-semibold text-green-700 mb-2">
                      🍪 Cookies essentiels
                    </h3>
                    <p className="text-gray-700 text-sm">
                      Nécessaires au fonctionnement du site (pas de consentement
                      requis)
                    </p>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-xl border-l-4 border-blue-500">
                    <h3 className="font-semibold text-blue-700 mb-2">
                      📊 Cookies d&apos;analyse
                    </h3>
                    <p className="text-gray-700 text-sm">
                      Mesure d&apos;audience et amélioration du site
                      (consentement requis)
                    </p>
                  </div>

                  <div className="bg-purple-50 p-4 rounded-xl border-l-4 border-purple-500">
                    <h3 className="font-semibold text-purple-700 mb-2">
                      🎯 Cookies marketing
                    </h3>
                    <p className="text-gray-700 text-sm">
                      Publicité personnalisée (consentement requis)
                    </p>
                  </div>
                </div>

                <p className="text-gray-700 text-sm mt-4">
                  Vous pouvez gérer vos préférences de cookies via les
                  paramètres de votre navigateur ou notre bandeau de
                  consentement.
                </p>
              </section>

              {/* 11. Contact et réclamations */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-[#012650] mb-6 pb-3 border-b-2 border-[#C7271B]">
                  11. Contact et réclamations
                </h2>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-[#012650] text-white p-6 rounded-xl">
                    <h3 className="text-lg font-semibold mb-4">
                      📧 Nous contacter
                    </h3>
                    <p className="mb-2">
                      Email : <strong>contact@francecee.fr</strong>
                    </p>
                    <p className="mb-2">
                      Téléphone : <strong>09 72 19 64 12</strong>
                    </p>
                    <p className="text-sm opacity-90">
                      Du lundi au vendredi, 9h-18h
                    </p>
                  </div>

                  <div className="bg-red-50 p-6 rounded-xl border-l-4 border-red-500">
                    <h3 className="text-lg font-semibold text-red-700 mb-4">
                      ⚖️ Réclamation CNIL
                    </h3>
                    <p className="text-gray-700 text-sm mb-2">
                      Si vous estimez que vos droits ne sont pas respectés, vous
                      pouvez introduire une réclamation auprès de la CNIL :
                    </p>
                    <p className="text-sm font-medium">
                      <a
                        href="https://www.cnil.fr/fr/plaintes"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-red-700 hover:text-red-800 transition-colors"
                      >
                        www.cnil.fr/fr/plaintes
                      </a>
                    </p>
                  </div>
                </div>
              </section>

              {/* Mise à jour */}
              <section className="mb-8">
                <div className="bg-gray-100 p-6 rounded-2xl text-center">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    📅 Mise à jour de cette politique
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Cette politique de confidentialité peut être mise à jour
                    pour refléter les changements dans nos pratiques ou pour des
                    raisons opérationnelles, légales ou réglementaires.
                  </p>
                  <p className="text-sm text-gray-500">
                    Version actuelle :{" "}
                    {new Date().toLocaleDateString("fr-FR", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
