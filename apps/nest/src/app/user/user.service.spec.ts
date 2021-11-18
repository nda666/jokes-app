import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';
import { users } from '@prisma/client';
import { PrismaService } from '../../prisma/prisma.service';
describe('UserService', () => {
  let service: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserService, PrismaService],
    }).compile();

    service = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('Should return array of users', async () => {
    const result: users[] = [
      {
        id: 2,
        email: 'Lolita.Tampubolon86@gmail.co.id',
        name: 'Padmi Novitasari S.Gz',
        password: '123456',
        phone: '(+62)89650707848',
        createdAt: new Date('2021-11-10T13:00:07.000Z'),
        updatedAt: new Date('2021-11-10T13:00:07.000Z'),
        role: 'USER',
      },
    ];
    jest
      .spyOn(service, 'findMany')
      .mockImplementation((): Promise<users[]> => Promise.resolve(result));
    await expect(service.findMany()).resolves.toEqual(result);
  });
});
