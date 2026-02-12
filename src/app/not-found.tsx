import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Guitar } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4">
      <Guitar className="h-16 w-16 text-muted-foreground" />
      <h2 className="text-2xl font-bold">404 - Not Found</h2>
      <p className="text-muted-foreground">
        ไม่พบหน้าที่คุณต้องการ
      </p>
      <Button asChild>
        <Link href="/">กลับหน้าหลัก</Link>
      </Button>
    </div>
  );
}
