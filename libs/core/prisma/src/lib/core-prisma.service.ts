import { INestApplication, Injectable, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaClient } from '@prisma/client';
import { AppConfigInterface } from '@tiar-joke/core-interface';
import * as bcrypt from 'bcrypt';

@Injectable()
export class CorePrismaService extends PrismaClient implements OnModuleInit {
  constructor(private config: ConfigService) {
    super({
      log: config.get<AppConfigInterface>('app')?.debug
        ? [
            { emit: 'event', level: 'query' },
            { emit: 'stdout', level: 'info' },
            { emit: 'stdout', level: 'warn' },
            { emit: 'stdout', level: 'error' },
          ]
        : [{ emit: 'stdout', level: 'error' }],
    });
  }
  async onModuleInit() {
    await this.$connect();
    /**
     * Create user password
     */
    this.$use(async (params, next) => {
      if (params.action == 'create' && params.model == 'User') {
        const user = params.args.data;
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(user.password, salt);
        user.password = hash;
        params.args.data = user;
      }
      if (params.action == 'update' && params.model == 'User') {
        const user = params.args.data;
        const salt = bcrypt.genSaltSync(10);
        if (user.password) {
          const hash = bcrypt.hashSync(user.password, salt);
          user.password = hash;
          params.args.data = user;
        }
      }
      return next(params);
    });
  }

  async enableShutdownHooks(app: INestApplication) {
    this.$on('beforeExit', async () => {
      await app.close();
    });
  }
}
