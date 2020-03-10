import axios from 'axios';
import store from '@/store/store';
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
                Message.error('请求出错');
                break;
            case 401:
                Message.warning('授权失败，请重新登录');
                // store.commit('LOGIN_OUT');
                // setTimeout(() => {
                //     window.location.reload();
                // }, 1000);
                return;
            case 403:
                Message.error('拒绝访问');
                break;
            case 404:
                Message.error('请求资源未找到');
                break;
            case 500:
                Message.error('服务器错误');
                break;
        }
        return status >= 200 && status < 300;
    }
});

// 添加请求拦截器
instance.interceptors.request.use(
    config => {
        // 请求头添加token
        if (store.state.userInfo.userToken) {
            config.headers.Authorization = store.state.userInfo.userToken;
        }
        // console.log('发起请求，config：', config);
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

// 响应拦截器  异常处理+http请求剥离
instance.interceptors.response.use(
    res => {
        if (res.status === 200) {
            return res.data;
        } else {
            Message.warning(res.statusText);
            return res.data;
        }
    },
    error => {
        Message.error('服务器返回数据异常');
        console.error('Error:', error);
        return Promise.reject(error);
    }
);

// 所有请求最终返回数据，不包含描述信息
http.get = function(url, options) {
    return new Promise((resolve, reject) => {
        instance.get(url, options).then(
            res => {
                if (res.code === 0) {
                    resolve(res);
                } else {
                    Message.error(res.msg);
                    reject(res);
                }
            },
            res => reject(res)
        );
    });
};

http.post = function(url, data, options) {
    return new Promise((resolve, reject) => {
        instance.post(url, data, options).then(
            res => {
                if (res.code === 0) {
                    Message.success('ok');
                    resolve(res.data);
                } else {
                    Message.error(res.msg);
                    reject(res);
                }
            },
            res => reject(res)
        );
    });
};

export default http;
