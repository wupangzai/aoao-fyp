import { createApp } from "vue";
import App from "./App.vue";

import { initApp } from "@/components/common/dialog";

import packages from "@/packages"; // 三方库的引入
import registerDirectives from "@/directives";

import "@/assets/css/index.less"; // normalize.less

const app = createApp(App);

app.use(packages);
app.use(registerDirectives); // 注册自定义指令

initApp(app); // 传入app实例给 useDialog hook，获取elementu组件等

app.mount("#app");
