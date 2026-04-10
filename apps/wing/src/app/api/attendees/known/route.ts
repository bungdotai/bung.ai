import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const attendees = await prisma.knownAttendee.findMany({
    orderBy: { name: "asc" },
  });
  return NextResponse.json(attendees);
}
