import autoprefixer from 'autoprefixer';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [
        autoprefixer, // Only include autoprefixer here
      ],
    },
  },
});

function defineConfig(config: { plugins: any[]; css: { postcss: { plugins: any[]; }; }; }) {
  return config;
}
