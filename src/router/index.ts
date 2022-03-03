import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Layout from "@/components/Layout/index.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Layout",
    component: Layout,
    children: [
      {
        path: "/",
        name: "Home",
        component: () =>
          import(/* webpackChunkName: "home" */ "../views/home/index.vue"),
      },
      {
        path: "/explore",
        name: "Explore",
        component: () =>
          import(/* webpackChunkName: "explore" */ "../views/explore/index.vue"),
      },

      {
        path: "/topic",
        name: "Topic",
        component: () =>
          import(/* webpackChunkName: "topic" */ "../views/topic/index.vue"),
      },
    ],
  },
  {
    path: "/editor",
    name: "Editor",
    component: () => import(/* webpackChunkName: "editor" */ "../views/editor/index.vue"),
  } 
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
