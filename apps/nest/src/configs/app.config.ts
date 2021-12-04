import { AppConfigInterface } from '../interfaces/config/app.interface';

const AppConfig = {
  app: <AppConfigInterface>{
    debug:
      process.env.APP_DEBUG?.toString().toLowerCase() === 'true' ? true : false,
    env: process.env.NODE_ENV || 'development',
    name: process.env.APP_NAME || 'Nest App',
    port: parseInt(process.env.APP_PORT) || 3000,
    logging: true,
    loggingLevel: process.env.APP_LOGGING_LEVEL || 'info',
  },
};

export default AppConfig;
