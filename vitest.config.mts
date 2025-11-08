import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { defineConfig } from 'vitest/config';
import tsconfigPaths from 'vite-tsconfig-paths';

// Minimal Vitest config for unit tests (jsdom)
export default defineConfig({
  plugins: [tsconfigPaths()],
  test: {
    environment: 'jsdom',
    setupFiles: ['.storybook/vitest.unit.setup.ts'],
    deps: {
      external: ['@storybook/**'],
    },
  },
  resolve: {
    alias: {
      '@storybook/nextjs-vite': path.join(process.cwd(), '.storybook/__mocks__/nextjs-vite.ts'),
    },
  },
});

