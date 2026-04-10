import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const names = ["Julian", "Joe", "Adam", "Rob", "Nathan", "Andrew", "Mason"];

async function main() {
  for (const name of names) {
    await prisma.knownAttendee.upsert({
      where: { name },
      update: {},
      create: { name },
    });
  }
  console.log(`Seeded ${names.length} known attendees`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
