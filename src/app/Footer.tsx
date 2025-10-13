import { Button } from "../app/ui/button";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[#002B72] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
          {/* Logo and description */}
          <div>
            <Image
              src="/logo-white.svg"
              alt="Logo France CEE"
              className="w-32 h-fit object-contain transition-all duration-300 group-hover:scale-110"
              width={48}
              height={48}
            />
            <p className="text-blue-100 text-sm leading-relaxed">
              Votre partenaire de confiance pour la valorisation des Certificats
              d&apos;Économies d&apos;Énergie et l&apos;accompagnement dans la
              transition énergétique et écologique.
            </p>
          </div>

          {/* Services */}
          <div className="flex justify-center">
            <div>
              <h4 className="font-bold mb-4">Nos services</h4>
              <ul className="space-y-2 text-sm text-blue-100">
                <li>
                  <Link
                    href="/#services"
                    className="hover:text-white transition-all duration-300 hover:translate-x-2 inline-block"
                  >
                    Gestion CEE
                  </Link>
                </li>
                <li>
                  <Link
                    href="#process"
                    className="hover:text-white transition-all duration-300 hover:translate-x-2 inline-block"
                  >
                    Devenir partenaires
                  </Link>
                </li>
                <li>
                  <Link
                    href="#crm"
                    className="hover:text-white transition-all duration-300 hover:translate-x-2 inline-block"
                  >
                    CRM dédié
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <div className="space-y-2 text-sm text-blue-100">
              <p>📧 contact@francecee.fr</p>
              <p>📞 09 72 19 64 12</p>
              <p>📍 20 rue jean Mermoz, 33185 LE HAILLAN</p>
            </div>
            <div className="mt-4">
              <Button className="bg-[#C7271B] hover:bg-[#C7271B]/90 text-white w-full transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95">
                Nous contacter
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-[#012650]/70 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-blue-100">
              © {new Date().getFullYear()} France CEE. Tous droits réservés.
            </p>
            <div className="flex space-x-6 text-sm">
              <a
                href="/charte-cdp"
                className="text-blue-100 hover:text-white transition-all duration-300 hover:translate-y-1 inline-block"
              >
                Charte CDP
              </a>
              <a
                href="/mentions-legales"
                className="text-blue-100 hover:text-white transition-all duration-300 hover:translate-y-1 inline-block"
              >
                Mentions légales
              </a>
              <a
                href="/politique-confidentialite"
                className="text-blue-100 hover:text-white transition-all duration-300 hover:translate-y-1 inline-block"
              >
                Politique de confidentialité
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
