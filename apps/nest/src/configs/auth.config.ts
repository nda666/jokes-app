import { AuthConfigInterface } from '@tiar-joke/core-interface';

const AuthConfig = {
  auth: <AuthConfigInterface>{
    tokenExpiration: process.env.AUTH_TOKEN_EXPIRATION || '1d',
    refreshTokenExpiration: process.env.AUTH_REFRESH_TOKEN_EXPIRATION || '7d',
    secretKey: process.env.AUTH_SECRET_KEY || 'random-secret-key',
  },
};

export default AuthConfig;
