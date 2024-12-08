"use client";
import { logout } from "@/actions/auth/logout";
import { Button } from "@/components/ui";
import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

export const LogoutUser = () => {
  const router = useRouter();
  return (
    <div className=" p-4 mt-auto space-y-2">
      <Button
        variant="destructive"
        className="w-full justify-start gap-4 text-white hover:bg-red-600 hover:text-white py-5"
        onClick={() => {
          logout();
          router.replace("/login");
        }}
      >
        <LogOut className="h-7 w-7" />
        <span>Logout Account</span>
      </Button>
    </div>
  );
};
