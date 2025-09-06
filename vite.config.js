import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    build: {
        outDir: 'dist',
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
            },
        },
    },
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src'),
            '@/components': resolve(__dirname, 'src/components'),
            '@/utils': resolve(__dirname, 'src/utils'),
            '@/stores': resolve(__dirname, 'src/stores'),
            '@/constants': resolve(__dirname, 'src/constants'),
            '@/hooks': resolve(__dirname, 'src/hooks'),
        },
    },
    server: {
        port: 8443,
    },
});
