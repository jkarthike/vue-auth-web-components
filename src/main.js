import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import * as firebase from "firebase";

Vue.config.productionTip = false;

const firebaseConfigOptions = {
    apiKey: "AIzaSyCE-vJ6PGylxYV918adbVYS5Go83dx4PWA",
    authDomain: "real-auth-d48df.firebaseapp.com",
    databaseURL: "https://real-auth-d48df.firebaseio.com",
    projectId: "real-auth-d48df",
    storageBucket: "real-auth-d48df.appspot.com",
    messagingSenderId: "311410935639",
    appId: "1:311410935639:web:420b1b2d46bfce53f92012"
};

firebase.initializeApp(firebaseConfigOptions);

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");
