import Vue from 'vue';
import AsyncComputed from 'vue-async-computed';
Vue.use(AsyncComputed)

import App from './App.vue'
import router from "./router";
import httpReq from "./adapters/http"
//registering service worker
require("./serviceworker/registerServiceWorker");

// bootstrap css
import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.min.js";

import "./styles/overall.scss"
import "./styles/transitions.scss"
// fast click to disable touch delay
var attachFastClick = require("fastclick");
attachFastClick.attach(document.body);
let EventBus = new Vue();
//subscribe user for push
// window.subscribeUser().then(window.console.log);
Vue.mixin({
  data: function() {
    return {
      Req:httpReq,
      EventBus
    };
  }
});

Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
