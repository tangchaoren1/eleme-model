// axios的配置
import axios from 'axios';
import { operateCookie } from '@/config/Utils';
const service = axios.create({
    // withCredentials: true
});
service.interceptors.request.use((config) => {
    if (operateCookie.getCookie('token')) {
        config.headers.Authorization = operateCookie.getCookie('token');
    }
    return config;
}, err => {
    return Promise.reject(err);
});
export default service;
