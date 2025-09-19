# Configuration Brevo pour l'envoi d'emails de contact

Ce guide vous explique comment configurer l'intégration Brevo (anciennement SendinBlue) pour l'envoi d'emails de contact depuis votre application France CEE.

## 📋 Prérequis

1. Un compte Brevo (gratuit jusqu'à 300 emails/jour)
2. Une clé API Brevo
3. Un domaine vérifié (recommandé pour éviter le spam)

## 🚀 Configuration étape par étape

### 1. Créer un compte Brevo

1. Rendez-vous sur [https://www.brevo.com](https://www.brevo.com)
2. Créez un compte gratuit
3. Vérifiez votre adresse email

### 2. Obtenir votre clé API

1. Connectez-vous à votre tableau de bord Brevo
2. Allez dans **Paramètres** > **Clés API** ou directement : [https://app.brevo.com/settings/keys/api](https://app.brevo.com/settings/keys/api)
3. Cliquez sur **Créer une nouvelle clé API**
4. Donnez un nom à votre clé (ex: "France CEE Website")
5. Copiez la clé générée (elle ne sera affichée qu'une seule fois)

### 3. Configurer les variables d'environnement

Créez un fichier `.env.local` à la racine de votre projet avec les variables suivantes :

```bash
# Configuration Brevo (OBLIGATOIRE)
BREVO_API_KEY=your_brevo_api_key_here

# Configuration des emails (OPTIONNEL - valeurs par défaut disponibles)
RECIPIENT_EMAIL=contact@francecee.fr
SENDER_EMAIL=noreply@francecee.fr
SENDER_NAME=France CEE

# Environnement
NODE_ENV=production
```

### 4. Variables d'environnement détaillées

| Variable          | Description                               | Obligatoire | Valeur par défaut      |
| ----------------- | ----------------------------------------- | ----------- | ---------------------- |
| `BREVO_API_KEY`   | Votre clé API Brevo                       | ✅ Oui      | -                      |
| `RECIPIENT_EMAIL` | Email qui recevra les messages de contact | ❌ Non      | `contact@francecee.fr` |
| `SENDER_EMAIL`    | Email expéditeur des notifications        | ❌ Non      | `noreply@francecee.fr` |
| `SENDER_NAME`     | Nom affiché comme expéditeur              | ❌ Non      | `France CEE`           |

## 🔧 Configuration avancée

### Vérification du domaine (Recommandé)

Pour éviter que vos emails finissent en spam :

1. Dans Brevo, allez dans **Paramètres** > **Domaines**
2. Ajoutez votre domaine (ex: `francecee.fr`)
3. Configurez les enregistrements DNS selon les instructions Brevo
4. Attendez la validation (peut prendre jusqu'à 48h)

### Configuration DKIM et SPF

Ajoutez ces enregistrements DNS à votre domaine :

```
Type: TXT
Nom: @
Valeur: v=spf1 include:spf.brevo.com mx ~all

Type: TXT
Nom: mail._domainkey
Valeur: [Fourni par Brevo lors de la vérification du domaine]
```

## 🧪 Test de la configuration

### Test en développement

1. Démarrez votre serveur de développement :

   ```bash
   npm run dev
   ```

2. Naviguez vers la section contact de votre site
3. Remplissez et soumettez le formulaire
4. Vérifiez les logs dans la console pour confirmer l'envoi

### Test en production

1. Déployez votre application avec les variables d'environnement configurées
2. Testez le formulaire de contact
3. Vérifiez la réception de l'email dans votre boîte `RECIPIENT_EMAIL`

## 🐛 Dépannage

### Erreur : "BREVO_API_KEY n'est pas configurée"

- Vérifiez que le fichier `.env.local` existe et contient la clé API
- Redémarrez votre serveur de développement après avoir ajouté la variable

### Erreur 401 : "Unauthorized"

- Vérifiez que votre clé API Brevo est correcte
- Assurez-vous que la clé n'a pas expiré
- Régénérez une nouvelle clé si nécessaire

### Erreur 400 : "Bad Request"

- Vérifiez le format de votre email expéditeur
- Assurez-vous que le domaine expéditeur est vérifié dans Brevo

### Les emails arrivent en spam

- Configurez SPF et DKIM pour votre domaine
- Vérifiez votre domaine dans Brevo
- Utilisez un email expéditeur avec le même domaine que votre site

## 📊 Monitoring

### Tableau de bord Brevo

Surveillez vos envois d'emails dans :

- **Statistiques** > **Emails** pour voir les taux d'ouverture et de clic
- **Logs** > **Emails** pour voir l'historique détaillé des envois

### Logs de l'application

Les logs de l'API incluent :

- ID du message Brevo pour le suivi
- Email de l'expéditeur
- Timestamp de l'envoi
- Erreurs détaillées en cas de problème

## 🔒 Sécurité

### Bonnes pratiques

1. **Ne jamais exposer votre clé API** dans le code source
2. **Utiliser des variables d'environnement** pour tous les paramètres sensibles
3. **Limiter les permissions** de votre clé API aux fonctionnalités nécessaires
4. **Surveiller l'utilisation** de votre quota Brevo
5. **Régénérer les clés** périodiquement

### Variables d'environnement en production

Pour les déploiements sur Vercel, Netlify, etc. :

1. Ajoutez les variables dans l'interface de votre plateforme
2. Ne commitez jamais le fichier `.env.local`
3. Utilisez des secrets pour les valeurs sensibles

## 📈 Limites et quotas

### Plan gratuit Brevo

- **300 emails/jour**
- Branding Brevo dans les emails
- Support par email uniquement

### Plans payants

- Quotas plus élevés (à partir de 20€/mois)
- Suppression du branding Brevo
- Support prioritaire
- Fonctionnalités avancées (automation, segmentation, etc.)

## 🆘 Support

### Documentation officielle

- [Documentation API Brevo](https://developers.brevo.com/)
- [Guide de démarrage Brevo](https://help.brevo.com/hc/fr)

### Contact

Si vous rencontrez des problèmes avec cette intégration :

- Vérifiez d'abord ce guide de dépannage
- Consultez les logs de votre application
- Contactez le support Brevo si le problème vient de leur côté

---

✅ **Configuration terminée !** Votre formulaire de contact est maintenant opérationnel avec Brevo.
