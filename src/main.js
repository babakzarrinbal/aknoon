import Vue from 'vue'
import App from './App.vue'
//registering service worker
require("./serviceworker/registerServiceWorker");



// bootstrap css
import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.min.js";

import "./styles/overall.scss"
// fast click to disable touch delay
var attachFastClick = require("fastclick");
attachFastClick.attach(document.body);




//subscribe user for push
// window.subscribeUser().then(window.console.log);

Vue.config.productionTip = false
new Vue({
  render: h => h(App),
}).$mount('#app')
