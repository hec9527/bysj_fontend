import API from '../API/api';
import URL from '../API/urls';

const get = {};

get.getSearchKeyWord = function(keyworld) {
    return API.get(URL.SEARCH_KEYWORLD + keyworld);
};

export default get;
