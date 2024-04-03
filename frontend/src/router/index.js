import { createRouter, createWebHistory } from 'vue-router';
import App from '../App.vue';
import LogIn from '../components/LogIn.vue';
import Register from '../components/Register.vue';
import AdminView from "../views/AdminView.vue";
import UserView from "../views/UserView.vue";

const routes = [
    {
        path: '/',
        name: 'home',
        component: App
    },
    {
        path: '/login',
        name: 'LogIn',
        component: LogIn,
        meta: { requiresAuth: false }
    },
    {
        path: '/register',
        name: 'Register',
        component: Register,
        meta: { requiresAuth: false }
    },
    {
        path: '/admin',
        name: 'AdminView',
        component: AdminView,
        meta: { requiresAuth: true }
    },
    {
        path: '/user',
        name: 'UserView',
        component: UserView,
        meta: { requiresAuth: true }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;