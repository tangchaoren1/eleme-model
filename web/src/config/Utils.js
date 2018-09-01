export const operateCookie = {
    /* 设置cookie */
    setCookie: function (name, value, expires, domain, path, secure) {
        var cookieText = '';
        cookieText += encodeURIComponent(name) + '=' + encodeURIComponent(value);
        if (expires instanceof Date) {
            cookieText += '; expires=' + expires.toGMTString();
        }
        if (path) {
            cookieText += '; path=' + path;
        }
        if (domain) {
            cookieText += '; domain=' + domain;
        }
        if (secure) {
            cookieText += '; secure';
        }
        document.cookie = cookieText;
    },
    /* 获取cookie */
    getCookie: function (name) {
        let cookieName = encodeURIComponent(name) + '=';
        let cookieStart = document.cookie.indexOf(cookieName);
        let cookieValue = '';
        if (cookieStart > -1) {
            var cookieEnd = document.cookie.indexOf(';', cookieStart);
            if (cookieEnd === -1) {
                cookieEnd = document.cookie.length;
            }
            cookieValue = decodeURIComponent(document.cookie.substring(cookieStart + cookieName.length, cookieEnd));
        }
        return cookieValue;
    },
    setTime: function (str) {
        var exp = new Date();
        let setTime = str * 60 * 1000;
        return exp.setTime(exp.getTime() + setTime);
    },
    /* 清除cookie */
    unset: function (name, domain, path, secure) {
        this.set(name, '', Date(0), domain, path, secure);
    }
};