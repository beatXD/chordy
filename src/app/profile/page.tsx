import type { Metadata } from "next";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import dbConnect from "@/lib/db";
import User from "@/models/user.model";

export const metadata: Metadata = {
  title: "Profile",
  description: "โปรไฟล์ของคุณ",
};

export default async function ProfilePage() {
  const session = await auth();
  if (!session?.user) {
    redirect("/");
  }

  await dbConnect();
  const user = await User.findById(session.user.id).lean();
  const favCount = user?.favoriteSongs?.length || 0;

  return (
    <div className="container mx-auto max-w-lg space-y-6 px-4 py-8">
      <h1 className="text-2xl font-bold">Profile</h1>

      <Card>
        <CardContent className="flex flex-col items-center gap-4 p-6">
          {session.user.image && (
            <Image
              src={session.user.image}
              alt={session.user.name || ""}
              width={80}
              height={80}
              className="rounded-full"
            />
          )}
          <div className="text-center">
            <h2 className="text-xl font-semibold">{session.user.name}</h2>
            <p className="text-sm text-muted-foreground">
              {session.user.email}
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="flex items-center justify-between p-4">
          <div className="flex items-center gap-3">
            <Heart className="h-5 w-5 text-red-500" />
            <div>
              <p className="font-medium">Favorite Songs</p>
              <p className="text-sm text-muted-foreground">
                {favCount} เพลง
              </p>
            </div>
          </div>
          <Button variant="outline" size="sm" asChild>
            <Link href="/favorites">View</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
