import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Guitar,
  Music,
  Heart,
  ArrowRight,
  Search,
  ArrowUpDown,
  ScrollText,
} from "lucide-react";
import { ChordDiagram } from "@/components/chord/chord-diagram";

const SHOWCASE_CHORDS = [
  {
    name: "C",
    frets: [null, 3, 2, 0, 1, 0] as (number | null)[],
    fingers: [null, 3, 2, null, 1, null] as (number | null)[],
    baseFret: 1,
    barres: [] as number[],
  },
  {
    name: "G",
    frets: [3, 2, 0, 0, 0, 3] as (number | null)[],
    fingers: [2, 1, null, null, null, 3] as (number | null)[],
    baseFret: 1,
    barres: [] as number[],
  },
  {
    name: "Am",
    frets: [null, 0, 2, 2, 1, 0] as (number | null)[],
    fingers: [null, null, 2, 3, 1, null] as (number | null)[],
    baseFret: 1,
    barres: [] as number[],
  },
  {
    name: "F",
    frets: [1, 1, 2, 3, 3, 1] as (number | null)[],
    fingers: [1, 1, 2, 3, 4, 1] as (number | null)[],
    baseFret: 1,
    barres: [1] as number[],
  },
];

const features = [
  {
    icon: Guitar,
    title: "Chord Library",
    description: "คอร์ดกีต้ากว่า 100+ คอร์ด พร้อมแผนภาพตำแหน่งนิ้ว",
    href: "/chords",
  },
  {
    icon: Music,
    title: "Song Viewer",
    description: "ดูคอร์ดเพลง transpose key และ auto-scroll ขณะเล่น",
    href: "/songs",
  },
  {
    icon: Heart,
    title: "Favorites",
    description: "บันทึกเพลงโปรด เข้าถึงได้ทุกอุปกรณ์ด้วย Google Login",
    href: "/favorites",
  },
];

const steps = [
  { icon: Search, title: "ค้นหา", description: "เลือกคอร์ดหรือเพลง" },
  { icon: ArrowUpDown, title: "Transpose", description: "เปลี่ยน key ตามเสียง" },
  { icon: ScrollText, title: "เล่นเลย", description: "Auto-scroll แล้วเล่นตาม" },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-linear-to-b from-primary/5 via-transparent to-transparent" />

        <div className="container mx-auto flex flex-col items-center gap-6 px-4 py-12 text-center md:py-16">
          <div className="flex items-end gap-2 md:gap-4">
            {SHOWCASE_CHORDS.map((chord, i) => (
              <div
                key={chord.name}
                className={`flex flex-col items-center gap-0.5 ${
                  i === 0 || i === 3 ? "hidden sm:flex opacity-50" : ""
                }`}
              >
                <span className="text-xs font-bold text-primary">
                  {chord.name}
                </span>
                <div className="rounded-md border bg-card p-1.5">
                  <ChordDiagram
                    frets={chord.frets}
                    fingers={chord.fingers}
                    baseFret={chord.baseFret}
                    barres={chord.barres}
                    size="sm"
                    showFingers={false}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="max-w-lg space-y-2">
            <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
              Chordy
            </h1>
            <p className="text-sm text-muted-foreground">
              ค้นหาคอร์ดกีต้าและดูคอร์ดเพลงได้ง่ายๆ ที่เดียวจบ
            </p>
          </div>

          <div className="flex gap-2">
            <Button size="sm" asChild>
              <Link href="/chords">
                <Guitar className="mr-1.5 h-4 w-4" />
                Browse Chords
              </Link>
            </Button>
            <Button size="sm" variant="outline" asChild>
              <Link href="/songs">
                <Music className="mr-1.5 h-4 w-4" />
                Find Songs
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="border-t">
        <div className="container mx-auto px-4 py-8">
          <div className="grid gap-4 md:grid-cols-3">
            {steps.map((step, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <step.icon className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
                      {i + 1}
                    </span>
                    <h3 className="text-sm font-semibold">{step.title}</h3>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="border-t bg-muted/30">
        <div className="container mx-auto px-4 py-8">
          <div className="grid gap-3 md:grid-cols-3">
            {features.map((feature) => (
              <Link
                key={feature.href}
                href={feature.href}
                className="group flex items-start gap-3 rounded-lg border bg-card p-3 transition-colors hover:border-primary/30"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-primary/10">
                  <feature.icon className="h-4 w-4 text-primary" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-sm font-semibold">{feature.title}</h3>
                  <p className="text-xs text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Bottom */}
      <section className="border-t">
        <div className="container mx-auto flex flex-col items-center gap-3 px-4 py-10 text-center">
          <h2 className="text-lg font-bold">
            พร้อมเล่นกีต้าแล้วหรือยัง?
          </h2>
          <p className="text-sm text-muted-foreground">
            เริ่มค้นหาคอร์ดและเพลงโปรดของคุณได้เลย
          </p>
          <Button size="sm" asChild>
            <Link href="/chords">
              เริ่มต้นใช้งาน
              <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
