import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 定义状态
const store = new Vuex.Store({
    state: { author: 'Wise Wrong' },
    mutations: {
         // this.$store.commit('newAuthor','newVal');
        setState: function (state, val) {
            state.author = val;
        }
    }
})

export default store
