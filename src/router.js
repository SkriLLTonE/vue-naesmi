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
    path: "/Grants",
    name: "Grants",
    component: () => import('./views/Grants.vue'),
  },
  {
    path: '/NotFound',
    name: 'NotFound',
    component: () => import('./views/NotFound.vue'),
  },
  {
    path: '/Events',
    name: 'Events',
    component: () => import('./views/Events.vue'),
  },

];
const router = createRouter({
  history: createWebHistory(),
  routes,

});

export default router;