import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'



// bootstrap css
import "bootstrap/dist/css/bootstrap.min.css";

// fast click to disable touch delay
var attachFastClick = require("fastclick");
attachFastClick.attach(document.body);

//registering 
require("./serviceworker/registerServiceWorker");


//subscribe user for push
// window.subscribeUser().then(window.console.log);

Vue.config.productionTip = false
new Vue({
  render: h => h(App),
}).$mount('#app')
