import {App, Plugin} from 'vue'
import Template from './src/index.vue'

Template.install = (app: App): void => {
    app.component("HTemplate", Template)
}

const _Template: typeof Template & Plugin = Template

export default _Template