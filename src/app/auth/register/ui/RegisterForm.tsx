"use client";

import { registerUser } from "@/actions/auth/register";
import clsx from "clsx";
import { SubmitHandler, useForm } from "react-hook-form";
import { IoWarning } from "react-icons/io5";

type FormInputs = {
  name: string;
  email: string;
  password: string;
};

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();

  const onSubmit: SubmitHandler<FormInputs> = async (data: FormInputs) => {
    // console.log(data);
    const resp = await registerUser(data.email, data.name, data.password);
    console.log(resp);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full">
      <div className="mb-5">
        <label htmlFor="name">Nombre completo</label>
        <input
          className={clsx(
            "px-5 py-2 border-2 border-gray-200 bg-gray-200 rounded w-full outline-none focus:border-blue-500 transition-all mt-2",
            errors.name && "border-red-500"
          )}
          type="text"
          autoComplete="username"
          autoFocus
          {...register("name", { required: true })}
        />
        {errors.name && (
          <small className="text-red-500 ">
            <IoWarning className="inline-block mr-1" />
            <span>Nombre es requerido</span>
          </small>
        )}
      </div>

      <div className="mb-5">
        <label htmlFor="email">Correo electrónico</label>
        <input
          className={clsx(
            "px-5 py-2 border-2 border-gray-200 bg-gray-200 rounded w-full outline-none focus:border-blue-500 transition-all mt-2",
            errors.email && "border-red-500"
          )}
          type="email"
          autoComplete="username"
          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
        />
        {errors.email && (
          <small className="text-red-500 ">
            <IoWarning className="inline-block mr-1" />
            <span>Correo electrónico es requerido</span>
          </small>
        )}
      </div>

      <div className="mb-5">
        <label htmlFor="email">Contraseña</label>
        <input
          className={clsx(
            "px-5 py-2 border-2 border-gray-200 bg-gray-200 rounded w-full outline-none focus:border-blue-500 transition-all mt-2",
            errors.password && "border-red-500"
          )}
          type="password"
          autoComplete="current-password"
          {...register("password", { required: true, minLength: 6 })}
        />
        {errors.password && (
          <small className="text-red-500 ">
            <IoWarning className="inline-block mr-1" />
            <span>Contraseña es requerida</span>
          </small>
        )}
      </div>

      <button type="submit" className="btn-primary w-full">
        Crear cuenta
      </button>

      {/* divisor l ine */}
      <div className="flex items-center my-5">
        <div className="flex-1 border-t border-gray-500"></div>
        <div className="px-2 text-gray-800">O</div>
        <div className="flex-1 border-t border-gray-500"></div>
      </div>
    </form>
  );
}
