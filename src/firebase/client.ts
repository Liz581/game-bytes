import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
// import firebaseConfig from '../../client-credentials.json' with { type: 'json' }

// export const app = initializeApp(firebaseConfig)

// Call Vercel Client environment variables
const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID
  };
  
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
