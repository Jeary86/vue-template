import Vue from 'vue'
import Vuex from 'vuex'
import ShareStore from "./store/ShareStore";
import AppStore from "./store/AppStore";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

  },
  mutations: {

  },
  actions: {

  },

  modules: {
    app: AppStore,
    share: ShareStore,
  }
})
