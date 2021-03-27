import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'
import { i18n } from './i18n'
// import { Trans } from './plugins/Translation'


const app = createApp(App)

// const i18nRoute = Trans.i18nRoute.bind(Trans)

// app.config.globalProperties.$i18nRoute = i18nRoute


const i18nRoute = (to) => {
    return {
        ...to,
        params: {
            locale: i18n.global.locale.value,
            ...to.params
        }
    }
}
app.config.globalProperties.$i18nRoute = i18nRoute


app.use(i18n)

import AOS from "aos";
import "aos/dist/aos.css";
app.AOS = new AOS.init({});

app.directive('click-outside', {
    beforeMount(el, binding) {
        el.clickOutsideEvent = function (event) {
            if (!(el === event.target || el.contains(event.target))) {
                binding.value(event, el);
            }
        };
        document.body.addEventListener('click', el.clickOutsideEvent);
    },
    unmounted(el) {
        document.body.removeEventListener('click', el.clickOutsideEvent);
    }
});
app.use(router)
app.mount('#app')

