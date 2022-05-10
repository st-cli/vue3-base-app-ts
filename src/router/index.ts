import type { App } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import routes from './routes'

export const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})

export function setupRouter(app: App<Element>) {
    app.use(router)
}