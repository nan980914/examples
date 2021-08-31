import Vue from "vue";

import Vuex from "./vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    name: "Nan",
    age: 22,
  },
  //getters中虽然是一个方法，但是用时，可以把他当作属性
  getters: {
    // 说白了，就是vue中data中的computed
    myName(state) {
      return state.name + "xi";
    },
  },
  // 改变状态：异步请求数据  事件
  mutations: {
    addAge(state, payload) {
      state.age += payload;
    },
    asyncSub(state, payload) {
      state.age -= payload;
    },
  },
  actions: {
    asyncSub({ commit }, payload) {
      setTimeout(() => {
        commit("asyncSub", payload);
      }, 1000);
    },
  },
});
