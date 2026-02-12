"use client";

import Link from "next/link";
import { Guitar, Music } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { UserMenu } from "@/components/auth/user-menu";
import { MobileNav } from "./mobile-nav";

const navLinks = [
  { href: "/chords", label: "Chords", icon: Guitar },
  { href: "/songs", label: "Songs", icon: Music },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-14 items-center px-4">
        <MobileNav />
        <Link href="/" className="mr-6 flex items-center gap-2 font-bold">
          <Guitar className="h-5 w-5" />
          <span>Chordy</span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <link.icon className="h-4 w-4" />
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="ml-auto flex items-center gap-2">
          <ThemeToggle />
          <UserMenu />
        </div>
      </div>
    </header>
  );
}
