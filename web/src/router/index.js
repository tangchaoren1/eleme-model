import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
const routes = [
    {
        name: 'login',
        path: '/',
        title: 'UBI监控平台',
        component: Main
    }
];

export const router = new VueRouter({
    routes
});
