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
    path: "/news/:id",
    name: "NewsDetail",
    props: true,
    component: () => import('./views/NewsDetail.vue'),
  },
  {
    path: "/grants",
    name: "Grants",
    component: () => import('./views/Grants.vue'),
  },
  {
    path: '/events',
    name: 'Events',
    component: () => import('./views/Events.vue'),
  },
  {
    path: '/docs',
    name: 'Docs',
    component: () => import('./views/Docs.vue'),
  },
  {
    path: '/search/:query',
    name: 'Search',
    component: () => import('./views/Search.vue'),
    props: true,
  },
  {
    path: "/:catchAll(.*)",
    name: 'NotFound',
    component: () => import('./views/NotFound.vue'),
  },

];
const router = createRouter({
  history: createWebHistory(),
  routes,

});

export default router;