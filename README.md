# Chordy

Guitar chord & song viewer web application. ค้นหาคอร์ดกีต้าและดูคอร์ดเพลงได้ง่ายๆ ที่เดียวจบ

**Live Demo**: [https://chordy-orcin.vercel.app](https://chordy-orcin.vercel.app/)

## Features

- **Chord Library** — คอร์ดกีต้า 108+ คอร์ด พร้อมแผนภาพ SVG แสดงตำแหน่งนิ้ว
- **Song Viewer** — ดูคอร์ดเพลงแบบ inline พร้อม transpose key และ auto-scroll
- **Genre Filter** — แยกหมวดเพลงไทย / English พร้อม sub-genre
- **Favorites** — บันทึกเพลงโปรดด้วย Google Login
- **Dark Mode** — รองรับ light/dark theme

## Tech Stack

- **Framework**: Next.js 16 (App Router) + TypeScript
- **Styling**: Tailwind CSS v4 + shadcn/ui
- **Database**: MongoDB (Mongoose) + MongoDB Atlas
- **Auth**: NextAuth v5 + Google Provider
- **State**: Zustand
- **Validation**: Zod
- **Deploy**: Vercel

## Getting Started

```bash
# install dependencies
npm install

# copy env and fill in values
cp .env.example .env

# run dev server
npm run dev

# seed database (chords + songs)
# POST http://localhost:3000/api/seed
```

## Environment Variables

| Variable | Description |
|---|---|
| `MONGODB_URI` | MongoDB Atlas connection string |
| `AUTH_SECRET` | NextAuth secret (`npx auth secret`) |
| `AUTH_GOOGLE_ID` | Google OAuth client ID |
| `AUTH_GOOGLE_SECRET` | Google OAuth client secret |

## Scripts

```bash
npm run dev        # dev server (Turbopack)
npm run build      # production build
npm run start      # start production
npm run lint       # ESLint
npm run typecheck  # TypeScript check
```
