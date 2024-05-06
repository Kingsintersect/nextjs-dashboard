export function POST() {

}

export async function authenticate(prevState: string | undefined, formData: FormData) {
    try {
        await signIn('credentials', formData);
    } catch (error) {
        if (error instanceof AuthError) {
            switch (error.type) {
                case 'CredentialsSignin':
                    return 'Invalid credentials.';
                    break;

                default:
                    return 'Somthing went wrong.'
                    break;
            }
        }
        throw error;
    }
}