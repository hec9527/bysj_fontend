import cnn from './connect';
import URL from './urls';
import { parmasConcat } from '../tools/util';

const API = {};

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
    // return cnn.get(URL.ENGLIST_DAILY_POST)
    // ! TODO 测试  临时数据
    return new Promise((res, rej) => {
        setTimeout(() => {
            Math.random() > 0.1
                ? res({
                      code: 0,
                      message: 'ok',
                      data: {
                          title: 'taday english',
                          content: 'this is a day ,never so beautiful',
                          date: new Date(),
                          url:
                              'http://cn.bing.com/th?id=OHR.PurpleWeekend_ZH-CN7324572668_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp'
                      }
                  })
                : rej({
                      code: 1,
                      message: 'error'
                  });
        }, 100);
    });
};

// 转发
API.forwardRequest = url => {
    return cnn.get(URL.FORWRAD_REQUEST + `?url=${url}`);
};

export default API;
