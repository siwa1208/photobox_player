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
        comments : '',
        token : ''
    },

    mutations: {
        getToken(state, token){
            state.token = token
        },
        
        getCommentaires(state, commentaires){
            state.comments = commentaires
          }
    },

    actions: {},
    
    modules: {}
})