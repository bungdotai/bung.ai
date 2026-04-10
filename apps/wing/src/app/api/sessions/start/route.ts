import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { findNearestWingdome } from "@/lib/wingdome";

export async function POST(req: Request) {
  const { lat, lng } = await req.json();

  const locationName =
    lat != null && lng != null
      ? findNearestWingdome(lat, lng)
      : "Wingdome Seattle";

  const session = await prisma.session.create({
    data: {
      locations: {
        create: {
          name: locationName,
          lat: lat ?? null,
          lng: lng ?? null,
        },
      },
    },
    include: {
      locations: true,
      attendees: true,
    },
  });

  return NextResponse.json(session);
}
