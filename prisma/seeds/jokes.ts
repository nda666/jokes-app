import { PrismaClient } from "@prisma/client";
import * as faker from "faker/locale/id_ID";
// faker.setLocale("id_ID");

const prisma = new PrismaClient();
const categories = [
  "politik",
  "entertainment",
  "daylife",
  "fasion",
  "sindiran",
];
const tags = ["lucu", "dadjokes", "oke", "dewasa", "wanita", "pria"];

export default async function Jokes() {
  console.log("Seeding Joke...");
  const users = await prisma.user.findMany();
  users.forEach(async (user) => {
    const fakerRounds = faker.datatype.number({ min: 5, max: 20 });

    for (let i = 0; i < fakerRounds; i++) {
      const category = categories[faker.datatype.number(categories.length - 1)];
      const tag = tags[faker.datatype.number(tags.length - 1)];

      await prisma.joke.create({
        data: {
          user: {
            connect: {
              id: user.id,
            },
          },
          question: faker.random.words(
            faker.datatype.number({ min: 5, max: 20 })
          ),
          answer: faker.random.words(
            faker.datatype.number({ min: 2, max: 10 })
          ),

          category: {
            connectOrCreate: {
              where: {
                name: category,
              },
              create: {
                name: category,
                description: `Its sample deskripsi ${category}`,
              },
            },
          },
          tags: {
            connectOrCreate: {
              where: {
                name: tag,
              },
              create: {
                name: tag,
              },
            },
          },
        },
      });
    }
  });
}
