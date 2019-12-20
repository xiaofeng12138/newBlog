import Vue from "vue";
import Vuex from "vuex";
import { getUsername } from '../utils/cookie'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token:'',
    userName:getUsername() || ''
  },
  mutations: {
    set_Token(state,value){
      state.token = value
    },

    set_userName(state,value){
      state.userName = value
    },
  },
  actions: {},
  modules: {}
});
