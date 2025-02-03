import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import react from '@vitejs/plugin-react-swc';
import svgr from "vite-plugin-svgr";
import path from 'path';

export default defineConfig({
    base: '/portfolio',
    plugins: [
        react(),
        svgr(),
        viteStaticCopy({
            targets: [
                {
                    src: '404.html', 
                    dest: '' 
                }
            ]
        })
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'), // Alias för "@" som pekar till "src"
        },
    },
    server: {
        open: true, // Öppnar projektet automatiskt i webbläsaren
    },
    assetsInclude: ['**/*.JPG', '**/*.jpg', '**/*.PNG'],

});
