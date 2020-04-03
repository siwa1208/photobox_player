import Vue from 'vue'
import App from './App.vue'
import VueSilentbox from 'vue-silentbox';
import axios from 'axios';
import router from 'vue-router';

window.axios = axios.create({
    baseURL: 'https://tools.sopress.net/iut/coop/api/',
    headers: {'Authorization': "57893d7fc2266cdc2fefa77c0ed6a31a3ce35c07"},
});

Vue.use(VueSilentbox);

new Vue({
    router,
    VueSilentbox,
    render: h => h(App),
}).$mount('#app')
