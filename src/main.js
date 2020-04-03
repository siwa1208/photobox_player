import Vue from 'vue'
import App from './App.vue'

import store from './store'
import router from './router'

//Bootstrap
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { CarouselPlugin } from 'bootstrap-vue'
Vue.use(CarouselPlugin)

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)



import VueSilentbox from 'vue-silentbox'

/*window.axios = axios.create({
    baseURL: 'https://tools.sopress.net/iut/coop/api/',
    headers: {'Authorization': "57893d7fc2266cdc2fefa77c0ed6a31a3ce35c07"},
});*/

Vue.use(VueSilentbox)

Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()

new Vue({
    store,
    router,
    VueSilentbox,
    render: h => h(App),
}).$mount('#app')
