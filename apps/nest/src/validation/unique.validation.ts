import { ValidationArguments, ValidatorConstraint } from 'class-validator';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { PrismaClient } from '.prisma/client';

interface UniqueValidationArguments extends ValidationArguments {
  constraints: [string, string, string, string, any];
}

@ValidatorConstraint({ name: 'unique', async: true })
@Injectable()
export class IsUnique {
  constructor(private prisma: PrismaService) {}
  public async validate<E>(value: string, args: UniqueValidationArguments) {
    const [title, prismaModel, field, except, exceptField] = args.constraints;
    const prisma = new PrismaClient();

    const where: any = { [field]: value };
    if (except && exceptField) {
      where[except] = { _neq: args.object[exceptField] };
    }
    const count = await prisma[prismaModel].count({
      where,
    });

    return count <= 0;
  }

  public defaultMessage(args: ValidationArguments) {
    const [Title] = args.constraints;
    const title = Title || 'Entity';
    return `${title} with the same '${args.property}' already exist`;
  }
}
