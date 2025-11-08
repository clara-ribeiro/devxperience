import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vitest/config';
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
import { playwright } from '@vitest/browser-playwright';

const dirname =
  typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url));

const useBrowser = process.env.STORYBOOK_BROWSER === '1' || process.env.STORYBOOK_BROWSER === 'true';

export default defineConfig({
  test: {
    plugins: [
      storybookTest({ configDir: path.join(dirname, '.storybook') }),
    ],
    environment: 'jsdom',
    setupFiles: ['.storybook/vitest.setup.ts'],
    browser: {
      enabled: useBrowser,
      headless: true,
      provider: playwright({}),
      instances: [{ browser: 'chromium' }],
    },
  },
});

