import { readdir, readdirSync } from 'fs';
import path = require('path');

const config = () => {
  let mergedConfig = {};
  const dirName = './apps/nest/src/configs';
  const files = readdirSync(dirName);
  files.forEach((file) => {
    if (file !== 'index.ts') {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      const configPartial = require(`./${file}`);

      mergedConfig = {
        ...mergedConfig,
        ...configPartial.default,
      };
    }
  });

  return mergedConfig;
};

export default config;
