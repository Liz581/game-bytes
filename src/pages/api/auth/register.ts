import type { APIRoute } from 'astro'
import { getAuth } from 'firebase-admin/auth'
import { app } from '../../../firebase/server'

// TODO Finalize this POST function to register a new user in the Firebase Authentication service
// A new user can be created with an email and password
// The new user object should have the following properties:
// - email: string
// - password: string
// - name: string
// Verifiy that all three properties are present in the request body, otherwise return a 400 status
// The POST function should redirect user back to the signin page upon successful creation

export const POST: APIRoute = async ({ request, redirect }) => {
    const auth = getAuth(app)
    // Get data and check if all required fields are present here
    console.log(auth)

    try {
        // Create user here
        const data = await request.formData()
        const name = data.get('name') as string
        const email = data.get('email') as string
        const password = data.get('password') as string

        if (name == '' || email == '' || password == '') {
            return new Response(`Something went wrong`, {
                status: 400,
            })
        }

        const user = {
            email: email,
            password: password,
            name: name,
        }

        auth.createUser(user)
            .then((userRecord) => {
                // See the UserRecord reference doc for the contents of userRecord.
                console.log('Successfully created new user:', userRecord.uid)
            })
            .catch((error) => {
                console.log('Error creating new user:', error)
            })

        return redirect('/signin')
    } catch (error) {
        console.log(error)
        return new Response(`Something went wrong`, {
            status: 400,
        })
    }
}
