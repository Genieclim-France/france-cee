"use client";

import { Header } from "../Header";
import { Footer } from "../Footer";

export default function MentionsLegales() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Header />

      <main className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header de la page */}
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-[#012650] mb-6">
              Mentions Légales
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Informations légales obligatoires concernant le site France CEE
            </p>
          </div>

          {/* Contenu des mentions légales */}
          <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12">
            <div className="prose prose-lg max-w-none">
              {/* 1. Éditeur du site */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-[#012650] mb-6 pb-3 border-b-2 border-[#C7271B]">
                  1. Éditeur du site
                </h2>
                <div className="bg-blue-50 p-6 rounded-2xl">
                  <dl className="space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center">
                      <dt className="font-semibold text-gray-700 w-48 mb-1 sm:mb-0">
                        Dénomination sociale :
                      </dt>
                      <dd className="text-gray-900">France CEE</dd>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center">
                      <dt className="font-semibold text-gray-700 w-48 mb-1 sm:mb-0">
                        Forme juridique :
                      </dt>
                      <dd className="text-gray-900">SAS</dd>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center">
                      <dt className="font-semibold text-gray-700 w-48 mb-1 sm:mb-0">
                        Capital social :
                      </dt>
                      <dd className="text-gray-900">100 000 €</dd>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-start">
                      <dt className="font-semibold text-gray-700 w-48 mb-1 sm:mb-0">
                        Siège social :
                      </dt>
                      <dd className="text-gray-900">
                        20 rue Jean Mermoz, 33185 LE HAILLAN, France
                      </dd>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center">
                      <dt className="font-semibold text-gray-700 w-48 mb-1 sm:mb-0">
                        Téléphone :
                      </dt>
                      <dd className="text-gray-900">09 72 12 14 01</dd>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center">
                      <dt className="font-semibold text-gray-700 w-48 mb-1 sm:mb-0">
                        Email :
                      </dt>
                      <dd className="text-gray-900">contact@francecee.fr</dd>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center">
                      <dt className="font-semibold text-gray-700 w-48 mb-1 sm:mb-0">
                        RCS :
                      </dt>
                      <dd className="text-gray-900">
                        991 626 185 R.C.S Bordeaux
                      </dd>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center">
                      <dt className="font-semibold text-gray-700 w-48 mb-1 sm:mb-0">
                        SIRET :
                      </dt>
                      <dd className="text-gray-900">[À compléter]</dd>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center">
                      <dt className="font-semibold text-gray-700 w-48 mb-1 sm:mb-0">
                        TVA Intracommunautaire :
                      </dt>
                      <dd className="text-gray-900">
                        [À compléter si applicable]
                      </dd>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center">
                      <dt className="font-semibold text-gray-700 w-48 mb-1 sm:mb-0">
                        Directeur de publication :
                      </dt>
                      <dd className="text-gray-900">Camille Pernot</dd>
                    </div>
                  </dl>
                </div>
              </section>

              {/* 2. Activité */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-[#012650] mb-6 pb-3 border-b-2 border-[#C7271B]">
                  2. Activité
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  France CEE est un mandataire spécialisé dans
                  l&apos;accompagnement des professionnels du bâtiment pour la
                  valorisation des Certificats d&apos;Économies d&apos;Énergie
                  (CEE). Notre société propose des services
                  d&apos;intermédiation, de conseil et d&apos;accompagnement
                  dans le cadre du dispositif CEE prévu par les articles L.
                  221-1 et suivants du Code de l&apos;énergie.
                </p>
              </section>

              {/* 3. Hébergement */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-[#012650] mb-6 pb-3 border-b-2 border-[#C7271B]">
                  3. Hébergement du site
                </h2>
                <div className="bg-gray-50 p-6 rounded-2xl">
                  <p className="mb-4">
                    <strong>Hébergeur :</strong> Vercel Inc.
                  </p>
                  <p className="mb-4">
                    <strong>Adresse :</strong> 340 S Lemon Ave #4133, Walnut, CA
                    91789, États-Unis
                  </p>
                  <p className="mb-0">
                    <strong>Site web :</strong>{" "}
                    <a
                      href="https://vercel.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#012650] hover:text-[#C7271B] transition-colors"
                    >
                      vercel.com
                    </a>
                  </p>
                </div>
              </section>

              {/* 4. Propriété intellectuelle */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-[#012650] mb-6 pb-3 border-b-2 border-[#C7271B]">
                  4. Propriété intellectuelle
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  L&apos;ensemble de ce site relève de la législation française
                  et internationale sur le droit d&apos;auteur et la propriété
                  intellectuelle. Tous les droits de reproduction sont réservés,
                  y compris pour les documents téléchargeables et les
                  représentations iconographiques et photographiques.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  La reproduction de tout ou partie de ce site sur un support
                  électronique quel qu&apos;il soit est formellement interdite
                  sauf autorisation expresse du directeur de la publication.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Les marques et logos présents sur le site sont déposés par
                  France CEE ou éventuellement par ses partenaires. Toute
                  reproduction totale ou partielle de ces marques et/ou logos
                  sans l&apos;autorisation expresse de France CEE est prohibée.
                </p>
              </section>

              {/* 5. Responsabilité */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-[#012650] mb-6 pb-3 border-b-2 border-[#C7271B]">
                  5. Responsabilité
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Les informations contenues sur ce site sont aussi précises que
                  possible et le site remis à jour à différentes périodes de
                  l&apos;année, mais peut toutefois contenir des inexactitudes
                  ou des omissions.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Si vous constatez une lacune, erreur ou ce qui paraît être un
                  dysfonctionnement, merci de bien vouloir le signaler par
                  email, à l&apos;adresse contact@francecee.fr, en décrivant le
                  problème de la manière la plus précise possible.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  France CEE ne pourra être tenue responsable des dommages
                  directs et indirects causés au matériel de l&apos;utilisateur,
                  lors de l&apos;accès au site, et résultant soit de
                  l&apos;utilisation d&apos;un matériel ne répondant pas aux
                  spécifications indiquées, soit de l&apos;apparition d&apos;un
                  bug ou d&apos;une incompatibilité.
                </p>
              </section>

              {/* 6. Liens hypertextes */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-[#012650] mb-6 pb-3 border-b-2 border-[#C7271B]">
                  6. Liens hypertextes
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Des liens hypertextes peuvent être présents sur le site.
                  L&apos;utilisateur est informé qu&apos;en cliquant sur ces
                  liens, il sortira du site francecee.fr. Ce dernier n&apos;a
                  pas de contrôle sur les pages web sur lesquelles aboutissent
                  ces liens et ne saurait, en aucun cas, être responsable de
                  leur contenu.
                </p>
              </section>

              {/* 7. Cookies */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-[#012650] mb-6 pb-3 border-b-2 border-[#C7271B]">
                  7. Cookies
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Le site francecee.fr peut-être amené à vous demander
                  l&apos;acceptation des cookies pour des besoins de
                  statistiques et d&apos;affichage. Un cookie est une
                  information déposée sur votre disque dur par le serveur du
                  site que vous visitez.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Il contient plusieurs données qui sont stockées sur votre
                  ordinateur dans un simple fichier texte auquel un serveur
                  accède pour lire et enregistrer des informations. Certaines
                  parties de ce site ne peuvent être fonctionnelles sans
                  l&apos;acceptation de cookies.
                </p>
              </section>

              {/* 8. Protection des données personnelles */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-[#012650] mb-6 pb-3 border-b-2 border-[#C7271B]">
                  8. Protection des données personnelles
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  En France, les données personnelles sont notamment protégées
                  par la loi n° 78-87 du 6 janvier 1978, la loi n° 2004-801 du 6
                  août 2004, l&apos;article L. 226-13 du Code pénal et la
                  Directive Européenne du 24 octobre 1995.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  À l&apos;occasion de l&apos;utilisation du site francecee.fr,
                  peuvent être recueillies : l&apos;URL des liens par
                  l&apos;intermédiaire desquels l&apos;utilisateur a accédé au
                  site, le fournisseur d&apos;accès de l&apos;utilisateur,
                  l&apos;adresse de protocole Internet (IP) de
                  l&apos;utilisateur.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  En tout état de cause, France CEE ne collecte des informations
                  personnelles relatives à l&apos;utilisateur que pour le besoin
                  de certains services proposés par le site francecee.fr.
                  L&apos;utilisateur fournit ces informations en toute
                  connaissance de cause, notamment lorsqu&apos;il procède par
                  lui-même à leur saisie.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Pour plus d&apos;informations sur le traitement de vos données
                  personnelles, consultez notre
                  <a
                    href="/politique-confidentialite"
                    className="text-[#012650] hover:text-[#C7271B] transition-colors font-semibold"
                  >
                    {" "}
                    Politique de Confidentialité
                  </a>
                  .
                </p>
              </section>

              {/* 9. Droit applicable */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-[#012650] mb-6 pb-3 border-b-2 border-[#C7271B]">
                  9. Droit applicable et attribution de juridiction
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Tout litige en relation avec l&apos;utilisation du site
                  francecee.fr est soumis au droit français. Il est fait
                  attribution exclusive de juridiction aux tribunaux compétents
                  de Bordeaux.
                </p>
              </section>

              {/* 10. Principales lois concernées */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-[#012650] mb-6 pb-3 border-b-2 border-[#C7271B]">
                  10. Principales lois concernées
                </h2>
                <ul className="text-gray-700 leading-relaxed space-y-2">
                  <li>
                    • Loi n° 78-17 du 6 janvier 1978, notamment modifiée par la
                    loi n° 2004-801 du 6 août 2004 relative à
                    l&apos;informatique, aux fichiers et aux libertés.
                  </li>
                  <li>
                    • Loi n° 2004-575 du 21 juin 2004 pour la confiance dans
                    l&apos;économie numérique.
                  </li>
                  <li>
                    • Règlement Général sur la Protection des Données (RGPD) n°
                    2016/679 du 27 avril 2016.
                  </li>
                  <li>
                    • Code de l&apos;énergie, notamment les articles L. 221-1 et
                    suivants relatifs aux certificats d&apos;économies
                    d&apos;énergie.
                  </li>
                </ul>
              </section>

              {/* Contact */}
              <section className="mb-8">
                <div className="bg-[#012650] text-white p-8 rounded-2xl text-center">
                  <h3 className="text-xl font-bold mb-4">Contact</h3>
                  <p className="mb-2">
                    Pour toute question relative aux présentes mentions légales
                    :
                  </p>
                  <p className="font-semibold">contact@francecee.fr</p>
                  <p className="text-sm mt-4 opacity-90">
                    Dernière mise à jour :{" "}
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
