import { SessionProvider } from "next-auth/react";

export const SessionPro = ({ children }: { children: React.ReactNode }) => {
  return <SessionProvider>{children}</SessionProvider>;
};
