import { NextResponse } from "next/server";
import { getCatalog } from "@/lib/catalog";

export const runtime = "nodejs";

export async function GET() {
  return NextResponse.json({ products: await getCatalog(), mode: process.env.DATABASE_URL ? "neon" : "fallback" }, { headers: { "Cache-Control": "no-store" } });
}
