import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import { getStorage } from "../utils/localStorage";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/login",
        name: "Login",
        component: Login
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

router.beforeEach((to, from, next) => {
    if (to.path !== "/login") {
        const authToken = getStorage("auth-token");
        if (!authToken) {
            next({ path: "/login" });
        } else {
            next();
        }
    } else {
        next();
    }
});

export default router;
