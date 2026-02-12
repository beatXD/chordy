import { Guitar } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto flex h-14 items-center justify-between px-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Guitar className="h-4 w-4" />
          <span>Chordy</span>
        </div>
        <p className="text-xs text-muted-foreground">
          Built with Next.js & Vercel
        </p>
      </div>
    </footer>
  );
}
