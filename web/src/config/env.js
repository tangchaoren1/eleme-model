import { operateCookie } from '@/config/Utils';

let baseUrl = '';
let imageUrl = '';
if (process.env.NODE_ENV === 'development') {
    baseUrl = 'http://127.0.0.1:3030';
    imageUrl = '';
} else {
    baseUrl = 'http://127.0.0.1:3030';
    imageUrl = '';
}

export {
    baseUrl,
    imageUrl
};
/**
 * 应用服务地址
 */
// export const getRequestUrlWithPath = (path) => {
//     let authUrl = 'http://121.199.23.170:8088';
//     let servUrl = 'http://114.55.108.208:7009';
//     if (path.indexOf('user/login') !== -1 || path.indexOf('oauth') !== -1) {
//         servUrl = authUrl;
//     } else if (path.indexOf('crback/') !== -1) {
//         servUrl = 'http://118.178.230.105:7004';
//     } else if (path.indexOf('/websocket') !== -1) {
//         servUrl = 'http://118.178.230.105:12003/';
//     } else if (path.indexOf('/car_resources/') !== -1) {
//         servUrl = 'http://114.55.108.208:7009/';
//     } else if (path.indexOf('/base/') !== -1) {
//         servUrl = 'http://121.199.23.170:8085';
//     } else if (path.indexOf('/user/') !== -1) {
//         servUrl = 'http://116.62.31.211:8081';
//     } else if (path.indexOf('/vehicle/') !== -1) {
//         servUrl = 'http://121.43.56.25:8082';
//     } else if (path.indexOf('/carshare/relay/') !== -1) {
//         servUrl = 'http://192.168.3.119:7076';
//     } else if (path.indexOf('carshare/') !== -1) {
//         servUrl = 'http://116.62.31.211:8086';
//     } else if (path.indexOf('/promotion/') !== -1) {
//         servUrl = 'http://116.62.31.211:8098';
//     } else if (path.indexOf('/msg/') !== -1) {
//         servUrl = 'http://121.199.23.170:8084';
//     } else if (path.indexOf('/powerpile/') !== -1) {
//         servUrl = 'http://118.178.230.105:8095';
//     } else if (path.indexOf('/auth/') !== -1) {
//         servUrl = authUrl;
//     } else if (path.indexOf('/cs/') !== -1) {
//         servUrl = 'http://118.178.230.105:8998';
//     } else if (path.indexOf('/bi/') !== -1) {
//         servUrl = 'http://114.55.109.27:7001';
//     } else if (path.indexOf('/selfdriving/') !== -1) {
//         servUrl = 'http://118.178.236.20:9000';
//     } else {
//         return 'http://114.55.108.208:7009/' + path + (path.indexOf('?') >= 0 ? '&' : '?') + 'oauth=' + operateCookie.getCookie('token');
//     }
//     return servUrl + '/' + path;
// };

// export const getServOauthUrl = (path) => { // 请求列表list接口时，需要带上用户的token
//     let aliasUrl = getRequestUrlWithPath(path);
//     return aliasUrl + (path.indexOf('?') >= 0 ? '&' : '?') + 'oauth=' + operateCookie.getCookie('token');
// };