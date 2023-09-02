import type { App } from 'vue';
import { createPinia } from 'pinia'

const i18nPlugin = {
    install: (app, options) => {
        // inject a globally available $translate() method
        app.config.globalProperties.$translate = (key) => {
            // retrieve a nested property in `options`
            // using `key` as the path
            return key.split('.').reduce((o, i) => {
                if (o) return o[i]
            }, options)
        }
    }
}

export default (app: App) => {
    const pinia = createPinia()
    app.use(pinia)
    app.use(i18nPlugin, {
        greetings: {
            hello: 'Bonjour!'
        }
    })
};