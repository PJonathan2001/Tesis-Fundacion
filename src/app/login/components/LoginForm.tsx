"use client";

import React, { useState } from "react";
import { Button, Input, Label } from "../../../components/ui";
import { useForm } from "react-hook-form";
import { LogIn } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { authSquema } from "@/validations/auth/auth_validations";
import { authenticate } from "@/actions/auth/login";
import { useRouter } from "next/navigation";
export const LoginForm = () => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(authSquema),
  });

  const router = useRouter();
  const onSubmit = async (data: unknown) => {
    const result = await authenticate(undefined, data as FormData);
    if (!result.success) {
      setErrorMessage(result.message);
    } else {
      router.replace("/");
      setErrorMessage(null);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-4">
          {errorMessage && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
              {errorMessage}
            </div>
          )}
          <div className="grid gap-2">
            <Label htmlFor="email">Correo Electrónico</Label>
            <Input
              id="email"
              type="email"
              placeholder="nombre@ejemplo.com"
              {...register("email")}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">
                {errors.email.message?.toString()}
              </p>
            )}
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Contraseña</Label>
            <Input id="password" type="password" {...register("password")} />
          </div>
          {errors.password && (
            <p className="text-red-500 text-sm">
              {errors.password.message?.toString()}
            </p>
          )}
          <Button className="w-full py-5" type="submit" disabled={isSubmitting}>
            <LogIn className="mr-2 h-4 w-4" /> Iniciar Sesión
          </Button>
        </div>
      </form>
    </div>
  );
};
