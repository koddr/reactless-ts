import { resolve } from 'path';
import { defineConfig } from 'vite';
import { minifyHtml } from 'vite-plugin-html';
import ViteFonts from 'vite-plugin-fonts';
import prefresh from '@prefresh/vite';

export default defineConfig({
  resolve: {
    alias: {
      __: resolve(__dirname, './src'),
      react: 'preact/compat',
      'react-dom': 'preact/compat',
    },
  },
  esbuild: {
    jsxFactory: 'h',
    jsxFragment: 'Fragment',
    jsxInject: `import { h, Fragment } from 'preact'`,
  },
  plugins: [
    prefresh(),
    ViteFonts({
      google: {
        families: [
          {
            name: 'Inter',
            styles: 'wght@400;600;800',
          },
        ],
      },
    }),
    minifyHtml(),
  ],
});
