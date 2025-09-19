import { NextRequest, NextResponse } from "next/server";

// Types pour les données du formulaire de contact
interface BaseFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  message: string;
  type: "question" | "partner_registration";
}

interface QuestionFormData extends BaseFormData {
  type: "question";
}

interface PartnerFormData extends BaseFormData {
  type: "partner_registration";
  company: string;
  siret: string;
  activity: string;
  location: string;
}

type ContactFormData = QuestionFormData | PartnerFormData;

// Type pour la réponse de l'API Brevo
interface BrevoResponse {
  messageId: string;
}

// Configuration de l'API Brevo
const BREVO_API_URL = "https://api.brevo.com/v3/smtp/email";
const BREVO_API_KEY = process.env.BREVO_API_KEY;
const RECIPIENT_EMAIL = process.env.RECIPIENT_EMAIL || "contact@francecee.fr";
const SENDER_EMAIL = process.env.SENDER_EMAIL || "noreply@francecee.fr";
const SENDER_NAME = process.env.SENDER_NAME || "France CEE";

// Validation des données du formulaire
function validateFormData(data: unknown): data is ContactFormData {
  if (typeof data !== "object" || data === null) {
    return false;
  }

  const obj = data as Record<string, unknown>;

  // Validation des champs communs
  const baseValidation =
    typeof obj.firstName === "string" &&
    obj.firstName.trim().length > 0 &&
    typeof obj.lastName === "string" &&
    obj.lastName.trim().length > 0 &&
    typeof obj.email === "string" &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(obj.email) &&
    typeof obj.message === "string" &&
    obj.message.trim().length > 0 &&
    (obj.phone === undefined || typeof obj.phone === "string") &&
    (obj.type === "question" || obj.type === "partner_registration");

  if (!baseValidation) {
    return false;
  }

  // Validation spécifique pour les partenaires
  if (obj.type === "partner_registration") {
    return (
      typeof obj.company === "string" &&
      obj.company.trim().length > 0 &&
      typeof obj.siret === "string" &&
      obj.siret.trim().length > 0 &&
      typeof obj.activity === "string" &&
      obj.activity.trim().length > 0 &&
      typeof obj.location === "string" &&
      obj.location.trim().length > 0
    );
  }

  return true;
}

