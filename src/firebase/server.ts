import type { ServiceAccount } from 'firebase-admin'
import { initializeApp, cert } from 'firebase-admin/app'
// import serviceAccount from '../../server-credentials.json' with { type: 'json' }

if (import.meta.env.PUBLIC_EMULATOR === '1') {
    console.log('Emulator Setting Up')
    process.env['FIREBASE_AUTH_EMULATOR_HOST'] = '127.0.0.1:9099'
    process.env['FIRESTORE_EMULATOR_HOST'] = '127.0.0.1:8080'
}

// Call Vercel Server environment variables
const serviceAccount = {
    type: process.env.FIREBASE_TYPE,
    project_id: process.env.FIREBASE_PROJECT_ID,
    private_key_id: process.env.FIREBASE_PRIVATE_KEY_ID,
    private_key: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    client_email: process.env.FIREBASE_CLIENT_EMAIL,
    client_id: process.env.FIREBASE_CLIENT_ID,
    auth_uri: process.env.FIREBASE_AUTH_URI,
    token_uri: process.env.FIREBASE_TOKEN_URI,
    auth_provider_x509_cert_url: process.env.FIREBASE_AUTH_PROVIDER_X509_CERT_URL,
    client_x509_cert_url: process.env.FIREBASE_CLIENT_X509_CERT_URL,
    universe_domain: process.env.FIREBASE_UNIVERSE_DOMAIN
  };

export const app = initializeApp({
    credential: cert(serviceAccount as ServiceAccount),
})
