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
  {
    path: "/news",
    name: "News",
    component: () => import('./views/News.vue'),
  },
  {
    path: "/News_detail",
    name: "News_detail",
    component: () => import('./views/News_details.vue'),
  },
  {
    path: "/Grants",
    name: "Grants",
    component: () => import('./views/Grants.vue'),
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