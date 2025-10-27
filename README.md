# France CEE

A modern, responsive web application for France CEE (Certificats d'Économies d'Énergie) built with Next.js 15, React 19, and TailwindCSS 4.

## 🚀 Features

- **Modern UI/UX**: Clean and responsive design with TailwindCSS
- **Contact Form**: Integrated email functionality with Brevo API
- **Interactive Map**: France map section showcasing regional presence
- **Legal Pages**: Privacy policy, legal mentions, and CDP charter
- **Performance Optimized**: Built with Next.js 15 for optimal performance
- **Type-Safe**: Full TypeScript support
- **Analytics**: Vercel Analytics integration

## 📋 Prerequisites

- Node.js 20.x or higher
- npm, yarn, pnpm, or bun
- A Brevo account for email functionality (optional for development)

## 🛠️ Installation

1. **Clone the repository**

```bash
git clone <repository-url>
cd france-cee
```

2. **Install dependencies**

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Configure environment variables**

Create a `.env.local` file at the root of the project:

```bash
# Brevo API Configuration (Required for contact form)
BREVO_API_KEY=your_brevo_api_key_here

# Email Configuration (Optional - defaults provided)
RECIPIENT_EMAIL=your_recipient@example.com
SENDER_EMAIL=your_sender@example.com
SENDER_NAME=Your Company Name

# Environment
NODE_ENV=development
```

> **Note**: See [BREVO_SETUP.md](./BREVO_SETUP.md) for detailed Brevo configuration instructions (in French).

## 🏃 Getting Started

### Development Server

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

The page auto-reloads when you edit files in the `src/` directory.

### Build for Production

```bash
npm run build
npm start
```

### Linting

```bash
npm run lint
```

## 📁 Project Structure

```
france-cee/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── mailer/          # Email API route
│   │   ├── assets/              # SVG logos and images
│   │   ├── charte-cdp/          # CDP Charter page
│   │   ├── mentions-legales/    # Legal notices page
│   │   ├── politique-confidentialite/ # Privacy policy page
│   │   ├── ui/                  # Reusable UI components
│   │   ├── figma/               # Figma design components
│   │   ├── ContactSection.tsx   # Contact form component
│   │   ├── CRMSection.tsx       # CRM section
│   │   ├── Footer.tsx           # Footer component
│   │   ├── Header.tsx           # Header component
│   │   ├── HeroSection.tsx      # Hero section
│   │   ├── MissionSection.tsx   # Mission section
│   │   ├── ProcessSection.tsx   # Process section
│   │   ├── FranceMapSection.tsx # Interactive France map
│   │   ├── layout.tsx           # Root layout
│   │   ├── page.tsx             # Home page
│   │   └── globals.css          # Global styles
│   └── lib/
│       └── utils.ts             # Utility functions
├── public/                      # Static assets
├── BREVO_SETUP.md              # Brevo configuration guide
└── README.md                    # This file
```

## 🔧 Technologies

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **UI Library**: [React 19](https://react.dev/)
- **Styling**: [TailwindCSS 4](https://tailwindcss.com/)
- **Language**: [TypeScript 5](https://www.typescriptlang.org/)
- **UI Components**: [Radix UI](https://www.radix-ui.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Email Service**: [Brevo API](https://www.brevo.com/)
- **Analytics**: [Vercel Analytics](https://vercel.com/analytics)

## 📧 Contact Form Configuration

The contact form uses Brevo (formerly SendinBlue) for email delivery. To configure:

1. Create a free Brevo account at [https://www.brevo.com](https://www.brevo.com)
2. Generate an API key from your Brevo dashboard
3. Add the API key to your `.env.local` file
4. See [BREVO_SETUP.md](./BREVO_SETUP.md) for detailed instructions

## 🌐 Deployment

### Deploy on Vercel

The easiest way to deploy this Next.js app is to use the [Vercel Platform](https://vercel.com/new):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=<your-repo-url>)

1. Push your code to GitHub, GitLab, or Bitbucket
2. Import your repository on Vercel
3. Configure your environment variables in Vercel dashboard
4. Deploy!

**Important**: Don't forget to add your environment variables in Vercel:

- `BREVO_API_KEY` (required)
- `RECIPIENT_EMAIL` (optional)
- `SENDER_EMAIL` (optional)
- `SENDER_NAME` (optional)

### Other Platforms

This project can be deployed on any platform that supports Next.js:

- [Netlify](https://www.netlify.com/)
- [Railway](https://railway.app/)
- [Render](https://render.com/)
- Self-hosted with Docker

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## 🤝 Contributing

Contributions are welcome! Please follow these guidelines:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is private and proprietary.

## 📞 Support

For questions or support, please refer to the documentation or open an issue in the repository.

---

Built with ❤️ by France CEE Team
