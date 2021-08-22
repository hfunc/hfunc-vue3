import {createApp} from "vue";

// @ts-ignore
import Hfunc from "hfunc-vue3";
import "hfunc-vue3/index.css"
import App from "./App.vue";

let app = createApp(App).use(Hfunc).mount("#app")
