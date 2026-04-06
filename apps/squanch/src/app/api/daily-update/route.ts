import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  const update = await prisma.dailyUpdate.findFirst({
    orderBy: { generatedAt: 'desc' },
  });

  if (!update) {
    return NextResponse.json({ content: 'No update yet. Get in the gym.', generatedAt: null });
  }

  return NextResponse.json({
    content: update.content,
    generatedAt: update.generatedAt.toISOString(),
  });
}
