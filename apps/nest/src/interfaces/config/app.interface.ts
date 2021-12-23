export interface AppConfigInterface {
  env: string;
  debug: boolean;
  name: string;
  version: string;
  port: number;
  log: boolean;
  logLevel: string;
  logDirectory?: string;
}
