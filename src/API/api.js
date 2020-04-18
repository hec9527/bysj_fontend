import cnn from './connect';
import URL from './urls';
import { parmasConcat } from '../tools/util';

const API = {};

// TODO 优化 将API的调用集中在一个文件中，其它地方直接调用这个文件的方法即可，方便统一的修改维护

// 首页查询关键字
API.fetchKeyWorkds = opt => {
    const url = parmasConcat(URL.SEARCH_KEYWORLD, opt);
    return cnn.get(url);
};

// 查询图片分类信息
API.fetchAllCategory = () => {
    return cnn.get(URL.IMAGES_TYPE_INFO);
};

// 查询指定分类的图片信息
API.fetchCategoryImage = opt => {
    const url = parmasConcat(URL.IMAGE_TYPE_DATA, opt);
    return cnn.get(url);
};

// TODO 处理图片加载出错的问题
// 处理图片加载出错的问题
API.feedImageLoadError = opt => {
    const url = parmasConcat(URL.IMAGES_LOAD_ERROR, opt);
    return cnn.get(url);
};

// bing每日一图数据
API.fetchDailyPost = () => {
    return cnn.get(URL.BIYING_SEVERN_DAY);
};

// 获取每日英语数据
API.fetchDailyEnglish = () => {
    return cnn.get(URL.ENGLIST_DAILY_POST);
};

// 用户登录
API.PostUserLogin = data => {
    return cnn.post(URL.USER_LOGIN, data);
};

// 用户登录
API.PostUserRegist = data => {
    return cnn.post(URL.USER_REGIST, data);
};

// 获取用户所有信息
API.fetchUserInfoAll = () => {
    return cnn.get(URL.GET_USER_INFO_ALL);
};

// 转发
API.forwardRequest = url => {
    return cnn.get(URL.FORWRAD_REQUEST + `?url=${url}`);
};

export default API;
