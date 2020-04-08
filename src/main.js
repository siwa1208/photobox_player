import Vue from 'vue'
import App from './App.vue'

import store from './store'
import router from './router'
import axios from 'axios'

//Bootstrap
import {BootstrapVue} from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)

import VueSilentbox from 'vue-silentbox'
Vue.use(VueSilentbox)

Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()

new Vue({
    store,
    router,
    axios,
    VueSilentbox,
    render: h => h(App),
}).$mount('#app')
