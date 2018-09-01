
import Vue from 'vue';
// import iView from 'iview';
import App from './App.vue';
import { router } from './router/index';
import Vant from 'vant';
import 'vant/lib/vant-css/index.css';
Vue.use(Vant);
// import 'iview/dist/styles/iview.css';
import axios from 'axios';
// Vue.use(iView);
Vue.prototype.$http = axios;
new Vue({
    el: '#app',
    router,
    render: h => h(App)
});
