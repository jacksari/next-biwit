import { AppRouter } from "@/server/routers/_app";
import { createTRPCReact } from "@trpc/react-query";

const trpcClient = createTRPCReact<AppRouter>({})

export const trpc = trpcClient; 