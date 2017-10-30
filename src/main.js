// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// jQuery as required by Bootstrap JS
import jQuery from 'jquery'
global.jQuery = jQuery  
let Bootstrap = require('bootstrap-sass')
// Adding the CSS file manually as webpack is not loading 
// the CSS from the require call
require('../node_modules/bootstrap-sass/assets/stylesheets/_bootstrap.scss')

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
