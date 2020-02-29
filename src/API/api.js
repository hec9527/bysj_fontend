import cnn from './connect';
import URL from './urls';

const API = {};

// 首页查询关键字
API.fetchKeyWorkds = keyworld => {
    return cnn.get(URL.SEARCH_KEYWORLD + keyworld);
};

// 每日一图数据
API.fetchDailyPost = () => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            Math.random() > 0.1
                ? res(
                      (() => {
                          const arr = [];
                          for (let i = 0; i < 10; i++) {
                              arr.push({
                                  bgurl:
                                      'http://cn.bing.com/th?id=OHR.PurpleWeekend_ZH-CN7324572668_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp',
                                  title: '测试数据，这是测试数据',
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

// 获取所有分类
API.fetchAllCategory = () => {};

export default API;
