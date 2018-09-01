import fetch from '../config/fetch';
export const login  = (pramas)=> fetch({
    url: '/home/login',
    type: 'post',
    data: pramas
})