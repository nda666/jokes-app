import { AppConfigInterface } from '@tiar-joke/core-interface';

const AppConfig = {
  app: <AppConfigInterface>{
    debug:
      process.env.APP_DEBUG?.toString().toLowerCase() === 'true' ? true : false,
    production:
      process.env.APP_PRODUCTION?.toString().toLowerCase() === 'true'
        ? true
        : false,
    name: process.env.APP_NAME || 'Nest App',
    version: process.env.APP_VERSION || '1.0.0',
    port: parseInt(process.env.APP_PORT) || 3000,
    log:
      process.env.APP_LOG?.toString().toLowerCase() === 'true' ? true : false,
    logLevel: process.env.APP_LOG_LEVEL || 'info',
    logDirectory: process.env.APP_LOGGING_DIRECTORY || './logs',
  },
};

export default AppConfig;
