import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { name } = await req.json();

  // Upsert into known attendees
  await prisma.knownAttendee.upsert({
    where: { name },
    update: {},
    create: { name },
  });

  const attendee = await prisma.attendee.create({
    data: { sessionId: params.id, name },
  });

  return NextResponse.json(attendee);
}
