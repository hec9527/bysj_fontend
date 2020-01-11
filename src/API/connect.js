import axios from 'axios';
import store from '@/store/index';
import { baseUrl } from '../config/baseURL';
import { Message } from 'element-ui';

const http = {};

/**
 * 网络请求配置
 * 拦截所有请求并且做统一的容错处理
 */
const instance = axios.create({
    timeout: 10000,
    baseUrl,
    // 允许跨域发生cookie
    withCredentials: true,
    validateStatus(status) {
        switch (status) {
            case 400:
                Message({
                    showClose: true,
                    type: 'error',
                    message: '请求出错'
                });
                break;
            case 401:
                Message({
                    showClose: true,
                    type: 'warning',
                    message: '授权失败，请重新登录'
                });
                store.commit('LOGIN_OUT');
                setTimeout(() => {
                    window.location.reload();
                }, 1000);
                return;
            case 403:
                Message({
                    showClose: true,
                    type: 'warning',
                    message: '拒绝访问'
                });
                break;
            case 404:
                Message({
                    showClose: true,
                    type: 'warning',
                    message: '请求错误,未找到该资源'
                });
                break;
            case 500:
                Message({
                    showClose: true,
                    type: 'warning',
                    message: '服务端错误'
                });
                break;
        }
        return status >= 200 && status < 300;
    }
});

// 添加请求拦截器
instance.interceptors.request.use(
    config => {
        // 请求头添加token
        if (store.state.userToken) {
            config.headers.Authorization = store.state.userToken;
        }
        // console.log('发起请求，config：', config);
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

// 响应拦截器即异常处理
instance.interceptors.response.use(
    res => res.data,
    err => {
        Message({
            showClose: true,
            type: 'error',
            message: '服务器链接失败'
        });
        return Promise.reject(err.response);
    }
);

http.get = function(url, options) {
    return new Promise((resolve, reject) => {
        instance.get(url, options).then(
            res => {
                if (res.code === 0) {
                    resolve(res);
                } else {
                    Message({
                        showClose: true,
                        type: 'error',
                        message: res.msg
                    });
                    reject(res.msg);
                }
            },
            error => console.error('Error: ', error || '服务器请求错误')
        );
    });
};

http.post = function(url, data, options) {
    return new Promise((resolve, reject) => {
        instance.post(url, data, options).then(
            res => {
                if (res.code === 0) {
                    resolve(res);
                } else {
                    Message({
                        showClose: true,
                        type: 'error',
                        message: res.code
                    });
                    reject(res.message);
                }
            },
            error => console.error('Error: ', error || '服务器请求错误')
        );
    });
};

export default http;
