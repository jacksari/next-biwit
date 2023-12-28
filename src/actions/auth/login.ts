'use server';

import { signIn } from '@/auth.config';
import { sleep } from '@/helpers';
import { AuthError } from 'next-auth';


export async function authenticate(
    prevState: string | undefined,
    formData: FormData,
) {
    try {
        await signIn('credentials', {
            ...Object.fromEntries(formData),
            redirect: false,
        });
        return 'Success';
    } catch (error) {
        // console.log('authenticate error', error);
        if (error instanceof AuthError) {
            switch (error.type) {
                case 'CredentialsSignin':
                    return 'Credenciales incorrectas';
                default:
                    return 'Error desconocido';
            }
        }
        // throw error;
        // return 'CredentialsSignin';
    }
}