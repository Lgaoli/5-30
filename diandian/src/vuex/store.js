import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    // 定义状态
    state: {
        cat_id: 1, inputzhi:''
    },
    mutations: {
        newAuthor(state,inputzhi){
            console.log(inputzhi)
            state.author = inputzhi


        }
    }
})

export default store