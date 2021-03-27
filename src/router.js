import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
// import { Trans} from '@/plugins/Translation'
import { SUPPORT_LOCALES, i18n, loadLocaleMessages, setI18nLanguage, getBrowserLocale } from './i18n'

function load(component) {
  // '@' is aliased to src/components
  return () => import(`@/views/${component}.vue`)
}

const routes = [{
  path: '/:locale',
  component: {
    template: "<router-view></router-view>"
  },
  children: [
    {
      path: "",
      name: "Home",
      component: Home,
    },
    {
      path: "rulers",
      name: "Rulers",
      component: load('Rulers'),
    },
    {
      path: "about",
      name: "About",
      component: load('About'),
    },
    {
      path: "history",
      name: "History",
      component: load('History'),
    },
    {
      path: "projects",
      name: "Projects",
      component: load('Projects'),
    },
    {
      path: "news",
      name: "News",
      component: load('News'),
    },
    {
      path: "news/:id",
      name: "NewsDetail",
      props: true,
      component: load('NewsDetail'),
    },
    {
      path: "grants",
      name: "Grants",
      component: load('Grants'),
    },
    {
      path: 'events',
      name: 'Events',
      component: load('Events'),
    },
    {
      path: 'docs',
      name: 'Docs',
      component: load('Docs'),
    },
    {
      path: 'search/:query',
      name: 'Search',
      component: load('Search'),
      props: true,
    },
    {
      path: ":catchAll(.*)",
      name: 'NotFound',
      component: load('NotFound'),
    },
  ]
},
{
  path: "/:catchAll(.*)",
  redirect() {
    return getBrowserLocale()
  }
}];
const router = createRouter({
  history: createWebHistory(),
  routes,

});

router.beforeEach(async (to, from, next) => {
  window.scrollTo(0, 0);
  const paramsLocale = to.params.locale

  const locale = getBrowserLocale()

  // use locale if paramsLocale is not in SUPPORT_LOCALES
  if (!SUPPORT_LOCALES.includes(paramsLocale)) {
    return next(`/${locale}`)
  }

  // load locale messages
  if (!i18n.global.availableLocales.includes(paramsLocale)) {
    await loadLocaleMessages(i18n, paramsLocale)
  }

  // set i18n language
  setI18nLanguage(i18n, paramsLocale)

  return next()
});

export default router;