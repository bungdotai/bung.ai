import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(
  _req: Request,
  { params }: { params: { id: string } }
) {
  const session = await prisma.session.update({
    where: { id: params.id },
    data: { endedAt: new Date() },
  });
  return NextResponse.json(session);
}
