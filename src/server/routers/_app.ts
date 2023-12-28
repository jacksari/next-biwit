import { z } from 'zod';
import { procedure, router } from '../trpc';
import prisma from '@/config/prisma';
import { IConversation } from '@/interfaces';
// postgresql://janasarii:oeP3UjMhmvy8@ep-white-wildflower-71963779.us-east-2.aws.neon.tech/db?sslmode=require

export const appRouter = router({
    getHello: procedure.query(() => {
        console.log('getHello');
        return { message: "Welcome to Full-Stack tRPC CRUD App with Next.js" };
    }),
    addData: procedure.input(
        z.object({
            text: z.string(),
        }),
    ).mutation(async ({ input: { text } }) => {
        console.log('addData', text);
        await prisma.conversation.create({
            data: {
                name: text,
            }
        });
        return { message: "Data added successfully" };
    }),
    getTodos: procedure.query(() => {
        const conversations = prisma.conversation.findMany();
        return conversations as Promise<IConversation[]>;
    }),
    getNumbers: procedure.query(() => {
        return {
            numbers: [1, 2, 3, 4, 5],
        };
    })

});

// export type definition of API
export type AppRouter = typeof appRouter;