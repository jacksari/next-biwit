"use server";

import { logout } from "@/actions/auth/logout";
import { auth } from "@/auth.config";
import { useSession } from "next-auth/react";
import BtnLogout from "./BtnLogout";

export default async function Sidebar() {
  // const { data: session } = useSession();
  const session = await auth();

  return (
    <aside className="w-full sm:w-[300px] px-10">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold text-gray-800">Sidebar</h1>
        <p>User: {session?.user.name}</p>
        <BtnLogout />
      </div>
    </aside>
  );
}
