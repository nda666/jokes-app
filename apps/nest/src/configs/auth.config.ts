import { AuthConfigInterface } from '../interfaces/config/auth.interface';

const AppConfig = {
  auth: <AuthConfigInterface>{
    tokenExpiration: process.env.AUTH_TOKEN_EXPIRATION || '1d',
    refreshTokenExpiration: process.env.AUTH_REFRESH_TOKEN_EXPIRATION || '7d',
    secretKey: process.env.AUTH_SECRET_KEY || 'random-secret-key',
  },
};

export default AppConfig;
