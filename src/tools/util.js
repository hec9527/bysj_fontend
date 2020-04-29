/**
 * @author    hec9527
 * @time      2019-10-18
 * @change    2020-04-18
 * @description
 *
 *     功能性函数
 */

import URL from '../API/urls';

// 账户校验规则
const patternCount = [
    { pattern: /^(.{0,6}|.{19,})$/, message: '请输入6到18位的用户名' },
    { pattern: /^\d/, message: '用户名不能使用数字开头' },
    { pattern: /['|"]/, message: '用户名不能包含单双引号' },
    { pattern: /[\u4e00-\u9fa5]/, message: '用户名不能使用汉字' }
];
// 密码校验规则
const patternPasswd = [
    { pattern: /^(.{0,6}|.{19,})$/, message: '请输入8到18位的密码' },
    { pattern: /[\u4e00-\u9fa5]/, message: '不能使用汉字作为密码' }
    // { pattern: /^/, message: '密码应该包含数字、字母、特殊字符中的2中类型' }
];

/**
 *  处理图片的地址，为每一个图片添加一个cover地址
 * @param {Array} data
 * @returns {Array}
 */
export function mapImageUrl(data) {
    return data.map(item => {
        item.cover = item.url.replace(/__\d*/, '__30');
        item.cover30 = item.cover;
        item.cover50 = item.url.replace(/__\d*/, '__50');
        item.cover70 = item.url.replace(/__\d*/, '__70');
        item.cover85 = item.url.replace(/__\d*/, '__85');
        item.cover100 = item.url;
        return item;
    });
}

/**
 * 将对象属性拼接成字符串
 * @param { String } url
 * @param { Object } option
 * @returns {String}
 */
export function parmasConcat(url, option) {
    let str = '';
    Object.keys(option).forEach(item => {
        str += `${item}=${option[item]}&`;
    });
    return url + '?' + str.slice(0, -1);
}

/**
 *
 * @param {String} str
 */
export function downloadImage(url) {
    const el = document.createElement('a');
    const lis = url.split('/');
    if (el.download) {
        el.download = lis[lis.length - 1];
        el.href = url;
    } else {
        el.download = lis[lis.length - 1];
        el.href = URL.BAIDU_IMAGE_DOWNLOADER + url;
    }
    el.click();
}

/**
 * 校验用户登录数据
 * @param {String} count
 * @param {String} passwd
 * @return {Object} {flag:Boolean, message:String}
 */
export function checklogin(count, passwd) {
    let fed = { flag: true, message: '' };
    const callback = (item, prop) => {
        if (item.pattern.test(prop)) {
            fed = { flag: false, message: item.message };
        }
        return true;
    };
    patternCount.every(item => callback(item, count));
    if (!fed.flag) return fed;
    patternPasswd.every(item => callback(item, passwd));
    return fed;
}

/**
 * 注册时校验用户数据
 * @param {String} count
 * @param {String} passwd1
 * @param {String} passwd2
 */
export function checkRegist(count, passwd1, passwd2) {
    if (passwd1 !== passwd2) {
        return { flag: false, message: '两次输入的密码不一致' };
    } else {
        return checklogin(count, passwd1);
    }
}

/**
 * 用户名保存在 localstorage 当中，方便再次登录时 不同填写用户名
 * @param {string} userName
 */
export function saveUserName(userName) {
    localStorage.setItem('userName', userName);
}

/**
 * 获取保存在 localstorage 当中的用户名
 * @returns {string}
 */
export function getUserName() {
    return localStorage.getItem('userName') || undefined;
}

/**
 * 序列化用户信息保存到sessionStorage
 * @param {string} userName
 * @param {string} token
 */
export function saveUserInfo(userName, token) {
    sessionStorage.setItem('userName', userName);
    sessionStorage.setItem('token', token);
}

/**
 *  从sessionStorage中获取用户信息
 */
export function getUserInfo() {
    const userName = sessionStorage.getItem('userName');
    const token = sessionStorage.getItem('token');
    return { userName, token };
}

/**
 * 删除 保存在 sessionstorage里面的用户信息
 */
export function delUserInfo() {
    sessionStorage.removeItem('userName');
    sessionStorage.removeItem('token');
}
