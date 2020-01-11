import { baseUrl } from '../config/baseURL';

const URL = {};

// --------   基础路径    --------
URL.host = window.location.host;
URL.parmas = window.location.search;

// ----------    网络请求路径      ----------

// 关键字搜索
URL.SEARCH_KEYWORLD = baseUrl + '/a/get/list/keyworld?kw=';

// 每日数据
URL.BING_DAILY_POST = baseUrl + 'a/get/list/bingDaily';

export default URL;
