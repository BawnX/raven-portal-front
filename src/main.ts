import routes from 'virtual:generated-pages'
import { ViteSSG } from 'vite-ssg'
import App from './App.vue'

import "./assets/taillwind.scss"

export default ViteSSG(App, {routes})
