import Vuex from "vuex"
import Vue from "vue"

import user from "./modules/user"
import listpage from "./modules/listpage"
import detail from "./modules/detail"

Vue.use(Vuex);

const store= new Vuex.Store({
  modules:{
    user,listpage,detail
  }
})

export default store
