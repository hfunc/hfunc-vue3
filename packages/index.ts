import {App} from 'vue'

import * as coms from './components'
export * from './components'

const install = (app: App): void => {
    Object.keys(coms).forEach((c) => {
        app.use(coms[c])
    })
}

export default {
    install
}