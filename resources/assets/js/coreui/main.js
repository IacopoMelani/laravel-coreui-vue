// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import Datepicker from 'vuejs-datepicker'
import { id } from 'vuejs-datepicker/dist/locale'
import App from './App'
import router from './router'
import store from './store'

Vue.use(BootstrapVue)

Vue.component('b-datepicker', {
  extends: Datepicker,
  props  : {
    bootstrapStyling: {
      type   : Boolean,
      default: true,
    },
    language: {
      type   : Object,
      default: () => id,
    },
  },
})

window.Vue = new Vue({
  el        : '#app',
  router    : router,
  store     : store,
  template  : '<App/>',
  components: {
    App,
  },
})
