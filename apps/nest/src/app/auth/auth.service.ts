import { HttpException, Injectable } from '@nestjs/common';
import * as argon2 from 'argon2';
import { JwtService } from '@nestjs/jwt';
import { I18nRequestScopeService, I18nService } from 'nestjs-i18n';
import { ConfigService } from '@nestjs/config';
import { CoreUserService } from '@tiar-joke/core-user';
import { AuthConfigInterface } from '@tiar-joke/core-interface';
@Injectable()
export class AuthService {
  constructor(
    private userService: CoreUserService,
    private jwtService: JwtService,
    private i18nService: I18nRequestScopeService,
    private configService: ConfigService
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.userService.findOne({ username });
    if (user && (await argon2.verify(user.password, password))) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(email: string, password: string) {
    const user = await this.userService.findOne({ email });
    if (!user) {
      throw new HttpException(
        await this.i18nService.t('auth.INVALID_CREDENTIALS'),
        401
      );
    }
    const isValid = await argon2.verify(user.password, password);
    if (!isValid) {
      throw new HttpException(
        await this.i18nService.t('auth.INVALID_CREDENTIALS'),
        401
      );
    }
    const token = this.generateJwtToken(user);
    const refreshToken = this.generateRefreshToken(user);
    return { user, token, refreshToken };
  }

  public async generateJwtToken(user: any) {
    const jwtPayload = { id: user.id, email: user.email };
    return await this.jwtService.sign(jwtPayload);
  }

  public async generateRefreshToken(user: any) {
    const jwtPayload = { id: user.id, email: user.email };
    return await this.jwtService.sign(jwtPayload, {
      expiresIn:
        this.configService.get<AuthConfigInterface>('auth')
          .refreshTokenExpiration,
    });
  }
}
