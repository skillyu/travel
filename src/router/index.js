import Vue from "vue";
import VueRouter from "vue-router";

import Home from "@/views/Home/Home.vue";
import City from "@/views/city/city.vue";
import Detail from "@/views/detail/detail.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/city",
    name: "city",
    component: City,
  },
  {
    path: "/detail/:id",
    name: "Detail",
    component: Detail,
  },
];

const router = new VueRouter({
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  },
});

export default router;
