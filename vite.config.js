import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  base: "/contact-app/",
  plugins: [react()],
  server: { port: 3000 },
});
