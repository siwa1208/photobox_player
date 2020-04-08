import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'

const vp = new VuexPersist({
    key: 'store',
    storage: window.localStorage
});

Vue.use(Vuex)

export default new Vuex.Store({
    plugins: [vp.plugin],

    state: {
        images : '',
        token : ''
    },

    mutations: {
        getToken(state, token){
            state.token = token
        },
        
        getImages(state, images){
            state.images = images
          }
    },

    actions: {},
    
    modules: {}
})