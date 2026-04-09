import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function DELETE(
  _req: NextRequest,
  { params }: { params: { id: string } }
) {
  const session = await getServerSession(authOptions);
  if (!session?.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const userId = (session.user as any).id;

  const lift = await prisma.lift.findUnique({ where: { id: params.id } });
  if (!lift) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
  if (lift.userId !== userId) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  await prisma.$transaction([
    prisma.pendingNotification.deleteMany({ where: { liftId: params.id } }),
    prisma.comment.deleteMany({ where: { liftId: params.id } }),
    prisma.reaction.deleteMany({ where: { liftId: params.id } }),
    prisma.lift.delete({ where: { id: params.id } }),
  ]);

  return NextResponse.json({ success: true });
}
