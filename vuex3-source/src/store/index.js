import Vue from 'vue'
import Vuex from '@/vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    age: 10
  },
  // 相当于计算属性
  getters: {
    changeAge(state) {
      return state.age + 5
    }
  },
  // 同步修改数据
  mutations: {
    addAge(state, data) {
      state.age += data
    }
  },
  //异步修改数据
  actions: {
    ayAge({ commit }, data) {
      setTimeout(() => {
        commit('addAge', data)
      }, 1000);
    }
  },
  modules: {
  }
})
