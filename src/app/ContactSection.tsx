"use client";

import { useState } from "react";
import { Button } from "../app/ui/button";
import { Input } from "../app/ui/input";
import { Textarea } from "../app/ui/textarea";
import { Label } from "../app/ui/label";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export function ContactSection() {
  const [activeTab, setActiveTab] = useState<"question" | "partner">(
    "question"
  );

  const [questionFormData, setQuestionFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [partnerFormData, setPartnerFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    siret: "",
    activity: "",
    location: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleQuestionInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setQuestionFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePartnerInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setPartnerFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const currentFormData =
      activeTab === "question" ? questionFormData : partnerFormData;
    const requestType =
      activeTab === "question" ? "question" : "partner_registration";

    try {
      const response = await fetch("/api/mailer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...currentFormData,
          type: requestType,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        // Succès
        const successMessage =
          activeTab === "question"
            ? "Merci pour votre message ! Nous vous recontacterons rapidement."
            : "Votre demande de partenariat a été envoyée ! Notre équipe vous contactera sous 48h.";

        alert(result.message || successMessage);

        // Reset du formulaire approprié
        if (activeTab === "question") {
          setQuestionFormData({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            message: "",
          });
        } else {
          setPartnerFormData({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            company: "",
            siret: "",
            activity: "",
            location: "",
            message: "",
          });
        }
      } else {
        // Erreur du serveur
        console.error("Erreur serveur:", result);
        alert(
          result.details ||
            "Une erreur s'est produite lors de l'envoi. Veuillez réessayer."
        );
      }
    } catch (error) {
      // Erreur réseau ou autre
      console.error("Erreur lors de l'envoi:", error);
      alert(
        "Une erreur s'est produite lors de l'envoi. Veuillez vérifier votre connexion et réessayer."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-24 bg-blue-50/30 overflow-hidden"
    >
      {/* Subtle background effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#012650]/2 via-white/3 to-[#C7271B]/2"></div>

      {/* Floating elements - very subtle */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 border border-[#012650]/10 rounded-full opacity-30"></div>
        <div className="absolute bottom-24 right-24 w-20 h-20 border border-[#C7271B]/15 rounded-lg rotate-45 opacity-25"></div>
        <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-[#012650]/20 rounded-full animate-pulse"></div>
        <div
          className="absolute top-1/4 left-1/3 w-1 h-1 bg-[#C7271B]/30 rounded-full animate-pulse"
          style={{ animationDelay: "1.5s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight text-[#012650]">
              Contactez-nous
            </h2>

            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Une question sur les CEE ? Besoin d&apos;informations sur notre
              accompagnement ? Notre équipe d&apos;experts est là pour vous
              aider. Contactez-nous dès maintenant !
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Informations de contact */}
          <div className="space-y-10">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-8">
                <span className="relative">
                  Nos coordonnées
                  {/* Subtle underline */}
                  <div className="absolute -bottom-2 left-0 w-16 h-0.5 bg-gradient-to-r from-[#012650] to-[#012650]/90 rounded-full"></div>
                </span>
              </h3>
              <div className="space-y-6">
                <div className="group flex items-start space-x-5 p-6 rounded-3xl hover:bg-blue-50/50 transition-all duration-300 cursor-pointer hover:scale-102 hover:-translate-y-1">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                    <Mail className="w-8 h-8 text-[#012650] transition-all duration-300 group-hover:text-[#012650]/90" />
                  </div>
                  <a href="mailto:contact@francecee.fr" className="space-y-1">
                    <h4 className="text-xl font-semibold text-gray-900 group-hover:text-[#012650] transition-colors duration-300">
                      Email
                    </h4>
                    <p className="text-gray-600 text-lg font-medium">
                      contact@francecee.fr
                    </p>
                    <p className="text-sm text-gray-500">
                      Réponse sous 24h ouvrées
                    </p>
                  </a>
                </div>

                <div className="group flex items-start space-x-5 p-6 rounded-3xl hover:bg-blue-50/50 transition-all duration-300 cursor-pointer hover:scale-102 hover:-translate-y-1">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                    <Phone className="w-8 h-8 text-[#012650] transition-all duration-300 group-hover:text-[#012650]/90" />
                  </div>
                  <a href="tel:0972121401" className="space-y-1">
                    <h4 className="text-xl font-semibold text-gray-900 group-hover:text-[#012650] transition-colors duration-300">
                      Téléphone
                    </h4>
                    <p className="text-gray-600 text-lg font-medium">
                      09 72 12 14 01
                    </p>
                    <p className="text-sm text-gray-500">Lun-Ven : 9h-18h</p>
                  </a>
                </div>

                <div className="group flex items-start space-x-5 p-6 rounded-3xl hover:bg-blue-50/50 transition-all duration-300 cursor-pointer hover:scale-102 hover:-translate-y-1">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                    <MapPin className="w-8 h-8 text-[#012650] transition-all duration-300 group-hover:text-[#012650]/90" />
                  </div>
                  <a
                    href="https://maps.app.goo.gl/LWeHUzGH66yWs55U9"
                    target="_blank"
                    className="space-y-1"
                  >
                    <h4 className="text-xl font-semibold text-gray-900 group-hover:text-[#012650] transition-colors duration-300">
                      Adresse
                    </h4>
                    <p className="text-gray-600 text-lg">
                      20 rue jean Mermoz
                      <br />
                      33185 LE HAILLAN, France
                    </p>
                  </a>
                </div>
              </div>
            </div>

            <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-500 group">
              <h4 className="text-2xl font-bold text-gray-900 mb-6">
                <span className="relative">
                  Pourquoi nous choisir ?{/* Subtle underline */}
                  <div className="absolute -bottom-1 left-0 w-12 h-0.5 bg-gradient-to-r from-[#C7271B] to-[#C7271B]/90 rounded-full"></div>
                </span>
              </h4>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-center space-x-4 group/item hover:translate-x-2 transition-transform duration-300 p-2 rounded-2xl hover:bg-blue-50/50">
                  <div className="w-3 h-3 bg-gradient-to-r from-[#012650] to-[#012650]/90 rounded-full group-hover/item:scale-150 transition-transform duration-300 shadow-sm"></div>
                  <span className="group-hover/item:text-[#012650] transition-colors duration-300 text-lg">
                    Accompagnement personnalisé et gratuit
                  </span>
                </li>
                <li className="flex items-center space-x-4 group/item hover:translate-x-2 transition-transform duration-300 p-2 rounded-2xl hover:bg-blue-50/50">
                  <div className="w-3 h-3 bg-gradient-to-r from-[#012650] to-[#012650]/90 rounded-full group-hover/item:scale-150 transition-transform duration-300 shadow-sm"></div>
                  <span className="group-hover/item:text-[#012650] transition-colors duration-300 text-lg">
                    Expertise reconnue en CEE
                  </span>
                </li>
                <li className="flex items-center space-x-4 group/item hover:translate-x-2 transition-transform duration-300 p-2 rounded-2xl hover:bg-blue-50/50">
                  <div className="w-3 h-3 bg-gradient-to-r from-[#012650] to-[#012650]/90 rounded-full group-hover/item:scale-150 transition-transform duration-300 shadow-sm"></div>
                  <span className="group-hover/item:text-[#012650] transition-colors duration-300 text-lg">
                    Paiement rapide et sécurisé
                  </span>
                </li>
                <li className="flex items-center space-x-4 group/item hover:translate-x-2 transition-transform duration-300 p-2 rounded-2xl hover:bg-blue-50/50">
                  <div className="w-3 h-3 bg-gradient-to-r from-[#012650] to-[#012650]/90 rounded-full group-hover/item:scale-150 transition-transform duration-300 shadow-sm"></div>
                  <span className="group-hover/item:text-[#012650] transition-colors duration-300 text-lg">
                    Support technique dédié
                  </span>
                </li>
              </ul>

              {/* Card glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#012650]/5 to-[#C7271B]/5 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>
            </div>
          </div>

          {/* Formulaire de contact avec onglets */}
          <div className="relative bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-10 border border-white/50 hover:shadow-3xl transition-all duration-500 group z-20">
            {/* Onglets */}
            <div className="flex mb-8 bg-gray-100/80 rounded-2xl p-2">
              <button
                onClick={() => setActiveTab("question")}
                className={`cursor-pointer flex-1 py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-300 ${
                  activeTab === "question"
                    ? "bg-white text-[#012650] shadow-lg transform scale-105"
                    : "text-gray-600 hover:text-[#012650] hover:bg-white/50"
                }`}
              >
                Poser une question
              </button>
              <button
                onClick={() => setActiveTab("partner")}
                className={`cursor-pointer flex-1 py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-300 ${
                  activeTab === "partner"
                    ? "bg-white text-[#C7271B] shadow-lg transform scale-105"
                    : "text-gray-600 hover:text-[#C7271B] hover:bg-white/50"
                }`}
              >
                Devenir partenaire
              </button>
            </div>

            <h3 className="text-3xl font-bold text-gray-900 mb-8">
              <span className="relative">
                {activeTab === "question"
                  ? "Envoyez-nous un message"
                  : "Rejoignez notre réseau"}
                {/* Subtle underline */}
                <div
                  className={`absolute -bottom-2 left-0 w-16 h-0.5 rounded-full ${
                    activeTab === "question"
                      ? "bg-gradient-to-r from-[#012650] to-[#C7271B]"
                      : "bg-gradient-to-r from-[#C7271B] to-[#012650]"
                  }`}
                ></div>
              </span>
            </h3>
            <form
              onSubmit={handleSubmit}
              className="space-y-8 relative z-10"
              suppressHydrationWarning
            >
              {activeTab === "question" ? (
                // Formulaire pour poser une question
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <Label
                        htmlFor="firstName"
                        className="text-lg font-semibold text-gray-700"
                      >
                        Prénom *
                      </Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        type="text"
                        required
                        value={questionFormData.firstName}
                        onChange={handleQuestionInputChange}
                        placeholder="Votre prénom"
                        className="w-full h-12 rounded-2xl border-2 transition-all duration-300 focus:scale-102 focus:shadow-lg focus:border-[#012650]"
                      />
                    </div>
                    <div className="space-y-3">
                      <Label
                        htmlFor="lastName"
                        className="text-lg font-semibold text-gray-700"
                      >
                        Nom *
                      </Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        type="text"
                        required
                        value={questionFormData.lastName}
                        onChange={handleQuestionInputChange}
                        placeholder="Votre nom"
                        className="w-full h-12 rounded-2xl border-2 transition-all duration-300 focus:scale-102 focus:shadow-lg focus:border-[#012650]"
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Label
                      htmlFor="email"
                      className="text-lg font-semibold text-gray-700"
                    >
                      Email *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={questionFormData.email}
                      onChange={handleQuestionInputChange}
                      placeholder="votre.email@exemple.com"
                      className="w-full h-12 rounded-2xl border-2 transition-all duration-300 focus:scale-102 focus:shadow-lg focus:border-[#012650]"
                    />
                  </div>

                  <div className="space-y-3">
                    <Label
                      htmlFor="phone"
                      className="text-lg font-semibold text-gray-700"
                    >
                      Téléphone
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={questionFormData.phone}
                      onChange={handleQuestionInputChange}
                      placeholder="01 XX XX XX XX"
                      className="w-full h-12 rounded-2xl border-2 transition-all duration-300 focus:scale-102 focus:shadow-lg focus:border-[#012650]"
                    />
                  </div>

                  <div className="space-y-3">
                    <Label
                      htmlFor="message"
                      className="text-lg font-semibold text-gray-700"
                    >
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={questionFormData.message}
                      onChange={handleQuestionInputChange}
                      placeholder="Décrivez votre projet, vos questions ou vos besoins..."
                      rows={5}
                      className="w-full rounded-2xl border-2 resize-none transition-all duration-300 focus:scale-102 focus:shadow-lg focus:border-[#012650]"
                    />
                  </div>
                </>
              ) : (
                // Formulaire pour devenir partenaire
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <Label
                        htmlFor="firstName"
                        className="text-lg font-semibold text-gray-700"
                      >
                        Prénom *
                      </Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        type="text"
                        required
                        value={partnerFormData.firstName}
                        onChange={handlePartnerInputChange}
                        placeholder="Votre prénom"
                        className="w-full h-12 rounded-2xl border-2 transition-all duration-300 focus:scale-102 focus:shadow-lg focus:border-[#C7271B]"
                      />
                    </div>
                    <div className="space-y-3">
                      <Label
                        htmlFor="lastName"
                        className="text-lg font-semibold text-gray-700"
                      >
                        Nom *
                      </Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        type="text"
                        required
                        value={partnerFormData.lastName}
                        onChange={handlePartnerInputChange}
                        placeholder="Votre nom"
                        className="w-full h-12 rounded-2xl border-2 transition-all duration-300 focus:scale-102 focus:shadow-lg focus:border-[#C7271B]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <Label
                        htmlFor="email"
                        className="text-lg font-semibold text-gray-700"
                      >
                        Email *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={partnerFormData.email}
                        onChange={handlePartnerInputChange}
                        placeholder="votre.email@exemple.com"
                        className="w-full h-12 rounded-2xl border-2 transition-all duration-300 focus:scale-102 focus:shadow-lg focus:border-[#C7271B]"
                      />
                    </div>
                    <div className="space-y-3">
                      <Label
                        htmlFor="phone"
                        className="text-lg font-semibold text-gray-700"
                      >
                        Téléphone *
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={partnerFormData.phone}
                        onChange={handlePartnerInputChange}
                        placeholder="01 XX XX XX XX"
                        className="w-full h-12 rounded-2xl border-2 transition-all duration-300 focus:scale-102 focus:shadow-lg focus:border-[#C7271B]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <Label
                        htmlFor="company"
                        className="text-lg font-semibold text-gray-700"
                      >
                        Entreprise *
                      </Label>
                      <Input
                        id="company"
                        name="company"
                        type="text"
                        required
                        value={partnerFormData.company}
                        onChange={handlePartnerInputChange}
                        placeholder="Nom de votre entreprise"
                        className="w-full h-12 rounded-2xl border-2 transition-all duration-300 focus:scale-102 focus:shadow-lg focus:border-[#C7271B]"
                      />
                    </div>
                    <div className="space-y-3">
                      <Label
                        htmlFor="siret"
                        className="text-lg font-semibold text-gray-700"
                      >
                        SIRET *
                      </Label>
                      <Input
                        id="siret"
                        name="siret"
                        type="text"
                        required
                        value={partnerFormData.siret}
                        onChange={handlePartnerInputChange}
                        placeholder="XXX XXX XXX XXXXX"
                        className="w-full h-12 rounded-2xl border-2 transition-all duration-300 focus:scale-102 focus:shadow-lg focus:border-[#C7271B]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <Label
                        htmlFor="activity"
                        className="text-lg font-semibold text-gray-700"
                      >
                        Secteur d&apos;activité *
                      </Label>
                      <Input
                        id="activity"
                        name="activity"
                        type="text"
                        required
                        value={partnerFormData.activity}
                        onChange={handlePartnerInputChange}
                        placeholder="Plomberie, Électricité, Isolation..."
                        className="w-full h-12 rounded-2xl border-2 transition-all duration-300 focus:scale-102 focus:shadow-lg focus:border-[#C7271B]"
                      />
                    </div>
                    <div className="space-y-3">
                      <Label
                        htmlFor="location"
                        className="text-lg font-semibold text-gray-700"
                      >
                        Zone d&apos;intervention *
                      </Label>
                      <Input
                        id="location"
                        name="location"
                        type="text"
                        required
                        value={partnerFormData.location}
                        onChange={handlePartnerInputChange}
                        placeholder="Ville, département, région..."
                        className="w-full h-12 rounded-2xl border-2 transition-all duration-300 focus:scale-102 focus:shadow-lg focus:border-[#C7271B]"
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Label
                      htmlFor="message"
                      className="text-lg font-semibold text-gray-700"
                    >
                      Présentation de votre entreprise *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={partnerFormData.message}
                      onChange={handlePartnerInputChange}
                      placeholder="Présentez votre entreprise, votre expérience, vos certifications..."
                      rows={5}
                      className="w-full rounded-2xl border-2 resize-none transition-all duration-300 focus:scale-102 focus:shadow-lg focus:border-[#C7271B]"
                    />
                  </div>
                </>
              )}

              <Button
                type="submit"
                disabled={isSubmitting}
                className={`cursor-pointer w-full text-white h-14 rounded-2xl text-lg font-semibold transition-all duration-300 hover:scale-102 hover:shadow-xl hover:-translate-y-0.5 active:scale-98 group/btn ${
                  activeTab === "question"
                    ? "bg-gradient-to-r from-[#012650] to-[#C7271B] hover:from-[#012650]/90 hover:to-[#C7271B]/90"
                    : "bg-gradient-to-r from-[#C7271B] to-[#012650] hover:from-[#C7271B]/90 hover:to-[#012650]/90"
                }`}
                size="lg"
              >
                {isSubmitting ? (
                  <div className="flex items-center space-x-3">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Envoi en cours...</span>
                  </div>
                ) : (
                  <div className=" flex items-center space-x-3">
                    <Send className="w-6 h-6 transition-transform duration-300 group-hover/btn:translate-x-1" />
                    <span>
                      {activeTab === "question"
                        ? "Envoyer le message"
                        : "Soumettre ma candidature"}
                    </span>
                  </div>
                )}
              </Button>

              <p className="text-sm text-gray-500 text-center leading-relaxed">
                * Champs obligatoires. Vos données sont traitées de manière
                confidentielle.
                {activeTab === "partner" && (
                  <>
                    <br />
                    <span className="font-medium">
                      Notre équipe vous recontactera sous 48h pour étudier votre
                      candidature.
                    </span>
                  </>
                )}
              </p>
            </form>

            {/* Form glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#012650]/3 to-[#C7271B]/3 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
