"use client";

import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { LogIn } from "lucide-react";

export function SignInButton() {
  return (
    <Button variant="outline" size="sm" onClick={() => signIn("google")}>
      <LogIn className="mr-2 h-4 w-4" />
      Sign in
    </Button>
  );
}
