# R3.com Clone

A static website clone of r3.com built with Next.js, TypeScript, Tailwind CSS, and Firebase.

## Features

- ✅ Next.js 14 with App Router
- ✅ TypeScript for type safety
- ✅ Tailwind CSS for styling
- ✅ Optional Firebase integration for contact forms (works without Firebase too!)
- ✅ Responsive design
- ✅ Static site generation

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install the dependencies:

```bash
npm install
```

2. (Optional) Set up Firebase for contact form submissions:

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

3. Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
.
├── app/                 # Next.js app directory
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Homepage
│   └── globals.css      # Global styles
├── components/          # React components
│   ├── Header.tsx       # Navigation header
│   ├── Hero.tsx         # Hero section
│   ├── Partners.tsx     # Partners section
│   ├── Features.tsx     # Features section
│   ├── Solutions.tsx    # Solutions section
│   ├── Stats.tsx        # Statistics section
│   ├── Contact.tsx      # Contact form
│   └── Footer.tsx       # Footer
├── lib/                 # Utility functions
│   ├── firebase.ts      # Firebase configuration
│   └── firebase-contact.ts  # Contact form handler
└── public/              # Static assets

```

## Build for Production

```bash
npm run build
```

This will create a static export in the `out` directory that can be deployed to any static hosting service.

## Deployment

The static export can be deployed to:
- Vercel
- Netlify
- GitHub Pages
- AWS S3
- Any static hosting service

## Technologies Used

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Firebase** - Backend services (Firestore)
- **Readex Pro** - Google Font

## License

This project is a clone for educational purposes.

