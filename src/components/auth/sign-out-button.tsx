"use client";

import { signOut } from "next-auth/react";
import { LogOut } from "lucide-react";

export function SignOutButton() {
  return (
    <button
      onClick={() => signOut()}
      className="flex w-full items-center text-sm"
    >
      <LogOut className="mr-2 h-4 w-4" />
      Sign out
    </button>
  );
}
