import { titleFont } from "@/config/fonts";
import Link from "next/link";
import LoginForm from "./ui/LoginForm";

export default function LoginPage() {
  return (
    <div className="flex flex-col min-h-screen pt-32 sm:pt-52">
      <h1 className={`${titleFont.className} text-4xl mb-5`}>Ingresar</h1>

      <div className="flex flex-col">
        <LoginForm />

        <Link href="/auth/register" className="btn-secondary text-center">
          Crear una nueva cuenta
        </Link>
      </div>
    </div>
  );
}
