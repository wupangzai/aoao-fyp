import { createApp } from "vue";
import App from "./App.vue";

import router from "@/router";

import { initApp } from "@/components/common/dialog";

import packages from "@/packages"; // 三方库的引入
import registerDirectives from "@/directives";

import "@/assets/css/index.less"; // normalize.less

import AOS from "aos";
import "aos/dist/aos.css";

const app = createApp(App);

app.use(router);
app.use(packages);
app.use(registerDirectives); // 注册自定义指令

initApp(app); // 传入app实例给 useDialog hook，获取elementu组件等

AOS.init();

app.mount("#app");
