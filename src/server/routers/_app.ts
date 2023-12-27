import { z } from 'zod';
import { procedure, router } from '../trpc';

export const appRouter = router({
    getHello: procedure.query(() => {
        console.log('getHello');
        return { message: "Welcome to Full-Stack tRPC CRUD App with Next.js" };
    }),
    addData: procedure.input(
        z.object({
            text: z.string(),
        }),
    ).query((opts) => {
        console.log('addData');
        return {
            message: `Added ${opts.input.text}`,
        };
    }),
    getTodos: procedure.query(() => {
        return {
            todos: [
                {
                    id: 1,
                    text: "Learn TRPC",
                    done: false,
                },
                {
                    id: 2,
                    text: "Learn React",
                    done: false,
                },
            ],
        };
    }),
    getNumbers: procedure.query(() => {
        return {
            numbers: [1, 2, 3, 4, 5],
        };
    })

});

// export type definition of API
export type AppRouter = typeof appRouter;