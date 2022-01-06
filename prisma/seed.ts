import { PrismaClient, User } from '@prisma/client';
import * as faker from 'faker';
import * as argon2 from 'argon2';
import Jokes from './seeds/jokes';

const prisma = new PrismaClient();
const fakerUser = async (): Promise<any> => ({
  name: `${faker.name.firstName()} ${faker.name.lastName()}`,
  email: faker.internet.email(),
  password: await argon2.hash('password'),
  birthday: faker.date.past(30, new Date(2001, 0, 1)),
});

async function main() {
  const fakerRounds = 10;
  console.log('Seeding User...');
  /// --------- Users ---------------
  for (let i = 0; i < fakerRounds; i++) {
    await prisma.user.create({ data: await fakerUser() });
  }
  await Jokes();
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
