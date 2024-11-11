import type { APIRoute } from 'astro'

// TODO Finalize this GET function to sign out a registered user
// The function should delete the session cookie and navigate to the signin page
export const GET: APIRoute = async ({ redirect, cookies }) => {
    cookies.set('session', '', {
        maxAge: 0,
        path: '/',
        httpOnly: true,
    })
    // cookies.clearCookie('session');

    return redirect('/signin')
}
