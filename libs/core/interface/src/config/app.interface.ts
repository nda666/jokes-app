export interface AppConfigInterface {
  production: boolean;
  debug: boolean;
  name: string;
  version: string;
  port: number;
  log: boolean;
  logLevel: string;
  logDirectory?: string;
}
