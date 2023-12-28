import { DefaultSession } from "next-auth";

declare module "next-auth" {
    interface Session {
        user: {
            id: number;
            email: string;
            password: string;
            image: string | null;
        } & DefaultSession["user"];
    }
}