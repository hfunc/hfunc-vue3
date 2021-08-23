import {App} from 'vue'

import * as components from './components'

export * from './components'

const install = (app: App): void => {
    Object.keys(components).forEach((c) => {
        app.use(components[c])
    })
}

export default {
    install
}