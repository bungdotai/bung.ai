import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function DELETE(
  _req: Request,
  { params }: { params: { id: string; attendeeId: string } }
) {
  await prisma.attendee.delete({ where: { id: params.attendeeId } });
  return NextResponse.json({ ok: true });
}
