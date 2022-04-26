import { ScullyConfig } from '@scullyio/scully';

/** this loads the default render plugin, remove when switching to something else. */
import '@scullyio/scully-plugin-puppeteer';

export const config: ScullyConfig = {
  projectRoot: './src',
  projectName: 'scully-dynamic-route-test',
  outDir: './dist/static',
  routes: {
    '/stuff/:id': {
      type: 'ignored',
    },
  },
};
