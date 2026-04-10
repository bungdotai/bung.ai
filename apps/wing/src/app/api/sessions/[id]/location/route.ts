import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { findNearestWingdome } from "@/lib/wingdome";

export async function POST(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { lat, lng } = await req.json();
  const name = findNearestWingdome(lat, lng);

  const location = await prisma.locationEntry.create({
    data: { sessionId: params.id, name, lat, lng },
  });

  return NextResponse.json(location);
}
