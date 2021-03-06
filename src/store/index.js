import Vue from "vue";
import Vuex from "vuex";

import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";

// Modules
import shared from "./shared/index";
import jobs from "./jobs/index";
import companies from "./companies/index";

Vue.use(Vuex);

const state = {
  metadata: {
    title: "Jobs In Tech",
    description: ""
  }
};

export default new Vuex.Store({
  state,
  modules: {
    shared,
    jobs,
    companies
  },
  getters,
  mutations,
  actions,
  strict: true
});
