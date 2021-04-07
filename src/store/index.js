import { createApp } from "vue";
import { createStore } from "vuex";

const store = createStore({
  state: {
    theme: null,
    userInfo: {},
  },
  getters: {},
  mutations: {
    setting(state, [key, val]) {
      state[key] = val;
    },
  },
  actions: {},
});

export default store;
