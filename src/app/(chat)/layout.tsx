import { auth } from "@/auth.config";
import Sidebar from "../_components/ui/Sidebar";
import { redirect } from "next/navigation";

export default async function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  if (!session?.user) {
    redirect("/auth/login");
  }

  console.log(session);

  return (
    <main className="min-h-screen">
      {/* <TopMenu /> */}
      <Sidebar />
      {
        <pre>
            {JSON.stringify(session, null, 2)}
        </pre>
      }

      <div className="px-0 sm:px-10">{children}</div>

      {/* <Footer /> */}
    </main>
  );
}