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

  return (
    <main className="min-h-screen flex ">
      {/* <TopMenu /> */}
      <Sidebar />
      

      <div className="px-0 sm:px-10 flex-1 bg-slate-100">{children}</div>

      {/* <Footer /> */}
    </main>
  );
}
