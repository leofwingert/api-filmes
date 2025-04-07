import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function seed() {
  await prisma.movie.createMany({
    data: [
      {
        title: "Inception",
        details:
          "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.",
        director: "Christopher Nolan",
        releaseDate: new Date("2010-07-16"),
        genre: "Science Fiction",
        slug: "inception",
      },
      {
        title: "The Dark Knight",
        details:
          "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.",
        director: "Christopher Nolan",
        releaseDate: new Date("2008-07-18"),
        genre: "Action",
        slug: "the-dark-knight",
      },
      {
        title: "Interstellar",
        details:
          "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
        director: "Christopher Nolan",
        releaseDate: new Date("2014-11-07"),
        genre: "Science Fiction",
        slug: "interstellar",
      },
      {
        title: "The Matrix",
        details:
          "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
        director: "The Wachowskis",
        releaseDate: new Date("1999-03-31"),
        genre: "Science Fiction",
        slug: "the-matrix",
      },
      {
        title: "Pulp Fiction",
        details:
          "The lives of two mob hitmen, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
        director: "Quentin Tarantino",
        releaseDate: new Date("1994-10-14"),
        genre: "Crime",
        slug: "pulp-fiction",
      },
    ],
  });

  console.log("Database seeded with movies");
  await prisma.$disconnect();
}

seed().catch((e) => {
  console.error(e);
  prisma.$disconnect();
  process.exit(1);
});