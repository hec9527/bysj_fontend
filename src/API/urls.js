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

// 获取指定分类的图片
URL.IMAGE_TYPE_DATA = baseUrl + '/a/get/getImageByCategory';

// 加载出错的图片
URL.IMAGES_LOAD_ERROR = baseUrl + '/a/get/imageLoadError';

// 百度图片下载API
URL.BAIDU_IMAGE_DOWNLOADER = 'http://image.baidu.com/search/down?tn=download&word=download&ie=utf8&fr=detail&url=';

export default URL;
