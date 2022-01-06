import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';
import { User } from '@prisma/client';
import { PrismaModule } from '../../prisma/prisma.module';
describe('UserService', () => {
  let service: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserService],
      imports: [PrismaModule],
    }).compile();

    service = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('Should return array of users', async () => {
    const result: User[] = [
      {
        id: 2,
        email: 'Lolita.Tampubolon86@gmail.co.id',
        name: 'Padmi Novitasari S.Gz',
        password: '123456',
        birthday: new Date('1996-12-12'),
        createdAt: new Date('2021-11-10T13:00:07.000Z'),
        updatedAt: new Date('2021-11-10T13:00:07.000Z'),
        role: 'USER',
      },
    ];
    jest
      .spyOn(service, 'findAll')
      .mockImplementation((): Promise<User[]> => Promise.resolve(result));

    await expect(
      service.findAll({
        id: true,
        email: true,
        name: true,
        password: true,
        birthday: true,
        phone: true,
        createdAt: true,
        updatedAt: true,
        role: true,
      })
    ).resolves.toEqual(result);
  });
});
