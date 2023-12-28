'use server';

import prisma from "@/config/prisma";
import bcryptjs from 'bcryptjs';

export const registerUser = async (email: string, name: string, password: string) => {
    try {
        const user = await prisma.user.create({
            data: {
                email: email.toLocaleLowerCase(),
                name,
                password: bcryptjs.hashSync(password),
            },
            select: {
                id: true,
                email: true,
                name: true,
            }
        });
        return {
            ok: true,
            message: 'Usuario creado correctamente',
            user,
        }
    } catch (error) {
        return {
            ok: false,
            message: 'No se creo el usuario',
        }
    }
}