// Génération du contenu HTML pour les questions
function generateQuestionEmailHTML(data: QuestionFormData): string {
  return `
    <!DOCTYPE html>
    <html lang="fr">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Nouvelle question client - France CEE</title>
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          font-family: 'Segoe UI', system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
          line-height: 1.6;
          color: #2d3748;
          background: linear-gradient(135deg, #f0f8ff 0%, #e6f3ff 100%);
          padding: 20px;
        }
        
        .email-container {
          max-width: 700px;
          margin: 0 auto;
          background: white;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }
        
        .header {
          background: linear-gradient(135deg, #012650 0%, #2c5282 100%);
          color: white;
          padding: 40px 30px;
          text-align: center;
          position: relative;
        }
        
        .header::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain2" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="30" cy="30" r="1" fill="rgba(255,255,255,0.08)"/><circle cx="70" cy="70" r="1" fill="rgba(255,255,255,0.08)"/><circle cx="45" cy="15" r="0.5" fill="rgba(255,255,255,0.04)"/></pattern></defs><rect width="100" height="100" fill="url(%23grain2)"/></svg>') repeat;
          opacity: 0.4;
        }
        
        .header-content {
          position: relative;
          z-index: 1;
        }
        
        .header h1 {
          font-size: 32px;
          font-weight: 800;
          margin-bottom: 10px;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
        }
        
        .header p {
          font-size: 16px;
          opacity: 0.9;
          margin-bottom: 20px;
        }
        
        .priority-badge {
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: white;
          padding: 10px 20px;
          border-radius: 50px;
          font-size: 13px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          display: inline-block;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        }
        
        .content {
          padding: 40px 30px;
        }
        
        .section {
          margin-bottom: 35px;
        }
        
        .section-title {
          font-size: 20px;
          font-weight: 700;
          color: #1a202c;
          margin-bottom: 20px;
          padding-bottom: 10px;
          border-bottom: 2px solid #e2e8f0;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        
        .contact-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
          margin-bottom: 30px;
        }
        
        .contact-card {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          padding: 20px;
          transition: all 0.3s ease;
        }
        
        .contact-card:hover {
          border-color: #012650;
          box-shadow: 0 4px 12px rgba(1, 38, 80, 0.1);
        }
        
        .contact-label {
          font-size: 12px;
          font-weight: 600;
          color: #718096;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 5px;
        }
        
        .contact-value {
          font-size: 16px;
          font-weight: 600;
          color: #2d3748;
        }
        
        .contact-value a {
          color: #012650;
          text-decoration: none;
          transition: color 0.3s ease;
        }
        
        .contact-value a:hover {
          color: #2c5282;
        }
        
        .message-highlight {
          background: linear-gradient(135deg, #f0f8ff 0%, #e6f3ff 100%);
          border: 1px solid #012650;
          border-radius: 16px;
          padding: 30px;
          margin: 30px 0;
          position: relative;
          overflow: hidden;
        }
        
        .message-highlight::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 4px;
          height: 100%;
          background: linear-gradient(180deg, #012650 0%, #2c5282 100%);
        }
        
        .message-icon {
          background: linear-gradient(135deg, #012650 0%, #2c5282 100%);
          color: white;
          width: 50px;
          height: 50px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          margin-bottom: 20px;
          box-shadow: 0 4px 12px rgba(1, 38, 80, 0.3);
        }
        
        .message-text {
          font-size: 16px;
          line-height: 1.8;
          color: #4a5568;
          white-space: pre-wrap;
          background: white;
          padding: 20px;
          border-radius: 12px;
          border-left: 4px solid #C7271B;
          margin-top: 15px;
        }
        
        .actions {
          background: linear-gradient(135deg, #f7fafc 0%, #edf2f7 100%);
          border-radius: 12px;
          padding: 25px;
          margin: 30px 0;
          text-align: center;
        }
        
        .actions h3 {
          color: #012650;
          font-size: 20px;
          margin-bottom: 15px;
        }
        
        .action-buttons {
          display: flex;
          gap: 15px;
          justify-content: center;
          flex-wrap: wrap;
          margin-top: 20px;
        }
        
        .action-btn {
          display: inline-block;
          background: #012650;
          color: white;
          padding: 12px 24px;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s ease;
          box-shadow: 0 4px 12px rgba(1, 38, 80, 0.3);
        }
        
        .action-btn:hover {
          background: #1a365d;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(1, 38, 80, 0.4);
        }
        
        .action-btn.secondary {
          background: #C7271B;
          box-shadow: 0 4px 12px rgba(199, 39, 27, 0.3);
        }
        
        .action-btn.secondary:hover {
          background: #9c1810;
          box-shadow: 0 6px 20px rgba(199, 39, 27, 0.4);
        }
        
        .footer {
          background: #2d3748;
          color: #cbd5e0;
          padding: 30px;
          text-align: center;
          font-size: 14px;
          line-height: 1.6;
        }
        
        .footer strong {
          color: white;
        }
        
        .timestamp {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          padding: 10px;
          margin-top: 15px;
          font-family: 'Courier New', monospace;
          font-size: 13px;
        }
        
        .customer-type {
          background: linear-gradient(135deg, #48bb78 0%, #38a169 100%);
          color: white;
          padding: 8px 16px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          display: inline-block;
          margin-bottom: 15px;
        }
        
        @media (max-width: 600px) {
          .email-container {
            border-radius: 0;
            margin: 0;
          }
          
          .header, .content, .footer {
            padding: 20px;
          }
          
          .contact-grid {
            grid-template-columns: 1fr;
          }
          
          .action-buttons {
            flex-direction: column;
            align-items: center;
          }
        }
      </style>
    </head>
    <body>
      <div class="email-container">
        <div class="header">
          <div class="header-content">
            <h1>💬 Nouvelle Question Client</h1>
            <p>Message reçu depuis le site France CEE</p>
            <div class="priority-badge">📋 DEMANDE CLIENT</div>
          </div>
        </div>
        
        <div class="content">
          <div class="section">
            <h2 class="section-title">👤 Informations du Client</h2>
            <div class="contact-grid">
              <div class="contact-card">
                <div class="contact-label">Prénom</div>
                <div class="contact-value">${data.firstName}</div>
              </div>
              <div class="contact-card">
                <div class="contact-label">Nom</div>
                <div class="contact-value">${data.lastName}</div>
              </div>
              <div class="contact-card">
                <div class="contact-label">Email</div>
                <div class="contact-value">
                  <a href="mailto:${data.email}">${data.email}</a>
                </div>
              </div>
              ${
                data.phone
                  ? `
              <div class="contact-card">
                <div class="contact-label">Téléphone</div>
                <div class="contact-value">
                  <a href="tel:${data.phone}">${data.phone}</a>
                </div>
              </div>
              `
                  : ""
              }
            </div>
          </div>
          
          <div class="section">
            <h2 class="section-title">💭 Message du Client</h2>
            <div class="message-highlight">
              <div class="customer-type">Question Générale</div>
              <div class="message-icon">💬</div>
              <div class="message-text">${data.message}</div>
            </div>
          </div>
          
          <div class="actions">
            <h3>📞 Actions Recommandées</h3>
            <p>Répondre à ce client dans les <strong>24 heures</strong> pour maintenir un excellent service.</p>
            <div class="action-buttons">
              <a href="mailto:${
                data.email
              }?subject=RE: Votre question sur France CEE" class="action-btn">
                📧 Répondre par email
              </a>
              ${
                data.phone
                  ? `
              <a href="tel:${data.phone}" class="action-btn secondary">
                📞 Appeler le client
              </a>
              `
                  : ""
              }
            </div>
          </div>
        </div>
        
        <div class="footer">
          <p><strong>🏠 France CEE - Service Client</strong></p>
          <p>Cette question a été soumise via le formulaire de contact de votre site web.</p>
          <div class="timestamp">
            📅 Reçu le ${new Date().toLocaleString("fr-FR", {
              timeZone: "Europe/Paris",
              year: "numeric",
              month: "long",
              day: "numeric",
              hour: "2-digit",
              minute: "2-digit",
              weekday: "long",
            })}
          </div>
        </div>
      </div>
    </body>
    </html>
  `;
}

