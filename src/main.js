import * as Vue from "vue";
import App from "./App.vue";
import * as VueRouter from "vue-router";

const routes = [
  { path: "/", component: () => import("./components/about-me.vue") },
  { path: "/work", component: () => import("./components/work-history.vue") },
  { path: "/about", component: () => import("./components/about-me.vue") },
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes,
});

Vue.createApp(App).use(router).mount("#app");
