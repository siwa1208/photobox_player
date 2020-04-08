import Vue from 'vue'
import App from './App.vue'

import store from './store'
import router from './router'

//Bootstrap
import {BootstrapVue, IconsPlugin} from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)


import VueSilentbox from 'vue-silentbox'
Vue.use(VueSilentbox)

Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()

new Vue({
    store,
    router,
    VueSilentbox,
    render: h => h(App),
}).$mount('#app')
