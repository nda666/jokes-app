import { registerEnumType } from '@nestjs/graphql';

export enum users_role {
  USER = 'USER',
  ADMIN = 'ADMIN',
  SUPERADMIN = 'SUPERADMIN',
}

registerEnumType(users_role, { name: 'users_role', description: 'undefined' });
