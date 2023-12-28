"use client";

import { authenticate } from "@/actions/auth/login";
import { useFormStatus } from "react-dom";
import { useFormState } from "react-dom";
import clsx from "clsx";
import { IoInformationOutline } from "react-icons/io5";
import { useEffect } from "react";
import { redirect } from "next/navigation";

export default function LoginForm() {
  const [state, dispatch] = useFormState(authenticate, undefined);
  //   console.log("LoginForm", error);

  useEffect(() => {
    if (state === "Success") {
      redirect("/chat");
    }
  }, [state]);

  return (
    <form action={dispatch} className="w-full">
      <label htmlFor="email">Correo electrónico</label>

      <input
        className="px-5 py-2 border-2 border-gray-200 bg-gray-200 rounded mb-5 w-full outline-none focus:border-blue-500 transition-all mt-2"
        type="email"
        name="email"
        autoComplete="username"
      />

      <label htmlFor="email">Contraseña</label>
      <input
        className="px-5 py-2 border-2 border-gray-200 bg-gray-200 rounded mb-5 w-full outline-none focus:border-blue-500 transition-all mt-2"
        type="password"
        name="password"
        autoComplete="current-password"
      />

      <div
        className="flex h-8 items-end space-x-1 justify-center"
        aria-live="polite"
        aria-atomic="true"
      >
        {["Credenciales incorrectas", "Error desconocido"].includes(
          state as string
        ) && (
          <div className="flex flex-row mb-2">
            <IoInformationOutline className="h-5 w-5 text-red-500" />
            <p className="text-sm text-red-500">
              Credenciales no son correctas
            </p>
          </div>
        )}
      </div>

      <LoginButton />

      {/* divisor l ine */}
      <div className="flex items-center my-5">
        <div className="flex-1 border-t border-gray-500"></div>
        <div className="px-2 text-gray-800">O</div>
        <div className="flex-1 border-t border-gray-500"></div>
      </div>
    </form>
  );
}

function LoginButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className={clsx("w-full", {
        "btn-primary": !pending,
        "btn-disabled": pending,
      })}
      disabled={pending}
    >
      {pending ? "Cargando..." : "Ingresar"}
    </button>
  );
}
