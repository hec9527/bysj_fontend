import cnn from './connect';
import URL from './urls';

const API = {};

API.getSearchKeyWord = function(keyworld) {
    return cnn.get(URL.SEARCH_KEYWORLD + keyworld);
};

API.fetchDailyPost = function() {
    // return cnn.get(URL.BING_DAILY_POST);

    return new Promise((res, rej) => {
        setTimeout(() => {
            Math.random() > 0.1
                ? res([
                      {
                          bgurl:
                              'http://cn.bing.com/th?id=OHR.PurpleWeekend_ZH-CN7324572668_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp',
                          title: '测试数据，这是测试数据',
                          date: Math.random() * 999999999999
                      },
                      {
                          bgurl:
                              'http://cn.bing.com/th?id=OHR.PurpleWeekend_ZH-CN7324572668_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp',
                          title: '测试数据，这是测试数据',
                          date: Math.random() * 999999999999
                      },
                      {
                          bgurl:
                              'http://cn.bing.com/th?id=OHR.PurpleWeekend_ZH-CN7324572668_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp',
                          title: '测试数据，这是测试数据',
                          date: Math.random() * 999999999999
                      },
                      {
                          bgurl:
                              'http://cn.bing.com/th?id=OHR.PurpleWeekend_ZH-CN7324572668_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp',
                          title: '测试数据，这是测试数据',
                          date: Math.random() * 999999999999
                      },
                      {
                          bgurl:
                              'http://cn.bing.com/th?id=OHR.PurpleWeekend_ZH-CN7324572668_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp',
                          title: '测试数据，这是测试数据',
                          date: Math.random() * 999999999999
                      },
                      {
                          bgurl:
                              'http://cn.bing.com/th?id=OHR.PurpleWeekend_ZH-CN7324572668_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp',
                          title: '测试数据，这是测试数据',
                          date: Math.random() * 999999999999
                      }
                  ])
                : rej({ message: '请求数据错误' });
        }, 1000);
    });
};

export default API;
