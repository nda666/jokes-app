import { PrismaClient, User } from "@prisma/client";
import * as faker from "faker/locale/id_ID";
import * as bcrypt from "bcrypt";
import Jokes from "./seeds/jokes";

const prisma = new PrismaClient();
const fakerUser = (): any => ({
  name: `${faker.name.firstName()} ${faker.name.lastName()}`,
  email: faker.internet.email(),
  password: bcrypt.hashSync("password", bcrypt.genSaltSync()),
  birthday: faker.date.past(30, new Date(2001, 0, 1)),
});

async function main() {
  const fakerRounds = 10;
  console.log("Seeding User...");
  /// --------- Users ---------------
  for (let i = 0; i < fakerRounds; i++) {
    await prisma.user.create({ data: fakerUser() });
  }
  await Jokes();
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
