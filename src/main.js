import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router'
import {routes} from "./routes"
import firebase from "firebase"
import {store} from "./store/store"

Vue.config.productionTip = false
Vue.use(VueRouter)
const router = new VueRouter({
  routes
})

var firebaseConfig = {
  apiKey: "AIzaSyBdEvgXEv09aIMlOfW0NziEd2kbilNa9uc",
  authDomain: "despachando-2fc59.firebaseapp.com",
  projectId: "despachando-2fc59",
  storageBucket: "despachando-2fc59.appspot.com",
  messagingSenderId: "719107669790",
  appId: "1:719107669790:web:9720ef2d506552fad6930f",
  measurementId: "G-WM9L18EYKY"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

new Vue({
  store,
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
