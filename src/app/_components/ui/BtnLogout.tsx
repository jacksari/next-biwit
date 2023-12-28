"use client";

import { logout } from "@/actions/auth/logout";

export default function BtnLogout() {
  return <button onClick={() => logout()}>Logout</button>;
}
