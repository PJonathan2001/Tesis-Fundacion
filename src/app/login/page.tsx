import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart } from "lucide-react";
import { LoginForm } from "@/app/login/components/LoginForm";

export default function Login() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader className="space-y-1">
        <div className="flex items-center justify-center mb-4">
          <Heart className="h-12 w-12 text-pink-500" />
        </div>
        <CardTitle className="text-2xl text-center font-bold">
          Bienvenido
        </CardTitle>
        <p className="text-center text-sm text-muted-foreground">
          Sistema Administrativo de la Fundación de Niños Especiales
        </p>
      </CardHeader>
      <CardContent>
        <LoginForm />
      </CardContent>

      <div className="text-center pb-4">
        <a href="#" className="text-sm text-blue-600 hover:underline">
          ¿Olvidaste tu contraseña?
        </a>
      </div>
    </Card>
  );
}
