import { redirect } from "next/navigation";
import { auth } from "../api/auth/[...nextauth]/route";

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  if (session?.user) {
    redirect("/");
  }
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-purple-100">
      {children}
    </main>
  );
}
