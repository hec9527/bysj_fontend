import cnn from './connect';
import URL from './urls';

const API = {};

// 首页查询关键字
API.getSearchKeyWord = keyworld => cnn.get(URL.SEARCH_KEYWORLD + keyworld);

// 每日一图数据
API.fetchDailyPost = function() {
    // return cnn.get(URL.BING_DAILY_POST);

    // ! TODO 临时测试数据
    return new Promise((res, rej) => {
        setTimeout(() => {
            Math.random() > 0.99999
                ? res([
                      {
                          bgurl:
                              'http://cn.bing.com/th?id=OHR.PurpleWeekend_ZH-CN7324572668_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp',
                          title: '测试数据，这是测试数据',
                          key: Math.random() * 999999999999,
                          date: new Date()
                      },
                      {
                          bgurl:
                              'http://cn.bing.com/th?id=OHR.PurpleWeekend_ZH-CN7324572668_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp',
                          title: '测试数据，这是测试数据',
                          key: Math.random() * 999999999999,
                          date: new Date()
                      },
                      {
                          bgurl:
                              'http://cn.bing.com/th?id=OHR.PurpleWeekend_ZH-CN7324572668_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp',
                          title: '测试数据，这是测试数据',
                          key: Math.random() * 999999999999,
                          date: new Date()
                      },
                      {
                          bgurl:
                              'http://cn.bing.com/th?id=OHR.PurpleWeekend_ZH-CN7324572668_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp',
                          title: '测试数据，这是测试数据',
                          key: Math.random() * 999999999999,
                          date: new Date()
                      },
                      {
                          bgurl:
                              'http://cn.bing.com/th?id=OHR.PurpleWeekend_ZH-CN7324572668_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp',
                          title: '测试数据，这是测试数据',
                          key: Math.random() * 999999999999,
                          date: new Date()
                      },
                      {
                          bgurl:
                              'http://cn.bing.com/th?id=OHR.PurpleWeekend_ZH-CN7324572668_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp',
                          title: '测试数据，这是测试数据',
                          key: Math.random() * 999999999999,
                          date: new Date()
                      }
                  ])
                : rej({ message: '请求数据错误' });
        }, 1000);
    });
};

export default API;
