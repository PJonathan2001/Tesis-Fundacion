import { Sidebar } from "@/components/shared/sidebar/Sidebar";
import { auth } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  if (!session?.user) {
    redirect("/login");
  }
  return (
    <div className="flex h-screen bg-gray-200 overflow-hidden py-3 px-4 gap-5">
      <Sidebar />
      <section className="flex-1 overflow-y-auto bg-white h-full rounded-3xl p-8">
        {children}
      </section>
    </div>
  );
}
