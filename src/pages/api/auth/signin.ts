import type { APIRoute } from 'astro'
import { app } from '../../../firebase/server'
import { getAuth } from 'firebase-admin/auth'

// Lisset's sign in key: 6nGsZw9SwERPPHxqZ1QeyCAUqRfy

export const GET: APIRoute = async ({ request, cookies, redirect }) => {
    const auth = getAuth(app)
    /* Get token from request headers */
    const idToken = request.headers.get('Authorization')?.split('Bearer ')[1]
    if (!idToken) {
        return new Response('No token found', { status: 401 })
    }

    // TODO Verify that the token is valid using Firebase auth API. If it isn't, return a 401 status
    try {
        auth.verifyIdToken(idToken)
    } catch (error) {
        console.log(error)
        return new Response('Failed', { status: 401 })
    }
    /* Create and set session cookie */
    const fiveDays = 60 * 60 * 24 * 5 * 1000
    const sessionCookie = await auth.createSessionCookie(idToken, {
        expiresIn: fiveDays,
    })
    cookies.set('session', sessionCookie, {
        path: '/',
    })
    return redirect('/dashboard')
}
