import cnn from './connect';
import URL from './urls';

const API = {};

API.getSearchKeyWord = function(keyworld) {
    return cnn.get(URL.SEARCH_KEYWORLD + keyworld);
};

API.fetchDailyPost = function() {
    return cnn.get(URL.BING_DAILY_POST);
};

export default API;
