import { db, isFirebaseConfigured } from './firebase';
import { collection, addDoc } from 'firebase/firestore';

export interface ContactFormData {
  name: string;
  email: string;
  subject?: string;
  message: string;
  timestamp?: Date;
}

export async function submitContactForm(data: ContactFormData): Promise<void> {
  if (!isFirebaseConfigured() || !db) {
    // If Firebase is not configured, just log the data and show success
    // This allows the site to work without Firebase
    console.log('Firebase not configured. Form data:', data);
    // Simulate a delay to match real behavior
    await new Promise(resolve => setTimeout(resolve, 500));
    return;
  }

  try {
    if (typeof window === 'undefined') {
      throw new Error('Firebase can only be used on the client side');
    }

    const contactData = {
      ...data,
      timestamp: new Date(),
    };

    await addDoc(collection(db, 'contacts'), contactData);
  } catch (error) {
    console.error('Error submitting contact form:', error);
    throw error;
  }
}

