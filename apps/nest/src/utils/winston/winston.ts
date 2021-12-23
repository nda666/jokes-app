import * as winston from 'winston';
import 'winston-daily-rotate-file';

const errorStackTracerFormat = winston.format((info) => {
  if (info.meta && info.meta instanceof Error) {
    info.message = `${info.message} ${info.meta.stack}`;
  }
  return info;
});

export const winstonFormat = winston.format.combine(
  winston.format.errors({ stack: true }),
  winston.format.timestamp(),

  winston.format.json(),
  winston.format.prettyPrint(),
  errorStackTracerFormat()
);

const dailyRotateFile = new winston.transports.DailyRotateFile({
  filename: 'application-%DATE%.log',
  datePattern: 'YYYY-MM-DD',
  zippedArchive: false,
  maxSize: '20m',
  maxFiles: '14d',
  auditFile: `./logs/audit.json`,
  dirname: `./logs`, //path to where save lo
  level: `debug`,
});

export const winstonTransportStream = [
  dailyRotateFile,
  new winston.transports.Console({
    level: 'debug',
    format: winston.format.combine(
      winston.format.colorize(),
      winston.format.splat(),
      winston.format.simple()
    ),
  }),
];
