import cnn from './connect';
import URL from './urls';

const API = {};

// 首页查询关键字
API.fetchKeyWorkds = opt => {
    let url = URL.SEARCH_KEYWORLD + '?';
    Object.keys(opt).forEach(key => {
        url += `${key}=${opt[key]}&`;
    });
    return cnn.get(url);
};

// 查询图片分类信息
API.fetchAllCategory = () => {
    return cnn.get(URL.IMAGES_TYPE_INFO);
};

// bing每日一图数据
API.fetchDailyPost = () => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            Math.random() > 0.1
                ? res(
                      (() => {
                          const images = [
                              'http://h1.ioliu.cn/bing/QuebecWinter_ZH-CN1626582820_1920x1080.jpg',
                              'http://h1.ioliu.cn/bing/MalhamStars_ZH-CN4163177154_1920x1080.jpg',
                              'http://h1.ioliu.cn/bing/AcadiaSunrise_ZH-CN5619713848_1920x1080.jpg',
                              'http://h1.ioliu.cn/bing/MundoFalls_ROW9309097946_1920x1080.jpg',
                              'http://h1.ioliu.cn/bing/OtterCreekVT_ZH-CN0564511657_1920x1080.jpg',
                              'http://h1.ioliu.cn/bing/SeussianLandscape_ZH-CN0785428057_1920x1080.jpg'
                          ];
                          const arr = [];
                          for (let i = 0; i < images.length; i++) {
                              arr.push({
                                  bgurl: images[i],
                                  title: '【测试数据】特约记者@Steve',
                                  key: Math.random() * 999999999999,
                                  date: new Date()
                              });
                          }
                          return arr;
                      })()
                  )
                : rej({ message: '请求数据错误' });
        }, 200);
    });
    // return cnn.get(URL.BING_DAILY_POST);
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
