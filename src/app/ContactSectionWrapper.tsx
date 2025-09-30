"use client";

import dynamic from "next/dynamic";

const ContactSectionClient = dynamic(
  () => import("./ContactSection").then((mod) => mod.ContactSection),
  {
    ssr: false,
    loading: () => (
      <section
        id="contact"
        className="py-24 bg-blue-50/30 animate-pulse"
        aria-busy="true"
        aria-live="polite"
      >
        <div className="max-w-3xl mx-auto text-center text-gray-600">
          Chargement du formulaire de contact…
        </div>
      </section>
    ),
  }
);

export function ContactSectionWrapper() {
  return <ContactSectionClient />;
}
