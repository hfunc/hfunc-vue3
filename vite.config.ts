import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import {resolve} from 'path'

const abPath = (path: string) => {
    return resolve(__dirname, path)
}

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
    ],
    server: {
        fs: {
            allow: [abPath(".")]
        }
    },
    optimizeDeps: {
        entries: ["./index.html", "./components/index.ts"]
    },
    esbuild: {},
    build: {
        rollupOptions: {
            output: {
                exports: "named"
            },
        },
        outDir: abPath("lib"),
        assetsDir: abPath("lib/assets"),
        target: "modules",
        lib: {
            entry: abPath("components/index.ts"),
            name: "hfunc-vue3",
            fileName: "index",
            formats: ["es"],
        },
        cssCodeSplit: true
    },
    resolve: {
        alias: [
            {
                find: "hfunc-vue3/index.css",
                replacement: abPath("./lib/index.css")
            },
            {
                find: "hfunc-vue3",
                replacement: abPath("./lib/index.es.js")
            },
        ]
    },
    define: {}
})
