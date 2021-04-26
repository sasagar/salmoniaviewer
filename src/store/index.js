import { createStore } from "vuex";

export default createStore({
  state: {
    current: {},
  },
  mutations: {
    mCurrent(state, payload) {
      state.current = payload;
    },
  },
  actions: {
    aCurrent(context, payload) {
      context.commit("mCurrent", payload);
    },
  },
  modules: {},
});
