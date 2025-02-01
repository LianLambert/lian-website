import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
    plugins: [vue()],
    css: {
        preprocessorOptions: {
            sass: {
                api: 'modern',
                implementation: require('sass-embedded'),
                silenceDeprecations: ["legacy-js-api"],
            },
            scss: {
                api: 'modern',
                implementation: require('sass-embedded'),
                silenceDeprecations: ["legacy-js-api"],
            },
        },
    },
});