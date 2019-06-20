import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate"
Vue.use(Vuex)



const store = new Vuex.Store({
    plugins: [createPersistedState()],
    state: {
        addCart: [],
        shipping: [],
        token: ''
    },
    getters: {
        add: state => state,
        //获取token方法
        //判断是否有token,如果没有重新赋值，返回给state的token
        getToken(state) {
            if (!state.token) {
                state.token = localStorage.getItem('token')
            }
            return state.token
        },
        //商品总数
        totleCount(state) {
            let count = 0;
            state.addCart.forEach((good) => {
                count += good.count
            })
            return count
        },
        //商品总价
        totlemoney(state) {
            let supply_price = 0;
            state.addCart.forEach((good) => {
                supply_price += good.supply_price * good.count
            })
            return supply_price
        },
        //全选
        allcheck(state) {
            let allchecks = true;
            state.addCart.forEach((good) => {

                if (!good.checked) {
                    allchecks = false;
                    return
                }
            })
            return allchecks

        },
        //选中商品数量
        checkedcount(state) {
            let count = 0;
            state.addCart.forEach((good) => {
                if (good.checked) {
                    count += good.count;

                }
            })
            return count
        },
        //选中商品价格
        checkedmoney(state) {
            let money = 0;
            state.addCart.forEach((good) => {
                if (good.checked) {
                    money += good.count * good.supply_price;
                }
            })
            return money
        },
        checkedgoods(state) {
            let checkedgoods = []
            state.addCart.forEach((good) => {
                if (good.checked) {
                    checkedgoods.push(good)
                }
            })
            return checkedgoods
        }

    },
    mutations: {
        setToken(state, token) {
            console.log(token)
            state.token = token
          
        }, del_token(state) {
            state.token = ''
            sessionStorage.removeItem('token')
        },

        //添加到购物车并判断有没有，有则++
        addCart(state, data) {
            let Boff = true
            state.addCart.forEach((good) => {
                if (good.goods_id === data.goods_id) {
                    good.count++;
                    Boff = false
                }
            })
            if (Boff) {
                let goodsData = data
                Vue.set(goodsData, 'count', 1)
                Vue.set(goodsData, 'checked', true)
                state.addCart.push(goodsData)
            }
            console.log(state.addCart)

        },
        //删除商品
        delCart(state, id) {
            console.log(id)
            state.addCart.forEach((good, index) => {
                console.log(good)
                if (good.goods_id === id) {
                    state.addCart.splice(index, 1)
                    return
                }
            })
        },
        //增加商品数量
        plusCart(state, id) {
            state.addCart.forEach((good, index) => {
                console.log(good)
                if (good.goods_id === id) {
                    if (good.count >= 10) return
                    good.count++
                    return
                }
            })
        },
        //减少商品数量
        minCart(state, id) {
            state.addCart.forEach((good, index) => {
                console.log(good)
                if (good.goods_id === id) {
                    if (good.count <= 1) return
                    good.count--
                    return
                }
            })
        },
        checkGoods(state, id) {
            state.addCart.forEach((good, index) => {
                console.log(good)
                if (good.goods_id === id) {
                    good.checked = !good.checked
                    return
                }
            })
        }, checkedAll(state, checkedAll) {
            state.addCart.forEach((good, index) => {
                console.log(good)
                good.checked = !checkedAll
            })
        }

    },

    actions: {
        addTocart({ commit, state }, products) {

            commit('add', { id: products.goods_id })    // 提交到mutations中处理  
            // console.log(state.shopdetall)
        },

    }
})

export default store
