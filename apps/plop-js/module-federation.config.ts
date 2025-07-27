import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'plop-js',
  exposes: {
    './Routes': 'apps/plop-js/src/app/remote-entry/entry.routes.ts',
  },
};

export default config;
