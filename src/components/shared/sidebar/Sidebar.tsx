import { Calendar, Settings, Users, Home, ClipboardMinus } from "lucide-react";
import React from "react";
import Link from "next/link";
interface menuSidemar {
  name: string;
  href: string;
  icon: React.ReactNode;
}

const menuSidebar: menuSidemar[] = [
  {
    name: "Inicio",
    href: "/",
    icon: <Home className="mr-2 h-5 w-5" />,
  },
  {
    name: "Historias de Niños",
    href: "/historias",
    icon: <Users className="mr-2 h-5 w-5" />,
  },
  {
    name: "Reporte de Historias",
    href: "/reportes-historias",
    icon: <ClipboardMinus className="mr-2 h-5 w-5" />,
  },
  {
    name: "Calendario",
    href: "/calendario",
    icon: <Calendar className="mr-2 h-5 w-5" />,
  },
  {
    name: "Configuración",
    href: "/configuracion",
    icon: <Settings className="mr-2 h-5 w-5" />,
  },
];

import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { auth } from "@/app/api/auth/[...nextauth]/route";
import { LogoutUser } from "./LogoutUser";

export const Sidebar = async () => {
  const session = await auth();
  return (
    <aside className="w-[260px] bg-white rounded-r-3xl shadow-lg flex flex-col h-full overflow-y-auto">
      {/* User Profile */}
      <div className="p-6 flex items-center gap-4">
        <Avatar className="h-10 w-10">
          <AvatarFallback>
            {session?.user?.userInformation?.firstName[0] ||
              "" + session?.user.userInformation.lastName[0] ||
              ""}
          </AvatarFallback>
        </Avatar>
        <div className="flex-1 overflow-hidden">
          <h3 className="text-sm font-medium leading-none">
            {session?.user?.userInformation?.firstName}{" "}
            {session?.user?.userInformation?.lastName}
          </h3>
          <p className="text-xs text-muted-foreground truncate">
            {session?.user?.email}
          </p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 pt-4">
        <div className="space-y-2">
          <p className="text-xs font-semibold text-muted-foreground px-2 py-2">
            Menu
          </p>

          {menuSidebar.map((item, index) => (
            <Button
              asChild
              key={index}
              variant="ghost"
              className="w-full justify-start gap-4 hover:bg-black hover:text-white py-5"
            >
              <Link href={item.href}>
                <div className="flex items-center gap-4">
                  {item.icon}
                  <span className="flex-1 text-left">{item.name}</span>
                </div>
              </Link>
            </Button>
          ))}
        </div>
      </nav>

      {/* Footer */}
      <LogoutUser />
    </aside>
  );
};