// Génération du contenu HTML pour les demandes de partenariat
function generatePartnerEmailHTML(data: PartnerFormData): string {
  return `
    <!DOCTYPE html>
    <html lang="fr">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Nouvelle candidature partenaire - France CEE</title>
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          font-family: 'Segoe UI', system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
          line-height: 1.6;
          color: #2d3748;
          background: linear-gradient(135deg, #f7fafc 0%, #edf2f7 100%);
          padding: 20px;
        }
        
        .email-container {
          max-width: 700px;
          margin: 0 auto;
          background: white;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }
        
        .header {
          background: linear-gradient(135deg, #C7271B 0%, #e53e3e 100%);
          color: white;
          padding: 40px 30px;
          text-align: center;
          position: relative;
        }
        
        .header::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="25" cy="25" r="1" fill="rgba(255,255,255,0.1)"/><circle cx="75" cy="75" r="1" fill="rgba(255,255,255,0.1)"/><circle cx="50" cy="10" r="0.5" fill="rgba(255,255,255,0.05)"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>') repeat;
          opacity: 0.3;
        }
        
        .header-content {
          position: relative;
          z-index: 1;
        }
        
        .header h1 {
          font-size: 32px;
          font-weight: 800;
          margin-bottom: 10px;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
        }
        
        .header p {
          font-size: 16px;
          opacity: 0.9;
          margin-bottom: 20px;
        }
        
        .priority-badge {
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          color: white;
          padding: 12px 24px;
          border-radius: 50px;
          font-size: 14px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          display: inline-block;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        }
        
        .content {
          padding: 40px 30px;
        }
        
        .section {
          margin-bottom: 35px;
        }
        
        .section-title {
          font-size: 20px;
          font-weight: 700;
          color: #1a202c;
          margin-bottom: 20px;
          padding-bottom: 10px;
          border-bottom: 2px solid #e2e8f0;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        
        .contact-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
          margin-bottom: 30px;
        }
        
        .contact-card {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          padding: 20px;
          transition: all 0.3s ease;
        }
        
        .contact-card:hover {
          border-color: #C7271B;
          box-shadow: 0 4px 12px rgba(199, 39, 27, 0.1);
        }
        
        .contact-label {
          font-size: 12px;
          font-weight: 600;
          color: #718096;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 5px;
        }
        
        .contact-value {
          font-size: 16px;
          font-weight: 600;
          color: #2d3748;
        }
        
        .contact-value a {
          color: #C7271B;
          text-decoration: none;
          transition: color 0.3s ease;
        }
        
        .contact-value a:hover {
          color: #9c1810;
        }
        
        .company-highlight {
          background: linear-gradient(135deg, #012650 0%, #2c5282 100%);
          color: white;
          border-radius: 16px;
          padding: 30px;
          margin: 30px 0;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        
        .company-highlight::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
          animation: shimmer 3s ease-in-out infinite;
        }
        
        @keyframes shimmer {
          0%, 100% { opacity: 0; }
          50% { opacity: 1; }
        }
        
        .company-name {
          font-size: 28px;
          font-weight: 800;
          margin-bottom: 10px;
          position: relative;
          z-index: 1;
        }
        
        .company-details {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 15px;
          margin-top: 20px;
          position: relative;
          z-index: 1;
        }
        
        .company-detail {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          padding: 15px;
          text-align: center;
        }
        
        .company-detail-label {
          font-size: 12px;
          opacity: 0.8;
          margin-bottom: 5px;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        
        .company-detail-value {
          font-size: 16px;
          font-weight: 600;
        }
        
        .message-section {
          background: #fafafa;
          border-left: 4px solid #C7271B;
          border-radius: 0 12px 12px 0;
          padding: 25px;
          margin: 30px 0;
        }
        
        .message-text {
          font-size: 16px;
          line-height: 1.8;
          color: #4a5568;
          font-style: italic;
          white-space: pre-wrap;
        }
        
        .actions {
          background: linear-gradient(135deg, #f7fafc 0%, #edf2f7 100%);
          border-radius: 12px;
          padding: 25px;
          margin: 30px 0;
          text-align: center;
        }
        
        .actions h3 {
          color: #C7271B;
          font-size: 20px;
          margin-bottom: 15px;
        }
        
        .action-buttons {
          display: flex;
          gap: 15px;
          justify-content: center;
          flex-wrap: wrap;
          margin-top: 20px;
        }
        
        .action-btn {
          display: inline-block;
          background: #C7271B;
          color: white;
          padding: 12px 24px;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s ease;
          box-shadow: 0 4px 12px rgba(199, 39, 27, 0.3);
        }
        
        .action-btn:hover {
          background: #9c1810;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(199, 39, 27, 0.4);
        }
        
        .action-btn.secondary {
          background: #012650;
          box-shadow: 0 4px 12px rgba(1, 38, 80, 0.3);
        }
        
        .action-btn.secondary:hover {
          background: #1a365d;
          box-shadow: 0 6px 20px rgba(1, 38, 80, 0.4);
        }
        
        .footer {
          background: #2d3748;
          color: #cbd5e0;
          padding: 30px;
          text-align: center;
          font-size: 14px;
          line-height: 1.6;
        }
        
        .footer strong {
          color: white;
        }
        
        .timestamp {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          padding: 10px;
          margin-top: 15px;
          font-family: 'Courier New', monospace;
          font-size: 13px;
        }
        
        @media (max-width: 600px) {
          .email-container {
            border-radius: 0;
            margin: 0;
          }
          
          .header, .content, .footer {
            padding: 20px;
          }
          
          .contact-grid {
            grid-template-columns: 1fr;
          }
          
          .company-details {
            grid-template-columns: 1fr;
          }
          
          .action-buttons {
            flex-direction: column;
            align-items: center;
          }
        }
      </style>
    </head>
    <body>
      <div class="email-container">
        <div class="header">
          <div class="header-content">
            <h1>🤝 Nouvelle Candidature Partenaire</h1>
            <p>Demande d'adhésion au réseau France CEE</p>
            <div class="priority-badge">⚡ PRIORITÉ ÉLEVÉE</div>
          </div>
        </div>
        
        <div class="content">
          <div class="section">
            <h2 class="section-title">👤 Informations de Contact</h2>
            <div class="contact-grid">
              <div class="contact-card">
                <div class="contact-label">Prénom</div>
                <div class="contact-value">${data.firstName}</div>
              </div>
              <div class="contact-card">
                <div class="contact-label">Nom</div>
                <div class="contact-value">${data.lastName}</div>
              </div>
              <div class="contact-card">
                <div class="contact-label">Email</div>
                <div class="contact-value">
                  <a href="mailto:${data.email}">${data.email}</a>
                </div>
              </div>
              <div class="contact-card">
                <div class="contact-label">Téléphone</div>
                <div class="contact-value">
                  ${
                    data.phone
                      ? `<a href="tel:${data.phone}">${data.phone}</a>`
                      : "Non renseigné"
                  }
                </div>
              </div>
            </div>
          </div>
          
          <div class="company-highlight">
            <div class="company-name">${data.company}</div>
            <div class="company-details">
              <div class="company-detail">
                <div class="company-detail-label">SIRET</div>
                <div class="company-detail-value">${data.siret}</div>
              </div>
              <div class="company-detail">
                <div class="company-detail-label">Secteur</div>
                <div class="company-detail-value">${data.activity}</div>
              </div>
              <div class="company-detail">
                <div class="company-detail-label">Zone</div>
                <div class="company-detail-value">${data.location}</div>
              </div>
            </div>
          </div>
          
          <div class="section">
            <h2 class="section-title">📝 Présentation de l'Entreprise</h2>
            <div class="message-section">
              <div class="message-text">${data.message}</div>
            </div>
          </div>
          
          <div class="actions">
            <h3>🎯 Actions Recommandées</h3>
            <p>Cette candidature nécessite une évaluation et une réponse sous <strong>48 heures</strong>.</p>
            <div class="action-buttons">
              <a href="mailto:${
                data.email
              }?subject=RE: Candidature partenaire ${
    data.company
  }" class="action-btn">
                📧 Répondre au candidat
              </a>
              <a href="tel:${data.phone}" class="action-btn secondary">
                📞 Appeler directement
              </a>
            </div>
          </div>
        </div>
        
        <div class="footer">
          <p><strong>🚀 France CEE - Réseau Partenaires</strong></p>
          <p>Cette candidature a été soumise via le formulaire partenaire de votre site web.</p>
          <div class="timestamp">
            📅 Reçu le ${new Date().toLocaleString("fr-FR", {
              timeZone: "Europe/Paris",
              year: "numeric",
              month: "long",
              day: "numeric",
              hour: "2-digit",
              minute: "2-digit",
              weekday: "long",
            })}
          </div>
        </div>
      </div>
    </body>
    </html>
  `;
}

