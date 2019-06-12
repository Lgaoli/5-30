import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate"
Vue.use(Vuex)



const store = new Vuex.Store({
    plugins: [createPersistedState()],
    state: {
        car: [],
        shopdetall: []
    },
    getters: {
        addlist: state => state.shopdetall,

    },
    mutations: {
        addlist(state, [shopdetall]) {
            state.shopdetall = shopdetall
        }
    },

    actions: {
        addlist({ commit, state }, products) {
            console.log(products)
            commit('addlist', products)    // 提交到mutations中处理    
        },

    }
})

export default store
