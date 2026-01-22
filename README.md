# FluvoSoft - Technology Solutions Company

A modern, responsive website for FluvoSoft, showcasing AI solutions, blockchain development, and custom software services. Built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Features

### Core Technologies
- ✅ **Next.js 14** with App Router
- ✅ **TypeScript** for type safety
- ✅ **Tailwind CSS** for responsive styling
- ✅ **Framer Motion** for smooth animations
- ✅ **Firebase** (optional) for contact form submissions
- ✅ Fully responsive design across all devices
- ✅ Static site generation

### Website Sections

1. **Announcement Bar** - Promotional banner at the top
2. **Responsive Header** - Navigation with mobile hamburger menu, dropdowns, and brand gradient
3. **Hero Section** - Animated hero with floating illustrations and gradient backgrounds
4. **Partners Section** - Infinite scrolling partner logos (Dolby, Nike, Zoom, Adept, TIME, Character.ai)
5. **AI for Enterprise** - Enterprise AI solutions showcase
6. **AI Workflow Demo** - Interactive chat interface demonstration
7. **Apply AI / Agentic Solutions** - Feature grid with Defense & Intelligence and Enterprise solutions
8. **Progress Markets** - Market-focused content section
9. **Solutions** - Four main solution categories:
   - AI Automation
   - Blockchain Development
   - Custom Software
   - SaaS Products
10. **Stats Section** - Key statistics and metrics
11. **Evolution Section** - FluvoSoft Lab showcase
12. **Digital Future** - Challenges and solutions in regulated markets
13. **Contact Form** - Full-featured contact form with Firebase integration
14. **Footer** - Company information and navigation links

### Design Features

- **Brand Gradient Animations** - Animated gradient text effects on key headings
- **Smooth Scroll Animations** - Scroll-triggered animations using Framer Motion
- **Responsive Navigation** - Mobile-first navigation with hamburger menu
- **Infinite Scroll Carousels** - Smooth scrolling partner and solution carousels
- **Interactive Hover Effects** - Engaging hover states on cards and buttons
- **Modern UI Components** - Clean, professional design with consistent styling

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/fluvosoft/FluvoSoft.git
cd FluvoSoft
```

2. Install the dependencies:
```bash
npm install
```

3. (Optional) Set up Firebase for contact form submissions:

   **Note:** The website works perfectly without Firebase! The contact form will still function (it will log submissions to the console). Firebase is only needed if you want to store form submissions in a database.

   If you want to enable Firebase:
   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
   - Enable Firestore Database
   - Get your Firebase configuration from Project Settings
   - Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key_here
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain_here
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id_here
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket_here
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id_here
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id_here
```

4. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📁 Project Structure

```
.
├── app/                          # Next.js app directory
│   ├── layout.tsx               # Root layout with fonts
│   ├── page.tsx                 # Homepage
│   ├── about/                   # About page
│   ├── contact/                 # Contact page
│   └── globals.css              # Global styles
├── components/                   # React components
│   ├── Announcement.tsx         # Top announcement bar
│   ├── Header.tsx               # Navigation header
│   ├── Hero.tsx                 # Hero section with animations
│   ├── Partners.tsx             # Partners/companies section
│   ├── AIForEnterprise.tsx      # Enterprise AI section
│   ├── AIWorkflowDemo.tsx       # AI workflow demonstration
│   ├── Features.tsx             # Apply AI / Agentic Solutions
│   ├── ProgressMarkets.tsx      # Market progress section
│   ├── Solutions.tsx            # Solutions showcase
│   ├── Stats.tsx                # Statistics section
│   ├── EvolutionSection.tsx     # FluvoSoft Lab section
│   ├── DigitalFuture.tsx        # Digital future content
│   ├── Contact.tsx              # Contact form
│   ├── Footer.tsx               # Footer component
│   ├── AnimatedSection.tsx      # Animation wrapper
│   └── AnimatedText.tsx         # Text animation component
├── lib/                          # Utility functions
│   ├── firebase.ts              # Firebase configuration
│   └── firebase-contact.ts      # Contact form handler
└── public/                       # Static assets
    ├── illustrations/            # Image assets
    └── Agentic Solution/         # Agentic solutions images
```

## 🎨 Key Features

### Responsive Design
- Mobile-first approach
- Breakpoints: sm, md, lg, xl
- Fully responsive navigation with mobile menu
- Adaptive layouts for all screen sizes

### Animations
- Scroll-triggered animations using Framer Motion
- Smooth transitions and hover effects
- Animated gradient text effects
- Infinite scroll carousels
- Staggered entrance animations

### Brand Colors
- Primary Orange: `#FF6B35`
- Orange Dark: `#E55A2B`
- Orange Light: `#FF8C5A`

### Typography
- Poppins (primary sans-serif)
- Space Grotesk
- Georama
- Inter
- Macondo (logo font)

## 🔨 Build for Production

```bash
npm run build
```

This will create an optimized production build in the `.next` directory.

## 📦 Deployment

The application can be deployed to:

- **Vercel** (recommended for Next.js)
- **Netlify**
- **GitHub Pages**
- **AWS S3 + CloudFront**
- **Any static hosting service**

For Vercel deployment:
```bash
vercel
```

## 🛠️ Technologies Used

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety and better developer experience
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Production-ready motion library for React
- **Firebase** - Backend services (Firestore) for contact forms
- **Google Fonts** - Poppins, Space Grotesk, Georama, Inter, Macondo

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎯 Key Pages

- **Homepage** (`/`) - Main landing page with all sections
- **About** (`/about`) - About FluvoSoft page
- **Contact** (`/contact`) - Contact form page

## 📄 License

This project is proprietary software for FluvoSoft.

## 🤝 ContributingThis is a private repository for FluvoSoft. For contributions, please contact the development team.---Built with ❤️ by FluvoSoft