// Génération du contenu texte pour les questions
function generateQuestionEmailText(data: QuestionFormData): string {
  return `
NOUVELLE QUESTION DE CONTACT - France CEE
=========================================

Prénom: ${data.firstName}
Nom: ${data.lastName}
Email: ${data.email}
${data.phone ? `Téléphone: ${data.phone}` : ""}

Message:
--------
${data.message}

---
Ce message a été envoyé depuis le formulaire de contact du site France CEE
Date de réception: ${new Date().toLocaleString("fr-FR", {
    timeZone: "Europe/Paris",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  })}
  `.trim();
}

// Génération du contenu texte pour les demandes de partenariat
function generatePartnerEmailText(data: PartnerFormData): string {
  return `
NOUVELLE DEMANDE DE PARTENARIAT - France CEE
============================================
⚡ PRIORITÉ ÉLEVÉE - Réponse requise sous 48h

INFORMATIONS PERSONNELLES:
Prénom: ${data.firstName}
Nom: ${data.lastName}
Email: ${data.email}
Téléphone: ${data.phone || "Non renseigné"}

INFORMATIONS ENTREPRISE:
Entreprise: ${data.company}
SIRET: ${data.siret}
Secteur d'activité: ${data.activity}
Zone d'intervention: ${data.location}

PRÉSENTATION:
-------------
${data.message}

---
🎯 ACTION REQUISE: Cette demande de partenariat nécessite une réponse sous 48h
Candidature reçue depuis le formulaire partenaire du site France CEE
Date de réception: ${new Date().toLocaleString("fr-FR", {
    timeZone: "Europe/Paris",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  })}
  `.trim();
}

