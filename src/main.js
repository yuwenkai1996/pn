// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from '@/store'

import Content from "@/components/Content"
import "@/assets/css.css"
import {Header,Button,Toast ,Navbar  ,Lazyload} from "mint-ui"
import ListItem from "@/components/ListItem"

Vue.use(Lazyload);

Vue.component(Header.name,Header);
Vue.component(Button.name,Button);
Vue.component("m-content",Content);
Vue.component("ListItem",ListItem);

Vue.config.productionTip = false
Vue.prototype.Toast=Toast;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
