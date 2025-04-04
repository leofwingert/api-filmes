import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function seed() {
  await prisma.movie.create({
    data: {
      id: "1",
      title: "Inception",
      details:
        "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.",
      director: "Christopher Nolan",
      releaseDate: new Date("2010-07-16"),
      genre: "Science Fiction",
      reviews: undefined,
      slug: "inception",
    },
  });

  console.log("Database seeded");
  await prisma.$disconnect();
}

seed().catch((e) => {
  console.error(e);
  prisma.$disconnect();
  process.exit(1);
});