// Fonction principale pour envoyer l'email via Brevo
async function sendEmailViaBrevo(
  data: ContactFormData
): Promise<BrevoResponse> {
  if (!BREVO_API_KEY) {
    throw new Error(
      "BREVO_API_KEY n'est pas configurée dans les variables d'environnement"
    );
  }

  // Génération du contenu selon le type
  let htmlContent: string;
  let textContent: string;
  let subject: string;
  let tags: string[];

  if (data.type === "partner_registration") {
    const partnerData = data as PartnerFormData;
    htmlContent = generatePartnerEmailHTML(partnerData);
    textContent = generatePartnerEmailText(partnerData);
    subject = `🤝 NOUVELLE DEMANDE DE PARTENARIAT - ${partnerData.company} (${partnerData.firstName} ${partnerData.lastName})`;
    tags = ["partner-registration", "website", "priority-high"];
  } else {
    const questionData = data as QuestionFormData;
    htmlContent = generateQuestionEmailHTML(questionData);
    textContent = generateQuestionEmailText(questionData);
    subject = `💬 Nouveau contact depuis le site - ${questionData.firstName} ${questionData.lastName}`;
    tags = ["contact-form", "website", "question"];
  }

  const emailPayload = {
    sender: {
      name: SENDER_NAME,
      email: SENDER_EMAIL,
    },
    to: [
      {
        email: RECIPIENT_EMAIL,
        name: "Équipe France CEE",
      },
    ],
    replyTo: {
      email: data.email,
      name: `${data.firstName} ${data.lastName}`,
    },
    subject,
    htmlContent,
    textContent,
    tags,
  };

  const response = await fetch(BREVO_API_URL, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "api-key": BREVO_API_KEY,
    },
    body: JSON.stringify(emailPayload),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    console.error("Erreur Brevo API:", {
      status: response.status,
      statusText: response.statusText,
      error: errorData,
    });
    throw new Error(
      `Erreur lors de l'envoi de l'email: ${response.status} ${response.statusText}`
    );
  }

  return await response.json();
}

