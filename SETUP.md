# Setup Guide

## Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Set up Firebase**
   - Go to [Firebase Console](https://console.firebase.google.com/)
   - Create a new project
   - Enable Firestore Database
   - Go to Project Settings > General
   - Scroll down to "Your apps" and click the web icon (</>)
   - Copy the Firebase configuration
   - Create a `.env.local` file in the root directory with your Firebase config:
     ```env
     NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
     NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
     NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
     NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
     NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
     NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
     ```

3. **Run Development Server**
   ```bash
   npm run dev
   ```

4. **Open Browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Firebase Firestore Setup

1. In Firebase Console, go to Firestore Database
2. Click "Create database"
3. Start in test mode (for development)
4. Choose a location for your database
5. The contact form will automatically save submissions to the `contacts` collection

## Building for Production

```bash
npm run build
```

The static files will be generated in the `out` directory, ready for deployment.

## Deployment Options

- **Vercel**: Connect your GitHub repo and deploy automatically
- **Netlify**: Drag and drop the `out` folder or connect via Git
- **GitHub Pages**: Push the `out` folder to the `gh-pages` branch
- **AWS S3**: Upload the `out` folder to an S3 bucket configured for static hosting

