import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import {resolve} from 'path'

const abPath = (path: string) => {
    return resolve(__dirname, path)
}

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    server: {
        fs: {
            allow: [abPath(".")]
        }
    },
    optimizeDeps: {
        entries: ["./index.html", "./packages/index.ts"]
    },
    build: {
        outDir: abPath("lib"),
        assetsDir: abPath("lib/assets"),
        target: "modules",
        lib: {
            entry: abPath("packages/index.ts"),
            name: "hfunc-vue3",
            fileName: "index",
            formats: ["es", "umd"],
        },
        cssCodeSplit: true
    },
    resolve: {
        alias: [
            {
                find: "@hfunc-vue3",
                replacement: abPath("./lib/index.es.js")
            }
        ]
    }
})
