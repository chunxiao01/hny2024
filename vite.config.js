import { fileURLToPath, URL } from "node:url"

import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import { VitePWA } from "vite-plugin-pwa"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        name: "新年快乐2024",
        description: "新年快乐，龙年大吉🐉！祝你天天开心，天天可爱！",
        theme_color: "#242424",
        icons: [
          {
            src: "/hny2024/icon192.svg",
            sizes: "192x192",
            type: "image/svg+xml"
          },
          {
            src: "/hny2024/icon512.svg",
            sizes: "512x512",
            type: "image/svg+xml"
          }
        ]
      },

      devOptions: {
        // 如果想在`vite dev`命令下调试PWA, 必须启用它
        enabled: true,
        // Vite在dev模式下会使用浏览器原生的ESModule，将type设置为`"module"`与原先的保持一致
        type: "module"
      }
    })
  ],
  base: "/hny2024/",
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url))
    }
  },
  server: {
    host: "0.0.0.0"
  }
})
