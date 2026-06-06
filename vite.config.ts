import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        loadPaths: [path.resolve(__dirname, 'src')],
        additionalData: (source: string, filepath: string) => {
          if (path.basename(filepath).startsWith('_')) return source;
          return `@use 'styles/variables' as *;\n@use 'styles/mixins' as *;\n${source}`;
        }
      }
    }
  }
});
