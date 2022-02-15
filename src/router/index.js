import Vue from "vue";
import VueRouter from "vue-router";
import Creator from "../views/creatorPage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/creator",
    alias: "/",
    name: "create",
    component: Creator,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
