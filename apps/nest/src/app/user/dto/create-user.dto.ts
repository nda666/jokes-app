export class CreateUserDto {
  data: ICreateUser;
}
class ICreateUser {
  email: string;
  password: string;
  birthday: string;
  name: string;
}
