"use client";

import { useSession } from "next-auth/react";

export default function Sidebar() {
  const { data: session } = useSession();

  console.log("session", session);

  return (
    <aside className="w-full sm:w-[350px] px-10">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold text-gray-800">Sidebar</h1>
      </div>
    </aside>
  );
}
