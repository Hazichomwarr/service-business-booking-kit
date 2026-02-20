import { prisma } from "../lib/db";

async function main() {
  await prisma.service.deleteMany();

  await prisma.service.createMany({
    data: [
      { name: "Haircut & Beard", priceCents: 4000, durationMinutes: 45 },
      { name: "Inverted Bob", priceCents: 9000, durationMinutes: 90 },
      { name: "Bi-Level", priceCents: 10000, durationMinutes: 60 },
    ],
  });
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.log(e);
    await prisma.$disconnect();
    process.exit(1);
  });
