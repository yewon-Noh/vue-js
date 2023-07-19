import { createWebHistory, createRouter } from "vue-router";
import HomePage from "../views/HomePage.vue";
import AboutPage from "../views/AboutPage.vue";
import ErrorPage from "../views/ErrorPage.vue";

const routes = [
    { path : "/", name : "home", component : HomePage },
    { path: "/about", name: "about", component: AboutPage },
    { path : "/:pathMatch(.*)", name : "not-found", component : ErrorPage },
]

const router = createRouter({
    history : createWebHistory(),
    routes
});

export default router;