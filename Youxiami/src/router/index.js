import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Index from "@/components/Index.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    redirect: "/index",
    children: [
      {
        path: "/index",
        name: "Index",
        component: Index,
      },
    ],
  },
  {
    path: "/search",
    name: "Search",
    component: () => import("../views/Search.vue"),
  },
  {
    path: "/gusslikeContent",
    name: "GusslikeContent",
    component: () => import("../views/GusslikeContent.vue"),
  },
  {
    path: "/huoguo",
    name: "Huoguo",
    component: () => import("../views/Huoguo.vue"),
    children: [
      {
        path: "huoguo2",
        name: "Huoguo2",
        component: () => import("../views/Huoguo2.vue"),
      },
      {
        path: "huoguoCon/:id",
        name: "HuoguoCon",
        component: () => import("../views/HuoguoCon.vue"),
      },
    ],
  },
  {
    path: "/regist",
    name: "Regist",
    component: () => import("../views/Regist.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
