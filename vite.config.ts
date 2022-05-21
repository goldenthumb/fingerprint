import path from 'path';
import { defineConfig } from 'vite';
import packageJson from './package.json';

const fileName = {
  es: 'index.mjs',
  cjs: 'index.cjs',
  iife: 'index.iife.js',
};

module.exports = defineConfig({
  base: './',
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: packageJson.name,
      formats: ['es', 'cjs', 'iife'],
      fileName: (format) => fileName[format],
    },
  },
});