// Handler principal de l'API route
export async function POST(request: NextRequest) {
  try {
    // Vérification de la méthode HTTP
    if (request.method !== "POST") {
      return NextResponse.json(
        { error: "Méthode non autorisée" },
        { status: 405 }
      );
    }

    // Parsing et validation des données
    const body = await request.json();

    if (!validateFormData(body)) {
      return NextResponse.json(
        {
          error: "Données du formulaire invalides",
          details:
            "Veuillez vérifier que tous les champs obligatoires sont remplis correctement",
        },
        { status: 400 }
      );
    }

    // Nettoyage des données selon le type
    let cleanData: ContactFormData;

    if (body.type === "partner_registration") {
      cleanData = {
        type: "partner_registration",
        firstName: body.firstName.trim(),
        lastName: body.lastName.trim(),
        email: body.email.trim().toLowerCase(),
        phone: body.phone?.trim() || undefined,
        message: body.message.trim(),
        company: body.company.trim(),
        siret: body.siret.trim(),
        activity: body.activity.trim(),
        location: body.location.trim(),
      } as PartnerFormData;
    } else {
      cleanData = {
        type: "question",
        firstName: body.firstName.trim(),
        lastName: body.lastName.trim(),
        email: body.email.trim().toLowerCase(),
        phone: body.phone?.trim() || undefined,
        message: body.message.trim(),
      } as QuestionFormData;
    }

    // Envoi de l'email via Brevo
    const result = await sendEmailViaBrevo(cleanData);

    // Log pour le debugging (à retirer en production si nécessaire)
    console.log("Email envoyé avec succès:", {
      messageId: result.messageId,
      sender: cleanData.email,
      timestamp: new Date().toISOString(),
    });

    // Réponse de succès
    return NextResponse.json(
      {
        success: true,
        message:
          "Votre message a été envoyé avec succès ! Nous vous recontacterons rapidement.",
        messageId: result.messageId,
      },
      { status: 200 }
    );
  } catch (error) {
    // Gestion des erreurs
    console.error("Erreur lors de l'envoi de l'email:", error);

    const errorMessage =
      error instanceof Error ? error.message : "Erreur inconnue";

    return NextResponse.json(
      {
        error: "Erreur lors de l'envoi du message",
        details:
          "Une erreur technique s'est produite. Veuillez réessayer plus tard ou nous contacter directement.",
        ...(process.env.NODE_ENV === "development" && {
          debugInfo: errorMessage,
        }),
      },
      { status: 500 }
    );
  }
}

// Handler pour les autres méthodes HTTP
export async function GET() {
  return NextResponse.json(
    { error: "Cette endpoint n'accepte que les requêtes POST" },
    { status: 405 }
  );
}
