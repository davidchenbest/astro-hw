import type { App } from 'vue';

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
    app.use(i18nPlugin, {
        greetings: {
            hello: 'Bonjour!'
        }
    })
};