import { baseUrl } from '../config/baseURL';

const URL = {};

// --------   基础路径    --------
URL.host = window.location.host;
URL.parmas = window.location.search;

// ----------    网络请求路径      ----------
// 关键字搜索
URL.SEARCH_KEYWORLD = baseUrl + '/a/get/home/keyworld';

// bing每日数据
URL.BING_DAILY_POST = baseUrl + '/a/get/list/bingDaily';

// 每日英语数据
URL.ENGLIST_DAILY_POST = baseUrl + '/a/get/list/englishDaily';

// 请求转发
URL.FORWRAD_REQUEST = baseUrl + '/a/get/forward';

// 图片的分类信息
URL.IMAGES_TYPE_INFO = baseUrl + '/a/get/getImageCategory';

export default URL;
