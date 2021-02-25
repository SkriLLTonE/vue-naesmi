import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/rulers",
    name: "Rulers",
    component: () => import('./views/Rulers.vue'),
  },
  {
    path: "/about",
    name: "About",
    component: () => import('./views/About.vue'),
  },
  {
    path: "/history",
    name: "History",
    component: () => import('./views/History.vue'),
  },
  {
    path: "/projects",
    name: "Projects",
    component: () => import('./views/Projects.vue'),
  },
  // {
  //   path: "/rulers",
  //   name: "Rulers",
  //   component: Rulers,
  // },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;