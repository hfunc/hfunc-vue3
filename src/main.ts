import {createApp} from "vue";

// @ts-ignore
import Hfunc from "@hfunc-vue3";
import App from "./App.vue";

let app = createApp(App).use(Hfunc).mount("#app")
