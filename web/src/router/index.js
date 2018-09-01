import Vue from 'vue';
import VueRouter from 'vue-router';
import login from '../page/login.vue'
Vue.use(VueRouter);
const routes = [
    {
        name: 'login',
        path: '/',
        title: 'UBI监控平台',
        component: login
    }
];

export const router = new VueRouter({
    routes
});
