import type { UserConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import Markdown from 'vite-plugin-md'
import Components from 'unplugin-vue-components/vite'

// https://vitejs.dev/config/
const config: UserConfig = {
  plugins: [
    Vue({
      include: [/\.vue$/, /\.md$/]
    }),
    Pages({
      pagesDir: 'src/pages',
      extensions: ['md', 'vue']
    }),
    Markdown({
      headEnabled: true
    }),
    Components({
      extensions: ['vue', 'md'],
    }),
  ],
  ssgOptions: {
    script: 'async',
    formatting: 'prettify',
  },
}

export default config
