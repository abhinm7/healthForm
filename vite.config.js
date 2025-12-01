// vite.config.js

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; // Example for React

// vitejs.dev
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, 
  },
});
