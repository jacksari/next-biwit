"use client";

import { logout } from "@/actions/auth/logout";
import Link from "next/link";
import { IoCartOutline } from "react-icons/io5";

export default function ChatPage() {

    

  return (
    <div className="flex justify-center items-center h-[800px]">
      <IoCartOutline size={80} className="mx-5" />

      <div className="flex flex-col items-center">
        <h1 className="text-xl font-semibold">Chat</h1>

        <button onClick={() => logout()}>Logout</button>

        <Link href="/" className="text-blue-500 mt-2 text-4xl">
          Regresar
        </Link>
      </div>
    </div>
  );
}
