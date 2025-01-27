import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

export default defineConfig({
    base: '/portfolio/',
    plugins: [
        react(),
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
